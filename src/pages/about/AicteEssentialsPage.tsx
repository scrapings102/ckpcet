import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FileText, 
  ExternalLink, 
  Search, 
  X, 
  ShieldCheck, 
  Building2, 
  Users, 
  Flame, 
  Utensils, 
  Trophy, 
  MessageSquare, 
  HeartHandshake, 
  GraduationCap, 
  FileCheck2, 
  Download, 
  Sparkles,
  ChevronRight
} from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

interface EssentialDocument {
  id: number;
  title: string;
  category: "Committees & Cells" | "Certificates & Infrastructure" | "Student Welfare & Industry" | "Regulatory & Feedback";
  url: string;
  isExternal: boolean;
  icon: React.ElementType;
}

const ESSENTIAL_DOCUMENTS: EssentialDocument[] = [
  { id: 1, title: "Establishment of online grievance redressal", category: "Committees & Cells", url: "/about/committees", isExternal: false, icon: Users },
  { id: 2, title: "Anti Ragging Committee", category: "Committees & Cells", url: "/about/committees", isExternal: false, icon: ShieldCheck },
  { id: 3, title: "Establishment of SC ST Committee", category: "Committees & Cells", url: "/about/committees", isExternal: false, icon: Users },
  { id: 4, title: "Internal Complaint Committee", category: "Committees & Cells", url: "/about/committees", isExternal: false, icon: ShieldCheck },
  { id: 5, title: "Internal Quality Assurance Cell", category: "Committees & Cells", url: "/iqac/about", isExternal: false, icon: Building2 },
  { id: 6, title: "Barrier free", category: "Certificates & Infrastructure", url: "https://drive.google.com/file/d/1Ke15ZvZAafWzxhHZsItN6ZHta_cGoiG_/view?usp=sharing", isExternal: true, icon: FileText },
  { id: 7, title: "Fire and safety certificate", category: "Certificates & Infrastructure", url: "https://drive.google.com/file/d/1MigZkFQO0OrIuK_-Mr4ndoVJaNE9aeYV/view?usp=sharing", isExternal: true, icon: Flame },
  { id: 8, title: "MOU with industries", category: "Student Welfare & Industry", url: "/about/mou", isExternal: false, icon: HeartHandshake },
  { id: 9, title: "Food Safety and standard act", category: "Certificates & Infrastructure", url: "https://drive.google.com/file/d/1XpifkskV5ZsU2e6_LSgnfOk6T0JrB4SL/view?usp=sharing", isExternal: true, icon: Utensils },
  { id: 10, title: "Sports facility", category: "Student Welfare & Industry", url: "/student-corner/sports", isExternal: false, icon: Trophy },
  { id: 11, title: "Feedback Facility for Faculty and Students", category: "Regulatory & Feedback", url: "https://www.aicte.gov.in/feedback/", isExternal: true, icon: MessageSquare },
  { id: 12, title: "Insurance for Students", category: "Student Welfare & Industry", url: "https://drive.google.com/file/d/1pFc0PxwZFkC1ZIl8n3KlM5Ab9a1q8rSm/view", isExternal: true, icon: GraduationCap },
  { id: 13, title: "Institution industry cell", category: "Student Welfare & Industry", url: "/about/mou", isExternal: false, icon: Building2 },
  { id: 14, title: "EOA of AICTE Approval", category: "Regulatory & Feedback", url: "/about/aicte-approval", isExternal: false, icon: FileCheck2 },
  { id: 15, title: "Appointment of Student Counsellor", category: "Committees & Cells", url: "/about/committees", isExternal: false, icon: Users },
];

export default function AicteEssentialsPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Committees & Cells", "Certificates & Infrastructure", "Student Welfare & Industry", "Regulatory & Feedback"];

  const filteredDocs = ESSENTIAL_DOCUMENTS.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase().trim());
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDocumentClick = (doc: EssentialDocument) => {
    if (doc.isExternal || doc.url.startsWith("http://") || doc.url.startsWith("https://")) {
      window.open(doc.url, "_blank", "noopener,noreferrer");
    } else {
      navigate(doc.url);
    }
  };

  return (
    <SubPageLayout
      title="AICTE Essentials"
      subtitle="Statutory compliance documents, safety certificates, committee setups, and regulatory disclosures mandated by AICTE New Delhi."
      category="about"
      activeItemLabel="AICTE Essentials"
    >
      <div className="space-y-8">
        
        {/* Intro Card */}
        <div className="bg-[#0B2545]/5 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5B224]" />
            <span className="text-[#0B2545] font-mono font-bold uppercase tracking-widest text-xs">
              Mandatory Regulatory Disclosures
            </span>
          </div>
          <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
            In compliance with All India Council for Technical Education (AICTE) directives, C. K. Pithawalla College of Engineering and Technology maintains transparent public records for infrastructure, safety certifications, student welfare cells, industry links, and grievance redressal mechanisms.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl font-sans text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#00509d] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search document list..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F8FAFC] hover:bg-slate-100 focus:bg-white text-slate-800 placeholder-slate-400 font-medium text-xs sm:text-sm pl-10 pr-9 py-2 rounded-xl border border-slate-200 focus:border-[#00509d] focus:ring-2 focus:ring-[#00509d]/20 outline-none transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Documents Table / Card List */}
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xs overflow-hidden">
          
          {/* Table Header */}
          <div className="bg-[#0B2545] text-white px-6 py-4 flex items-center justify-between border-b border-[#0B2545]">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#E5B224]" />
              <h3 className="font-sans font-bold text-base tracking-wide">Document List</h3>
            </div>
            <span className="text-xs font-mono text-slate-300">
              Showing {filteredDocs.length} of {ESSENTIAL_DOCUMENTS.length} Documents
            </span>
          </div>

          {/* Document Rows */}
          <div className="divide-y divide-slate-100">
            {filteredDocs.map((doc, index) => {
              const IconComp = doc.icon;
              return (
                <div
                  key={doc.id}
                  onClick={() => handleDocumentClick(doc)}
                  className="px-6 py-4 hover:bg-blue-50/50 transition-colors flex items-center justify-between gap-4 group cursor-pointer"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-[#00509d] group-hover:text-white text-slate-500 font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors">
                      {index + 1}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-50 text-[#00509d] group-hover:bg-blue-100 shrink-0 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-sans font-bold text-sm text-slate-800 group-hover:text-[#00509d] transition-colors leading-snug">
                        {doc.title}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                        {doc.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#00509d] group-hover:underline">
                      <span>{doc.isExternal ? "Open Document" : "View Details"}</span>
                      {doc.isExternal ? <ExternalLink className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#00509d] group-hover:text-white text-slate-400 flex items-center justify-center transition-all">
                      {doc.isExternal ? <ExternalLink className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredDocs.length === 0 && (
              <div className="text-center py-12 px-4">
                <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <p className="text-slate-600 font-bold text-sm">No documents found matching "{searchQuery}"</p>
                <button
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="mt-2 text-xs font-bold text-[#00509d] hover:underline cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </SubPageLayout>
  );
}
