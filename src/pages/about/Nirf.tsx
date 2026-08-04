import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  UserCheck, 
  Mail, 
  Search, 
  Award, 
  ShieldCheck, 
  Info,
  ChevronRight
} from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

interface NirfReport {
  year: string;
  title: string;
  isLatest?: boolean;
  driveUrl: string;
  status: "Published" | "Pending Submission" | "Under Review";
  description: string;
}

const NIRF_REPORTS: NirfReport[] = [
  {
    year: "2025-26",
    title: "NIRF Report 2025-26 (Discipline: Engineering)",
    isLatest: true,
    driveUrl: "https://drive.google.com/file/d/1UMoMPdtN1ZZpmJFIiNcKYIa7Eiw0ZZo6/view",
    status: "Published",
    description: "Full institutional data report capturing research publications, patent approvals, student graduation outcomes, and infrastructure expansion for AY 2025-26."
  },
  {
    year: "2024-25",
    title: "NIRF Report 2024-25 (Discipline: Engineering)",
    driveUrl: "https://drive.google.com/file/d/11TLEfSwlVGgMJJqvjA25by7QPdJoCdFp/view",
    status: "Published",
    description: "Comprehensive submission report outlining student-faculty ratio, financial resource utilization, and student outreach milestones."
  },
  {
    year: "2023-24",
    title: "NIRF Report 2023-24 (Discipline: Engineering)",
    driveUrl: "https://drive.google.com/file/d/1hltuEN9auCKpFlGS0_bCFTeenWLEWCbA/view",
    status: "Published",
    description: "Year-wise diagnostic parameters including graduation rates, median placements salary figures, and active doctoral program details."
  },
  {
    year: "2022-23",
    title: "NIRF Report 2022-23 (Discipline: Engineering)",
    driveUrl: "https://drive.google.com/file/d/14bJUtF4XlDYmZJm3NeLmGlegGnuWB_aI/view",
    status: "Published",
    description: "Detailed submission parameters highlighting teaching, learning & resources, research, and collaborative professional practices."
  },
  {
    year: "2021-22",
    title: "NIRF Report 2021-22 (Discipline: Engineering)",
    driveUrl: "https://drive.google.com/file/d/1GguvnvfxuFj0hHyLvvHzGbRvABeQrxTB/view",
    status: "Published",
    description: "Full institutional data disclosure capturing active industry collaborations, faculty citations, and campus accessibility standards."
  },
  {
    year: "2020-21",
    title: "NIRF Report 2020-21 (Discipline: Engineering)",
    driveUrl: "https://drive.google.com/file/d/1yJikY8rvJHi38w6rlh2Gq2QiFSzl0gPX/view",
    status: "Published",
    description: "GTU affiliated statistics covering engineering intake capabilities, student enrollment diversity, and regional development initiatives."
  },
  {
    year: "2019-20",
    title: "NIRF Report 2019-20 (Discipline: Engineering)",
    driveUrl: "https://drive.google.com/file/d/1Vzqi_bqQ7HhQC39_9zruU-ffP0gXwxet/view",
    status: "Published",
    description: "Official institutional data submission verifying physical capital layout, research output, and executive development outcomes."
  },
  {
    year: "2018-19",
    title: "NIRF Report 2018-19 (Discipline: Engineering)",
    driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIdk9Gc0Z4STR4Z3Z1dFJPMEJJaFk2VWl1Rmdj/view",
    status: "Published",
    description: "Primary statistical submission outlining instructional terminal counts, library books acquisition, and safety compliance policies."
  },
  {
    year: "2017-18",
    title: "NIRF Report 2017-18 (Discipline: Engineering)",
    driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIdDdXVlBveU51Qm9KZ0NoNHAxYnRtc2g0Tk5F/view",
    status: "Published",
    description: "Historical academic resource audit report charting student placements, post-graduate intake, and research publications."
  },
  {
    year: "2016-17",
    title: "NIRF Report 2016-17 (Discipline: Engineering)",
    driveUrl: "https://drive.google.com/file/d/0B1N9snDSA9nIeUx3Q0I2eUhPcWM/view",
    status: "Published",
    description: "Initial ranking framework data compilation charting early campus milestones, computer terminals, and laboratory setup."
  }
];

export default function NirfPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReports = NIRF_REPORTS.filter((report) =>
    report.year.includes(searchQuery.trim()) ||
    report.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const handleOpenReport = (report: NirfReport) => {
    window.open(report.driveUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <SubPageLayout
      title="National Institutional Ranking Framework (NIRF)"
      subtitle="Annual data submissions, parameter audits, and official disclosures under the Ministry of Education, Government of India."
      category="about"
      activeItemLabel="NIRF Rankings"
    >
      <div className="space-y-12">
        {/* Intro */}
        <div className="bg-[#0B2545]/5 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col lg:flex-row justify-between gap-8">
          <div className="space-y-2 flex-1">
            <span className="text-[#0B2545] font-mono font-bold uppercase tracking-widest text-xs block">
              National Rankings & Transparency
            </span>
            <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
              C. K. Pithawalla College of Engineering and Technology actively participates in the National Institutional Ranking Framework (NIRF), launched by the Ministry of Education. We compile, audit, and disclose our comprehensive institutional metrics annually, ensuring total academic and financial transparency.
            </p>
          </div>

          {/* Nodal Officer Contact Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shrink-0 w-full lg:w-80 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:12px_12px] opacity-25 pointer-events-none" />
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#00509d]/10 text-[#00509d] flex items-center justify-center shrink-0">
                <UserCheck size={20} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-800 text-sm">
                  NIRF Nodal Officer
                </h4>
                <span className="text-[10px] font-mono text-[#00509d] font-bold uppercase">
                  Official Contact
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-slate-600 font-sans">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Officer Name:
                </span>
                <span className="font-semibold text-slate-800">
                  Dr. Ami T. Choksi
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Designation:
                </span>
                <span>Principal / Head of Institution</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-slate-500">
                <Mail size={13} className="text-[#00509d]" />
                <a href="mailto:nirf@ckpcet.ac.in" className="hover:text-[#00509d] transition-colors font-mono font-medium truncate">
                  nirf@ckpcet.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar & Stats Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-bold text-xl text-slate-800">
              Annual Submissions History
            </h3>
            <span className="text-xs font-mono font-bold bg-[#00509d]/10 text-[#00509d] px-2.5 py-0.5 rounded-full border border-[#00509d]/20">
              {NIRF_REPORTS.length} Reports
            </span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by year (e.g. 2025)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F1F5F9] focus:bg-white text-slate-800 placeholder-slate-400 font-medium text-xs sm:text-sm pl-9 pr-4 py-2 rounded-xl border border-slate-200 focus:border-[#00509d] focus:ring-2 focus:ring-[#00509d]/20 outline-none transition-all"
            />
          </div>
        </div>

        {/* Reports Vertical List */}
        <div className="space-y-4">
          {filteredReports.map((report) => (
            <div
              key={report.year}
              onClick={() => handleOpenReport(report)}
              className="bg-white border border-slate-200/90 hover:border-[#00509d]/50 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group cursor-pointer relative"
            >
              {report.isLatest && (
                <span className="absolute -top-2.5 left-6 bg-[#00509d] text-white font-mono font-bold text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                  Latest Submission
                </span>
              )}

              {/* Left Column: Icon and Title info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00509d]/10 text-[#00509d] flex items-center justify-center shrink-0 group-hover:bg-[#00509d] group-hover:text-white transition-all">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-slate-800 text-base sm:text-lg group-hover:text-[#00509d] transition-colors leading-tight">
                    {report.title}
                  </h4>
                  <p className="text-slate-500 font-sans text-xs sm:text-sm max-w-2xl leading-relaxed">
                    {report.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Status and Download trigger */}
              <div className="flex items-center gap-4 self-end sm:self-auto shrink-0">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {report.status}
                </span>

                <div className="w-8 h-8 rounded-full border border-slate-200/80 group-hover:border-[#00509d] flex items-center justify-center text-slate-400 group-hover:text-[#00509d] transition-all">
                  <Download size={14} className="group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          ))}

          {filteredReports.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-600 font-bold text-sm">
                No ranking reports found for "{searchQuery}"
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
      </div>
    </SubPageLayout>
  );
}
