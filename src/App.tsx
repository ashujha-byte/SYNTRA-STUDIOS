import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';

// Baaki components (Navbar, Hero, About, etc.)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatSupport from './components/AIChatSupport';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#07080c] min-h-screen text-white">
      {/* ⚡ Intro / Landing Preloader Screen */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Website (Preloader ke baad clean render hoga) */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Skills />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <AIChatSupport />
    </div>
  );
}