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
      {/* 🎬 Background Video Layer */}
      <video
        key={VIDEO_URL}
        src="public/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-85 brightness-110 contrast-110 saturate-125 transition-opacity duration-700"
      />

      {/* 🌑 Dark Cinematic Overlays for Perfect Text Contrast */}
      <div className="absolute inset-0 bg-[#07080c]/60 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080c] via-[#07080c]/80 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-[#07080c]/60 z-[1]" />

      {/* 🌌 Atmospheric Radial Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none z-[1]" />

      {/* ⚡ Main Clean Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6 text-xs font-mono tracking-widest text-cyan-300 uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Syntra Digital Studios</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.02] tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          >
            We Design.<br />
            We Build.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              You Scale.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg text-slate-200 max-w-xl font-light leading-relaxed drop-shadow-md"
          >
            Syntra Studio crafts high-impact digital experiences — from 3D interactive web platforms to full-stack applications, intelligent AI workflows, and precision brand design systems.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(34,211,238,0.35)]"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-full border border-white/20 bg-black/40 hover:bg-white/10 backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider transition-all"
            >
              View Our Work
            </button>
          </motion.div>

          {/* Metrics (Border line removed) */}
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
                <div className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow">{s.num}</div>
                <div className="text-[11px] font-mono text-slate-300 mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}