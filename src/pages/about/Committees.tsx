import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { 
  Users, 
  ArrowLeft, 
  ShieldCheck, 
  Award, 
  Calendar, 
  BookOpen, 
  Coins, 
  Sparkles, 
  FileText, 
  Heart, 
  ShoppingCart, 
  Clock, 
  Home, 
  UserCheck,
  ChevronRight,
  Building2,
  CheckCircle2
} from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

export interface Committee {
  id: string;
  name: string;
  description: string;
  icon: any;
  keyResponsibilities: string[];
  members: Array<{ name: string; role: string }>;
}

export const COMMITTEES_LIST: Committee[] = [
  {
    id: "academic-council",
    name: "Academic Council",
    description: "Oversees academic policies, curriculum integration, and educational standards of the institution under GTU and AICTE guidelines.",
    icon: UserCheck,
    keyResponsibilities: [
      "Review and monitor academic calendars and syllabus execution.",
      "Evaluate student performance metrics and formulate remedial coaching models.",
      "Recommend innovative pedagogical tools and research-oriented teaching methodologies."
    ],
    members: [
      { name: "Dr. Ami T. Choksi", role: "Chairperson / Principal" },
      { name: "Dr. Pallavi S. Ghodape", role: "Member Secretary" },
      { name: "All Academic HODs", role: "Committee Members" }
    ]
  },
  {
    id: "co-curricular",
    name: "Co-Curricular Activities",
    description: "Plans, coordinates, and executes student technical festivals, hackathons, and cultural events to enhance professional competence.",
    icon: Award,
    keyResponsibilities: [
      "Organize annual tech-fests, student hackathons, and cultural weeks.",
      "Oversee active student clubs (Music, Dance, Drama, Fine Arts, Photography).",
      "Coordinate university-level youth festival representations (e.g., GTU Xitij)."
    ],
    members: [
      { name: "Prof. Harshad C. Patel", role: "Convener" },
      { name: "Prof. Nehal D. Shah", role: "Co-Convener" },
      { name: "Department Coordinators", role: "Members" }
    ]
  },
  {
    id: "finance",
    name: "Finance Committee",
    description: "Manages annual budgets, equipment procurement funding, development grants, and fiscal transparency.",
    icon: Coins,
    keyResponsibilities: [
      "Prepare and review the institute's annual operating and capital budgets.",
      "Authorize funding allocations for developmental grants and laboratory equipment.",
      "Coordinate internal and external audit reviews with the parent trust."
    ],
    members: [
      { name: "Shri C. K. Pithawalla", role: "President, Navyug Trust" },
      { name: "Dr. Ami T. Choksi", role: "Principal / Head of Institution" },
      { name: "Shri J. M. Patel", role: "Trust Account Officer" }
    ]
  },
  {
    id: "innovation-council",
    name: "Innovation Council",
    description: "Fosters startup ideas, design prototypes, patents, and entrepreneurship development on campus.",
    icon: Sparkles,
    keyResponsibilities: [
      "Drive the Ministry of Education's Institution's Innovation Council (IIC) guidelines on campus.",
      "Organize design-thinking and patenting workshops for senior batches.",
      "Facilitate regional startup incubator access and prototype funding."
    ],
    members: [
      { name: "Dr. Ami T. Choksi", role: "President" },
      { name: "Prof. Mitesh S. Patel", role: "IIC Convener" },
      { name: "Department R&D Guides", role: "Members" }
    ]
  },
  {
    id: "library",
    name: "Library Committee",
    description: "Manages textbook acquisitions, library catalogs, journal subscriptions, and digital e-learning portals.",
    icon: BookOpen,
    keyResponsibilities: [
      "Review department-wise reference book requirements and acquire fresh stock.",
      "Oversee subscription of national journals, IEEE/ACM digital access libraries.",
      "Formulate library access schedules, reading room protocols, and fine waivers."
    ],
    members: [
      { name: "Mrs. Varsha P. Shah", role: "Librarian" },
      { name: "Dr. Pallavi S. Ghodape", role: "Faculty In-Charge" },
      { name: "Department Student Reps", role: "Members" }
    ]
  },
  {
    id: "magazine",
    name: "Magazine Committee",
    description: "Curates and publishes the annual college magazine, showcasing student literature, drawings, and campus milestones.",
    icon: FileText,
    keyResponsibilities: [
      "Invite and edit student poetry, technical articles, and creative drawings.",
      "Summarize annual academic department achievement records for publication.",
      "Oversee print design and digital distribution of the college annual bulletin."
    ],
    members: [
      { name: "Prof. Sheetal S. Patel", role: "Chief Editor" },
      { name: "Prof. Jigisha J. Pathak", role: "Co-Editor" },
      { name: "Student Editorial Board", role: "Members" }
    ]
  },
  {
    id: "nirf",
    name: "NIRF Committee",
    description: "Coordinates institutional data gathering, indexing, and submissions for the National Institutional Ranking Framework.",
    icon: ShieldCheck,
    keyResponsibilities: [
      "Collate publication, placement, and infrastructure data across divisions.",
      "Ensure timely compilation and uploads to the National Institutional Ranking portal.",
      "Draft progressive improvement reports for the principal desk."
    ],
    members: [
      { name: "Dr. Ami T. Choksi", role: "Nodal Officer" },
      { name: "Dr. Pallavi S. Ghodape", role: "Coordinator" },
      { name: "All Department Heads", role: "Committee Members" }
    ]
  },
  {
    id: "nss-sankul",
    name: "NSS Sankul",
    description: "Organizes social welfare camps, blood donation drives, cleanliness rallies, and student-citizen community outreach.",
    icon: Heart,
    keyResponsibilities: [
      "Conduct annual NSS residential camps in surrounding rural locations.",
      "Organize health checkups, blood donation camps, and thalassemia screens.",
      "Engage students in national development campaigns and environmental drives."
    ],
    members: [
      { name: "Prof. Harshad C. Patel", role: "NSS Programme Officer" },
      { name: "Prof. Harshal R. Shah", role: "Assistant Officer" },
      { name: "NSS Student Volunteers", role: "Members" }
    ]
  },
  {
    id: "purchase-equipment",
    name: "Purchase/Equipment",
    description: "Reviews commercial tenders, equipment specifications, and bidding parameters for high-end laboratory resources.",
    icon: ShoppingCart,
    keyResponsibilities: [
      "Collate laboratory machinery and server requirement files from HODs.",
      "Invite and analyze competitive vendor quotations under Trust norms.",
      "Oversee post-installation verification and stock register entries."
    ],
    members: [
      { name: "Dr. Ami T. Choksi", role: "Chairman" },
      { name: "Shri J. M. Patel", role: "Trust Representative" },
      { name: "Requisitioning HOD", role: "Member" }
    ]
  },
  {
    id: "timetable",
    name: "Timetable Committee",
    description: "Formulates academic lecture rosters, lab mappings, and examination timelines across all semesters.",
    icon: Clock,
    keyResponsibilities: [
      "Map class-hours, lab sections, and tutorial divisions efficiently.",
      "Optimize faculty workloads in accordance with university frameworks.",
      "Release consolidated schedules before the commencement of semesters."
    ],
    members: [
      { name: "Prof. Jigisha J. Pathak", role: "Convener" },
      { name: "Department Timetable In-charges", role: "Members" }
    ]
  },
  {
    id: "nasha-mukti",
    name: "Nasha Mukti Hostel Committee",
    description: "Ensures a 100% substance-free, safe, and positive residential boarding environment on campus.",
    icon: Home,
    keyResponsibilities: [
      "Promote a healthy and substance-free lifestyle among hostellers.",
      "Conduct surprise rounds and safety inspection walks inside corridors.",
      "Coordinate wellness counseling and mental health support services."
    ],
    members: [
      { name: "Hostel Warden", role: "Convener" },
      { name: "Prof. Harshad C. Patel", role: "Faculty Advisor" },
      { name: "Hostel Student Monitors", role: "Members" }
    ]
  },
  {
    id: "abc-id",
    name: "ABC ID Committee",
    description: "Facilitates Academic Bank of Credits (ABC) ID generation, mapping, and integration for all enrolled students.",
    icon: FileText,
    keyResponsibilities: [
      "Support and guide students in creating ABC credentials on DigiLocker.",
      "Compile and map student ABC IDs against university enrollment figures.",
      "Submit consolidated databases to GTU for credit transfers."
    ],
    members: [
      { name: "Dr. Pallavi S. Ghodape", role: "In-Charge Coordinator" },
      { name: "Prof. Jigisha J. Pathak", role: "Assistant In-Charge" },
      { name: "Department Registrars", role: "Members" }
    ]
  }
];

export default function CommitteesPage() {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Find committee if slug exists
  const selectedCommittee = slug 
    ? COMMITTEES_LIST.find(c => c.id === slug || c.id === slug.toLowerCase())
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, location.pathname]);

  // Render single committee view if slug matches
  if (selectedCommittee) {
    const Icon = selectedCommittee.icon || Users;

    return (
      <SubPageLayout
        title={selectedCommittee.name}
        subtitle={selectedCommittee.description}
        category="committees"
        activeItemLabel={selectedCommittee.name}
      >
        <div className="space-y-10">
          {/* Top Switcher Bar for Committees */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Institutional Committees Directory:
              </span>
              <button
                onClick={() => navigate('/about/committees')}
                className="text-xs font-mono font-bold text-[#00509d] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View All 12 Committees</span>
                <ChevronRight size={12} />
              </button>
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {COMMITTEES_LIST.map((c) => {
                const isActive = c.id === selectedCommittee.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => navigate(`/about/committees/${c.id}`)}
                    className={`px-3 py-1.5 rounded-xl font-sans text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                      isActive 
                        ? 'bg-[#0B2545] text-white shadow-xs' 
                        : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200/60'
                    }`}
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Committee Card Details */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-8">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#0B2545]/10 flex items-center justify-center text-[#0B2545] shrink-0">
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#00509d] font-bold tracking-widest uppercase bg-[#00509d]/10 px-2.5 py-1 rounded-full inline-block mb-1">
                  Standing Committee
                </span>
                <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-800">
                  {selectedCommittee.name}
                </h2>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h3 className="font-sans font-bold text-base text-slate-800 flex items-center gap-2">
                <Building2 size={18} className="text-[#0B2545]" />
                <span>Committee Overview</span>
              </h3>
              <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-100">
                {selectedCommittee.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="space-y-3">
              <h3 className="font-sans font-bold text-base text-slate-800 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#00509d]" />
                <span>Key Responsibilities & Scope</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedCommittee.keyResponsibilities.map((resp, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/80 p-4 rounded-xl space-y-2">
                    <span className="w-6 h-6 rounded-full bg-[#00509d]/10 text-[#00509d] font-mono text-xs font-bold flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Members */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="font-sans font-bold text-base text-slate-800 flex items-center gap-2">
                <Users size={18} className="text-[#0B2545]" />
                <span>Committee Members & Convener</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {selectedCommittee.members.map((mem, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0B2545] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {mem.name.replace(/^(Dr\.|Prof\.|Shri|Mrs\.)\s*/, '').charAt(0)}
                    </div>
                    <div>
                      <span className="font-sans font-bold text-slate-800 text-sm block leading-snug">
                        {mem.name}
                      </span>
                      <span className="text-xs text-[#00509d] font-mono font-medium">
                        {mem.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SubPageLayout>
    );
  }

  // Fallback: Overview list of all 12 committees
  return (
    <SubPageLayout
      title="Institutional Committees"
      subtitle="Standing committees overseeing administrative operations, student development, welfare, and quality compliance at CKPCET."
      category="committees"
      activeItemLabel="Committees"
    >
      <div className="space-y-12">
        {/* Intro */}
        <div className="bg-[#0B2545]/5 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 flex-1">
              <span className="text-[#0B2545] font-mono font-bold uppercase tracking-widest text-xs block">
                Governance Structure
              </span>
              <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
                C. K. Pithawalla College of Engineering and Technology manages its continuous operations through a series of dedicated standing committees. Select any committee below to view its dedicated responsibilities and official members.
              </p>
            </div>
          </div>
        </div>

        {/* Grid of Committees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMMITTEES_LIST.map((committee) => {
            const Icon = committee.icon || Users;
            return (
              <div
                key={committee.id}
                onClick={() => navigate(`/about/committees/${committee.id}`)}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-[#00509d]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group relative"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0B2545]/10 group-hover:bg-[#0B2545] group-hover:text-white flex items-center justify-center text-[#0B2545] shrink-0 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-slate-800 group-hover:text-[#00509d] transition-colors">
                        {committee.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#00509d] font-bold tracking-widest uppercase">
                        Standing Committee
                      </span>
                    </div>
                  </div>

                  {/* Body Description */}
                  <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed">
                    {committee.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-[#00509d] group-hover:underline">
                  <span>View Dedicated Page</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SubPageLayout>
  );
}
