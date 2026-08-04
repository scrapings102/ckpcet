import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Home, 
  ArrowLeft, 
  ChevronRight, 
  BookOpen, 
  Users, 
  Award, 
  Shield, 
  FileText, 
  Calendar, 
  Landmark, 
  GraduationCap,
  Image as ImageIcon,
  Trophy,
  Coffee,
  Library,
  Eye,
  Target,
  Building2,
  UserCheck,
  ShieldAlert,
  ShieldCheck,
  Heart,
  CheckCircle2,
  ClipboardList,
  UserCog
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SubPageLayoutProps {
  title: string;
  subtitle?: string;
  category: string;
  activeItemLabel: string;
  children: React.ReactNode;
}

const CATEGORY_NAMES: Record<string, string> = {
  about: 'About Us',
  institute: 'Institute',
  academics: 'Academics',
  committees: 'Institutional Committees',
  affiliations: 'Affiliations & Approvals',
  nirf: 'NIRF Rankings',
  'audit-reports': 'Audit Reports',
  courses: 'Courses',
  iqac: 'IQAC Cell',
  staff: 'Our Staff',
  'campus-life': 'Campus Life',
  'student-corner': 'Student Corner',
  activities: 'Activities',
};

// Map each category to its list of navigation links and their respective display names
export const CATEGORY_LINKS: Record<string, { label: string; path: string }[]> = {
  about: [
    { label: 'Profile', path: '/about/overview' },
    { label: 'Vision And Mission', path: '/about/vision-mission' },
    { label: 'The Founder', path: '/about/founder' },
    { label: 'Governing Body', path: '/about/trustees' },
    { label: 'Administrative Setup', path: '/about/administrative-setup' },
    { label: 'Employee Service Rules', path: '/about/employee-service-rules' },
    { label: 'The Principal', path: '/about/principals-message' },
    { label: 'Reach Us', path: '/about/reach-us' },
    { label: 'Campus Map', path: '/about/campus-map' },
  ],
  institute: [
    { label: 'Profile', path: '/about/overview' },
    { label: 'Vision And Mission', path: '/about/vision-mission' },
    { label: 'The Founder', path: '/about/founder' },
    { label: 'Governing Body', path: '/about/trustees' },
    { label: 'Administrative Setup', path: '/about/administrative-setup' },
    { label: 'Employee Service Rules', path: '/about/employee-service-rules' },
    { label: 'The Principal', path: '/about/principals-message' },
    { label: 'Reach Us', path: '/about/reach-us' },
    { label: 'Campus Map', path: '/about/campus-map' },
  ],
  academics: [
    { label: 'General Information', path: '/academics/general-information' },
    { label: 'Programs Offered', path: '/academics/programs-offered' },
    { label: 'Admission', path: '/academics/admission' },
    { label: 'Notice Board', path: '/academics/notice-board' },
    { label: 'News & Announcements', path: '/academics/news-announcements' },
    { label: 'Course Curriculum', path: '/academics/curriculum' },
    { label: 'Time Tables', path: '/academics/time-tables' },
    { label: 'Admin Staff', path: '/academics/admin-staff' },
    { label: 'Innovations in Teaching & Learning', path: '/academics/innovations' },
  ],
  committees: [
    { label: 'Academic Council', path: '/about/committees/academic-council' },
    { label: 'Co-Curricular Activities', path: '/about/committees/co-curricular' },
    { label: 'Finance', path: '/about/committees/finance' },
    { label: 'Innovation Council', path: '/about/committees/innovation-council' },
    { label: 'Library', path: '/about/committees/library' },
    { label: 'Magazine', path: '/about/committees/magazine' },
    { label: 'NIRF (Committee)', path: '/about/committees/nirf' },
    { label: 'NSS Sankul', path: '/about/committees/nss-sankul' },
    { label: 'Purchase/Equipment', path: '/about/committees/purchase-equipment' },
    { label: 'Timetable', path: '/about/committees/timetable' },
    { label: 'Nasha Mukti Hostel Committee', path: '/about/committees/nasha-mukti' },
    { label: 'ABC ID Committee', path: '/about/committees/abc-id' },
  ],
  affiliations: [
    { label: 'Gujarat Technological University', path: 'https://www.gtu.ac.in/' },
    { label: 'AICTE Approval', path: '/about/aicte-approval' },
    { label: 'Mandatory Disclosure', path: 'https://drive.google.com/file/d/1PZsx5TibGQkIE7Lrv6pmGngx1zId3YqL/view' },
  ],
  nirf: [
    { label: 'Report 2025-26-2', path: 'https://drive.google.com/file/d/1jGqP64awieyf7c5B1KynL9qyn4G2jIFB/view' },
    { label: 'Report 2025-26-1', path: 'https://drive.google.com/file/d/1hZLCgPaP3Aw1yQMMgd47Zq7QD2KEPnBI/view' },
    { label: 'Report 2024-25-2', path: 'https://drive.google.com/file/d/1s34DoLGe3ndYobkMh-XP20Nt0TB1XNAl/view' },
    { label: 'Report 2024-25-1', path: 'https://drive.google.com/file/d/12wLD0JzxWgWjnHYQT7lG4_iNARV_Slfd/view' },
    { label: 'Report 2023-24', path: 'https://drive.google.com/file/d/1Jqx7eRyMm0oveEoO0vHTvo9TyZP3F77I/view' },
    { label: 'Report 2022-23', path: 'https://drive.google.com/file/d/1KA8TYTjnXbsthcHELe70u0EVjxSf9x43/view' },
    { label: 'Report 2021-22', path: 'https://drive.google.com/file/d/16VO8AjT7sRSlUfBT95zJNXlmlAClQMvY/view' },
    { label: 'Report 2020-21', path: 'https://drive.google.com/file/d/1Egim4WDE47URUWNrktXrBDwCTSRkK4zV/view' },
    { label: 'NIRF Contact Us', path: '/about/nirf' },
  ],
  'audit-reports': [
    { label: 'Audit Reports', path: '/about/audit-reports' },
  ],
  courses: [
    { label: 'Computer Engineering', path: '/departments/computer-engineering' },
    { label: 'Information Technology', path: '/departments/information-technology' },
    { label: 'AIML', path: '/departments/aiml' },
    { label: 'Civil Engineering', path: '/departments/civil-engineering' },
    { label: 'Mechanical Engineering', path: '/departments/mechanical-engineering' },
    { label: 'Electrical Engineering', path: '/departments/electrical-engineering' },
    { label: 'Electronics & Communication', path: '/departments/electronics-and-communication-engineering' },
    { label: 'Applied Science and Humanities', path: '/departments/applied-science' },
  ],
  iqac: [
    { label: 'About IQAC', path: '/iqac/about' },
    { label: 'IQAC Objectives', path: '/iqac/objectives' },
    { label: 'Minutes & ATR', path: '/iqac/minutes' },
  ],
  staff: [
    { label: 'Teaching Staff', path: '/staff/teaching' },
    { label: 'Non-Teaching Staff', path: '/staff/non-teaching' },
  ],
  'campus-life': [
    { label: 'Hostel', path: '/campus-life/hostel' },
    { label: 'Canteen', path: '/campus-life/canteen' },
    { label: 'Classrooms', path: '/campus-life/classrooms' },
    { label: 'Library', path: '/campus-life/library' },
  ],
  'student-corner': [
    { label: 'Sports', path: '/student-corner/sports' },
    { label: 'Inter-College Achievements', path: '/student-corner/inter-college' },
    { label: 'Competitions', path: '/student-corner/competitions' },
    { label: 'Gallery', path: '/student-corner/gallery' },
    { label: 'Media Appreciation', path: '/student-corner/media-appreciation' },
  ],
  activities: [
    { label: 'News', path: '/activities/news' },
    { label: 'Achievements', path: '/activities/achievements' },
    { label: 'Events', path: '/activities/events' },
  ],
};

const PAGE_IMAGES: Record<string, string> = {
  // About Category
  'About Us': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop',
  'Profile': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop',
  'General Information': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop',
  'Vision and Mission': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
  'Vision And Mission': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
  'Mission': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
  'Founder': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
  'The Founder': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
  'About Trust': 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1000&auto=format&fit=crop',
  'Trustees': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop',
  'Governing Body': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop',
  'Administrative Setup': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
  'Employee Service Rules': 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop',
  "Director's Message": 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop',
  "Principal's Message": 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
  'The Principal': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
  "HOD's Message": 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
  'Reach Us': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
  'Campus Map': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',

  // Courses
  'Computer Engineering': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
  'Information Technology': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
  'AIML': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
  'Civil Engineering': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
  'Mechanical Engineering': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
  'Electrical Engineering': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop',
  'Electronics & Communication': 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',

  // Committees
  'Anti-Ragging Committee': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop',
  'ST-SC Cell': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
  'Sexual Harassment Committee': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',

  // IQAC
  'About IQAC': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
  'IQAC Objectives': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
  'Minutes & ATR': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',

  // Staff
  'Teaching Staff': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
  'Non-Teaching Staff': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',

  // Campus Life
  'Hostel': 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop',
  'Canteen': 'https://images.unsplash.com/photo-1567521464027-f127ff144346?q=80&w=1000&auto=format&fit=crop',
  'Classrooms': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
  'Library': 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop',

  // Student Corner
  'Sports': 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1000&auto=format&fit=crop',
  'Inter-College Achievements': 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
  'Competitions': 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
  'Gallery': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
  'Media Appreciation': 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop',

  // Activities
  'News': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop',
  'Achievements': 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
  'Events': 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop'
};

function getImageForPage(activeItemLabel: string): string {
  if (PAGE_IMAGES[activeItemLabel]) return PAGE_IMAGES[activeItemLabel];
  return 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop';
}

function getIconForLabel(label: string) {
  const l = label.toLowerCase();
  if (l.includes('vision')) return Eye;
  if (l === 'mission') return Target;
  if (l.includes('founder')) return Award;
  if (l.includes('trustees')) return Users;
  if (l.includes('trust')) return Landmark;
  if (l.includes('director')) return UserCheck;
  if (l.includes('principal')) return GraduationCap;
  if (l.includes('hod')) return BookOpen;
  if (l.includes('about') || l.includes('overview')) return Building2;
  if (l.includes('non-teaching')) return UserCog;
  if (l.includes('teaching') || l.includes('staff')) return Users;
  if (l.includes('ragging')) return ShieldAlert;
  if (l.includes('harassment') || l.includes('posh')) return ShieldCheck;
  if (l.includes('cell')) return Heart;
  if (l.includes('message')) return FileText;
  if (l.includes('course') || l.includes('engineering') || l.includes('aiml') || l.includes('technology')) return GraduationCap;
  if (l.includes('event') || l.includes('news')) return Calendar;
  if (l.includes('objectives')) return CheckCircle2;
  if (l.includes('minutes') || l.includes('atr')) return ClipboardList;
  if (l.includes('iqac')) return Landmark;
  if (l.includes('sports')) return Trophy;
  if (l.includes('gallery')) return ImageIcon;
  if (l.includes('canteen')) return Coffee;
  if (l.includes('library')) return Library;
  return ChevronRight;
}

export default function SubPageLayout({
  title,
  subtitle,
  category,
  activeItemLabel,
  children,
}: SubPageLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Just scroll to top on route change smoothly
    window.scrollTo({ top: 0, behavior: 'auto' });
    if (typeof window !== 'undefined' && (window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  const imageUrl = getImageForPage(activeItemLabel);
  const categoryDisplayName = CATEGORY_NAMES[category] || category;
  const links = CATEGORY_LINKS[category] || [];

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#3B3131] font-sans pb-24 pt-0">
      {/* ── BREADCRUMBS & TOP NAVIGATION SECTION ── */}
      <div className="bg-[#0F172A] text-white/50 text-[10px] md:text-xs py-2.5 border-b border-white/5">
        <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 select-none font-mono tracking-wider">
            <span className="cursor-pointer hover:text-white transition-colors" onClick={() => navigate('/')}>HOME</span>
            <span>/</span>
            <span className="text-[#2563EB] font-bold uppercase">{categoryDisplayName}</span>
            <span>/</span>
            <span className="text-white font-bold uppercase truncate max-w-[160px] md:max-w-none">{activeItemLabel}</span>
          </div>
        </div>
      </div>

      {/* ── CLASSIC HEADER BANNER ("heading like before") ── */}
      <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-6 md:py-10 border-b border-[#2563EB]/25 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.04)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-left">
          <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/75 font-sans text-xs sm:text-sm md:text-base max-w-4xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-16">
        <main className="w-full bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-10 lg:p-12 min-h-[500px] shadow-sm overflow-visible relative">
          <AnimatePresence mode="wait">
            <motion.div
              ref={containerRef}
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative"
            >
              {/* Back Link above subpage content */}
              <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-4">
                <button 
                  onClick={() => navigate('/')} 
                  className="flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest text-[#2563EB] hover:text-[#1E293B] transition-colors cursor-pointer group"
                >
                  <ArrowLeft size={14} className="stroke-[3] transition-transform group-hover:-translate-x-1" />
                  Back to Home
                </button>
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">
                  {categoryDisplayName} / {activeItemLabel}
                </span>
              </div>
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

