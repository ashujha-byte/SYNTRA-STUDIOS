import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ProjectItem {
  title: string;
  category: string;
  desc: string;
  image: string;
  link: string;
}

const projects: ProjectItem[] = [
  {
    title: 'Linkdock website ',
    category: 'Web APP',
    desc: 'LinkDock is a unified directory platform built to eliminate bookmark clutter.',
    image: 'public/1 Project.png',
    link: 'https://linkdockofficial.netlify.app/',
  },
  {
    title: 'Laksh Empires Real State',
    category: 'Web APP',
    desc: 'Laksh Empire — An ultra-luxurious real estate platform featuring immersive property.',
    image: 'public/2 project.png',
    link: 'https://lakshempires.netlify.app/',
  },
  {
    title: 'PulseFit App',
    category: 'Mobile App',
    desc: 'A fitness companion app with workout tracking and social features.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800',
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
  // Example testing projects (6 se zyada hone par test karne ke liye):
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

export default function Work() {
  const [active, setActive] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  // ⚡ Agar showAll false hai toh sirf pehle 6 dikhenge, true hone par saare
  const displayedProjects = showAll ? filtered : filtered.slice(0, 6);

  const handleFilterChange = (f: string) => {
    setActive(f);
    setShowAll(false); // Filter change hone par wapas 6 projects par reset hoga
  };

  return (
    <section id="work" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs tracking-[0.3em] text-pink-400 uppercase">Our Work</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4">
            Projects we are <span className="text-gradient">proud of</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg">
            A selection of work spanning web, mobile, branding, and AI — each crafted with care and shipped with confidence.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                active === f
                  ? 'bg-gradient-to-r from-cyan-400 to-green-400 text-[#0a0a0f] font-semibold'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              {/* Visual Image */}
              <div className="relative h-48 w-full overflow-hidden bg-white/5">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45 text-cyan-400"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs text-cyan-400 tracking-wider uppercase">{p.category}</span>
                  <h3 className="font-display font-semibold text-lg mt-2 mb-2 group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{p.desc}</p>
                </div>

                {/* Visit Website Action Button */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-cyan-400 hover:text-black hover:border-cyan-400 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔘 View All Button (Only appears if projects > 6) */}
        {filtered.length > 6 && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 rounded-full border border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-400 hover:text-black text-cyan-300 font-mono text-xs uppercase tracking-widest transition-all inline-flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.2)] active:scale-95"
            >
              <span>{showAll ? 'Show Less Projects' : `View All Projects (${filtered.length})`}</span>
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}