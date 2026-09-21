import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface ProjectItem {
  title: string;
  category: string;
  desc: string;
  image: string;
  link: string;
}

const projects: ProjectItem[] = [
  {
    title: 'Linkdock website',
    category: 'Web App',
    desc: 'LinkDock is a unified directory platform built to eliminate bookmark clutter.',
    image: '/1 Project.png',
    link: 'https://linkdockofficial.netlify.app/',
  },
  {
    title: 'Laksh Empires Real State',
    category: 'Web App',
    desc: 'Laksh Empire — An ultra-luxurious real estate platform featuring immersive property showcases.',
    image: '/2 project.png',
    link: 'https://lakshempires.netlify.app/',
  },
  {
    title: 'OmniQ-AI',
    category: 'Web & Mobile App',
    desc: 'OmniQ AI — Real-Time Conversational Search & Reasoning Engine',
    image: '/3project.png',
    link: 'https://yourprojectlink.com',
  },
  {
    title: 'Arcade Quest',
    category: 'Game',
    desc: 'A browser-based 2D adventure game with physics and storytelling.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    link: 'https://yourprojectlink.com',
  },
  {
    title: 'AI Support Agent',
    category: 'AI Integration',
    desc: 'A multi-agent system handling 24/7 customer support across channels.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    link: 'https://yourprojectlink.com',
  },
  {
    title: 'Vertex Landing',
    category: 'Landing Page',
    desc: 'A high-converting SaaS landing page with 3D scroll animations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    link: 'https://yourprojectlink.com',
  },
  {
    title: 'Cyber Commerce',
    category: 'Web App',
    desc: 'High-speed e-commerce platform with automated inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&q=80&w=800',
    link: 'https://yourprojectlink.com',
  },
  {
    title: 'Aura AI Writer',
    category: 'AI Integration',
    desc: 'Context-aware generative content tool tailored for marketing agencies.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    link: 'https://yourprojectlink.com',
  },
];

const filters = ['All', 'Web App', 'Branding', 'Mobile App', 'Game', 'AI Integration', 'Landing Page'];

// ⚡ 3D Interactive Tilt Project Card
function TiltProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
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
        transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
        className="group relative h-full rounded-3xl p-[1.5px] overflow-hidden bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-[0_15px_30px_-10px_rgba(0,0,0,0.9),0_0_20px_rgba(245,158,11,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(245,158,11,0.25)] transition-shadow duration-500 flex flex-col justify-between"
      >
        {/* 3D Rotating Golden Neon Border Ring on Hover */}
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Card Inner Body */}
        <div className="relative h-full w-full rounded-[23px] bg-[#0c0d15]/95 border border-white/[0.08] group-hover:border-amber-400/40 backdrop-blur-2xl flex flex-col justify-between overflow-hidden transition-colors duration-300">
          
          {/* Visual Image Banner */}
          <div className="relative h-48 w-full overflow-hidden bg-white/5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d15] via-transparent to-transparent" />
            
            {/* Direct Link Popout Icon */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              style={{ transform: 'translateZ(30px)' }}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#07080c]/85 border border-amber-400/40 text-amber-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:scale-110"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          {/* Content & Action */}
          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <span className="text-xs font-mono tracking-wider text-amber-400/90 uppercase font-semibold">
                {project.category}
              </span>
              <h3 className="font-sans font-bold text-xl text-white mt-2 mb-2 group-hover:text-amber-200 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {project.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                {project.desc}
              </p>
            </div>

            {/* 3D Animated "Visit Website" Button */}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.96, y: 2 }}
              className="relative group/btn p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_10px_22px_-6px_rgba(0,0,0,0.8),0_3px_8px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 w-full inline-block"
            >
              {/* 3D Rotating Neon Light Ring */}
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-70 group-hover/btn:opacity-100 transition-opacity duration-500" />

              {/* Button Inner Body */}
              <div className="relative py-3 px-4 rounded-full bg-gradient-to-b from-[#161720] to-[#0a0a0f] border-t border-white/25 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover/btn:from-[#1d1e2b] group-hover/btn:to-[#0e0f17]">
                <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover/btn:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />
                <span className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

                <span className="font-mono text-xs uppercase tracking-widest text-slate-200 group-hover/btn:text-amber-200 font-bold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover/btn:shadow-[0_0_8px_#f59e0b] transition-all" />
                  <span>Visit</span>
                  <ExternalLink size={14} className="text-amber-400 group-hover/btn:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category.toLowerCase() === active.toLowerCase());
  const displayedProjects = showAll ? filtered : filtered.slice(0, 6);

  const handleFilterChange = (f: string) => {
    setActive(f);
    setShowAll(false);
  };

  return (
    <section id="work" className="relative py-24 lg:py-32 bg-[#07080c] text-white overflow-hidden select-none">
      {/* Ambient Lighting Background */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          {/* Floating Pill Badge */}
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
      Our Work
    </span>
    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
  </div>
</motion.div>

          <h2 className="font-sans text-4xl lg:text-5xl font-black mt-2 uppercase tracking-tight leading-[1.1] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            Projects we are{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]">
              proud of
            </span>
          </h2>

          <p className="mt-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            A selection of work spanning web, mobile, branding, and AI — each crafted with care and shipped with confidence.
          </p>
        </motion.div>

        {/* 3D Interactive Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <motion.button
                key={f}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange(f)}
                className={`relative px-4 sm:px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)] border border-amber-300'
                    : 'bg-[#141520]/80 text-slate-300 hover:text-white border border-white/10 hover:border-amber-400/40'
                }`}
              >
                {f}
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayedProjects.map((p, i) => (
            <TiltProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* 🔘 3D View All Button */}
        {filtered.length > 6 && (
          <div className="mt-14 text-center relative z-20">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96, y: 2 }}
              onClick={() => setShowAll((prev) => !prev)}
              className="relative group p-[1.5px] rounded-full overflow-hidden cursor-pointer shadow-[0_12px_25px_-8px_rgba(0,0,0,0.8),0_4px_10px_rgba(245,158,11,0.15)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 inline-block"
            >
              {/* 3D Rotating Golden Neon Ring */}
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Inner Glass */}
              <div className="relative px-8 py-3.5 rounded-full bg-gradient-to-b from-[#161720] to-[#0a0a0f] border-t border-white/25 border-b border-black/80 backdrop-blur-xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 group-hover:from-[#1d1e2b] group-hover:to-[#0e0f17]">
                <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[140%] transition-all duration-1000 ease-out pointer-events-none" />
                <span className="absolute bottom-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="font-mono text-xs uppercase tracking-widest text-slate-200 group-hover:text-amber-200 font-bold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:shadow-[0_0_8px_#f59e0b] transition-all" />
                  <span>{showAll ? 'Show Less Projects' : `View All Projects (${filtered.length})`}</span>
                  {showAll ? (
                    <ChevronUp size={16} className="text-amber-400" />
                  ) : (
                    <ChevronDown size={16} className="text-amber-400" />
                  )}
                </span>
              </div>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}