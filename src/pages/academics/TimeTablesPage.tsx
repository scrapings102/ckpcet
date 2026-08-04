import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubPageLayout from "../../components/SubPageLayout";
import { 
  Calendar, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  X, 
  Printer, 
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Building2
} from "lucide-react";

interface TimetableItem {
  id: string;
  title: string;
  type: "odd" | "even";
  tags: string[];
  yearCategory?: "first_year" | "second_year" | "bridge";
  pdfUrl?: string;
  publishDate?: string;
}

const TIMETABLES_DATA: TimetableItem[] = [
  {
    id: "odd-2021-22",
    title: "Odd 2021-22",
    type: "odd",
    tags: ["First Year", "Civil", "Computer", "Electrical", "Electronics and Communication", "Mechanical"],
    yearCategory: "first_year",
    publishDate: "October 2021"
  },
  {
    id: "even-2020-21",
    title: "Even 2020-21",
    type: "even",
    tags: ["Civil", "Computer", "Electrical", "Electronics and Communication", "Mechanical"],
    publishDate: "March 2021"
  },
  {
    id: "even-2019-20",
    title: "Even 2019-20",
    type: "even",
    tags: ["2nd Sem", "Civil", "Computer", "Electrical", "Electronics and Communication", "Mechanical"],
    yearCategory: "second_year",
    publishDate: "February 2020"
  },
  {
    id: "odd-2019-20",
    title: "Odd 2019-20",
    type: "odd",
    tags: ["First Year - Regular", "Induction Program", "Civil", "Computer", "Electrical", "Electronics and Communication", "Mechanical"],
    yearCategory: "first_year",
    publishDate: "September 2019"
  },
  {
    id: "even-2018-19",
    title: "Even 2018-19",
    type: "even",
    tags: ["2nd Sem", "Civil", "Computer", "Electrical", "Electronics and Communication", "Mechanical"],
    yearCategory: "second_year",
    publishDate: "January 2019"
  },
  {
    id: "odd-2018-19",
    title: "Odd 2018-19",
    type: "odd",
    tags: ["1st Sem", "Civil", "Computer", "Electrical", "Electronics and Communication", "Mechanical"],
    yearCategory: "first_year",
    publishDate: "August 2018"
  },
  {
    id: "even-2017-18",
    title: "Even 2017-18",
    type: "even",
    tags: ["2nd Sem", "Civil", "Computer", "Electrical", "Electronics and Communication", "Mechanical"],
    yearCategory: "second_year",
    publishDate: "January 2018"
  },
  {
    id: "odd-2017-18",
    title: "Odd 2017-18",
    type: "odd",
    tags: ["1st Sem", "Bridge Course_03 Aug - 11 Aug", "Bridge Course_14 Aug - 18 Aug", "Bridge Course_21 Aug - 25 Aug"],
    yearCategory: "bridge",
    publishDate: "August 2017"
  }
];

type FilterKey = "all" | "odd" | "even" | "first_year" | "second_year" | "bridge";

export default function TimeTablesPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [selectedTimetable, setSelectedTimetable] = useState<{ item: TimetableItem; tag?: string } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter logic
  const filteredData = TIMETABLES_DATA.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "odd") return item.type === "odd";
    if (activeFilter === "even") return item.type === "even";
    if (activeFilter === "first_year") return item.yearCategory === "first_year" || item.tags.some(t => t.toLowerCase().includes("first year") || t.includes("1st Sem"));
    if (activeFilter === "second_year") return item.yearCategory === "second_year" || item.tags.some(t => t.includes("2nd Sem"));
    if (activeFilter === "bridge") return item.yearCategory === "bridge" || item.tags.some(t => t.toLowerCase().includes("bridge"));
    return true;
  });

  const handleOpenTimetable = (item: TimetableItem, tag?: string) => {
    setSelectedTimetable({ item, tag });
  };

  const handleDownloadPdf = (title: string, tag?: string) => {
    setToastMessage(`Downloading GTU Timetable for ${title}${tag ? ` (${tag})` : ""}...`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <SubPageLayout
      category="academics"
      title="Academic Time Tables"
      subtitle="Semester-Wise Lecture Schedules, Internal Exam Timetables, and GTU Examination Dates"
      activeItemLabel="Time Tables"
    >
      <div className="text-slate-800 font-sans">
        {/* ── MAIN CONTENT TWO-COLUMN GRID ── */}
        <div className="py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ── LEFT SIDEBAR: FILTER TIMETABLES ── */}
          <div className="lg:col-span-3 flex flex-col gap-5 sticky top-24 z-10">
            
            {/* Filter Header & Buttons Box */}
            <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 shadow-lg shadow-slate-200/40">
              
              <h2 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>FILTER TIMETABLES</span>
                <Filter className="w-3.5 h-3.5 text-slate-400" />
              </h2>

              <div className="flex flex-col gap-2">
                
                {/* 1. All Time Tables */}
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`w-full px-4 py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-3 transition-all duration-200 text-left cursor-pointer ${
                    activeFilter === "all"
                      ? "bg-[#1E3A8A] text-white shadow-md shadow-blue-900/20 translate-x-1"
                      : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-slate-300 hover:text-blue-900"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeFilter === "all" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span>All Time Tables</span>
                </button>

                {/* 2. Odd Semesters */}
                <button
                  onClick={() => setActiveFilter("odd")}
                  className={`w-full px-4 py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-3 transition-all duration-200 text-left cursor-pointer ${
                    activeFilter === "odd"
                      ? "bg-[#1E3A8A] text-white shadow-md shadow-blue-900/20 translate-x-1"
                      : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-slate-300 hover:text-blue-900"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeFilter === "odd" ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-600"}`}>
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span>Odd Semesters</span>
                </button>

                {/* 3. Even Semesters */}
                <button
                  onClick={() => setActiveFilter("even")}
                  className={`w-full px-4 py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-3 transition-all duration-200 text-left cursor-pointer ${
                    activeFilter === "even"
                      ? "bg-[#1E3A8A] text-white shadow-md shadow-blue-900/20 translate-x-1"
                      : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-slate-300 hover:text-blue-900"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeFilter === "even" ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}>
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span>Even Semesters</span>
                </button>

                {/* 4. First Year */}
                <button
                  onClick={() => setActiveFilter("first_year")}
                  className={`w-full px-4 py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-3 transition-all duration-200 text-left cursor-pointer ${
                    activeFilter === "first_year"
                      ? "bg-[#1E3A8A] text-white shadow-md shadow-blue-900/20 translate-x-1"
                      : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-slate-300 hover:text-blue-900"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeFilter === "first_year" ? "bg-white/20 text-white" : "bg-purple-50 text-purple-600"}`}>
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span>First Year</span>
                </button>

                {/* 5. Second Year */}
                <button
                  onClick={() => setActiveFilter("second_year")}
                  className={`w-full px-4 py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-3 transition-all duration-200 text-left cursor-pointer ${
                    activeFilter === "second_year"
                      ? "bg-[#1E3A8A] text-white shadow-md shadow-blue-900/20 translate-x-1"
                      : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-slate-300 hover:text-blue-900"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeFilter === "second_year" ? "bg-white/20 text-white" : "bg-amber-50 text-amber-600"}`}>
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span>Second Year</span>
                </button>

                {/* 6. Bridge Courses */}
                <button
                  onClick={() => setActiveFilter("bridge")}
                  className={`w-full px-4 py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-3 transition-all duration-200 text-left cursor-pointer ${
                    activeFilter === "bridge"
                      ? "bg-[#1E3A8A] text-white shadow-md shadow-blue-900/20 translate-x-1"
                      : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-slate-300 hover:text-blue-900"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${activeFilter === "bridge" ? "bg-white/20 text-white" : "bg-rose-50 text-rose-600"}`}>
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span>Bridge Courses</span>
                </button>

              </div>

            </div>

            {/* Note Info Card */}
            <div className="bg-[#EFF6FF] border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-blue-950 text-sm">Note</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  Select any timetable to view or download the detailed schedule.
                </p>
              </div>
            </div>

          </div>


          {/* ── RIGHT MAIN PANEL: TIME TABLES LIST ── */}
          <div className="lg:col-span-9 bg-white border border-slate-200/90 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/50">
            
            {/* Header Title */}
            <div className="mb-6 pb-2 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">
                  TIME TABLES
                </h2>
                <div className="w-10 h-0.5 bg-amber-400 mt-1 rounded-full" />
              </div>

              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Showing {filteredData.length} Schedules
              </span>
            </div>

            {/* Timetables Card List */}
            <div className="flex flex-col gap-4">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenTimetable(item)}
                  className="bg-white hover:bg-slate-50/90 border border-slate-200/90 hover:border-blue-300 border-l-4 border-l-emerald-500 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-2xs hover:shadow-lg hover:shadow-blue-500/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer"
                >
                  
                  {/* Left Icon + Details */}
                  <div className="flex items-start sm:items-center gap-4 min-w-0 flex-1">
                    
                    {/* Green Calendar Icon Box */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-100 group-hover:scale-105 transition-all duration-300 shadow-2xs">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Title and Branch Tags */}
                    <div className="min-w-0 flex-1">
                      
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight group-hover:text-blue-600 transition-colors mb-1.5 flex items-center gap-2">
                        <span>{item.title}</span>
                        {item.publishDate && (
                          <span className="text-[10px] font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md hidden sm:inline-block">
                            {item.publishDate}
                          </span>
                        )}
                      </h3>

                      {/* Branch Tag list separated by dots */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {item.tags.map((tag, idx) => (
                          <React.Fragment key={idx}>
                            <span 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenTimetable(item, tag);
                              }}
                              className="hover:text-blue-600 hover:underline transition-colors cursor-pointer"
                            >
                              {tag}
                            </span>
                            {idx < item.tags.length - 1 && (
                              <span className="text-slate-300 font-bold select-none">•</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Right Arrow Button */}
                  <div className="flex items-center justify-end sm:justify-center shrink-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 group-hover:bg-blue-600 text-slate-500 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-110">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>

                </div>
              ))}

              {filteredData.length === 0 && (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-600 font-bold text-sm">No timetables found for this filter.</p>
                  <button 
                    onClick={() => setActiveFilter("all")}
                    className="mt-3 text-xs font-bold text-blue-600 hover:underline"
                  >
                    View All Time Tables
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>


      {/* ── TIMETABLE PREVIEW & DOWNLOAD MODAL ── */}
      {selectedTimetable && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white">
                    {selectedTimetable.item.title}
                  </h3>
                  <p className="text-xs text-blue-200">
                    GTU Academic Schedule {selectedTimetable.tag ? `• ${selectedTimetable.tag}` : ""}
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setSelectedTimetable(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-3">
                  <span>Branch / Stream</span>
                  <span className="text-blue-600 font-bold">GTU Syllabus Aligned</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedTimetable.item.tags.map((t, i) => (
                    <span 
                      key={i} 
                      className={`text-xs px-3 py-1 rounded-lg font-medium border ${
                        t === selectedTimetable.tag 
                          ? "bg-blue-600 text-white border-blue-600 font-bold"
                          : "bg-white text-slate-700 border-slate-200"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Schedule Info Table Mockup */}
              <div className="border border-slate-200 rounded-xl overflow-hidden mb-6 text-xs sm:text-sm">
                <div className="bg-slate-100 p-3 font-bold text-slate-700 border-b border-slate-200 flex justify-between">
                  <span>Exam / Lecture Slot</span>
                  <span>Timing</span>
                </div>
                <div className="p-3 border-b border-slate-100 flex justify-between text-slate-600">
                  <span>Morning Session (Theory)</span>
                  <span className="font-semibold text-slate-800">10:30 AM - 01:00 PM</span>
                </div>
                <div className="p-3 border-b border-slate-100 flex justify-between text-slate-600">
                  <span>Afternoon Session (Practical/Lab)</span>
                  <span className="font-semibold text-slate-800">02:00 PM - 05:00 PM</span>
                </div>
                <div className="p-3 flex justify-between text-slate-600">
                  <span>Publish Status</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Official GTU Approved
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleDownloadPdf(selectedTimetable.item.title, selectedTimetable.tag)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Schedule (PDF)</span>
                </button>

                <button
                  onClick={() => window.open("https://timetable.gtu.ac.in/", "_blank")}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>GTU Portal</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Toast Notice */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-semibold border border-slate-700 animate-in fade-in slide-in-from-bottom-3">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
          <span>{toastMessage}</span>
        </div>
      )}

      </div>
    </SubPageLayout>
  );
}
