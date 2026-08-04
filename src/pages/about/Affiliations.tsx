import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Award, 
  ExternalLink, 
  FileText, 
  Download, 
  ShieldCheck, 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

export default function AffiliationsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.classList.add("ring-4", "ring-[#00509d]/30");
          setTimeout(() => {
            element.classList.remove("ring-4", "ring-[#00509d]/30");
          }, 2000);
        }, 300);
      }
    }
  }, [location.hash]);

  const handleOpenGtu = () => {
    window.open("https://www.gtu.ac.in/", "_blank", "noopener,noreferrer");
  };

  const handleOpenDisclosure = () => {
    window.open("https://drive.google.com/file/d/1PZsx5TibGQkIE7Lrv6pmGngx1zId3YqL/view", "_blank", "noopener,noreferrer");
  };

  return (
    <SubPageLayout
      title="Affiliations & Approvals"
      subtitle="Regulatory credentials, professional boards, and legal disclosures verifying the academic standards of CKPCET."
      category="about"
      activeItemLabel="Affiliations"
    >
      <div className="space-y-12">
        
        {/* Intro */}
        <div className="bg-[#0B2545]/5 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <span className="text-[#0B2545] font-mono font-bold uppercase tracking-widest text-xs block mb-1">
            Compliance & Standards
          </span>
          <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
            C. K. Pithawalla College of Engineering and Technology strictly adheres to regulatory frameworks established by national and state education departments. Every professional degree program offered is structured around comprehensive pedagogical guidelines, laboratory specifications, and syllabus guidelines mandated by our affiliating boards.
          </p>
        </div>

        {/* The 3 Main Rows / Sections */}
        <div className="space-y-8">
          
          {/* Section 1: Gujarat Technological University (GTU) */}
          <div 
            id="gtu" 
            className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 hover:border-[#00509d]/30 hover:shadow-md transition-all scroll-mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#E5B224]/10 text-[#E5B224] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-slate-800 leading-tight">
                    Gujarat Technological University (GTU)
                  </h3>
                  <span className="text-[10px] font-mono text-[#E5B224] font-bold uppercase tracking-wider block mt-0.5">
                    Principal Affiliating University
                  </span>
                </div>
              </div>
              
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                CKPCET is proudly affiliated with Gujarat Technological University (GTU), Ahmedabad. As a premier state technology university, GTU regulates our academic curricula, structures term-end exams, awards official engineering degrees, and governs standard pedagogical compliance across all core departments.
              </p>
            </div>

            <button
              onClick={handleOpenGtu}
              className="px-5 py-3 rounded-xl font-mono font-bold text-xs bg-[#0F4C81] hover:bg-[#0B243B] text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap self-stretch md:self-auto justify-center cursor-pointer"
            >
              <span>Visit Official GTU Portal</span>
              <ExternalLink size={14} />
            </button>
          </div>

          {/* Section 2: AICTE Approval */}
          <div 
            id="aicte" 
            className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 hover:border-[#00509d]/30 hover:shadow-md transition-all scroll-mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0B2545]/10 text-[#0B2545] flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-slate-800 leading-tight">
                    All India Council for Technical Education (AICTE)
                  </h3>
                  <span className="text-[10px] font-mono text-[#0B2545] font-bold uppercase tracking-wider block mt-0.5">
                    National Regulatory Council
                  </span>
                </div>
              </div>
              
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                All undergraduate (B.E.) and postgraduate (M.E.) programs offered by CKPCET are fully approved by the All India Council for Technical Education (AICTE), Ministry of Education, New Delhi. AICTE sets student intake capabilities, laboratory scale benchmarks, faculty-student ratios, and library volumes.
              </p>
            </div>

            <button
              onClick={() => navigate("/about/aicte-approval")}
              className="px-5 py-3 rounded-xl font-mono font-bold text-xs bg-slate-100 hover:bg-[#00509d] text-[#00509d] hover:text-white border border-slate-200/80 hover:border-[#00509d]/10 shadow-xs hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap self-stretch md:self-auto justify-center cursor-pointer"
            >
              <span>View Approval Letters</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Section 3: Mandatory Disclosure */}
          <div 
            id="mandatory-disclosure" 
            className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 hover:border-[#00509d]/30 hover:shadow-md transition-all scroll-mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-slate-800 leading-tight">
                    Mandatory Disclosure (AICTE)
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider block mt-0.5">
                    Public Disclosure Document
                  </span>
                </div>
              </div>
              
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                In compliance with statutory AICTE requirements, CKPCET publishes its official Mandatory Disclosure document annually. This report outlines audited student intake metrics, physical infrastructure dimensions, full-time faculty lists, fee breakdowns, and Anti-Ragging grievance cell setups.
              </p>
            </div>

            <button
              onClick={handleOpenDisclosure}
              className="px-5 py-3 rounded-xl font-mono font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap self-stretch md:self-auto justify-center cursor-pointer"
            >
              <span>Download PDF Report</span>
              <Download size={14} />
            </button>
          </div>

        </div>

        {/* Highlights Banner */}
        <div className="bg-[#F1F5F9] p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-4">
          <h4 className="font-sans font-semibold text-lg text-slate-800">Affiliation & Approval Highlights</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex gap-3 items-start text-xs sm:text-sm text-slate-700 font-sans font-medium bg-white p-4 rounded-xl border border-slate-100">
              <CheckCircle2 size={16} className="text-[#00509d] shrink-0 mt-0.5" />
              <span>Affiliated to GTU since university inception.</span>
            </div>
            <div className="flex gap-3 items-start text-xs sm:text-sm text-slate-700 font-sans font-medium bg-white p-4 rounded-xl border border-slate-100">
              <CheckCircle2 size={16} className="text-[#00509d] shrink-0 mt-0.5" />
              <span>AICTE approvals up-to-date for AY 2025-26.</span>
            </div>
            <div className="flex gap-3 items-start text-xs sm:text-sm text-slate-700 font-sans font-medium bg-white p-4 rounded-xl border border-slate-100">
              <CheckCircle2 size={16} className="text-[#00509d] shrink-0 mt-0.5" />
              <span>Statutory audits and disclosures verified by standard committees.</span>
            </div>
          </div>
        </div>

      </div>
    </SubPageLayout>
  );
}
