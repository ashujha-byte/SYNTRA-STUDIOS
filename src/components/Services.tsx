import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, Layers, Layout, Smartphone, Palette, PenTool, Image as ImageIcon,
  Gamepad2, Brain, Bot, ArrowRight, X, CheckCircle2, Send, Sparkles
} from 'lucide-react';

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  image: string;
  overview: string;
  deliverables: string[];
  toolsUsed: string[];
}

const services: ServiceItem[] = [
  {
    icon: Code2,
    title: 'Custom Web Development',
    tagline: 'Ultra-fast, high-converting web engines built for speed and sales.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjc-R0_d5SaxFl7WttPG6v1Q_3Y1CVvE3YWSYw6-QrY9ytPfPJa_ZVHio&s=10',
    overview: 'We architect bespoke, high-performance web platforms tailored to minimize bounce rates, ensure rock-solid security, and convert incoming traffic into loyal clients.',
    deliverables: ['Zero-lag loading speeds', 'SEO & Core Web Vitals optimization', 'Mobile responsive across all screens', 'Clean, handover-ready code'],
    toolsUsed: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel']
  },
  {
    icon: Layers,
    title: 'Full-Stack Development',
    tagline: 'Scalable web applications with secure backends that handle massive traffic.',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQEoLoZrI8CXFg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1705635632014?e=2147483647&v=beta&t=KShPvm2QGsSzpBpyWy5B3wNgANLDGzsE8mZq_jVQ12g',
    overview: 'From distributed database schema design to intuitive client interfaces, we build resilient enterprise platforms and SaaS systems engineered to scale reliably without friction.',
    deliverables: ['Custom REST/GraphQL APIs', 'Encrypted user auth & payment gateways', 'Scalable database infrastructure', 'Admin & user analytics dashboard'],
    toolsUsed: ['Node.js', 'PostgreSQL', 'Supabase', 'Express', 'Redis']
  },
  {
    icon: Layout,
    title: 'Landing Page Design',
    tagline: 'Sleek, storytelling landing pages designed to maximize client inquiries.',
    image: 'https://img.magnific.com/free-psd/wellness-concept-landing-page-template_23-2150094962.jpg?semt=ais_hybrid&w=740&q=80',
    overview: 'Bespoke, conversion-first digital pages crafted with persuasive visual storytelling, frictionless CTA pathways, and fluid micro-interactions that elevate your product above the competition.',
    deliverables: ['Story-driven UI/UX wireframes', 'Interactive Framer Motion animations', 'WhatsApp & CRM lead integration', 'A/B conversion tested layouts'],
    toolsUsed: ['Figma', 'React', 'Framer Motion', 'Tailwind']
  },
  {
    icon: Smartphone,
    title: 'App Development',
    tagline: 'Smooth, native-feel mobile applications for iOS and Android devices.',
    image: 'https://media.licdn.com/dms/image/v2/C5612AQF3zlTTMvAYvA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520154595044?e=2147483647&v=beta&t=I0MYQl0tqt29-BonRdSWfCnIeyecKrKgBnIjamQRpJY',
    overview: 'Production-ready cross-platform mobile apps engineered for seamless 60 FPS touch performance, biometric authentication, offline synchronization, and rapid store releases.',
    deliverables: ['iOS & Android cross-compilation', 'Offline data sync & push alerts', 'Biometric login & privacy controls', 'App Store / Play Store deployment'],
    toolsUsed: ['React Native', 'Expo', 'Firebase', 'Native SDKs']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    tagline: 'Clean, intuitive, and modern interfaces built around user psychology.',
    image: 'https://img.magnific.com/premium-vector/gradient-ui-ux-design-illustration_23-2151514787.jpg?semt=ais_hybrid&w=740&q=80',
    overview: 'Comprehensive user-centric product architecture, from user persona research and wireframing to high-fidelity clickable Figma prototypes and complete atomic design libraries.',
    deliverables: ['Clickable prototype demo', 'Scalable design token system', 'User flow & wireframe mapping', 'Developer-ready design tokens'],
    toolsUsed: ['Figma', 'Design Tokens', 'User Research']
  },
  {
    icon: PenTool,
    title: 'Logo & Brand Identity',
    tagline: 'Unique, authoritative brand identity marks that leave a lasting impression.',
    image: 'https://cdn.dribbble.com/userupload/44448277/file/b8608dc71b0a5faead22c37d82668a00.jpg',
    overview: 'Complete visual identity systems designed to command brand authority, including distinct vector logo marks, tailored typographic pairings, and official brand style guidelines.',
    deliverables: ['Vector source files (.SVG, .AI, .PNG)', 'Comprehensive brand guide book', 'Social media kit & favicon variants', 'Commercial copyright ownership'],
    toolsUsed: ['Adobe Illustrator', 'Photoshop', 'Vector Math']
  },
  {
    icon: ImageIcon,
    title: 'Poster & Digital Visuals',
    tagline: 'Scroll-stopping marketing assets, ads, and digital brand visuals.',
    image: 'https://img.magnific.com/free-psd/digital-marketing-agency-corporate-instagram-facebook-feed-poster-portrait-post-template_106176-6621.jpg?semt=ais_hybrid&w=740&q=80',
    overview: 'High-impact promotional media, digital advertising creatives, and 3D graphic visuals strategically formatted to command attention across both print and digital touchpoints.',
    deliverables: ['High-DPI print & web banners', 'Social media ad creatives', '3D graphic enhancements', 'Multi-ratio exports for Instagram/Web'],
    toolsUsed: ['Adobe Suite', 'Blender', 'Photoshop']
  },
  {
    icon: Gamepad2,
    title: '3D Web & Interactive',
    tagline: 'Spatial 3D experiences that elevate your brand above 99% of competitors.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sSnIUmi94sK3CFXYbpW7oDG1sw84eeAeb_G5KWOyi9NmLtX2EXHrYzkA&s=10',
    overview: 'Hardware-accelerated browser experiences powered by Three.js and WebGL shaders, bringing your digital presence to life with interactive 3D elements and spatial motion.',
    deliverables: ['Interactive 3D model loaders', 'Custom GLSL shader effects', 'Hardware-accelerated 60 FPS speed', 'Mobile-optimized lightweight 3D assets'],
    toolsUsed: ['Three.js', 'WebGL', 'React Three Fiber', 'Blender']
  },
  {
    icon: Brain,
    title: 'AI Integrations',
    tagline: 'Empower your software with private LLMs, automation, and smart pipelines.',
    image: 'https://www.edge-ai-vision.com/wp-content/uploads/2025/02/ai_and_human-scaled.jpg',
    overview: 'Seamlessly embed state-of-the-art language models, contextual embeddings, and automated retrieval-augmented generation (RAG) directly into your active business software.',
    deliverables: ['Custom knowledge-base RAG search', 'Secure API embedding pipelines', 'Data privacy compliance', 'Predictive analytics integration'],
    toolsUsed: ['OpenAI API', 'Pinecone', 'LangChain', 'Python']
  },
  {
    icon: Bot,
    title: 'Autonomous AI Agents',
    tagline: '24/7 intelligent agents that resolve queries and handle operations.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YVfzFCCVN8fbZjgFE5Iv_M92jN2Mws5V9dB-xMkgeAMf6RL-H-G-xh4&s=10',
    overview: 'Goal-oriented, self-governing autonomous agents configured to triage user tickets, execute operations, and manage lead engagement around the clock with zero human intervention.',
    deliverables: ['Self-executing multi-agent chains', 'CRM & WhatsApp auto-replies', 'Context-aware conversation memory', '24/7 continuous uptime'],
    toolsUsed: ['LangGraph', 'AI Agents', 'Automation Webhooks']
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const YOUR_EMAIL = 'aetherixofficialsupport@gmai.com';

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get('Client Name') as string)?.trim();
    const email = (formData.get('Client Email') as string)?.trim();
    const phone = (formData.get('Client Phone') as string)?.trim();
    const details = (formData.get('Project Details') as string)?.trim();

    // 1. Strict Name Validation
    if (!name || name.length < 2) {
      setErrorMessage('Please enter your full name (minimum 2 characters).');
      return;
    }

    // 2. Strict Email Validation (Must have @ and a valid domain)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    // 3. Strict Phone Validation (At least 10 digits)
    const numericDigitsOnly = phone?.replace(/\D/g, '') || '';
    if (!phone || numericDigitsOnly.length < 10) {
      setErrorMessage('Please enter a valid phone or WhatsApp number with at least 10 digits.');
      return;
    }

    // 4. Strict Details Validation
    if (!details || details.length < 10) {
      setErrorMessage('Please provide a brief description of your project (at least 10 characters).');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch(`https://formsubmit.co/${YOUR_EMAIL}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setSelectedService(null);
        }, 2500);
      } else {
        setErrorMessage('Failed to send message. Please try again or reach out on WhatsApp.');
      }
    } catch {
      setErrorMessage('Error submitting inquiry. Please reach out directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#07080c] text-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-cyan-400 uppercase">WHAT WE DO</span>
          <h2 className="font-sans text-4xl lg:text-5xl font-black mt-4 uppercase tracking-tight">
            SERVICES THAT COVER <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">THE ENTIRE SPECTRUM</span>
          </h2>
          <p className="mt-5 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            From the first sketch to the final deploy — everything you need to bring your digital vision to life, under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-3xl border border-white/10 bg-[#0d0e15] overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
              >
                {/* Image Showcase */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e15] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#07080c]/85 border border-white/15 flex items-center justify-center text-cyan-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-sans font-bold text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                      {s.tagline}
                    </p>
                  </div>

                  {/* View Details Action Button */}
                  <button
                    onClick={() => {
                      setSelectedService(s);
                      setErrorMessage(null);
                    }}
                    className="w-full py-3 px-4 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-cyan-400 hover:text-black hover:border-cyan-400 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>View Details &amp; Inquire</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL POPUP: Service Deep-Dive + Direct Client Lead Form */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/80">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0c0d14] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-8 text-white max-h-[90vh] flex flex-col"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#08080c]">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-cyan-400" />
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                    Ashu Studio &amp; Inquiry
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setErrorMessage(null);
                  }}
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body: Split into Specs Details + Inquiry Form */}
              <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* LEFT: Full Service Breakdown */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
                      {selectedService.title}
                    </h3>
                    <p className="text-sm text-cyan-300/90 font-mono">
                      {selectedService.tagline}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase text-cream-500 tracking-wider">About This Service</span>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {selectedService.overview}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase text-cream-500 tracking-wider">What You Receive</span>
                    <div className="space-y-2">
                      {selectedService.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Stack */}
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase text-cream-500 tracking-wider">Tech &amp; Tools Used</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT: Direct Inquiry Form */}
                <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#08080c] p-6 flex flex-col justify-between">
                  {submitted ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                      <CheckCircle2 size={48} className="text-emerald-400 animate-bounce" />
                      <h4 className="font-sans font-bold text-xl text-white">Inquiry Received</h4>
                      <p className="text-xs text-slate-400 max-w-xs font-mono">
                        Your project details have been sent directly to our lead engineering desk. We will reach out shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                      <div>
                        <span className="font-mono text-xs uppercase text-cyan-400 tracking-wider block mb-1">
                          Direct Service Inquiry
                        </span>
                        <p className="text-xs text-slate-400 mb-2">
                          Fill out the details below to receive a locked milestone quote and roadmap.
                        </p>
                      </div>

                      {/* Error Alert Box */}
                      {errorMessage && (
                        <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono">
                          {errorMessage}
                        </div>
                      )}

                      <input type="hidden" name="Selected Service" value={selectedService.title} />
                      <input type="hidden" name="_subject" value={`New Inquiry for ${selectedService.title} - Syntra Studio`} />
                      <input type="hidden" name="_captcha" value="false" />

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                          Your Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="Client Name"
                          required
                          placeholder=""
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                          Your Email <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="Client Email"
                          required
                          placeholder=""
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                          Phone / WhatsApp Number <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="Client Phone"
                          required
                          placeholder=""
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                          Project Details / Requirements <span className="text-cyan-400">*</span>
                        </label>
                        <textarea
                          name="Project Details"
                          rows={3}
                          required
                          placeholder=""
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white focus:outline-none focus:border-cyan-400 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] mt-2"
                      >
                        <Send size={14} />
                        <span>{isSubmitting ? 'Verifying & Sending...' : 'Send Project Inquiry'}</span>
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}