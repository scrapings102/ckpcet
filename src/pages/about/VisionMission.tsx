import React from "react";
import { Eye, Rocket, Sparkles, Award, CheckCircle } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { VISION_MISSION, INSTITUTE } from "../../data/institute";
import { cdn } from "../../utils/image";

export default function VisionMission() {
  return (
    <SubPageLayout
      title="Vision & Mission"
      subtitle="Guiding our academic directives, technical governance, and daily campus endeavors."
      category="about"
      activeItemLabel="Vision And Mission"
    >
      <div className="space-y-12 text-[#0F2942]">
        
        {/* HERO IMAGE FOCUS BANNER */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group">
          <div className="aspect-[16/7] md:aspect-[21/8] w-full relative bg-slate-900 overflow-hidden">
            <img 
              src={cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 1600, 85)} 
              alt="CKPCET Vision and Mission" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00509d]/20 backdrop-blur-md border border-[#00509d]/40 text-amber-300 text-xs font-mono font-medium tracking-widest uppercase mb-3 w-fit">
                <Sparkles size={14} />
                <span>Institutional Charter</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-white tracking-tight max-w-2xl leading-tight">
                Empowering Minds, Shaping Ethics, Leading Innovation
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-sans mt-2 max-w-xl leading-relaxed">
                Since {INSTITUTE.established}, {INSTITUTE.fullName} ({INSTITUTE.shortName}) has nurtured technical pioneers and engineering innovators in Surat.
              </p>
            </div>
          </div>
        </div>

        {/* VISION & MISSION SPLIT */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Vision Box */}
          <div className="bg-[#F8FAFC] border border-[#00509d]/40 rounded-3xl overflow-hidden shadow-sm flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img 
                src={cdn("https://ckpcet.ac.in/img/home-page/video-section/01Entry_03.jpg", 1000, 85)} 
                alt="Our Vision" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-[#00509d]/40 text-amber-300 flex items-center gap-2.5">
                <Eye size={22} />
                <span className="font-sans font-semibold text-sm text-white tracking-wider uppercase">Our Vision</span>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <p className="font-sans text-slate-800 text-base sm:text-lg leading-relaxed italic border-l-4 border-[#00509d] pl-4">
                "{VISION_MISSION.vision}"
              </p>
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#00509d] uppercase tracking-wider pt-2">
                <Award size={16} />
                <span>National Engineering Benchmark</span>
              </div>
            </div>
          </div>

          {/* Mission Box */}
          <div className="bg-[#F8FAFC] border border-amber-500/30 rounded-3xl overflow-hidden shadow-sm flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img 
                src={cdn("https://ckpcet.ac.in/img/home-page/mission-vision/10Library1.jpg", 1000, 85)} 
                alt="Our Mission" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-amber-500/40 text-amber-400 flex items-center gap-2.5">
                <Rocket size={22} className="text-[#00509d]" />
                <span className="font-sans font-semibold text-sm text-white tracking-wider uppercase">Our Mission</span>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                {VISION_MISSION.mission.map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#00509d] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-amber-600 uppercase tracking-wider pt-2">
                <Award size={16} />
                <span>Outcome-Based Technical Mandate</span>
              </div>
            </div>
          </div>

        </div>

        {/* SECONDARY PHOTO GALLERY SHOWCASE */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-lg relative overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6 items-center relative z-10">
            <div className="space-y-3 md:col-span-1">
              <span className="text-amber-400 font-mono text-xs font-medium uppercase tracking-widest block">Campus Atmosphere</span>
              <h3 className="font-sans font-semibold text-2xl text-white">Where Learning Meets Purpose</h3>
              <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                Our lush green campus on Dumas Road provides high-performance computing labs, specialized engineering workbenches, and a vibrant technical community.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-md group">
                <img 
                  src={cdn("https://ckpcet.ac.in/img/home-page/mission-vision/41.webp", 800, 85)} 
                  alt="Student Collaboration" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-md group">
                <img 
                  src={cdn("https://ckpcet.ac.in/img/home-page/mission-vision/42.webp", 800, 85)} 
                  alt="Academic Excellence" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
