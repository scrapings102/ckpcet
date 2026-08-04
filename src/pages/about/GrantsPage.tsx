import React, { useState, useMemo } from "react";
import SubPageLayout from "../../components/SubPageLayout";
import {
  FlaskConical,
  Presentation,
  Rocket,
  LayoutGrid,
  Search,
  Filter,
  Award,
  FileText,
  Landmark,
  IndianRupee,
  User,
  BookOpen,
  TrendingUp,
  Handshake,
  Users,
  FileCheck,
  ShieldCheck,
  GraduationCap,
  Plane,
  Coins,
  Info
} from "lucide-react";

interface GrantItem {
  id: string;
  code: string;
  badgeBg: string;
  badgeText: string;
  borderAccent: string;
  projectTitle: string;
  sponsoringAgency: string;
  sanctionedFund: string;
  fundNumber: number;
  fundIconBg: string;
  fundIconText: string;
  department: string;
  facultyCoordinator: string;
  category: "Research Grants" | "STTP" | "SSIP" | "Other";
}

const ALL_GRANTS_DATA: GrantItem[] = [
  // Research Grants
  {
    id: "grant-1",
    code: "01",
    badgeBg: "bg-blue-50 text-blue-600",
    badgeText: "text-blue-600",
    borderAccent: "border-l-4 border-blue-500",
    projectTitle: "Sustainable urban water management for metro polis: A case study of Surat city",
    sponsoringAgency: "Institution of Engineers (India)",
    sanctionedFund: "Rs. 1,00,000/-",
    fundNumber: 100000,
    fundIconBg: "bg-blue-100/80 text-blue-700",
    fundIconText: "text-blue-700",
    department: "Civil Engineering",
    facultyCoordinator: "Dr. Reena Popawala",
    category: "Research Grants"
  },
  {
    id: "grant-2",
    code: "02",
    badgeBg: "bg-emerald-50 text-emerald-600",
    badgeText: "text-emerald-600",
    borderAccent: "border-l-4 border-emerald-500",
    projectTitle: "Development of Annular Combustion Chamber for Micro Gas Turbines",
    sponsoringAgency: "GUJCOST",
    sanctionedFund: "Rs. 20,000/-",
    fundNumber: 20000,
    fundIconBg: "bg-emerald-100/80 text-emerald-700",
    fundIconText: "text-emerald-700",
    department: "Mechanical Engineering",
    facultyCoordinator: "Dr. Digvijay Kulshrestha",
    category: "Research Grants"
  },
  {
    id: "grant-3",
    code: "03",
    badgeBg: "bg-purple-50 text-purple-600",
    badgeText: "text-purple-600",
    borderAccent: "border-l-4 border-purple-500",
    projectTitle: "Flame Stabilization and flow visualization Studies for Hydrogen Combustion",
    sponsoringAgency: "GUJCOST",
    sanctionedFund: "Rs. 8,50,000/-",
    fundNumber: 850000,
    fundIconBg: "bg-purple-100/80 text-purple-700",
    fundIconText: "text-purple-700",
    department: "Mechanical Engineering",
    facultyCoordinator: "Dr. S. A. Channiwala (SVNIT, Surat), Dr. Digvijay Kulshrestha",
    category: "Research Grants"
  },
  {
    id: "grant-4",
    code: "04",
    badgeBg: "bg-orange-50 text-orange-600",
    badgeText: "text-orange-600",
    borderAccent: "border-l-4 border-orange-500",
    projectTitle: "Combustor for Small Turbofan engine",
    sponsoringAgency: "DRDO",
    sanctionedFund: "Rs. 1,74,22,000/-",
    fundNumber: 17422000,
    fundIconBg: "bg-orange-100/80 text-orange-700",
    fundIconText: "text-orange-700",
    department: "Mechanical Engineering",
    facultyCoordinator: "Dr. S. A. Channiwala (SVNIT, Surat), Dr. Digvijay Kulshrestha",
    category: "Research Grants"
  },
  {
    id: "grant-5",
    code: "05",
    badgeBg: "bg-blue-50 text-blue-600",
    badgeText: "text-blue-600",
    borderAccent: "border-l-4 border-blue-500",
    projectTitle: "Theoretical and experimental investigations on heat transfer through insulation material in cryogenic temperature range (300K to 77K)",
    sponsoringAgency: "DST",
    sanctionedFund: "Rs. 25,51,000/-",
    fundNumber: 2551000,
    fundIconBg: "bg-blue-100/80 text-blue-700",
    fundIconText: "text-blue-700",
    department: "Mechanical Engineering",
    facultyCoordinator: "Dr. Sonal Desai",
    category: "Research Grants"
  },
  {
    id: "grant-6",
    code: "06",
    badgeBg: "bg-emerald-50 text-emerald-600",
    badgeText: "text-emerald-600",
    borderAccent: "border-l-4 border-emerald-500",
    projectTitle: "Automatic helmet detection of motorcyclist without helmet",
    sponsoringAgency: "NVIDIA, USA",
    sanctionedFund: "Rs. 1,25,000/-",
    fundNumber: 125000,
    fundIconBg: "bg-emerald-100/80 text-emerald-700",
    fundIconText: "text-emerald-700",
    department: "Electronics and Communication Engineering",
    facultyCoordinator: "Dr. Mita Paunwala",
    category: "Research Grants"
  },
  {
    id: "grant-7",
    code: "07",
    badgeBg: "bg-purple-50 text-purple-600",
    badgeText: "text-purple-600",
    borderAccent: "border-l-4 border-purple-500",
    projectTitle: "Securing Manifold Biometrics for Cyber Security Augmentation",
    sponsoringAgency: "GUJCOST",
    sanctionedFund: "Rs. 2,00,500/-",
    fundNumber: 200500,
    fundIconBg: "bg-purple-100/80 text-purple-700",
    fundIconText: "text-purple-700",
    department: "Electronics and Communication Engineering",
    facultyCoordinator: "Dr. Mita Paunwala",
    category: "Research Grants"
  },

  // STTP (Short Term Training Programs / FDP / Conference / Seminar / Symposium)
  {
    id: "sttp-1",
    code: "01",
    badgeBg: "bg-blue-50 text-blue-600",
    badgeText: "text-blue-600",
    borderAccent: "border-l-4 border-blue-500",
    projectTitle: "STTP on Research methodology and soft computing techniques for civil engineering",
    sponsoringAgency: "GUJCOST",
    sanctionedFund: "Rs. 50000/-",
    fundNumber: 50000,
    fundIconBg: "bg-blue-100/80 text-blue-700",
    fundIconText: "text-blue-700",
    department: "Civil Engineering",
    facultyCoordinator: "Dr. Reena Popawala & Dr. Tandra Banerjee",
    category: "STTP"
  },
  {
    id: "sttp-2",
    code: "02",
    badgeBg: "bg-emerald-50 text-emerald-600",
    badgeText: "text-emerald-600",
    borderAccent: "border-l-4 border-emerald-500",
    projectTitle: 'Seminar on "Technology and Innovations- Housing for all"',
    sponsoringAgency: "Ministry of Housing & Urban affairs",
    sanctionedFund: "Rs. 35000/-",
    fundNumber: 35000,
    fundIconBg: "bg-emerald-100/80 text-emerald-700",
    fundIconText: "text-emerald-700",
    department: "Civil Engineering",
    facultyCoordinator: "Dr. Reena Popawala",
    category: "STTP"
  },
  {
    id: "sttp-3",
    code: "03",
    badgeBg: "bg-purple-50 text-purple-600",
    badgeText: "text-purple-600",
    borderAccent: "border-l-4 border-purple-500",
    projectTitle: 'STTP on "Pedagogy and Research Methodology"',
    sponsoringAgency: "DST-GUJCOST, Government of GUJARAT",
    sanctionedFund: "Rs. 20,000/-",
    fundNumber: 20000,
    fundIconBg: "bg-purple-100/80 text-purple-700",
    fundIconText: "text-purple-700",
    department: "Applied Science and Humanities Department",
    facultyCoordinator: "Dr. Pratik V. Shah, Prof. Chandni Tiwari",
    category: "STTP"
  },
  {
    id: "sttp-4",
    code: "04",
    badgeBg: "bg-orange-50 text-orange-600",
    badgeText: "text-orange-600",
    borderAccent: "border-l-4 border-orange-500",
    projectTitle: "STTP on Alternative Energy Sources: Hydraulic Machines",
    sponsoringAgency: "DST-GUJCOST, Government of GUJARAT",
    sanctionedFund: "Rs. 20,000/-",
    fundNumber: 20000,
    fundIconBg: "bg-orange-100/80 text-orange-700",
    fundIconText: "text-orange-700",
    department: "Mechanical Engineering Department",
    facultyCoordinator: "Dr. Gaurang Chaudhari, Dr. Samip Shah, Dr. Digvijay Kulshrestha",
    category: "STTP"
  },
  {
    id: "sttp-5",
    code: "05",
    badgeBg: "bg-blue-50 text-blue-600",
    badgeText: "text-blue-600",
    borderAccent: "border-l-4 border-blue-500",
    projectTitle: "1st National Conference on Thermal Fluid and Manufacturing Science",
    sponsoringAgency: "GUJCOST",
    sanctionedFund: "75000/-",
    fundNumber: 75000,
    fundIconBg: "bg-blue-100/80 text-blue-700",
    fundIconText: "text-blue-700",
    department: "Mechanical Engineering Department",
    facultyCoordinator: "Dr. Digvijay Kulshrestha, Dr. A. H. Gandhi",
    category: "STTP"
  },
  {
    id: "sttp-6",
    code: "06",
    badgeBg: "bg-emerald-50 text-emerald-600",
    badgeText: "text-emerald-600",
    borderAccent: "border-l-4 border-emerald-500",
    projectTitle: "1st National Conference on Thermal Fluid and Manufacturing Science",
    sponsoringAgency: "CSIR",
    sanctionedFund: "40000/-",
    fundNumber: 40000,
    fundIconBg: "bg-emerald-100/80 text-emerald-700",
    fundIconText: "text-emerald-700",
    department: "Mechanical Engineering Department",
    facultyCoordinator: "Dr. Digvijay Kulshrestha, Dr. A. H. Gandhi",
    category: "STTP"
  },
  {
    id: "sttp-7",
    code: "07",
    badgeBg: "bg-purple-50 text-purple-600",
    badgeText: "text-purple-600",
    borderAccent: "border-l-4 border-purple-500",
    projectTitle: "2nd National Conference on Thermal Fluid and Manufacturing Science",
    sponsoringAgency: "GUJCOST",
    sanctionedFund: "50000/-",
    fundNumber: 50000,
    fundIconBg: "bg-purple-100/80 text-purple-700",
    fundIconText: "text-purple-700",
    department: "Mechanical Engineering Department",
    facultyCoordinator: "Dr. Digvijay Kulshrestha, Prof. S. P. Shah, Prof. K. D. Maniya",
    category: "STTP"
  },
  {
    id: "sttp-8",
    code: "08",
    badgeBg: "bg-orange-50 text-orange-600",
    badgeText: "text-orange-600",
    borderAccent: "border-l-4 border-orange-500",
    projectTitle: "LMS Enabled Teaching and Learning",
    sponsoringAgency: "DST-GUJCOST, Government of GUJARAT",
    sanctionedFund: "25000/-",
    fundNumber: 25000,
    fundIconBg: "bg-orange-100/80 text-orange-700",
    fundIconText: "text-orange-700",
    department: "Electronics and Communication Engineering Department",
    facultyCoordinator: "Dr. Mita C Paunwala, Dr. Amisha J Shah",
    category: "STTP"
  },
  {
    id: "sttp-9",
    code: "09",
    badgeBg: "bg-blue-50 text-blue-600",
    badgeText: "text-blue-600",
    borderAccent: "border-l-4 border-blue-500",
    projectTitle: 'two days symposium on "Signal Processing in Nano Electronics and Bioscience"',
    sponsoringAgency: "IEEE Signal Processing Society,USA",
    sanctionedFund: "1000USD",
    fundNumber: 80000,
    fundIconBg: "bg-blue-100/80 text-blue-700",
    fundIconText: "text-blue-700",
    department: "Electronics and Communication Engineering Department",
    facultyCoordinator: "Dr. Mita C Paunwala",
    category: "STTP"
  },

  // SSIP (Student Start-up & Innovation Policy)
  {
    id: "ssip-1",
    code: "01",
    badgeBg: "bg-blue-50 text-blue-600",
    badgeText: "text-blue-600",
    borderAccent: "border-l-4 border-blue-500",
    projectTitle: "Automatic rising bollard",
    sponsoringAgency: "SSIP, Gujarat",
    sanctionedFund: "Rs. 17,000/-",
    fundNumber: 17000,
    fundIconBg: "bg-blue-100/80 text-blue-700",
    fundIconText: "text-blue-700",
    department: "Civil Engineering",
    facultyCoordinator: "Dr. Soumita Bid",
    category: "SSIP"
  },
  {
    id: "ssip-2",
    code: "02",
    badgeBg: "bg-emerald-50 text-emerald-600",
    badgeText: "text-emerald-600",
    borderAccent: "border-l-4 border-emerald-500",
    projectTitle: "Public address system",
    sponsoringAgency: "SSIP, Gujarat",
    sanctionedFund: "Rs. 10,000/-",
    fundNumber: 10000,
    fundIconBg: "bg-emerald-100/80 text-emerald-700",
    fundIconText: "text-emerald-700",
    department: "Computer Engineering",
    facultyCoordinator: "Dr. Ami Choksi",
    category: "SSIP"
  },
  {
    id: "ssip-3",
    code: "03",
    badgeBg: "bg-purple-50 text-purple-600",
    badgeText: "text-purple-600",
    borderAccent: "border-l-4 border-purple-500",
    projectTitle: "Jivadori",
    sponsoringAgency: "SSIP, Gujarat",
    sanctionedFund: "Rs. 10,000/-",
    fundNumber: 10000,
    fundIconBg: "bg-purple-100/80 text-purple-700",
    fundIconText: "text-purple-700",
    department: "Computer Engineering",
    facultyCoordinator: "Prof. Yogesh Kapuriya",
    category: "SSIP"
  },
  {
    id: "ssip-4",
    code: "04",
    badgeBg: "bg-orange-50 text-orange-600",
    badgeText: "text-orange-600",
    borderAccent: "border-l-4 border-orange-500",
    projectTitle: "Miniature gas turbine engine",
    sponsoringAgency: "SSIP, Gujarat",
    sanctionedFund: "Rs. 104450/-",
    fundNumber: 104450,
    fundIconBg: "bg-orange-100/80 text-orange-700",
    fundIconText: "text-orange-700",
    department: "Mechanical Engineering",
    facultyCoordinator: "Dr. Digvijay B. Kulshreshtha",
    category: "SSIP"
  },
  {
    id: "ssip-5",
    code: "05",
    badgeBg: "bg-blue-50 text-blue-600",
    badgeText: "text-blue-600",
    borderAccent: "border-l-4 border-blue-500",
    projectTitle: "Development of Wind Turbine (Small Scale)",
    sponsoringAgency: "SSIP, Gujarat",
    sanctionedFund: "Rs. 70000/-",
    fundNumber: 70000,
    fundIconBg: "bg-blue-100/80 text-blue-700",
    fundIconText: "text-blue-700",
    department: "Mechanical Engineering",
    facultyCoordinator: "Dr. Samip P. Shah",
    category: "SSIP"
  },
  {
    id: "ssip-6",
    code: "06",
    badgeBg: "bg-emerald-50 text-emerald-600",
    badgeText: "text-emerald-600",
    borderAccent: "border-l-4 border-emerald-500",
    projectTitle: "Electro-magnetic suspension",
    sponsoringAgency: "SSIP, Gujarat",
    sanctionedFund: "Rs. 90000/-",
    fundNumber: 90000,
    fundIconBg: "bg-emerald-100/80 text-emerald-700",
    fundIconText: "text-emerald-700",
    department: "Mechanical Engineering",
    facultyCoordinator: "Dr. Chaitanya K. Desai",
    category: "SSIP"
  },

  // Other Grants
  {
    id: "other-1",
    code: "01",
    badgeBg: "bg-rose-50 text-rose-600",
    badgeText: "text-rose-600",
    borderAccent: "border-l-4 border-rose-500",
    projectTitle: "MODROB Grant for Modernization of Advanced Robotics Laboratory",
    sponsoringAgency: "AICTE",
    sanctionedFund: "Rs. 12,00,000/-",
    fundNumber: 1200000,
    fundIconBg: "bg-rose-100/80 text-rose-700",
    fundIconText: "text-rose-700",
    department: "Mechanical Engineering",
    facultyCoordinator: "Dr. Chaitanya Desai",
    category: "Other"
  }
];

export default function GrantsPage() {
  const [activeTab, setActiveTab] = useState<"Research Grants" | "STTP" | "SSIP" | "Other">("Research Grants");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"default" | "high-to-low" | "low-to-high">("default");

  // Filtered list based on active tab and search query
  const filteredGrants = useMemo(() => {
    let result = ALL_GRANTS_DATA.filter((g) => g.category === activeTab);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (g) =>
          g.projectTitle.toLowerCase().includes(q) ||
          g.sponsoringAgency.toLowerCase().includes(q) ||
          g.department.toLowerCase().includes(q) ||
          g.facultyCoordinator.toLowerCase().includes(q) ||
          g.sanctionedFund.toLowerCase().includes(q)
      );
    }

    if (sortOrder === "high-to-low") {
      result = [...result].sort((a, b) => b.fundNumber - a.fundNumber);
    } else if (sortOrder === "low-to-high") {
      result = [...result].sort((a, b) => a.fundNumber - b.fundNumber);
    }

    return result;
  }, [activeTab, searchQuery, sortOrder]);

  // Aggregate stats for current category or overall Research Grants
  const currentCategoryGrants = useMemo(() => {
    return ALL_GRANTS_DATA.filter((g) => g.category === activeTab);
  }, [activeTab]);

  const uniqueAgenciesCount = useMemo(() => {
    if (activeTab === "STTP") return 8;
    if (activeTab === "SSIP") return 1;
    const agencies = new Set(currentCategoryGrants.map((g) => g.sponsoringAgency));
    return agencies.size;
  }, [activeTab, currentCategoryGrants]);

  const totalSanctionedAmountFormatted = useMemo(() => {
    if (activeTab === "Research Grants") {
      return "Rs. 2,12,67,000/-";
    }
    if (activeTab === "STTP") {
      return "Rs. 5,25,000/-";
    }
    if (activeTab === "SSIP") {
      return "Rs. 4,71,450/-";
    }
    const total = currentCategoryGrants.reduce((acc, curr) => acc + curr.fundNumber, 0);
    return `Rs. ${total.toLocaleString('en-IN')}/-`;
  }, [activeTab, currentCategoryGrants]);

  const uniqueCoordinatorsCount = useMemo(() => {
    if (activeTab === "STTP") return 13;
    if (activeTab === "SSIP") return 6;
    return currentCategoryGrants.length;
  }, [activeTab, currentCategoryGrants]);

  const cardTitle = useMemo(() => {
    if (activeTab === "Research Grants") return "Research Grants Received";
    if (activeTab === "STTP") return "STTP / FDP / Conference / Seminar / Symposium Grants Received";
    if (activeTab === "SSIP") return "SSIP Grants Received";
    return "Other Grants Received";
  }, [activeTab]);

  const cardDescription = useMemo(() => {
    if (activeTab === "STTP") {
      return "Empowering educators and researchers through funded academic programs and initiatives.";
    }
    if (activeTab === "SSIP") {
      return "Encouraging student innovations and startups through SSIP funding support.";
    }
    return "Empowering innovation and research through funded projects and collaborations.";
  }, [activeTab]);

  return (
    <SubPageLayout
      title="Grant Received"
      subtitle="Sponsored Research Projects, STTPs, SSIP Innovations, and Institutional Funding"
      category="about"
      activeItemLabel="Grants"
    >
      <div className="max-w-7xl mx-auto space-y-6 py-2">
        {/* TOP CATEGORY TABS & SEARCH BAR ROW */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* TOP NAVIGATION TABS */}
          <div className="flex items-center gap-1 sm:gap-2 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/90 overflow-x-auto shadow-2xs no-scrollbar max-w-full">
            {/* Tab 1: Research Grants */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("Research Grants");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === "Research Grants"
                  ? "bg-[#0A1E40] text-white shadow-md"
                  : "bg-transparent text-slate-700 hover:bg-white/70 hover:text-slate-900"
              }`}
            >
              <FlaskConical size={18} className={activeTab === "Research Grants" ? "text-amber-400" : "text-slate-500"} />
              <span>Research Grants</span>
            </button>

            {/* Tab 2: STTP */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("STTP");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === "STTP"
                  ? "bg-[#0A1E40] text-white shadow-md"
                  : "bg-transparent text-slate-700 hover:bg-white/70 hover:text-slate-900"
              }`}
            >
              <Presentation size={18} className={activeTab === "STTP" ? "text-amber-400" : "text-slate-500"} />
              <span>STTP</span>
            </button>

            {/* Tab 3: SSIP */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("SSIP");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === "SSIP"
                  ? "bg-[#0A1E40] text-white shadow-md"
                  : "bg-transparent text-slate-700 hover:bg-white/70 hover:text-slate-900"
              }`}
            >
              <Rocket size={18} className={activeTab === "SSIP" ? "text-amber-400" : "text-slate-500"} />
              <span>SSIP</span>
            </button>

            {/* Tab 4: Other */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("Other");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === "Other"
                  ? "bg-[#0A1E40] text-white shadow-md"
                  : "bg-transparent text-slate-700 hover:bg-white/70 hover:text-slate-900"
              }`}
            >
              <LayoutGrid size={18} className={activeTab === "Other" ? "text-amber-400" : "text-slate-500"} />
              <span>Other</span>
            </button>
          </div>

          {/* RIGHT SEARCH & FILTER CONTROLS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search project, agency, faculty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3.5 pr-9 py-2.5 bg-white rounded-2xl border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-2xs"
              />
              <Search
                size={16}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>

            {/* Filter Order Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as any)}
                className="w-full sm:w-auto appearance-none bg-white border border-slate-200/90 rounded-2xl px-4 py-2.5 pr-9 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs hover:border-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="default">Filter</option>
                <option value="high-to-low">Highest Amount First</option>
                <option value="low-to-high">Lowest Amount First</option>
              </select>
              <Filter
                size={14}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* CONDITIONAL MAIN LAYOUT: OTHER TAB VS REGULAR TABS */}
        {activeTab === "Other" ? (
          <div className="space-y-6 pt-2">
            {/* HERO BANNER CARD FOR OTHER GRANTS */}
            <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 z-10 w-full md:w-auto">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-100/90 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-1 min-w-0">
                  <h3 className="font-sans font-extrabold text-[#0A1E40] text-lg sm:text-2xl leading-tight break-words">
                    Other Grants / Support Received
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                    Additional grants, support, and recognitions received by the institute, faculty and students.
                  </p>
                </div>
              </div>

              {/* Right Decorative Graphic Clipboard */}
              <div className="hidden md:flex items-center justify-center shrink-0 pr-4 z-10">
                <div className="relative w-44 h-28 bg-blue-100/70 rounded-2xl border border-blue-200 p-3 flex items-center justify-center shadow-inner">
                  <div className="w-28 h-20 bg-white rounded-xl border border-blue-200/80 shadow-xs p-2.5 space-y-2 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-blue-600">
                      <FileCheck size={14} />
                      <div className="h-1.5 w-14 bg-blue-200 rounded-full" />
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600">
                      <FileCheck size={14} />
                      <div className="h-1.5 w-10 bg-emerald-200 rounded-full" />
                    </div>
                    <div className="flex items-center gap-2 text-amber-600">
                      <FileCheck size={14} />
                      <div className="h-1.5 w-12 bg-amber-200 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 OTHER GRANTS ITEM CARDS WITH HOVER EFFECT */}
            <div className="space-y-4">
              {/* Card 01 */}
              <div className="bg-white rounded-2xl border border-slate-200/90 border-l-4 border-l-emerald-500 p-4 sm:p-6 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-300 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer">
                <div className="flex items-start gap-3.5 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-100/80 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-105 transition-transform mt-0.5 sm:mt-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="font-sans font-semibold text-slate-800 text-xs sm:text-sm leading-relaxed max-w-3xl">
                    Unnat bharat Abhiyaan institute has adopted five villages and received Rs. 50,000/- for village survey.
                  </p>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-100/90 border border-emerald-200/90 flex items-center justify-center font-extrabold text-emerald-800 text-xs sm:text-sm shrink-0 group-hover:scale-110 transition-transform self-end sm:self-center">
                  01
                </div>
              </div>

              {/* Card 02 */}
              <div className="bg-white rounded-2xl border border-slate-200/90 border-l-4 border-l-amber-500 p-4 sm:p-6 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-300 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer">
                <div className="flex items-start gap-3.5 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 group-hover:scale-105 transition-transform mt-0.5 sm:mt-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="font-sans font-semibold text-slate-800 text-xs sm:text-sm leading-relaxed max-w-3xl">
                    Vishwakarma Projects students are getting stipend.
                  </p>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-100/90 border border-amber-200/90 flex items-center justify-center font-extrabold text-amber-800 text-xs sm:text-sm shrink-0 group-hover:scale-110 transition-transform self-end sm:self-center">
                  02
                </div>
              </div>

              {/* Card 03 */}
              <div className="bg-white rounded-2xl border border-slate-200/90 border-l-4 border-l-blue-500 p-4 sm:p-6 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-300 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer">
                <div className="flex items-start gap-3.5 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-100/80 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 transition-transform mt-0.5 sm:mt-0">
                    <Plane className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="font-sans font-semibold text-slate-800 text-xs sm:text-sm leading-relaxed max-w-3xl">
                    Dr. Mita Paunwala received a travel grant by IEEE SPS NY of 1000USD to attend the Luncheon during ICASSP 2019.
                  </p>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100/90 border border-blue-200/90 flex items-center justify-center font-extrabold text-blue-800 text-xs sm:text-sm shrink-0 group-hover:scale-110 transition-transform self-end sm:self-center">
                  03
                </div>
              </div>
            </div>

            {/* 4 STATS ROW BAR */}
            <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-3.5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 shadow-2xs">
              {/* Stat 1 */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 flex items-center gap-3.5 sm:gap-4 shadow-2xs">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Coins className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-sans font-extrabold text-blue-900 text-2xl sm:text-3xl leading-none">
                    3
                  </div>
                  <div className="text-slate-600 text-xs font-semibold leading-tight mt-1.5 break-words">
                    Total Grants / Supports
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 flex items-center gap-3.5 sm:gap-4 shadow-2xs ml-[9px] sm:ml-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Landmark className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-sans font-extrabold text-emerald-900 text-2xl sm:text-3xl leading-none">
                    2
                  </div>
                  <div className="text-slate-600 text-[10px] sm:text-xs font-semibold leading-tight mt-1.5 break-words">
                    Institutions Benefited
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 flex items-center gap-3.5 sm:gap-4 shadow-2xs">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-sans font-extrabold text-orange-900 text-2xl sm:text-3xl leading-none">
                    1
                  </div>
                  <div className="text-slate-600 text-[10px] sm:text-xs font-semibold leading-tight mt-1.5 break-words">
                    Faculty Benefited
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 flex items-center gap-3.5 sm:gap-4 shadow-2xs ml-[9px] sm:ml-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-sans font-extrabold text-indigo-900 text-2xl sm:text-3xl leading-none">
                    1
                  </div>
                  <div className="text-slate-600 text-[9px] sm:text-xs font-semibold leading-tight mt-1.5 break-words">
                    Student Benefited
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM INFO NOTICE BANNER */}
            <div className="bg-[#F8FAFC] border border-blue-100/90 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 relative overflow-hidden shadow-2xs">
              <div className="flex items-start sm:items-center gap-3.5 z-10">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs mt-0.5 sm:mt-0">
                  <Info size={18} />
                </div>
                <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                  These grants and supports strengthen our commitment towards community development, student empowerment and academic excellence.
                </p>
              </div>
              <Landmark size={48} className="text-blue-200/50 shrink-0 hidden md:block pointer-events-none" />
            </div>
          </div>
        ) : (
          /* MAIN LAYOUT: LEFT STATS SIDEBAR + RIGHT GRANTS TABLE FOR RESEARCH, STTP & SSIP */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT SIDEBAR PANEL */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-4">
              {/* TOP HEADER CARD (DARK NAVY) */}
              <div className="bg-[#0A1E40] rounded-3xl p-5 sm:p-6 text-white shadow-md relative overflow-hidden space-y-3 sm:space-y-4 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <Award size={24} />
                </div>

                <div className="space-y-1.5 min-w-0">
                  <h3 className="font-serif font-bold text-white text-base sm:text-lg lg:text-xl leading-snug break-words">
                    {cardTitle}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed break-words">
                    {cardDescription}
                  </p>
                </div>
              </div>

              {/* STATS ITEMS GRID (RESPONSIVE: 2x2 ON MOBILE/TABLET, VERTICAL ON DESKTOP) */}
              <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {/* Stat 1: Total Projects */}
                <div className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50/80 transition-colors">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <FileText size={18} />
                  </div>
                  <div>
                    <div className="font-sans font-extrabold text-slate-900 text-base sm:text-lg leading-tight">
                      {String(currentCategoryGrants.length).padStart(2, "0")}
                    </div>
                    <div className="text-slate-500 text-[11px] sm:text-xs font-medium">
                      Total Projects
                    </div>
                  </div>
                </div>

                {/* Stat 2: Sponsoring Agencies */}
                <div className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50/80 transition-colors">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Landmark size={18} />
                  </div>
                  <div>
                    <div className="font-sans font-extrabold text-emerald-700 text-base sm:text-lg leading-tight">
                      {String(uniqueAgenciesCount).padStart(2, "0")}
                    </div>
                    <div className="text-slate-500 text-[11px] sm:text-xs font-medium">
                      Agencies
                    </div>
                  </div>
                </div>

                {/* Stat 3: Total Sanctioned Fund */}
                <div className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50/80 transition-colors">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                    <IndianRupee size={18} />
                  </div>
                  <div>
                    <div className="font-sans font-extrabold text-purple-700 text-sm sm:text-base leading-tight truncate max-w-[120px] sm:max-w-none">
                      {totalSanctionedAmountFormatted}
                    </div>
                    <div className="text-slate-500 text-[11px] sm:text-xs font-medium">
                      Total Sanctioned
                    </div>
                  </div>
                </div>

                {/* Stat 4: Faculty Coordinators */}
                <div className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50/80 transition-colors">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <User size={18} />
                  </div>
                  <div>
                    <div className="font-sans font-extrabold text-orange-600 text-base sm:text-lg leading-tight">
                      {String(uniqueCoordinatorsCount).padStart(2, "0")}
                    </div>
                    <div className="text-slate-500 text-[11px] sm:text-xs font-medium">
                      Coordinators
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT MAIN CONTENT PANEL (TABLE / CARDS LIST) */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-3.5">
              {/* COLUMN HEADERS ROW (DESKTOP) */}
              <div className="hidden md:grid md:grid-cols-12 gap-3 md:gap-4 px-4 sm:px-5 py-3 bg-slate-100/80 border border-slate-200/80 border-l-4 border-l-transparent rounded-2xl text-xs font-bold text-slate-700 items-center">
                <div className="md:col-span-4">
                  <span className="inline-block pl-[7px]">Project Details</span>
                </div>
                <div className="md:col-span-2">
                  <span>Sponsoring Agency</span>
                </div>
                <div className="md:col-span-2">
                  <span className="inline-block pl-[15px]">{activeTab === "SSIP" ? "Sanctioned Fund Details" : "Sanctioned Fund"}</span>
                </div>
                <div className="md:col-span-2">
                  <span className="inline-block pl-[33px]">Department</span>
                </div>
                <div className="md:col-span-2">
                  <span className="inline-block pl-[33px]">Faculty Coordinator</span>
                </div>
              </div>

              {/* GRANTS TABLE ROWS WITH PROFESSIONAL HOVER EFFECT */}
              <div className="space-y-3">
                {filteredGrants.length > 0 ? (
                  filteredGrants.map((grant) => (
                    <div
                      key={grant.id}
                      className={`bg-white rounded-2xl border border-slate-200/90 ${grant.borderAccent} p-4 sm:p-5 shadow-2xs hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-300 transition-all duration-200 group`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center">
                        {/* COLUMN 1: PROJECT DETAILS WITH NUMBER CODE BADGE */}
                        <div className="md:col-span-4 flex items-start gap-3">
                          <div
                            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${grant.badgeBg} group-hover:scale-105 transition-transform mt-0.5 md:mt-0`}
                          >
                            {grant.code}
                          </div>
                          <div className="space-y-1 flex-1">
                            <h4 className="font-sans font-bold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-blue-600 transition-colors">
                              {grant.projectTitle}
                            </h4>

                            {/* Mobile & Tablet structured details (< md) */}
                            <div className="md:hidden pt-2.5 space-y-2 text-xs text-slate-600 border-t border-slate-100 mt-2.5">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <div className="flex items-center gap-1.5 bg-slate-100/80 px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-700">
                                  <Landmark size={13} className="text-slate-500" />
                                  <span>{grant.sponsoringAgency}</span>
                                </div>
                                <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg text-xs font-bold text-emerald-800">
                                  <span>{grant.sanctionedFund}</span>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-[11px]">
                                <div className="flex items-center gap-1.5 text-slate-600">
                                  <BookOpen size={13} className="text-indigo-500 shrink-0" />
                                  <span className="truncate">{grant.department}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                                  <User size={13} className="text-amber-500 shrink-0" />
                                  <span className="truncate">{grant.facultyCoordinator}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* COLUMN 2: SPONSORING AGENCY (DESKTOP) */}
                        <div className="hidden md:block md:col-span-2 text-xs font-semibold text-slate-700 leading-snug">
                          {grant.sponsoringAgency}
                        </div>

                        {/* COLUMN 3: SANCTIONED FUND WITH RUPEE BADGE (DESKTOP) */}
                        <div className="hidden md:flex md:col-span-2 items-center gap-2">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${grant.fundIconBg} ${grant.fundIconText}`}
                          >
                            {grant.sanctionedFund.includes("USD") ? "$" : "₹"}
                          </div>
                          <span className="font-bold text-slate-900 text-xs sm:text-sm">
                            {grant.sanctionedFund}
                          </span>
                        </div>

                        {/* COLUMN 4: DEPARTMENT WITH BOOK ICON (DESKTOP) */}
                        <div className="hidden md:flex md:col-span-2 items-center gap-2 text-xs font-medium text-slate-700">
                          <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                            <BookOpen size={14} />
                          </div>
                          <span className="leading-snug">{grant.department}</span>
                        </div>

                        {/* COLUMN 5: FACULTY COORDINATOR WITH USER ICON (DESKTOP) */}
                        <div className="hidden md:flex md:col-span-2 items-center gap-2 text-xs font-medium text-slate-800">
                          <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                            <User size={14} />
                          </div>
                          <span className="font-semibold leading-snug whitespace-pre-line">{grant.facultyCoordinator}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-8 sm:p-12 text-center">
                    <p className="text-slate-500 font-medium text-xs sm:text-sm">
                      No grant projects found matching "{searchQuery}".
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM QUOTE & CORE PILLARS BANNER */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* LEFT QUOTE */}
            <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-6 lg:pb-0 lg:pr-6">
              <span className="text-4xl font-serif text-blue-600 font-extrabold leading-none">“</span>
              <p className="font-serif italic font-medium text-slate-800 text-base sm:text-lg leading-relaxed -mt-3">
                Research is the foundation of innovation and the key to a sustainable future.
              </p>
            </div>

            {/* RIGHT 5 PILLARS WITH HOVER EFFECT */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Pillar 1 */}
              <div className="flex flex-col items-center text-center space-y-2.5 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-2xs">
                  <TrendingUp size={22} />
                </div>
                <span className="font-sans font-bold text-slate-800 text-xs sm:text-xs leading-tight">
                  Research Excellence
                </span>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col items-center text-center space-y-2.5 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform shadow-2xs">
                  <Handshake size={22} />
                </div>
                <span className="font-sans font-bold text-slate-800 text-xs sm:text-xs leading-tight">
                  Industry Collaboration
                </span>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col items-center text-center space-y-2.5 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform shadow-2xs">
                  <Users size={22} />
                </div>
                <span className="font-sans font-bold text-slate-800 text-xs sm:text-xs leading-tight">
                  Faculty Empowerment
                </span>
              </div>

              {/* Pillar 4 */}
              <div className="flex flex-col items-center text-center space-y-2.5 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform shadow-2xs">
                  <FileCheck size={22} />
                </div>
                <span className="font-sans font-bold text-slate-800 text-xs sm:text-xs leading-tight">
                  Transparent Process
                </span>
              </div>

              {/* Pillar 5 */}
              <div className="flex flex-col items-center text-center space-y-2.5 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 group cursor-pointer col-span-2 sm:col-span-1">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform shadow-2xs">
                  <ShieldCheck size={22} />
                </div>
                <span className="font-sans font-bold text-slate-800 text-xs sm:text-xs leading-tight">
                  Quality Outcomes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
