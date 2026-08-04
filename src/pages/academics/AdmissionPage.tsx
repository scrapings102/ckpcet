import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { 
  Globe, 
  ArrowRight, 
  Landmark, 
  Award, 
  Users, 
  FileCheck, 
  ShieldCheck,
  ClipboardCheck,
  CheckCircle2
} from "lucide-react";

// Subtle building watermark SVG
const BuildingWatermark = ({ className = "w-full h-auto text-white/10" }: { className?: string }) => (
  <svg viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 110 H290" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M40 110 V50 H110 V110" stroke="currentColor" strokeWidth="1.5" />
    <path d="M65 50 V30 L75 20 L85 30 V50" stroke="currentColor" strokeWidth="1.5" />
    <path d="M140 110 V35 H210 V110" stroke="currentColor" strokeWidth="1.5" />
    <path d="M160 50 H190 V65 H160 Z" stroke="currentColor" strokeWidth="1" />
    <path d="M160 80 H190 V95 H160 Z" stroke="currentColor" strokeWidth="1" />
    <path d="M230 110 V60 H280 V110" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function AdmissionPage() {
  return (
    <SubPageLayout
      title="Admission"
      subtitle="Joint Admission Committee for Professional Courses (JACPC) Guidelines & Procedure"
      category="about"
      activeItemLabel="Admission"
    >
      <div className="max-w-7xl mx-auto space-y-8 py-2">
        
        {/* ── ROW 1: TWO SIDE-BY-SIDE CARDS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT CARD: Admission Procedure Info Card */}
          <div className="lg:col-span-7 bg-[#F7FAFF] rounded-3xl border border-blue-100/90 shadow-2xs p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group hover:border-blue-200 transition-all duration-300">
            {/* Left Vertical Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1E40AF] rounded-l-3xl" />

            {/* Circular Soft Illustration Badge */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-blue-100/60 border border-blue-200/50 flex items-center justify-center shrink-0 relative shadow-inner">
              <div className="relative flex items-center justify-center">
                {/* Custom Clipboard & Pen Illustration */}
                <div className="w-16 h-20 sm:w-20 sm:h-24 bg-white rounded-xl shadow-md border border-blue-200 flex flex-col items-center p-2.5 relative">
                  {/* Clip at top */}
                  <div className="w-8 h-2.5 bg-blue-600 rounded-full -mt-4 mb-2 shadow-xs" />
                  {/* Lines */}
                  <div className="w-full space-y-2 mt-1">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <div className="h-1.5 bg-blue-200 rounded-full w-full" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <div className="h-1.5 bg-blue-200 rounded-full w-full" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <div className="h-1.5 bg-blue-200 rounded-full w-4/5" />
                    </div>
                  </div>
                </div>

                {/* Shield Check Badge overlay */}
                <div className="absolute -bottom-2 -right-2 bg-[#003B95] text-white p-2 rounded-2xl shadow-lg border-2 border-white">
                  <ShieldCheck size={20} />
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1E36] tracking-tight">
                Admission Procedure
              </h2>

              {/* Gold Decorative Underline Bar */}
              <div className="w-12 h-1 bg-[#F59E0B] rounded-full my-2 mx-auto sm:mx-0" />

              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed pt-1">
                Admission procedure finalized by the{" "}
                <strong className="text-[#1D4ED8] font-bold">
                  Joint Admission Committee for Professional Courses
                </strong>{" "}
                at Ahmedabad.
              </p>
            </div>
          </div>

          {/* RIGHT CARD: VISIT JACPC WEBSITE CTA CARD */}
          <div className="lg:col-span-5 bg-gradient-to-r from-[#003B95] via-[#0A2E68] to-[#0A2540] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl shadow-blue-950/15 border border-blue-900/40 flex items-center justify-between group hover:shadow-2xl transition-all duration-300 min-h-[180px]">
            
            {/* Left Circle White Globe Icon Badge */}
            <div className="flex items-center gap-4 sm:gap-6 relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#003B95] flex items-center justify-center shadow-lg shrink-0 border border-white/20 group-hover:scale-105 transition-transform duration-300">
                <Globe size={34} strokeWidth={2.2} />
              </div>

              {/* Middle Text */}
              <div className="flex flex-col space-y-0.5">
                <span className="font-sans font-extrabold text-white text-base sm:text-lg tracking-wider uppercase">
                  VISIT JACPC
                </span>
                <span className="font-sans font-medium text-blue-100/80 text-xs sm:text-sm uppercase tracking-wide">
                  (ADMISSION COMMITTEE)
                </span>
                <span className="font-sans font-black text-[#F59E0B] text-base sm:text-lg tracking-widest uppercase mt-1">
                  WEB-SITE
                </span>
              </div>
            </div>

            {/* Right Action Button with External Redirect */}
            <a
              href="https://acpc.gujarat.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit JACPC ACPC official website"
              className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#003B95] flex items-center justify-center shadow-xl hover:bg-amber-400 hover:text-slate-900 hover:scale-110 active:scale-95 transition-all duration-300 shrink-0 cursor-pointer ml-3"
            >
              <ArrowRight size={24} strokeWidth={2.5} />
            </a>

            {/* Subtle Campus Building Background Watermark */}
            <div className="absolute right-2 bottom-0 w-3/5 opacity-15 pointer-events-none">
              <BuildingWatermark className="w-full h-auto text-white" />
            </div>
          </div>

        </div>

        {/* ── ROW 2: MIDDLE BANNER CARD ── */}
        <div className="bg-gradient-to-r from-[#F0F5FF] via-[#F8FAFC] to-[#F0F5FF] rounded-2xl sm:rounded-3xl border border-blue-100/90 p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
          
          <div className="flex items-center gap-4 sm:gap-5 relative z-10">
            {/* Left Circular Icon Badge */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-100/80 text-[#1D4ED8] flex items-center justify-center shrink-0 border border-blue-200/60 shadow-2xs">
              <Landmark size={28} strokeWidth={2.2} />
            </div>

            {/* Text */}
            <p className="text-slate-700 font-sans font-medium text-sm sm:text-base leading-relaxed">
              Admissions are conducted as per the guidelines and norms set by the{" "}
              <strong className="text-[#1D4ED8] font-bold">
                Joint Admission Committee for Professional Courses (JACPC), Ahmedabad.
              </strong>
            </p>
          </div>

          {/* Right Decorative Dot Grid Pattern */}
          <div className="hidden md:grid grid-cols-6 gap-1.5 opacity-25 shrink-0 pr-2">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
            ))}
          </div>
        </div>

        {/* ── ROW 3: FOUR FEATURE HIGHLIGHT CARDS BANNER ── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-2xs p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          
          {/* Feature 1: Transparent Process */}
          <div className="flex items-start gap-4 lg:px-6 first:pl-0 pt-4 sm:pt-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
              <Award size={24} strokeWidth={2} />
            </div>
            <div className="space-y-0.5">
              <h3 className="font-bold text-[#0F1E36] text-sm sm:text-base">
                Transparent Process
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Fair and transparent admission process for all eligible candidates.
              </p>
            </div>
          </div>

          {/* Feature 2: Merit Based */}
          <div className="flex items-start gap-4 lg:px-6 pt-4 sm:pt-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
              <Users size={24} strokeWidth={2} />
            </div>
            <div className="space-y-0.5">
              <h3 className="font-bold text-[#0F1E36] text-sm sm:text-base">
                Merit Based
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Admissions are based on merit as per JACPC guidelines.
              </p>
            </div>
          </div>

          {/* Feature 3: Guideline Driven */}
          <div className="flex items-start gap-4 lg:px-6 pt-4 sm:pt-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
              <FileCheck size={24} strokeWidth={2} />
            </div>
            <div className="space-y-0.5">
              <h3 className="font-bold text-[#0F1E36] text-sm sm:text-base">
                Guideline Driven
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                All procedures follow rules and regulations set by JACPC.
              </p>
            </div>
          </div>

          {/* Feature 4: Verified & Secure */}
          <div className="flex items-start gap-4 lg:px-6 last:pr-0 pt-4 sm:pt-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
              <ShieldCheck size={24} strokeWidth={2} />
            </div>
            <div className="space-y-0.5">
              <h3 className="font-bold text-[#0F1E36] text-sm sm:text-base">
                Verified & Secure
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Secure platform ensuring authenticity and accuracy of information.
              </p>
            </div>
          </div>

        </div>

      </div>
    </SubPageLayout>
  );
}
