import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import {
  Presentation,
  Video,
  Monitor,
  Briefcase,
  Mic,
  Cpu,
  User,
  GraduationCap,
  Code,
  Users,
  Lightbulb,
  UserCheck,
  BookOpen,
  RotateCcw,
  Sparkles
} from "lucide-react";

// Card Data Array containing all 14 Innovation Cards with exact text from reference image
const INNOVATIONS = [
  {
    id: "ppt",
    title: "PowerPoint Presentation",
    icon: Presentation,
    description:
      "Powerpoint presentations are prepared for each subject hence faculty can teach effectively and efficiently. Students access the information through google classrooms and online moodle server at any time anywhere as per their convenience.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-blue-50 to-indigo-100",
    accentColor: "text-blue-600"
  },
  {
    id: "videos",
    title: "Videos",
    icon: Video,
    description:
      "Faculty produce videos for students and share them on their own YouTube channels as well as Google Classroom. This enables learning to take place at any time and in any location online.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-indigo-50 to-blue-100",
    accentColor: "text-indigo-600"
  },
  {
    id: "simulation",
    title: "Simulation Software",
    icon: Monitor,
    description:
      "Simulation software are used for better understanding as well as visualization of the concepts in some of the subjects. NS2, wireshark, DVWA, Netcat, and other simulation applications are used in networking and security subjects. The GNU 8085 simulator is used in microprocessors to visualize their implementation.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-blue-100 to-sky-100",
    accentColor: "text-blue-700"
  },
  {
    id: "projects",
    title: "Mini and Major Technical Project",
    icon: Briefcase,
    description:
      "Mini and major technical projects are offered to students so as to enhance their technical skill as well as to expose them to practical training. These also enable employers to identify students as per their technical skills.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-[#EEF2FF] to-[#DBEAFE]",
    accentColor: "text-blue-600"
  },
  {
    id: "expert-talk",
    title: "Expert Talk",
    icon: Mic,
    description:
      "Expert talks by experienced academicians as well as industrialists are organized by the department in various subjects that gives an extensive educational experience to students and also gives enough exposure to students regarding real world life experiences.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-[#F0F5FF] to-[#E0E7FF]",
    accentColor: "text-blue-700"
  },
  {
    id: "ict",
    title: "ICT usage",
    icon: Cpu,
    isBulletList: true,
    bulletPoints: [
      "The faculty uses multimedia in the form of LCD projector and speaker to distribute content to students.",
      "Students are taught how to use hardware such as Arduino and Raspberry Pi to complete various mini IoT projects.",
      "Students are acclimatized with various software like Microsoft EXCEL, Latex, C Programme, AutoCAD, Estimator, GIS, Midas Civil, STUD etc.",
      "Every faculty member uses ICT resources to store subject-related materials."
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-[#EEF2FF] to-[#DCE7FE]",
    accentColor: "text-blue-600"
  },
  {
    id: "personality",
    title: "Personality Development for Soft Skills",
    icon: User,
    paragraphs: [
      "In any job domain, any area, a student's personality is the first thing that is noticed during a job interview. In today's world, maintaining a positive personality is important for success.",
      "We teach and encourage students to improve their personalities through the integrated contributors personality development course (IPDC), which polishes student's presentation, communication skills and prepares them for a successful career ahead."
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-[#F0F5FF] to-[#E0E7FF]",
    accentColor: "text-blue-600"
  },
  {
    id: "mooc",
    title: "Massive Open Online Course (MOOC) Mentor",
    icon: GraduationCap,
    description:
      "Students are encouraged to take NPTEL courses, and some of our faculty members act as mentors to clarify their technical concepts and help them to solve their assignments before due time. Students are also encouraged to learn from Coursera, Edx, Udemy etc.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-[#EEF2FF] to-[#E0E7FF]",
    accentColor: "text-blue-700"
  },
  {
    id: "hackathon",
    title: "Hackathon Mentor",
    icon: Code,
    description:
      "Under the supervision of faculty members, students are encouraged to participate in coding competitions such as the Smart India Hackathon and the Gujarat Industrial Hackathon.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-[#EFF6FF] to-[#DBEAFE]",
    accentColor: "text-blue-600"
  },
  {
    id: "workshops",
    title: "Workshops",
    icon: Users,
    description:
      "Workshops are organized with the aid of teaching and industry experts to provide prerequisite knowledge as well as advanced knowledge in the topic.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-[#EEF2FF] to-[#E0E7FF]",
    accentColor: "text-blue-700"
  },
  {
    id: "design-thinking",
    title: "Design Thinking to Optimize Student Learning",
    icon: Lightbulb,
    description:
      "Students are encouraged to take innovative and practically applicable problems as a part of their Design Engineering subject where they visit various sites in their surroundings, identify various kinds of problems faced by common man or identify scope of improvement in various kind of existing professional projects, develop understanding into the problem by referring through related literatures and interact with faculty members, various processes like reverse engineering and brainstorming session in the group are carried out where individual students are encouraged to understand each components of the problem and try to improvise and after going through each pros and cons the most suitable solution is accepted. This whole exercise enables the students to identify problems and to provide an optimal and acceptable solution.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-[#F0F5FF] to-[#E0E7FF]",
    accentColor: "text-amber-500"
  },
  {
    id: "focused-group",
    title: "Focused Group Study",
    icon: UserCheck,
    description:
      "Specific topics are assigned to different groups of students, comprising around five students; they are encouraged to present their topics by incorporating not only text book contents but also real scenarios. They are made to make interesting and attractive presentations by using various multimedia tools. They answer various questions asked by other students and faculty members and others are allowed to give constructive suggestions. These exercises not only make learning interesting but varied topics are covered effectively and in a short duration of time. Also, this develops skill in the students related to presenting their work, widens their thought processes and instills confidence in them which goes a long way in their life.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-[#EEF2FF] to-[#E0E7FF]",
    accentColor: "text-blue-600"
  },
  {
    id: "problem-based",
    title: "Problem based learning - Student-directed learning",
    icon: BookOpen,
    description:
      "In addition to theory taught by the teachers in the class, students are made to solve problems related to application of fundamentals of relevant topics in the form of Open-ended problems in the majority of subjects. In this process students develop a broader understanding about the topics and their applicability in the real world.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-[#EFF6FF] to-[#DBEAFE]",
    accentColor: "text-blue-700"
  },
  {
    id: "flipped-classroom",
    title: "Flipped classroom",
    icon: RotateCcw,
    description:
      "The concept of flipped classroom is used in enabling the students to gain knowledge about certain topics in advance and come prepared to the class. The teacher makes the students go through lecture videos available online, NPTEL lectures, PPTs on specific topics in advance at home so that the students come in the class well prepared with queries about the topics which are being sorted out in the class. As a result, the students become responsible, have meaningful interaction with each other and the teacher and give constructive feedback. This process helps students gain in-depth knowledge beyond syllabus and also guides them to choose postgraduate studies.",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=800&auto=format&fit=crop",
    fallbackBg: "from-[#EEF2FF] to-[#E0E7FF]",
    accentColor: "text-blue-600"
  }
];

export default function InnovationsPage() {
  return (
    <SubPageLayout
      title="Innovations in Teaching & Learning"
      subtitle="Pedagogical Methodologies, ICT Tools & Modern Student-Centric Learning Practices"
      category="academics"
      activeItemLabel="Innovations in Teaching & Learning"
    >
      <div className="max-w-7xl mx-auto space-y-6 py-2">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#0F1E36] via-[#1D3557] to-[#1E40AF] rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wide text-blue-200 uppercase">
              <Sparkles size={14} className="text-amber-300" />
              Academic Excellence
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white">
              Innovative Pedagogical Practices
            </h2>
            <p className="text-blue-100/90 font-sans text-sm sm:text-base leading-relaxed">
              At C. K. Pithawalla College of Engineering and Technology, our faculty members utilize modern ICT resources, interactive simulations, design engineering concepts, and flipped classroom models to deliver industry-relevant education.
            </p>
          </div>
          
          <div className="shrink-0 relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center min-w-[180px]">
            <span className="block text-3xl font-extrabold text-amber-300 font-serif">14+</span>
            <span className="text-xs uppercase tracking-wider text-blue-100 font-medium">Core Pedagogies</span>
          </div>
        </div>

        {/* 2-COLUMN GRID OF INNOVATION CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {INNOVATIONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row overflow-hidden relative group hover:border-blue-300/80"
              >
                {/* LEFT SECTION: IMAGE CONTAINER WITH FLOATING BADGE */}
                <div className="sm:w-2/5 shrink-0 relative bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] p-4 flex items-center justify-center min-h-[180px] sm:min-h-[220px]">
                  
                  {/* Floating Circular White Badge with Icon */}
                  <div className="absolute top-3 left-3 z-20 w-11 h-11 rounded-full bg-white text-[#1D4ED8] shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} strokeWidth={2.2} />
                  </div>

                  {/* Image Card Container */}
                  <div className="w-full h-full min-h-[150px] rounded-2xl overflow-hidden relative shadow-inner border border-white/60">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback if network image has loading issue
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    
                    {/* Soft gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* RIGHT SECTION: TEXT CONTENT */}
                <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-center space-y-2.5">
                  <h3 className="font-serif font-bold text-[#0F1E36] text-lg sm:text-xl leading-snug group-hover:text-[#1D4ED8] transition-colors">
                    {item.title}
                  </h3>

                  {/* Bullet points for ICT usage */}
                  {item.isBulletList && item.bulletPoints ? (
                    <ul className="space-y-1.5 text-slate-600 font-sans text-xs sm:text-[13px] leading-relaxed pt-1">
                      {item.bulletPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0 mt-1.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  ) : item.paragraphs ? (
                    <div className="space-y-2 text-slate-600 font-sans text-xs sm:text-[13px] leading-relaxed">
                      {item.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-600 font-sans text-xs sm:text-[13px] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </SubPageLayout>
  );
}
