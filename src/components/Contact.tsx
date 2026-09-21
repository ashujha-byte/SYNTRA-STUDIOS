import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Briefcase, Phone, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const YOUR_EMAIL = 'aetherixofficialsupport@gmail.com';

  // ⚡ 3D Tilt Physics for Form Container
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const service = form.service.trim();
    const message = form.message.trim();

    // 1. Name Check (Min 2 chars)
    if (!name || name.length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    // 2. Email Check
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    // 3. Phone Check
    const numericPhone = phone.replace(/\D/g, '');
    if (!phone || numericPhone.length < 10) {
      setErrorMessage('Please enter a valid phone or WhatsApp number with at least 10 digits.');
      return;
    }

    // 4. Service Requirement Check
    if (!service || service.length < 3) {
      setErrorMessage('Please describe what service or requirement you are looking for.');
      return;
    }

    // 5. Message Check
    if (!message || message.length < 10) {
      setErrorMessage('Please write a brief message about your project (at least 10 characters).');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Client Name': name,
          'Client Email': email,
          'Phone / WhatsApp': phone,
          'Service Needed': service,
          'Project Message': message,
          _subject: `New Lead: ${name} wants ${service}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await res.json();

      if (res.ok && data.success !== 'false') {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setErrorMessage(data.message || 'Please check your email inbox to activate FormSubmit first.');
        setStatus('idle');
      }
    } catch {
      setErrorMessage('Error submitting inquiry. Please connect directly via WhatsApp.');
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-[#07080c] select-none text-white">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* 💬 LEFT SIDE: Branding & Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 text-left"
          >
            {/* 3D Floating Pill */}
           <motion.div
  whileHover={{ scale: 1.04, y: -2 }}
  whileTap={{ scale: 0.96, y: 2 }}
  className="relative group p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_10px_22px_-6px_rgba(0,0,0,0.8),0_3px_8px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 inline-flex mb-6"
>
  {/* 3D Dynamic Rotating Neon Light Ring */}
  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

  {/* Button Inner Body with 3D Depth bevel & Glassmorphism */}
  <div className="relative px-5 py-2 rounded-full bg-gradient-to-b from-[#161720] to-[#0a0a0f] border-t border-white/25 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover:from-[#1d1e2b] group-hover:to-[#0e0f17]">
    
    {/* Diagonal 3D Holographic Light Shimmer on Hover */}
    <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />

    {/* Subtle Inner Floor Ambient Glow */}
    <span className="absolute bottom-0 inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* 3D Elevated Icon & Text */}
    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
    <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-200 group-hover:text-amber-200 font-bold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
      Get In Touch
    </span>
    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
  </div>
</motion.div>
            <h2 className="font-sans text-4xl lg:text-5xl font-black leading-[1.1] text-white uppercase tracking-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
              Let's build <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]">
                something great
              </span>
            </h2>

            <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg font-light">
              Tell us about your project. We'll get back to you within 24 hours with a clear roadmap, locked milestone schedule, and direct WhatsApp support.
            </p>

            <div className="mt-8 flex flex-col gap-3 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span>Immediate Project Scope Assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                <span>NDA &amp; Complete Source Code Handover</span>
              </div>
            </div>
          </motion.div>

          {/* 📝 RIGHT SIDE: 3D Tilt Glowing Form Card */}
          <div style={{ perspective: 1100 }} className="lg:col-span-6 w-full">
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
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative rounded-3xl p-[1.5px] overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.95),0_0_30px_rgba(245,158,11,0.12)] hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,1),0_0_40px_rgba(245,158,11,0.3)] transition-shadow duration-500"
            >
              {/* 3D Rotating Golden Neon Border Ring */}
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-80 transition-opacity duration-500 pointer-events-none" />

              {/* Form Inner Body */}
              <div className="relative rounded-[23px] p-6 sm:p-8 bg-[#0c0d15]/95 border border-white/[0.08] backdrop-blur-2xl overflow-hidden">
                
                {/* Diagonal Holographic Shimmer */}
                <span className="absolute -top-12 -bottom-12 -left-20 w-12 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none" />

                {status === 'success' ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                    <CheckCircle2 size={52} className="text-amber-400 animate-bounce drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]" />
                    <h4 className="font-sans font-bold text-2xl text-white">Message Dispatched!</h4>
                    <p className="text-xs text-slate-400 max-w-xs font-mono">
                      Your inquiry has been emailed to our engineering desk. We'll reply within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4 relative z-10">
                    {errorMessage && (
                      <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-300 mb-1.5 block font-mono">
                          Your Name <span className="text-amber-400">*</span>
                        </label>
                        <div className="relative group/input">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within/input:text-amber-400 transition-colors" />
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder=""
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 text-white text-sm placeholder-slate-500 focus:border-amber-400/80 focus:bg-white/[0.07] focus:outline-none transition-all shadow-inner"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-slate-300 mb-1.5 block font-mono">
                          Email Address <span className="text-amber-400">*</span>
                        </label>
                        <div className="relative group/input">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within/input:text-amber-400 transition-colors" />
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder=""
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 text-white text-sm placeholder-slate-500 focus:border-amber-400/80 focus:bg-white/[0.07] focus:outline-none transition-all shadow-inner"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone & Service */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-300 mb-1.5 block font-mono">
                          Phone / WhatsApp <span className="text-amber-400">*</span>
                        </label>
                        <div className="relative group/input">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within/input:text-amber-400 transition-colors" />
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder=""
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 text-white text-sm placeholder-slate-500 focus:border-amber-400/80 focus:bg-white/[0.07] focus:outline-none transition-all shadow-inner"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs text-slate-300 mb-1.5 block font-mono">
                          Service Requirement <span className="text-amber-400">*</span>
                        </label>
                        <div className="relative group/input">
                          <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within/input:text-amber-400 transition-colors" />
                          <input
                            type="text"
                            value={form.service}
                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                            placeholder=""
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 text-white text-sm placeholder-slate-500 focus:border-amber-400/80 focus:bg-white/[0.07] focus:outline-none transition-all shadow-inner"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs text-slate-300 mb-1.5 block font-mono">
                        Your Message / Goals <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative group/input">
                        <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-slate-500 group-focus-within/input:text-amber-400 transition-colors" />
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          rows={3}
                          placeholder=""
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 text-white text-sm placeholder-slate-500 focus:border-amber-400/80 focus:bg-white/[0.07] focus:outline-none transition-all resize-none shadow-inner"
                        />
                      </div>
                    </div>

                    {/* 3D Animated "Send Message" Button */}
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.96, y: 2 }}
                      className="relative group/btn p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_12px_25px_-8px_rgba(0,0,0,0.8),0_4px_10px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 w-full mt-2 disabled:opacity-50"
                    >
                      {/* 3D Dynamic Rotating Neon Light Ring */}
                      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-75 group-hover/btn:opacity-100 transition-opacity duration-500" />

                      {/* Button Inner Body with 3D Depth bevel & Glassmorphism */}
                      <div className="relative py-3.5 px-6 rounded-full bg-gradient-to-b from-[#161720] to-[#0a0a0f] border-t border-white/25 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover/btn:from-[#1d1e2b] group-hover/btn:to-[#0e0f17]">
                        
                        {/* Diagonal 3D Holographic Light Shimmer on Hover */}
                        <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover/btn:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />

                        {/* Subtle Inner Floor Ambient Glow */}
                        <span className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                        {status === 'loading' ? (
                          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-300 font-bold">
                            <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                            <span>Verifying &amp; Sending...</span>
                          </span>
                        ) : (
                          <span className="font-mono text-xs uppercase tracking-widest text-slate-200 group-hover/btn:text-amber-200 font-bold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2">
                            <Send className="w-3.5 h-3.5 text-amber-400 group-hover/btn:translate-x-1 transition-transform" />
                            <span>Send Message</span>
                          </span>
                        )}
                      </div>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}