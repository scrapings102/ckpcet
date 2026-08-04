import React from "react";
import { Landmark, Building, Check, Award, ShieldCheck, Sparkles } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { TRUST, INSTITUTE } from "../../data/institute";
import { cdn } from "../../utils/image";

export default function Trust() {
  const institutionsList = [
    { 
      name: "C. K. Pithawala College of Engineering and Technology (CKPCET)", 
      type: "Degree Engineering & Technology (GTU / AICTE)", 
      location: "Surat-Dumas Road Campus",
      image: cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 800, 85)
    },
    { 
      name: "C. K. Pithawalla Institute of Pharmaceutical Science & Research (CKPIPSR)", 
      type: "Pharmacy & Pharmaceutical Research", 
      location: "Surat-Dumas Road Campus",
      image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/41.webp", 800, 85)
    },
    { 
      name: "Maniba Institute of Business Management", 
      type: "Management Studies & Business Administration", 
      location: "Surat-Dumas Road Campus",
      image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/10Library1.jpg", 800, 85)
    },
    { 
      name: "Navyug Science College", 
      type: "Pure & Applied Sciences (VNSGU)", 
      location: "Rander Road Campus",
      image: cdn("https://ckpcet.ac.in/img/home-page/video-section/01Entry_03.jpg", 800, 85)
    },
    { 
      name: "Navyug Commerce College", 
      type: "Commerce & Accountancy (VNSGU)", 
      location: "Rander Road Campus",
      image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/04.webp", 800, 85)
    },
    { 
      name: "Navyug Arts College", 
      type: "Humanities & Languages (VNSGU)", 
      location: "Rander Road Campus",
      image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/42.webp", 800, 85)
    }
  ];

  return (
    <SubPageLayout
      title="Navyug Vidyabhavan Trust"
      subtitle={`The parent governing educational board behind ${INSTITUTE.shortName} and sister institutions since ${TRUST.founded}.`}
      category="about"
      activeItemLabel="About Trust"
    >
      <div className="space-y-12 text-[#0F2942]">
        
        {/* HERO IMAGE FOCUS BANNER */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group">
          <div className="aspect-[16/7] md:aspect-[21/8] w-full relative bg-slate-900 overflow-hidden">
            <img 
              src={cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 1600, 85)} 
              alt="Navyug Vidyabhavan Trust Campus" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00509d]/20 backdrop-blur-md border border-[#00509d]/40 text-amber-300 text-xs font-mono font-medium tracking-widest uppercase mb-3 w-fit">
                <Landmark size={14} />
                <span>Established {TRUST.founded}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-white tracking-tight max-w-2xl leading-tight">
                Over 55 Years of Educational Service & Governance
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-sans mt-2 max-w-xl leading-relaxed">
                Governing premier higher education colleges across South Gujarat with merit-based guidelines, updated infrastructure, and civic dedication.
              </p>
            </div>
          </div>
        </div>

        {/* NARRATIVE SECTION */}
        <section className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <h2 className="text-2xl font-display font-semibold text-slate-900 tracking-tight">Genesis of {TRUST.name}</h2>
          <div className="h-1 w-16 bg-[#00509d] rounded-full" />
          
          <div className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base space-y-4">
            <p>
              The <strong>{TRUST.name}</strong> was established in <strong>{TRUST.founded}</strong> (Public Trust No. 1268) with the noble goal of democratizing higher education opportunities in South Gujarat. Founded by prominent visionaries, industrialists, and social leaders of the region, the trust began its journey by establishing premier colleges on spacious campuses to serve students from diverse socioeconomic backgrounds.
            </p>
            <p>
              Over the decades, the trust has earned immense respect for its democratic, merit-based admission guidelines, premium infrastructure setup, and dedication to social welfare. By collaborating with active donors, most notably the benevolent <strong>Pithawalla Family</strong>, the trust has continuously expanded its campuses on Surat-Dumas Road and Rander Road.
            </p>
            <p>
              Under its expert governing board, the trust ensures that all affiliate colleges maintain high academic compliance with Gujarat Technological University (GTU), Veer Narmad South Gujarat University (VNSGU), AICTE, and national quality standards.
            </p>
          </div>
        </section>

        {/* SISTER INSTITUTIONS WITH CAMPUS IMAGES */}
        <section className="space-y-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[#00509d] font-mono text-xs font-medium uppercase tracking-widest">Educational Hub</span>
            <h3 className="text-2xl font-display font-semibold text-slate-800">Sister & Associated Institutions</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutionsList.map((inst, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#00509d]/40">
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img 
                    src={inst.image} 
                    alt={inst.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 right-3 text-[9px] font-mono font-medium uppercase px-2.5 py-1 rounded-full bg-slate-900/80 text-amber-300 border border-white/15 backdrop-blur-md">
                    {inst.location}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-sans font-semibold text-base text-slate-800 leading-snug group-hover:text-[#00509d] transition-colors">{inst.name}</h4>
                    <p className="text-xs text-slate-500 mt-2 font-sans font-medium">{inst.type}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-xs font-mono font-bold text-[#00509d] uppercase flex items-center gap-1.5">
                    <Building size={14} />
                    <span>Navyug Trust Affiliated</span>
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
