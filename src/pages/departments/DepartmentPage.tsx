import React from "react";
import { 
  Award, BookOpen, CheckCircle2, ChevronRight, GraduationCap, 
  Landmark, Lightbulb, ShieldCheck, Users, Cpu, Code, Building2, Wrench, Zap, Radio, Globe, Brain
} from "lucide-react";
import { DEPARTMENTS, Department } from "../../data/departments";
import SubPageLayout from "../../components/SubPageLayout";
import { cdn } from "../../utils/image";

interface DepartmentPageProps {
  deptKey: string;
}

const DEPT_IMAGES: Record<string, string> = {
  civil: cdn("https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&q=80&w=1200", 1200, 85),
  computer: cdn("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200", 1200, 85),
  electrical: cdn("https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200", 1200, 85),
  ecc: cdn("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200", 1200, 85),
  it: cdn("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200", 1200, 85),
  mechanical: cdn("https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=1200", 1200, 85),
  "applied-science": cdn("https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200", 1200, 85),
  aiml: cdn("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200", 1200, 85),
};

const DEPT_ICONS: Record<string, React.ElementType> = {
  civil: Building2,
  computer: Code,
  electrical: Zap,
  ecc: Radio,
  it: Globe,
  mechanical: Wrench,
  "applied-science": BookOpen,
  aiml: Brain,
};

const DEPT_SIDEBAR_LABELS: Record<string, string> = {
  civil: "Civil Engineering",
  computer: "Computer Engineering",
  electrical: "Electrical Engineering",
  ecc: "Electronics & Communication",
  it: "Information Technology",
  mechanical: "Mechanical Engineering",
  "applied-science": "Applied Science and Humanities",
  aiml: "AIML",
};

export default function DepartmentPage({ deptKey }: DepartmentPageProps) {
  const dept = DEPARTMENTS.find((d) => d.key === deptKey);

  if (!dept) {
    return (
      <SubPageLayout title="Department Not Found" subtitle="Please select a valid department from the sidebar." category="courses" activeItemLabel="Department Not Found">
        <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800">Department profile unavailable</h3>
          <p className="text-sm text-slate-600 mt-2">We could not locate the requested engineering department.</p>
        </div>
      </SubPageLayout>
    );
  }

  const IconComponent = DEPT_ICONS[deptKey] || GraduationCap;
  const heroImage = DEPT_IMAGES[deptKey] || DEPT_IMAGES.computer;
  const sidebarLabel = DEPT_SIDEBAR_LABELS[deptKey] || dept.name;

  return (
    <SubPageLayout
      title={dept.name}
      subtitle={`Department of ${dept.name} — C.K. Pithawala College of Engineering and Technology (CKPCET)`}
      category="courses"
      activeItemLabel={sidebarLabel}
    >
      <div className="space-y-12 text-[#0F2942]">
        
        {/* ── SECTION 1: HERO OVERVIEW & KEY STATS ── */}
        <section className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00509d]/10 text-[#00509d] font-mono text-[11px] font-bold uppercase tracking-wider">
                <IconComponent className="w-3.5 h-3.5" />
                GTU Affiliated
              </span>
              {dept.nbaAccredited && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 font-mono text-[11px] font-bold uppercase tracking-wider border border-amber-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  NBA Accredited
                </span>
              )}
              {dept.established && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px] font-medium tracking-wider">
                  Est. {dept.established}
                </span>
              )}
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 leading-tight">
              Department of {dept.name}
            </h2>

            {/* Vision Quote Box */}
            {dept.vision && (
              <div className="relative p-6 rounded-2xl bg-[#0A2850] text-white shadow-xl overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 rounded-xl bg-white/10 text-amber-400 shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-amber-400 mb-1.5">
                      DEPARTMENT VISION
                    </h3>
                    <p className="text-sm md:text-base font-sans font-medium text-slate-100 italic leading-relaxed">
                      "{dept.vision}"
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* About Narrative */}
            <div className="prose prose-slate max-w-none text-slate-700 font-sans text-sm md:text-base leading-relaxed space-y-4">
              {dept.about.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Summary Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Affiliation</span>
                <span className="text-sm font-bold text-slate-800">GTU, Ahmedabad</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Intake / Programs</span>
                <span className="text-sm font-bold text-slate-800">{dept.intake || "B.E. / B.Tech"}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 col-span-2 sm:col-span-1">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Approved By</span>
                <span className="text-sm font-bold text-slate-800">AICTE, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Right Side Visual & Highlights */}
          <div className="md:col-span-5 space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00509d]/10 rounded-3xl translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
              <div className="overflow-hidden rounded-3xl border-2 border-slate-200/80 shadow-lg bg-slate-100">
                <img 
                  src={heroImage} 
                  alt={`${dept.name} Laboratory & Campus`} 
                  className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 text-white p-3 rounded-xl backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                <span>CKPCET Academic Block</span>
                <span className="text-amber-400 font-bold">{dept.key.toUpperCase()} LAB</span>
              </div>
            </div>

            {/* Key Department Highlights */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100/80 border border-slate-200/80 space-y-4 shadow-sm">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00509d]">
                ACADEMIC & RESEARCH FOCUS
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-xs md:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00509d] shrink-0 mt-0.5" />
                  <span>Experienced faculty with M.E., M.Tech, and Ph.D. degrees from premier institutes.</span>
                </li>
                <li className="flex items-start gap-3 text-xs md:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00509d] shrink-0 mt-0.5" />
                  <span>State-of-the-art laboratories equipped with modern hardware and software tools.</span>
                </li>
                <li className="flex items-start gap-3 text-xs md:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00509d] shrink-0 mt-0.5" />
                  <span>Active participation in Smart India Hackathon, SSIP innovation cells, and GTU tech fests.</span>
                </li>
                <li className="flex items-start gap-3 text-xs md:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00509d] shrink-0 mt-0.5" />
                  <span>Regular industrial visits, technical seminars, and expert lectures from industry veterans.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: FACULTY DIRECTORY ── */}
        <section className="space-y-6 pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-[#00509d]" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#00509d]">
                  FACULTY DIRECTORY
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-semibold text-slate-900">
                Teaching & Academic Staff
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
              Total Faculty: <strong className="text-slate-800">{dept.staff.length}</strong>
            </div>
          </div>

          {dept.staff.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200/80">
              <GraduationCap className="w-10 h-10 text-slate-400 mx-auto mb-3 stroke-[1.5]" />
              <h4 className="text-base font-bold text-slate-800">Academic Administration & Rotations</h4>
              <p className="text-sm text-slate-600 max-w-lg mx-auto mt-1 leading-relaxed">
                Faculty appointments and specialized lecture series for {dept.name} are dynamically structured and coordinated in collaboration with Computer Engineering, IT, and GTU visiting scholars.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dept.staff.map((member, idx) => {
                const isHod = member.designation.toLowerCase().includes("hod") || member.designation.toLowerCase().includes("head");
                const initials = member.name
                  .replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s*/i, "")
                  .split(" ")
                  .map((w) => w[0])
                  .filter(Boolean)
                  .slice(0, 2)
                  .join("");

                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                      isHod
                        ? "bg-gradient-to-br from-[#0A2850] to-[#0d3467] text-white border-blue-900 shadow-md"
                        : "bg-white text-slate-800 border-slate-200/80 hover:border-[#00509d]/40 hover:shadow-sm"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                            isHod ? "bg-amber-400 text-slate-900" : "bg-blue-50 text-[#00509d] border border-blue-100"
                          }`}
                        >
                          {initials}
                        </div>
                        {isHod && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono text-[9px] font-bold uppercase tracking-widest border border-amber-400/30">
                            Head of Dept
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className={`text-base font-semibold font-sans leading-snug ${isHod ? "text-white" : "text-slate-900"}`}>
                          {member.name}
                        </h4>
                        <p className={`text-xs font-mono mt-0.5 ${isHod ? "text-blue-200" : "text-[#00509d] font-semibold"}`}>
                          {member.designation}
                        </p>
                      </div>
                    </div>

                    <div className={`mt-4 pt-3 border-t text-xs font-sans ${isHod ? "border-white/15 text-slate-200" : "border-slate-100 text-slate-600"}`}>
                      <span className="font-mono text-[10px] uppercase opacity-70 block mb-0.5">Qualification</span>
                      <span className="font-medium">{member.qualification}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

      </div>
    </SubPageLayout>
  );
}
