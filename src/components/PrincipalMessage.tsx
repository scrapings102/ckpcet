import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Quote, Landmark, PenTool, User, ArrowRight } from 'lucide-react';
import { cdn } from '../utils/image';

export const PrincipalMessage = () => {
  const navigate = useNavigate();

  return (
    <section id="principal-message" className="py-16 sm:py-24 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Card Container */}
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/90 shadow-[0_20px_50px_rgba(15,30,54,0.08)] max-w-6xl mx-auto relative overflow-hidden p-6 sm:p-10 md:p-12">
          
          {/* Top-Left Hanging Navy Ribbon Flag with Gold Building Icon */}
          <div 
            className="absolute top-0 left-8 sm:left-16 md:left-24 z-20 w-12 sm:w-14 h-24 sm:h-28 bg-[#0F1E36] flex flex-col items-center pt-4 sm:pt-5 shadow-lg pointer-events-none"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), 50% 100%, 0 calc(100% - 12px))'
            }}
          >
            <Landmark size={22} className="text-[#D4AF37]" />
            {/* Double gold accent border line near bottom */}
            <div className="w-8 h-[2px] bg-[#D4AF37] mt-3" />
            <div className="w-6 h-[1px] bg-[#D4AF37]/60 mt-1" />
          </div>

          {/* Card Layout Grid */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 sm:gap-10 md:gap-12 relative z-10">
            
            {/* Left Column: Portrait Section */}
            <div className="w-full md:w-[38%] shrink-0 flex flex-col items-center justify-center relative pt-8 md:pt-0 pr-0 md:pr-8 md:border-r border-[#D4AF37]/30">
              
              {/* Subtle background building watermark outline on left */}
              <div className="absolute bottom-0 left-0 opacity-[0.04] pointer-events-none hidden sm:block w-48 h-36">
                <svg viewBox="0 0 100 80" fill="none" stroke="#0F1E36" strokeWidth="1" className="w-full h-full">
                  <path d="M10 70 L90 70 M20 70 L20 30 L50 15 L80 30 L80 70 M35 70 L35 45 L65 45 L65 70" />
                  <circle cx="50" cy="30" r="5" />
                </svg>
              </div>

              {/* Circular Photo with Dual Navy & Gold Accent Rings */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center my-2">
                
                {/* Custom Dual Accent Ring */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
                  {/* Dark Navy Arc (Top-Left) */}
                  <path 
                    d="M 30,100 A 70,70 0 0,1 170,100" 
                    fill="none" 
                    stroke="#0F1E36" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                  />
                  {/* Gold Arc (Bottom-Right) */}
                  <path 
                    d="M 170,100 A 70,70 0 0,1 30,100" 
                    fill="none" 
                    stroke="#D4AF37" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                  />
                </svg>

                {/* Photo */}
                <img 
                  src={cdn("https://ckpcet.ac.in/img/about-us/institute/principal.jpg", 500, 90)} 
                  alt="Dr. Chaitanya K. Desai - Principal" 
                  className="w-[82%] h-[82%] rounded-full object-cover object-center shadow-md relative z-10"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400";
                  }}
                />

                {/* Overlapping Bottom Quote Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-[#0F1E36] border-2 border-[#D4AF37] shadow-lg flex items-center justify-center">
                  <span className="text-[#D4AF37] font-black text-2xl font-serif tracking-tight leading-none select-none">
                    ”
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Message Content Section */}
            <div className="flex-1 flex flex-col justify-between py-2 text-center sm:text-left items-center sm:items-start space-y-6">
              
              {/* Header Title with Feather Icon */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0F1E36] shrink-0 shadow-xs">
                  <PenTool size={18} />
                </div>
                
                <div className="w-[1px] h-6 bg-[#D4AF37]" />
                
                <div className="text-left space-y-1">
                  <h2 className="text-[#0F1E36] font-sans font-bold uppercase tracking-wider text-xs sm:text-sm">
                    MESSAGE FROM THE PRINCIPAL
                  </h2>
                  <div className="w-10 h-[2px] bg-[#D4AF37] rounded" />
                </div>
              </div>

              {/* Quote Block */}
              <div className="relative pt-2">
                <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#0F1E36] leading-relaxed font-medium">
                  <span className="text-[#D4AF37] text-3xl sm:text-4xl font-serif font-bold inline-block mr-1 align-top select-none">
                    “
                  </span>
                  Our institution stands as a beacon of academic excellence, dedicated to nurturing innovation, fostering research, and empowering young minds with technical expertise and moral values to meet the global challenges of tomorrow.
                  <span className="text-[#D4AF37] text-3xl sm:text-4xl font-serif font-bold inline-block ml-1 align-bottom select-none">
                    ”
                  </span>
                </p>
              </div>

              {/* Decorative Center Line with Diamond Motif */}
              <div className="flex items-center justify-center gap-3 w-full max-w-md mx-auto sm:mx-0 my-2">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]/60 flex-1" />
                <div className="w-3 h-3 rotate-45 border border-[#D4AF37] bg-white flex items-center justify-center shrink-0">
                  <div className="w-1 h-1 bg-[#D4AF37] rotate-45" />
                </div>
                <div className="h-[1px] bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]/60 flex-1" />
              </div>

              {/* Principal Info Profile */}
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#0F1E36] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <User size={20} />
                </div>

                <div className="w-[1px] h-9 bg-[#D4AF37]/50" />

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#0F1E36] tracking-tight leading-snug">
                    Dr. Chaitanya K. Desai
                  </h3>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5 font-sans">
                    PRINCIPAL | PH.D (IIT KANPUR), M.E (MECHANICAL), B.E (PRODUCTION)
                  </p>
                </div>
              </div>

              {/* View More Info Button */}
              <div className="pt-2">
                <button 
                  type="button"
                  onClick={() => navigate('/about/principals-message')}
                  className="inline-flex items-center border border-[#0F1E36] rounded-lg overflow-hidden bg-white shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="px-4 py-2.5 flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0F1E36]">
                    <span>VIEW MORE INFO.</span>
                  </div>
                  <div className="bg-[#0F1E36] text-white p-2.5 flex items-center justify-center group-hover:bg-[#182d4e] transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </div>

            </div>

          </div>

          {/* Bottom-Right Corner Waves & Dark Navy Accent Curve */}
          <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none overflow-hidden rounded-br-[2rem] sm:rounded-br-[2.5rem] z-0">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
              {/* Radiating Wave Arcs in Gold and Light Gray */}
              <path d="M 60 200 C 100 160, 160 100, 200 60" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.5" fill="none" />
              <path d="M 80 200 C 120 160, 160 120, 200 80" stroke="#0F1E36" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
              <path d="M 100 200 C 135 165, 165 135, 200 100" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.4" fill="none" />
              <path d="M 120 200 C 150 170, 170 150, 200 120" stroke="#0F1E36" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
              <path d="M 140 200 C 165 175, 175 165, 200 140" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.5" fill="none" />

              {/* Solid Dark Navy Corner Swoosh */}
              <path d="M 200 110 C 160 150, 150 160, 110 200 L 200 200 Z" fill="#0F1E36" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

