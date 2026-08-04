import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import {
  Mail,
  Award,
  Users,
  Briefcase,
  Trophy,
  User,
  ArrowRight
} from "lucide-react";

interface StaffMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  email: string;
  hasPhoto: boolean;
  photoUrl?: string;
}

const ADMIN_STAFF: StaffMember[] = [
  // ROW 1
  {
    id: "1",
    name: "MR. RAMESHBHAI A. MISTRY",
    role: "Administrative Officer",
    qualification: "D.M.",
    experience: "27 years, 8 months",
    email: "ramesh.mistry@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1622696811.jpg"
  },
  {
    id: "2",
    name: "MR. NILESH C. PATEL",
    role: "Office Superintendent",
    qualification: "B.Com",
    experience: "27 years, 8 months",
    email: "nilesh.patel@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1609405669.jpg"
  },
  {
    id: "3",
    name: "MR. PIYUSH P. PATEL",
    role: "Office Superintendent",
    qualification: "B.A.",
    experience: "26 years, 8 months",
    email: "piyosh.patel@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1609565001.jpg"
  },
  {
    id: "4",
    name: "MS. HEENA U. PANDYA",
    role: "Librarian",
    qualification: "B.Com, B.Lib, M.Lib",
    experience: "28 years, 8 months",
    email: "heena.pandya@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1630748279.jpg"
  },
  {
    id: "5",
    name: "MS. SUMITRA C. PATEL",
    role: "Office Assistant",
    qualification: "M.A, B.A",
    experience: "12 years, 1 months",
    email: "sumitra.patel@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1612173380.JPG"
  },

  // ROW 2
  {
    id: "6",
    name: "MR. TRUSHAR J. PATEL",
    role: "Office Assistant",
    qualification: "B.Com",
    experience: "20 years, 8 months",
    email: "trushar.patel@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1611809096.jpg"
  },
  {
    id: "7",
    name: "MR. RAVINDRA K. RATHOD",
    role: "Office Assistant",
    qualification: "B.A, B.L.I.Sc",
    experience: "19 years, 7 months",
    email: "ravindra.rathod@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1611316110.jpg"
  },
  {
    id: "8",
    name: "MR. KRUPALKUMAR ASHVINBHAI PATEL",
    role: "Office Assistant",
    qualification: "B.Com",
    experience: "1 years, 11 months",
    email: "krupal.patel@ckpcet.ac.in",
    hasPhoto: false
  },
  {
    id: "9",
    name: "MS. MITALI H. PATEL",
    role: "Senior Clerk",
    qualification: "B.Com",
    experience: "22 years, 10 months",
    email: "mitali.patel@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1611719598.jpg"
  },
  {
    id: "10",
    name: "MS. KIRTIDA J. CHAUDHARI",
    role: "Office Assistant-cum-Telephone Operator",
    qualification: "B.Com",
    experience: "18 years, 7 months",
    email: "kirtida.chaudhari@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1611309207.jpg"
  },

  // ROW 3
  {
    id: "11",
    name: "MR. MUKESH T. PATEL",
    role: "Library Clerk",
    qualification: "B.Lib",
    experience: "21 years, 5 months",
    email: "mukesh.patel@ckpcet.ac.in",
    hasPhoto: false
  },
  {
    id: "12",
    name: "MR. RAIYAN RIYAZUDDIN SAIYED",
    role: "Store Keeper",
    qualification: "H.Sc.",
    experience: "2 years, 11 months",
    email: "raiyan.saiyed@ckpcet.ac.in",
    hasPhoto: false
  },
  {
    id: "13",
    name: "MR. ANILBHAI MAKANBHAI PATEL",
    role: "Wireman",
    qualification: "ITI, WIREMAN",
    experience: "5 years, 9 months",
    email: "anil.patel@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "http://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1662610757.jpeg"
  },
  {
    id: "14",
    name: "MR. ZAVER D. SURTI",
    role: "4th Class (Peon/Hamal)",
    qualification: "B.A",
    experience: "28 years, 1 months",
    email: "zaver.surti@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1703062333.jpeg"
  },
  {
    id: "15",
    name: "MR. AVINASH C. PATEL",
    role: "4th Class (Peon/Hamal)",
    qualification: "HSC",
    experience: "19 years, 0 months",
    email: "avinash.patel@ckpcet.ac.in",
    hasPhoto: false
  },

  // ROW 4
  {
    id: "16",
    name: "MR. KARAN R. DHODIYA",
    role: "4th Class (Peon/Hamal)",
    qualification: "HSC",
    experience: "17 years, 3 months",
    email: "karan.dhodiya@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1612602701.jpg"
  },
  {
    id: "17",
    name: "MR. PINAL R. PATEL",
    role: "4th Class (Peon/Hamal)",
    qualification: "7",
    experience: "10 years, 11 months",
    email: "pinal.patel@ckpcet.ac.in",
    hasPhoto: true,
    photoUrl: "https://ckpcet.ac.in/app-img/webroot/files/StaffMasters/photo/1676008112.jpg"
  },
  {
    id: "18",
    name: "MR. JIGNESH R. PANCHAWALA",
    role: "4th Class (Peon/Hamal)",
    qualification: "5",
    experience: "10 years, 11 months",
    email: "jignesh.panchawala@ckpcet.ac.in",
    hasPhoto: false
  },
  {
    id: "19",
    name: "MR. BUNTYKUMAR VINUBHAI PATEL",
    role: "Driver-Cum-Peon/Hamal",
    qualification: "-",
    experience: "3 years, 8 months",
    email: "bunty.patel@ckpcet.ac.in",
    hasPhoto: false
  },
  {
    id: "20",
    name: "MR. VIVEKBHAI MANSUKHBHAI PATEL",
    role: "Driver-Cum-Peon/Hamal",
    qualification: "9th Pass",
    experience: "1 years, 1 months",
    email: "vivek.patel@ckpcet.ac.in",
    hasPhoto: false
  }
];

export default function AdminStaffPage() {
  return (
    <SubPageLayout
      title="Admin Staff"
      subtitle="Administrative & Non-Teaching Staff Directory"
      category="about"
      activeItemLabel="Admin Staff"
    >
      <div className="max-w-7xl mx-auto space-y-6 py-2">
        
        {/* TOP HEADER BADGE */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-blue-200/90 shadow-2xs">
            <span className="font-serif font-bold text-[#0F1E36] text-base tracking-wide">
              Non-Teaching
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#1D4ED8] text-white text-xs font-bold shadow-2xs">
              20
            </span>
          </div>
        </div>

        {/* STAFF CARDS GRID: 2 COLUMNS ON MD+ SCREENS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADMIN_STAFF.map((staff, index) => (
            <div
              key={staff.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-stretch overflow-hidden relative group hover:border-blue-300"
            >
              {/* LEFT SIDE: PORTRAIT IMAGE CONTAINER */}
              <div className="sm:w-[40%] shrink-0 relative min-h-[220px] bg-slate-100 flex items-center justify-center overflow-hidden">
                {/* Top-Left Dark Number Badge with Amber Line */}
                <div className="absolute top-0 left-0 z-10 bg-[#0F1E36] text-white px-3.5 py-1.5 rounded-br-2xl border-b-2 border-r-2 border-amber-400 shadow-sm flex items-center justify-center">
                  <span className="font-sans font-extrabold text-xs sm:text-sm tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {staff.hasPhoto && staff.photoUrl ? (
                  <img
                    src={staff.photoUrl}
                    alt={staff.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[220px]"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-slate-200 via-slate-100 to-blue-50 flex items-center justify-center text-slate-400">
                    <User size={52} strokeWidth={1.5} className="text-slate-400" />
                  </div>
                )}
              </div>

              {/* RIGHT SIDE: CONTENT CONTAINER */}
              <div className="sm:w-[60%] p-5 sm:p-6 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  {/* Name */}
                  <h3 className="font-serif font-bold text-[#0F1E36] text-lg sm:text-xl leading-snug group-hover:text-[#1D4ED8] transition-colors">
                    {staff.name}
                  </h3>

                  {/* Amber Decorative Line */}
                  <div className="w-12 h-[3px] bg-amber-400 rounded-full my-2.5" />

                  {/* Role Pill */}
                  <div className="pt-0.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 text-slate-800 text-xs font-semibold border border-slate-200/80 shadow-2xs">
                      <User size={13} className="text-slate-500 shrink-0" />
                      <span>{staff.role}</span>
                    </span>
                  </div>

                  {/* Qualification & Info */}
                  <div className="space-y-1.5 pt-1 text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                    <p className="font-medium text-slate-700">
                      <span className="text-slate-400 font-normal mr-1">Qualification:</span>
                      {staff.qualification}
                    </p>
                    <p className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <Award size={14} className="text-amber-500 shrink-0" />
                      <span>{staff.experience}</span>
                    </p>
                  </div>
                </div>

                {/* Email Contact Action Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <a
                    href={`mailto:${staff.email}`}
                    className="inline-flex items-center gap-1.5 text-[#0F1E36] font-bold text-xs tracking-wider uppercase hover:text-[#1D4ED8] transition-colors group/link"
                    title={staff.email}
                  >
                    <Mail size={14} className="text-[#1D4ED8] shrink-0" />
                    <span className="truncate max-w-[170px] sm:max-w-[190px]">{staff.email}</span>
                    <ArrowRight size={14} className="text-slate-400 group-hover/link:text-[#1D4ED8] group-hover/link:translate-x-1 transition-all shrink-0 ml-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM STATS BANNER */}
        <div className="bg-[#0A1D3F] rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10 mt-6">
          
          {/* Stat 1: Total Staff */}
          <div className="flex items-center gap-4 lg:px-6 first:pl-0 pt-3 sm:pt-0">
            <div className="w-12 h-12 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
              <Users size={22} />
            </div>
            <div>
              <span className="block text-2xl font-serif font-extrabold text-white leading-none">
                20
              </span>
              <span className="text-xs text-slate-300 font-sans tracking-wide uppercase mt-1 block">
                Total Staff
              </span>
            </div>
          </div>

          {/* Stat 2: Avg Experience */}
          <div className="flex items-center gap-4 lg:px-6 pt-3 sm:pt-0">
            <div className="w-12 h-12 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
              <Briefcase size={22} />
            </div>
            <div>
              <span className="block text-2xl font-serif font-extrabold text-white leading-none">
                8+
              </span>
              <span className="text-xs text-slate-300 font-sans tracking-wide uppercase mt-1 block">
                Years Experience (Avg.)
              </span>
            </div>
          </div>

          {/* Stat 3: Active Members */}
          <div className="flex items-center gap-4 lg:px-6 pt-3 sm:pt-0">
            <div className="w-12 h-12 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
              <Mail size={22} />
            </div>
            <div>
              <span className="block text-2xl font-serif font-extrabold text-white leading-none">
                20
              </span>
              <span className="text-xs text-slate-300 font-sans tracking-wide uppercase mt-1 block">
                Active Members
              </span>
            </div>
          </div>

          {/* Stat 4: Dedicated to Excellence */}
          <div className="flex items-center gap-4 lg:px-6 last:pr-0 pt-3 sm:pt-0">
            <div className="w-12 h-12 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
              <Trophy size={22} />
            </div>
            <div>
              <span className="block text-xs text-slate-300 font-sans tracking-wide uppercase">
                Dedicated to
              </span>
              <span className="block text-xl font-serif font-extrabold text-white leading-snug">
                Excellence
              </span>
            </div>
          </div>

        </div>

      </div>
    </SubPageLayout>
  );
}
