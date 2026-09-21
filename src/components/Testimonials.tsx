import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle, Quote, PlusCircle, X, Send, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ReviewItem {
  id?: string;
  name: string;
  role: string | null;
  company: string | null;
  rating: number;
  created_at?: string;
  comment?: string | null;
}

// ⚡ 3D Interactive Tilt Review Card
function TiltReviewCard({ rev, index }: { rev: ReviewItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
        className="group relative h-full rounded-3xl p-[1.5px] overflow-hidden bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-[0_15px_30px_-10px_rgba(0,0,0,0.9),0_0_20px_rgba(245,158,11,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(245,158,11,0.25)] transition-shadow duration-500 flex flex-col justify-between"
      >
        {/* 3D Rotating Golden Neon Border Ring on Hover */}
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Card Inner Body */}
        <div className="relative h-full w-full rounded-[23px] p-6 sm:p-7 bg-[#0c0d15]/95 border border-white/[0.08] group-hover:border-amber-400/40 backdrop-blur-2xl flex flex-col justify-between overflow-hidden transition-colors duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              {/* Stars */}
              <div className="flex gap-1 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                {[...Array(5 - rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-slate-700" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-white/10 group-hover:text-amber-400/40 transition-colors" />
            </div>

            {/* Comment Body */}
            <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
              {rev.comment?.trim() ? `"${rev.comment}"` : `Rated ${rev.rating} out of 5 stars — Excellent verified experience.`}
            </p>
          </div>

          {/* User Info Bar */}
          <div className="pt-4 border-t border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-400/40 flex items-center justify-center font-bold text-amber-300 text-sm shadow-[0_0_10px_rgba(245,158,11,0.2)]">
              {rev.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
                <span>{rev.name}</span>
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {rev.role || 'Client'}{rev.company ? `, ${rev.company}` : ''}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    rating: 5,
    comment: '',
  });

  // 🔄 Supabase se Real Reviews Fetch Karna
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('client_reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setReviewsList(data);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // 📝 Real Review Submit Karna (Rating-only OR Rating + Comment)
  const handlePostReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name to submit feedback.');
      return;
    }

    try {
      setSubmitting(true);
      
      const newReviewPayload = {
        name: formData.name.trim(),
        role: formData.role.trim() || 'Client',
        company: formData.company.trim() || 'Verified Partner',
        rating: formData.rating,
        comment: formData.comment.trim() || `${formData.rating}-Star Verified Client Experience.`,
      };

      const { data, error } = await supabase
        .from('client_reviews')
        .insert([newReviewPayload])
        .select();

      if (error) throw error;

      const insertedItem = (data && data[0]) ? data[0] : {
        ...newReviewPayload,
        id: Date.now().toString(),
        created_at: new Date().toISOString()
      };

      setReviewsList((prev) => [insertedItem, ...prev]);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false);
        setFormData({ name: '', role: '', company: '', rating: 5, comment: '' });
      }, 1500);

    } catch (err: any) {
      console.error('Error submitting review:', err);
      setErrorMessage(err?.message || 'Database error. Please check Supabase permissions.');
    } finally {
      setSubmitting(false);
    }
  };

  const totalReviews = reviewsList.length;
  const avgRating = totalReviews
    ? (reviewsList.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews).toFixed(1)
    : '5.0';

  return (
    <section id="reviews" className="relative py-24 lg:py-32 overflow-hidden bg-[#07080c] select-none">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
           <motion.div
  whileHover={{ scale: 1.04, y: -2 }}
  whileTap={{ scale: 0.96, y: 2 }}
  className="relative group p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_10px_22px_-6px_rgba(0,0,0,0.8),0_3px_8px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 inline-flex mb-4"
>
  {/* 3D Dynamic Rotating Neon Light Ring */}
  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

  {/* Button Inner Body with 3D Depth Bevel & Glassmorphism */}
  <div className="relative px-5 py-2 rounded-full bg-gradient-to-b from-[#161720] to-[#0a0a0f] border-t border-white/25 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover:from-[#1d1e2b] group-hover:to-[#0e0f17]">
    
    {/* Diagonal 3D Holographic Light Shimmer on Hover */}
    <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />

    {/* Subtle Inner Floor Ambient Glow */}
    <span className="absolute bottom-0 inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* 3D Elevated Icon & Label */}
    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
    <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-200 group-hover:text-amber-200 font-bold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
      Verified Client Feedback
    </span>
    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
  </div>
</motion.div>

            <h2 className="font-sans text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[1.1] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              Client{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]">
                Reviews
              </span>
            </h2>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-slate-300 font-mono">
                {totalReviews > 0 ? (
                  <>
                    <strong className="text-amber-300">{avgRating}</strong> / 5.0 ({totalReviews} {totalReviews === 1 ? 'review' : 'reviews'})
                  </>
                ) : (
                  'No reviews yet · Be the first!'
                )}
              </span>
            </div>
          </div>

          {/* 3D Animated "Write A Review" Button */}
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96, y: 2 }}
            onClick={() => {
              setErrorMessage(null);
              setIsModalOpen(true);
            }}
            className="relative group p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_10px_22px_-6px_rgba(0,0,0,0.8),0_3px_8px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 w-fit"
          >
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative px-6 py-3 rounded-full bg-gradient-to-b from-[#161720] to-[#0a0a0f] border-t border-white/25 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover:from-[#1d1e2b] group-hover:to-[#0e0f17]">
              <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />
              <span className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <PlusCircle className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-slate-200 group-hover:text-amber-200 font-bold transition-colors">
                Write A Review
              </span>
            </div>
          </motion.button>
        </div>

        {/* Dynamic Reviews Grid */}
        {loading ? (
          <div className="py-20 flex items-center justify-center text-amber-400">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        ) : reviewsList.length === 0 ? (
          <div className="p-12 text-center border border-white/5 bg-white/[0.01] rounded-3xl backdrop-blur-xl">
            <p className="text-slate-400 text-sm font-mono mb-4">No reviews have been posted yet.</p>
            <button
              onClick={() => {
                setErrorMessage(null);
                setIsModalOpen(true);
              }}
              className="text-xs uppercase tracking-wider font-mono text-amber-400 hover:underline cursor-pointer"
            >
              + Click here to leave the first review
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsList.map((rev, index) => (
              <TiltReviewCard key={rev.id || index} rev={rev} index={index} />
            ))}
          </div>
        )}
      </div>

      {/* Review Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              className="relative w-full max-w-lg bg-[#0d0e15] border border-amber-400/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 font-bold">
                  Real Client Feedback
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Leave A Review</h3>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  Give quick star rating or write a detailed review for Ashu Jha.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-amber-400 animate-bounce" />
                  <h4 className="font-bold text-lg text-white">Review Live!</h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Thank you! Your feedback has been added directly to our website.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePostReview} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Rating Selector */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs text-slate-400 font-mono">
                        Select Rating (Tap Star) *
                      </label>
                      <span className="text-xs font-mono text-amber-300 font-bold">
                        {formData.rating} Star{formData.rating > 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white/[0.02] border border-white/5 w-fit">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-1 text-slate-600 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-7 h-7 transition-colors ${
                              star <= (hoverRating || formData.rating)
                                ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]'
                                : 'text-slate-700'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400 block font-mono mb-1">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block font-mono mb-1">
                        Role (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Founder / Business Owner"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="text-xs text-slate-400 block font-mono mb-1">
                      Company / Brand Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Studio"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Comment (Optional) */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs text-slate-400 font-mono">
                        Review Comment (Optional)
                      </label>
                      <span className="text-[10px] font-mono text-slate-500">Leave blank for quick rating</span>
                    </div>
                    <textarea
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Share your experience (or leave empty to submit star rating only)..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none transition-colors"
                    />
                  </div>

                  {/* 3D Animated "Publish Review" Button */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.96, y: 2 }}
                    className="relative group/btn p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_12px_25px_-8px_rgba(0,0,0,0.8),0_4px_10px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 w-full mt-2 disabled:opacity-50"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-75 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    <div className="relative py-3 px-6 rounded-full bg-gradient-to-b from-[#161720] to-[#0a0a0f] border-t border-white/25 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover/btn:from-[#1d1e2b] group-hover/btn:to-[#0e0f17]">
                      <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover/btn:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />
                      <span className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                      {submitting ? (
                        <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-amber-400" />
                          <span className="font-mono text-xs uppercase tracking-widest text-slate-200 group-hover/btn:text-amber-200 font-bold transition-colors">
                            Publish Review
                          </span>
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}