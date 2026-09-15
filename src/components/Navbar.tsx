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

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const WHATSAPP_NUMBER = '9572497103';
  const whatsappUrl = `https://wa.me/${9572497103}?text=${encodeURIComponent(
    'Hi Syntra Studio, I would like to discuss a project!'
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

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#08080a]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-4' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-2.5 text-left group">
            <span className="font-sans font-black text-2xl tracking-wider text-white group-hover:text-cyan-400 transition-colors uppercase">
              SYNTRA
            </span>
            <span className="font-sans font-black text-2xl tracking-wider text-white group-hover:text-cyan-400 transition-colors uppercase">
              STUDIO
            </span>
          </button>

          {/* Desktop Navigation Links — Bada Size + Bold */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link: NavLinkItem) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm lg:text-base font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-8 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-sm font-bold tracking-wider transition-all flex items-center gap-2 group shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => scrollTo('#contact')}
              className="group relative px-6 py-2.5 rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500" />
              <span className="relative flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#0a0a0f]">
                Contact
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 z-50 bg-[#08080a]/95 backdrop-blur-xl p-6 pt-24 md:hidden flex flex-col justify-between shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link: NavLinkItem, i: number) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-base font-bold uppercase tracking-wider text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-6">
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
                className="w-full px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-sm font-bold uppercase tracking-wider text-[#0a0a0f]"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}