import { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

// ⚡ 3D Interactive Tilt Service Card
function TiltServiceCard({
  service,
  onSelect,
}: {
  service: ServiceItem;
  onSelect: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
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
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative h-full rounded-3xl p-[1.5px] overflow-hidden bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-[0_15px_30px_-10px_rgba(0,0,0,0.9),0_0_20px_rgba(245,158,11,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(245,158,11,0.25)] transition-shadow duration-500 flex flex-col justify-between"
      >
        {/* 3D Rotating Golden Neon Border Ring on Hover */}
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Card Inner Body */}
        <div className="relative h-full w-full rounded-[23px] bg-[#0c0d15]/95 border border-white/[0.08] group-hover:border-amber-400/40 backdrop-blur-2xl flex flex-col justify-between overflow-hidden transition-colors duration-300">
          
          {/* Top Image Showcase */}
          <div className="relative w-full h-48 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d15] via-transparent to-transparent" />
            
            {/* 3D Floating Icon Shield */}
            <div 
              style={{ transform: 'translateZ(30px)' }}
              className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-[#07080c]/90 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform"
            >
              <Icon className="w-5 h-5 stroke-[2.2]" />
            </div>
          </div>

          {/* Card Info & Action */}
          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <h3 className="font-sans font-bold text-xl text-white mb-2 group-hover:text-amber-200 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {service.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                {service.tagline}
              </p>
            </div>

            {/* 3D Animated "View Details & Inquire" Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.96, y: 2 }}
              onClick={onSelect}
              className="relative group/btn p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_10px_22px_-6px_rgba(0,0,0,0.8),0_3px_8px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 w-full"
            >
              {/* 3D Dynamic Rotating Neon Light Ring */}
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-70 group-hover/btn:opacity-100 transition-opacity duration-500" />

              {/* Button Inner Body with 3D Depth bevel & Glassmorphism */}
              <div className="relative py-3 px-4 rounded-full bg-gradient-to-b from-[#161720] to-[#0a0a0f] border-t border-white/25 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover/btn:from-[#1d1e2b] group-hover/btn:to-[#0e0f17]">
                
                {/* Diagonal 3D Holographic Light Shimmer on Hover */}
                <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover/btn:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />

                {/* Subtle Inner Floor Ambient Glow */}
                <span className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                {/* 3D Elevated Label & Icon */}
                <span className="font-mono text-xs uppercase tracking-widest text-slate-200 group-hover/btn:text-amber-200 font-bold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover/btn:shadow-[0_0_8px_#f59e0b] transition-all" />
                  <span>View Details &amp; Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const YOUR_EMAIL = 'aetherixofficialsupport@gmail.com';

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

    // 2. Strict Email Validation
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
    <section id="services" className="relative py-24 lg:py-32 bg-[#07080c] text-white select-none overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* 3D Styled Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Floating Pill */}
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
      WHAT WE DO
    </span>
    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
  </div>
</motion.div>

          <h2 className="font-sans text-4xl lg:text-5xl font-black mt-2 uppercase tracking-tight leading-[1.1] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            SERVICES THAT COVER{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]">
              THE ENTIRE SPECTRUM
            </span>
          </h2>

          <p className="mt-5 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            From the first sketch to the final deploy — everything you need to bring your digital vision to life, under one roof.
          </p>
        </motion.div>

        {/* 3D Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s) => (
            <TiltServiceCard
              key={s.title}
              service={s}
              onSelect={() => {
                setSelectedService(s);
                setErrorMessage(null);
              }}
            />
          ))}
        </div>
      </div>

      {/* MODAL POPUP: Service Deep-Dive + Direct Client Lead Form */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/85">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0c0d15] border border-amber-400/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] my-8 text-white max-h-[90vh] flex flex-col"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#08080c]">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-amber-400" />
                  <span className="font-mono text-xs uppercase tracking-widest text-amber-300 font-bold">
                    Ashu Studio &amp; Inquiry
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setErrorMessage(null);
                  }}
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
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
                    <p className="text-sm text-amber-300/90 font-mono">
                      {selectedService.tagline}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase text-amber-400/90 tracking-wider">About This Service</span>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {selectedService.overview}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase text-amber-400/90 tracking-wider">What You Receive</span>
                    <div className="space-y-2">
                      {selectedService.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Stack */}
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase text-amber-400/90 tracking-wider">Tech &amp; Tools Used</span>
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
                      <CheckCircle2 size={48} className="text-amber-400 animate-bounce" />
                      <h4 className="font-sans font-bold text-xl text-white">Inquiry Received</h4>
                      <p className="text-xs text-slate-400 max-w-xs font-mono">
                        Your project details have been sent directly to our lead engineering desk. We will reach out shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                      <div>
                        <span className="font-mono text-xs uppercase text-amber-400 tracking-wider block mb-1 font-bold">
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
                      <input type="hidden" name="_subject" value={`New Inquiry for ${selectedService.title} - Ashu Studio`} />
                      <input type="hidden" name="_captcha" value="false" />

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                          Your Name <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="Client Name"
                          required
                          placeholder=""
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                          Your Email <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="Client Email"
                          required
                          placeholder=""
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                          Phone / WhatsApp Number <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="Client Phone"
                          required
                          placeholder=""
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                          Project Details / Requirements <span className="text-amber-400">*</span>
                        </label>
                        <textarea
                          name="Project Details"
                          rows={3}
                          required
                          placeholder=""
                          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white focus:outline-none focus:border-amber-400 resize-none transition-colors"
                        />
                      </div>

                      {/* 3D Animated "Send Project Inquiry" Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.96, y: 2 }}
                        className="relative group/submit p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_12px_25px_-8px_rgba(0,0,0,0.8),0_4px_10px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 w-full mt-2 disabled:opacity-50"
                      >
                        {/* 3D Rotating Neon Ring */}
                        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-70 group-hover/submit:opacity-100 transition-opacity duration-500" />

                        {/* Button Inner Glass */}
                        <div className="relative py-3.5 px-6 rounded-full bg-gradient-to-b from-[#161720] to-[#0a0a0f] border-t border-white/25 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover/submit:from-[#1d1e2b] group-hover/submit:to-[#0e0f17]">
                          <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover/submit:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />
                          <span className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover/submit:opacity-100 transition-opacity duration-300" />
                          
                          <Send size={14} className="text-amber-400" />
                          <span className="font-mono text-xs uppercase tracking-widest text-slate-200 group-hover/submit:text-amber-200 font-bold transition-colors">
                            {isSubmitting ? 'Verifying & Sending...' : 'Send Project Inquiry'}
                          </span>
                        </div>
                      </motion.button>
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