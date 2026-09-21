import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Send, X, Sparkles, Bot } from 'lucide-react';

type ChatMessage = {
  role: 'user' | 'bot';
  text: string;
};

const initialMessages: ChatMessage[] = [
  {
    role: 'bot',
    text: "Hi! I'm Ashu Jha Studio AI assistant, available 24/7. How can I help you build your vision today?",
  },
];

const knowledge: { keywords: string[]; response: string }[] = [
  {
    keywords: ['service', 'offer', 'do', 'provide'],
    response:
      "We offer: Bespoke Web Development, Full-Stack Platforms, Conversion Landing Pages, Mobile Apps, UX/UI Design Systems, Vector Brand Marks, 3D WebGL Motion, AI Integration, and Autonomous AI Agents. Which one interests you?",
  },
  {
    keywords: ['price', 'cost', 'quote', 'budget', 'how much', 'rate'],
    response:
      "Pricing depends strictly on your project scope. Landing pages start smaller, while full-stack systems and custom AI pipelines are strategic investments. Fill out our contact form or reach out on WhatsApp for a locked milestone quote within 24 hours!",
  },
  {
    keywords: ['time', 'long', 'duration', 'timeline', 'how fast'],
    response:
      "Timelines are swift and locked: landing pages typically 1-2 Days, web apps 4-8 Days, and deep AI integrations 6-12 Days. Committed schedules with zero endless delays.",
  },
  {
    keywords: ['contact', 'reach', 'email', 'talk', 'human', 'whatsapp'],
    response:
      "You can submit the direct contact form on this page or email us at aetherixofficialsupport@gmail.com. You can also chat directly on WhatsApp at +91 95724 97103!",
  },
  {
    keywords: ['ai', 'agent', 'chatbot', 'integration', 'rag', 'llm'],
    response:
      "We specialize in enterprise AI — embedding private LLMs, automated RAG search, 24/7 autonomous support agents, and workflow automations tailored to your operations.",
  },
  {
    keywords: ['design', 'logo', 'brand', 'poster', 'ui', 'ux', 'figma'],
    response:
      "Our design arm creates high-authority visual languages: UX/UI design systems in Figma, vector logos, marketing banners, and 3D spatial motion graphics.",
  },
  {
    keywords: ['game', 'play', 'webgl', 'three', '3d'],
    response:
      "We build interactive 3D browser experiences and WebGL applications with 60 FPS hardware acceleration using Three.js and custom GLSL shaders.",
  },
  {
    keywords: ['where', 'location', 'country', 'global', 'world'],
    response:
      "We partner with clients globally across all continents and time zones. Our engineering workflow is built for seamless remote and asynchronous collaboration.",
  },
  {
    keywords: ['support', 'help', 'maintain', 'after', 'post'],
    response:
      "Yes! Every project comes with dedicated post-launch support and optional retainer maintenance plans, plus 24/7 AI chat readiness right here.",
  },
  {
    keywords: ['hello', 'hi', 'hey', 'start'],
    response:
      "Hello! Welcome to Ashu Jha Digital Studio. I can provide details on services, milestone delivery, pricing estimates, and tech stacks. What would you like to explore?",
  },
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of knowledge) {
    if (entry.keywords.some((k) => lower.includes(k))) {
      return entry.response;
    }
  }
  return "That's a great question! For a custom roadmap tailored specifically to your goals, please drop your details in the contact form below or connect directly on WhatsApp.";
}

export default function AIChatSupport() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { role: 'user', text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const botMsg: ChatMessage = { role: 'bot', text: getResponse(userMsg.text) };
      setMessages((m) => [...m, botMsg]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  return (
    <>
      {/* ⚡ 3D Floating Golden Neon Orb Trigger (Bottom Right) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
        className="fixed bottom-6 right-6 z-50 select-none"
      >
        <motion.button
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94, y: 2 }}
          onClick={() => setOpen(!open)}
          className="relative w-15 h-15 rounded-2xl p-[1.5px] overflow-hidden cursor-pointer shadow-[0_12px_28px_-6px_rgba(0,0,0,0.9),0_0_25px_rgba(245,158,11,0.25)] active:shadow-[0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-300 flex items-center justify-center"
          aria-label="AI Support Chat"
        >
          {/* 3D Rotating Golden Neon Light Ring */}
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-85 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Button Inner Glass Surface */}
          <div className="relative w-full h-full rounded-[14px] bg-gradient-to-b from-[#181926] via-[#0d0e16] to-[#07080c] border-t border-white/30 border-b border-black/90 backdrop-blur-2xl flex items-center justify-center text-white overflow-hidden">
            {/* Diagonal Holographic Sheen */}
            <span className="absolute -top-10 -bottom-10 -left-12 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] pointer-events-none" />

            {open ? (
              <X className="w-6 h-6 text-amber-300 transition-transform duration-300" />
            ) : (
              <div className="relative flex items-center justify-center">
                {/* 3D Starburst AI Icon */}
                <svg
                  className="w-7 h-7 text-amber-300 filter drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
                    fill="currentColor"
                  />
                  <circle cx="19" cy="5" r="1.5" fill="#fef08a" />
                  <circle cx="5" cy="19" r="1.2" fill="#fbbf24" />
                </svg>

                {/* Online Glowing Pulse Dot */}
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#090a10] shadow-[0_0_8px_#34d399] animate-pulse" />
              </div>
            )}
          </div>
        </motion.button>
      </motion.div>

      {/* ⚡ 3D Luxury Cyber Glass Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.94 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[390px] h-[540px] max-h-[78vh] p-[1.5px] rounded-3xl overflow-hidden shadow-[0_25px_60px_-10px_rgba(0,0,0,0.95),0_0_40px_rgba(245,158,11,0.2)] select-none"
          >
            {/* Rotating Subtle Golden Border */}
            <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-60 pointer-events-none" />

            {/* Window Container */}
            <div className="relative w-full h-full rounded-[22px] bg-[#0c0d15]/98 backdrop-blur-2xl border border-white/[0.08] flex flex-col overflow-hidden text-white">
              
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/5 border border-amber-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                    <Bot className="w-5 h-5 text-amber-300" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#0c0d15] shadow-[0_0_6px_#34d399]" />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-sm text-white tracking-wider uppercase flex items-center gap-1.5">
                      <span>Ashu Studio AI</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online · 24/7 Response
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages Scroll Area */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3.5">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {msg.role === 'bot' && (
                      <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed font-light ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-medium rounded-tr-none shadow-[0_4px_15px_rgba(245,158,11,0.3)]'
                          : 'bg-[#151622]/90 border border-white/10 text-slate-200 rounded-tl-none shadow-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Dots */}
                {typing && (
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    </div>
                    <div className="bg-[#151622]/90 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 shadow-md">
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.2 }}
                          className="w-1.5 h-1.5 rounded-full bg-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Prompt Pills */}
              {messages.length <= 2 && (
                <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                  {['Services offered?', 'Pricing estimate?', 'Project timeline?'].map((q) => (
                    <button
                      key={q}
                      onClick={() => setInput(q)}
                      className="text-[11px] font-mono px-3 py-1 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:text-amber-200 hover:border-amber-400/40 transition-all cursor-pointer shadow-sm"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Bar with 3D Send Button */}
              <div className="p-3.5 border-t border-white/10 bg-[#08080d]/80">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && send()}
                    placeholder="Ask Ashu Studio AI..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400/70 transition-all"
                  />

                  {/* 3D Animated Send Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={send}
                    disabled={!input.trim()}
                    className="relative group p-[1px] rounded-xl overflow-hidden cursor-pointer disabled:opacity-40 shrink-0"
                    aria-label="Send message"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#f59e0b_45%,#fde047_50%,#f59e0b_55%,#000000_100%)] opacity-80" />
                    <div className="relative w-9 h-9 rounded-[11px] bg-gradient-to-b from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                      <Send className="w-4 h-4 text-slate-950" />
                    </div>
                  </motion.button>
                </div>

                <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[10px] font-mono text-slate-400">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Ashu Jha Studio · Fast Autonomous Response</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}