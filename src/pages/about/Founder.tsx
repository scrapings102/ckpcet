import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { FOUNDER, INSTITUTE } from "../../data/institute";
import { cdn } from "../../utils/image";

export default function Founder() {
  const contributions = [
    { year: "Early Life", title: "Humble Roots & Will", desc: "Born into a modest family in the coastal village of Bhimpor in Surat District, developing an unwavering will to serve the poor and needy." },
    { year: "Industrial Growth", title: "Industrial Leadership", desc: "Built major industrial houses in India and abroad through sheer determination and hard work, contributing significantly to national development." },
    { year: "Trust Endowments", title: "Trusteeship Principle", desc: "Firmly believing in Mahatma Gandhi's trusteeship principle, he founded Educational Trusts to spread knowledge without regard to caste, creed, or community." },
    { year: "December 1998", title: "CKPCET Inception", desc: `Donated prime Dumas Road land and capital to establish ${INSTITUTE.fullName} (${INSTITUTE.shortName}).` }
  ];

  return (
    <SubPageLayout
      title="Our Visionary Founder"
      subtitle={`${FOUNDER.name} ${FOUNDER.knownAs} — the benevolent industrialist and reformer behind CKPCET.`}
      category="about"
      activeItemLabel="The Founder"
    >
      <div className="space-y-12 text-[#0F2942]">
        
        {/* HERO FOUNDER PORTRAIT & BIOGRAPHY */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          
          {/* Main Portrait Frame - Prominent 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative p-3 bg-white border-2 border-[#00509d]/40 shadow-xl rounded-3xl group max-w-sm mx-auto lg:max-w-none">
              
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900 relative">
                <img 
                  src={cdn(FOUNDER.imageUrl, 1000, 90)} 
                  alt={FOUNDER.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 text-center">
                  <span className="font-sans font-semibold text-white text-lg block">{FOUNDER.name}</span>
                  <span className="font-mono text-xs tracking-widest text-amber-400 uppercase font-medium block mt-1">Visionary Founder & Benefactor</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm max-w-sm mx-auto lg:max-w-none">
              <span className="font-mono text-[10px] tracking-widest text-[#00509d] uppercase font-medium block">Guiding Motto</span>
              <p className="text-xs text-slate-700 italic mt-1 font-sans leading-relaxed">
                "Education becomes a true instrument for social change only when combined with wisdom, devotion, and karmayog."
              </p>
            </div>
          </div>

          {/* Biography & Legacy */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-slate-900 leading-tight">
              A Life Dedicated to Technical Education & Social Welfare
            </h2>

            <div className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base space-y-4">
              <p>
                <span className="float-left text-6xl font-display font-bold text-[#00509d] mr-3 mt-1 leading-[0.8]">C</span>
                hhotubhai Pithawalla, the founder of the "C. K. Pithawala College of Engineering and Technology", Surat, fondly known to his friends and admirers as "C.K." was a man with a difference. Born in a humble family in the sleepy coastal village of Bhimpor in surat District, C. K. grew up by dint of hard work and an iron will to serve the poor and needy and founded industrial units, sports complexes, hospitals and educational institutions and helped numerous organizations with his philanthropy. This self-effacing personality was firmly believing that his generous charity is but a humble contribution to the development of society and the nation at large. He was firmly believing that education becomes an instrument for effective social change provided that it is combined with wisdom, devotion and karmayog that is why accords priority to funding educational institutions by his munificent donations.
              </p>
              <p>
                {FOUNDER.legacy}
              </p>
              <p>
                In {INSTITUTE.established}, Shri Chhotubhai played a pivotal role in establishing <strong>{INSTITUTE.fullName} ({INSTITUTE.shortName})</strong>, providing state-of-the-art engineering and technical education on the Surat-Dumas Road.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium pt-2 border-t border-slate-200">
                {FOUNDER.family}
              </p>
            </div>

            <div className="border-l-4 border-[#00509d] bg-white p-5 rounded-r-2xl italic font-sans text-sm sm:text-base leading-relaxed text-slate-800 shadow-sm">
              "To sow the seeds of an educational institution under whose shade future generations of engineers and innovators may thrive is the noblest legacy one can leave behind."
            </div>
          </div>

        </div>

        {/* HISTORICAL TIMELINE */}
        <section className="pt-6 border-t border-slate-200 space-y-6">
          <h3 className="text-xl font-sans font-semibold text-slate-800">Key Historical Highlights</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributions.map((item, idx) => (
              <div key={idx} className="bg-[#F8FAFC] border border-slate-200/80 p-6 rounded-2xl relative flex flex-col justify-between hover:border-[#00509d]/50 transition-colors shadow-sm">
                <div>
                  <span className="font-mono text-xl font-medium text-[#00509d] block mb-1">{item.year}</span>
                  <h4 className="font-sans font-semibold text-slate-800 text-base leading-tight">{item.title}</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
