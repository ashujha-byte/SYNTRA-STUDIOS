import { motion } from 'framer-motion';

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1JNkEkjcmQ/',
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/webvibe42?stkn=MXY0Njh4N2RnaDRkbA==',
    svg: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@webvibe.42',
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ashujha-byte',
    svg: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:aetherixofficialsupport@gmail.com',
    svg: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

// ⚡ Code-based Vector Monogram Logo (Same as Navbar)
const FooterBrandLogo = () => (
  <div className="relative h-12 w-12 flex items-center justify-center flex-shrink-0">
    <svg
      viewBox="0 0 200 240"
      className="h-full w-full overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="footerGoldGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blurWide" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blurMid" />
          <feMerge>
            <feMergeNode in="blurWide" />
            <feMergeNode in="blurMid" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="footerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#f59e0b" />
          <stop offset="80%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        <linearGradient id="footerGoldCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
      </defs>

      {/* Layer 1: Corona Glow */}
      <g opacity="0.4" stroke="#f59e0b" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M 120 40 C 40 70 15 130 25 180 C 35 225 95 240 130 215 C 160 190 155 130 110 95 C 75 70 45 105 40 145 C 36 175 60 205 90 205 C 120 205 135 170 130 135 C 120 75 100 30 90 10 C 85 2 92 10 100 35 L 180 170 C 200 200 210 185 190 160 C 160 120 120 120 90 135"
          strokeWidth="10"
          className="filter blur-[6px]"
        />
        <path
          d="M 52 135 L 85 138 L 58 158 L 68 126 L 78 158 Z"
          strokeWidth="7"
          className="filter blur-[5px]"
        />
      </g>

      {/* Layer 2: Main Ribbon */}
      <g filter="url(#footerGoldGlow)" stroke="url(#footerGoldGrad)" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M 120 40 C 45 70 16 130 25 180 C 35 222 95 235 130 212 C 160 190 155 132 112 96 C 75 68 45 105 40 145 C 36 175 60 202 88 202 C 118 202 134 170 128 135 C 120 80 100 32 90 12 L 180 170 C 196 195 204 186 188 162 C 160 120 118 120 90 135"
          strokeWidth="4"
        />
        <path
          d="M 48 142 L 88 140 L 56 164 L 68 124 L 80 164 Z"
          strokeWidth="3.4"
        />
      </g>

      {/* Layer 3: Hot White Core */}
      <g stroke="url(#footerGoldCore)" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
        <path
          d="M 120 40 C 45 70 16 130 25 180 C 35 222 95 235 130 212 C 160 190 155 132 112 96 C 75 68 45 105 40 145 C 36 175 60 202 88 202 C 118 202 134 170 128 135 C 120 80 100 32 90 12 L 180 170 C 196 195 204 186 188 162 C 160 120 118 120 90 135"
          strokeWidth="1.8"
        />
        <path
          d="M 48 142 L 88 140 L 56 164 L 68 124 L 80 164 Z"
          strokeWidth="1.6"
        />
      </g>

      <circle cx="90" cy="12" r="1.6" fill="#ffffff" />
      <circle cx="190" cy="170" r="1.4" fill="#ffffff" />
    </svg>
  </div>
);

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080c] overflow-hidden select-none text-white">
      {/* Cinematic Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14 items-start">
          
          {/* Brand & Monogram Logo */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div 
              onClick={() => scrollTo('#home')}
              className="flex items-center gap-3 group cursor-pointer select-none mb-3"
            >
              <FooterBrandLogo />
              <div className="flex flex-col text-left">
                <h3 className="font-sans font-black text-2xl tracking-wider text-white uppercase group-hover:text-amber-300 transition-colors leading-none">
                   <span className="text-amber-400">ASHU Jha</span>
                </h3>
                <span className="text-[9px] uppercase tracking-[0.28em] font-mono text-slate-400 group-hover:text-amber-200 transition-colors mt-1">
                  Digital Studio
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-light mt-2">
             "Ashu Jha Digital Studio architects high-converting web applications, bespoke 3D digital experiences, and scalable AI systems engineered to turn vision into market-dominating brands."
            </p>

            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-amber-300/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span>Available for new client projects worldwide</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-sm font-mono text-slate-400 hover:text-amber-300 transition-colors text-left cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 group-hover:shadow-[0_0_6px_#f59e0b] transition-all" />
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3D Social Media Buttons */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-4">
              Follow &amp; Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group p-[1.5px] rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_20px_-6px_rgba(0,0,0,0.8)] transition-all duration-300"
                  aria-label={s.label}
                >
                  {/* Rotating Neon Ring on Hover */}
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon Body */}
                  <div className="relative w-11 h-11 rounded-[14px] bg-gradient-to-b from-[#161720] to-[#0a0a0f] border border-white/10 group-hover:border-amber-400/40 backdrop-blur-xl flex items-center justify-center text-slate-400 group-hover:text-amber-300 transition-colors">
                    {s.svg}
                  </div>
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-slate-500 font-mono mt-4">
            
            </p>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4">
         <p className="text-xs font-mono tracking-widest text-slate-400 uppercase">
            We Design <span className="text-amber-400 mx-1">/</span> We Build <span className="text-amber-400 mx-1">/</span> You Scale
          </p>
        </div>
          <p className="text-xs font-mono text-slate-400">
            &copy; {new Date().getFullYear()} Ashu Jha Studio. All rights reserved.
          </p>
         
      </div>
    </footer>
  );
}