import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'FAQ', href: '#faq' },
];

// ⚡ 3D Staggered Floating Letter Effect Component
function AnimatedNavLink({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      className="relative px-3.5 lg:px-4 py-2 rounded-full cursor-pointer focus:outline-none select-none group"
    >
      {/* 3D Glass Pill on Hover/Tap */}
      <motion.span
        variants={{
          initial: { opacity: 0, scale: 0.85, y: 4 },
          hover: { opacity: 1, scale: 1, y: 0 },
          tap: { opacity: 1, scale: 0.95, y: 1 },
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-amber-500/10 border border-amber-400/25 shadow-[0_4px_15px_rgba(245,158,11,0.15)] pointer-events-none"
      />

      {/* Floating Letters Stagger */}
      <span className="relative z-10 flex items-center overflow-hidden font-mono text-xs lg:text-sm font-bold uppercase tracking-wider">
        {label.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: 0, opacity: 0.85, color: '#cbd5e1' },
              hover: {
                y: [-3, 2, 0],
                opacity: 1,
                color: '#fef08a',
                transition: {
                  duration: 0.35,
                  delay: index * 0.03,
                  ease: 'easeInOut',
                },
              },
              tap: {
                y: 3,
                color: '#f59e0b',
                transition: { duration: 0.15 },
              },
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>

      {/* Bottom Subtle Amber Neon Underline Accent */}
      <motion.span
        variants={{
          initial: { width: 0, opacity: 0 },
          hover: { width: '60%', opacity: 1 },
          tap: { width: '80%', opacity: 1 },
        }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_8px_#f59e0b]"
      />
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const WHATSAPP_NUMBER = '9572497103';
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi Ashu Jha, I would like to discuss a project!'
  )}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // ⚡ Signature Neon Gold Cursive 'A' + Star Flourish Vector Logo
  const BrandLogo = () => (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none py-1">
      <div className="relative h-11 sm:h-13 w-11 sm:w-13 flex items-center justify-center">
        <svg
          viewBox="0 0 200 240"
          className="h-full w-full overflow-visible transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="goldNeonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blurWide" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blurMid" />
              <feMerge>
                <feMergeNode in="blurWide" />
                <feMergeNode in="blurMid" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="goldGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="80%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            <linearGradient id="goldGradCore" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#fde047" />
            </linearGradient>
          </defs>

          {/* Layer 1: Ambient Outer Corona Glow */}
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

          {/* Layer 2: Radiant Golden Ribbon */}
          <g filter="url(#goldNeonGlow)" stroke="url(#goldGradMain)" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M 120 40 C 45 70 16 130 25 180 C 35 222 95 235 130 212 C 160 190 155 132 112 96 C 75 68 45 105 40 145 C 36 175 60 202 88 202 C 118 202 134 170 128 135 C 120 80 100 32 90 12 L 180 170 C 196 195 204 186 188 162 C 160 120 118 120 90 135"
              strokeWidth="4"
            />
            <path
              d="M 48 142 L 88 140 L 56 164 L 68 124 L 80 164 Z"
              strokeWidth="3.4"
            />
          </g>

          {/* Layer 3: Hot Electric White Centerline */}
          <g stroke="url(#goldGradCore)" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
            <path
              d="M 120 40 C 45 70 16 130 25 180 C 35 222 95 235 130 212 C 160 190 155 132 112 96 C 75 68 45 105 40 145 C 36 175 60 202 88 202 C 118 202 134 170 128 135 C 120 80 100 32 90 12 L 180 170 C 196 195 204 186 188 162 C 160 120 118 120 90 135"
              strokeWidth="1.8"
            />
            <path
              d="M 48 142 L 88 140 L 56 164 L 68 124 L 80 164 Z"
              strokeWidth="1.6"
            />
          </g>

          {/* Sparkle Highlights */}
          <circle cx="90" cy="12" r="1.6" fill="#ffffff" />
          <circle cx="190" cy="170" r="1.4" fill="#ffffff" />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span className="text-base sm:text-lg font-black tracking-widest text-white uppercase group-hover:text-amber-300 transition-colors leading-none font-sans">
           <span className="text-amber-400">ASHU JHA</span>
        </span>
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.28em] font-mono text-cream-500 group-hover:text-amber-200 transition-colors mt-0.5">
          Digital Studio
        </span>
      </div>
    </div>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#08080a]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center text-left focus:outline-none"
            aria-label="Home"
          >
            <BrandLogo />
          </button>

          {/* Desktop Navigation Links with Staggered 3D Floating Effect */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link: NavLinkItem) => (
              <AnimatedNavLink
                key={link.href}
                label={link.label}
                onClick={() => scrollTo(link.href)}
              />
            ))}
          </div>

          {/* Action Buttons (3D WhatsApp & Contact) */}
          <div className="hidden md:flex items-center gap-3.5">
            
            {/* 3D WhatsApp Button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96, y: 2 }}
              className="relative group p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_10px_22px_-6px_rgba(0,0,0,0.8),0_3px_10px_rgba(16,185,129,0.2)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 inline-flex"
            >
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#10b981_45%,#6ee7b7_50%,#10b981_55%,#000000_100%)] opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-10 sm:h-11 px-4 sm:px-5 rounded-full bg-gradient-to-b from-[#0e1f18] to-[#070e0b] border-t border-emerald-400/30 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover:from-[#132c22] group-hover:to-[#0a1612]">
                <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-emerald-300/25 to-transparent skew-x-[-25deg] group-hover:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                </span>
                <MessageCircle size={16} className="text-emerald-400 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <span className="text-sm font-bold tracking-wider uppercase text-emerald-300 group-hover:text-emerald-200 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  WhatsApp
                </span>
              </div>
            </motion.a>

            {/* 3D Contact Button */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96, y: 2 }}
              onClick={() => scrollTo('#contact')}
              className="relative group p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_10px_22px_-6px_rgba(0,0,0,0.8),0_3px_8px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300"
            >
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-10 sm:h-11 px-6 rounded-full bg-gradient-to-b from-[#161720] to-[#0a0a0f] border-t border-white/25 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-1.5 overflow-hidden transition-all duration-300 group-hover:from-[#1d1e2b] group-hover:to-[#0e0f17]">
                <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />
                <span className="absolute bottom-0 inset-x-3 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-sm font-bold uppercase tracking-wider text-slate-200 group-hover:text-amber-200 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1.5">
                  <span>Contact</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
                </span>
              </div>
            </motion.button>

          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide Drawer & Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-50 bg-[#08080a]/95 backdrop-blur-xl p-6 pt-6 md:hidden flex flex-col justify-between shadow-2xl"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <BrandLogo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Floating Links */}
              <div className="flex flex-col gap-2 my-auto">
                {navLinks.map((link: NavLinkItem) => (
                  <div key={link.href} className="w-full flex justify-start">
                    <AnimatedNavLink
                      label={link.label}
                      onClick={() => scrollTo(link.href)}
                    />
                  </div>
                ))}
              </div>

              {/* Drawer Bottom Actions */}
              <div className="flex flex-col gap-3 pt-6 border-t border-slate-800/80">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-sm font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-sm font-bold uppercase tracking-wider text-[#0a0a0f] cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}