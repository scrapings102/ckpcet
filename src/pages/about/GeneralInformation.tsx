import React, { useState, useEffect } from "react";
import { 
  Building2, 
  CheckCircle2, 
  Award, 
  Compass, 
  GraduationCap, 
  Home, 
  Trophy, 
  Bed, 
  Users, 
  Building, 
  BookOpen, 
  Landmark,
  ShieldCheck,
  Check,
  X,
  ArrowRight,
  Info,
  Sparkles,
  ExternalLink,
  MapPin
} from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";
import { cdn } from "../../utils/image";

interface ZoneData {
  id: string;
  title: string;
  subtitle: string;
  iconName: "GraduationCap" | "Home" | "Trophy" | "Bed";
  themeColor: "blue" | "amber";
  image: string;
  summary: string;
  description: string[];
  highlights: string[];
}

export default function GeneralInformation() {
  const [selectedZone, setSelectedZone] = useState<ZoneData | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedZone(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const engineeringBranches = [
    { left: "Civil Engineering", right: "Electronics & Communication Engineering" },
    { left: "Computer Engineering", right: "Information Technology" },
    { left: "Electrical Engineering", right: "Mechanical Engineering" },
  ];

  const trustInstitutions = [
    "Navyug Arts College",
    "Navyug Science College",
    "Navyug Commerce College",
    "Maniben Pithawala Industrial Training Institute",
    "C. K. Pithawala College of Engineering & Technology",
    "C. K. Pithawala Institute of Pharmaceutical Science & Research"
  ];

  const campusZones: ZoneData[] = [
    {
      id: "academic",
      title: "Academic Zone",
      subtitle: "Core Department Blocks, Laboratories & Workshops",
      iconName: "GraduationCap",
      themeColor: "blue",
      image: cdn("https://ckpcet.ac.in/img/home-page/video-section/25Hackathon.jpg", 1000, 85),
      summary: "On the right side of the central core, Academic Zone, comprising of Department buildings, laboratories and workshop is designed.",
      description: [
        "On the right side of the central core, Academic Zone, comprising of Department buildings, laboratories and workshop is designed. The zone consists of a utility building having basic facilities like Bank, Post office, Consumer store, PCO and eight department buildings. Four are for applied sciences and civil engineering which are taught in first year and second year courses and two department buildings are for proposed faculties applied for i.e. MCA and LT.",
        "All the department buildings are with stilt floor to be used as parking. Ample open spaces have been provided in order to fetch maximum amount of natural air and ventilation. Each department building will have four lecture halls for 60 students, four tutorial rooms, and departmental computer center, department library, seminar room, staff and ladies common room. All the rooms will have provision for audio presentation, computers and Internet connectivity. All departmental buildings, laboratories, workshops shall be with announcement system linked with administrative building. Provision of CCTV is also made."
      ],
      highlights: [
        "Dedicated Departmental Wings for CSE, EC, ME, CE, EE, and IT",
        "High-Speed Workstation Computer Labs & AI/ML Computing Terminals",
        "Central Heavy Engineering Workshop with Lathes, CNCs, and Testing Rigs",
        "Smart Interactive Audio-Visual Classrooms & Seminar Arenas",
        "AICTE & GTU Accredited Curriculum & Project Incubation Centers"
      ]
    },
    {
      id: "residential",
      title: "Residential Zone",
      subtitle: "Faculty Housing, Staff Quarters & Health Center",
      iconName: "Home",
      themeColor: "amber",
      image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/04.webp", 1000, 85),
      summary: "Comprising of Staff quarters, hostels and a Health center, the quarters will be equipped with modern amenities.",
      description: [
        "Comprising of Staff quarters, hostels and a Health center, the quarters will be equipped with modern amenities.",
        "Hostels will be two seated with attached toilet and a pantry. Warden's office, Central mess, Multipurpose room and parking will be provided for each hostel."
      ],
      highlights: [
        "Spacious Staff & Faculty Housing Quarters with Modern Amenities",
        "24/7 Primary Health Center with Resident Medical Support",
        "Uninterrupted Power Backup & Centralized Water Supply",
        "Peaceful Eco-Friendly Green Environs & Tree-Lined Avenues",
        "Proximity to Academic Core for Emergency & Administrative Convenience"
      ]
    },
    {
      id: "recreational",
      title: "Recreational Zone",
      subtitle: "Cricket Stadium, Athletic Grounds & Guest House",
      iconName: "Trophy",
      themeColor: "blue",
      image: "https://ckpcet.ac.in/img/resources/sports/facilities//02.jpg",
      summary: "Will comprise of Cricket stadium, Field track including football, Hockey ground, a guest house and a central water reservoir.",
      description: [
        "Will comprise of Cricket stadium, Field track including football, Hockey ground, a guesthouse and a central water reservoir. The rainwater of the entire campus will be fetched and collected into a central reservoir/lake. An attempt has been made to develop the campus as a 21 st century institute.",
        "Navyug Vidyabhavan Trust, Surat, the trust that was founded in 1965 with the sole objective of providing quality education to the students residing in this region, has entered into thirty-ninth year of its age this year. Under the careful naturing and attention received from the trustees over these thirty-nine years, the Trust has grown into a matured organization in the field of education gradually but systematically and it is currently managing following educational institutions successfully.:",
        "The trustee are fully aware of the rapid growth and advancement that has occurred in the field of Science and Technology over the period of last two decades all over the world, including India. The South Gujarat has also witnessed rapid industrial growth not only in the field of manufacturing of pharmaceuticals and fine chemicals but also in the field of the technical education in many branches of science. The positive approach of the Gujarat Government has encouraged many national and multinational pharmaceutical companies to shift their base from other states to Gujarat as their headquarters.",
        "In comparison to rate of growth of the pharmaceutical industry in South Gujarat, the number of educational institutions offering degree courses in Pharmacy have grown with snail's pace. In fact, till the academic year 2003-2004, there were only two pharmacy colleges, one at Bardoli and the other one at Vapi. Students residing in proper Surat city and aspiring for the degree course in Pharmacy, were naturally experiencing lot of inconveniences of daily traveling to go to these colleges since these colleges are situated at distant places from Surat city.",
        "Consideration by the trustees of the dire need of more educational institutions imparting technical education in proper Surat city has resulted in purchase of 100 acres of land near Malav Mandir, via Magdalla Port, Dumas. The campus is situated on the bank of the Tapi River. Besides having various buildings such as the office for Central Administraion, C.K.Pithawala College of Engineering and Technology,master of Computer Application, C.K.Pithawalla Institution of Management."
      ],
      highlights: [
        "Standard Turf Cricket Stadium & Outdoor Practice Nets",
        "Multi-Purpose Field Track for Football, Hockey, and Athletics",
        "Central Water Reservoir Enhancing Campus Microclimate",
        "Executive Guest House for Visiting Scholars & Delegates",
        "Indoor Gymkhana for Badminton, Table Tennis, and Chess"
      ]
    },
    {
      id: "hostel",
      title: "Hostel & Recreation",
      subtitle: "On-Campus Student Living & Daily Accommodation",
      iconName: "Bed",
      themeColor: "amber",
      image: "https://ckpcet.ac.in/img/resources/hostel/07.jpeg",
      summary: "To avoid the inconvenience caused to the students in daily traveling to and from the college, hostel accommodation is planned.",
      description: [
        "To avoid the inconvenience caused to the students in daily traveling to and from the college, hostel accommodation is planned.",
        "To support students residing far from the campus, the Hostel & Recreation zone provides secure, comfortable, and well-managed accommodation for boys and girls. Equipped with study lounges, high-speed Wi-Fi, hygienic mess dining, and recreational spaces, it ensures a vibrant community life."
      ],
      highlights: [
        "Separate Boys & Girls Hostel Buildings with Resident Wardens",
        "Hygienic Central Dining Mess Serving Balanced Meals",
        "High-Speed Wi-Fi & Quiet Night Study Arenas",
        "Biometric Access & 24x7 CCTV Security Monitoring",
        "Indoor Common Rooms with Recreation TV & Board Games"
      ]
    }
  ];

  const renderZoneIcon = (iconName: string, className: string = "") => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className={className} />;
      case "Home":
        return <Home className={className} />;
      case "Trophy":
        return <Trophy className={className} />;
      case "Bed":
        return <Bed className={className} />;
      default:
        return <Building className={className} />;
    }
  };

  return (
    <SubPageLayout
      title={
        <span className="font-serif font-bold">
          General <span className="text-[#D97706]">Information</span>
        </span>
      }
      subtitle="Comprehensive campus overview, architectural design philosophy, campus zoning, and managing trust profile."
      category="about"
      activeItemLabel="General Information"
    >
      <div className="space-y-10 text-slate-800 font-sans">

        {/* ── SECTION 1: GENERAL INFORMATION ── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 md:p-9 shadow-xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image: College Building with Green Lawn */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-xs relative min-h-[260px] sm:min-h-[320px] bg-slate-100">
              <img
                src={cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 1000, 90)}
                alt="C. K. Pithawalla College Campus"
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
            </div>

            {/* Right Details Content */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F1E36] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Landmark size={20} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1E36]">
                  General Information
                </h2>
              </div>

              {/* Text Description */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Navyug Vidyabhavan Trust, Surat has decided to construct C.K.Pithawalla College Of Engineering & Technology At R.S.no.937 of village Dumas, Surat.
                </p>
                <p>
                  The Said land was allotted to the trust by the Govt. of Gujarat vide its letter no. ACTST/ASHH. 2693/2000 Dated 30-11-2000. Total area of the land allotted is 100 acres i.e.404688.00 sq.Mt. The land is located on 24 Mt. wide road proposed by Surat Urban Development Authority in its Development plan.
                </p>
                <p className="font-semibold text-slate-800 pt-1">
                  At present degree courses are offered in following branches of Engineering:
                </p>
              </div>

              {/* Engineering Branches Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {engineeringBranches.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-[#D97706] text-white flex items-center justify-center shrink-0 text-[11px] font-bold shadow-2xs">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span>{item.left}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-[#D97706] text-white flex items-center justify-center shrink-0 text-[11px] font-bold shadow-2xs">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span>{item.right}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* AICTE Guideline Box */}
              <div className="bg-[#EFF6FF] border border-[#DBEAFE] rounded-xl p-4 flex items-center gap-3.5 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="w-10 h-10 rounded-full bg-[#0F1E36] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Award size={20} className="text-[#D97706]" />
                </div>
                <p className="leading-snug">
                  Keeping in view the above needs and guidelines suggested by AICTE(All India Council of Technical Education) the entire campus is designed by our office.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ── SECTION 2: DESIGN PHILOSOPHY ── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 md:p-9 shadow-xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Design Text */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="flex items-center gap-3 pb-1">
                <div className="w-10 h-10 rounded-full bg-[#0F1E36] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Compass size={20} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1E36]">
                  Design Philosophy
                </h2>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Depending upon the usage pattern the entire land has been divided into four zones. Entire campus has been designed on a basic grid of 1.45 Mts. Buildings are designed to resist wind and earthquake forces. The CRM grade reinforcing steel is used to ensure the desired life and performance of the buildings.
                </p>
                <p>
                  A central core in form of an ellipse as Administrative and services zone comprising of Administrative building, Central library, Central Auditorium and an Amphi theater. The administrative building will have office of the Principal, Register, board room, Academic Section, Accounts section, Offices for Estate engineer, Office for the Professor of training and placement. The upper floor comprises offices of Navyug Vidyabhavan Trust along with its board meeting / seminar hall, President's Office, Trustee's Office etc.
                </p>
                <p>
                  Library building is to accommodate more than 150000 books and a reading hall to accommodate nearly 300 persons at a time. It will have its separate seminar hall with audio video presentation facility.
                </p>
                <p>
                  Central auditorium will have seating capacity of 800 persons including stage, green rooms and huge platform for performing in Amphi Theater.
                </p>
              </div>

            </div>

            {/* Right Column: Library Photo */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-xs relative min-h-[280px] sm:min-h-[360px] bg-slate-100 self-stretch">
              <img
                src={cdn("https://ckpcet.ac.in/img/resources/library/01.jpg", 1000, 90)}
                alt="Central Library Interior"
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
            </div>

          </div>
        </div>

        {/* ── SECTION 3: CAMPUS ZONES ── */}
        <div className="space-y-6 pt-2">
          
          {/* Section Heading */}
          <div className="flex items-center justify-center gap-3 text-center py-2">
            <div className="w-10 h-10 rounded-full bg-[#0F1E36] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Building size={20} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F1E36]">
              Campus Zones
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusZones.map((zone) => (
              <div
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                {/* Accent Hover Bar */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 ${
                    zone.themeColor === "amber" ? "bg-[#D97706]" : "bg-[#0F1E36]"
                  } opacity-0 group-hover:opacity-100`} 
                />

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div 
                        className={`w-9 h-9 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs ${
                          zone.themeColor === "amber" ? "bg-[#D97706]" : "bg-[#0F1E36]"
                        }`}
                      >
                        {renderZoneIcon(zone.iconName, "w-4 h-4")}
                      </div>
                      <h3 className={`font-bold text-base sm:text-lg ${
                        zone.themeColor === "amber" ? "text-[#D97706]" : "text-[#0F1E36]"
                      }`}>
                        {zone.title}
                      </h3>
                    </div>

                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors bg-slate-100 group-hover:bg-blue-50 px-2 py-0.5 rounded-full shrink-0">
                      Explore
                    </span>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-slate-200 h-[150px] bg-slate-100 relative group-hover:brightness-105 transition-all">
                    <img
                      src={zone.image}
                      alt={zone.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                      <span className="text-[11px] font-semibold text-white flex items-center gap-1">
                        <Sparkles size={12} className="text-amber-400" />
                        Click to expand details
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {zone.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-semibold text-[#1D4ED8] group-hover:text-[#1E40AF]">
                  <span className="flex items-center gap-1">
                    <span>View Zone Details</span>
                  </span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

        </div>


        {/* ── SECTION 5: HOSTEL ACCOMMODATION AND RECREATION ── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Image: College Building Facade */}
            <div className="lg:col-span-3 rounded-xl overflow-hidden border border-slate-200 shadow-xs h-[180px] sm:h-[200px] w-full bg-slate-100">
              <img
                src={cdn("https://ckpcet.ac.in/img/home-page/video-section/01Entry_03.jpg", 600, 85)}
                alt="College Building Entrance"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Right Text Description */}
            <div className="lg:col-span-9 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#0F1E36] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Bed size={18} />
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0F1E36]">
                  Hostel Accommodation and Recreation
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                To avoid the inconvenience caused to the students in daily traveling to and from the college, particularly to those residing at far away places from the college, the Management is planning to build separate hostel for boys and girls in the campus itself. To provide recreation to the students residing in the campus, the trust have incorporated sports facilities such as football and cricket grounds. Facilities of indoor games will also be provided to the students by individual colleges situated within the campus.
              </p>
            </div>

          </div>
        </div>

        {/* ── ZONE DETAILS MODAL DIALOG ── */}
        {selectedZone && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setSelectedZone(null)}
          >
            <div 
              className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[85vh] sm:max-h-[90vh] flex flex-col relative my-auto animate-in zoom-in-95 duration-200 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Header Bar */}
              <div className="shrink-0 bg-white border-b border-slate-100 p-4 sm:p-5 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-xs ${
                    selectedZone.themeColor === "amber" ? "bg-[#D97706]" : "bg-[#0F1E36]"
                  }`}>
                    {renderZoneIcon(selectedZone.iconName, "w-5 h-5")}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0F1E36]">
                      {selectedZone.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {selectedZone.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedZone(null)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-2"
                  title="Close dialog"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body Content (Scrollable with min-h-0 for proper flexbox height constraint) */}
              <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-5 sm:p-7 space-y-6 overscroll-contain">
                
                {/* Zone Main Photo Banner */}
                <div className="rounded-xl overflow-hidden border border-slate-200 h-[200px] sm:h-[240px] bg-slate-100 relative shadow-inner shrink-0">
                  <img
                    src={selectedZone.image}
                    alt={selectedZone.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F1E36]/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                    <MapPin size={12} className="text-amber-400" />
                    <span>C.K. Pithawalla Campus Layout</span>
                  </div>
                </div>

                {/* Zone Description */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Overview & Layout
                  </h4>
                  <div className="space-y-3">
                    {Array.isArray(selectedZone.description) ? (
                      selectedZone.description.map((paragraph, idx) => (
                        <React.Fragment key={idx}>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                            {paragraph}
                          </p>
                          {selectedZone.id === "recreational" && idx === 1 && (
                            <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 space-y-3 my-3">
                              <h5 className="text-xs font-bold text-[#0F1E36] uppercase tracking-wider flex items-center gap-2">
                                <GraduationCap size={16} className="text-[#D97706]" />
                                <span>Managed Educational Institutions</span>
                              </h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {trustInstitutions.map((inst, instIdx) => (
                                  <div key={instIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-white border border-slate-200/80 rounded-lg p-2.5 shadow-2xs">
                                    <div className="w-5 h-5 rounded-full bg-[#D97706] text-white flex items-center justify-center shrink-0 text-[11px] font-bold shadow-2xs">
                                      <Check size={13} strokeWidth={3} />
                                    </div>
                                    <span>{inst}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </React.Fragment>
                      ))
                    ) : (
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {selectedZone.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Key Highlights & Facilities */}
                <div className="space-y-3 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Features & Facilities Included
                  </h4>
                  <div className="space-y-2">
                    {selectedZone.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-[#D97706]/15 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={13} strokeWidth={2.5} />
                        </div>
                        <span className="font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="shrink-0 bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex items-center justify-between z-10">
                <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                  Press <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-slate-300 rounded shadow-2xs">ESC</kbd> or click outside to close
                </span>
                <button
                  onClick={() => setSelectedZone(null)}
                  className="w-full sm:w-auto bg-[#0F1E36] hover:bg-[#1E3A8A] text-white font-bold text-xs px-6 py-2.5 rounded-lg transition-colors cursor-pointer ml-auto"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </SubPageLayout>
  );
}
