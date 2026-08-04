import React from "react";
import { FileText, Shield, Mail, BookOpen } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { INSTITUTE, CONTACT } from "../../data/institute";

export default function EmployeeServiceRules() {
  return (
    <SubPageLayout
      title="Employee Service Rules"
      subtitle="Official rules, code of conduct, and service guidelines governing faculty and staff members at CKPCET."
      category="about"
      activeItemLabel="Employee Service Rules"
    >
      <div className="space-y-12 text-[#3B3131]">
        {/* Document Information Card */}
        <div className="bg-gradient-to-br from-[#0F2942] to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Shield size={14} />
              <span>Institutional Governance</span>
            </div>
            
            <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
              Service Rules & Code of Professional Ethics
            </h3>
            
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Detailed service rules, regulations, and code of conduct governing academic and administrative staff members are established and maintained by the Navyug Vidyabhavan Trust administration in accordance with state and university norms.
            </p>
          </div>
        </div>

        {/* Administration Access Guidelines */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#00509d] flex items-center justify-center font-bold">
              <BookOpen size={24} />
            </div>
            <h4 className="font-sans font-semibold text-xl text-slate-900">Official Service Documentation</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Official copies of employee service rules, amendments, and governance codes are maintained by the Navyug Vidyabhavan Trust and the Central Administrative Office of {INSTITUTE.fullName}.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#00509d] flex items-center justify-center font-bold">
              <Mail size={24} />
            </div>
            <h4 className="font-sans font-semibold text-xl text-slate-900">Inquiries & Access</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Faculty and staff members seeking access to service rulebooks or official administrative clarifications may contact the Administrative Office directly during campus operating hours ({CONTACT.timings}).
            </p>
            <div className="pt-2 space-y-1">
              {CONTACT.emails.map((email, idx) => (
                <a
                  key={idx}
                  href={`mailto:${email}`}
                  className="block text-xs font-semibold text-[#00509d] hover:underline"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Note on Physical Availability */}
        <div className="bg-slate-100/80 rounded-2xl p-6 border border-slate-200 text-center space-y-2">
          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Note for Institutional Employees</p>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto">
            Physical documentation of service rules and regulations is available for reference at the Central Administrative Office on campus ({CONTACT.address}).
          </p>
        </div>
      </div>
    </SubPageLayout>
  );
}
