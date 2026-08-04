import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown, HelpCircle, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { useClipReveal } from '../hooks/useClipReveal';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "How do I secure a merit seat at CKPCET?",
    answer: "Admissions to our Bachelor of Engineering (B.E.) programs are administered securely and transparently through the Admission Committee for Professional Courses (ACPC), Gujarat, based on GUJCET or JEE Main merit credentials."
  },
  {
    id: 2,
    question: "What scholarship assistance schemes are currently active?",
    answer: "Eligible academic achievers can obtain multiple government and trust scholarship provisions, including MYSY (Mukhyamantri Yuva Swavalamban Yojana), the digital Gujarat scholarship portal, and specialized Freeship Card options for SC/ST students."
  },
  {
    id: 3,
    question: "Is modern campus residential or hostel housing provided?",
    answer: "Yes, our academic campus hosts secure residential facilities with strong surveillance, nutritious vegetarian dining options, recreation courtyards, and active student mentorship groups."
  },
  {
    id: 4,
    question: "What are the rules for course migrations or college transfers?",
    answer: "Our college coordinates candidate transfers and GTU local migration applications subject to seat availability, verified science HSC prerequisites, and official university NOC guidelines."
  }
];

interface AdmissionsProps {
  onOpenAdmissions?: () => void;
}

export default function Admissions({ onOpenAdmissions }: AdmissionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useClipReveal();
  const [openFaqId, setOpenFaqId] = useState<number | null>(1); // default open first item

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section 
      ref={(el) => {
        if (el) {
          (revealRef as React.MutableRefObject<HTMLElement>).current = el;
          (containerRef as React.MutableRefObject<HTMLDivElement>).current = el as HTMLDivElement;
        }
      }}
      id="admissions" 
      className="py-24 md:py-36 bg-[#0A2850] text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Decorative overlay backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
          alt="Students walking"
          className="w-full h-full absolute inset-0 object-cover opacity-5 filter grayscale mix-blend-screen"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2850]/95 via-[#0A2850]/90 to-[#0A2850]" />
      </div>

      {/* Decorative geometric patterns */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#E5B224]/5 border border-[#E5B224]/10 pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#E5B224]/5 border border-[#E5B224]/10 pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-20 items-center">
          
          {/* COLUMN A: Dynamic Call to Actions */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {/* Category indicator badge */}
              <div 
                onClick={onOpenAdmissions}
                className="flex items-center gap-2.5 mb-6 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span className="w-10 h-[1.5px] bg-[#E5B224]" />
                <span className="font-mono text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-[#E5B224] uppercase">
                  ADMISSIONS 2026-27
                </span>
                <span className="font-sans text-[8.5px] font-bold bg-[#E5B224]/10 text-[#E5B224] border border-[#E5B224]/20 px-2.5 py-0.5 rounded-full uppercase shadow-2xs">
                  OPEN
                </span>
              </div>

              <h2 className="text-4xl md:text-5.5xl font-display text-white font-bold leading-[1.12] tracking-tight mb-6">
                Begin your journey to <span className="italic font-light text-[#E5B224] font-display block sm:inline">engineering leadership</span>.
              </h2>
              
              <p className="text-white/75 leading-relaxed text-[14.5px] md:text-base mb-10 font-sans font-light">
                Join a legacy of pioneering computer scientists, civil and mechanical engineers, network administrators, and innovative technology researchers. Enrolling via state-wide ACPC centralized web systems or our dedicated institutional assistance desks is now fully open.
              </p>

              {/* Action buttons stack */}
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                <button 
                  onClick={() => {
                    if (onOpenAdmissions) {
                      onOpenAdmissions();
                    }
                  }}
                  className="bg-[#E5B224] text-[#0A2850] hover:bg-white hover:text-[#0A2850] px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_12px_30px_rgba(229,178,36,0.2)] hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto cursor-pointer select-none"
                >
                  Apply Online Now
                </button>
                
                <button className="flex items-center gap-3.5 text-xs font-bold uppercase tracking-widest text-white hover:text-[#E5B224] transition-all group w-full sm:w-auto justify-center cursor-pointer select-none">
                  <span>Download Prospectus</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#E5B224] group-hover:border-transparent group-hover:text-[#0A2850] transition-all group-hover:scale-105">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>

              {/* Fast fact badges line */}
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="flex flex-col items-start">
                  <span className="font-sans text-[11px] font-semibold text-white/50 uppercase tracking-widest">GUJARAT ACPC & GTU CODES</span>
                  <span className="font-sans text-[20px] font-semibold text-[#E5B224] tracking-wide mt-1">CKPCET - Surat</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-sans text-[11px] font-semibold text-white/50 uppercase tracking-widest">SSIP STARTUP AID</span>
                  <span className="font-sans text-[20px] font-semibold text-emerald-400 tracking-wide mt-1">Research Cell</span>
                </div>
              </div>

            </motion.div>
          </div>

          {/* COLUMN B: FAQ Accordions Stack */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0B2545]/95 border border-white/15 rounded-[2.5rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-md relative"
            >
              {/* Floating micro accent */}
              <div className="absolute top-6 right-6 flex items-center gap-1.5 opacity-80">
                <Sparkles size={11} className="text-[#E5B224]" />
                <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-[#E5B224]">FAQ ENGINE</span>
              </div>

              <div className="mb-8 select-none">
                <h3 className="text-xl md:text-2xl font-sans font-semibold text-white mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="font-sans text-white/60 font-light text-[12.5px] md:text-[13px]">
                  Find fast, authoritative admissions coordination references gathered directly from university registry advisors.
                </p>
              </div>

              {/* Accordion loop */}
              <div className="flex flex-col gap-3.5">
                {FAQ_DATA.map((faq) => {
                  const isOpen = faq.id === openFaqId;
                  return (
                    <div
                      key={faq.id}
                      className={`rounded-2xl border transition-all duration-350 relative overflow-hidden select-none ${
                        isOpen 
                          ? 'bg-[#0A2850] border-[#E5B224]/60 shadow-md ring-1 ring-[#E5B224]/20' 
                          : 'bg-[#0A2850]/40 border-white/10 hover:border-[#E5B224]/40 hover:bg-[#0A2850]/60'
                      }`}
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left py-4.5 px-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <HelpCircle 
                            size={16} 
                            className={`shrink-0 transition-colors duration-300 ${isOpen ? 'text-[#E5B224]' : 'text-white/40'}`} 
                          />
                          <span className={`font-sans text-[13.5px] md:text-[14.5px] font-semibold tracking-wide transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80'}`}>
                            {faq.question}
                          </span>
                        </div>

                        <div className={`p-1.5 rounded-full border shrink-0 transition-all duration-300 ${
                          isOpen ? 'border-[#E5B224]/40 bg-[#E5B224]/10 text-[#E5B224] rotate-180' : 'border-white/10 text-white/40'
                        }`}>
                          <ChevronDown size={14} className="stroke-[2.5]" />
                        </div>
                      </button>

                      {/* Collapsible content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-0 border-t border-white/10 font-sans font-light text-[13px] md:text-[14px] leading-relaxed text-white/80">
                              <p className="mt-3 bg-[#0A2850] p-4 rounded-xl border border-[#E5B224]/20 text-white/90">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  );
                })}
              </div>

              {/* Support message */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <span className="font-sans text-[11px] font-light text-white/50">
                  Have specific queries regarding fee structures or management seats?
                </span>
                <a 
                  href="mailto:info@ckpcet.ac.in"
                  className="font-mono text-[10px] font-bold text-[#E5B224] hover:underline block mt-1 hover:text-white uppercase tracking-wider"
                >
                  Contact Registry Desk — info@ckpcet.ac.in
                </a>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
