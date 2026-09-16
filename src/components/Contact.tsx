import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, User, MessageSquare, Briefcase, Phone, CheckCircle2 } from 'lucide-react';

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

    // 2. Email Check (Proper format with domain)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    // 3. Phone Check (Minimum 10 digits)
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

    const formData = new FormData();
    formData.append('Client Name', name);
    formData.append('Client Email', email);
    formData.append('Phone Number', phone);
    formData.append('Service Needed', service);
    formData.append('Message / Goals', message);
    formData.append('_subject', `Direct Studio Contact from ${name}`);
    formData.append('_captcha', 'false');

    try {
      const res = await fetch(`https://formsubmit.co/${YOUR_EMAIL}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setErrorMessage('Failed to send message. Please try again or reach out on WhatsApp.');
        setStatus('idle');
      }
    } catch {
      setErrorMessage('Error submitting inquiry. Please connect with us directly on WhatsApp.');
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-[#07080c] select-none">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* 💬 LEFT SIDE: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-left"
          >
            <span className="text-xs tracking-[0.3em] text-cyan-400 uppercase font-mono">Get In Touch</span>
            <h2 className="font-sans text-4xl lg:text-5xl font-black mt-4 leading-[1.15] text-white uppercase tracking-tight">
              Let's build <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                something great
              </span>
            </h2>
            <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg font-light">
              Tell us about your project. We'll get back to you within 24 hours with a clear roadmap and milestone schedule.
            </p>
          </motion.div>

          {/* 📝 RIGHT SIDE: Compact Validated Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 rounded-2xl p-6 sm:p-7 border border-white/10 bg-[#0d0e15] shadow-2xl"
          >
            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle2 size={46} className="text-emerald-400 animate-bounce" />
                <h4 className="font-sans font-bold text-xl text-white">Message Dispatched!</h4>
                <p className="text-xs text-slate-400 max-w-xs font-mono">
                  Your inquiry has been emailed to our engineering team. We'll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* 🚨 Validation Error Message Banner */}
                {errorMessage && (
                  <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 mb-1.5 block font-mono">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder=""
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 mb-1.5 block font-mono">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder=""
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number & Custom Service Needed */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 mb-1.5 block font-mono">
                      Phone / WhatsApp <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder=""
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 mb-1.5 block font-mono">
                      Service Requirement <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        placeholder=""
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Box */}
                <div>
                  <label className="text-xs text-slate-400 mb-1.5 block font-mono">
                    Your Message / Goals <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      placeholder=""
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-sm placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group relative w-full sm:w-auto px-7 py-3 rounded-full overflow-hidden disabled:opacity-50 transition-all cursor-pointer shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400" />
                  <span className="relative flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider text-[#0a0a0f]">
                    {status === 'loading' ? 'Verifying & Sending...' : 'Send Message'}
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}