import React from "react";
import { Mail, Check, Quote, Award, BookOpen, Users, GraduationCap } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { DEPARTMENTS } from "../../data/departments";
import { cdn } from "../../utils/image";

export default function HodsMessage() {
  const representativeMessage = "Welcome to C. K. Pithawala College of Engineering and Technology (CKPCET). As Heads of our respective Engineering Departments, our collective commitment is to deliver an empowering, outcome-based technical education across our undergraduate and postgraduate engineering programs. We bridge foundational scientific principles with cutting-edge laboratory practice, R&D projects, and industry internships to shape high-caliber engineers ready for technological innovation and global careers.";

  const departmentalGoals = [
    "Outcome-Based Education (OBE) implementation adhering to GTU, AICTE, and NBA quality benchmarks.",
    "Continuous laboratory modernization, hands-on software workshops, and industrial field visits.",
    "Fostering student innovation through Smart India Hackathon participation and SSIP startup grants.",
    "Dedicated academic mentoring, career counseling, and preparation for GATE, GRE, and campus placements."
  ];

  // Extract all HODs from DEPARTMENTS
  const hodsList = DEPARTMENTS.map((dept) => {
    const hod = dept.staff.find((s) => s.designation.toLowerCase().includes("hod") || s.designation.toLowerCase().includes("head")) || dept.staff[0];
    return {
      department: dept.name,
      deptKey: dept.key,
      name: hod ? hod.name : `Head, ${dept.name}`,
      designation: hod ? hod.designation : "Head of Department",
      qualification: hod ? hod.qualification : "Ph.D. / M.Tech",
    };
  }).filter((h) => h.deptKey !== "aiml"); // AIML shares faculty with Computer/IT

  return (
    <SubPageLayout
      title="HODs' Message"
      subtitle="Academic address and departmental direction from the Heads of Engineering Departments at CKPCET."
      category="about"
      activeItemLabel="HOD's Message"
    >
      <div className="space-y-12 text-[#0F2942]">
        
        {/* TOP SECTION: COLLECTIVE HOD ADDRESS */}
        <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          <Quote className="absolute top-6 right-6 text-slate-200/70 shrink-0 pointer-events-none -z-0" size={80} />
          
          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00509d] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#00509d] font-bold">
                Collective Departmental Leadership Message
              </span>
            </div>
            
            <p className="font-sans italic text-slate-800 text-base sm:text-lg leading-relaxed border-l-4 border-[#00509d] pl-5 py-1">
              "{representativeMessage}"
            </p>
            
            {/* Key Departmental Goals */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
              <h4 className="font-sans font-semibold text-base text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00509d]" />
                Key Departmental & Academic Objectives:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-sans">
                {departmentalGoals.map((goal, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <Check size={16} className="text-[#00509d] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>C. K. Pithawala College of Engineering & Technology (CKPCET)</span>
              <span className="font-medium text-slate-800 uppercase tracking-wider">Surat, Gujarat</span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: HEADS OF DEPARTMENTS DIRECTORY */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#00509d]">
              ACADEMIC LEADERSHIP
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-slate-900">
              Heads of Engineering Departments
            </h3>
            <p className="text-sm text-slate-600">
              Leading teaching, research innovation, and laboratory excellence across all CKPCET disciplines.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {hodsList.map((hod, idx) => {
              const initials = hod.name
                .replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s*/i, "")
                .split(" ")
                .map((w) => w[0])
                .filter(Boolean)
                .slice(0, 2)
                .join("");

              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:border-[#00509d]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#00509d]/10 text-[#00509d] flex items-center justify-center font-mono font-medium text-sm border border-[#00509d]/20 group-hover:bg-[#00509d] group-hover:text-white transition-colors">
                        {initials}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-[10px] font-medium uppercase tracking-wider">
                        {hod.deptKey.toUpperCase()}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-sans font-semibold text-lg text-slate-900 group-hover:text-[#00509d] transition-colors">
                        {hod.name}
                      </h4>
                      <p className="text-xs font-mono text-[#00509d] font-semibold mt-1">
                        Head, Department of {hod.department}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-600 font-sans">
                    <span className="font-mono text-[10px] uppercase text-slate-400 block mb-0.5">Qualification</span>
                    <span className="font-medium text-slate-700">{hod.qualification}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </SubPageLayout>
  );
}
