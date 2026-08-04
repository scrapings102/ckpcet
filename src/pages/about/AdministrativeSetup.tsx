import React from "react";
import { Users, Building2, ShieldCheck, Award } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { ADMIN_STAFF, INSTITUTE } from "../../data/institute";

export default function AdministrativeSetup() {
  const chartUrl = "https://ckpcet.ac.in/img/about-us/institute/administrative-setup.png";

  return (
    <SubPageLayout
      title="Administrative Setup"
      subtitle={`The organizational hierarchy and administrative support structure of ${INSTITUTE.fullName}.`}
      category="about"
      activeItemLabel="Administrative Setup"
    >
      <div className="space-y-12 text-[#3B3131]">
        {/* Structure Overview Section */}
        <section className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00509d] block">Organizational Governance</span>
            <h3 className="font-sans font-semibold text-xl md:text-2xl text-slate-900">Institutional Administration Chart</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              The administrative architecture of CKPCET is structured to facilitate transparent decision-making, efficient resource management, and seamless academic operations. Working under the guidance of the Navyug Vidyabhavan Trust and the Principal, our administrative teams oversee institutional governance, student services, finance, human resources, and campus infrastructure.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-4 shadow-inner flex items-center justify-center">
            <img
              src={chartUrl}
              alt="CKPCET Administrative Setup Chart"
              className="w-full h-auto max-h-[800px] object-contain rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </div>
        </section>

        {/* Core Administrative Staff Section */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="font-sans font-semibold text-xl md:text-2xl text-slate-900">Key Administrative Staff</h3>
            <p className="text-sm text-slate-600 mt-1">Dedicated professionals handling office administration, student affairs, accounts, and library services.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADMIN_STAFF.map((staff, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#00509d] flex items-center justify-center shrink-0 font-bold text-lg">
                  {staff.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-semibold text-base text-slate-900 leading-snug">{staff.name}</h4>
                  <span className="inline-block px-2.5 py-0.5 bg-slate-100 text-[#00509d] rounded-md text-xs font-semibold uppercase tracking-wider">
                    {staff.designation}
                  </span>
                  {staff.qualification && (
                    <p className="text-xs text-slate-500 pt-1 font-medium">Qualification: {staff.qualification}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pillars of Administration */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3">
            <Building2 className="text-blue-400 w-8 h-8" />
            <h4 className="font-sans font-semibold text-lg text-white">Academic Administration</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Coordinating student admissions, university examinations, affiliation renewals, and academic records with precision.
            </p>
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3">
            <ShieldCheck className="text-blue-400 w-8 h-8" />
            <h4 className="font-sans font-semibold text-lg text-white">General Office & HR</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Managing human resources, service rules, statutory compliance, institutional welfare, and general office correspondence.
            </p>
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3">
            <Award className="text-blue-400 w-8 h-8" />
            <h4 className="font-sans font-semibold text-lg text-white">Library & Resources</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Maintaining extensive physical and digital library repositories, research journals, and reading room environments.
            </p>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
