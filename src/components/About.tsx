import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { UserCheck, ShieldCheck, FileCheck2, Zap, Sparkles } from 'lucide-react';

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

// ⚡ 3D Interactive Tilt Card Component
function TiltCard({ item, index }: { item: ValueItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = item.icon;

  // Mouse Coordinates for Smooth Spring 3D Rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-14deg', '14deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1100 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileTap={{ scale: 0.97 }}
        className="relative h-full rounded-2xl p-[1.5px] overflow-hidden group cursor-pointer transition-shadow duration-500 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.9),0_0_20px_rgba(245,158,11,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.95),0_0_30px_rgba(245,158,11,0.25)]"
      >
        {/* 3D Rotating Golden Neon Border Ring on Hover */}
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Card Body with 3D Glass Surface */}
        <div 
          style={{ transform: 'translateZ(30px)' }}
          className="relative h-full rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-[#141520]/95 via-[#0c0d15]/98 to-[#07080c] border border-white/10 group-hover:border-amber-400/40 backdrop-blur-2xl flex flex-col justify-between overflow-hidden transition-colors duration-300"
        >
          {/* Top 3D Holographic Diagonal Sheen */}
          <span className="absolute -top-12 -bottom-12 -left-20 w-12 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-out pointer-events-none" />

          {/* Ambient Glow Spotlight */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-400/20 transition-all duration-500" />

          <div>
            {/* 3D Floating Icon Box */}
            <div 
              style={{ transform: 'translateZ(45px)' }}
              className="w-13 h-13 rounded-xl flex items-center justify-center mb-6 border border-amber-400/30 bg-gradient-to-br from-amber-500/20 to-yellow-500/5 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:scale-110 group-hover:border-amber-400/60 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300"
            >
              <Icon className="w-6 h-6 stroke-[2.2]" />
            </div>

            {/* Title with Elevated 3D Typography */}
            <h3 
              style={{ transform: 'translateZ(35px)' }}
              className="font-sans font-bold text-lg sm:text-xl text-white mb-3 group-hover:text-amber-200 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              {item.title}
            </h3>

            {/* Description */}
            <p 
              style={{ transform: 'translateZ(25px)' }}
              className="text-sm text-slate-300 font-light leading-relaxed group-hover:text-slate-200 transition-colors"
            >
              {item.desc}
            </p>
          </div>

          {/* Bottom Golden Accent Micro-Line */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-amber-400/80 uppercase">Verified Milestone</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] group-hover:animate-ping" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#07080c] text-white overflow-hidden select-none">
      {/* Deep Ambient Lighting Fields */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with 3D Aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
          style={{ perspective: 1000 }}
        >
          {/* 3D Floating "About Us" Pill */}
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
      About Us
    </span>
    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
  </div>
</motion.div>

          {/* 3D Beveled Heading */}
          <h2 className="font-sans text-4xl lg:text-5xl font-black mt-2 uppercase tracking-tight leading-[1.1] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            A Studio Where{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]">
              Design Meets Engineering
            </span>
          </h2>

          <p className="mt-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed drop-shadow">
            Ashu Studio is a full-spectrum digital agency. We blend creative vision with technical
            excellence to build products that don't just look stunning — they perform, scale, and
            delight users across the globe.
          </p>
        </motion.div>

        {/* 4 Interactive 3D Tilt Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <TiltCard key={v.title} item={v} index={i} />
          ))}
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
                    className="font-sans text-xl lg:text-2xl font-bold uppercase tracking-wider text-slate-600 hover:text-amber-300 transition-colors cursor-default"
                  >
                    {tag} <span className="text-amber-400/30 mx-4 font-normal">/</span>
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