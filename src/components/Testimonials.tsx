import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, CheckCircle, Quote, PlusCircle, X, Send, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ReviewItem {
  id?: string;
  name: string;
  role: string | null;
  company: string | null;
  rating: number;
  created_at?: string;
  comment: string;
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

  // 📝 Real Review Submit Karna
  const handlePostReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.comment.trim()) {
      setErrorMessage('Please fill in your name and review comment.');
      return;
    }

    try {
      setSubmitting(true);
      
      const newReviewPayload = {
        name: formData.name.trim(),
        role: formData.role.trim() || 'Client',
        company: formData.company.trim() || 'Verified Partner',
        rating: formData.rating,
        comment: formData.comment.trim(),
      };

      // Direct insert
      const { data, error } = await supabase
        .from('client_reviews')
        .insert([newReviewPayload])
        .select();

      if (error) throw error;

      // Agar data turant return hua toh use lein, warna local payload se instant screen update karein
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
    <section id="reviews" className="relative py-24 lg:py-32 overflow-hidden bg-[#07080c]">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
              Verified Client Feedback
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight">
              Client <span className="text-cyan-400">Reviews</span>
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-slate-300 font-mono">
                {totalReviews > 0 ? (
                  <>
                    <strong className="text-white">{avgRating}</strong> / 5.0 ({totalReviews} {totalReviews === 1 ? 'review' : 'reviews'})
                  </>
                ) : (
                  'No reviews yet · Be the first!'
                )}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              setErrorMessage(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] cursor-pointer w-fit"
          >
            <PlusCircle className="w-4 h-4" />
            Write A Review
          </button>
        </div>

        {/* Dynamic Reviews Container */}
        {loading ? (
          <div className="py-20 flex items-center justify-center text-cyan-400">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        ) : reviewsList.length === 0 ? (
          <div className="p-12 text-center border border-white/5 bg-white/[0.01] rounded-3xl">
            <p className="text-slate-400 text-sm font-mono mb-4">No reviews have been posted yet.</p>
            <button
              onClick={() => {
                setErrorMessage(null);
                setIsModalOpen(true);
              }}
              className="text-xs uppercase tracking-wider font-mono text-cyan-400 hover:underline cursor-pointer"
            >
              + Click here to leave the first review
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsList.map((rev, index) => (
              <motion.div
                key={rev.id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/40 transition-colors flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                      {[...Array(5 - rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-slate-700" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-white/10 group-hover:text-cyan-400/30 transition-colors" />
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center font-bold text-cyan-300 text-sm">
                    {rev.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
                      {rev.name}
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      {rev.role}{rev.company ? `, ${rev.company}` : ''}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Review Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative w-full max-w-lg bg-[#0d0e15] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400">
                  Real Client Feedback
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Leave A Review</h3>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  Share your honest experience working with Ashu Jha.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-400 animate-bounce" />
                  <h4 className="font-bold text-lg text-white">Review Live!</h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Thank you! Your review has been added to our website.
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
                    <label className="text-xs text-slate-400 block font-mono mb-2">
                      Select Rating (1 to 5 Stars) *
                    </label>
                    <div className="flex items-center gap-1.5">
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
                            className={`w-6 h-6 transition-colors ${
                              star <= (hoverRating || formData.rating)
                                ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                                : 'text-slate-700'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-mono text-cyan-300 ml-2">
                        {formData.rating} Star{formData.rating > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-400 block font-mono mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400/60"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-400 block font-mono mb-1">
                        Role / Designation
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Founder"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400/60"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="text-xs text-slate-400 block font-mono mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Tech Studio"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400/60"
                    />
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="text-xs text-slate-400 block font-mono mb-1">
                      Your Review *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Share your experience working with us..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                  >
                    {submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Publish Review
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}