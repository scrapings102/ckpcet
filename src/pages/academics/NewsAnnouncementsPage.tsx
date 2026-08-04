import React, { useState, useMemo } from "react";
import SubPageLayout from "../../components/SubPageLayout";
import {
  FolderKanban,
  Newspaper,
  Trophy,
  Calendar,
  UserCheck,
  FileText,
  Search,
  ChevronDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Share2
} from "lucide-react";

interface NewsItem {
  id: string;
  category: "College News" | "Achievements" | "Events" | "Admissions" | "Examinations";
  categoryLabel: string;
  categoryStyle: {
    pillBg: string;
    pillText: string;
  };
  title: string;
  description: string;
  fullContent?: string;
  date: string;
  rawDate: string; // YYYY-MM-DD for date filtering
  views: number;
}

const ALL_NEWS_DATA: NewsItem[] = [
  {
    id: "news-1",
    category: "College News",
    categoryLabel: "College News",
    categoryStyle: {
      pillBg: "bg-blue-50 border border-blue-100",
      pillText: "text-blue-600 font-semibold"
    },
    title: "College Reopens for Academic Year 2025-26",
    description:
      "All students are hereby informed that the college will reopen for the academic year 2025-26 from 16th June 2025.",
    fullContent:
      "CKP CET campus prepares to welcome all engineering and diploma students for the new academic term 2025-26 starting June 16, 2025. Orientation sessions for newly admitted students will commence concurrently.",
    date: "15 May 2025",
    rawDate: "2025-05-15",
    views: 245
  },
  {
    id: "news-2",
    category: "Events",
    categoryLabel: "Event",
    categoryStyle: {
      pillBg: "bg-emerald-50 border border-emerald-100",
      pillText: "text-emerald-600 font-semibold"
    },
    title: "Seminar on Artificial Intelligence",
    description:
      "Department of Computer Science is organizing a seminar on AI Applications in Real World on 28th May 2025.",
    fullContent:
      "Join expert speakers from tech industry and research institutes discussing Generative AI, Large Language Models, and practical deep learning applications in smart engineering systems.",
    date: "12 May 2025",
    rawDate: "2025-05-12",
    views: 189
  },
  {
    id: "news-3",
    category: "Examinations",
    categoryLabel: "Examination",
    categoryStyle: {
      pillBg: "bg-amber-50 border border-amber-100",
      pillText: "text-amber-700 font-semibold"
    },
    title: "Internal Examination Time Table",
    description:
      "The internal examination time table for all departments has been published. Please check your subject schedule.",
    fullContent:
      "All mid-semester test schedules for B.E. Sem 3, 5, and 7 have been updated on the official notice portal. Students are requested to bring their college ID cards.",
    date: "10 May 2025",
    rawDate: "2025-05-10",
    views: 312
  },
  {
    id: "news-4",
    category: "Achievements",
    categoryLabel: "Achievements",
    categoryStyle: {
      pillBg: "bg-purple-50 border border-purple-100",
      pillText: "text-purple-700 font-semibold"
    },
    title: "Students Win Inter-Collegiate Debate Competition",
    description:
      "Our students secured first place in the Inter-Collegiate Debate Competition held at Veer Narmad South Gujarat University.",
    fullContent:
      "Congratulations to the college debate team for securing the top trophy at VNSGU university youth festival out of 32 participating engineering colleges.",
    date: "08 May 2025",
    rawDate: "2025-05-08",
    views: 156
  },
  {
    id: "news-5",
    category: "Admissions",
    categoryLabel: "Admissions",
    categoryStyle: {
      pillBg: "bg-sky-50 border border-sky-100",
      pillText: "text-sky-600 font-semibold"
    },
    title: "Admissions Open for B.Com. & BBA Programs",
    description:
      "Applications are invited for B.Com. and BBA programs for the academic year 2025-26. Apply online now.",
    fullContent:
      "Detailed admission guidelines, eligibility criteria, and fee structures for degree programs are now available on the central admission portal.",
    date: "05 May 2025",
    rawDate: "2025-05-05",
    views: 320
  },
  {
    id: "news-6",
    category: "Events",
    categoryLabel: "Event",
    categoryStyle: {
      pillBg: "bg-pink-50 border border-pink-100",
      pillText: "text-pink-600 font-semibold"
    },
    title: "Blood Donation Camp Organized",
    description:
      "NSS Unit of our college organized a Blood Donation Camp in association with Red Cross Society.",
    fullContent:
      "Over 180 units of blood were donated by students and faculty members during the annual NSS drive at the main hall.",
    date: "02 May 2025",
    rawDate: "2025-05-02",
    views: 142
  },
  {
    id: "news-7",
    category: "College News",
    categoryLabel: "College News",
    categoryStyle: {
      pillBg: "bg-blue-50 border border-blue-100",
      pillText: "text-blue-600 font-semibold"
    },
    title: "MoU Signed with Leading Tech Companies for Campus Placements",
    description:
      "Training & Placement Cell signed formal industry partnerships for internship placements and skill development.",
    fullContent:
      "Students from Computer, IT, and Mechanical streams will benefit from specialized training modules and direct campus hiring.",
    date: "25 Apr 2025",
    rawDate: "2025-04-25",
    views: 410
  },
  {
    id: "news-8",
    category: "Achievements",
    categoryLabel: "Achievements",
    categoryStyle: {
      pillBg: "bg-purple-50 border border-purple-100",
      pillText: "text-purple-700 font-semibold"
    },
    title: "Robotics Team Qualifies for National Finals",
    description:
      "RoboTech club team ranked among top 10 finalists in the National Autonomous Robotics Challenge.",
    fullContent:
      "The student team created an AI-powered automated rover designed for industrial inspection tasks.",
    date: "18 Apr 2025",
    rawDate: "2025-04-18",
    views: 275
  }
];

export default function NewsAnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All News");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("All Time");
  const [sortBy, setSortBy] = useState<string>("Newest First");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeModalItem, setActiveModalItem] = useState<NewsItem | null>(null);

  // Category Counts
  const categoryCounts = useMemo(() => {
    return {
      "All News": ALL_NEWS_DATA.length,
      "College News": ALL_NEWS_DATA.filter((n) => n.category === "College News").length,
      Achievements: ALL_NEWS_DATA.filter((n) => n.category === "Achievements").length,
      Events: ALL_NEWS_DATA.filter((n) => n.category === "Events").length,
      Admissions: ALL_NEWS_DATA.filter((n) => n.category === "Admissions").length,
      Examinations: ALL_NEWS_DATA.filter((n) => n.category === "Examinations").length
    };
  }, []);

  // Filtered and Sorted News Items
  const filteredNews = useMemo(() => {
    let result = [...ALL_NEWS_DATA];

    // Filter by category
    if (selectedCategory !== "All News") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }

    // Filter by date
    if (dateFilter === "This Month") {
      // Sample mock filter for May 2025
      result = result.filter((item) => item.rawDate.startsWith("2025-05"));
    } else if (dateFilter === "Last 3 Months") {
      result = result.filter(
        (item) =>
          item.rawDate.startsWith("2025-05") ||
          item.rawDate.startsWith("2025-04") ||
          item.rawDate.startsWith("2025-03")
      );
    } else if (dateFilter === "This Year") {
      result = result.filter((item) => item.rawDate.startsWith("2025"));
    }

    // Sort
    if (sortBy === "Newest First") {
      result.sort((a, b) => b.rawDate.localeCompare(a.rawDate));
    } else if (sortBy === "Oldest First") {
      result.sort((a, b) => a.rawDate.localeCompare(b.rawDate));
    } else if (sortBy === "Most Viewed") {
      result.sort((a, b) => b.views - a.views);
    }

    return result;
  }, [selectedCategory, searchQuery, dateFilter, sortBy]);

  const CATEGORIES_LIST = [
    { name: "All News", count: categoryCounts["All News"], icon: Newspaper },
    { name: "College News", count: categoryCounts["College News"], icon: Newspaper },
    { name: "Achievements", count: categoryCounts["Achievements"], icon: Trophy },
    { name: "Events", count: categoryCounts["Events"], icon: Calendar },
    { name: "Admissions", count: categoryCounts["Admissions"], icon: UserCheck },
    { name: "Examinations", count: categoryCounts["Examinations"], icon: FileText }
  ];

  const DATE_FILTERS = ["All Time", "This Month", "Last 3 Months", "This Year"];

  return (
    <SubPageLayout
      title="News & Announcements"
      subtitle="Latest Campus Updates, Academic News, and Student Achievements"
      category="academics"
      activeItemLabel="News & Announcements"
    >
      <div className="max-w-7xl mx-auto py-2">
        {/* MAIN TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT SIDEBAR PANEL */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-5">
            {/* 1. CATEGORIES BOX */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-3">
              {/* Box Header */}
              <div className="flex items-center gap-2.5 px-1 py-1">
                <FolderKanban size={18} className="text-blue-600 shrink-0" />
                <h3 className="font-sans font-bold text-slate-800 text-base">
                  Categories
                </h3>
              </div>

              {/* Categories Navigation Buttons */}
              <div className="space-y-1 pt-1">
                {CATEGORIES_LIST.map((cat) => {
                  const isActive = selectedCategory === cat.name;
                  const Icon = cat.icon;

                  return (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        setCurrentPage(1);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#0F2D5E] text-white shadow-xs font-semibold"
                          : "bg-white text-slate-700 hover:bg-slate-50 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon
                          size={16}
                          className={isActive ? "text-white" : "text-slate-500"}
                        />
                        <span className="truncate">{cat.name}</span>
                      </div>

                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-bold shrink-0 ${
                          isActive
                            ? "bg-blue-500/30 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. SEARCH NEWS BOX */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-3">
              <h3 className="font-sans font-bold text-slate-800 text-sm px-1">
                Search News
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-3.5 pr-9 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                />
                <Search
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            {/* 3. FILTER BY DATE BOX */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-3">
              <h3 className="font-sans font-bold text-slate-800 text-sm px-1">
                Filter By Date
              </h3>
              <div className="space-y-2 pt-1">
                {DATE_FILTERS.map((df) => {
                  const isChecked = dateFilter === df;
                  return (
                    <label
                      key={df}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 cursor-pointer select-none py-1 px-1 rounded-lg hover:bg-slate-50"
                    >
                      <input
                        type="radio"
                        name="dateFilter"
                        checked={isChecked}
                        onChange={() => {
                          setDateFilter(df);
                          setCurrentPage(1);
                        }}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                      />
                      <span>{df}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT MAIN CONTENT PANEL */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-4">
            {/* HEADER ROW: LATEST UPDATES + SORT DROPDOWN */}
            <div className="flex items-center justify-between gap-4 pb-2">
              <h2 className="font-sans font-bold text-slate-900 text-lg sm:text-xl tracking-tight">
                Latest Updates
              </h2>

              {/* Sort Select */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-slate-200/90 rounded-xl px-4 py-2 pr-9 text-xs sm:text-sm font-medium text-slate-700 shadow-2xs hover:border-slate-300 focus:outline-none cursor-pointer"
                >
                  <option value="Newest First">Sort by: Newest First</option>
                  <option value="Oldest First">Sort by: Oldest First</option>
                </select>
                <ChevronDown
                  size={15}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
            </div>

            {/* NEWS ITEMS STACK */}
            <div className="space-y-3.5">
              {filteredNews.length > 0 ? (
                filteredNews.map((news) => (
                  <div
                    key={news.id}
                    className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-2.5">
                      {/* Category Tag Pill */}
                      <div>
                        <span
                          className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold ${news.categoryStyle.pillBg} ${news.categoryStyle.pillText}`}
                        >
                          {news.categoryLabel}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-sans font-bold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-blue-600 transition-colors">
                        {news.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                        {news.description}
                      </p>
                    </div>

                    {/* Footer Row */}
                    <div className="pt-3 flex items-center justify-between border-t border-slate-100 text-xs sm:text-sm text-slate-500 font-medium">
                      {/* Meta items */}
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Calendar size={14} className="text-slate-400" />
                          {news.date}
                        </span>
                      </div>

                      {/* Read More Link */}
                      <button
                        type="button"
                        onClick={() => setActiveModalItem(news)}
                        className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group/link"
                      >
                        <span>Read More</span>
                        <ArrowRight
                          size={15}
                          className="group-hover/link:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-12 text-center">
                  <p className="text-slate-500 font-medium text-sm">
                    No news items found matching your filters.
                  </p>
                </div>
              )}
            </div>

            {/* PAGINATION ROW */}
            <div className="pt-6 flex items-center justify-center gap-1.5">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer shadow-2xs"
              >
                <ChevronLeft size={16} />
              </button>

              {[1, 2, 3, 4, 5].map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                    currentPage === pageNum
                      ? "bg-[#0F2D5E] text-white shadow-2xs"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
                disabled={currentPage === 5}
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 cursor-pointer shadow-2xs"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL FOR "READ MORE" DETAILED VIEW */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative border border-slate-100">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Category Tag */}
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold ${activeModalItem.categoryStyle.pillBg} ${activeModalItem.categoryStyle.pillText}`}
              >
                {activeModalItem.categoryLabel}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-sans font-bold text-slate-900 text-xl leading-snug">
              {activeModalItem.title}
            </h3>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs font-medium text-slate-500 border-b border-slate-100 pb-3">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-slate-400" />
                {activeModalItem.date}
              </span>
            </div>

            {/* Content Body */}
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p>{activeModalItem.description}</p>
              {activeModalItem.fullContent && (
                <p className="text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {activeModalItem.fullContent}
                </p>
              )}
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  alert("Share link copied to clipboard!");
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                <Share2 size={15} />
                <span>Share Notice</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2.5 rounded-xl bg-[#0F2D5E] hover:bg-blue-900 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </SubPageLayout>
  );
}
