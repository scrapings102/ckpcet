import React from "react";
import { Target, CheckCircle, Rocket, Award, ShieldCheck, Compass, Sparkles } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { VISION_MISSION, INSTITUTE } from "../../data/institute";
import { cdn } from "../../utils/image";

export default function Mission() {
  const missionPoints = [
    {
      title: "Technical Excellence",
      desc: "To impart state-of-the-art technical education through innovative teaching-learning methodologies across all undergraduate and postgraduate engineering disciplines.",
      badge: "Engineering Core",
      image: cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 800, 85),
      bg: "bg-[#00509d]/10 text-[#00509d]",
      border: "border-[#00509d]/20"
    },
    {
      title: "Research & Innovation",
      desc: "To cultivate an active research, innovation, and development culture among faculty and students, supported by GUJCOST grants and SSIP incubation.",
      badge: "R&D Wing",
      image: cdn("https://ckpcet.ac.in/img/home-page/video-section/01Entry_03.jpg", 800, 85),
      bg: "bg-amber-500/10 text-amber-600",
      border: "border-amber-500/30"
    },
    {
      title: "Industry Synergy",
      desc: "To strengthen industry-institute interaction for practical learning, internships, industrial field visits, and modern technology transfer.",
      badge: "Corporate & Industry",
      image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/10Library1.jpg", 800, 85),
      bg: "bg-blue-50 text-blue-800",
      border: "border-blue-200"
    },
    {
      title: "Professional Ethics",
      desc: "To foster moral values, professional competence, social responsibility, and leadership qualities in future engineers and nation builders.",
      badge: "Ethics & Leadership",
      image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/41.webp", 800, 85),
      bg: "bg-emerald-50 text-emerald-800",
      border: "border-emerald-200"
    }
  ];

  return (
    <SubPageLayout
      title="Mission Objectives"
      subtitle="Our official institutional mission, engineering execution frameworks, and technical quality benchmarks."
      category="about"
      activeItemLabel="Mission"
    >
      <div className="space-y-12 text-[#0F2942]">
        
        {/* HERO IMAGE FOCUS BANNER */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group">
          <div className="aspect-[16/7] md:aspect-[21/8] w-full relative bg-slate-900 overflow-hidden">
            <img 
              src={cdn("https://ckpcet.ac.in/img/home-page/mission-vision/04.webp", 1600, 85)} 
              alt="CKPCET Mission Showcase" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00509d]/20 backdrop-blur-md border border-[#00509d]/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-3 w-fit">
                <Target size={14} />
                <span>Institutional Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight max-w-2xl leading-tight">
                Translating Engineering Vision into Daily Academic Excellence
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-sans mt-2 max-w-xl leading-relaxed">
                Our mission is defined by practical execution — combining rigorous GTU university coursework with real-world technological innovation and research.
              </p>
            </div>
          </div>
        </div>

        {/* OFFICIAL VISION_MISSION.MISSION BULLETS */}
        <section className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-[#00509d] font-mono text-xs font-bold uppercase tracking-widest">Official Mandate</span>
            <h3 className="text-2xl font-sans font-semibold text-slate-900">CKPCET Mission Statements</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {VISION_MISSION.mission.map((item, idx) => (
              <div key={idx} className="flex gap-3.5 items-start bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-[#00509d]/40 transition-colors">
                <CheckCircle className="text-[#00509d] shrink-0 mt-0.5" size={20} />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXECUTION SPHERES WITH RICH IMAGERY */}
        <section className="space-y-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[#00509d] font-mono text-xs font-bold uppercase tracking-widest">Execution Spheres</span>
            <h3 className="text-2xl font-sans font-semibold text-slate-800">Four Pillars of Institutional Action</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missionPoints.map((item, index) => (
              <div
                key={index}
                className={`rounded-3xl bg-white border ${item.border} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                  <span className={`absolute top-4 left-4 text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-md shadow-sm ${item.bg}`}>
                    {item.badge}
                  </span>
                </div>
                
                <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-sans font-semibold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
