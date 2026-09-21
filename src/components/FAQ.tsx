import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, Sparkles, MessageCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What services does Ashu Studio offer?',
    a: 'We offer web development, full-stack development, landing page design, app development, UX/UI design, logo design, poster design, game development, AI integration, and AI agent building. Essentially, everything from concept to launch.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope. A landing page can take upto 1-2 Days, a full web app upto 7-8 Days, and complex AI integrations upto 8-12 Days. We provide a detailed timeline after our first conversation.',
  },
  {
    q: 'Do you work with clients globally?',
    a: 'Yes. We work with clients across all continents and time zones. Our workflow is designed for asynchronous collaboration, and our AI support is available 24/7.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer both fixed-scope project pricing and retainer-based engagements. After understanding your needs, we provide a transparent quote with no hidden costs.',
  },
  {
    q: 'Can you integrate AI into our existing product?',
    a: 'Absolutely. We specialize in embedding AI capabilities — chatbots, prediction engines, autonomous agents, and more — into existing systems with minimal disruption.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes. Every project includes a support period, and we offer ongoing maintenance plans. Our AI chat support is also available 24/7 for any quick questions.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We use modern, battle-tested tools: React, Next.js, TypeScript, Tailwind CSS, Node.js, Supabase, Framer Motion, and leading AI APIs. We choose the right tool for each job, not the trendiest one.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const WHATSAPP_NUMBER = '9572497103';
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi Ashu Jha, I have a quick question about your services!'
  )}`;

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden bg-[#07080c] select-none text-white">
      {/* Deep Amber Ambient Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* 3D Floating Badge */}
        <motion.div
  whileHover={{ scale: 1.04, y: -2 }}
  whileTap={{ scale: 0.96, y: 2 }}
  className="relative group p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_10px_22px_-6px_rgba(0,0,0,0.8),0_3px_8px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 inline-flex mb-6"
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
      Frequently Asked Questions
    </span>
    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
  </div>
</motion.div>

          <h2 className="font-sans text-4xl lg:text-5xl font-black mt-2 uppercase tracking-tight leading-[1.1] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            Questions,{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]">
              Answered
            </span>
          </h2>

          <p className="mt-6 text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Everything you need to know before initiating a build. Looking for something custom? Reach out directly.
          </p>
        </motion.div>

        {/* 3D Glassmorphism Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative rounded-2xl p-[1.5px] overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'shadow-[0_12px_28px_-6px_rgba(245,158,11,0.15),0_4px_12px_rgba(0,0,0,0.8)]'
                    : 'shadow-[0_8px_20px_-6px_rgba(0,0,0,0.7)]'
                }`}
              >
                {/* 3D Rotating Golden Light Ring for Active Accordion */}
                <span
                  className={`absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] transition-opacity duration-500 ${
                    isOpen ? 'opacity-70' : 'opacity-0 hover:opacity-40'
                  }`}
                />

                {/* Accordion Inner Box */}
                <div className="relative rounded-[15px] bg-[#0c0d15]/95 border border-white/[0.08] backdrop-blur-2xl overflow-hidden transition-colors duration-300">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`font-sans font-bold text-base lg:text-lg transition-colors ${
                        isOpen ? 'text-amber-300' : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      {faq.q}
                    </span>

                    {/* 3D Toggle Icon Capsule */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
                        isOpen
                          ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)] rotate-180'
                          : 'bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:border-amber-400/40'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-6 text-slate-300 leading-relaxed font-light text-sm border-t border-white/5 pt-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🔘 3D Animated Hero-Style CTA Button */}
        <div className="mt-16 text-center">
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96, y: 2 }}
            className="relative group p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_12px_25px_-8px_rgba(0,0,0,0.8),0_4px_10px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 inline-block"
          >
            {/* 3D Dynamic Rotating Neon Light Ring */}
            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Button Inner Body with 3D Depth bevel & Glassmorphism */}
            <div className="relative px-8 py-3.5 rounded-full bg-gradient-to-b from-[#161720] to-[#0a0a0f] border-t border-white/25 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-2.5 overflow-hidden transition-all duration-300 group-hover:from-[#1d1e2b] group-hover:to-[#0e0f17]">
              
              {/* Diagonal 3D Holographic Light Shimmer on Hover */}
              <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />

              {/* Subtle Inner Floor Ambient Glow */}
              <span className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* 3D Elevated Label & Icon */}
              <span className="font-mono text-xs uppercase tracking-widest text-slate-200 group-hover:text-amber-200 font-bold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:shadow-[0_0_8px_#f59e0b] transition-all" />
                <span>Still Have Questions? Chat On WhatsApp</span>
                <MessageCircle className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}