import React, { useState, useMemo } from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { User, Briefcase, GraduationCap, Mail, Search, ShieldCheck } from "lucide-react";

interface PortfolioMember {
  id: string;
  portfolio: string;
  name: string;
  designation: string;
  department: string;
  email: string;
}

const DEANS_AND_FACULTY_INCHARGES: PortfolioMember[] = [
  {
    id: "p1",
    portfolio: "Admission Cell In Charge",
    name: "Dr. Chaitanya K. Desai",
    designation: "Associate Professor",
    department: "Mechanical Engineering",
    email: "chaitanya.desai@ckpcet.ac.in"
  },
  {
    id: "p2",
    portfolio: "Dean of Research and Consultancy",
    name: "Dr. Priti A. Patel",
    designation: "Professor",
    department: "Civil Engineering",
    email: "priti.patel@ckpcet.ac.in"
  },
  {
    id: "p3",
    portfolio: "Dean Students, External & Infrastructure Affairs",
    name: "Dr. Chaitanya K. Desai",
    designation: "Associate Professor",
    department: "Mechanical Engineering",
    email: "chaitanya.desai@ckpcet.ac.in"
  },
  {
    id: "p4",
    portfolio: "Dean of Academic Affairs",
    name: "Dr. Naimish K. Zaveri",
    designation: "Professor",
    department: "Electrical Engineering",
    email: "naimish.zaveri@ckpcet.ac.in"
  },
  {
    id: "p5",
    portfolio: "Head - Administrative Department",
    name: "Mr. Nilesh C. Patel",
    designation: "Office Superintendent",
    department: "Administrative Department",
    email: "nilesh.patel@ckpcet.ac.in"
  },
  {
    id: "p6",
    portfolio: "Cultural Activities",
    name: "Dr. Chetan K. Lad",
    designation: "Assistant Professor",
    department: "Electrical Engineering",
    email: "chetan.lad@ckpcet.ac.in"
  },
  {
    id: "p7",
    portfolio: "Technical Activities",
    name: "-",
    designation: "Assistant Professor",
    department: "-",
    email: "-"
  },
  {
    id: "p8",
    portfolio: "Technical Activities",
    name: "-",
    designation: "Assistant Professor",
    department: "-",
    email: "-"
  },
  {
    id: "p9",
    portfolio: "GTU Coordinator",
    name: "Dr. Kalpesh D. Maniya",
    designation: "Associate Professor",
    department: "Mechanical Engineering",
    email: "kalpesh.maniya@ckpcet.ac.in"
  },
  {
    id: "p10",
    portfolio: "Alumni and Corporate Relations",
    name: "Prof. Nishith R. Rathod",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    email: "nishith.rathod@ckpcet.ac.in"
  },
  {
    id: "p11",
    portfolio: "Infrastructure Planning & Support",
    name: "Dr. Amisha J. Shah",
    designation: "Assistant Professor",
    department: "Electronics and Communication Engineering",
    email: "amisha.shah@ckpcet.ac.in"
  },
  {
    id: "p12",
    portfolio: "Professor In Charge Training & Placement Cell",
    name: "Dr. Deepak C. Bhonsle",
    designation: "Associate Professor",
    department: "Electrical Engineering",
    email: "deepak.bhonsle@ckpcet.ac.in"
  },
  {
    id: "p13",
    portfolio: "First Year Coordinator",
    name: "Prof. Sumit Y. Patel",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    email: "sumit.patel@ckpcet.ac.in"
  },
  {
    id: "p14",
    portfolio: "Faculty In Charge PG",
    name: "Dr. Chintan K. Patel",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    email: "chintan.k.patel@ckpcet.ac.in"
  },
  {
    id: "p15",
    portfolio: "Time Table Coordinator",
    name: "Dr. Boski P. Chauhan",
    designation: "Assistant Professor",
    department: "Civil Engineering",
    email: "boski.chauhan@ckpcet.ac.in"
  },
  {
    id: "p16",
    portfolio: "Faculty In Charge Media Cell",
    name: "Dr. Vijayendra A. Desai",
    designation: "Assistant Professor",
    department: "Electronics and Communication Engineering",
    email: "vijayendra.desai@ckpcet.ac.in"
  },
  {
    id: "p17",
    portfolio: "NBA Coordinator (Institute Level)",
    name: "Dr. Kalpesh D. Maniya",
    designation: "Associate Professor",
    department: "Mechanical Engineering",
    email: "kalpesh.maniya@ckpcet.ac.in"
  },
  {
    id: "p18",
    portfolio: "IQAC",
    name: "Dr. Kalpesh D. Maniya",
    designation: "Associate Professor",
    department: "Mechanical Engineering",
    email: "kalpesh.maniya@ckpcet.ac.in"
  },
  {
    id: "p19",
    portfolio: "Sports Activities",
    name: "Prof. Chetan Solanki",
    designation: "Assistant Professor",
    department: "Computer Engineering",
    email: "chetan.solanki@ckpcet.ac.in"
  },
  {
    id: "p20",
    portfolio: "Sports Activities",
    name: "Mr. Jentibhai Vasava",
    designation: "Physical Training Instructor",
    department: "Applied Science",
    email: "jayanti.vasava@ckpcet.ac.in"
  },
  {
    id: "p21",
    portfolio: "Central Library",
    name: "Prof. Saurabh Tandel",
    designation: "Assistant Professor",
    department: "Computer Engineering",
    email: "saurabh.tandel@ckpcet.ac.in"
  },
  {
    id: "p22",
    portfolio: "Faculty In Charge Hostel (Boys)",
    name: "Prof. Mahesh N. Patel",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    email: "mahesh.patel@ckpcet.ac.in"
  },
  {
    id: "p23",
    portfolio: "Faculty In Charge Hostel (Girls)",
    name: "Ms. Shraddha A. Modi",
    designation: "Assistant Professor",
    department: "Mechanical Engineering",
    email: "shraddha.mehta@ckpcet.ac.in"
  },
  {
    id: "p24",
    portfolio: "Faculty In Charge Foreign Student",
    name: "Prof. Vishrut V. Desai",
    designation: "Assistant Professor",
    department: "Computer Engineering",
    email: "vishrut.desai@ckpcet.ac.in"
  },
  {
    id: "p25",
    portfolio: "Faculty In Charge Foreign Student",
    name: "Dr. Gaurang Chaudhari",
    designation: "Assistant Professor",
    department: "Computer Engineering",
    email: "gaurang.chaudhari@ckpcet.ac.in"
  }
];

export default function DeansFacultyPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = useMemo(() => {
    if (!searchQuery.trim()) return DEANS_AND_FACULTY_INCHARGES;
    const q = searchQuery.toLowerCase();
    return DEANS_AND_FACULTY_INCHARGES.filter(
      (m) =>
        m.portfolio.toLowerCase().includes(q) ||
        m.name.toLowerCase().includes(q) ||
        m.department.toLowerCase().includes(q) ||
        m.designation.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <SubPageLayout
      title="Deans and Faculty In-charges"
      subtitle="Institutional Portfolios, Deans, and Faculty Leadership"
      category="about"
      activeItemLabel="Deans and Faculty In-charges"
    >
      <div className="max-w-7xl mx-auto space-y-6 py-2">
        {/* HEADER TOOLBAR ROW WITH SEARCH */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8]">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2 className="font-serif font-bold text-[#0F1E36] text-lg sm:text-xl">
                Deans & Faculty In-charges
              </h2>
              <p className="text-slate-500 text-xs">
                Showing {filteredMembers.length} portfolio leadership positions
              </p>
            </div>
          </div>

          <div className="relative w-full sm:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search portfolio, name, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* 3-COLUMN PORTFOLIO CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMembers.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 hover:border-blue-200 group"
            >
              <div className="space-y-3">
                {/* Top Badge */}
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-blue-50/90 text-[#1D4ED8] border border-blue-100">
                    PORTFOLIO
                  </span>
                </div>

                {/* Portfolio Title */}
                <h3 className="font-sans font-bold text-[#0F1E36] text-base leading-snug min-h-[44px] flex items-center group-hover:text-[#1D4ED8] transition-colors">
                  {item.portfolio}
                </h3>

                {/* Member Details */}
                <div className="space-y-2 pt-1">
                  {/* Name */}
                  <div className="flex items-start gap-2.5 text-slate-800">
                    <User size={15} className="text-slate-400 shrink-0 mt-0.5" />
                    <span className="font-semibold text-xs sm:text-sm leading-tight">
                      {item.name}
                    </span>
                  </div>

                  {/* Designation */}
                  <div className="flex items-start gap-2.5 text-slate-600">
                    <Briefcase size={15} className="text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-tight">
                      {item.designation}
                    </span>
                  </div>

                  {/* Department */}
                  <div className="flex items-start gap-2.5 text-slate-600">
                    <GraduationCap size={15} className="text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-tight">
                      {item.department}
                    </span>
                  </div>
                </div>
              </div>

              {/* Email Footer Link */}
              <div className="pt-3 border-t border-slate-100">
                {item.email && item.email !== "-" ? (
                  <a
                    href={`mailto:${item.email}`}
                    className="inline-flex items-center gap-2 text-[#1D4ED8] hover:underline text-xs font-semibold transition-colors truncate max-w-full"
                    title={item.email}
                  >
                    <Mail size={14} className="text-[#1D4ED8] shrink-0" />
                    <span className="truncate">{item.email}</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                    <Mail size={14} className="text-slate-300 shrink-0" />
                    <span>-</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
}
