import React from "react";
import { Quote, Mail, GraduationCap, Sparkles, Award } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { cdn } from "../../utils/image";

export default function PrincipalsMessage() {
  return (
    <SubPageLayout
      title="Principal's Message"
      subtitle="Academic address and greetings from our Principal, Dr. Chaitanya K. Desai."
      category="about"
      activeItemLabel="The Principal"
    >
      <div className="space-y-12 text-[#3B3131]">

        {/* MAIN PRINCIPAL PROFILE & MESSAGE */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Principal Portrait Column - 5 cols with much bigger portrait */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#F1F5F9] border-2 border-[#00509d]/40 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-lg relative overflow-hidden group">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-[#00509d] p-2 bg-white shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={cdn("https://ckpcet.ac.in/img/about-us/institute/principal.jpg", 600, 90)} 
                  alt="Dr. Chaitanya K. Desai" 
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400";
                  }}
                />
              </div>

              <div>
                <h3 className="font-sans font-semibold text-2xl text-slate-900 leading-tight">Dr. Chaitanya K. Desai</h3>
                <p className="text-sm text-[#00509d] font-mono uppercase tracking-widest mt-2 font-medium">Principal</p>
                <p className="text-xs text-slate-500 font-sans block mt-1 font-medium">Ph.D (IIT Kanpur), M.E (Mechanical), B.E (Production)</p>
              </div>
              
              <div className="border-t border-slate-200 pt-4 text-left text-xs space-y-3 text-slate-600 font-sans bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={16} className="text-[#00509d] shrink-0" />
                  <span className="truncate font-mono font-semibold">principal@ckpcet.ac.in</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award size={16} className="text-[#00509d] shrink-0" />
                  <span className="font-semibold">22+ Years in Higher Academics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GraduationCap size={16} className="text-[#00509d] shrink-0" />
                  <span className="font-semibold">Gujarat Technological University (GTU)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Principal Letter - 7 cols */}
          <div className="lg:col-span-7 space-y-6 relative bg-[#F1F5F9] border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
            <Quote className="absolute top-6 right-6 text-slate-200/80 shrink-0 pointer-events-none -z-0" size={72} />
            
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00509d] font-medium block">
                Warm Greetings to All Students & Visitors,
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-snug">
                Fostering Innovation, Critical Thinking & Engineering Excellence
              </h2>
              
              <div className="h-1 w-20 bg-[#00509d] rounded-full" />
              
              <div className="space-y-4 text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                <p>
                  C. K. Pithawala College of Engineering and Technology was established in a year 1998 with the total intake of 240 students in four different branches. Institute has successfully completed 18 years in the field of Technical Education under the leadership of our honorable president Shri. C. K. Pithawalla.
                </p>
                <p>
                Today it has grown to one of the premier institute of the state with total approved intake of 1236 students in five different branch of Engineering at UG level (i.e. Computer, Civil, Electrical, Electronics and Communication and Mechanical engineering) and one branch at PG level (Mechanical Engineering (specialization: Machine Design))
                </p>
                <p>
                The Institute is located in peaceful environment at Surat-Dumas road in Surat city. The Institute provides disciplined, conducive and professional environment for academic and research with the team of qualified and experienced faculties.
                </p>
                <p>
                Along with the academic activities, institute is committed for overall development of the students. Industrial training, industrial visits, symposia, short term training programs, workshops, seminar expert lectures are taken up as a part of academic calendar. Students are encouraged to organize and participate in sports activities, cultural programs, technical festivals and social welfare activities like blood donation, thalassemia awareness etc.
                </p>
                <p>
                As a being institute offering UG and PG courses in the field of professional education, we are committed to provide learning base academic environment to our students. This in turn will equipped the students with technical knowledge and skill to increase their competency and will transformed the students to qualified professionals. We understand the expectations of the society, government and affiliating university from us as being institute offering technical education and accordingly we are committed for continuous improvement in teaching learning process.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col items-end">
                <span className="font-sans font-semibold text-xl text-[#0F172A]">Dr. Chaitanya K. Desai</span>
                <span className="text-xs text-slate-500 font-sans uppercase tracking-widest mt-1 font-bold">Principal, CKPCET</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SubPageLayout>
  );
}
