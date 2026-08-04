import React from "react";
import { Quote, Mail, Clock, Award, Sparkles, GraduationCap, Cpu, Rocket, Trophy } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { cdn } from "../../utils/image";

export default function DirectorsMessage() {
  return (
    <SubPageLayout
      title="Director's Message"
      subtitle="Academic and strategic direction from our Campus Administration."
      category="about"
      activeItemLabel="Director's Message"
    >
      <div className="space-y-12 text-[#0F2942]">

        {/* MAIN DIRECTOR PROFILE & MESSAGE */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Director Portrait Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-sm relative overflow-hidden group">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-[#00509d] p-2 bg-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400" 
                  alt="Campus Director" 
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400";
                  }}
                />
              </div>

              <div>
                <h3 className="font-sans font-semibold text-2xl text-slate-900 leading-tight">Technical Leadership</h3>
                <p className="text-sm text-[#00509d] font-mono uppercase tracking-widest mt-2 font-medium">Campus Director / Administration</p>
                <p className="text-xs text-slate-500 font-sans block mt-1 font-medium">Ph.D. in Engineering & Technical Governance</p>
              </div>
              
              <div className="border-t border-slate-200 pt-4 text-left text-xs space-y-3 text-slate-600 font-sans bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={16} className="text-[#00509d] shrink-0" />
                  <span className="truncate font-mono font-semibold">director@ckpcet.ac.in</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock size={16} className="text-[#00509d] shrink-0" />
                  <span className="font-semibold">Office: 10:00 AM – 5:00 PM</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GraduationCap size={16} className="text-[#00509d] shrink-0" />
                  <span className="font-semibold">Gujarat Technological University (GTU)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Director Letter */}
          <div className="lg:col-span-7 space-y-6 relative bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
            <Quote className="absolute top-6 right-6 text-slate-200/70 shrink-0 pointer-events-none -z-0" size={80} />
            
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00509d] font-medium block">
                Dear Students, Parents & Industry Partners,
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-snug">
                Fostering Technical Mastery, Research Innovation & Engineering Excellence
              </h2>
              
              <div className="h-1 w-20 bg-[#00509d] rounded-full" />
              
              <div className="space-y-4 text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                <p>
                  In an era defined by rapid technological transformations, artificial intelligence, automation, and sustainable infrastructure, the engineers of tomorrow must command deep scientific reasoning and practical engineering agility. At C. K. Pithawala College of Engineering and Technology (CKPCET), our paramount goal is to ensure that our students actively master how physical systems behave, how intelligent algorithms solve complex problems, and how interdisciplinary teams innovate.
                </p>
                <p>
                  Under the stewardship of the Navyug Vidyabhavan Trust, we continuously invest in high-performance computational clusters, modern material testing laboratories, NBA-accredited curricula, and digital libraries. We provide an ecosystem where students are mentored to transform theoretical ideas into tangible engineering prototypes.
                </p>
                <p>
                  We strongly encourage our students to actively participate in national technical hackathons, robotics competitions, IEEE paper presentations, SSIP startup incubators, and industrial placement drives in leading tech and infrastructure firms. Our alumni routinely secure top university ranks at GTU and lead transformative projects across the globe. Your progress is our signature of success.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-[#00509d] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Advanced R&D Labs</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-2.5">
                  <Rocket className="w-5 h-5 text-[#00509d] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">SSIP Incubation</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-2.5">
                  <Trophy className="w-5 h-5 text-[#00509d] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">GTU Top Rankers</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col items-end">
                <span className="font-sans font-semibold text-xl text-slate-900">Campus Director</span>
                <span className="text-xs text-slate-500 font-sans uppercase tracking-widest mt-1 font-bold">C. K. Pithawala College of Engineering & Technology (CKPCET)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SubPageLayout>
  );
}
