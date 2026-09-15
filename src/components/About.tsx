import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck, FileCheck2, Zap } from 'lucide-react';

interface ValueItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const values: ValueItem[] = [
  {
    icon: UserCheck,
    title: 'Dedicated Portfolio Manager',
    desc: 'A single point of contact overseeing your roadmap, daily sprints, and milestone delivery with absolute transparency.',
  },
  {
    icon: ShieldCheck,
    title: 'End-to-End Encrypted Deals',
    desc: 'All communications, source code, data exchanges, and financial transactions are protected by military-grade encryption.',
  },
  {
    icon: FileCheck2,
    title: 'Legal Contracts & Strict NDA',
    desc: '100% intellectual property ownership backed by legally binding contracts, enforceable milestone agreements, and complete IP security.',
  },
  {
    icon: Zap,
    title: 'Locked Milestone Delivery',
    desc: 'Committed launch schedules with zero endless delays. Rapid agile sprints designed to take your product live at record speed.',
  },
];

export default function About() {
  const [activeTouchCard, setActiveTouchCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const el = cardRefs.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>, index: number) => {
    const el = cardRefs.current[index];
    if (!el) return;
    setActiveTouchCard(index);
    const rect = el.getBoundingClientRect();
    const touch = e.touches[0];
    if (touch) {
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#07080c] text-white overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">About Us</span>
          <h2 className="font-sans text-4xl lg:text-5xl font-black mt-4 uppercase tracking-tight">
            A Studio Where <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Design Meets Engineering</span>
          </h2>
          <p className="mt-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Ashu Studio is a full-spectrum digital agency. We blend creative vision with technical
            excellence to build products that don't just look stunning — they perform, scale, and
            delight users across the globe.
          </p>
        </motion.div>

        {/* 4 Interactive Glowing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            const isTouchActive = activeTouchCard === i;

            return (
              <motion.div
                key={v.title}
                ref={(el) => (cardRefs.current[i] = el)}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onTouchStart={(e) => handleTouch(e, i)}
                onTouchMove={(e) => handleTouch(e, i)}
                onClick={() => setActiveTouchCard(i)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-2xl p-6 sm:p-7 border bg-[#0b0c14]/80 backdrop-blur-xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  isTouchActive
                    ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]'
                    : 'border-white/[0.08] hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]'
                }`}
              >
                {/* 🌟 Dynamic Radial Glow (Follows cursor on desktop & touch on mobile) */}
                <div
                  className={`pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 ${
                    isTouchActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                  style={{
                    background:
                      'radial-gradient(350px circle at var(--mouse-x, 100px) var(--mouse-y, 100px), rgba(34, 211, 238, 0.22), transparent 75%)',
                  }}
                />

                {/* Card Icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Card Title */}
                <h3 className="relative z-10 font-sans font-bold text-lg text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {v.title}
                </h3>

                {/* Card Description */}
                <p className="relative z-10 text-sm text-slate-300 font-light leading-relaxed">
                  {v.desc}
                </p>

                {/* Bottom Highlight Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Capabilities Marquee Strip */}
        <div className="mt-20 overflow-hidden border-t border-white/[0.08] pt-10">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-8 items-center">
                {[
                  'Web Development',
                  'Full Stack',
                  'Landing Pages',
                  'UX/UI Design',
                  'Logo Design',
                  'Poster Design',
                  'Game Dev',
                  'AI Integration',
                  'AI Agents',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xl lg:text-2xl font-bold uppercase tracking-wider text-slate-600 hover:text-cyan-300 transition-colors cursor-default"
                  >
                    {tag} <span className="text-cyan-400/40 mx-4 font-normal">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}