import { motion } from 'framer-motion';

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

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-[#07080c] text-white overflow-hidden select-none">
      {/* Background Radial Lights */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-m font-mono tracking-[0.3em] text-cyan-400 uppercase">Skills Behind the Work</span>
          <h2 className="font-sans text-4xl lg:text-5xl font-black mt-4 uppercase tracking-tight">
            The tools that <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">power our craft</span>
          </h2>
          <p className="mt-6 text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            We invest deeply in mastering the technologies and tools that matter — so you get work that is
            not just beautiful, but built on a foundation of real expertise.
          </p>
        </motion.div>
      </div>

      {/* 🚀 Seamless Infinite Floating Marquee Rows with Edge Fades */}
      <div className="relative w-full space-y-6 overflow-hidden">
        {/* Left & Right Smooth Blur Fades */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-r from-[#07080c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-l from-[#07080c] to-transparent z-10 pointer-events-none" />

        {/* ROW 1: Left to Right */}
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/[0.08] bg-[#0c0d15]/80 backdrop-blur-md hover:border-cyan-400/50 hover:bg-white/[0.06] hover:scale-105 transition-all duration-300 group shadow-lg"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-7 h-7 object-contain group-hover:rotate-6 transition-transform filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-sans font-semibold text-sm text-slate-200 group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* ROW 2: Right to Left (Reverse Direction) */}
        <div
          className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDirection: 'reverse', animationDuration: '32s' }}
        >
          {[...row2, ...row2, ...row2].map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/[0.08] bg-[#0c0d15]/80 backdrop-blur-md hover:border-teal-400/50 hover:bg-white/[0.06] hover:scale-105 transition-all duration-300 group shadow-lg"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-7 h-7 object-contain group-hover:-rotate-6 transition-transform filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-sans font-semibold text-sm text-slate-200 group-hover:text-teal-300 transition-colors whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* ROW 3: Left to Right */}
        <div
          className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: '38s' }}
        >
          {[...row3, ...row3, ...row3].map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/[0.08] bg-[#0c0d15]/80 backdrop-blur-md hover:border-indigo-400/50 hover:bg-white/[0.06] hover:scale-105 transition-all duration-300 group shadow-lg"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-7 h-7 object-contain group-hover:rotate-6 transition-transform filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-sans font-semibold text-sm text-slate-200 group-hover:text-indigo-300 transition-colors whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}