import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  // 🎥 Public folder me hero.mp4 hai toh path '/hero.mp4' rahega
  const VIDEO_URL = '/hero.mp4';

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-[#07080c] text-white flex items-center justify-center overflow-hidden pt-28 pb-16 px-6 md:px-12 select-none"
    >
      {/* 🎬 Ultra-Clear High Fidelity Background Video */}
      <video
        key={VIDEO_URL}
        src="https://www.pexels.com/download/video/38005269/"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 brightness-105 contrast-110 saturate-110"
      />

      {/* 🌑 Balanced Cinematic Readability Layer (Light Vignette - Video remains crystal clear) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080c]/85 via-[#07080c]/40 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-[#07080c]/40 z-[1]" />

      {/* 🌌 Atmospheric Ambient Accents */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-[1]" />

      {/* ⚡ Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-black/60 backdrop-blur-md mb-6 text-xs font-mono tracking-widest text-amber-300 uppercase shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white">ASHU Digital Studios</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          {/* 🐟 Interactive 3D Fish-Floating Headline with High-Contrast Text Shadows */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-white select-none"
            style={{
              perspective: 1000,
              transformStyle: 'preserve-3d',
            }}
          >
            {[
              {
                text: 'We Design.',
                className:
                  'text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300',
                style: {
                  filter: 'drop-shadow(0 4px 18px rgba(0,0,0,0.95)) drop-shadow(0 1px 4px rgba(0,0,0,1))',
                },
              },
              {
                text: 'We Build.',
                className:
                  'text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400',
                style: {
                  filter: 'drop-shadow(0 4px 18px rgba(0,0,0,0.95)) drop-shadow(0 1px 4px rgba(0,0,0,1))',
                },
              },
              {
                text: 'You Scale.',
                className:
                  'font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500',
                style: {
                  filter: 'drop-shadow(0 6px 20px rgba(0,0,0,1)) drop-shadow(0 2px 6px rgba(0,0,0,0.9))',
                  textShadow: `
                    0 1px 0 #d97706,
                    0 2px 0 #b45309,
                    0 3px 0 #92400e,
                    0 4px 0 #78350f
                  `,
                },
              },
            ].map((line, lineIdx) => (
              <span key={lineIdx} className="block relative">
                {line.text.split('').map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    className={`inline-block cursor-pointer ${line.className}`}
                    style={line.style}
                    whileHover={{
                      y: [-4, 5, -3, 0],
                      rotateZ: [-6, 6, -3, 0],
                      scale: [1, 1.15, 1.08, 1],
                      transition: {
                        duration: 0.85,
                        ease: 'easeInOut',
                      },
                    }}
                    whileTap={{
                      y: [-3, 4, 0],
                      rotateZ: [-5, 5, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          {/* Subtext with Deep Background Contrast */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg text-slate-100 max-w-xl font-normal leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            Ashu Studio crafts high-impact digital experiences — from 3D interactive web platforms to full-stack applications, intelligent AI workflows, and precision brand design systems.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96, y: 2 }}
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative group p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_12px_25px_-8px_rgba(0,0,0,0.9),0_4px_10px_rgba(245,158,11,0.25)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300"
            >
              {/* 3D Dynamic Rotating Neon Light Ring */}
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Button Inner Body with 3D Depth bevel & Glassmorphism */}
              <div className="relative px-8 py-3.5 rounded-full bg-gradient-to-b from-[#181926]/90 to-[#08080d]/95 border-t border-white/30 border-b border-black/90 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover:from-[#202235] group-hover:to-[#0d0e17]">
                
                {/* Diagonal 3D Holographic Light Shimmer on Hover */}
                <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />

                {/* Subtle Inner Floor Ambient Glow */}
                <span className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* 3D Elevated Label & Icon */}
                <span className="font-mono text-xs uppercase tracking-widest text-slate-100 group-hover:text-amber-200 font-bold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:shadow-[0_0_8px_#f59e0b] transition-all" />
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96, y: 2 }}
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative group p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_12px_25px_-8px_rgba(0,0,0,0.9),0_4px_10px_rgba(245,158,11,0.25)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300"
            >
              {/* 3D Dynamic Rotating Neon Light Ring */}
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Button Inner Body with 3D Depth bevel & Glassmorphism */}
              <div className="relative px-8 py-3.5 rounded-full bg-gradient-to-b from-[#181926]/90 to-[#08080d]/95 border-t border-white/30 border-b border-black/90 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover:from-[#202235] group-hover:to-[#0d0e17]">
                
                {/* Diagonal 3D Holographic Light Shimmer on Hover */}
                <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />

                {/* Subtle Inner Floor Ambient Glow */}
                <span className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* 3D Elevated Label & Icon */}
                <span className="font-mono text-xs uppercase tracking-widest text-slate-100 group-hover:text-amber-200 font-bold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:shadow-[0_0_8px_#f59e0b] transition-all" />
                  View Our Work
                </span>
              </div>
            </motion.button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 flex gap-10 pt-4"
          >
            {[
              { num: '150+', label: 'Projects Shipped' },
              { num: '40+', label: 'Global Clients' },
              { num: '24/7', label: 'AI Support' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">{s.num}</div>
                <div className="text-[11px] font-mono text-slate-200 mt-0.5 uppercase tracking-wider drop-shadow-[0_1px_5px_rgba(0,0,0,0.9)]">{s.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}