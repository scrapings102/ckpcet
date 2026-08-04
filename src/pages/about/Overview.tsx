import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, BookOpen, Clock, Users, Building, GraduationCap, Check, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { cdn } from "../../utils/image";
import { ABOUT_INSTITUTE, ABOUT_TRUST_SECTION, ABOUT_CITY_SECTION } from "../../data/about-us/overview";

const CAMPUS_IMAGES = [
  {
    url: cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 1600, 90),
    title: "Surat-Dumas Road Main Campus",
    subtitle: "C. K. Pithawalla Educational Complex",
  },
  {
    url: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/10Library1.jpg", 1600, 90),
    title: "Central Library Hub",
    subtitle: "Extensive collections of technical journals and design guidelines",
  },
  {
    url: cdn("https://ckpcet.ac.in/img/home-page/video-section/01Entry_03.jpg", 1600, 90),
    title: "Advanced Engineering Laboratories",
    subtitle: "High-performance computing terminals and programming setups",
  },
  {
    url: cdn("https://ckpcet.ac.in/img/home-page/video-section/25Hackathon.jpg", 1600, 90),
    title: "National Tech Hackathons",
    subtitle: "Fostering programming excellence and system architecture",
  },
  {
    url: cdn("https://ckpcet.ac.in/img/home-page/video-section/03AirForce.jpg", 1600, 90),
    title: "Active Student Life & Clubs",
    subtitle: "NSS, NCC Air Wing, and cultural forums on campus",
  },
];

export default function Overview() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAMPUS_IMAGES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + CAMPUS_IMAGES.length) % CAMPUS_IMAGES.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % CAMPUS_IMAGES.length);
  };

const milestones = [
    { year: "1965", title: "Navyug Vidyabhavan Trust Founded", desc: "Trust founded to provide higher education facilities without consideration of caste, community, sex or religion; registered under the Bombay Public Trust Act, 1950 (Reg. No. 1268)." },
    { year: "1998", title: "CKPCET Established", desc: "Established under the Navyug Vidyabhavan Trust, initially affiliated with Veer Narmad South Gujarat University, Surat, to meet the growing demand for engineering seats in Gujarat." },
    { year: "2005", title: "Civil Engineering Department", desc: "Civil Engineering Department established; later NBA accredited." },
    { year: "Present Day", title: "Premier Engineering Institute", desc: "Affiliated with Gujarat Technological University (GTU) and approved by AICTE, with a total approved intake of 1,236 students across UG and PG programs." },
  ];

  return (
    <SubPageLayout
      title="About the College"
      subtitle="A self-financed institute managed by the Navyug Vidyabhavan Trust, affiliated with Gujarat Technological University."
      category="about"
      activeItemLabel="Profile"
    >
      <div className="space-y-10">
        
        {/* Real official content — mirrors https://ckpcet.ac.in/about/institute/profile */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-slate-800 tracking-tight">
            {ABOUT_INSTITUTE.heading}
          </h2>
          <div className="h-1 w-16 bg-[#2563EB] rounded-full" />

          <div className="text-slate-700 leading-relaxed font-sans text-sm md:text-base space-y-4">
            {ABOUT_INSTITUTE.paragraphs.map((para, idx) => (
              <p key={idx}>
                {idx === 0 ? (
                  <>
                    <span className="float-left text-6xl font-display font-bold text-[#2563EB] mr-3 mt-1 leading-[0.8]">
                      {para.charAt(0)}
                    </span>
                    {para.slice(1)}
                  </>
                ) : (
                  para
                )}
              </p>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-display font-semibold text-slate-800 tracking-tight">
            {ABOUT_TRUST_SECTION.heading}
          </h2>
          <div className="text-slate-700 leading-relaxed font-sans text-sm md:text-base space-y-4">
            {ABOUT_TRUST_SECTION.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-display font-semibold text-slate-800 tracking-tight">
            {ABOUT_CITY_SECTION.heading}
          </h2>
          <div className="text-slate-700 leading-relaxed font-sans text-sm md:text-base space-y-4">
            {ABOUT_CITY_SECTION.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>

        {/* Auto-scrolling Real College Campus Image Gallery */}
        <section 
          className="relative rounded-2xl overflow-hidden border border-slate-200 group shadow-md bg-[#F0F4F8]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative overflow-hidden bg-slate-950">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={CAMPUS_IMAGES[currentImageIndex].url}
                alt={CAMPUS_IMAGES[currentImageIndex].title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 1600, 90);
                }}
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Top Badge & Controls */}
            <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-10 pointer-events-auto">
              <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-mono tracking-wider text-[#2563EB] uppercase font-bold border border-[#2563EB]/30">
                Live Campus Showcase ({currentImageIndex + 1}/{CAMPUS_IMAGES.length})
              </span>
              
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-1.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white/90 hover:text-white transition-all border border-white/20"
                title={isPaused ? "Resume auto-play" : "Pause auto-play"}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md text-white border border-white/20 transition-all opacity-80 group-hover:opacity-100 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md text-white border border-white/20 transition-all opacity-80 group-hover:opacity-100 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>

            {/* Caption & Title */}
            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="font-sans font-semibold text-base md:text-xl leading-tight text-white drop-shadow-md">
                    {CAMPUS_IMAGES[currentImageIndex].title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-200/90 font-sans mt-0.5 font-medium drop-shadow-sm">
                    {CAMPUS_IMAGES[currentImageIndex].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicator Dots */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
              {CAMPUS_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? "w-6 bg-[#2563EB]" : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="p-3.5 text-xs font-sans text-slate-600 bg-white border-t border-slate-100 flex items-center justify-between">
            <span className="font-semibold text-slate-700">C. K. Pithawalla College of Engineering & Technology</span>
            <span className="text-[#2563EB] font-bold shrink-0 font-mono">Est. 1998</span>
          </div>
        </section>

        {/* Key Features / Facets */}
        <section className="grid sm:grid-cols-2 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-[#F0F4F8]/40 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/10 text-[#0F4C81] flex items-center justify-center shrink-0">
              <GraduationCap size={20} />
            </div>
            <h4 className="font-sans font-semibold text-slate-800 text-[16px]">GTU Standard Curriculum</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Strict compliance with Gujarat Technological University (GTU) pedagogical frameworks, project-based engineering assignments, continuous internal evaluation, and expert university-approved faculty.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#F0F4F8]/40 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/10 text-[#0F4C81] flex items-center justify-center shrink-0">
              <Building size={20} />
            </div>
            <h4 className="font-sans font-semibold text-slate-800 text-[16px]">Advanced Research Infrastructure</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Fully digitized smart classrooms, sophisticated programming & hardware laboratories with gigabit internet, centralized technology library, and specialized engineering workshops.
            </p>
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="pt-6 border-t border-slate-100 space-y-6">
          <h3 className="text-xl font-sans font-semibold text-slate-800">Our Journey of Excellence</h3>
          <p className="text-xs text-slate-500 font-sans leading-relaxed">
            The steady evolution of CKPCET from a newly founded institute into one of GTU's top-tier affiliated self-financed engineering colleges.
          </p>

          <div className="relative border-l-2 border-[#2563EB]/20 ml-3 pl-6 space-y-8 py-2">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#2563EB] ring-4 ring-white shadow-sm transition-transform duration-300 group-hover:scale-125" />
                
                <div className="space-y-1">
                  <span className="font-mono text-sm font-medium text-[#2563EB]">{item.year}</span>
                  <h4 className="font-sans font-semibold text-slate-800">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-2xl font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
