import React, { useState, useMemo } from "react";
import SubPageLayout from "../../components/SubPageLayout";
import {
  Calendar,
  Search,
  Filter,
  AlertCircle,
  FileText,
  Megaphone,
  GraduationCap,
  Download,
  User,
  Info,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface Notice {
  id: string;
  year: string;
  category: "Important" | "Circulars" | "Events" | "Examination";
  typeLabel: "CIRCULAR" | "EVENT" | "EXAMINATION" | "NOTICE";
  title: string;
  description: string;
  date: string;
  publisher: string;
  views: number;
  pdfSize: string;
}

const ACADEMIC_YEARS = [
  { year: "2025 - 2026", count: 12 },
  { year: "2024 - 2025", count: 18 },
  { year: "2023 - 2024", count: 22 },
  { year: "2022 - 2023", count: 16 },
  { year: "2021 - 2022", count: 14 },
  { year: "2020 - 2021", count: 10 },
  { year: "2019 - 2020", count: 9 },
  { year: "2018 - 2019", count: 8 },
  { year: "2017 - 2018", count: 11 },
  { year: "2016 - 2017", count: 7 }
];

const INITIAL_NOTICES: Notice[] = [
  {
    id: "n1",
    year: "2025 - 2026",
    category: "Important",
    typeLabel: "CIRCULAR",
    title: "College Reopens for Academic Year 2025–26",
    description:
      "All students are hereby informed that the college will reopen for the academic year 2025–26 from 16th June 2025.",
    date: "15 May 2025",
    publisher: "Admin Office",
    views: 245,
    pdfSize: "245 KB"
  },
  {
    id: "n2",
    year: "2025 - 2026",
    category: "Events",
    typeLabel: "EVENT",
    title: "Seminar on Artificial Intelligence",
    description:
      "Department of Computer Science is organizing a seminar on AI Applications in Real World on 28th May 2025.",
    date: "12 May 2025",
    publisher: "Computer Science Dept.",
    views: 189,
    pdfSize: "512 KB"
  },
  {
    id: "n3",
    year: "2025 - 2026",
    category: "Examination",
    typeLabel: "EXAMINATION",
    title: "Internal Examination Time Table",
    description:
      "The internal examination time table for all departments has been published. Please check your subject schedule.",
    date: "10 May 2025",
    publisher: "Exam Cell",
    views: 312,
    pdfSize: "198 KB"
  },
  {
    id: "n4",
    year: "2025 - 2026",
    category: "Circulars",
    typeLabel: "CIRCULAR",
    title: "Submission of Semester Registration Form",
    description:
      "All B.E. students must complete their online semester registration and fee deposit on or before 5th June 2025.",
    date: "08 May 2025",
    publisher: "Student Section",
    views: 420,
    pdfSize: "310 KB"
  },
  {
    id: "n5",
    year: "2025 - 2026",
    category: "Important",
    typeLabel: "CIRCULAR",
    title: "Anti-Ragging Declaration Mandatory for All Students",
    description:
      "Compliance notice regarding AICTE Anti-Ragging affidavit filing for the upcoming 2025–26 academic term.",
    date: "02 May 2025",
    publisher: "Anti-Ragging Committee",
    views: 512,
    pdfSize: "180 KB"
  },
  {
    id: "n6",
    year: "2025 - 2026",
    category: "Events",
    typeLabel: "EVENT",
    title: "Annual Technical Symposium & Hackathon 'TechFest 2025'",
    description:
      "Registration open for state-level coding competition, robotics workshop, and paper presentations.",
    date: "28 Apr 2025",
    publisher: "IETE Student Forum",
    views: 630,
    pdfSize: "1.2 MB"
  },
  // Previous year notices sample
  {
    id: "n7",
    year: "2024 - 2025",
    category: "Examination",
    typeLabel: "EXAMINATION",
    title: "GTU Winter 2024 Examination Schedule & Hall Tickets",
    description:
      "Gujarat Technological University winter examination hall tickets are available for download in student portal.",
    date: "12 Nov 2024",
    publisher: "Exam Controller",
    views: 890,
    pdfSize: "420 KB"
  },
  {
    id: "n8",
    year: "2024 - 2025",
    category: "Circulars",
    typeLabel: "CIRCULAR",
    title: "Campus Recruitment Drive by TCS & L&T Infotech",
    description:
      "Final year Computer, IT, EC and Mechanical engineering students are eligible to apply for upcoming drive.",
    date: "20 Oct 2024",
    publisher: "Training & Placement Cell",
    views: 1120,
    pdfSize: "350 KB"
  }
];

export default function NoticeBoardPage() {
  const [selectedYear, setSelectedYear] = useState("2025 - 2026");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter notices based on year, category, and search query
  const filteredNotices = useMemo(() => {
    return INITIAL_NOTICES.filter((notice) => {
      const matchYear = notice.year === selectedYear;
      const matchCategory =
        selectedCategory === "All" || notice.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.publisher.toLowerCase().includes(searchQuery.toLowerCase());

      return matchYear && matchCategory && matchSearch;
    });
  }, [selectedYear, selectedCategory, searchQuery]);

  // Counts for Category Tabs
  const categoryCounts = useMemo(() => {
    const yearNotices = INITIAL_NOTICES.filter((n) => n.year === selectedYear);
    return {
      All: yearNotices.length,
      Important: yearNotices.filter((n) => n.category === "Important").length,
      Circulars: yearNotices.filter((n) => n.category === "Circulars").length,
      Events: yearNotices.filter((n) => n.category === "Events").length,
      Examination: yearNotices.filter((n) => n.category === "Examination").length
    };
  }, [selectedYear]);

  // Helper for Card styling according to Category
  const getCardCategoryStyle = (type: Notice["typeLabel"]) => {
    switch (type) {
      case "CIRCULAR":
        return {
          boxBg: "bg-rose-50 border-rose-100 text-rose-500",
          tagBg: "bg-rose-100/80 text-rose-600",
          icon: FileText
        };
      case "EVENT":
        return {
          boxBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
          tagBg: "bg-emerald-100/80 text-emerald-700",
          icon: Megaphone
        };
      case "EXAMINATION":
        return {
          boxBg: "bg-amber-50 border-amber-100 text-amber-600",
          tagBg: "bg-amber-100/80 text-amber-700",
          icon: GraduationCap
        };
      default:
        return {
          boxBg: "bg-blue-50 border-blue-100 text-blue-600",
          tagBg: "bg-blue-100/80 text-blue-700",
          icon: FileText
        };
    }
  };

  return (
    <SubPageLayout
      title="Notice Board"
      subtitle="Year-Wise Academic Announcements & Official Circulars"
      category="about"
      activeItemLabel="Notice Board"
    >
      <div className="max-w-7xl mx-auto space-y-6 py-1">
        {/* MAIN TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT COLUMN: ACADEMIC YEAR FILTER SIDEBAR */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-4">
            {/* Year Selector Box */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-2xs space-y-3">
              {/* Header Box */}
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#1D4ED8] flex items-center justify-center shrink-0">
                  <Calendar size={18} />
                </div>
                <h3 className="font-serif font-bold text-[#0F1E36] text-base">
                  Academic Year
                </h3>
              </div>

              {/* Vertical Year List */}
              <div className="space-y-1.5 pt-1">
                {ACADEMIC_YEARS.map((item) => {
                  const isActive = selectedYear === item.year;
                  return (
                    <button
                      key={item.year}
                      type="button"
                      onClick={() => {
                        setSelectedYear(item.year);
                        setCurrentPage(1);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#0F2D5E] text-white shadow-sm"
                          : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-100"
                      }`}
                    >
                      <span>{item.year}</span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          isActive
                            ? "bg-blue-500 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {item.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Info Message Box */}
            <div className="bg-blue-50/80 rounded-2xl p-4 border border-blue-100 flex items-start gap-3 text-blue-900">
              <div className="w-7 h-7 rounded-full bg-blue-200/70 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                <Info size={16} />
              </div>
              <p className="text-xs font-medium leading-relaxed text-blue-800">
                Select any academic year to view its notices.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: NOTICES LIST PANEL */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-5">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-2xs space-y-6">
              {/* TOP CONTROL BAR: TITLE + SEARCH & FILTER */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Notices for Academic Year
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#1D4ED8]">
                    {selectedYear}
                  </h2>
                </div>

                {/* Search Box & Filter Button */}
                <div className="flex items-center gap-3">
                  <div className="relative flex-1 sm:w-64">
                    <Search
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      placeholder="Search notices..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <Filter size={15} className="text-slate-500" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>

              {/* CATEGORY FILTER TABS */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {[
                  { label: "All", name: `All Notices (${categoryCounts.All})`, icon: null },
                  { label: "Important", name: `Important (${categoryCounts.Important})`, icon: AlertCircle },
                  { label: "Circulars", name: `Circulars (${categoryCounts.Circulars})`, icon: Calendar },
                  { label: "Events", name: `Events (${categoryCounts.Events})`, icon: Calendar },
                  { label: "Examination", name: `Examination (${categoryCounts.Examination})`, icon: GraduationCap }
                ].map((tab) => {
                  const isActive = selectedCategory === tab.label;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.label}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(tab.label);
                        setCurrentPage(1);
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#0F2D5E] text-white shadow-2xs"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                      }`}
                    >
                      {Icon && (
                        <Icon
                          size={14}
                          className={isActive ? "text-amber-400" : "text-slate-400"}
                        />
                      )}
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* NOTICES CARDS LIST */}
              <div className="space-y-4 pt-1">
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((notice) => {
                    const style = getCardCategoryStyle(notice.typeLabel);
                    const TypeIcon = style.icon;

                    return (
                      <div
                        key={notice.id}
                        className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group"
                      >
                        {/* LEFT PORTION: SQUARE ICON BOX + CONTENT */}
                        <div className="flex items-start gap-4 min-w-0 flex-1">
                          {/* Square Category Icon Badge Box */}
                          <div
                            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl ${style.boxBg} flex flex-col items-center justify-center shrink-0 p-2 text-center border`}
                          >
                            <TypeIcon size={26} strokeWidth={2} />
                            <span className="text-[10px] font-extrabold tracking-wider uppercase mt-1">
                              {notice.typeLabel}
                            </span>
                          </div>

                          {/* Text Details */}
                          <div className="space-y-2 min-w-0 flex-1">
                            {/* Category Pill Tag */}
                            <div>
                              <span
                                className={`inline-block px-2.5 py-0.5 rounded-md ${style.tagBg} text-[11px] font-bold`}
                              >
                                {notice.category}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-serif font-bold text-[#0F1E36] text-base sm:text-lg leading-snug group-hover:text-[#1D4ED8] transition-colors">
                              {notice.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 text-xs sm:text-sm font-sans line-clamp-2 leading-relaxed">
                              {notice.description}
                            </p>

                            {/* Meta items row */}
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-slate-400 text-xs font-medium">
                              <span className="inline-flex items-center gap-1.5 text-slate-500">
                                <Calendar size={13} className="text-slate-400" />
                                {notice.date}
                              </span>
                              <span>|</span>
                              <span className="inline-flex items-center gap-1.5 text-slate-500">
                                <User size={13} className="text-slate-400" />
                                {notice.publisher}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* RIGHT PORTION: DOWNLOAD PDF BUTTON */}
                        <div className="w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
                          <a
                            href="#download"
                            onClick={(e) => {
                              e.preventDefault();
                              alert(`Downloading ${notice.title} PDF (${notice.pdfSize})...`);
                            }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-[#1D4ED8] transition-all duration-200 group/btn shadow-2xs"
                          >
                            <Download
                              size={18}
                              className="text-[#1D4ED8] group-hover/btn:scale-110 transition-transform"
                            />
                            <div className="text-left">
                              <span className="block text-xs font-bold leading-tight">
                                Download PDF
                              </span>
                              <span className="block text-[10px] text-slate-400 font-medium">
                                {notice.pdfSize}
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <p className="text-slate-500 text-sm font-medium">
                      No notices found matching your query for {selectedYear}.
                    </p>
                  </div>
                )}
              </div>

              {/* PAGINATION ROW */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-medium">
                  Showing 1 to {Math.min(filteredNotices.length, 3)} of{" "}
                  {categoryCounts.All} notices
                </span>

                {/* Page Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-40 cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {[1, 2, 3, 4].map((pageNum) => (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                        currentPage === pageNum
                          ? "bg-[#0F2D5E] text-white shadow-2xs"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/80"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(4, p + 1))}
                    disabled={currentPage === 4}
                    className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-40 cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
