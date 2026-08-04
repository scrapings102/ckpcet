import React from 'react';
import { ArrowRight, Award, GraduationCap, Building2, ShieldCheck, Sparkles, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cdn } from '../utils/image';

export const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden relative" id="about">
      {/* Background soft glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00509d]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#0B2545]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#0B2545] text-[#E5B224] text-[11px] font-mono tracking-[0.2em] uppercase font-bold rounded-full mb-6 border border-[#E5B224]/30 shadow-sm">
              <span className="w-2 h-2 bg-[#E5B224] rounded-full animate-pulse" />
              <span>Established 1998 • GTU Affiliated • AICTE Approved</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0B2545] font-bold leading-[1.18] mb-6">
              Pioneering Technical Education & <br className="hidden sm:inline" />
              <span className="text-[#00509d] relative inline-block">
                Engineering Distinction
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#E5B224]/50 rounded-full" />
              </span>
            </h2>

            <div className="space-y-4 text-slate-700 leading-relaxed font-sans text-sm md:text-base font-normal mb-8">
              <p>
                <strong className="text-[#0B2545] font-semibold">C. K. Pithawalla College of Engineering and Technology (CKPCET)</strong> is a premier self-financed engineering institution in Surat, Gujarat. Managed by the highly respected <span className="text-[#0B2545] font-semibold">Navyug Vidyabhavan Trust</span>, our campus is dedicated to nurturing world-class engineers, computer software architects, and physical systems developers.
              </p>
              <p className="text-sm text-slate-500">
                Situated along Dumas Road near Malvan Mandir, our institution blends rigorous technical curricula with high-speed computation facilities, advanced machine workshops, digitized libraries, and comprehensive placements in leading software and infrastructure corporations.
              </p>
            </div>

            {/* Key Value Highlight Grid */}
            <div className="grid grid-cols-2 gap-4 mb-9">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-[#00509d]/20 transition-all duration-300">
                <div className="p-2 rounded-xl bg-[#00509d] text-white shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-[#0B2545] uppercase tracking-wide">Legacy Trust</h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-tight mt-0.5">Navyug Vidyabhavan leadership</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-[#00509d]/20 transition-all duration-300">
                <div className="p-2 rounded-xl bg-[#00509d] text-white shrink-0">
                  <Cpu size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-[#0B2545] uppercase tracking-wide">Undergrad B.E.</h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-tight mt-0.5">Computer, IT, AIML & Core</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-[#00509d]/20 transition-all duration-300">
                <div className="p-2 rounded-xl bg-[#00509d] text-white shrink-0">
                  <Building2 size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-[#0B2545] uppercase tracking-wide">Heavy Machinery</h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-tight mt-0.5">State-of-the-art physics & core labs</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-[#00509d]/20 transition-all duration-300">
                <div className="p-2 rounded-xl bg-[#00509d] text-white shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-[#0B2545] uppercase tracking-wide">GTU Placements</h4>
                  <p className="font-sans text-[11px] text-slate-500 leading-tight mt-0.5">Active tech recruitment cell</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => navigate('/about-us/profile')}
                className="px-7 py-3.5 bg-[#00509d] text-white hover:bg-[#0B2545] rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 group shadow-lg shadow-[#00509d]/20 cursor-pointer select-none active:scale-95"
              >
                <span>Read Institute Profile</span>
                <ArrowRight size={15} className="text-[#E5B224] group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => navigate('/about-us/vision-and-mission')}
                className="px-6 py-3.5 bg-white text-[#0B2545] border border-slate-200 hover:border-[#00509d] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer select-none active:scale-95"
              >
                <Sparkles size={14} className="text-[#E5B224]" />
                <span>Vision & Mission</span>
              </button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_25px_60px_rgba(15,41,66,0.15)] border border-slate-200 bg-[#0B2545]">
              <img 
                src={cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 1200, 90)} 
                alt="CKPCET Campus Surat" 
                className="w-full h-[360px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[#E5B224] text-[10px] font-mono font-bold tracking-widest uppercase mb-1">
                  <Building2 size={13} />
                  <span>Dumas Road, Surat Campus</span>
                </div>
                <h3 className="text-white font-sans font-semibold text-lg sm:text-xl">
                  C. K. Pithawalla Educational Complex
                </h3>
                <p className="text-white/70 font-sans text-xs mt-1">
                  Empowering technical graduates with sound fundamental knowledge and professional competence.
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-5 -left-2 sm:top-6 sm:-left-4 z-20 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl rounded-2xl p-4 flex items-center gap-3.5 max-w-[240px]">
              <div className="w-10 h-10 rounded-xl bg-[#0B2545] text-[#E5B224] flex items-center justify-center shrink-0 shadow-sm">
                <Award size={20} />
              </div>
              <div>
                <p className="font-sans font-bold text-xs text-[#0B2545] leading-snug">GTU Affiliated</p>
                <p className="font-sans text-[10px] text-slate-500 leading-tight">Accredited engineering degrees</p>
              </div>
            </div>

            {/* Decorative background glows */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#00509d]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#0B2545]/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
