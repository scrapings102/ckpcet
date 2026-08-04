import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  GraduationCap, 
  BookOpen, 
  ShieldCheck, 
  Calendar, 
  Download, 
  ExternalLink, 
  Landmark, 
  Laptop, 
  Zap, 
  Radio, 
  Cog, 
  Package, 
  Search, 
  FileText, 
  CheckCircle2, 
  X,
  Sparkles
} from "lucide-react";

interface SemesterLink {
  label: string;
  url: string;
  subjects?: string[];
}

interface DepartmentCurriculum {
  id: string;
  name: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  icon: React.ElementType;
  semesters: SemesterLink[];
}

const CURRICULUM_DATA: DepartmentCurriculum[] = [
  {
    id: "civil",
    name: "CIVIL",
    badgeBg: "bg-blue-100/90",
    badgeText: "text-blue-600",
    badgeBorder: "border-blue-200/60",
    icon: Landmark,
    semesters: [
      { label: "Sem 1 & 2", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=06", subjects: ["Mathematics-I/II", "Physics", "Basic Civil Engineering", "Engineering Graphics", "Environmental Studies"] },
      { label: "Sem 3", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=06", subjects: ["Mechanics of Solids", "Fluid Mechanics", "Surveying", "Building Construction", "Engineering Geology"] },
      { label: "Sem 4", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=06", subjects: ["Structural Analysis-I", "Advanced Surveying", "Concrete Technology", "Hydrology & Water Resources"] },
      { label: "Sem 5", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=06", subjects: ["Structural Analysis-II", "Design of Reinforced Concrete Structures", "Geotechnical Engineering", "Transportation Engineering"] },
      { label: "Sem 6", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=06", subjects: ["Design of Steel Structures", "Applied Environmental Engineering", "Irrigation Engineering", "Construction Project Management"] },
      { label: "Sem 7", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=06", subjects: ["Professional Elective-I", "Open Elective-I", "Urban Transportation", "Project Phase-I"] },
      { label: "Sem 8", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=06", subjects: ["Professional Elective-II", "Construction Technology", "Project Phase-II / Internship"] }
    ]
  },
  {
    id: "computer",
    name: "COMPUTER",
    badgeBg: "bg-purple-100/90",
    badgeText: "text-purple-600",
    badgeBorder: "border-purple-200/60",
    icon: Laptop,
    semesters: [
      { label: "Sem 1 & 2", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=07", subjects: ["Mathematics-I/II", "Programming for Problem Solving (C)", "Basic Electrical", "Workshop", "English"] },
      { label: "Sem 3", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=07", subjects: ["Data Structures", "Database Management Systems", "Digital Fundamentals", "Object Oriented Programming (Java)", "Probability & Statistics"] },
      { label: "Sem 4", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=07", subjects: ["Operating System", "Computer Organization & Architecture", "Design & Analysis of Algorithms", "Discrete Mathematics", "Software Engineering"] },
      { label: "Sem 5", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=07", subjects: ["Computer Networks", "Theory of Computation", "Cyber Security", "Professional Elective-I", "Python Programming"] },
      { label: "Sem 6", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=07", subjects: ["Compiler Design", "Advanced Java / Web Tech", "Artificial Intelligence", "Cloud Computing", "Mobile Application Development"] },
      { label: "Sem 7", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=07", subjects: ["Machine Learning", "Information Security", "Professional Elective-II", "Open Elective-I", "Project Phase-I"] },
      { label: "Sem 8", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=07", subjects: ["Deep Learning / Big Data", "Open Elective-II", "Project Phase-II / Industry Internship"] }
    ]
  },
  {
    id: "electrical",
    name: "ELECTRICAL",
    badgeBg: "bg-amber-100/90",
    badgeText: "text-amber-600",
    badgeBorder: "border-amber-200/60",
    icon: Zap,
    semesters: [
      { label: "Sem 1 & 2", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=09", subjects: ["Mathematics-I/II", "Physics", "Basic Electrical Engineering", "Engineering Graphics"] },
      { label: "Sem 3", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=09", subjects: ["Analog Electronics", "Electrical Circuit Analysis", "Electromagnetic Fields", "Electrical Machines-I"] },
      { label: "Sem 4", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=09", subjects: ["Electrical Machines-II", "Power System-I", "Control System Engineering", "Digital Electronics"] },
      { label: "Sem 5", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=09", subjects: ["Power System-II", "Power Electronics", "Microcontroller & Interfacing", "Renewable Energy Systems"] },
      { label: "Sem 6", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=09", subjects: ["Switchgear & Protection", "High Voltage Engineering", "Industrial Automation", "Electrical Drives"] },
      { label: "Sem 7", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=09", subjects: ["Smart Grid Technology", "Electric Vehicle Systems", "Professional Elective-I", "Project Phase-I"] },
      { label: "Sem 8", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=09", subjects: ["EHV AC & DC Transmission", "Project Phase-II / Industrial Training"] }
    ]
  },
  {
    id: "ec",
    name: "ELECTRONICS AND COMMUNICATION",
    badgeBg: "bg-teal-100/90",
    badgeText: "text-teal-600",
    badgeBorder: "border-teal-200/60",
    icon: Radio,
    semesters: [
      { label: "Sem 1 & 2", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=11", subjects: ["Mathematics-I/II", "Physics", "Basic Electronics", "Computer Programming"] },
      { label: "Sem 3", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=11", subjects: ["Network Theory", "Signals & Systems", "Electronic Devices & Circuits", "Digital Electronics"] },
      { label: "Sem 4", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=11", subjects: ["Analog Communication", "Control Systems", "Microprocessor & Interfacing", "Electromagnetics"] },
      { label: "Sem 5", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=11", subjects: ["Digital Communication", "VLSI Design", "Antenna & Wave Propagation", "Embedded Systems"] },
      { label: "Sem 6", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=11", subjects: ["Digital Signal Processing", "Microwave Engineering", "Optical Communication", "IoT Architecture"] },
      { label: "Sem 7", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=11", subjects: ["Wireless Communication", "Professional Elective-I", "Open Elective-I", "Project Phase-I"] },
      { label: "Sem 8", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=11", subjects: ["Satellite Communication / RF Engineering", "Project Phase-II / Internship"] }
    ]
  },
  {
    id: "mechanical",
    name: "MECHANICAL",
    badgeBg: "bg-rose-100/90",
    badgeText: "text-rose-600",
    badgeBorder: "border-rose-200/60",
    icon: Cog,
    semesters: [
      { label: "Sem 1 & 2", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=19", subjects: ["Mathematics-I/II", "Chemistry / Physics", "Basic Mechanical Engineering", "Engineering Graphics"] },
      { label: "Sem 3", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=19", subjects: ["Thermodynamics", "Material Science & Metallurgy", "Kinematics of Machines", "Strength of Materials"] },
      { label: "Sem 4", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=19", subjects: ["Fluid Mechanics & Hydraulic Machines", "Manufacturing Processes-I", "Dynamics of Machinery", "Applied Thermodynamics"] },
      { label: "Sem 5", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=19", subjects: ["Design of Machine Elements", "Heat Transfer", "Manufacturing Processes-II", "Internal Combustion Engines"] },
      { label: "Sem 6", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=19", subjects: ["Computer Aided Design (CAD)", "Refrigeration & Air Conditioning", "Power Plant Engineering", "Industrial Engineering"] },
      { label: "Sem 7", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=19", subjects: ["Finite Element Analysis", "CAM & Robotics", "Professional Elective-I", "Project Phase-I"] },
      { label: "Sem 8", url: "https://syllabus.gtu.ac.in/Syllabus.aspx?Branch=19", subjects: ["Automobile Engineering / Renewable Energy", "Project Phase-II / Industry Internship"] }
    ]
  }
];

export default function CurriculumPage() {
  const navigate = useNavigate();
  const [selectedSem, setSelectedSem] = useState<{ dept: string; sem: SemesterLink } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenSyllabus = (deptName: string, sem: SemesterLink) => {
    // Show quick toast and open GTU syllabus link
    setToastMessage(`Opening ${deptName} - ${sem.label} Syllabus...`);
    setTimeout(() => {
      window.open(sem.url, "_blank", "noopener,noreferrer");
      setToastMessage(null);
    }, 400);
  };

  return (
    <div className="bg-[#F3F6FC] min-h-screen text-slate-800 font-sans pb-20 pt-0">
      
      {/* ── TOP BREADCRUMBS & DARK HEADER BANNER (Matching attach image design) ── */}
      {/* Breadcrumb row */}
      <div className="bg-[#0F172A] text-white/50 text-[10px] sm:text-xs py-3 border-b border-white/10 select-none">
        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono tracking-wider text-[11px] sm:text-xs uppercase">
            <span 
              onClick={() => navigate("/")} 
              className="cursor-pointer text-slate-400 hover:text-white transition-colors"
            >
              HOME
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-[#2563EB] font-bold">ACADEMICS</span>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold">COURSE CURRICULUM</span>
          </div>
        </div>
      </div>

      {/* Main Title Banner row */}
      <div className="bg-gradient-to-br from-[#0B1325] via-[#0F172A] to-[#162238] text-white py-8 sm:py-10 lg:py-12 border-b border-blue-900/40 relative overflow-hidden">
        {/* Subtle dot matrix grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />
        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-left">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-2.5">
            Course Curriculum
          </h1>
          <p className="text-slate-300 font-sans text-xs sm:text-sm md:text-base max-w-3xl leading-relaxed">
            Semester-Wise GTU Syllabus & Academic Curriculum for All Engineering Programs
          </p>
        </div>
      </div>

      {/* MAIN OUTER CANVAS CARD */}
      <div className="max-w-[1520px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        
        {/* Main White Card matching reference layout */}
        <div className="bg-white rounded-[28px] sm:rounded-[36px] border border-slate-200/90 shadow-xl shadow-slate-200/50 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
          
          {/* Subtle Background Pattern Dots */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

          {/* TWO-COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10">
            
            {/* ── LEFT SIDEBAR BLUE CARD ── */}
            <div className="lg:col-span-4 bg-gradient-to-b from-[#0B215E] via-[#103487] to-[#1C4ED8] text-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-blue-900/20 border border-blue-400/20">
              
              {/* Background ambient lighting glow */}
              <div className="absolute -top-20 -left-20 w-56 h-56 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Top Glowing Graduation Cap Icon Badge */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mx-auto sm:mx-0 shadow-xl shadow-blue-950/50 backdrop-blur-md mb-6 relative group">
                  <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-md relative z-10" />
                </div>

                {/* Left Card Title */}
                <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-3xl text-white tracking-tight leading-tight text-center sm:text-left mb-3">
                  Program wise <br />
                  <span className="text-white">Course Curriculum</span>
                </h1>

                {/* Left Card Subtitle */}
                <p className="text-blue-100/85 font-medium text-xs sm:text-sm leading-relaxed text-center sm:text-left mb-8 max-w-sm">
                  Access the semester wise syllabus for all engineering programs in one place.
                </p>

                {/* 4 Feature Pills */}
                <div className="flex flex-col gap-3.5 mb-8">
                  
                  {/* Pill 1 */}
                  <div className="bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 text-white font-semibold text-xs sm:text-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 flex items-center gap-3.5 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg cursor-pointer backdrop-blur-md group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/15 group-hover:bg-blue-500 flex items-center justify-center text-white shrink-0 transition-colors shadow-inner">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span>Latest Syllabus</span>
                  </div>

                  {/* Pill 2 */}
                  <div className="bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 text-white font-semibold text-xs sm:text-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 flex items-center gap-3.5 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg cursor-pointer backdrop-blur-md group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/15 group-hover:bg-blue-500 flex items-center justify-center text-white shrink-0 transition-colors shadow-inner">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span>University Approved</span>
                  </div>

                  {/* Pill 3 */}
                  <div className="bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 text-white font-semibold text-xs sm:text-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 flex items-center gap-3.5 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg cursor-pointer backdrop-blur-md group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/15 group-hover:bg-blue-500 flex items-center justify-center text-white shrink-0 transition-colors shadow-inner">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span>Semester Wise</span>
                  </div>

                  {/* Pill 4 */}
                  <div className="bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 text-white font-semibold text-xs sm:text-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 flex items-center gap-3.5 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg cursor-pointer backdrop-blur-md group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/15 group-hover:bg-blue-500 flex items-center justify-center text-white shrink-0 transition-colors shadow-inner">
                      <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span>Easy Access</span>
                  </div>

                </div>
              </div>

              {/* Bottom Vector Campus Graphic Line Art */}
              <div className="pt-6 border-t border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-center gap-2 text-white/50 text-[11px] font-mono tracking-wider mb-2 uppercase">
                  <span>Gujarat Technological University</span>
                </div>
                {/* Vector Building Silhouette Graphic */}
                <div className="w-full h-24 relative flex items-end justify-center opacity-40 hover:opacity-75 transition-opacity duration-300">
                  <svg className="w-full h-20 text-white/80 fill-current" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path d="M0 100 L0 80 L30 80 L30 70 L40 70 L40 80 L70 80 L70 60 L80 60 L80 80 L120 80 L120 50 L140 50 L140 30 L150 20 L160 30 L160 50 L180 50 L180 80 L220 80 L220 50 L240 50 L240 30 L250 20 L260 30 L260 50 L280 50 L280 80 L320 80 L320 60 L330 60 L330 80 L360 80 L360 70 L370 70 L370 80 L400 80 L400 100 Z" />
                    {/* Windows detail */}
                    <rect x="135" y="58" width="10" height="12" className="fill-blue-900" />
                    <rect x="155" y="58" width="10" height="12" className="fill-blue-900" />
                    <rect x="235" y="58" width="10" height="12" className="fill-blue-900" />
                    <rect x="255" y="58" width="10" height="12" className="fill-blue-900" />
                  </svg>
                </div>
              </div>

            </div>


            {/* ── RIGHT CONTENT AREA ── */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* TOP HEADER ROW */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-100">
                
                {/* Header Title with Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#2563EB] shrink-0 shadow-2xs">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-tight">
                      <span className="text-[#0F172A]">Program wise </span>
                      <span className="text-[#2563EB]">Course Curriculum</span>
                    </h2>
                  </div>
                </div>

                {/* Portal Button */}
                <button
                  onClick={() => window.open("https://syllabus.gtu.ac.in/", "_blank", "noopener,noreferrer")}
                  className="bg-[#1D4ED8] hover:bg-[#1E40AF] active:scale-98 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-blue-400/30 group hover:-translate-y-0.5 shrink-0"
                >
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>University Syllabus Portal</span>
                  <ChevronRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>


              {/* 5 DEPARTMENT CARDS */}
              <div className="flex flex-col gap-4 sm:gap-5">
                {CURRICULUM_DATA.map((dept) => {
                  const IconComp = dept.icon;
                  return (
                    <div 
                      key={dept.id}
                      className="bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-md group/card"
                    >
                      {/* Department Title Row */}
                      <div className="flex items-center gap-3 mb-4 sm:mb-5">
                        <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${dept.badgeBg} ${dept.badgeText} border ${dept.badgeBorder} flex items-center justify-center shrink-0 shadow-2xs group-hover/card:scale-105 transition-transform duration-300`}>
                          <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <h3 className="font-extrabold text-slate-800 text-sm sm:text-base tracking-wider uppercase">
                          {dept.name}
                        </h3>
                      </div>

                      {/* Semester Pills Grid / Flex Wrap */}
                      <div className="flex flex-wrap gap-2.5 sm:gap-3">
                        {dept.semesters.map((sem, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOpenSyllabus(dept.name, sem)}
                            className="bg-white hover:bg-[#2563EB] text-slate-700 hover:text-white border border-slate-200/90 hover:border-[#2563EB] font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-2xs hover:shadow-md hover:shadow-blue-500/25 flex items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group/btn"
                          >
                            <span>{sem.label}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-blue-600 group-hover/btn:text-white transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Quick Toast Feedback Notice */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-semibold border border-slate-700 animate-in fade-in slide-in-from-bottom-3">
          <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
