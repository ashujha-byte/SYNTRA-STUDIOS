import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-m font-mono tracking-[0.3em] text-green-400 uppercase">FAQ</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">
            Questions, <span className="text-gradient">answered</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            Everything you might want to know before reaching out. Can't find your answer? Our AI support is always on.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? 'border-cyan-400/30' : ''
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-display font-semibold text-base lg:text-lg transition-colors ${
                  open === i ? 'text-cyan-400' : 'text-gray-200'
                }`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all ${
                  open === i ? 'bg-cyan-400/20 text-cyan-400' : 'bg-white/5 text-gray-400'
                }`}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-400 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
