import React, { useState } from "react";
import { 
  FileText, 
  ShieldCheck, 
  BookOpen, 
  UserCheck, 
  Calendar, 
  AlertTriangle, 
  Award, 
  Building2, 
  CheckCircle2, 
  Clock, 
  HeartHandshake, 
  Scale, 
  Mail, 
  Briefcase,
  FileCheck2,
  ChevronRight
} from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { INSTITUTE, CONTACT } from "../../data/institute";

export default function EmployeeServiceRules() {
  const [activeTab, setActiveTab] = useState<"recruitment" | "leave" | "conduct" | "discipline" | "benefits">("recruitment");

  const rulesData = {
    recruitment: {
      title: "Recruitment & Appointment Procedures",
      icon: UserCheck,
      description: "Standardized guidelines for recruiting, selecting, and confirming teaching and non-teaching personnel as mandated by AICTE, GTU, and Navyug Vidyabhavan Trust.",
      points: [
        {
          heading: "Qualifications & Eligibility",
          detail: "All faculty appointments strictly adhere to AICTE minimum qualifications and pay scales. Assistant Professors, Associate Professors, and Professors are recruited through open advertisements in leading newspapers and national portals."
        },
        {
          heading: "Selection Committee Protocol",
          detail: "Interviews are conducted by a duly constituted Selection Committee comprising Subject Experts nominated by GTU, Trust Management representatives, the Principal, and Departmental HODs."
        },
        {
          heading: "Probation & Confirmation",
          detail: "Newly appointed staff members undergo a mandatory probation period of two years. Upon satisfactory performance review and GTU approval, service is confirmed by the Board of Trustees."
        },
        {
          heading: "Orientation & Induction",
          detail: "Every newly recruited faculty member undergoes a comprehensive institutional orientation covering pedagogy, LMS usage, laboratory safety protocols, and administrative workflows."
        }
      ]
    },
    leave: {
      title: "Leave Policies & Entitlements",
      icon: Calendar,
      description: "Structured leave rules providing adequate rest, personal time, medical support, and professional development opportunities for institutional staff.",
      points: [
        {
          heading: "Casual & Restricted Leave",
          detail: "Full-time employees are eligible for 12 days of Casual Leave (CL) per academic year, along with prescribed Restricted Holidays (RH) as notified by the University."
        },
        {
          heading: "Earned & Vacations Leave",
          detail: "Teaching staff are entitled to Summer and Winter Vacations as declared by GTU. Non-vacation administrative staff accumulate Earned Leave (EL) at prescribed statutory rates."
        },
        {
          heading: "Medical & Maternity Leave",
          detail: "Medical Leave is sanctioned upon submission of valid medical certificates. Eligible female employees receive full Maternity Leave as per state government regulations."
        },
        {
          heading: "Duty & Academic Leave (DL)",
          detail: "Special Duty Leave is granted for attending FDPs, STTPs, National/International Conferences, GTU examination duties, evaluation work, and university committee assignments."
        }
      ]
    },
    conduct: {
      title: "Code of Professional Conduct & Ethics",
      icon: Scale,
      description: "Standards of professional behavior, academic ethics, and integrity required from every employee of the institute.",
      points: [
        {
          heading: "Punctuality & Academic Decorum",
          detail: "Faculty members are expected to maintain strict punctuality for lectures, practical batches, and institutional duties, adhering to the official biometric attendance system."
        },
        {
          heading: "Prohibition of Private Tuitions",
          detail: "Engaging in private commercial tuitions, coaching institutes, or unauthorized external paid employment is strictly prohibited for all full-time employees."
        },
        {
          heading: "Student Mentorship & Fairness",
          detail: "Faculty must maintain impartial, fair, and objective standards during internal evaluations, practical exams, and continuous assessment without discrimination or bias."
        },
        {
          heading: "Institutional & IP Integrity",
          detail: "Staff members must safeguard institutional assets, confidential academic records, research intellectual property, and uphold the reputation of Navyug Vidyabhavan Trust."
        }
      ]
    },
    discipline: {
      title: "Disciplinary Procedures & Redressal",
      icon: AlertTriangle,
      description: "Transparent, fair, and legally compliant mechanisms for addressing grievances, misconduct, and administrative inquiries.",
      points: [
        {
          heading: "Internal Grievance Redressal Committee",
          detail: "A dedicated staff grievance committee reviews employee concerns regarding service conditions, workload, or administrative issues in a confidential, impartial manner."
        },
        {
          heading: "Disciplinary Inquiry Workflow",
          detail: "Any allegation of professional misconduct triggers a formal show-cause notice, followed by a fair inquiry committee proceeding adherence to natural justice principles."
        },
        {
          heading: "Internal Complaints Committee (ICC)",
          detail: "Enforces a strict zero-tolerance policy against workplace harassment, operating in full compliance with the POSH Act to ensure a safe work environment for all employees."
        },
        {
          heading: "Appellate Authority",
          detail: "The Board of Trustees of Navyug Vidyabhavan Trust serves as the final appellate authority for appeals regarding disciplinary decisions or administrative grievances."
        }
      ]
    },
    benefits: {
      title: "Staff Benefits & Welfare Schemes",
      icon: HeartHandshake,
      description: "Comprehensive financial security, research encouragement, and health benefits extended to faculty and staff members.",
      points: [
        {
          heading: "Employees Provident Fund & Gratuity",
          detail: "Eligible staff members are enrolled under the EPF scheme with matching institutional contributions, alongside Gratuity benefits payable upon qualifying service length."
        },
        {
          heading: "Research & Patent Incentives",
          detail: "Financial assistance is provided for publishing research papers in Scopus/WoS indexed journals, filing patents, and presenting papers at IEEE/Springer conferences."
        },
        {
          heading: "Staff Health & Group Insurance",
          detail: "Annual health check-up camps, emergency medical support, and group accidental insurance policies cover staff members on campus."
        },
        {
          heading: "Qualification Enhancement Support",
          detail: "Faculty members pursuing Ph.D. or higher specialization receive flexible scheduling, laboratory facility access, and study leave considerations."
        }
      ]
    }
  };

  return (
    <SubPageLayout
      title="Employee Service Rules"
      subtitle="Official rules, regulations, code of conduct, and service guidelines governing faculty and staff at CKPCET."
      category="about"
      activeItemLabel="Employee Service Rules"
    >
      <div className="space-y-10 text-[#3B3131]">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-br from-[#0B1325] via-[#0F2942] to-[#1E293B] text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} />
              <span>Institutional Governance Framework</span>
            </div>
            
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
              Service Rules & Code of Professional Conduct
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
              {INSTITUTE.fullName} operates under the visionary management of Navyug Vidyabhavan Trust. All service rules, duties, leave regulations, and ethical guidelines are established in accordance with GTU, AICTE, and statutory Gujarat State Higher Education norms.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <FileCheck2 size={14} className="text-blue-400" /> GTU & AICTE Compliant
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <Building2 size={14} className="text-blue-400" /> Navyug Vidyabhavan Trust Rules
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <Award size={14} className="text-blue-400" /> Transparent Redressal System
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs for Rule Categories */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
            {(Object.keys(rulesData) as Array<keyof typeof rulesData>).map((key) => {
              const TabIcon = rulesData[key].icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#00509d] text-white shadow-md shadow-blue-900/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  <TabIcon size={16} />
                  <span>{rulesData[key].title.split(" ")[0]} & {rulesData[key].title.split(" ")[1] || ""}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Card */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-8">
            <div className="border-b border-slate-100 pb-6 space-y-2">
              <div className="flex items-center gap-3">
                {React.createElement(rulesData[activeTab].icon, { className: "w-7 h-7 text-[#00509d]" })}
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900">
                  {rulesData[activeTab].title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                {rulesData[activeTab].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {rulesData[activeTab].points.map((pt, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 hover:border-blue-300 transition-all space-y-2 group"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#00509d] shrink-0" />
                    <h4 className="font-sans font-semibold text-base text-slate-900 group-hover:text-[#00509d] transition-colors">
                      {pt.heading}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {pt.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3">
            <Clock className="w-8 h-8 text-blue-400" />
            <h4 className="font-bold text-lg text-white">Biometric Working Hours</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Biometric entry-exit tracking ensures accurate attendance records, standardized workload distribution, and punctual class delivery across departments.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h4 className="font-bold text-lg text-white">Annual Performance Appraisal</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Faculty performance is evaluated annually based on student feedback, research publications, GTU results, departmental contributions, and institutional duties.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h4 className="font-bold text-lg text-white">Physical Rulebook Access</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Detailed physical documentation of Service Rules & Regulations is open for inspection at the Central Administrative Office during working hours.
            </p>
          </div>
        </div>

        {/* Administrative Office Access Footer */}
        <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <h4 className="font-sans font-semibold text-lg text-slate-900">
              Need Official Clarification or Service Rulebooks?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Faculty and staff members may contact the Central Administrative Office during campus office hours ({CONTACT.timings}) or submit official inquiries via email.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={`mailto:${CONTACT.emails[0]}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#00509d] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#003d7a] transition-all shadow-sm"
            >
              <Mail size={16} />
              <span>Contact Admin Office</span>
            </a>
          </div>
        </div>

      </div>
    </SubPageLayout>
  );
}
