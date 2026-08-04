import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  UserCheck 
} from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

interface Committee {
  id: string;
  name: string;
  description: string;
  icon: any;
  keyResponsibilities: string[];
  members: Array<{ name: string; role: string }>;
}

const COMMITTEES_LIST: Committee[] = [
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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Highlight target briefly
          element.classList.add("ring-4", "ring-[#00509d]/30");
          setTimeout(() => {
            element.classList.remove("ring-4", "ring-[#00509d]/30");
          }, 2000);
        }, 300);
      }
    }
  }, [location.hash]);

  return (
    <SubPageLayout
      title="Institutional Committees"
      subtitle="Standing committees overseeing administrative operations, student development, welfare, and quality compliance at CKPCET."
      category="about"
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
                C. K. Pithawalla College of Engineering and Technology manages its continuous operations through a series of dedicated standing committees. These cells include experienced senior faculty members, trust management officers, and student representatives to ensure transparency, academic quality, safety, and operational excellence.
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
                id={committee.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-[#00509d]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between scroll-mt-20 relative"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-4 border-b border-slate-100 pb-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0B2545]/10 flex items-center justify-center text-[#0B2545] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-slate-800">
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

                  {/* Responsibilities */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Core Responsibilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-sans pl-1">
                      {committee.keyResponsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00509d] mt-1.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Committee Members list at bottom of card */}
                <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/70 p-3 rounded-xl">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono font-bold uppercase mb-2">
                    <Users size={12} className="text-[#0B2545]" />
                    <span>Committee Members:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {committee.members.map((mem, idx) => (
                      <div key={idx} className="bg-white border border-slate-100 p-2 rounded-lg">
                        <span className="font-sans font-semibold text-slate-700 block leading-tight truncate">
                          {mem.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {mem.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SubPageLayout>
  );
}
