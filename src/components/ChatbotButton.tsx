import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, GraduationCap, MapPin, BookOpen, Sparkles, ArrowUp } from "lucide-react";
import { useLenis } from "../context/LenisContext";

interface Message {
  sender: "bot" | "user";
  text: string;
  time: string;
}

const FAQ_RESPONSES: Record<string, string> = {
  "admissions": "🎓 **Admissions 2026-27:**\nAdmission is open for B.E. / B.Tech engineering programs. \n\n• **Courses Offered:** Computer Engineering, Information Technology, AIML, Civil, Mechanical, Electrical, and Electronics & Communication.\n• **Eligibility:** 12th HSC Science stream (PCM) + GUJCET / JEE.\n• **Admission Route:** Conducted via ACPC (Admission Committee for Professional Courses) & Gujarat Technological University (GTU).\n• **Admissions Helpline:** +91 63550 55839 / +91 63550 62275\n• **Email:** contact@ckpcet.ac.in\n\nClick 'Apply Now' in the header to get started!",
  "academics": "📚 **Academic Programs:**\nWe offer premier, GTU-affiliated and AICTE-approved engineering courses:\n\n1. **Computer Engineering & AIML:** Advanced algorithms, machine learning, cloud architectures, and software engineering.\n2. **Information Technology:** Network security, full-stack web development, and database systems.\n3. **Core Engineering:** Civil, Mechanical, Electrical, and Electronics & Communication engineering labs with industry tools.",
  "research": "💡 **Incubation & SSIP cell:**\n• **SSIP Cell:** Affiliated with the Student Start-up & Innovation Policy of Gujarat state.\n• **Startup Funding:** Grants up to ₹2.5 Lakhs available for innovative engineering, robotics, & computing prototype projects.\n• **Scholarships:** Financial aid is accessible through schemes like MYSY (Mukhyamantri Yuva Swavalamban Yojana), the Digital Gujarat Scholarship Portal, and specialized trust aids.",
  "location": "📍 **Campus & Contact:**\n• **Location:** Dumas Road, Near Malvan Mandir, Surat, Gujarat, 395007.\n• **Phone:** +91 63550 55839 / +91 63550 62275\n• **Email:** contact@ckpcet.ac.in\n• **Visiting Hours:** 9:30 AM - 5:10 PM (Monday - Saturday)"
};

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lenis = useLenis();
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "👋 Welcome to CKPCET virtual helpdesk! I'm your interactive assistant. How can I guide you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.95 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text: string, isFaq = false) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botText = "";
      if (isFaq) {
        const key = text.toLowerCase();
        if (key.includes("admission")) botText = FAQ_RESPONSES.admissions;
        else if (key.includes("academic") || key.includes("program") || key.includes("course")) botText = FAQ_RESPONSES.academics;
        else if (key.includes("research") || key.includes("ssip") || key.includes("startup")) botText = FAQ_RESPONSES.research;
        else if (key.includes("contact") || key.includes("location")) botText = FAQ_RESPONSES.location;
      } else {
        // Simple keyword routing
        const query = text.toLowerCase();
        if (query.includes("admission") || query.includes("apply") || query.includes("seat") || query.includes("fees") || query.includes("hsc") || query.includes("gtu") || query.includes("acpc") || query.includes("gujcet") || query.includes("jee")) {
          botText = FAQ_RESPONSES.admissions;
        } else if (query.includes("course") || query.includes("program") || query.includes("computer") || query.includes("civil") || query.includes("mechanical") || query.includes("electrical") || query.includes("aiml") || query.includes("engineering") || query.includes("class") || query.includes("branch")) {
          botText = FAQ_RESPONSES.academics;
        } else if (query.includes("research") || query.includes("ssip") || query.includes("startup") || query.includes("mysy") || query.includes("grant") || query.includes("scholarship")) {
          botText = FAQ_RESPONSES.research;
        } else if (query.includes("address") || query.includes("map") || query.includes("where") || query.includes("number") || query.includes("phone") || query.includes("location") || query.includes("contact")) {
          botText = FAQ_RESPONSES.location;
        } else if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
          botText = "Hello! Nice to meet you. Please select one of the topics below or type any question regarding CKPCET admissions, programs, or campus details!";
        } else {
          botText = "Thank you for reaching out! For detailed queries regarding eligibility, fees, or administrative processes, please contact our helpdesk at **+91 63550 55839** or email **contact@ckpcet.ac.in** directly.";
        }
      }

      const botMsg: Message = {
        sender: "bot",
        text: botText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 750);
  };

  return (
    <>
      {/* Floating Buttons Column */}
      <div id="chatbot-wrapper" className="fixed bottom-[65px] sm:bottom-[80px] md:bottom-[96px] xl:bottom-10 right-4 sm:right-8 md:right-10 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Back to top button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              onClick={handleBackToTop}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/95 hover:bg-white text-[#0F172A] hover:text-[#2563EB] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-slate-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="sm:w-5 sm:h-5 stroke-[2.5]" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chatbot Dialogue Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="w-[92vw] sm:w-[380px] h-[420px] sm:h-[520px] max-h-[62vh] sm:max-h-[75vh] bg-white rounded-3xl border border-slate-100 shadow-[0_24px_60px_rgba(27,21,21,0.18)] overflow-hidden overscroll-contain flex flex-col font-sans mb-1"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-[#0F172A] p-4 text-white flex items-center justify-between border-b border-[#2563EB]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 border border-[#2563EB]/50 shadow-inner">
                    <span className="text-[#0F172A] font-bold text-xs font-sans">CMC</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[13px] tracking-wide leading-none uppercase text-white">CKPCET GUIDE</h4>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
                      <span className="text-[9px] text-[#2563EB] font-bold tracking-widest uppercase">Campus Assistant</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Chat Message Box */}
              <div ref={scrollRef} data-lenis-prevent="true" className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4 bg-slate-50 relative">
                {messages.map((msg, i) => (
                  <div 
                    key={i} 
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div 
                      className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed whitespace-pre-line shadow-xs border ${
                        msg.sender === "user" 
                          ? "bg-[#3B3131] text-white border-transparent rounded-tr-none" 
                          : "bg-white text-slate-800 border-slate-100 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-slate-400 mt-1 px-1">{msg.time}</span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex flex-col items-start">
                    <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-3 shadow-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Options */}
              <div className="px-4 py-2 border-t border-slate-100 bg-white flex flex-wrap gap-1.5">
                <button 
                  onClick={() => handleSendMessage("Admissions Inquiry", true)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-50 hover:bg-[#2563EB]/10 hover:text-[#0F172A] text-slate-700 text-[10px] font-bold font-sans transition-all border border-slate-200 cursor-pointer"
                >
                  <GraduationCap size={12} className="text-[#2563EB]" />
                  <span>Admissions</span>
                </button>
                <button 
                  onClick={() => handleSendMessage("Academic Programs", true)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-50 hover:bg-[#2563EB]/10 hover:text-[#0F172A] text-slate-700 text-[10px] font-bold font-sans transition-all border border-slate-200 cursor-pointer"
                >
                  <BookOpen size={12} className="text-[#2563EB]" />
                  <span>Programs</span>
                </button>
                <button 
                  onClick={() => handleSendMessage("Scholarships & SSIP", true)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-50 hover:bg-[#2563EB]/10 hover:text-[#0F172A] text-slate-700 text-[10px] font-bold font-sans transition-all border border-slate-200 cursor-pointer"
                >
                  <Sparkles size={11} className="text-[#2563EB]" />
                  <span>SSIP / Startup</span>
                </button>
                <button 
                  onClick={() => handleSendMessage("Contact & Location", true)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-50 hover:bg-[#2563EB]/10 hover:text-[#0F172A] text-slate-700 text-[10px] font-bold font-sans transition-all border border-slate-200 cursor-pointer"
                >
                  <MapPin size={11} className="text-[#2563EB]" />
                  <span>Contact</span>
                </button>
              </div>

              {/* Text Input Footer */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (inputValue.trim()) {
                    handleSendMessage(inputValue);
                  }
                }}
                className="p-3 border-t border-slate-100 bg-white flex items-center gap-2"
              >
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask any question about college..."
                  className="flex-1 px-3.5 py-2 bg-slate-100 border border-transparent hover:border-slate-200 focus:border-[#2563EB] focus:bg-white text-xs text-slate-800 rounded-xl focus:outline-none transition-all leading-normal font-sans"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 bg-[#0F172A] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1E293B] text-white rounded-xl transition-all cursor-pointer shadow-xs shrink-0"
                >
                  <Send size={14} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Toggle Button */}
        <div className="relative">
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            style={{ width: "43px", height: "40px" }}
            className="bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-full flex items-center justify-center shadow-[0_12px_40px_rgba(27,21,21,0.3)] border-2 border-[#2563EB]/50 transition-all cursor-pointer relative"
            aria-label="Chat with assistant"
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <MessageSquare size={20} className="sm:w-6 sm:h-6" />}
            
            {/* Symmetrical live pulsating notification dot indicator */}
            {!isOpen && (
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#2563EB] border-2 border-[#0F172A]"></span>
              </span>
            )}
          </motion.button>
        </div>
      </div>
    </>
  );
}
