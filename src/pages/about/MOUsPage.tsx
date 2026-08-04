import React, { useState, useMemo } from "react";
import SubPageLayout from "../../components/SubPageLayout";
import {
  Building2,
  Users,
  Briefcase,
  FlaskConical,
  Wrench,
  FileSpreadsheet,
  GraduationCap,
  Calendar,
  Search,
  Filter,
  Handshake,
  CheckCircle2,
  Award,
  Globe,
  ArrowUpRight,
  SlidersHorizontal,
  Layers
} from "lucide-react";

interface CompanyMOU {
  id: string;
  name: string;
  address: string;
  startDate: string;
  endDate: string;
  isOngoing?: boolean;
  logoType: string;
  logoBg?: string;
  logoColor?: string;
  customLogo?: React.ReactNode;
}

const COMPANIES_DATA: CompanyMOU[] = [
  {
    id: "mou-1",
    name: "Nerds House Technologies LLP",
    address: "A 602 Nova Apex,B/h Sneh Sankul Wad,Adajan,Surat Gujarat 395009",
    startDate: "18-09-2025",
    endDate: "18-09-2027",
    logoType: "N",
    customLogo: (
      <div className="w-12 h-12 bg-[#0F2D5E] rounded-xl flex items-center justify-center text-white font-extrabold text-2xl shadow-xs">
        N
      </div>
    )
  },
  {
    id: "mou-2",
    name: "SSM Learning Excellence Center Powered By SSM",
    address: "Udhana-Magdalla Road,Surat-Dumas Road,New Magdalla, Surat,Gujarat 395007",
    startDate: "18-07-2025",
    endDate: "18-07-2027",
    logoType: "SSM",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1D4ED8] font-bold text-sm tracking-tighter">
        SSM
      </div>
    )
  },
  {
    id: "mou-3",
    name: "Inkey IT Solutions Pvt. Ltd.",
    address: "Union Heights Business Center, A/11, 11th Floor, Union Heights, nr. Rahul Raj Mall, Vesu, Surat, Gujarat 395007",
    startDate: "12-08-2024",
    endDate: "12-08-2026",
    logoType: "Inkey",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-800 font-bold text-[11px] leading-tight text-center px-1">
        Inkey <span className="text-blue-600">IT</span>
      </div>
    )
  },
  {
    id: "mou-4",
    name: "Narola Infotech",
    address: "Regent Square, 104-105, Kalpana Chawla Marg, above D-Mart, Adajan, Surat, Gujarat 395009",
    startDate: "01-05-2024",
    endDate: "01-05-2026",
    logoType: "Narola",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#0284C7] font-extrabold text-xs">
        Narola
      </div>
    )
  },
  {
    id: "mou-5",
    name: "Connected Dot Solutions",
    address: "C-309, Dev Aurum Commercial, Satellite, Anand Nagar Cross Road, Prahlad Nagar, Ahmedabad",
    startDate: "10-04-2024",
    endDate: "10-04-2026",
    logoType: "Dot",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#0F2D5E]">
        <Globe size={24} className="text-blue-600" />
      </div>
    )
  },
  {
    id: "mou-6",
    name: "EVERFYENG ENGINEERING LLP",
    address: "Gate no 97, Floor No 204,Wood's Villa,Borhadewadi,Moshi,Pune",
    startDate: "03-10-2023",
    endDate: "03-10-2024",
    logoType: "EVERFY",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#0284C7] font-bold text-[10px] tracking-tighter">
        EVERFY
      </div>
    )
  },
  {
    id: "mou-7",
    name: "ExcelR Edtech Pvt. Ltd.",
    address: "ExcelR Edtech Pvt. Ltd.",
    startDate: "12-09-2023",
    endDate: "11-09-2025",
    logoType: "ExcelR",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#0284C7] font-bold italic text-xs">
        ExcelR
      </div>
    )
  },
  {
    id: "mou-8",
    name: "MERIGHTY Inventions Private Limited, Surat",
    address: "1st Floor, Plot No. D127/1, FP 127, Pal Building No. A/2 & A/3 Next to Ram Kutir Bunglows, Opposite Sundarvan Row House Besides SMC Reading Room, Green Valley Road, behind Gangeshwar Mahadev Temple, Adajan, Surat, Gujarat 395009",
    startDate: "28-11-2023",
    endDate: "onwards",
    isOngoing: true,
    logoType: "MERIGHTY",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-amber-600 font-extrabold text-[9px] tracking-tighter">
        MERIGHT
      </div>
    )
  },
  {
    id: "mou-9",
    name: "MegaMinds Technologies Pvt. Ltd.",
    address: "Plot no-6, Simha society, Opp SMC multilevel parking, Behind JD restaurant, Mini bazar, Varachha, Surat",
    startDate: "28-11-2023",
    endDate: "onwards",
    isOngoing: true,
    logoType: "MegaMind",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1D4ED8] font-bold text-[10px]">
        MegaMind
      </div>
    )
  },
  {
    id: "mou-10",
    name: "TOPS Technologies",
    address: "905 Samdh Complex, Nr. Associate Petrol Pump, Nr. Maradia Plaza, CG Road, Ahmedabad and represented herein by its Zonal/Divsional Head, Mr Yatrik Goswami, Area Head",
    startDate: "17-12-2022",
    endDate: "17-12-2025",
    logoType: "TOPS",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-rose-600 font-extrabold text-xs">
        TOPS
      </div>
    )
  },
  {
    id: "mou-11",
    name: "Volunt IT Services Pvt. Ltd.",
    address: "15, Madhuban 28, Near Capsicum Resort, Charodi, Ahmedabad - 382481",
    startDate: "02-09-2021",
    endDate: "02-09-2022",
    logoType: "V",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-[#1D4ED8] font-extrabold text-xl">
        V
      </div>
    )
  },
  {
    id: "mou-12",
    name: "K.K. Retrofitex Solutions",
    address: "UG - 88 & 89, Second floor, West field shopping mall, Ghod-dod road, Surat, Gujarat 395007",
    startDate: "11-08-2021",
    endDate: "11-08-2022",
    logoType: "K.K.",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-800 font-bold text-sm">
        K.K.
      </div>
    )
  },
  {
    id: "mou-13",
    name: "Finex Business Services Uniconnect Overseas",
    address: "216,Western Arena, Nr. Madhuvan circle, Green city road,Pal-Adajan,Surat",
    startDate: "22-07-2021",
    endDate: "21-07-2022",
    logoType: "Finex",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-700 font-serif italic font-bold text-xs">
        Finex
      </div>
    )
  },
  {
    id: "mou-14",
    name: "Professional Computer Education Surat",
    address: "Professional Computer Education Surat",
    startDate: "08-03-2021",
    endDate: "08-03-2022",
    logoType: "PCE",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-amber-600">
        <Users size={22} className="text-amber-500" />
      </div>
    )
  },
  {
    id: "mou-15",
    name: "QUANTUM LEARNINGS, Microsoft",
    address: "2125 S. El Camino Real, Suite 103, Oceanside, CA 92054",
    startDate: "11-02-2021",
    endDate: "10-02-2022",
    logoType: "Microsoft",
    customLogo: (
      <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center">
        <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
          <div className="bg-[#F25022] w-2.5 h-2.5"></div>
          <div className="bg-[#7FBA00] w-2.5 h-2.5"></div>
          <div className="bg-[#00A4EF] w-2.5 h-2.5"></div>
          <div className="bg-[#FFB900] w-2.5 h-2.5"></div>
        </div>
      </div>
    )
  }
];

export default function MOUsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | "Active" | "Ongoing">("All");

  const filteredCompanies = useMemo(() => {
    return COMPANIES_DATA.filter((comp) => {
      // Filter status
      if (activeFilter === "Ongoing" && !comp.isOngoing) return false;

      // Filter search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        comp.name.toLowerCase().includes(q) ||
        comp.address.toLowerCase().includes(q) ||
        comp.startDate.toLowerCase().includes(q) ||
        comp.endDate.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, activeFilter]);

  return (
    <SubPageLayout
      title="Memorandum of Understanding"
      subtitle="Industry Collaborations, Corporate Partnerships, and Institutional Growth"
      category="t-and-p"
      activeItemLabel="MOUs"
    >
      <div className="max-w-7xl mx-auto space-y-8 py-2">
        {/* TOP SECTION: MEMORANDUM OF UNDERSTANDING OVERVIEW CARD */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* COLUMN 1: TITLE & INTRO */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="font-serif font-bold text-[#0F1E36] text-2xl sm:text-3xl leading-tight">
                Memorandum of Understanding
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A Memorandum of Understanding (MoU) is a formal agreement between two or more parties. Companies and organizations can use MoUs to establish official partnerships.
              </p>
            </div>

            {/* COLUMN 2: PURPOSE */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-8 space-y-3">
              <h3 className="font-sans font-bold text-slate-900 text-xs tracking-wider uppercase">
                PURPOSE
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The MoU is intended to recognize the general basis for a cooperative and a collaborative working relationship between the two parties. The purpose of MoU is to have mutual intentions to jointly work on projects required for industries and research needs, with learned faculty of good industrial experience and promising students, jointly agree to exchange their expertise for mutual benefit and growth, on the areas specified below:
              </p>
            </div>

            {/* COLUMN 3: LIST OF SPECIFIED AREAS WITH ICONS */}
            <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-8 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                <Building2 size={16} className="text-blue-600 shrink-0" />
                <span>Industrial Visits</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                <Users size={16} className="text-blue-600 shrink-0" />
                <span>Guest Lectures</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                <Briefcase size={16} className="text-blue-600 shrink-0" />
                <span>Projects</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                <FlaskConical size={16} className="text-blue-600 shrink-0" />
                <span>Research & Development</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                <Wrench size={16} className="text-blue-600 shrink-0" />
                <span>Problem Solving</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                <FileSpreadsheet size={16} className="text-blue-600 shrink-0" />
                <span>Studies & Survey</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                <GraduationCap size={16} className="text-blue-600 shrink-0" />
                <span>Placements</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                <Calendar size={16} className="text-blue-600 shrink-0" />
                <span>Internships</span>
              </div>
            </div>
          </div>
        </div>

        {/* LIST OF COMPANIES TOOLBAR */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="font-sans font-bold text-slate-900 text-base sm:text-lg tracking-wider uppercase flex items-center gap-2">
              LIST OF COMPANIES
            </h2>

            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-3.5 pr-9 py-2 bg-white rounded-xl border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-2xs"
                />
                <Search
                  size={15}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>

              {/* Filter Button */}
              <button
                type="button"
                onClick={() =>
                  setActiveFilter((prev) =>
                    prev === "All" ? "Ongoing" : "All"
                  )
                }
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs ${
                  activeFilter !== "All"
                    ? "bg-[#0F2D5E] text-white border-[#0F2D5E]"
                    : "bg-white text-slate-700 border-slate-200/90 hover:bg-slate-50"
                }`}
              >
                <Filter size={14} />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* 3-COLUMN COMPANY CARDS GRID WITH PROFESSIONAL HOVER EFFECTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-xl hover:-translate-y-1 hover:border-blue-300/90 transition-all duration-300 flex flex-col justify-between space-y-4 group relative overflow-hidden"
              >
                {/* Accent top border highlight on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Details Section */}
                <div className="flex items-start gap-4">
                  {/* Company Logo Box */}
                  <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                    {company.customLogo}
                  </div>

                  {/* Name and Address */}
                  <div className="space-y-1 min-w-0 flex-1">
                    <h3 className="font-sans font-bold text-[#0F1E36] text-sm sm:text-base leading-snug group-hover:text-[#1D4ED8] transition-colors line-clamp-2">
                      {company.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {company.address}
                    </p>
                  </div>
                </div>

                {/* Bottom Dates Row */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <span>{company.startDate}</span>
                  </div>

                  <span className="text-slate-400 text-[11px] font-normal px-2">to</span>

                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <span className={company.isOngoing ? "text-amber-600 font-semibold" : ""}>
                      {company.endDate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-12 text-center">
              <p className="text-slate-500 font-medium text-sm">
                No MoUs found matching "{searchQuery}".
              </p>
            </div>
          )}
        </div>

        {/* STATS BAR */}
        <div className="bg-blue-50/40 border border-blue-100/90 rounded-2xl p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center shadow-2xs">
          {/* Stat 1 */}
          <div className="flex items-center gap-3.5 px-2">
            <div className="w-12 h-12 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-[#1D4ED8] shadow-2xs shrink-0">
              <Handshake size={24} />
            </div>
            <div>
              <div className="font-sans font-extrabold text-[#0F1E36] text-2xl leading-none">
                35+
              </div>
              <div className="text-slate-600 text-xs font-medium mt-1">
                Active MoUs
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3.5 px-2">
            <div className="w-12 h-12 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-[#1D4ED8] shadow-2xs shrink-0">
              <Building2 size={24} />
            </div>
            <div>
              <div className="font-sans font-extrabold text-[#0F1E36] text-2xl leading-none">
                25+
              </div>
              <div className="text-slate-600 text-xs font-medium mt-1">
                Companies
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3.5 px-2">
            <div className="w-12 h-12 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-[#1D4ED8] shadow-2xs shrink-0">
              <Users size={24} />
            </div>
            <div>
              <div className="font-sans font-extrabold text-[#0F1E36] text-2xl leading-none">
                8+
              </div>
              <div className="text-slate-600 text-xs font-medium mt-1">
                Collaboration Areas
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3.5 px-2">
            <div className="w-12 h-12 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-[#1D4ED8] shadow-2xs shrink-0">
              <Calendar size={24} />
            </div>
            <div>
              <div className="font-sans font-extrabold text-[#0F1E36] text-2xl leading-none">
                Ongoing
              </div>
              <div className="text-slate-600 text-xs font-medium mt-1">
                Partnerships
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURE BANNER ("Together We Grow") */}
        <div className="bg-[#0A1A36] rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-md hover:shadow-xl transition-all duration-300 group">
          {/* Background Decorative Pattern */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Left Side: Icon & Copy */}
          <div className="flex items-center gap-5 z-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Building2 size={28} />
            </div>

            <div className="space-y-1">
              <h3 className="font-sans font-bold text-white text-xl sm:text-2xl tracking-tight">
                Together We Grow
              </h3>
              <p className="text-blue-200/90 text-xs sm:text-sm leading-relaxed max-w-xl">
                Building strong collaborations with leading organizations to promote innovation, research and student development.
              </p>
            </div>
          </div>

          {/* Right Side: Handshake Graphic Vector */}
          <div className="shrink-0 z-10 flex items-center justify-center">
            <div className="relative p-3 rounded-2xl bg-blue-900/40 border border-blue-700/40 backdrop-blur-xs group-hover:border-blue-500/60 transition-colors">
              <Handshake size={48} className="text-blue-300 group-hover:text-amber-400 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
