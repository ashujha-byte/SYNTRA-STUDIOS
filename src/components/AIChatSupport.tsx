import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Send, X, Sparkles } from 'lucide-react';

type ChatMessage = {
  role: 'user' | 'bot';
  text: string;
};

const initialMessages: ChatMessage[] = [
  {
    role: 'bot',
    text: "Hi ! I'm Ashu Jha  AI assistant, available 24/7. How can I help you today?",
  },
];

const knowledge: { keywords: string[]; response: string }[] = [
  {
    keywords: ['service', 'offer', 'do', 'provide'],
    response:
      "We offer: Web Development, Full Stack Development, Landing Page Design, App Development, UX/UI Design, Logo Design, Poster Design, Game Development, AI Integration, and AI Agents. Which one interests you?",
  },
  {
    keywords: ['price', 'cost', 'quote', 'budget', 'how much'],
    response:
      "Pricing depends on project scope. Landing pages start smaller, full-stack apps and AI integrations are larger investments. Share your requirements via the contact form and we'll send a detailed quote within 24 hours!",
  },
  {
    keywords: ['time', 'long', 'duration', 'timeline', 'how fast'],
    response:
      "Timelines vary: landing pages 1-2 Days, web apps 4-8 Days, AI integrations 6-12 Days. We'll give you a precise timeline after understanding your needs.",
  },
  {
    keywords: ['contact', 'reach', 'email', 'talk', 'human'],
    response:
      "You can reach us through the contact form on this page or email us at syntracaresupport@gmail.com. We respond within 24 hours!",
  },
  {
    keywords: ['ai', 'agent', 'chatbot', 'integration'],
    response:
      "We specialize in AI integration — from embedding LLMs into your product, building autonomous agents, RAG systems, to full multi-agent setups. Tell us what you want to automate!",
  },
  {
    keywords: ['design', 'logo', 'brand', 'poster', 'ui', 'ux'],
    response:
      "Our design services cover UX/UI, logo design, poster design, and full brand identity. We create distinctive visuals that tell your story. Check our Work section!",
  },
  {
    keywords: ['game', 'play', 'webgl'],
    response:
      "We build browser-based and mobile games with WebGL, physics engines, and polished mechanics. From 2D adventures to 3D experiences — we've got you covered.",
  },
  {
    keywords: ['where', 'location', 'country', 'global', 'world'],
    response:
      "We work with clients globally across all continents and time zones. Our workflow is built for remote, asynchronous collaboration. Where are you based?",
  },
  {
    keywords: ['support', 'help', 'maintain', 'after', 'post'],
    response:
      "Yes! Every project includes a post-launch support period, and we offer ongoing maintenance plans. Plus, I'm here 24/7 for quick questions.",
  },
  {
    keywords: ['hello', 'hi', 'hey', 'start'],
    response:
      "Hello! Welcome to Ashu Studio. I can answer questions about our services, pricing, timelines, and more. What would you like to know?",
  },
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of knowledge) {
    if (entry.keywords.some((k) => lower.includes(k))) {
      return entry.response;
    }
  }
  return "Great question! For detailed answers tailored to your needs, please use the contact form below. Our team responds within 24 hours!";
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
      {/* Premium Floating Cyber AI Orb (Bottom Right) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setOpen(!open)}
          className="relative w-14 h-14 rounded-2xl p-[1.5px] group focus:outline-none transition-transform duration-300 active:scale-95 cursor-pointer"
          aria-label="AI Support Chat"
        >
          {/* Ambient Glow Aura */}
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400 via-teal-300 to-indigo-500 blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />

          {/* Core Glass Container */}
          <span className="relative w-full h-full rounded-2xl bg-[#090a10]/95 backdrop-blur-xl border border-cyan-400/40 flex items-center justify-center text-white shadow-2xl group-hover:border-cyan-300 transition-all">
            {open ? (
              <X className="w-6 h-6 text-cyan-300 transition-transform group-hover:rotate-90" />
            ) : (
              <div className="relative flex items-center justify-center">
                {/* Modern Starburst AI Icon */}
                <svg
                  className="w-7 h-7 text-cyan-300 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
                    fill="currentColor"
                  />
                  <circle cx="19" cy="5" r="1.5" fill="#38bdf8" />
                  <circle cx="5" cy="19" r="1.2" fill="#2dd4bf" />
                </svg>

                {/* Online Status Dot */}
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#090a10] shadow-[0_0_6px_#34d399]" />
              </div>
            )}
          </span>
        </button>
      </motion.div>

      {/* Cyber Glass Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[75vh] bg-[#090a10]/95 backdrop-blur-2xl border border-cyan-500/20 rounded-3xl flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(34,211,238,0.15)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_12px_rgba(34,211,238,0.2)]">
                  <svg className="w-5 h-5 text-cyan-300" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#090a10]" />
                </div>
                <div>
                  <div className="font-sans font-bold text-sm text-white tracking-wide">
                    ASHU STUDIOS AI
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online &amp; Ready
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
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
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-cyan-300" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed font-light ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-medium rounded-tr-none shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                        : 'bg-white/[0.05] border border-white/10 text-slate-200 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing Animation */}
              {typing && (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-cyan-300" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="bg-white/[0.05] border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Pills */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {['Services offered?', 'Pricing estimate?', 'Project timeline?'].map((q) => (
                  <button
                    key={q}
                    onClick={() => setInput(q)}
                    className="text-[11px] font-mono px-3 py-1 rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-all cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3.5 border-t border-white/10 bg-white/[0.01]">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                  placeholder="Ask SYNTRA AI..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 transition-all"
                />
                <button
                  onClick={send}
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black flex items-center justify-center disabled:opacity-40 disabled:hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(34,211,238,0.25)] shrink-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-1 mt-2 text-[10px] font-mono text-slate-500">
                <Sparkles className="w-3 h-3 text-cyan-400/70" />
                <span>Ashu Jha · 24/7 Live</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}