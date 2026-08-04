import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { 
  GraduationCap, 
  Users, 
  Clock, 
  ShieldCheck, 
  Award, 
  Settings, 
  BrainCircuit, 
  Landmark, 
  UserCheck,
  Laptop,
  Zap,
  Radio
} from "lucide-react";

// Campus Building Line Art SVG Component for watermarks
const CampusLineArt = ({ className = "w-full h-auto text-slate-400/20" }: { className?: string }) => (
  <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 100 H380" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
    <path d="M60 100 V60 H140 V100" stroke="currentColor" strokeWidth="1.5" />
    <path d="M80 60 V40 L100 25 L120 40 V60" stroke="currentColor" strokeWidth="1.5" />
    <path d="M90 70 H110 V85 H90 Z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M70 70 H78 V80 H70 Z" stroke="currentColor" strokeWidth="1" />
    <path d="M122 70 H130 V80 H122 Z" stroke="currentColor" strokeWidth="1" />
    
    <path d="M170 100 V45 H230 V100" stroke="currentColor" strokeWidth="1.5" />
    <path d="M185 55 H215 V65 H185 Z" stroke="currentColor" strokeWidth="1" />
    <path d="M185 75 H215 V85 H185 Z" stroke="currentColor" strokeWidth="1" />
    
    <path d="M260 100 V50 H340 V100" stroke="currentColor" strokeWidth="1.5" />
    <path d="M280 50 V35 L300 20 L320 35 V50" stroke="currentColor" strokeWidth="1.5" />
    <path d="M275 62 H290 V72 H275 Z" stroke="currentColor" strokeWidth="1" />
    <path d="M310 62 H325 V72 H310 Z" stroke="currentColor" strokeWidth="1" />
  </svg>
);

interface ProgramCard {
  id: string;
  title: string;
  intake: number;
  duration: string;
  icon: React.ReactNode;
  accredited: string;
}

const UG_PROGRAMS: ProgramCard[] = [
  {
    id: "civil",
    title: "Civil Engineering",
    intake: 60,
    duration: "4 Years",
    icon: <Landmark className="w-7 h-7 text-[#2563EB]" />,
    accredited: "NBA Accredited (upto 30-06-2024)",
  },
  {
    id: "computer",
    title: "Computer Engineering",
    intake: 210,
    duration: "4 Years",
    icon: <Laptop className="w-7 h-7 text-[#2563EB]" />,
    accredited: "NBA Accredited (upto 30-06-2024)",
  },
  {
    id: "electrical",
    title: "Electrical Engineering",
    intake: 30,
    duration: "4 Years",
    icon: <Zap className="w-7 h-7 text-[#2563EB]" />,
    accredited: "NBA Accredited (upto 30-06-2024)",
  },
  {
    id: "ecc",
    title: "Electronics & Communication Engineering",
    intake: 30,
    duration: "4 Years",
    icon: <Radio className="w-7 h-7 text-[#2563EB]" />,
    accredited: "NBA Accredited (upto 30-06-2024)",
  },
  {
    id: "it",
    title: "Information Technology",
    intake: 60,
    duration: "4 Years",
    icon: <Laptop className="w-7 h-7 text-[#2563EB]" />,
    accredited: "NBA Accredited (upto 30-06-2024)",
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    intake: 60,
    duration: "4 Years",
    icon: <Settings className="w-7 h-7 text-[#2563EB]" />,
    accredited: "NBA Accredited (upto 30-06-2024)",
  },
  {
    id: "aiml",
    title: "AIML",
    intake: 30,
    duration: "4 Years",
    icon: <BrainCircuit className="w-7 h-7 text-[#2563EB]" />,
    accredited: "NBA Accredited (upto 30-06-2024)",
  },
];

export default function ProgramsOffered() {
  return (
    <SubPageLayout
      title="Programs Offered"
      subtitle="Undergraduate (B.E.) and Postgraduate (M.E.) Academic Programs offered at CKPCET"
      category="about"
      activeItemLabel="Programs Offered"
    >
      <div className="max-w-7xl mx-auto space-y-10 py-2">
        {/* ── SECTION 1: GRADUATION (UNDERGRADUATE) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Main Hero Dark Navy Card */}
          <div className="lg:col-span-4 xl:col-span-3 bg-gradient-to-br from-[#0A1628] via-[#0F1E36] to-[#162B4D] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-xl shadow-slate-900/10 border border-slate-800/80 min-h-[420px]">
            {/* Top Content */}
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white text-[#0F1E36] flex items-center justify-center shadow-lg mb-6 border border-white/20">
                <GraduationCap size={34} strokeWidth={2.2} />
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-4">
                Graduation
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-medium">
                Our undergraduate programs are designed to build a strong foundation, industry-ready skills and innovative thinking.
              </p>
            </div>

            {/* Bottom Intake Pill Box */}
            <div className="relative z-10 mt-8 pt-4 border-t border-white/10">
              <div className="bg-[#132847]/90 border border-white/15 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between shadow-inner">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center shrink-0">
                    <Users size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-slate-300 leading-tight">Total Intake Capacity</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#F59E0B] font-sans tracking-tight">480</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Campus Line Art Background Illustration */}
            <div className="absolute bottom-0 inset-x-0 opacity-15 pointer-events-none overflow-hidden translate-y-3">
              <CampusLineArt className="w-full h-auto text-white" />
            </div>
          </div>

          {/* Right Cards Grid (7 UG Courses + 1 Total Intake Card) */}
          <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            {UG_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-blue-200"
              >
                {/* Top Section */}
                <div className="p-5 text-center flex flex-col items-center flex-1 justify-between">
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-blue-50/80 text-[#2563EB] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200 border border-blue-100/80 shadow-2xs shrink-0">
                    {prog.icon}
                  </div>

                  {/* Program Title */}
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-3 leading-snug min-h-[2.5rem] flex items-center justify-center text-center">
                    {prog.title}
                  </h3>

                  {/* Intake & Duration */}
                  <div className="space-y-1.5 w-full pt-1">
                    <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700">
                      <Users size={15} className="text-[#D97706] shrink-0" />
                      <span>Intake: <strong className="text-slate-900 font-bold">{prog.intake}</strong></span>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600">
                      <Clock size={15} className="text-[#D97706] shrink-0" />
                      <span>Duration: <strong className="text-slate-900 font-semibold">{prog.duration}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Bottom NBA Accredited Badge */}
                <div className="bg-[#F0F4FF] border-t border-blue-100/80 px-3 py-2.5 flex items-center justify-center gap-1.5 text-center text-[11px] sm:text-xs font-bold text-[#1E3A8A]">
                  <ShieldCheck size={14} className="text-[#2563EB] shrink-0" />
                  <span>NBA Accredited <span className="font-normal text-slate-600 text-[10px] sm:text-[11px] block sm:inline">(upto 30-06-2024)</span></span>
                </div>
              </div>
            ))}

            {/* 8th Card: Total Intake Capacity Summary Card */}
            <div className="bg-slate-50/90 rounded-2xl border border-slate-200/90 shadow-2xs p-5 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[220px]">
              <div className="w-14 h-14 rounded-full bg-[#0F1E36] text-white flex items-center justify-center mb-3 shadow-md shrink-0">
                <Users size={26} />
              </div>

              <span className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider block mb-1">
                Total Intake Capacity
              </span>

              <span className="text-4xl sm:text-5xl font-extrabold text-[#0F1E36] tracking-tight font-sans">
                480
              </span>

              {/* Watermark Illustration */}
              <div className="absolute bottom-0 inset-x-0 opacity-10 pointer-events-none">
                <CampusLineArt className="w-full h-auto text-slate-800" />
              </div>
            </div>
          </div>

        </div>

        {/* ── SECTION 2: POST GRADUATION ── */}
        <div className="bg-[#FFF9F5] border border-orange-200/80 rounded-3xl p-6 sm:p-8 shadow-2xs relative overflow-hidden my-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Left Header Box */}
            <div className="lg:col-span-3 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[#EA580C] text-white flex items-center justify-center shadow-md shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#EA580C] tracking-tight">
                    Post Graduation
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Advanced programs to deepen expertise and accelerate your career growth.
              </p>

              {/* Total Intake Box */}
              <div className="bg-white rounded-2xl border border-orange-100 p-3.5 shadow-2xs flex items-center justify-between mt-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-[#EA580C] flex items-center justify-center shrink-0">
                    <Users size={16} />
                  </div>
                  <span className="text-xs font-semibold text-slate-600">Total Intake Capacity</span>
                </div>
                <span className="text-2xl font-bold text-[#EA580C]">18</span>
              </div>
            </div>

            {/* Center Machine Design Program Card */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-orange-200/80 shadow-md p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0 border border-orange-200/60 shadow-2xs">
                  <Settings size={28} />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#0F1E36]">
                    Machine Design
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600">
                    <span className="text-[#EA580C] font-bold">Branch:</span> Mechanical Engineering
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <div className="flex items-center gap-8 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="flex items-center gap-2">
                    <Users size={17} className="text-[#EA580C]" />
                    <span>Intake: <strong className="text-slate-900 text-base font-bold">18</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={17} className="text-[#EA580C]" />
                    <span>Duration: <strong className="text-slate-900 text-base font-bold">2 Years</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Total Intake Capacity Highlight */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center text-center p-6 border-t lg:border-t-0 lg:border-l border-orange-200/80 pt-6 lg:pt-0">
              <Users size={40} className="text-[#EA580C] mb-2" />
              <span className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider block mb-1">
                Total Intake Capacity
              </span>
              <span className="text-5xl sm:text-6xl font-extrabold text-[#EA580C] tracking-tight font-sans">
                18
              </span>
            </div>

          </div>

          {/* Watermark Illustration */}
          <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none w-1/2">
            <CampusLineArt className="w-full h-auto text-orange-900" />
          </div>
        </div>

        {/* ── SECTION 3: KEY HIGHLIGHTS / FEATURES BANNER ── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          
          {/* Item 1 */}
          <div className="flex flex-col items-start lg:px-6 first:pl-0 space-y-2 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-full bg-[#0F1E36] text-white flex items-center justify-center mb-2 shadow-sm">
              <Award size={22} />
            </div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Quality Education
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Industry-oriented curriculum with experienced faculty.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-start lg:px-6 space-y-2 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-full bg-[#0F1E36] text-white flex items-center justify-center mb-2 shadow-sm">
              <Landmark size={22} />
            </div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Modern Infrastructure
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Well-equipped labs, smart classrooms and advanced facilities.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-start lg:px-6 space-y-2 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-full bg-[#0F1E36] text-white flex items-center justify-center mb-2 shadow-sm">
              <UserCheck size={22} />
            </div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Career Support
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Placement assistance and career guidance.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-start lg:px-6 last:pr-0 space-y-2 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-full bg-[#0F1E36] text-white flex items-center justify-center mb-2 shadow-sm">
              <ShieldCheck size={22} />
            </div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Accredited Programs
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              NBA accredited programs ensuring academic excellence.
            </p>
          </div>

        </div>
      </div>
    </SubPageLayout>
  );
}
