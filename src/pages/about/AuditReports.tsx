import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  Search, 
  ShieldCheck, 
  Coins, 
  CheckCircle2,
  ExternalLink 
} from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

interface AuditReport {
  year: string;
  title: string;
  driveUrl: string;
  isLatest?: boolean;
  status: "Audited & Verified" | "Under Review";
  description: string;
}

const AUDIT_REPORTS: AuditReport[] = [
  {
    year: "2024-25",
    title: "Financial Audit Report FY 2024-25",
    driveUrl: "https://drive.google.com/file/d/1OK3dFI2yBUxFVSVIxBRBO0jzW2DsAt-p/view?usp=sharing",
    isLatest: true,
    status: "Audited & Verified",
    description: "Fully verified financial statement, statement of accounts, income & expenditure balance sheets, and resource allocation audits for FY 2024-25."
  },
  {
    year: "2023-24",
    title: "Financial Audit Report FY 2023-24",
    driveUrl: "https://drive.google.com/file/d/1upRfQLbjp9391cqT04FoBLkzShf_prf2/view?usp=sharing",
    status: "Audited & Verified",
    description: "Audited financial statement, income/expenditure logs, capital works audits, and salary register compliance for FY 2023-24."
  },
  {
    year: "2022-23",
    title: "Financial Audit Report FY 2022-23",
    driveUrl: "https://drive.google.com/file/d/112tLh1ny15zaN_kbdprdQzCpTagVr4dG/view?usp=sharing",
    status: "Audited & Verified",
    description: "Verified balance sheets, development fund distributions, and recurring operations statements of account."
  },
  {
    year: "2021-22",
    title: "Financial Audit Report FY 2021-22",
    driveUrl: "https://drive.google.com/file/d/1tdGHN67Y8qqxKR7tduM9V_PYuYUYObyx/view?usp=sharing",
    status: "Audited & Verified",
    description: "Comprehensive capital and operational audits verified by certified public accountants and the parent trust."
  },
  {
    year: "2020-21",
    title: "Financial Audit Report FY 2020-21",
    driveUrl: "https://drive.google.com/file/d/1g7IaMVGn2flibEFRCrTDIy-O0AvsSfrU/view?usp=sharing",
    status: "Audited & Verified",
    description: "Official financial statements, balance sheets, and statutory auditing certificates for the fiscal year 2020-21."
  },
  {
    year: "2019-20",
    title: "Financial Audit Report FY 2019-20",
    driveUrl: "https://drive.google.com/file/d/11TCIH1fN8k8DvNjZsguPACvjiJXAg5jA/view?usp=sharing",
    status: "Audited & Verified",
    description: "Audited accounts outlining capital equipment depreciation, lab procurement investments, and recurring fund registries."
  },
  {
    year: "2018-19",
    title: "Financial Audit Report FY 2018-19",
    driveUrl: "https://drive.google.com/file/d/1dzpbqAsRSQL_sFm0qZ8YYMSRoajaoXT-/view?usp=sharing",
    status: "Audited & Verified",
    description: "Year-end financial audits covering building fund additions, instructional hardware acquisitions, and library funding."
  },
  {
    year: "2017-18",
    title: "Financial Audit Report FY 2017-18",
    driveUrl: "https://drive.google.com/file/d/12CmjYiJyCcOqNSzKhNIdIoIDLr-3fQ3a/view?usp=sharing",
    status: "Audited & Verified",
    description: "Verified financial disclosures and chartered accountant certification logs for the fiscal year 2017-18."
  }
];

export default function AuditReportsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReports = AUDIT_REPORTS.filter((report) =>
    report.year.includes(searchQuery.trim()) ||
    report.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const handleOpenReport = (report: AuditReport) => {
    window.open(report.driveUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <SubPageLayout
      title="Financial Audit Reports"
      subtitle="Audited financial statements, income & expenditure balance sheets, and chartered accountant verification records for CKPCET."
      category="about"
      activeItemLabel="Audit Reports"
    >
      <div className="space-y-12">
        {/* Intro */}
        <div className="bg-[#0B2545]/5 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <span className="text-[#0B2545] font-mono font-bold uppercase tracking-widest text-xs block mb-1">
            Financial Transparency
          </span>
          <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
            As a self-financed engineering institution managed by the Navyug Vidyabhavan Trust, C. K. Pithawalla College of Engineering and Technology maintains complete public accountability and financial transparency. All balance sheets, development funds, salary registers, and capital procurements are compiled, verified, and audited annually by certified independent Chartered Accountants.
          </p>
        </div>

        {/* Filter and Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-bold text-xl text-slate-800">
              Audit Statements Registry
            </h3>
            <span className="text-xs font-mono font-bold bg-[#00509d]/10 text-[#00509d] px-2.5 py-0.5 rounded-full border border-[#00509d]/20">
              {AUDIT_REPORTS.length} Years
            </span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search year (e.g. 2024)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F1F5F9] focus:bg-white text-slate-800 placeholder-slate-400 font-medium text-xs sm:text-sm pl-9 pr-4 py-2 rounded-xl border border-slate-200 focus:border-[#00509d] focus:ring-2 focus:ring-[#00509d]/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Document Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReports.map((report) => (
            <div
              key={report.year}
              onClick={() => handleOpenReport(report)}
              className="bg-white border border-slate-200/90 hover:border-[#00509d]/50 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between gap-4 group cursor-pointer relative"
            >
              {report.isLatest && (
                <span className="absolute -top-2.5 left-6 bg-[#00509d] text-white font-mono font-bold text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                  Latest Audit
                </span>
              )}

              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-[#00509d] group-hover:text-white flex items-center justify-center shrink-0 transition-all">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-800 text-base group-hover:text-[#00509d] transition-colors leading-tight">
                      {report.title}
                    </h4>
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wide inline-block mt-1">
                      {report.status}
                    </span>
                  </div>
                </div>

                <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed">
                  {report.description}
                </p>
              </div>

              {/* Footer action trigger */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-[#00509d] group-hover:underline">
                <span>View Audited Report</span>
                <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}

          {filteredReports.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 col-span-2">
              <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-600 font-bold text-sm">
                No audit reports found for "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-2 text-xs font-bold text-[#00509d] hover:underline cursor-pointer"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>

        {/* Compliance Footer */}
        <div className="bg-[#F1F5F9] p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-4">
          <h4 className="font-sans font-semibold text-lg text-slate-800">Financial Governance & Standards</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start text-xs sm:text-sm text-slate-700 font-sans font-medium bg-white p-4 rounded-xl border border-slate-100">
              <CheckCircle2 size={16} className="text-[#00509d] shrink-0 mt-0.5" />
              <span>Full compliance with Bombay Public Trust Act, 1950 (Registration No. 1268).</span>
            </div>
            <div className="flex gap-3 items-start text-xs sm:text-sm text-slate-700 font-sans font-medium bg-white p-4 rounded-xl border border-slate-100">
              <CheckCircle2 size={16} className="text-[#00509d] shrink-0 mt-0.5" />
              <span>Tax exemption certifications active under Section 80(G) of the Income-Tax Act.</span>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
