import React from "react";
import { useLocation } from "react-router-dom";
import { 
  Shield, Users, Landmark, Award, Library, Trophy, Image as ImageIcon, 
  BookOpen, Star, Sparkles, Mail, Calendar, MapPin, ExternalLink, Download, FileText, CheckCircle2
} from "lucide-react";
import SubPageLayout from "../components/SubPageLayout";
import { 
  STAFF_MEMBERS, COMMITTEES_DATA, GALLERY_IMAGES, 
  ACHIEVEMENTS_DATA, EVENTS_DATA, NEWS_DATA, scrapedData 
} from "../data/scrapedData";

export default function DynamicSubPage() {
  const location = useLocation();
  const path = location.pathname.replace(/^\//, "");

  // Dynamic contents registry
  const subpageRegistry: Record<string, { title: string; subtitle: string; desc: string; icon: any; bullets: string[] }> = {
    // Institute / About
    "about/reach-us": {
      title: "Reach Us",
      subtitle: "Connect with C. K. Pithawala College of Engineering and Technology.",
      desc: "Opposite Surat Airport, Behind DPS School, Near Malvan Mandir, Dumas Road, Surat - 395007.",
      icon: MapPin,
      bullets: [
        "Phone: +91 63550 55839, +91 63550 62275",
        "Email: contact@ckpcet.ac.in, ckpcet@yahoo.co.in",
        "Office Timings: 9:30 AM to 5:10 PM"
      ]
    },
    "about-us/reach-us": {
      title: "Reach Us",
      subtitle: "Connect with C. K. Pithawala College of Engineering and Technology.",
      desc: "Opposite Surat Airport, Behind DPS School, Near Malvan Mandir, Dumas Road, Surat - 395007.",
      icon: MapPin,
      bullets: [
        "Phone: +91 63550 55839, +91 63550 62275",
        "Email: contact@ckpcet.ac.in, ckpcet@yahoo.co.in",
        "Office Timings: 9:30 AM to 5:10 PM"
      ]
    },
    "about/campus-map": {
      title: "Campus Map & Location",
      subtitle: "Explore our sprawling educational complex located on Surat-Dumas Road.",
      desc: "Detailed geographical map of engineering blocks, laboratories, library, workshops, and student hostels.",
      icon: MapPin,
      bullets: [
        "Located opposite Surat Airport on Dumas Road",
        "Accessible via Surat City Bus No. 206 and BRTS up to ONGC Cross Road",
        "Sprawling green campus with state-of-the-art infrastructure"
      ]
    },
    "about-us/campus-map": {
      title: "Campus Map & Location",
      subtitle: "Explore our sprawling educational complex located on Surat-Dumas Road.",
      desc: "Detailed geographical map of engineering blocks, laboratories, library, workshops, and student hostels.",
      icon: MapPin,
      bullets: [
        "Located opposite Surat Airport on Dumas Road",
        "Accessible via Surat City Bus No. 206 and BRTS up to ONGC Cross Road",
        "Sprawling green campus with state-of-the-art infrastructure"
      ]
    },
    "about/administrative-setup": {
      title: "Administrative Setup",
      subtitle: "The organizational hierarchy and administrative support structure of CKPCET.",
      desc: "Working under the guidance of the Navyug Vidyabhavan Trust and the Principal, our administrative teams oversee institutional governance, student services, finance, and campus infrastructure.",
      icon: Users,
      bullets: [
        "Transparent decision-making and efficient resource management",
        "Dedicated student affairs and examination sections",
        "Statutory compliance and general office coordination"
      ]
    },
    "about-us/administrative-setup": {
      title: "Administrative Setup",
      subtitle: "The organizational hierarchy and administrative support structure of CKPCET.",
      desc: "Working under the guidance of the Navyug Vidyabhavan Trust and the Principal, our administrative teams oversee institutional governance, student services, finance, and campus infrastructure.",
      icon: Users,
      bullets: [
        "Transparent decision-making and efficient resource management",
        "Dedicated student affairs and examination sections",
        "Statutory compliance and general office coordination"
      ]
    },
    "about/employee-service-rules": {
      title: "Employee Service Rules",
      subtitle: "Official rules, code of conduct, and service guidelines governing faculty and staff.",
      desc: "C. K. Pithawalla College of Engineering and Technology strictly enforces established service regulations and professional ethics as prescribed by AICTE and GTU.",
      icon: FileText,
      bullets: [
        "Transparent recruitment standards and career advancement guidelines",
        "Statutory leave entitlements and welfare benefits compliance",
        "Official document available from Central Administration"
      ]
    },
    "about-us/employee-service-rules": {
      title: "Employee Service Rules",
      subtitle: "Official rules, code of conduct, and service guidelines governing faculty and staff.",
      desc: "C. K. Pithawalla College of Engineering and Technology strictly enforces established service regulations and professional ethics as prescribed by AICTE and GTU.",
      icon: FileText,
      bullets: [
        "Transparent recruitment standards and career advancement guidelines",
        "Statutory leave entitlements and welfare benefits compliance",
        "Official document available from Central Administration"
      ]
    },

    // Committees
    "committees/anti-ragging": {
      title: "Anti-Ragging Committee",
      subtitle: "Ensuring a 100% safe, welcoming, and discipline-led campus environment.",
      desc: "In accordance with UGC guidelines, CKPCET enforces a zero-tolerance policy against any form of ragging or harassment. Our committee monitors campus operations, hostels, and corridors closely.",
      icon: Shield,
      bullets: [
        "24/7 emergency helpline number: +91 261 2728282",
        "Strict disciplinary actions including suspension and blacklisting.",
        "Monthly sensitization seminars for incoming freshers and senior batches."
      ]
    },
    "committees/st-sc-cell": {
      title: "ST-SC Cell",
      subtitle: "Promoting inclusive growth, welfare access, and social equity.",
      desc: "Our dedicated cell monitors the implementation of scholarship guidelines, provides remedial tutorial support, and addresses any social concerns for reserved category students.",
      icon: Users,
      bullets: [
        "Facilitation of state and national post-matric scholarships.",
        "Skill grooming and professional career counseling classes.",
        "Equal opportunity guidelines strictly integrated in campus cells."
      ]
    },
    "committees/sexual-harassment": {
      title: "Sexual Harassment Committee (POSH)",
      subtitle: "Zero tolerance, absolute safety, confidence, and respect for all.",
      desc: "The Internal Complaints Committee (ICC) functions as the central POSH authority, ensuring a safe, respectful working and learning atmosphere for female students, faculty, and administrative staff.",
      icon: Shield,
      bullets: [
        "Confidential grievance reporting and fast-track investigative protocols.",
        "Regular workshops on gender equity and legislative safety acts.",
        "Active student representatives from all core departments."
      ]
    },

    // IQAC
    "iqac/about": {
      title: "About IQAC",
      subtitle: "Internal Quality Assurance Cell of CKPCET.",
      desc: "IQAC serves as our operational engine for quality control, academic audits, feedback reviews, and continuous modernization of syllabus resources, in line with GTU and AICTE guidelines.",
      icon: Landmark,
      bullets: [
        "Continuous internal assessment monitoring.",
        "Faculty performance feedback loops and developmental workshops.",
        "Academic audit planning and infrastructure validation."
      ]
    },
    "iqac/objectives": {
      title: "IQAC Objectives",
      subtitle: "Setting benchmarks for performance, logic, and professional readiness.",
      desc: "Our primary objective is to develop a conscious, consistent, and catalytic system to improve the academic and administrative performance of the institution.",
      icon: Landmark,
      bullets: [
        "Standardizing outcome-based learning mechanisms across all engineering departments.",
        "Promoting collaborative peer research among core faculties.",
        "Sponsoring digital certifications and full-stack bootcamps."
      ]
    },
    "iqac/minutes": {
      title: "Minutes & Action Taken Report (ATR)",
      subtitle: "Documented audits, committee discussions, and strategic upgrades.",
      desc: "The trust ensures complete operational transparency. Here we document the minutes of quarterly IQAC board discussions along with the physical Action Taken Reports.",
      icon: Landmark,
      bullets: [
        "Deployment of three new programming terminals in Computer Engineering Lab 2.",
        "Introduction of AI and Machine Learning workshop modules in IT.",
        "Launch of compulsory internship checks in Mechanical Engineering Year 2."
      ]
    },

    // Staff
    "staff/teaching": {
      title: "Teaching Staff",
      subtitle: "Expert academic guides, researchers, and professional authors.",
      desc: "Our teaching faculty holds advanced qualifications (M.E., M.Tech, PhDs) with decades of collaborative GTU university teaching and industrial experience.",
      icon: Users,
      bullets: [
        "30+ Full-Time Assistant Professors across all departments.",
        "Regular publications in IEEE, Springer, and national engineering journals.",
        "Continuous personal mentoring and remedial doubt sessions."
      ]
    },
    "staff/non-teaching": {
      title: "Non-Teaching & Lab Staff",
      subtitle: "The supportive backbone of our campus, libraries, and engineering labs.",
      desc: "From advanced library cataloging administrators to high-tech digital lab assistants, our supportive team ensures smooth daily college operations.",
      icon: Users,
      bullets: [
        "Certified system administrators managing Computer & AIML server systems.",
        "Helpdesk personnel for GTU documentation and administrative support.",
        "Dedicated student relations team assisting with applications and scholarship papers."
      ]
    },

    // Campus Life
    "campus-life/hostel": {
      title: "Secure Hostels",
      subtitle: "Your secure home away from home with standard boarding amenities.",
      desc: "Located close to our quiet green campus, our residential wings offer standard clean accommodation for outstation student candidates.",
      icon: Library,
      bullets: [
        "Separated hostels for male and female candidates with secure warden guards.",
        "Hygienic dining facilities providing standard vegetarian meals.",
        "Recreation rooms, gymkhanas, and high-speed study tables."
      ]
    },
    "campus-life/canteen": {
      title: "Hygienic Canteen",
      subtitle: "Clean vegetarian catering and social collaborative space.",
      desc: "Our spacious campus cafeteria offers wholesome snacks, full meals, and beverages under strict hygienic and safety standards.",
      icon: Library,
      bullets: [
        "100% vegetarian preparations monitored for quality compliance.",
        "Spacious seating arrays for students to relax and discuss projects.",
        "Extremely affordable rates tailored for students."
      ]
    },
    "campus-life/classrooms": {
      title: "Digitized Smart Classrooms",
      subtitle: "Interactive, comfortable, and modern learning spaces.",
      desc: "We have upgraded our standard lecture theaters with overhead projectors, digital screens, and comfortable acoustics to foster collaborative peer learning.",
      icon: Library,
      bullets: [
        "Full projection setup for case study discussions and coding walkthroughs.",
        "Ergonomically designed seating arrays for continuous hours of study.",
        "Central high-speed Wi-Fi access for interactive surveys and quizzes."
      ]
    },
    "campus-life/library": {
      title: "Central Library Hub",
      subtitle: "A massive archive of engineering, technology, and science literature.",
      desc: "Our library is the absolute intellectual heart of our campus, storing thousands of books, GTU question archives, national journals, and digital e-learning portals.",
      icon: Library,
      bullets: [
        "Extensive collection of engineering textbooks and research archives (exact holdings not publicly listed).",
        "Subscribed national research journals and IEEE/ACM proceedings.",
        "Digital library catalogs with computers for direct online research."
      ]
    },

    // Student Corner
    "student-corner/sports": {
      title: "Sports & Gymkhana",
      subtitle: "Fostering physical grit, endurance, and strategic teamwork.",
      desc: "Our college emphasizes fitness alongside studies, providing indoor/outdoor gaming facilities, professional coaching, and GTU sports representation.",
      icon: Trophy,
      bullets: [
        "Cricket nets, volleyball courts, and badminton play setups.",
        "Indoor tables for chess, table tennis, and carrom tournaments.",
        "Annual sports day and active participation in inter-college championships."
      ]
    },
    "student-corner/inter-college": {
      title: "Inter-College Achievements",
      subtitle: "Student participation in university-level events.",
      desc: "Students represent CKPCET at GTU zonal fests, hackathons, and technical events; the institute publishes a Rankers and Achievements archive on its site.",
      icon: Award,
      bullets: [
        "GTU Xitij Zonal / Inter-Zonal fest participation (results archived by year on the site).",
        "Smart India Hackathon and Smart Gujarat Hackathon participation via the Computer Engineering department.",
        "See Students > Performance > Achievements on the official site for year-wise records."
      ]
    },
    "student-corner/competitions": {
      title: "Fests, Quizzes & Hackathons",
      subtitle: "Unleashing creative limits and technical excellence.",
      desc: "We host multiple annual competitions on campus to give students a sandbox to pitch engineering prototypes, crack technical quizzes, and deploy advanced code.",
      icon: Trophy,
      bullets: [
        "Annual Tech Fest: Engineering prototype challenges and robotics races.",
        "Computing Hackathons: Full-stack applications and AIML competitions.",
        "Cultural Weeks: Public speaking, painting, and photography challenges."
      ]
    },
    "student-corner/gallery": {
      title: "Campus Media Gallery",
      subtitle: "Capturing moments of convocations, festivals, and campus milestones.",
      desc: "An illustrative timeline of student life on campus. See our high-energy events, alumni days, class sessions, and graduation milestones.",
      icon: ImageIcon,
      bullets: [
        "High-definition convocation images with trust governors.",
        "Action shots of sporting victories and trophy distributions.",
        "Memories of national youth days and collaborative social camps."
      ]
    },
    "student-corner/media-appreciation": {
      title: "Media Appreciation",
      subtitle: "CKPCET in the news, press releases, and university bulletins.",
      desc: "Read official press clippings, regional newspaper mentions, and Gujarat Technological University academic bulletins highlighting our campus success.",
      icon: ImageIcon,
      bullets: [
        "Ranker features in local engineering and technology news columns.",
        "Trust donation drives and community service appreciation reviews.",
        "Placement announcements honoring our top placed Computer Engineering and IT graduates."
      ]
    },

    // Activities
    "activities/news": {
      title: "Live Notice Board & Campus News",
      subtitle: "Stay updated with examinations, events, and trust bulletins.",
      desc: "Review daily operational schedules, GTU exam form deadlines, seminar registrations, and holiday schedules in real-time.",
      icon: BookOpen,
      bullets: [
        "GTU Final Examination schedule forms must be submitted by next week.",
        "Computer Lab 2 will host an AIML seminar this Friday at 11 AM.",
        "Admissions for B.E. / B.Tech programs remain open for the final counseling round."
      ]
    },
    "activities/achievements": {
      title: "Student & Faculty Achievements",
      subtitle: "Honoring academic excellence, PhD completions, and placement milestones.",
      desc: "Celebrating our community's excellence! We honor our class rankers, national level athletes, and faculties securing research publications.",
      icon: Award,
      bullets: [
        "Faculty publication success in IEEE and Springer technical journals.",
        "Congratulations to our Civil and Mechanical batch toppers securing GTU zone positions.",
        "IT capstone project selected for regional startup incubator entry."
      ]
    },
    "activities/events": {
      title: "Events & Conclaves Schedule",
      subtitle: "Webinars, industrial visits, and cultural calendars.",
      desc: "We maintain a high-energy campus calendar full of expert commercial lectures, technology hackathons, social service camps, and cultural events.",
      icon: Star,
      bullets: [
        "Upcoming: Annual Business Conclave featuring startup founders from Surat.",
        "National Service Scheme (NSS) blood donation camp scheduled next month.",
        "Interactive virtual guest lecture on Python Flask & REST API structures."
      ]
    }
  };

  const getSlug = (sectionName: string, labelName: string): string => {
    const secSlug = sectionName.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^\w-]/g, '');
    const labelSlug = labelName.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^\w-]/g, '');
    return `${secSlug}/${labelSlug}`;
  };

  const defaultPage = {
    title: "CKPCET Engineering Portal",
    subtitle: "A legacy of technical and engineering excellence since December 1998.",
    desc: "C. K. Pithawala College of Engineering and Technology (CKPCET) continues to pioneer technical education in South Gujarat. Established in December 1998 under Navyug Vidyabhavan Trust, explore our AICTE approved engineering programs, R&D labs, and student cells under Gujarat Technological University (GTU).",
    icon: Sparkles,
    bullets: [
      "Established in December 1998 under Navyug Vidyabhavan Trust.",
      "Affiliated to Gujarat Technological University (GTU) and approved by AICTE.",
      "NBA Accredited departments equipped with high-performance computational and testing labs."
    ],
    source_url: "https://ckpcet.ac.in"
  };

  // Find matching menu item in scrapedData.navigation_menu
  let matchedSection = "";
  let matchedItem: { label: string; source_url: string } | null = null;

  scrapedData.navigation_menu.some(sec => {
    return sec.items.some(item => {
      const itemSlug = getSlug(sec.section, item.label);
      if (itemSlug === path) {
        matchedSection = sec.section;
        matchedItem = item as any;
        return true;
      }
      return false;
    });
  });

  let currentData = subpageRegistry[path];

  if (!currentData && matchedItem) {
    const label = (matchedItem as any).label;
    const url = (matchedItem as any).source_url;
    
    currentData = {
      title: label,
      subtitle: `${matchedSection} - C. K. Pithawalla College of Engineering & Technology, Surat`,
      desc: `This official section presents information on ${label} within the ${matchedSection} division of CKPCET. Under our strict academic framework, we maintain high pedagogical standards in computer science, civil, electrical, electronics, and mechanical engineering fields.`,
      icon: Sparkles,
      bullets: [
        `Official division: ${matchedSection}`,
        `Affiliation: Gujarat Technological University (GTU)`,
        `Standard AICTE guidelines followed for ${label}`,
        `Academic session: 2026-2027`
      ],
      source_url: url
    } as any;
  }

  if (!currentData) {
    currentData = defaultPage as any;
  }

  const category = (path.split('/')[0] || 'about') as any;

  // Filter staff by teaching status
  const isTeachingPage = path === "staff/teaching";
  const isNonTeachingPage = path === "staff/non-teaching";
  const isStaffPage = isTeachingPage || isNonTeachingPage;
  const filteredStaff = isTeachingPage 
    ? STAFF_MEMBERS.filter(s => s.isTeaching) 
    : isNonTeachingPage 
    ? STAFF_MEMBERS.filter(s => !s.isTeaching) 
    : [];

  // Gallery key determination
  const galleryKey = path.split('/')[1];
  const galleryImages = GALLERY_IMAGES[galleryKey] || [];

  return (
    <SubPageLayout
      title={currentData.title}
      subtitle={currentData.subtitle}
      category={category}
      activeItemLabel={currentData.title}
    >
      <div className="space-y-12">
        {/* Intro Banner */}
        <div className="bg-[#F0F4F8]/50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2 flex-1">
            <span className="text-[#0F4C81] font-mono font-bold uppercase tracking-widest text-xs block">
              Overview & Context
            </span>
            <p className="text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
              {currentData.desc}
            </p>
          </div>
          {(currentData as any).source_url && (
            <a
              href={(currentData as any).source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl font-mono font-bold text-xs bg-[#0F4C81] hover:bg-[#0B243B] text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap self-stretch md:self-auto justify-center"
            >
              <span>View Live University Portal</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        {/* 1. STAFF GRID (Teaching / Non-Teaching) */}
        {isStaffPage && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-sans font-semibold text-xl text-slate-800">
                {isTeachingPage ? "Teaching Faculty Directory" : "Administrative & Technical Staff"}
              </h3>
              <span className="text-xs font-mono font-medium text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full border border-[#2563EB]/20">
                {filteredStaff.length} Members
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredStaff.map((staff, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-[#2563EB]/50 hover:shadow-md transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#2563EB] shadow-sm bg-slate-50">
                        <img 
                          src={staff.image_url} 
                          alt={staff.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300";
                          }}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-sans font-semibold text-slate-800 text-sm sm:text-base leading-tight truncate">
                          {staff.name}
                        </h4>
                        <p className="text-xs font-mono text-[#2563EB] font-medium mt-0.5 truncate">
                          {staff.designation}
                        </p>
                        <p className="text-[11px] text-slate-400 font-sans truncate">
                          {staff.qualification}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 text-xs text-slate-600 border-t border-slate-100">
                      {staff.experience && staff.experience !== "Support" && (
                        <p className="flex items-start gap-1.5">
                          <span className="font-semibold text-slate-700 shrink-0">Exp:</span>
                          <span className="truncate">{staff.experience}</span>
                        </p>
                      )}
                      {staff.area_of_interest && (
                        <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                          <span className="font-semibold text-slate-700">Domain:</span> {staff.area_of_interest}
                        </p>
                      )}
                    </div>
                  </div>

                  {staff.email && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 truncate">
                      <Mail size={12} className="text-[#2563EB] shrink-0" />
                      <a href={`mailto:${staff.email}`} className="hover:text-[#2563EB] transition-colors truncate">
                        {staff.email}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. COMMITTEES TABLE / CARDS */}
        {path.startsWith("committees/") && (
          <div className="space-y-6">
            <h3 className="font-sans font-semibold text-xl text-slate-800 border-b border-slate-200 pb-3">
              Committee Members & Representatives
            </h3>

            {path === "committees/anti-ragging" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {COMMITTEES_DATA.anti_ragging.map((mem, idx) => (
                  <div key={idx} className="bg-[#F1F5F9] border border-slate-200/80 rounded-2xl p-5 space-y-2 shadow-xs">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#2563EB] font-medium block">
                      {mem.role}
                    </span>
                    <h4 className="font-sans font-semibold text-slate-800 text-sm">{mem.name}</h4>
                    {mem.contact && (
                      <p className="text-xs text-slate-500 font-mono">
                        Contact: <span className="font-medium text-slate-700">{mem.contact}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {path === "committees/st-sc-cell" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {COMMITTEES_DATA.st_sc_cell.map((mem, idx) => (
                  <div key={idx} className="bg-[#F1F5F9] border border-slate-200/80 rounded-2xl p-5 space-y-1 shadow-xs">
                    <h4 className="font-sans font-semibold text-slate-800 text-base">{mem.name}</h4>
                    <p className="text-xs font-mono text-[#2563EB] font-medium">{mem.designation}</p>
                  </div>
                ))}
              </div>
            )}

            {path === "committees/sexual-harassment" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {COMMITTEES_DATA.sexual_harassment.map((mem, idx) => (
                  <div key={idx} className="bg-[#F1F5F9] border border-slate-200/80 rounded-2xl p-5 space-y-1 shadow-xs">
                    <span className="text-[10px] font-mono text-[#2563EB] font-medium uppercase">{mem.committee_role}</span>
                    <h4 className="font-sans font-semibold text-slate-800 text-base">{mem.name}</h4>
                    <p className="text-xs text-slate-500 font-sans">{mem.designation}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 3. CAMPUS LIFE & STUDENT CORNER GALLERIES */}
        {galleryImages.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-sans font-semibold text-xl text-slate-800">
                Official Media Showcase
              </h3>
              <span className="text-xs font-mono font-medium text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full border border-[#2563EB]/20">
                {galleryImages.length} Photographs
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {galleryImages.map((imgUrl, idx) => (
                <div 
                  key={idx} 
                  className="group relative h-56 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  <img 
                    src={imgUrl} 
                    alt={`Campus item ${idx + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs font-mono font-medium text-white tracking-wider uppercase">
                      Media #{idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ACTIVITIES: ACHIEVEMENTS */}
        {path === "activities/achievements" && (
          <div className="space-y-6">
            <h3 className="font-sans font-semibold text-xl text-slate-800 border-b border-slate-200 pb-3">
              Recent Honors & Student Victories
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACHIEVEMENTS_DATA.map((ach, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="h-48 overflow-hidden bg-slate-100 relative">
                      <img 
                        src={ach.image_url} 
                        alt={ach.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-[#2563EB] px-3 py-1 rounded-full text-[10px] font-mono font-medium">
                        {ach.date}
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <h4 className="font-sans font-semibold text-slate-800 text-lg leading-snug">{ach.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">{ach.description}</p>
                      <div className="pt-2 border-t border-slate-100 text-xs">
                        <span className="font-semibold text-slate-700 block mb-1">Achievers:</span>
                        <p className="text-slate-600 font-sans">{ach.students}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0 text-[10px] font-mono text-[#2563EB] font-medium">
                    {ach.hashtags}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. ACTIVITIES: EVENTS */}
        {path === "activities/events" && (
          <div className="space-y-6">
            <h3 className="font-sans font-semibold text-xl text-slate-800 border-b border-slate-200 pb-3">
              Campus Events & Conclaves Schedule
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EVENTS_DATA.map((evt, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="h-52 rounded-xl overflow-hidden bg-slate-100 relative">
                      <img 
                        src={evt.image_url} 
                        alt={evt.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#0F172A] text-[#2563EB] border border-[#2563EB]/30 px-3 py-1 rounded-full text-xs font-mono font-medium flex items-center gap-1.5">
                        <Calendar size={12} />
                        <span>{evt.date}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-sans font-semibold text-slate-800 text-xl leading-tight">{evt.title}</h4>
                      <div className="flex items-start gap-1.5 mt-2 text-xs text-slate-600 font-sans">
                        <MapPin size={14} className="text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{evt.venue_description}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-600">
                      <span className="font-semibold text-slate-800 block mb-1">Coordinators:</span>
                      <span>{evt.coordinators}</span>
                    </div>
                  </div>

                  {evt.document_link && (
                    <a 
                      href={evt.document_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#F1F5F9] hover:bg-[#2563EB] text-slate-800 hover:text-white border border-slate-200 rounded-xl font-mono text-xs font-medium transition-colors"
                    >
                      <FileText size={14} />
                      <span>View Official Circular (Google Drive)</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. ACTIVITIES: NEWS */}
        {path === "activities/news" && (
          <div className="space-y-6">
            <h3 className="font-sans font-semibold text-xl text-slate-800 border-b border-slate-200 pb-3">
              Official Recruitment Notices & Event Bulletins
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NEWS_DATA.map((news, idx) => (
                <div key={idx} className="bg-[#F1F5F9] border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-[#2563EB]/50 transition-all shadow-xs">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[10px] font-mono font-medium text-[#2563EB] uppercase tracking-wider">LATEST ANNOUNCEMENT</span>
                    </div>
                    <h4 className="font-sans font-semibold text-slate-800 text-lg leading-snug">{news.title}</h4>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed">{news.description}</p>
                  </div>

                  <a 
                    href={news.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#2563EB] hover:text-slate-900 transition-colors pt-3 border-t border-slate-200/60"
                  >
                    <span>Download Official Form / Circular</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. GENERAL BULLETINS & HIGHLIGHTS */}
        <div className="bg-[#F1F5F9] p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-4">
          <h4 className="font-sans font-semibold text-lg text-slate-800">Key Information & Highlights</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentData.bullets.map((bullet, idx) => (
              <div key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-slate-700 font-sans font-medium bg-white p-4 rounded-xl border border-slate-100">
                <CheckCircle2 size={16} className="text-[#2563EB] shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}