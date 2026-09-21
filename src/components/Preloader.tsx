import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 0 se 100% tak smooth natural counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // 100 hone ke baad thoda sa ruk kar smooth exit
          return 100;
        }
        const diff = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -40,
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07080c] select-none overflow-hidden"
    >
      {/* 🌌 Deep Luxury Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#07080c_85%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* ⚡ 3D Glowing Monogram Signature Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6"
        >
          {/* Outer Rotating Halo Ring */}
          <span className="absolute -inset-2 rounded-full animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#f59e0b_50%,transparent_100%)] opacity-60 blur-[3px]" />

          <svg
            viewBox="0 0 200 240"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="preloaderGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blurWide" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blurMid" />
                <feMerge>
                  <feMergeNode in="blurWide" />
                  <feMergeNode in="blurMid" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="loaderGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="35%" stopColor="#f59e0b" />
                <stop offset="80%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>

              <linearGradient id="loaderWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#fde047" />
              </linearGradient>
            </defs>

            {/* Glowing Shadow Track */}
            <path
              d="M 120 40 C 40 70 15 130 25 180 C 35 225 95 240 130 215 C 160 190 155 130 110 95 C 75 70 45 105 40 145 C 36 175 60 205 90 205 C 120 205 135 170 130 135 C 120 75 100 30 90 10 C 85 2 92 10 100 35 L 180 170 C 200 200 210 185 190 160 C 160 120 120 120 90 135"
              stroke="#f59e0b"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.35"
              className="filter blur-[6px]"
            />

            {/* Main Gold Animated Vector */}
            <motion.path
              d="M 120 40 C 45 70 16 130 25 180 C 35 222 95 235 130 212 C 160 190 155 132 112 96 C 75 68 45 105 40 145 C 36 175 60 202 88 202 C 118 202 134 170 128 135 C 120 80 100 32 90 12 L 180 170 C 196 195 204 186 188 162 C 160 120 118 120 90 135"
              filter="url(#preloaderGlow)"
              stroke="url(#loaderGold)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            {/* Inner Core Stroke */}
            <motion.path
              d="M 120 40 C 45 70 16 130 25 180 C 35 222 95 235 130 212 C 160 190 155 132 112 96 C 75 68 45 105 40 145 C 36 175 60 202 88 202 C 118 202 134 170 128 135 C 120 80 100 32 90 12 L 180 170 C 196 195 204 186 188 162 C 160 120 118 120 90 135"
              stroke="url(#loaderWhite)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>

        {/* 👑 Name with 3D Metallic Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[0.18em] text-white"
        >
          Ashu{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]">
            Jha
          </span>
        </motion.h1>

        {/* Studio Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-amber-300/80 mt-1 font-semibold"
        >
          Digital Creative Studio
        </motion.p>

        {/* 🌟 Signature Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-mono text-[11px] sm:text-xs text-slate-400 uppercase tracking-[0.25em] mt-4"
        >
          We Design <span className="text-amber-400 mx-1.5 font-bold">/</span> We Build <span className="text-amber-400 mx-1.5 font-bold">/</span> You Scale
        </motion.p>

        {/* ⚡ 3D Glowing Progress Bar & Counter */}
        <div className="w-64 sm:w-80 mt-10 space-y-3">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-400 tracking-wider">SYSTEM INITIALIZING</span>
            <span className="text-amber-300 font-bold drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]">
              {progress}%
            </span>
          </div>

          <div className="relative h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden p-[1px] border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-400 rounded-full shadow-[0_0_12px_#f59e0b]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}