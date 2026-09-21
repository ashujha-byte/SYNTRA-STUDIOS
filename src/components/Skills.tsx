import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
}

const row1: Skill[] = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg' },
];

const row2: Skill[] = [
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
];

const row3: Skill[] = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
  { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
];

// ⚡ 3D Interactive Neon Skill Pill
function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="relative group p-[1.5px] rounded-2xl overflow-hidden cursor-pointer shadow-[0_10px_20px_-8px_rgba(0,0,0,0.8),0_2px_8px_rgba(245,158,11,0.06)] hover:shadow-[0_12px_25px_-5px_rgba(0,0,0,0.95),0_0_20px_rgba(245,158,11,0.25)] transition-all duration-300 select-none">
      {/* 3D Rotating Golden Neon Light Ring on Hover */}
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Pill Inner Body with Hardware Bevel */}
      <div className="relative flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-gradient-to-b from-[#161722]/90 via-[#0d0e16]/95 to-[#08080d] border border-white/[0.08] group-hover:border-amber-400/40 backdrop-blur-xl overflow-hidden transition-all duration-300">
        
        {/* Diagonal 3D Holographic Light Shimmer on Hover */}
        <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-out pointer-events-none" />

        {/* Floating Icon Box */}
        <div className="relative w-8 h-8 rounded-lg bg-black/40 border border-white/10 p-1 flex items-center justify-center group-hover:border-amber-400/50 group-hover:scale-110 transition-all duration-300">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.4)] transition-all"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Skill Name */}
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-slate-200 group-hover:text-amber-200 transition-colors whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          {skill.name}
        </span>

        {/* Subtle Ambient Golden Accent Dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/40 group-hover:bg-amber-400 group-hover:shadow-[0_0_8px_#f59e0b] transition-all" />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-[#07080c] text-white overflow-hidden select-none">
      {/* Deep Atmospheric Radial Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          {/* 3D Floating Badge */}
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
      Skills Behind the Work
    </span>
    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-pulse" />
  </div>
</motion.div>

          <h2 className="font-sans text-4xl lg:text-5xl font-black mt-2 uppercase tracking-tight leading-[1.1] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            The tools that{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.35)]">
              power our craft
            </span>
          </h2>

          <p className="mt-6 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            We invest deeply in mastering the technologies and tools that matter — so you get work that is
            not just beautiful, but built on a foundation of real engineering expertise.
          </p>
        </motion.div>
      </div>

      {/* 🚀 Seamless Infinite Floating Marquee Rows with Cinematic Edge Fades */}
      <div className="relative w-full space-y-6 overflow-hidden z-10">
        {/* Left & Right Smooth Edge Blur Vignettes */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-r from-[#07080c] via-[#07080c]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-l from-[#07080c] via-[#07080c]/80 to-transparent z-20 pointer-events-none" />

        {/* ROW 1: Left to Right */}
        <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((skill, idx) => (
            <SkillPill key={`${skill.name}-${idx}`} skill={skill} />
          ))}
        </div>

        {/* ROW 2: Right to Left (Reverse Direction) */}
        <div
          className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDirection: 'reverse', animationDuration: '32s' }}
        >
          {[...row2, ...row2, ...row2].map((skill, idx) => (
            <SkillPill key={`${skill.name}-${idx}`} skill={skill} />
          ))}
        </div>

        {/* ROW 3: Left to Right */}
        <div
          className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: '38s' }}
        >
          {[...row3, ...row3, ...row3].map((skill, idx) => (
            <SkillPill key={`${skill.name}-${idx}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}