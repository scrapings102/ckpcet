import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Users, ArrowRight, Building2 } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { TRUSTEES, INSTITUTE } from "../../data/institute";

export default function Trustee() {
  const [selectedTrustee, setSelectedTrustee] = useState<any>(null);

  return (
    <SubPageLayout
      title="Meet Our Board of Trustees"
      subtitle={`Distinguished leadership at ${INSTITUTE.managedBy} steering ${INSTITUTE.shortName} towards qualitative and strategic academic growth.`}
      category="about"
      activeItemLabel="Governing Body"
    >
      <div className="animate-fade-in text-[#1B1515] overflow-x-hidden w-full">
        {/* Main Body Content with padding */}
        <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 py-4 sm:py-6 space-y-12">
          
          {/* Centered Section Title */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            {/* Separator with Users Icon */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] bg-[#182235]/20 w-16" />
              <div className="p-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full">
                <Users size={18} />
              </div>
              <div className="h-[1px] bg-[#182235]/20 w-16" />
            </div>
            
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#182235] tracking-tight">
              Our Esteemed Trustees
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
              Meet our distinguished leadership at Navyug Vidyabhavan Trust who steer the institution towards qualitative and strategic academic growth.
            </p>
          </div>

          {/* Redesigned Trustee Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            {TRUSTEES.map((trustee, idx) => (
              <div 
                key={trustee.name} 
                onClick={() => setSelectedTrustee({ ...trustee, idx: idx + 1 })}
                className="bg-white border-2 border-slate-200/90 hover:border-[#182235]/40 rounded-[2rem] p-6 sm:p-0 shadow-[0_15px_40px_rgba(0,0,0,0.015)] hover:shadow-[0_25px_60px_rgba(24,34,53,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row items-stretch group cursor-pointer"
              >
                {/* Left Column: Image with absolute index badge */}
                <div className="w-full sm:w-[40%] shrink-0 relative">
                  <div className="w-full h-full aspect-square sm:aspect-auto rounded-2xl sm:rounded-l-[2rem] sm:rounded-r-none overflow-hidden relative bg-slate-50">
                    <img 
                      src={trustee.image} 
                      alt={trustee.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 min-h-[240px] sm:min-h-full"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark badge with golden bottom border */}
                    <div className="absolute top-0 left-0 bg-[#182235] text-white font-mono font-bold text-base px-4 py-3 rounded-br-2xl border-b-2 border-b-[#D4AF37] border-r border-[#D4AF37]/20 shadow-md flex items-center justify-center min-w-[48px]">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>
                  </div>
                </div>

                {/* Right Column: Content */}
                <div className="flex-1 p-0 pt-6 sm:p-8 flex flex-col justify-between relative bg-white text-center sm:text-left items-center sm:items-start">
                  <div className="space-y-3.5 w-full flex flex-col items-center sm:items-start">
                    {/* Serif Name */}
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#182235] tracking-tight leading-snug">
                      {trustee.name}
                    </h4>

                    {/* Small horizontal gold separator line under the name */}
                    <div className="w-12 h-[2px] bg-[#D4AF37] rounded" />

                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#182235]/5 text-[#182235] text-xs font-semibold tracking-wide border border-[#182235]/10 select-none w-fit">
                      <Users size={12} className="opacity-70 text-[#182235]" />
                      <span>{trustee.post}</span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-sm pt-1">
                      {trustee.desc}
                    </p>
                  </div>

                  {/* View Details Link */}
                  <div className="pt-6 sm:pt-4 mt-auto w-full flex justify-center sm:justify-start">
                    <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#182235] group-hover:text-[#D4AF37] transition-colors duration-300 group/btn">
                      <span>VIEW DETAILS</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Alert / Info Banner with vector mockup */}
          <div className="bg-[#182235]/[0.02] border-2 border-[#182235]/20 rounded-[2rem] p-6 sm:p-8 mt-16 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 shadow-[0_15px_35px_rgba(24,34,53,0.015)]">
            {/* Circular Icon with Dark Background */}
            <div className="w-14 h-14 rounded-full bg-[#182235] border-2 border-white text-white flex items-center justify-center shadow-lg shrink-0 relative z-10 select-none">
              <Building2 size={24} />
            </div>
            
            {/* Text Message */}
            <div className="text-center sm:text-left space-y-1 relative z-10 flex-1">
              <p className="text-[#182235] text-sm sm:text-base font-semibold leading-relaxed">
                The trustees play a pivotal role in shaping policies and ensuring the holistic growth and quality education for future generations.
              </p>
            </div>
            
            {/* Subtle vector line-art drawing of building in bottom right */}
            <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none w-48 h-24 text-[#182235] hidden sm:block">
              <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
                <path d="M10 40 L90 40 M20 40 L20 20 L40 20 L40 40 M40 40 L40 10 L60 10 L60 40 M60 40 L60 20 L80 20 L80 40" />
                <circle cx="30" cy="30" r="2" />
                <circle cx="50" cy="20" r="2" />
                <circle cx="70" cy="30" r="2" />
              </svg>
            </div>
          </div>

        </div>

        {/* Detailed Profile Modal */}
        {selectedTrustee && createPortal(
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in cursor-default"
            onClick={() => setSelectedTrustee(null)}
          >
            <div 
              className="bg-white rounded-3xl shadow-2xl max-w-lg sm:max-w-xl md:max-w-2xl w-full border border-slate-100 relative animate-scale-in flex flex-row items-start sm:items-stretch p-4 sm:p-0 gap-4 sm:gap-0 overflow-hidden sm:min-h-[340px] md:min-h-[380px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Global Close Button for accessibility */}
              <button 
                onClick={() => setSelectedTrustee(null)}
                className="absolute top-4 right-4 z-[110] text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-full transition-all sm:text-slate-600 sm:hover:text-slate-800 sm:bg-slate-100/80 sm:p-2"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Portrait Column */}
              <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-[38%] sm:h-auto sm:min-h-[340px] md:w-[42%] md:min-h-[380px] bg-slate-50 relative rounded-2xl sm:rounded-none overflow-hidden shrink-0 border border-slate-100 sm:border-none shadow-sm sm:shadow-none">
                <img 
                  src={selectedTrustee.image} 
                  alt={selectedTrustee.name} 
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                {/* Badge with gold borders */}
                <div className="absolute top-0 left-0 bg-[#182235] text-white font-mono font-bold text-[10px] sm:text-xs md:text-sm px-2 py-1 sm:px-4 sm:py-4 rounded-br-xl sm:rounded-br-2xl border-b border-r border-[#D4AF37]/50 shadow-md">
                  {selectedTrustee.idx < 10 ? `0${selectedTrustee.idx}` : selectedTrustee.idx}
                </div>
              </div>

              {/* Right content column */}
              <div className="flex-1 min-w-0 text-left pt-1 pr-6 sm:p-6 md:p-8 flex flex-col justify-between self-stretch">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-base xs:text-lg sm:text-xl md:text-2xl text-[#182235] tracking-tight leading-snug">
                      {selectedTrustee.name}
                    </h4>
                    <div className="w-10 sm:w-12 h-[2px] bg-[#D4AF37] my-1 sm:my-2 rounded" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#182235]/5 text-[#182235] text-[10px] sm:text-xs font-semibold tracking-wide border border-[#182235]/10 select-none w-fit">
                    <Users size={10} className="opacity-70 text-[#182235]" />
                    <span>{selectedTrustee.post}</span>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed pt-1">
                    {selectedTrustee.bio}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-slate-100 mt-4 sm:mt-6 flex justify-end">
                  <button 
                    onClick={() => setSelectedTrustee(null)}
                    className="w-full sm:w-auto px-4 py-1.5 sm:px-6 sm:py-2 md:px-6 md:py-2.5 rounded-xl bg-[#182235] hover:bg-[#182235]/90 text-white text-[10px] sm:text-xs font-bold tracking-wide transition-colors shadow-md hover:shadow-lg active:scale-98"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </SubPageLayout>
  );
}
