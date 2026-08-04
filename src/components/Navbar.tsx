import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, LayoutGroup } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, Home, Mail, MapPin,
  BookOpen, Cpu, Info, Library, GraduationCap, Users, HeartHandshake, 
  Briefcase, FileText, Settings, Trophy, Sparkles, Network, ArrowRight,
  Palette, Calendar, Target, FolderClosed, Shield, UserCheck, Home as HomeIcon,
  Coffee, Laptop, Image, Newspaper, Award, Search, Building2
} from 'lucide-react';
import CkpcmcLogo from './CkpcmcLogo';
import { useLenis } from '../context/LenisContext';
import { cdn } from '../utils/image';

import { scrapedData } from '../data/scrapedData';

// Helper to generate a clean URL slug for pages
export const getSlug = (section: string, label: string): string => {
  const secSlug = section.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^\w-]/g, '');
  const labelSlug = label.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^\w-]/g, '');
  return `${secSlug}/${labelSlug}`;
};

// Dynamically construct keyToHashSegment
export const keyToHashSegment: Record<string, string> = {};

// Count leaf label occurrences across all navigation sections to detect collisions
const leafLabelCounts: Record<string, number> = {};
scrapedData.navigation_menu.forEach(sec => {
  sec.items.forEach(item => {
    leafLabelCounts[item.label] = (leafLabelCounts[item.label] || 0) + 1;
  });
});

scrapedData.navigation_menu.forEach(sec => {
  sec.items.forEach(item => {
    const slug = getSlug(sec.section, item.label);
    keyToHashSegment[`${sec.section} > ${item.label}`] = slug;
    // Only set bare label if unique across all navigation sections
    if (leafLabelCounts[item.label] === 1) {
      keyToHashSegment[item.label] = slug;
    }
  });
});

// Explicit parent-scoped composite mappings for NSS Sankul and other known duplicated labels
keyToHashSegment['Committees > NSS Sankul'] = 'about/committees/nss';
keyToHashSegment['About Us > Committees > NSS Sankul'] = 'about/committees/nss';
keyToHashSegment['About Us > NSS Sankul'] = 'about/committees/nss';

keyToHashSegment['Community > NSS Sankul'] = 'activities/community/nss';
keyToHashSegment['Activities > Community > NSS Sankul'] = 'activities/community/nss';
keyToHashSegment['Activities > NSS Sankul'] = 'activities/community/nss';

keyToHashSegment['About T & P > Rules & Regulations'] = 't-and-p/about-t-and-p/rules-and-regulations';
keyToHashSegment['T & P > Rules & Regulations'] = 't-and-p/about-t-and-p/rules-and-regulations';
keyToHashSegment['Alumni > Rules & Regulations'] = 'alumni/rules-and-regulations';
keyToHashSegment['MOUs'] = 't-and-p/mou';
keyToHashSegment['Training > MOUs'] = 't-and-p/mou';
keyToHashSegment['T & P > MOUs'] = 't-and-p/mou';

// Map each department's child labels to the parent department's real route
const DEPT_REAL_ROUTES: Record<string, string> = {
  'Applied Science and Humanities': 'departments/applied-science',
  'Civil Engineering': 'departments/civil',
  'Computer Engineering': 'departments/computer',
  'Electrical Engineering': 'departments/electrical',
  'Electronics and Communication Engineering': 'departments/ecc',
  'Information Technology': 'departments/it',
  'Mechanical Engineering': 'departments/mechanical',
  'AIML': 'departments/aiml',
};

const INSTITUTE_REAL_ROUTES: Record<string, string> = {
  'Profile': 'about/overview',
  'General Information': 'about/general-information',
  'Programs Offered': 'academics/programs-offered',
  'Admission': 'academics/admission',
  'Innovations in Teaching & Learning': 'academics/innovations',
  'Admin Staff': 'academics/admin-staff',
  'Deans and Faculty In-charges': 'about/deans',
  'Grants': 'about/grants',
  'Notice Board': 'academics/notice-board',
  'News & Announcements': 'academics/news-announcements',
  'Course Curriculum': 'academics/curriculum',
  'Curriculum': 'academics/curriculum',
  'Time Tables': 'academics/time-tables',
  'Timetables': 'academics/time-tables',
  'AICTE Approval': 'about/affiliations-approvals/aicte-approval',
  'AICTE Essentials': 'about/aicte-essentials',
  'Vision And Mission': 'about/vision-mission',
  'The Founder': 'about/founder',
  'Governing Body': 'about/trustees',
  'Administrative Setup': 'about/administrative-setup',
  'Employee Service Rules': 'about/employee-service-rules',
  'The Principal': 'about/principals-message',
  'Reach Us': 'about/reach-us',
  'Campus Map': 'about/campus-map',
  'Committees': 'about/committees',
  'Affiliations': 'about/affiliations',
  'NIRF': 'about/nirf',
  'NIRF Report': 'about/nirf',
  'Audit Reports': 'about/audit-reports',
};

Object.entries(DEPT_REAL_ROUTES).forEach(([deptLabel, route]) => {
  ['About Department', 'Staff', 'Resources', 'Events', 'Achievements', 'Study Materials', 'Course Syllabus', 'Toppers', 'Student Projects'].forEach(child => {
    keyToHashSegment[`${deptLabel} > ${child}`] = route;
  });
});

Object.entries(INSTITUTE_REAL_ROUTES).forEach(([label, route]) => {
  if (leafLabelCounts[label] === 1 || !leafLabelCounts[label]) {
    keyToHashSegment[label] = route;
  }
  keyToHashSegment[`Institute > ${label}`] = route;
  keyToHashSegment[`Academics > ${label}`] = route;
  keyToHashSegment[`About Us > ${label}`] = route;
  keyToHashSegment[`About us > ${label}`] = route;
});

export function resolveNavSegment(label: string, parentLabel?: string | null, currentPath?: string): string | undefined {
  // 1. Explicitly disambiguate NSS Sankul (used in Committees AND Community)
  if (label === 'NSS Sankul') {
    if (parentLabel === 'Community' || parentLabel === 'Activities' || currentPath?.startsWith('/activities')) {
      return 'activities/community/nss';
    }
    if (parentLabel === 'Committees' || parentLabel === 'About Us' || parentLabel === 'About us' || currentPath?.startsWith('/about') || currentPath?.startsWith('/committees')) {
      return 'about/committees/nss';
    }
    if (parentLabel === 'Community') return 'activities/community/nss';
    return 'about/committees/nss';
  }

  // 2. Disambiguate Rules & Regulations (used in Alumni AND T & P)
  if (label === 'Rules & Regulations') {
    if (parentLabel === 'Alumni' || currentPath?.startsWith('/alumni')) {
      return 'alumni/rules-and-regulations';
    }
    if (parentLabel === 'About T & P' || parentLabel === 'T & P' || currentPath?.startsWith('/t-and-p') || currentPath?.startsWith('/training')) {
      return 't-and-p/about-t-and-p/rules-and-regulations';
    }
  }

  // 3. Committees list
  if (parentLabel === 'Committees' || (parentLabel === 'About Us' && ['Academic Council', 'Co-Curricular Activities', 'Finance', 'Innovation Council', 'Library', 'Magazine', 'NIRF', 'Purchase/Equipment', 'Timetable', 'Nasha Mukti Hostel Committee', 'ABC ID Committee'].includes(label))) {
    const COMMITTEE_SLUGS: Record<string, string> = {
      'Academic Council': 'academic-council',
      'Co-Curricular Activities': 'co-curricular',
      'Finance': 'finance',
      'Innovation Council': 'iinc',
      'Library': 'library',
      'Magazine': 'magazine',
      'NIRF': 'nirf',
      'Purchase/Equipment': 'purchase',
      'Timetable': 'timetable',
      'Nasha Mukti Hostel Committee': 'nmc',
      'ABC ID Committee': 'abc'
    };
    const slug = COMMITTEE_SLUGS[label] || label.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^\w-]/g, '');
    return `about/committees/${slug}`;
  }

  // 4. External and static affiliation links
  if (['Gujarat Technological University', 'Mandatory Disclosure', 'AICTE Approval'].includes(label)) {
    if (label === 'Gujarat Technological University') return 'https://www.gtu.ac.in/';
    if (label === 'Mandatory Disclosure') return 'https://drive.google.com/file/d/1PZsx5TibGQkIE7Lrv6pmGngx1zId3YqL/view';
    if (label === 'AICTE Approval') return 'about/aicte-approval';
  }

  // 5. NIRF Drive Reports
  if (parentLabel === 'NIRF Reports' || parentLabel === 'NIRF' || label.startsWith('Report ') || label === 'NIRF Contact Us' || label === 'NIRF Report' || label === 'Contact Us') {
    const NIRF_DRIVE_MAP: Record<string, string> = {
      'Report 2025-26-2': 'https://drive.google.com/file/d/1jGqP64awieyf7c5B1KynL9qyn4G2jIFB/view',
      'Report 2025-26-1': 'https://drive.google.com/file/d/1hZLCgPaP3Aw1yQMMgd47Zq7QD2KEPnBI/view',
      'Report 2024-25-2': 'https://drive.google.com/file/d/1s34DoLGe3ndYobkMh-XP20Nt0TB1XNAl/view',
      'Report 2024-25-1': 'https://drive.google.com/file/d/12wLD0JzxWgWjnHYQT7lG4_iNARV_Slfd/view',
      'Report 2023-24': 'https://drive.google.com/file/d/1Jqx7eRyMm0oveEoO0vHTvo9TyZP3F77I/view',
      'Report 2022-23': 'https://drive.google.com/file/d/1KA8TYTjnXbasthcHELe70u0EVjxSf9x43/view',
      'Report 2021-22': 'https://drive.google.com/file/d/16VO8AjT7sRSlUfBT95zJNXlmlAClQMvY/view',
      'Report 2020-21': 'https://drive.google.com/file/d/1Egim4WDE47URUWNrktXrBDwCTSRkK4zV/view',
    };
    if (NIRF_DRIVE_MAP[label]) return NIRF_DRIVE_MAP[label];
    if (parentLabel === 'NIRF' || label === 'Contact Us') return 'about/nirf';
  }

  // 6. Financial Audit Reports
  if (parentLabel === 'Audit Reports' || label.startsWith('Financial Audit ') || label === 'Audit Reports') {
    const AUDIT_DRIVE_MAP: Record<string, string> = {
      'Financial Audit 2024-25': 'https://drive.google.com/file/d/1OK3dFI2yBUxFVSVIxBRBO0jzW2DsAt-p/view?usp=sharing',
      'Financial Audit 2023-24': 'https://drive.google.com/file/d/1upRfQLbjp9391cqT04FoBLkzShf_prf2/view?usp=sharing',
      'Financial Audit 2022-23': 'https://drive.google.com/file/d/112tLh1ny15zaN_kbdprdQzCpTagVr4dG/view?usp=sharing',
      'Financial Audit 2021-22': 'https://drive.google.com/file/d/1tdGHN67Y8qqxKR7tduM9V_PYuYUYObyx/view?usp=sharing',
      'Financial Audit 2020-21': 'https://drive.google.com/file/d/1g7IaMVGn2flibEFRCrTDIy-O0AvsSfrU/view?usp=sharing',
      'Financial Audit 2019-20': 'https://drive.google.com/file/d/11TCIH1fN8k8DvNjZsguPACvjiJXAg5jA/view?usp=sharing',
      'Financial Audit 2018-19': 'https://drive.google.com/file/d/1dzpbqAsRSQL_sFm0qZ8YYMSRoajaoXT-/view?usp=sharing',
      'Financial Audit 2017-18': 'https://drive.google.com/file/d/12CmjYiJyCcOqNSzKhNIdIoIDLr-3fQ3a/view?usp=sharing',
    };
    if (AUDIT_DRIVE_MAP[label]) return AUDIT_DRIVE_MAP[label];
    return 'about/audit-reports';
  }

  // 7. Composite parent > label lookups
  if (parentLabel && keyToHashSegment[`${parentLabel} > ${label}`]) {
    return keyToHashSegment[`${parentLabel} > ${label}`];
  }

  // 8. Department real routes lookup
  if (parentLabel && DEPT_REAL_ROUTES[parentLabel]) {
    return DEPT_REAL_ROUTES[parentLabel];
  }

  // 9. Institute real routes lookup
  if (INSTITUTE_REAL_ROUTES[label]) {
    return INSTITUTE_REAL_ROUTES[label];
  }

  // 10. Department subpages fallback
  if (currentPath && currentPath.startsWith('/departments/') && ['About Department', 'Staff', 'Resources', 'Events', 'Achievements', 'Study Materials', 'Course Syllabus', 'Toppers', 'Student Projects'].includes(label)) {
    return currentPath.replace(/^\//, '');
  }

  // 11. Bare key lookup fallback
  return keyToHashSegment[label];
}

export function useSmoothScrollTo() {
  const lenis = useLenis();
  const navigate = useNavigate();
  const location = useLocation();

  return (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      if (id === "home") {
        if (lenis) {
          lenis.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        const el = document.getElementById(id);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { offset: -80 });
          } else {
            const rect = el.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            window.scrollTo({ top: rect.top + scrollTop - 80, behavior: "smooth" });
          }
        }
      }
    }
  };
}

const visibleNavSections = scrapedData.navigation_menu.filter(sec => sec.section !== 'Admission' && sec.section !== 'Cells');

export const leftNavItems = visibleNavSections.slice(0, 4).map(sec => ({
  name: sec.section,
  id: sec.section.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^\w-]/g, ''),
  dropdown: sec.items.map(item => item.label),
  align: 'left'
}));

export const rightNavItems = visibleNavSections.slice(4).map((sec, i) => ({
  name: sec.section,
  id: sec.section.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^\w-]/g, ''),
  dropdown: sec.items.map(item => item.label),
  align: i >= 2 ? 'right' : 'left'
}));

// Single combined row — used by the desktop navigation row
export const navItems = [...leftNavItems, ...rightNavItems];

export const bottomNavItems = [
  { name: 'Home', id: 'home' },
  ...scrapedData.navigation_menu.map(sec => ({
    name: sec.section,
    id: sec.section.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^\w-]/g, '')
  }))
];

export const landingNavItems = [
  { name: 'About Us', id: 'about', icon: Info },
  { name: 'News & Events', id: 'university-gazette', icon: Newspaper },
  { name: 'Principal\'s Message', id: 'principal-message', icon: FileText },
  { name: 'Courses', id: 'courses', icon: BookOpen },
  { name: 'Campus Life', id: 'campus-life', icon: Building2 },
  { name: 'Faculty', id: 'faculty', icon: Users },
  { name: 'Blog & Magazine', id: 'blogs-magazine', icon: Library },
  { name: 'Admissions', id: 'admissions', icon: GraduationCap },
];

export const menuSubmaps: Record<string, string[]> = {};
scrapedData.navigation_menu.forEach(sec => {
  menuSubmaps[sec.section] = sec.items.map(item => item.label);
});

export const getDropdownDetail = (label: string, section: string) => {
  const staticDetails: Record<string, { desc: string; icon: any }> = {
    'Profile': { desc: 'Milestones and legacy of CKPCET', icon: Info },
    'Vision And Mission': { desc: 'Our foundational pillars and goals', icon: Target },
    'The Founder': { desc: 'Honoring Shri C. K. Pithawalla', icon: Award },
    'The Principal': { desc: 'Message from the principal desk', icon: FileText },
    'Reach Us': { desc: 'Locate us on Google Maps', icon: MapPin },
    'Campus Map': { desc: 'CKPCET complex campus map layout', icon: MapPin },
    'Governing Body': { desc: 'Eminent administrators and trust governors', icon: Users },
    'Administrative Setup': { desc: 'Our structure for seamless academic execution', icon: Settings },
    'Computer Engineering': { desc: 'Leading in hardware & software technology', icon: Laptop },
    'AIML': { desc: 'Artificial Intelligence & Machine Learning', icon: Cpu },
    'Civil Engineering': { desc: 'Designing modern infrastructural landscapes', icon: Building2 },
    'Electrical Engineering': { desc: 'Powering advanced energy systems', icon: Settings },
    'Electronics and Communication Engineering': { desc: 'Pioneering telecommunication domains', icon: Network },
    'Information Technology': { desc: 'Expert database & fullstack programming', icon: Laptop },
    'Mechanical Engineering': { desc: 'Advanced cogs and thermal robotics', icon: Cpu },
    'Applied Science and Humanities': { desc: 'Fundamental science & logic foundations', icon: BookOpen },
    'Central Library': { desc: 'Academic literature & digital research hubs', icon: BookOpen },
    'Hostel Detail': { desc: 'Secure boys & girls boarding details', icon: HomeIcon },
    'Hostel Photos': { desc: 'Comfortable residential rooms', icon: Image },
    'Cafeteria': { desc: 'Hygienic standard vegetarian dining', icon: Coffee },
    'About Alumni': { desc: 'Our global network of graduates', icon: Users },
    'About T & P': { desc: 'Placement cell overview and guidelines', icon: Briefcase },
    'Companies': { desc: 'Top tier industrial recruiting partners', icon: Building2 },
    'General Information': { desc: 'Comprehensive details about CKPCET', icon: Info },
    'Programs Offered': { desc: 'Undergraduate (B.E.) & Postgraduate (M.E.) courses', icon: GraduationCap },
  };

  if (staticDetails[label]) return staticDetails[label];

  // Default descriptors
  let desc = `Explore ${label} inside the ${section} cell`;
  let icon = Sparkles;

  if (section === 'Committees') {
    desc = `${label} operations and student representatives`;
    icon = Shield;
  } else if (section === 'Departments') {
    desc = `Core curriculum and lab facilities for ${label}`;
    icon = Laptop;
  } else if (section === 'Resources') {
    desc = `Standard ${label} facility at CKPCET`;
    icon = Library;
  } else if (section === 'Cells') {
    desc = `Active welfare, grievance and compliance under ${label}`;
    icon = Shield;
  } else if (section === 'Activities') {
    desc = `Latest expert talks, camps and fests on ${label}`;
    icon = Calendar;
  } else if (section === 'Training & Placement') {
    desc = `Professional training, summaries and placement for ${label}`;
    icon = Briefcase;
  }

  return { desc, icon };
};

// Simple proxy object so that the rendering code doesn't crash on dropdownDetails['item']
export const dropdownDetails = new Proxy({} as any, {
  get: (target, prop) => {
    if (typeof prop === 'string') {
      // Find which section this label belongs to
      let sectionName = '';
      scrapedData.navigation_menu.some(sec => {
        if (sec.items.some(item => item.label === prop)) {
          sectionName = sec.section;
          return true;
        }
        return false;
      });
      return getDropdownDetail(prop, sectionName);
    }
    return undefined;
  }
});

interface MegaMenuColumn {
  title: string;
  items: string[];
}

interface MegaMenuConfig {
  columns: MegaMenuColumn[];
  images: {
    tall1: { url: string; caption: string };
    tall2: { url: string; caption: string };
    landscape: { url: string; caption: string; tag: string };
  };
  accentText: string;
}

export const getMegaMenuConfig = (sectionName: string, items: string[]): MegaMenuConfig => {
  const columns: MegaMenuColumn[] = [];

  if (sectionName === 'About Us' || sectionName === 'About us') {
    columns.push({
      title: 'Institute',
      items: ['Profile', 'Vision And Mission', 'The Founder', 'Governing Body', 'Administrative Setup', 'Employee Service Rules', 'The Principal', 'Reach Us', 'Campus Map']
    });
    columns.push({
      title: 'Academics',
      items: ['General Information', 'Programs Offered', 'Admission', 'Notice Board', 'News & Announcements', 'Course Curriculum', 'Time Tables', 'Admin Staff', 'Innovations in Teaching & Learning']
    });
    columns.push({
      title: 'Committees',
      items: ['Academic Council', 'Co-Curricular Activities', 'Finance', 'Innovation Council', 'Library', 'Magazine', 'NIRF', 'NSS Sankul', 'Purchase/Equipment', 'Timetable', 'Nasha Mukti Hostel Committee', 'ABC ID Committee']
    });
    columns.push({
      title: 'Affiliations',
      items: ['Gujarat Technological University', 'AICTE Approval', 'Mandatory Disclosure']
    });
    columns.push({
      title: 'NIRF Reports',
      items: ['Report 2025-26-2', 'Report 2025-26-1', 'Report 2024-25-2', 'Report 2024-25-1', 'Report 2023-24', 'Report 2022-23', 'Report 2021-22', 'Report 2020-21', 'NIRF Contact Us']
    });
    columns.push({
      title: 'Audit Reports',
      items: ['Financial Audit 2024-25', 'Financial Audit 2023-24', 'Financial Audit 2022-23', 'Financial Audit 2021-22', 'Financial Audit 2020-21', 'Financial Audit 2019-20', 'Financial Audit 2018-19', 'Financial Audit 2017-18']
    });
    columns.push({
      title: 'More',
      items: ['AICTE Essentials', 'Deans and Faculty In-charges', 'Grants']
    });
  } else if (sectionName === 'Departments') {
    columns.push({
      title: 'Engineering Programs',
      items: ['Computer Engineering', 'AIML', 'Information Technology', 'Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Electronics and Communication Engineering', 'Applied Science and Humanities']
    });
  } else if (sectionName === 'Resources') {
    columns.push({
      title: 'Academic Resources',
      items: ['Facilities', 'Coordinators', 'Activities', 'Achievements', 'Central Library', 'Services Offered', 'Magazines and Journals', 'Books', 'Hostel Detail', 'Hostel Photos']
    });
    columns.push({
      title: 'Campus & Facilities',
      items: ['Hostel Fees', 'Hostel Rules', 'Hostel Facilities', 'Registration Form', 'Class Room Complex', 'Workshop', 'Central Computer Centre', 'Center of Language Proficiency and Personality Enrichment', 'Stationery Store', 'Medical Center', 'Seminar Hall', 'Cafeteria', 'Transportation']
    });
  } else if (sectionName === 'Cells') {
    columns.push({
      title: 'Welfare & Grievances',
      items: ['Anti Ragging', 'Gender Cell', 'Grievance Redressal Cell', 'SC-ST Cell', 'SHMC', 'Women Development Cell', 'Physical Disability Grievance Redressal', 'Student Councelor Committee']
    });
    columns.push({
      title: 'Strategic & Compliance',
      items: ['Institute Industry Cell', 'IQAC', 'Media Cell', 'Ombudsman', 'UBA Cell', 'National Innovation & Startup Policy', 'Institute Development Plan', 'Food Safety and Standard Act']
    });
  } else if (sectionName === 'Alumni') {
    columns.push({
      title: 'Alumni Association',
      items: ['About Alumni', 'Objectives', 'Rules & Regulations', 'Managing Committee', 'Executive Committee', 'Registration', 'Events']
    });
  } else if (sectionName === 'T & P' || sectionName === 'Training & Placement') {
    columns.push({
      title: 'Campus Placement',
      items: ['About T & P', 'Rules & Regulations', 'Placement Team', 'GIC Club', 'Contact @ T&P', 'Procedure', 'Placement Summary', 'Placement Records', 'Companies']
    });
    columns.push({
      title: 'Training & Development',
      items: ['Industrial Training', 'Expert Talks', 'Industrial Visit', 'Higher Studies', 'MOUs']
    });
  } else if (sectionName === 'Activities') {
    columns.push({
      title: 'Technical & Academic',
      items: ['TFMS 2022', 'SCE 22', 'Webinars', 'Workshops', 'Seminars', 'STTPS', 'Camps', 'All']
    });
    columns.push({
      title: 'Clubs & Community',
      items: ['Technical', 'Cultural', 'Print', 'WhatsApp', 'LinkedIn', 'Facebook', 'Instagram', 'Youtube Channel', 'Club Coordinators', 'Dance', 'Drama', 'Fine Art', 'Literature', 'Music', 'Photography', 'NSS Sankul', 'COSI Club', 'MYSY Scheme', 'Vishwakarma Yojana', 'SHODH Scheme']
    });
  } else {
    // Fallback
    const chunkSize = 6;
    for (let i = 0; i < items.length; i += chunkSize) {
      const chunk = items.slice(i, i + chunkSize);
      columns.push({
        title: i === 0 ? 'Primary Operations' : 'More Details',
        items: chunk
      });
    }
  }

  const imagesForSection: Record<string, MegaMenuConfig['images']> = {
    'About Us': {
      tall1: { url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400&h=600', caption: 'Management Trustee' },
      tall2: { url: cdn('https://ckpcet.ac.in/img/about-us/institute/principal.jpg', 400, 90), caption: 'The Principal' },
      landscape: { url: 'https://ckpcet.ac.in/img/home-page/slider/si-01.jpg', caption: 'CKPCET Main Campus', tag: 'Est. 1998' }
    },
    'Departments': {
      tall1: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/42.webp', caption: 'Research Lab' },
      tall2: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/38.webp', caption: 'High-Tech Terminals' },
      landscape: { url: 'https://ckpcet.ac.in/img/home-page/video-section/01Entry_03.jpg', caption: 'Advanced Classrooms Complex', tag: 'AICTE Approved' }
    },
    'Resources': {
      tall1: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/04.webp', caption: 'Hostel Wings' },
      tall2: { url: 'https://ckpcet.ac.in/img/home-page/video-section/10Library1.jpg', caption: 'Library Cataloging' },
      landscape: { url: 'https://ckpcet.ac.in/img/home-page/video-section/video-img.jpg', caption: 'Central Computer Centre', tag: 'Modern Assets' }
    },
    'Cells': {
      tall1: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/24.webp', caption: 'Welfare Operations' },
      tall2: { url: 'https://ckpcet.ac.in/img/home-page/video-section/24Women.jpg', caption: 'Gender Equality Meet' },
      landscape: { url: 'https://ckpcet.ac.in/img/home-page/video-section/03AirForce.jpg', caption: 'Compliance Cells', tag: 'POSH Audited' }
    },
    'Alumni': {
      tall1: { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400', caption: 'Global Alums' },
      tall2: { url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=400', caption: 'Graduation Milestones' },
      landscape: { url: 'https://images.unsplash.com/photo-1511551203524-9a24350a5771?q=80&w=800', caption: 'Alumni Network Reunion', tag: '10,000+ Success Stories' }
    },
    'T & P': {
      tall1: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/38.webp', caption: 'Placement Board' },
      tall2: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/40.webp', caption: 'Tech Mock Interviews' },
      landscape: { url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800', caption: 'Top Tier Company Recruitments', tag: 'GTU Top Placements' }
    },
    'Training & Placement': {
      tall1: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/38.webp', caption: 'Placement Board' },
      tall2: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/40.webp', caption: 'Tech Mock Interviews' },
      landscape: { url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800', caption: 'Top Tier Company Recruitments', tag: 'GTU Top Placements' }
    },
    'Activities': {
      tall1: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/31.webp', caption: 'Sports Day Track' },
      tall2: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/32.webp', caption: 'Indoor Gymkhanas' },
      landscape: { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800', caption: 'Annual Cultural Festival Meet', tag: 'Vibrant Campus' }
    },
  };

  const defaultImages = {
    tall1: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/41.webp', caption: 'Scholastic Mentors' },
    tall2: { url: 'https://ckpcet.ac.in/img/home-page/mission-vision/42.webp', caption: 'Creative Labs' },
    landscape: { url: 'https://ckpcet.ac.in/img/home-page/slider/si-01.jpg', caption: 'CKPCET Campus Facade', tag: 'Premium GTU Engineering' }
  };

  return {
    columns,
    images: imagesForSection[sectionName] || defaultImages,
    accentText: `Pioneering Technical and Academic Distinction in Surat since 1998`
  };
};

export const megaMenuConfigs = new Proxy({} as any, {
  get: (target, prop) => {
    if (typeof prop === 'string') {
      const match = scrapedData.navigation_menu.find(sec => sec.section === prop);
      if (match) {
        return getMegaMenuConfig(match.section, match.items.map(i => i.label));
      }
    }
    return undefined;
  }
});

// ── Real two-level nav trees (top-level item -> optional flyout children) ──
interface NavTreeItem {
  label: string;
  children?: string[];
}

const ABOUT_US_TREE: NavTreeItem[] = [
  { label: 'Institute', children: ['Profile', 'Vision And Mission', 'The Founder', 'Governing Body', 'Administrative Setup', 'Employee Service Rules', 'The Principal', 'Reach Us', 'Campus Map'] },
  { label: 'Academics', children: ['General Information', 'Programs Offered', 'Admission', 'Notice Board', 'News & Announcements', 'Course Curriculum', 'Time Tables', 'Admin Staff', 'Innovations in Teaching & Learning'] },
  { label: 'Committees', children: ['Academic Council', 'Co-Curricular Activities', 'Finance', 'Innovation Council', 'Library', 'Magazine', 'NIRF', 'NSS Sankul', 'Purchase/Equipment', 'Timetable', 'Nasha Mukti Hostel Committee', 'ABC ID Committee'] },
  { label: 'Deans and Faculty In-charges' },
  { label: 'Grants' },
  { label: 'Affiliations', children: ['Gujarat Technological University', 'AICTE Approval', 'Mandatory Disclosure'] },
  { label: 'NIRF', children: ['Report 2025-26-2', 'Report 2025-26-1', 'Report 2024-25-2', 'Report 2024-25-1', 'Report 2023-24', 'Report 2022-23', 'Report 2021-22', 'Report 2020-21', 'Contact Us'] },
  { label: 'Audit Reports', children: ['Financial Audit 2024-25', 'Financial Audit 2023-24', 'Financial Audit 2022-23', 'Financial Audit 2021-22', 'Financial Audit 2020-21', 'Financial Audit 2019-20', 'Financial Audit 2018-19', 'Financial Audit 2017-18'] },
  { label: 'AICTE Essentials' },
];

const DEPARTMENT_CHILDREN: Record<string, string[]> = {
  'Applied Science and Humanities': ['About Department', 'Staff'],
  'Civil Engineering': ['About Department', 'Staff'],
  'Computer Engineering': ['About Department', 'Staff'],
  'Electrical Engineering': ['About Department', 'Staff'],
  'Electronics and Communication Engineering': ['About Department', 'Staff'],
  'Information Technology': ['About Department', 'Staff'],
  'Mechanical Engineering': ['About Department', 'Staff'],
  'AIML': ['About Department', 'Staff'],
};

const DEPARTMENTS_TREE: NavTreeItem[] = Object.keys(DEPARTMENT_CHILDREN).map(dept => ({
  label: dept,
  children: DEPARTMENT_CHILDREN[dept]
}));

const RESOURCES_TREE: NavTreeItem[] = [
  { label: 'Sports', children: ['Facilities', 'Coordinators', 'Activities', 'Achievements'] },
  { label: 'Central Library', children: ['Central Library', 'Services Offered', 'Magazines and Journals', 'Books'] },
  { label: 'Hostel', children: ['Hostel Detail', 'Hostel Photos', 'Hostel Fees', 'Hostel Rules', 'Hostel Facilities', 'Registration Form'] },
  { label: 'Central Facilities', children: ['Class Room Complex', 'Workshop', 'Central Computer Centre', 'Center of Language Proficiency and Personality Enrichment', 'Stationery Store'] },
  { label: 'Medical Center' },
  { label: 'Seminar Hall' },
  { label: 'Cafeteria' },
  { label: 'Transportation' },
];

const TP_TREE: NavTreeItem[] = [
  { label: 'About T & P', children: ['About T & P', 'Rules & Regulations', 'Placement Team', 'GIC Club', 'Contact @ T&P'] },
  { label: 'Campus Placement', children: ['Procedure', 'Placement Summary', 'Placement Records', 'Companies'] },
  { label: 'Training', children: ['Industrial Training', 'Expert Talks', 'Industrial Visit', 'Higher Studies', 'MOUs'] },
];

const ACTIVITIES_TREE: NavTreeItem[] = [
  { label: 'Programs', children: ['TFMS 2022', 'SCE 22'] },
  { label: 'Events', children: ['Webinars', 'Workshops', 'Seminars', 'STTPS', 'Camps', 'All'] },
  { label: 'Festivals', children: ['Technical', 'Cultural'] },
  { label: 'Media', children: ['Print', 'WhatsApp', 'LinkedIn', 'Facebook', 'Instagram', 'Youtube Channel'] },
  { label: 'Clubs', children: ['Club Coordinators', 'Dance', 'Drama', 'Fine Art', 'Literature', 'Music', 'Photography'] },
  { label: 'Community', children: ['NSS Sankul', 'COSI Club', 'MYSY Scheme', 'Vishwakarma Yojana', 'SHODH Scheme'] },
];

const NAV_TREES: Record<string, NavTreeItem[]> = {
  'About Us': ABOUT_US_TREE,
  'About us': ABOUT_US_TREE,
  'Departments': DEPARTMENTS_TREE,
  'Resources': RESOURCES_TREE,
  'T & P': TP_TREE,
  'Training & Placement': TP_TREE,
  'Activities': ACTIVITIES_TREE,
};

// Flat lookup: node label -> its children labels, for EVERY node in EVERY tree
// (not just the top-level section names that live in NAV_TREES). This is what
// lets the mobile overlay menu drill into a second-level node like "Institute"
// (which sits inside "About Us") and still find Institute's own children.
// Previously only top-level sections had a resolvable child list, so drilling
// one level deeper always rendered an empty submenu (the exact bug reported:
// About Us -> Institute showed a bare "INSTITUTE" header with nothing below).
const NODE_CHILDREN_MAP: Record<string, string[]> = {};
Object.entries(NAV_TREES).forEach(([secName, tree]) => {
  tree.forEach((node) => {
    if (node.children && node.children.length > 0) {
      NODE_CHILDREN_MAP[node.label] = node.children;
      NODE_CHILDREN_MAP[`${secName} > ${node.label}`] = node.children;
    }
  });
});

function TreeFlyoutMenu({ tree, onNavigate }: { tree: NavTreeItem[]; onNavigate: (label: string, parentLabel?: string) => void }) {
  const [hoveredTop, setHoveredTop] = useState<string | null>(tree[0]?.label ?? null);

  return (
    <div className="flex gap-6 min-h-[280px]">
      <div className="flex flex-col gap-0.5 min-w-[230px] shrink-0">
        {tree.map((node) => {
          const hasChildren = !!node.children?.length;
          const isHovered = hoveredTop === node.label;
          return (
            <button
              key={node.label}
              onMouseEnter={() => setHoveredTop(node.label)}
              onClick={() => { if (!hasChildren) onNavigate(node.label); }}
              className={`w-full flex items-center justify-between gap-2 py-2 px-3 -mx-3 rounded-xl text-left transition-all duration-200 cursor-pointer border border-transparent ${
                isHovered ? 'bg-white/10 border-white/15' : 'hover:bg-white/5'
              }`}
            >
              <span className={`font-sans font-bold text-[13px] transition-colors ${isHovered ? 'text-[#2563EB]' : 'text-white'}`}>
                {node.label}
              </span>
              {hasChildren && (
                <ChevronDown size={12} className={`-rotate-90 transition-colors ${isHovered ? 'text-[#2563EB]' : 'text-white/40'}`} />
              )}
            </button>
          );
        })}
      </div>

      {tree.map((node) => {
        if (!node.children?.length || hoveredTop !== node.label) return null;
        return (
          <div key={node.label} className="flex flex-col gap-0.5 min-w-[250px] border-l border-white/10 pl-6">
            {node.children.map((child) => {
              const detail = dropdownDetails[child] || { desc: '', icon: Sparkles };
              return (
                <button
                  key={child}
                  onClick={() => onNavigate(child, node.label)}
                  className="group/menu-item text-left flex flex-col gap-0.5 py-1.5 px-3 -mx-3 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/15 transition-all duration-200 w-full cursor-pointer"
                >
                  <span className="font-sans font-bold text-[13px] text-white group-hover/menu-item:text-[#2563EB] transition-colors flex items-center gap-1.5">
                    <span>{child}</span>
                    <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover/menu-item:opacity-100 group-hover/menu-item:translate-x-0 transition-all duration-200 text-[#2563EB]" />
                  </span>
                  <span className="font-sans text-[11px] text-white/70 group-hover/menu-item:text-white/90 transition-colors leading-tight font-medium">
                    {detail.desc}
                  </span>
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DESKTOP NAV ITEM — Code 1's mega-menu visual, wired to Code 2's
   router-based navigation. Open/close state is lifted to Navbar
   (activeMegaMenu) so the full-page backdrop blur can react to it.
═══════════════════════════════════════════════════════════════ */
interface NavItemDesktopProps {
  key?: string;
  item: {
    name: string;
    id: string;
    dropdown: string[];
    align: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onToggle: () => void;
}

function NavItemDesktop({ item, isActive, onMouseEnter, onMouseLeave, onToggle }: NavItemDesktopProps) {
  const config = megaMenuConfigs[item.name];
  const navigate = useNavigate();

  return (
    <div
      className="group h-full flex items-center static"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={(e) => {
          if (item.dropdown.length > 0) {
            e.preventDefault();
            onToggle();
          }
        }}
        className={`flex items-center gap-1 text-[10px] min-[1320px]:text-[11px] min-[1400px]:text-[12.5px] 2xl:text-[14.5px] font-sans font-bold py-2 px-0.5 min-[1320px]:px-1 min-[1400px]:px-2 transition-all duration-200 relative whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-[0.98] shrink-0 ${
          isActive ? 'text-[#2563EB]' : 'text-white hover:text-[#2563EB]'
        }`}
      >
        <span>{item.name}</span>
        {item.dropdown.length > 0 && (
          <ChevronDown size={13} className={`transition-transform duration-200 ${isActive ? 'rotate-180 text-[#2563EB]' : 'text-white/60 group-hover:text-[#2563EB]'}`} />
        )}
      </button>

      {item.dropdown.length > 0 && config && (
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.985, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 pointer-events-auto"
            >
              <div className="w-[92vw] max-w-[1020px] max-h-[82vh] overflow-y-auto overscroll-contain touch-pan-y border border-white/20 rounded-[2rem] shadow-[0_35px_80px_rgba(0,0,0,0.55)] p-6 md:p-8 bg-[#0A2850]/96 backdrop-blur-xl text-left relative" data-lenis-prevent="true">
                {/* Invisible mouse hover bridge */}
                <div className="absolute inset-x-0 -top-8 h-10 bg-transparent" />

                <div className="grid grid-cols-12 gap-8 items-stretch">
                  {/* Left side: Link Columns */}
                  <div className={`${config.images ? 'col-span-12 lg:col-span-7' : 'col-span-12'} flex flex-col justify-between`}>
                    {NAV_TREES[item.name] ? (
                      <TreeFlyoutMenu
                        tree={NAV_TREES[item.name]}
                        onNavigate={(label, parentLabel) => {
                          onMouseLeave();
                          const segment = resolveNavSegment(label, parentLabel, location.pathname);
                          if (segment) {
                            if (segment.startsWith('http://') || segment.startsWith('https://')) {
                              window.open(segment, '_blank', 'noopener,noreferrer');
                            } else {
                              navigate(`/${segment}`);
                            }
                          }
                        }}
                      />
                    ) : (
                    <div className={`grid gap-x-6 gap-y-4 ${config.columns.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {config.columns.map((col, colIdx) => (
                        <div key={`${col.title}-${colIdx}`} className="flex flex-col">
                          <div className="mb-3 flex items-center justify-between border-b border-white/15 pb-2">
                            <span className="text-[10px] font-mono tracking-[0.2em] text-[#2563EB] uppercase font-bold">
                              {col.title}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            {col.items.map((subItemName) => {
                              const detail = dropdownDetails[subItemName] || { desc: '', icon: Sparkles };
                              return (
                                <button
                                  key={subItemName}
                                  onClick={() => {
                                    onMouseLeave();
                                    const segment = resolveNavSegment(subItemName, col.title, location.pathname);
                                    if (segment) {
                                      if (segment.startsWith('http://') || segment.startsWith('https://')) {
                                        window.open(segment, '_blank', 'noopener,noreferrer');
                                      } else {
                                        navigate(`/${segment}`);
                                      }
                                    }
                                  }}
                                  className="group/menu-item text-left flex flex-col gap-0.5 py-1.5 px-3 -mx-3 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/15 transition-all duration-200 w-full cursor-pointer"
                                >
                                  <span className="font-sans font-bold text-[13px] text-white group-hover/menu-item:text-[#2563EB] transition-colors flex items-center gap-1.5">
                                    <span>{subItemName}</span>
                                    <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover/menu-item:opacity-100 group-hover/menu-item:translate-x-0 transition-all duration-200 text-[#2563EB]" />
                                  </span>
                                  <span className="font-sans text-[11px] text-white/70 group-hover/menu-item:text-white/90 transition-colors leading-tight font-medium">
                                    {detail.desc}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    )}

                    {config.accentText && (
                      <div className="pt-4 border-t border-white/15 flex items-center gap-2 text-white/60 font-sans text-xs font-semibold mt-4">
                        <Sparkles size={13} className="text-[#2563EB]" />
                        <span>{config.accentText}</span>
                      </div>
                    )}
                  </div>

                  {/* Right side: Image collage */}
                  {config.images && (
                    <div className="hidden lg:flex col-span-5 gap-3 h-[220px] items-stretch pl-4 border-l border-white/10">
                      <div className="w-[90px] h-full rounded-[1.25rem] overflow-hidden shadow-sm relative group/item-img shrink-0 border border-white/10">
                        <img
                          src={config.images.tall1.url}
                          alt={config.images.tall1.caption}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/item-img:scale-105"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                          <span className="text-[9.5px] font-bold text-white leading-tight font-sans">
                            {config.images.tall1.caption}
                          </span>
                        </div>
                      </div>

                      <div className="w-[90px] h-full rounded-[1.25rem] overflow-hidden shadow-sm relative group/item-img shrink-0 border border-white/10">
                        <img
                          src={config.images.tall2.url}
                          alt={config.images.tall2.caption}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/item-img:scale-105"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                          <span className="text-[9.5px] font-bold text-white leading-tight font-sans">
                            {config.images.tall2.caption}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 h-full rounded-[1.25rem] overflow-hidden shadow-md relative group/item-img border border-white/10">
                        <img
                          src={config.images.landscape.url}
                          alt={config.images.landscape.caption}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/item-img:scale-105"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://ckpcet.ac.in/img/home-page/slider/si-01.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3">
                          <span className="text-[8.5px] font-mono font-bold uppercase tracking-widest text-[#2563EB] mb-0.5">
                            {config.images.landscape.tag}
                          </span>
                          <h4 className="text-white text-[11px] font-bold leading-tight font-sans">
                            {config.images.landscape.caption}
                          </h4>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function NavContent({
  menuOpen,
  setMenuOpen,
  isScrolled,
  activeMegaMenu,
  setActiveMegaMenu
}: {
  menuOpen: boolean;
  setMenuOpen: any;
  isScrolled: boolean;
  activeMegaMenu: string | null;
  setActiveMegaMenu: (name: string | null) => void;
}) {
  const scrollToId = useSmoothScrollTo();

  return (
    <>
      {/* ── DESKTOP: logo-left / links-center / actions-right (Code 1 layout) ── */}
      <div className={`hidden lg:flex items-center justify-between w-full px-3 sm:px-5 lg:px-6 2xl:px-9 transition-all duration-300 relative z-30 ${isScrolled ? 'h-[43px]' : 'h-[54px]'}`}>
        {/* Left: Logo + Title */}
        <div
          className="flex items-center gap-2 cursor-pointer group/logo select-none shrink-0"
          onClick={() => scrollToId('home')}
        >
          <div className={`rounded-full bg-white border-2 border-[#2563EB] flex items-center justify-center p-0.5 shadow-md transition-all duration-300 group-hover/logo:scale-[1.06] shrink-0 ${isScrolled ? 'w-7.5 h-7.5 2xl:w-8.5 2xl:h-8.5' : 'w-9.5 h-9.5 2xl:w-[42px] 2xl:h-[42px]'}`}>
            <CkpcmcLogo className="w-full h-full" showText={false} />
          </div>
          <div className="flex flex-col text-left justify-center">
            <span className="font-sans font-bold tracking-[0.05em] text-white leading-none text-[12.5px] xl:text-[13.5px] 2xl:text-[14.5px] uppercase">
              C. K. PITHAWALLA
            </span>
            <div className="flex flex-col tracking-[0.05em] uppercase text-[#7DD3FC] font-sans font-bold text-[7px] xl:text-[7.5px] 2xl:text-[8.2px] leading-[1.1] mt-0.5 opacity-95">
              <span>COLLEGE OF ENGINEERING</span>
              <span>& TECHNOLOGY</span>
            </div>
          </div>
        </div>

        {/* Center: Nav items */}
        <div className="flex-1 flex items-center justify-center gap-x-0 min-[1320px]:gap-x-1 min-[1400px]:gap-x-2.5 2xl:gap-x-4 min-w-0 mx-1 overflow-visible">
          {navItems.map((item) => (
            <NavItemDesktop
              key={item.name}
              item={item}
              isActive={activeMegaMenu === item.name}
              onMouseEnter={() => setActiveMegaMenu(item.name)}
              onMouseLeave={() => setActiveMegaMenu(null)}
              onToggle={() => setActiveMegaMenu(activeMegaMenu === item.name ? null : item.name)}
            />
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-x-1.5 shrink-0">
          <button
            onClick={() => scrollToId('admissions')}
            className="group/btn flex items-center gap-1.5 px-2.5 lg:px-4 py-1.5 rounded-full text-[9px] lg:text-[9.5px] font-bold uppercase tracking-wider transition-all duration-300 bg-[#2563EB] hover:bg-[#1D4ED8] text-white hover:shadow-[0_4px_18px_rgba(37,99,235,0.45)] hover:scale-105 active:scale-95 shadow-md cursor-pointer whitespace-nowrap select-none"
          >
            <span>APPLY NOW</span>
            <ArrowRight size={10} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 stroke-[3]" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1.5 px-2 lg:px-3 py-1.5 rounded-full text-[9px] lg:text-[9.5px] font-bold uppercase tracking-wider transition-all duration-300 bg-white/10 hover:bg-white/18 border border-white/18 hover:border-white/30 text-white active:scale-95 cursor-pointer whitespace-nowrap select-none"
          >
            <Menu size={12} className="shrink-0 stroke-[2.5]" />
            <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>
      </div>

      {/* ── MOBILE / TABLET header — optimized for small viewports & zero overlap ── */}
      <div className={`lg:hidden flex items-center justify-between w-full px-3 min-[380px]:px-4 py-1 sm:px-5 transition-all duration-300 ${isScrolled ? 'h-[44px] sm:h-[48px]' : 'h-[52px] sm:h-[58px]'}`}>
        <div
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 cursor-pointer group/logo justify-start select-none min-w-0 max-w-[65%] sm:max-w-none"
          onClick={() => scrollToId('home')}
        >
          <div className={`rounded-full bg-white border-2 border-[#2563EB] flex items-center justify-center p-0.5 shadow-md transition-all duration-300 group-hover/logo:scale-[1.05] active:scale-95 shrink-0 ${
            isScrolled ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-9.5 h-9.5 min-[380px]:w-[42px] min-[380px]:h-[42px] sm:w-[44px] sm:h-[44px]'
          }`}>
            <CkpcmcLogo className="w-full h-full" showText={false} />
          </div>
          <div className="flex flex-col text-left justify-center select-none min-w-0">
            <span className={`font-sans font-bold tracking-[0.05em] text-white leading-none whitespace-nowrap ${isScrolled ? 'text-[11px] sm:text-[13px]' : 'text-[12.5px] min-[360px]:text-[13.5px] sm:text-[15px]'}`}>
              C. K. PITHAWALLA
            </span>
            <div className={`tracking-[0.05em] uppercase text-[#7DD3FC] font-sans font-bold leading-[1.1] mt-0.5 whitespace-nowrap flex flex-col ${isScrolled ? 'text-[6.2px] sm:text-[7.5px]' : 'text-[7px] min-[360px]:text-[7.8px] sm:text-[8.5px]'}`}>
              <span>COLLEGE OF ENGINEERING</span>
              <span>& TECHNOLOGY</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => scrollToId('admissions')}
            className="px-3 min-[380px]:px-3.5 sm:px-4 py-1.5 rounded-full text-[9px] min-[380px]:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#2563EB] hover:bg-[#1D4ED8] text-white transition-all duration-300 active:scale-95 shadow-md cursor-pointer select-none min-h-[28px] sm:min-h-[32px] flex items-center justify-center shrink-0 whitespace-nowrap"
          >
            <span>APPLY</span>
          </button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="text-white px-2.5 min-[380px]:px-3 sm:px-3.5 py-1.5 bg-white/10 hover:bg-white/20 active:bg-white/10 rounded-full border border-white/20 transition-all duration-300 flex items-center gap-1.5 text-[9px] min-[380px]:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider cursor-pointer select-none min-h-[28px] sm:min-h-[32px] shrink-0 whitespace-nowrap"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={12} className="text-white shrink-0 stroke-[2.5] sm:w-[13px] sm:h-[13px]" />
            <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
          </motion.button>
        </div>
      </div>
    </>
  );
}

interface NavProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onItemClick?: (name: string, id: string) => void;
}

function BottomNavItem({
  item,
  isActive,
  onItemClick
}: {
  key?: string;
  item: { name: string; id: string };
  isActive: boolean;
  onItemClick: (name: string, id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const subItems = menuSubmaps[item.name] || [];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => {
          if (subItems.length === 0) onItemClick(item.name, item.id);
          else setIsOpen(!isOpen);
        }}
        className={`relative px-4 sm:px-5 py-2.5 mx-0.5 text-[9.5px] sm:text-[11px] xl:text-[12px] uppercase tracking-wider font-bold transition-all duration-300 rounded-2xl overflow-visible hover:scale-105 active:scale-95 cursor-pointer select-none flex items-center gap-1 ${
          'text-white'
        }`}
      >
        {isActive && (
          <motion.div
            layoutId="bottomNavIndicator"
            className="absolute inset-0 bg-[#0A2850] rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.15)]"
            transition={{ type: "spring", stiffness: 700, damping: 35, mass: 0.6 }}
          />
        )}
        <span className="relative z-10 whitespace-nowrap">{item.name}</span>
        {subItems.length > 0 && (
          <ChevronDown size={11} className="relative z-10 text-white rotate-180 transition-transform duration-200" />
        )}
      </button>

      {subItems.length > 0 && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 min-w-[230px] max-h-[70vh] overflow-y-auto overscroll-contain touch-pan-y bg-[#0A2850]/96 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-[0_-15px_40px_rgba(0,0,0,0.45)] z-50 flex flex-col gap-0.5"
              data-lenis-prevent="true"
            >
              <div className="absolute w-full h-4 bg-transparent left-0 bottom-[-16px]" />
              <div className="px-2.5 py-1.5 border-b border-white/15 mb-1 flex items-center justify-between">
                <span className="text-[8.5px] font-mono tracking-[0.2em] text-[#2563EB] uppercase font-bold">Explore {item.name}</span>
                <div className="w-1 h-1 rounded-full bg-[#2563EB] animate-pulse" />
              </div>
              {subItems.map((subItem) => {
                const detail = dropdownDetails[subItem] || { desc: '', icon: Sparkles };
                const SubIcon = detail.icon;
                return (
                  <button
                    key={subItem}
                    onClick={() => {
                      const segment = resolveNavSegment(subItem, item.name, location.pathname);
                      if (segment) {
                        if (segment.startsWith('http://') || segment.startsWith('https://')) {
                          window.open(segment, '_blank', 'noopener,noreferrer');
                        } else {
                          navigate(`/${segment}`);
                        }
                        setIsOpen(false);
                      }
                    }}
                    className="group/item flex items-center justify-between px-2.5 py-1.5 rounded-xl text-left text-white/90 hover:bg-white/10 border border-transparent hover:border-white/15 transition-all duration-200 cursor-pointer w-full hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-white/10 text-[#2563EB] group-hover/item:bg-[#2563EB] group-hover/item:text-[#1E293B] transition-colors shrink-0">
                        <SubIcon size={12} />
                      </div>
                      <span className="font-sans font-bold text-[11px] text-white group-hover/item:text-[#2563EB] transition-colors whitespace-nowrap">
                        {subItem}
                      </span>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function getActiveCategory(pathname: string): string {
  if (pathname.startsWith('/about/') || pathname.startsWith('/academics/') || pathname.includes('programs')) return 'About Us';
  if (pathname.startsWith('/departments/') || pathname.startsWith('/courses/')) return 'Departments';
  if (pathname.startsWith('/committees/')) return 'Committees';
  if (pathname.startsWith('/iqac/')) return 'IQAC';
  if (pathname.startsWith('/staff/')) return 'Staff';
  if (pathname.startsWith('/campus-life/')) return 'Campus Life';
  if (pathname.startsWith('/student-corner/')) return 'Student Corner';
  if (pathname.startsWith('/activities/')) return 'Activities';
  return 'About Us';
}

// Resolves the real scraped section (e.g. "Departments", "Resources") from the
// URL's first path segment, since getSlug()/keyToHashSegment build routes like
// "/departments/computer-engineering" — falls back to getActiveCategory if no
// section slug matches, so nothing that already worked stops working.
function getActiveSectionName(pathname: string): string {
  const cleanPath = pathname.replace(/^\//, '');
  const firstSegment = cleanPath.split('/')[0];
  const match = scrapedData.navigation_menu.find((sec) => {
    const secSlug = sec.section.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-').replace(/[^\w-]/g, '');
    return secSlug === firstSegment;
  });
  return match ? match.section : getActiveCategory(pathname);
}

// Given the current path and its section, finds which NAV_TREES node "owns"
// this page — either the page IS a top-level node, or it's one of that node's
// children — and returns just that node's children (so clicking into
// "Institute" only ever shows Institute's own sub-items, not all of About Us).
function getSubpageDropdownItems(pathname: string, sectionName: string): string[] {
  const cleanPath = pathname.replace(/^\//, '').replace(/\/$/, '');
  const tree = NAV_TREES[sectionName] || NAV_TREES['About Us'];
  const fullList = menuSubmaps[sectionName] || [];
  if (!tree) return fullList;

  // 1. Walk each top-level node in the section tree
  for (const node of tree) {
    // Check if the node's own resolved segment matches cleanPath
    const nodeSeg1 = keyToHashSegment[`${sectionName} > ${node.label}`];
    const nodeSeg2 = keyToHashSegment[node.label];
    const nodeSeg3 = resolveNavSegment(node.label, sectionName, pathname);

    if (
      (nodeSeg1 && (nodeSeg1 === cleanPath || `/${nodeSeg1}` === pathname)) ||
      (nodeSeg2 && (nodeSeg2 === cleanPath || `/${nodeSeg2}` === pathname)) ||
      (nodeSeg3 && (nodeSeg3 === cleanPath || `/${nodeSeg3}` === pathname))
    ) {
      return node.children && node.children.length > 0 ? node.children : [node.label];
    }

    // Check each child of that node
    if (node.children && node.children.length > 0) {
      const matchedChild = node.children.find((child) => {
        const seg1 = resolveNavSegment(child, node.label, pathname);
        const seg2 = resolveNavSegment(child, sectionName, pathname);
        const seg3 = keyToHashSegment[`${node.label} > ${child}`];
        const seg4 = keyToHashSegment[`${sectionName} > ${child}`];
        const seg5 = keyToHashSegment[child];

        return (
          (seg1 && (seg1 === cleanPath || `/${seg1}` === pathname)) ||
          (seg2 && (seg2 === cleanPath || `/${seg2}` === pathname)) ||
          (seg3 && (seg3 === cleanPath || `/${seg3}` === pathname)) ||
          (seg4 && (seg4 === cleanPath || `/${seg4}` === pathname)) ||
          (seg5 && (seg5 === cleanPath || `/${seg5}` === pathname))
        );
      });

      if (matchedChild) {
        return node.children;
      }
    }
  }

  // 2. Fall back to returning the full section list only if no node or child matches anywhere in the tree
  return fullList;
}

const getShortName = (name: string): string => {
  const shortNames: Record<string, string> = {
    'About Us': 'About', 'Vision and Mission': 'Vision', 'Mission': 'Mission',
    'Founder': 'Founder', 'About Trust': 'Trust', 'Trustee': 'Trustees',
    'Director\'s Message': 'Director', 'Principal\'s Message': 'Principal', 'HOD\'s Message': 'HOD',
    'Computer Engineering': 'Computer', 'Civil Engineering': 'Civil', 'Electrical Engineering': 'Electrical', 'Mechanical Engineering': 'Mechanical', 'Electronics and Communication Engineering': 'ECE', 'Information Technology': 'IT', 'Applied Science and Humanities': 'AS&H', 'AIML': 'AIML',
    'Academic Council': 'Academic', 'Co-Curricular Activities': 'Co-Curricular', 'Finance': 'Finance',
    'Innovation Council': 'Innovation', 'Magazine': 'Magazine', 'NIRF': 'NIRF',
    'NSS Sankul': 'NSS', 'Purchase/Equipment': 'Purchase', 'Timetable': 'Timetable',
    'Nasha Mukti Hostel Committee': 'Nasha Mukti', 'ABC ID Committee': 'ABC ID',
    'Gujarat Technological University': 'GTU', 'AICTE Approval': 'AICTE', 'Mandatory Disclosure': 'Disclosure',
    'Anti-Ragging Committee': 'Anti-Ragging', 'ST-SC Cell': 'ST-SC',
    'Sexual Harassment Committee': 'POSH Cell',
    'About IQAC': 'About IQAC', 'IQAC Objectives': 'Objectives', 'Minutes & ATR': 'Minutes',
    'Teaching Staff': 'Teachers', 'Non-Teaching Staff': 'Staff',
    'Sports': 'Sports', 'Hostel': 'Hostel', 'Canteen': 'Canteen',
    'Classrooms': 'Classrooms', 'Library': 'Library',
    'Inter-College Achievements': 'Achievements', 'Competitions': 'Comps',
    'Gallery': 'Gallery', 'Media Appreciation': 'Media',
    'News': 'News', 'Events': 'Events',
    'News & Events': 'News',
    'Campus Life': 'Campus', 'Faculty': 'Faculty', 'Admissions': 'Admissions',
    'General Information': 'Gen Info',
    'Programs Offered': 'Programs',
    'Course Curriculum': 'Curriculum',
    'Time Tables': 'Timetables',
    'Admin Staff': 'Admin Staff',
    'Innovations in Teaching & Learning': 'Innovations',
  };
  return shortNames[name] || name;
};

// ─── Apple Liquid Glass Dock Track ──────────
const GlassDock = ({ children, activeValue }: { children: React.ReactNode; activeValue?: string | boolean }) => {
  const shellRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);
  const capsuleRef = useRef<HTMLDivElement>(null);

  const tabsRef = useRef<{ left: number; width: number; value: string }[]>([]);
  const currentXRef = useRef(0);
  const targetXRef = useRef(0);
  const currentWRef = useRef(0);
  const targetWRef = useRef(0);
  const velocityXRef = useRef(0);
  const velocityWRef = useRef(0);
  const fluidStretchRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const capsuleStartXRef = useRef(0);
  const didDragRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const measureAndSync = useCallback(() => {
    if (!flexRef.current) return;
    const pills = Array.from(flexRef.current.querySelectorAll('[data-pill]'));
    const tabs = pills.map((el) => {
      const htmlEl = el as HTMLElement;
      return { left: htmlEl.offsetLeft, width: htmlEl.offsetWidth, value: htmlEl.getAttribute('data-value') || '' };
    });
    tabsRef.current = tabs;

    const idx = tabs.findIndex((t) => t.value === String(activeValue));
    const activeIdx = idx >= 0 ? idx : 0;
    if (tabs[activeIdx] && !isDraggingRef.current) {
      const w = tabs[activeIdx].width * 1.1;
      const xOffset = (w - tabs[activeIdx].width) / 2;
      targetXRef.current = tabs[activeIdx].left - xOffset;
      targetWRef.current = w;
    }
  }, [activeValue]);

  useEffect(() => {
    measureAndSync();
    const ro = new ResizeObserver(measureAndSync);
    if (flexRef.current) ro.observe(flexRef.current);
    window.addEventListener('resize', measureAndSync);
    return () => { ro.disconnect(); window.removeEventListener('resize', measureAndSync); };
  }, [measureAndSync]);

  useEffect(() => {
    if (!shellRef.current) return;
    const activeBtn = shellRef.current.querySelector('[data-active="true"]') as HTMLElement;
    if (activeBtn) activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeValue]);

  useEffect(() => {
    const loop = () => {
      if (!isDraggingRef.current) {
        const springX = (targetXRef.current - currentXRef.current) * 0.25;
        velocityXRef.current = (velocityXRef.current + springX) * 0.65;
        currentXRef.current += velocityXRef.current;

        const springW = (targetWRef.current - currentWRef.current) * 0.25;
        velocityWRef.current = (velocityWRef.current + springW) * 0.65;
        currentWRef.current += velocityWRef.current;
      }

      const speed = Math.abs(velocityXRef.current);
      const targetStretch = isDraggingRef.current
        ? Math.min(speed * 0.014 + 0.06, 0.28)
        : Math.min(speed * 0.010, 0.20);
      fluidStretchRef.current += (targetStretch - fluidStretchRef.current) * 0.16;

      const scaleX = 1 + fluidStretchRef.current;
      const scaleY = 1 - fluidStretchRef.current * 0.42;

      if (capsuleRef.current) {
        capsuleRef.current.style.width = `${currentWRef.current}px`;
        capsuleRef.current.style.transform = `translate3d(${currentXRef.current}px, 0, 0) scale(${scaleX.toFixed(4)}, ${scaleY.toFixed(4)})`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const getLocalX = (clientX: number) => {
    if (!flexRef.current) return 0;
    const rect = flexRef.current.getBoundingClientRect();
    return clientX - rect.left + flexRef.current.scrollLeft;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    isDraggingRef.current = true;
    didDragRef.current = false;
    dragStartXRef.current = getLocalX(e.clientX);
    capsuleStartXRef.current = currentXRef.current;
    velocityXRef.current = 0;
    velocityWRef.current = 0;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    isDraggingRef.current = true;
    didDragRef.current = false;
    dragStartXRef.current = getLocalX(e.touches[0].clientX);
    capsuleStartXRef.current = currentXRef.current;
    velocityXRef.current = 0;
    velocityWRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const localX = getLocalX(e.clientX);
    const dx = localX - dragStartXRef.current;
    if (Math.abs(dx) > 12) didDragRef.current = true;

    let newX = capsuleStartXRef.current + dx;
    const tabs = tabsRef.current;
    const maxX = tabs.length > 0 ? tabs[tabs.length - 1].left + tabs[tabs.length - 1].width - currentWRef.current : 0;

    if (newX < 0) newX = newX * 0.22;
    if (newX > maxX) newX = maxX + (newX - maxX) * 0.22;

    velocityXRef.current = newX - currentXRef.current;
    currentXRef.current = newX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const localX = getLocalX(e.touches[0].clientX);
    const dx = localX - dragStartXRef.current;
    if (Math.abs(dx) > 12) {
      didDragRef.current = true;
      if (e.cancelable) e.preventDefault();
    }

    let newX = capsuleStartXRef.current + dx;
    const tabs = tabsRef.current;
    const maxX = tabs.length > 0 ? tabs[tabs.length - 1].left + tabs[tabs.length - 1].width - currentWRef.current : 0;

    if (newX < 0) newX = newX * 0.22;
    if (newX > maxX) newX = maxX + (newX - maxX) * 0.22;

    velocityXRef.current = newX - currentXRef.current;
    currentXRef.current = newX;
  };

  const releasePointer = (e?: any) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const tabs = tabsRef.current;
    if (!tabs.length) return;

    if (didDragRef.current) {
      const currentCenter = currentXRef.current + currentWRef.current / 2;
      let nearestIdx = 0, minDist = Infinity;
      tabs.forEach((tab, i) => {
        const dist = Math.abs(tab.left + tab.width / 2 - currentCenter);
        if (dist < minDist) { minDist = dist; nearestIdx = i; }
      });
      const w = tabs[nearestIdx].width * 1.1;
      const xOffset = (w - tabs[nearestIdx].width) / 2;
      targetXRef.current = tabs[nearestIdx].left - xOffset;
      targetWRef.current = w;
      setTimeout(() => {
        (flexRef.current?.querySelectorAll('[data-pill]')[nearestIdx] as HTMLElement)?.click();
      }, 0);
    }
    requestAnimationFrame(() => { didDragRef.current = false; });
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!shellRef.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta) shellRef.current.scrollLeft += delta * 0.6;
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (didDragRef.current) { e.stopPropagation(); e.preventDefault(); }
  };

  return (
    <div className="relative group/dock max-w-full w-full min-w-0">
      <div
        ref={shellRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={releasePointer}
        onPointerLeave={releasePointer}
        onPointerCancel={releasePointer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={releasePointer}
        onTouchCancel={releasePointer}
        onWheel={handleWheel}
        onClickCapture={handleClickCapture}
        style={{ touchAction: 'pan-y' }}
        className={[
          'relative flex items-center max-w-full w-fit min-w-0 overflow-x-auto no-scrollbar mx-auto',
          'bg-black/25 backdrop-blur-3xl saturate-150',
          'px-2.5 sm:px-3 md:px-3.5 lg:px-4 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-[999px]',
          'border border-white/20 border-t-white/35 border-b-black/40',
          'shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7),0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.25)]',
          'touch-pan-y select-none cursor-grab active:cursor-grabbing',
        ].join(' ')}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,transparent_45%)] z-10" />
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_55%)] z-10" />

        <div ref={flexRef} className="relative flex items-center flex-nowrap gap-0.5 md:gap-3 lg:gap-2 xl:gap-2.5 shrink-0 z-20 px-0.5">
          {children}

          <div
            ref={capsuleRef}
            className="absolute top-0 left-0 z-[15] pointer-events-none will-change-transform rounded-[999px] overflow-hidden"
            style={{
              height: '100%',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(25px) saturate(250%) contrast(110%) brightness(115%) hue-rotate(5deg)',
              WebkitBackdropFilter: 'blur(25px) saturate(250%) contrast(110%) brightness(115%) hue-rotate(5deg)',
              boxShadow: `
                0 8px 24px -4px rgba(0,0,0,0.4),
                0 0 20px rgba(255,255,255,0.2),
                inset 0 1px 1.5px rgba(255,255,255,0.8),
                inset 0 -1px 1.5px rgba(0,0,0,0.25)
              `,
            }}
          >
            <div className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
              style={{
                padding: '1.5px',
                background: 'linear-gradient(170deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 45%, transparent 70%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor', maskComposite: 'exclude',
              }} />
            <div className="absolute inset-0 rounded-[inherit] pointer-events-none z-10"
              style={{
                padding: '1.5px',
                background: 'linear-gradient(135deg, transparent 35%, rgba(255,255,255,0.4) 60%, rgba(210,180,255,0.25) 82%, rgba(160,210,255,0.3) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor', maskComposite: 'exclude',
              }} />
            <div className="hidden md:block absolute bottom-[3px] left-3.5 md:left-3 lg:left-4 xl:left-5 right-3.5 md:right-3 lg:right-4 xl:right-5 h-[2.5px] rounded-full bg-[#2563EB] shadow-[0_0_12px_rgba(37,99,235,1),0_0_4px_rgba(255,255,255,0.6)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Liquid Glass Pill Button ──────
function GlassPillBtn({
  label,
  value,
  icon: Icon,
  isActive,
  layoutPrefix,
  onClick,
}: {
  key?: string;
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }> | any;
  isActive: boolean;
  layoutPrefix: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      data-pill
      data-value={value}
      data-active={isActive ? "true" : "false"}
      onClick={onClick}
      className={[
        'relative z-20 flex items-center gap-1 md:gap-1.5 lg:gap-1.5',
        'px-3.5 md:px-3 lg:px-3 xl:px-3.5 py-2 md:py-2 lg:py-2',
        'rounded-[999px]',
        'text-[10px] md:text-[9.5px] lg:text-[10px] xl:text-[10.5px] font-bold uppercase tracking-wider',
        'transition-colors duration-200 cursor-pointer select-none shrink-0',
        'active:scale-95',
        isActive ? 'text-white font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]' : 'text-white/85 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]',
      ].join(' ')}
    >
      {Icon && (
        <span className={`relative z-10 transition-colors duration-200 ${isActive ? 'text-[#2563EB] md:text-white drop-shadow-[0_0_10px_rgba(37,99,235,0.8)] md:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'text-white/85'}`}>
          <Icon className="w-4 h-4 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
        </span>
      )}
      <span className={`relative z-10 whitespace-nowrap hidden md:inline ${isActive ? 'drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] font-bold' : ''}`}>
        {label}
      </span>
    </button>
  );
}

function BottomScrollNav({ activeSection, setActiveSection, onItemClick }: NavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isSubPage = location.pathname !== '/';
  const activeCategory = getActiveSectionName(location.pathname);
  const subItems = isSubPage ? getSubpageDropdownItems(location.pathname, activeCategory) : [];

  return (
    <div className="flex items-center justify-center w-full max-w-full lg:max-w-5xl xl:max-w-6xl mx-auto px-1 sm:px-2">
      <AnimatePresence mode="wait" initial={false}>
        {isSubPage ? (
          <motion.div
            key="subpage-dock"
            className="w-full max-w-full flex justify-center"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: [0.25, 1, 0.5, 1] } }}
            exit={{ opacity: 0, y: 10, scale: 0.97, transition: { duration: 0.16, ease: [0.7, 0, 0.84, 0] } }}
          >
            <GlassDock activeValue={location.pathname}>
              <button
                data-pill
                data-value="/"
                data-active={location.pathname === '/' ? "true" : "false"}
                onClick={() => navigate('/')}
                className="flex items-center gap-1 px-2.5 md:px-3 lg:px-3.5 xl:px-4 py-2 md:py-2 lg:py-2 rounded-[12px] sm:rounded-[14px] text-[9.5px] md:text-[9.5px] lg:text-[10px] font-bold uppercase tracking-[0.12em] text-white hover:text-[#2563EB] hover:bg-white/8 transition-all duration-200 cursor-pointer shrink-0 active:scale-95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]"
              >
                <HomeIcon className="w-[18.5px] h-[18.5px] sm:w-[13px] sm:h-[13px] md:w-[12px] md:h-[12px] lg:w-[13px] lg:h-[13px]" />
                <span className="hidden md:inline">Home</span>
              </button>

              <span className="text-white/20 font-thin select-none shrink-0 text-sm px-0.5">|</span>

              <LayoutGroup id="subpage-nav">
                {subItems.map((subItem) => {
                  const segment = resolveNavSegment(subItem, activeCategory, location.pathname);
                  const cleanLoc = location.pathname.replace(/\/$/, '');
                  const cleanSeg = segment ? segment.replace(/^\//, '').replace(/\/$/, '') : '';
                  const isActive = Boolean(cleanSeg && !cleanSeg.startsWith('http://') && !cleanSeg.startsWith('https://') && cleanLoc === `/${cleanSeg}`);
                  const detail = dropdownDetails[subItem] || { icon: Sparkles };
                  const SubIcon = detail.icon;
                  return (
                    <GlassPillBtn
                      key={subItem}
                      label={getShortName(subItem)}
                      value={segment ? `/${segment}` : ''}
                      icon={SubIcon}
                      isActive={isActive}
                      layoutPrefix="subpage"
                      onClick={() => {
                        if (segment) {
                          if (segment.startsWith('http://') || segment.startsWith('https://')) {
                            window.open(segment, '_blank', 'noopener,noreferrer');
                          } else {
                            navigate(`/${segment}`);
                          }
                        }
                      }}
                    />
                  );
                })}
              </LayoutGroup>
            </GlassDock>
          </motion.div>
        ) : (
          <motion.div
            key="landing-dock"
            className="w-full max-w-full flex justify-center"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: [0.25, 1, 0.5, 1] } }}
            exit={{ opacity: 0, y: 10, scale: 0.97, transition: { duration: 0.16, ease: [0.7, 0, 0.84, 0] } }}
          >
            <GlassDock activeValue={activeSection}>
              <LayoutGroup id="landing-nav">
                {landingNavItems.map((item) => {
                  const isActive = activeSection === item.name;
                  return (
                    <GlassPillBtn
                      key={item.name}
                      label={getShortName(item.name)}
                      value={item.name}
                      icon={item.icon}
                      isActive={isActive}
                      layoutPrefix="landing"
                      onClick={() => {
                        if (onItemClick) onItemClick(item.name, item.id);
                        else setActiveSection(item.name);
                      }}
                    />
                  );
                })}
              </LayoutGroup>
            </GlassDock>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface NavbarProps {
  isReady?: boolean;
  onOpenAdmissions?: () => void;
}

export default function Navbar({ isReady = true, onOpenAdmissions }: NavbarProps) {
  const scrollToId = useSmoothScrollTo();
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();
  const isSubPage = location.pathname !== '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(() => {
    if (isSubPage) return false;
    return typeof window !== 'undefined' ? window.scrollY <= 450 : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);


  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [timeStr, setTimeStr] = useState<string>('');
  const [activeSection, setActiveSection] = useState(bottomNavItems[0].name);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(typeof window !== 'undefined' && window.innerWidth < 1280);



  // ── Sync mobile/tablet viewport flag ──
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lenis = useLenis();

  useEffect(() => {
    if (menuOpen) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [menuOpen, lenis]);

  // ── Smooth cross-page navigation scroll handling ──
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      window.history.replaceState({}, document.title);

      const timer = setTimeout(() => {
        if (targetId === 'home') {
          if (lenis) {
            lenis.scrollTo(0, { immediate: true });
          } else {
            window.scrollTo(0, 0);
          }
        } else {
          const el = document.getElementById(targetId);
          if (el) {
            if (lenis) {
              lenis.resize();
              lenis.scrollTo(el, {
                offset: -80,
                immediate: true
              });
            } else {
              const rect = el.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              window.scrollTo({ top: rect.top + scrollTop - 80 });
            }
          }
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.state, lenis]);

  // ── sync active section from URL ──
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') return;
    if (path.startsWith('/about/') || path.startsWith('/academics/')) setActiveSection('About Us');
    else if (path.startsWith('/departments/') || path.startsWith('/courses/')) setActiveSection('Departments');
    else if (path.startsWith('/resources/')) setActiveSection('Resources');
    else if (path.startsWith('/t-and-p/') || path.startsWith('/placement/')) setActiveSection('T & P');
    else if (path.startsWith('/activities/')) setActiveSection('Activities');
    else {
      const sec = getActiveSectionName(path);
      if (sec) setActiveSection(sec);
    }
  }, [location.pathname]);

  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleItemClick = (name: string, id: string) => {
    setActiveSection(name);
    isScrollingRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    scrollToId(id);
    timeoutRef.current = setTimeout(() => { isScrollingRef.current = false; }, 1400);
  };

  const [showBottomNav, setShowBottomNav] = useState(() => {
    if (isSubPage) return true;
    return typeof window !== 'undefined' ? window.scrollY > 450 : false;
  });

  // Subpages: header never shows, bottom nav always shows. No scroll math needed —
  // this alone guarantees the header can never appear on a subpage on any device.
  useEffect(() => {
    if (isSubPage) {
      setVisible(false);
      setShowBottomNav(true);
    }
  }, [isSubPage, location.pathname]);

  const lastScrollYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const activeSectionRef = useRef(activeSection);
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // ── Unified scroll handler — ZONE-based (position only, no direction/delta math).
  // This is what makes the behavior identical and reliable across desktop, mobile,
  // and tablet: instead of guessing "did the user scroll up or down" from noisy
  // frame-to-frame deltas (which break under tablet momentum/rubber-band scrolling),
  // every frame simply asks "where is the hero, where is the footer, right now" and
  // derives visibility purely from that. There is nothing left to desync.
  useEffect(() => {
    let rafId: number | null = null;
    const HIDE_THRESHOLD = 150;          // announcement bar collapse point
    const HERO_FALLBACK_THRESHOLD = 450; // used only if #home isn't found in DOM
    const FOOTER_REVEAL_FRACTION = 0.5;  // footer counts as "reached" once its top crosses 50% of viewport
    const HERO_EL_ID = 'home';
    const FOOTER_EL_ID = 'footer';

    const getClampedScrollY = () => {
      const raw = window.scrollY;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      return Math.max(0, Math.min(raw, maxScroll));
    };

    // Three mutually exclusive zones. Exactly one visibility outcome per zone,
    // so both navbars being visible at once is structurally impossible.
    const computeZone = (scrollYVal: number): 'hero' | 'footer' | 'body' => {
      const heroEl = document.getElementById(HERO_EL_ID);
      const inHero = heroEl
        ? heroEl.getBoundingClientRect().bottom > 0
        : scrollYVal <= HERO_FALLBACK_THRESHOLD;

      if (inHero) return 'hero';

      const footerEl = document.getElementById(FOOTER_EL_ID);
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight * FOOTER_REVEAL_FRACTION) return 'footer';
      }

      return 'body';
    };

    const handleAllScroll = () => {
      const scrollYVal = getClampedScrollY();

      // Announcement bar collapse styling
      setIsScrolled(scrollYVal > HIDE_THRESHOLD);

      if (isSubPage) {
        // Subpages: header never shows, bottom nav always shows — regardless of
        // scroll position or direction.
        setVisible(false);
        setShowBottomNav(true);
      } else {
        const zone = computeZone(scrollYVal);
        if (zone === 'hero') {
          // Hero visible: header only.
          setVisible(true);
          setShowBottomNav(false);
        } else if (zone === 'footer') {
          // Footer reached: both navbars hidden.
          setVisible(false);
          setShowBottomNav(false);
        } else {
          // Everywhere else (including scrolling back up from the footer through
          // Admissions etc, on any device): bottom nav only.
          setVisible(false);
          setShowBottomNav(true);
        }
      }

      lastScrollYRef.current = scrollYVal;

      // ── Active-section highlight (unchanged — already purely position-based) ──
      if (!isScrollingRef.current) {
        const targetItems = isSubPage ? bottomNavItems : landingNavItems;
        const sections = targetItems.map(item => ({ name: item.name, el: document.getElementById(item.id) })).filter(s => s.el);
        if (sections.length > 0) {
          if (scrollYVal < 120) {
            setActiveSection(targetItems[0].name);
          } else {
            const isAtBottom = (window.innerHeight + scrollYVal) >= document.documentElement.scrollHeight - 60;
            if (isAtBottom) {
              setActiveSection(targetItems[targetItems.length - 1].name);
            } else {
              const targetY = window.innerHeight * 0.38;
              let foundActive = false;
              for (const section of sections) {
                if (section.el) {
                  const rect = section.el.getBoundingClientRect();
                  if (rect.top <= targetY && rect.bottom >= targetY) {
                    setActiveSection(section.name);
                    foundActive = true;
                    break;
                  }
                }
              }
              if (!foundActive) {
                let closestSection = activeSectionRef.current;
                let minDistance = Infinity;
                for (const section of sections) {
                  if (section.el) {
                    const rect = section.el.getBoundingClientRect();
                    const distance = Math.min(Math.abs(rect.top - targetY), Math.abs(rect.bottom - targetY));
                    if (distance < minDistance) {
                      minDistance = distance;
                      closestSection = section.name;
                    }
                  }
                }
                setActiveSection(closestSection);
              }
            }
          }
        }
      }
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        handleAllScroll();
        rafId = null;
      });
    };

    const handleResize = () => {
      handleScroll();
    };

    handleAllScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    // Lenis intercepts real scrolling (often via transform), so on some
    // touch/tablet + iframe-preview combinations the native window 'scroll'
    // event can fire late or not at all. Lenis' own scroll event is the
    // authoritative "the page actually moved" signal — listen to it too.
    lenis?.on('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      lenis?.off('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isSubPage, location.pathname, lenis]);

  // ── clock ──
  useEffect(() => {
    const updateTime = () => setTimeStr(new Date().toLocaleTimeString('en-US', { hour12: false }));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => { clearInterval(interval); if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <>
      {/* ── Mega-menu full-page backdrop blur (Code 1 behavior, closes on hover-out) ── */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            key="mega-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 bg-black/45 backdrop-blur-md z-40 pointer-events-auto"
            onMouseEnter={() => setActiveMegaMenu(null)}
          />
        )}
      </AnimatePresence>

      {/* ── TOP NAV — Floating iPhone notch style ── */}
      {!isSubPage && (
        <motion.nav
          key="top-nav"
          initial={{ y: -130 }}
          animate={{ y: (visible || menuOpen) ? 0 : -220 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[98%] max-w-[1720px] pointer-events-auto"
        >
          <div className="w-full rounded-[26px] sm:rounded-[32px] bg-[#0A2850]/92 backdrop-blur-xl border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.4)] flex flex-col relative overflow-visible">
            {/* Announcement bar — collapses on scroll */}
            <div className={`bg-gradient-to-r from-[#071524] via-[#0E2E4B] to-[#071524] border-t-2 border-[#2563EB] border-b border-[#2563EB]/35 text-white/90 hidden xl:block relative z-10 w-full overflow-hidden transition-all duration-300 rounded-t-[26px] sm:rounded-t-[32px] ${
              isScrolled ? 'h-0 py-0 opacity-0 border-t-0 border-b-0' : 'h-[30px] py-1 px-6 sm:px-8 lg:px-12 opacity-100'
            }`}>
              <div className="w-full flex items-center justify-between font-sans text-[10px] xl:text-[11px] font-bold text-white/95 leading-normal select-none relative">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-1.5 font-bold text-white tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>NAVYUG VIDYABHAVAN TRUST</span>
                  </div>
                  <span className="text-white/20">|</span>
                  <span className="text-white/80 font-medium">Affiliated to Gujarat Technological University (GTU) & Approved by AICTE</span>
                </div>
                <div className="flex items-center gap-x-4">
                  <button
                    onClick={onOpenAdmissions}
                    className="font-bold text-[10px] uppercase text-[#2563EB] hover:text-white border border-[#2563EB]/50 hover:border-[#2563EB] bg-[#2563EB]/10 hover:bg-[#2563EB]/30 px-2.5 py-0.5 rounded-md select-none tracking-wider cursor-pointer transition-all flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                    <span>Admissions Open 2026-27</span>
                  </button>
                  <span className="text-white/20">|</span>
                  <a href="tel:+916355055839" className="flex items-center gap-1 hover:text-blue-200 transition-colors text-white/90">
                    <Phone size={11} className="text-white" />
                    <span>Enquiries: +91 63550 55839</span>
                  </a>
                  <span className="text-white/20">|</span>
                  <a href="mailto:contact@ckpcet.ac.in" className="flex items-center gap-1 hover:text-blue-200 transition-colors text-white/90">
                    <Mail size={11} className="text-white" />
                    <span>contact@ckpcet.ac.in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Main nav row */}
            <div className="bg-transparent w-full relative z-30 overflow-visible">
              <NavContent
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                isScrolled={isScrolled}
                activeMegaMenu={activeMegaMenu}
                setActiveMegaMenu={setActiveMegaMenu}
              />
            </div>
          </div>
        </motion.nav>
      )}

      {/* ── BOTTOM FLOATING NAV — Appears strictly when reaching footer section ── */}
      <AnimatePresence>
        {showBottomNav && (
          <motion.nav
            key="bottom-nav"
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
            className="fixed bottom-3 sm:bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[98vw] md:w-[96vw] max-w-6xl flex justify-center items-center pointer-events-auto select-none px-1 sm:px-2"
          >
            <div className="max-w-full">
              <BottomScrollNav
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                onItemClick={handleItemClick}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── OVERLAY MENU — unchanged ── */}
      <AnimatePresence>
        {menuOpen && (
          <OverlayMenu
            setMenuOpen={setMenuOpen}
            navigate={navigate}
            scrollToId={scrollToId}
            timeStr={timeStr}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OVERLAY MENU — unchanged from Code 2
═══════════════════════════════════════════════════════════════ */
const OVERLAY_TREE: { key: string; label: string }[] = visibleNavSections.map(sec => ({
  key: sec.section,
  label: sec.section,
}));

const POPULAR_TERMS = ['Admissions', 'Computer Engg.', 'Civil Engg.', 'Mechanical Engg.', 'Hostel', 'Gallery'];
const PROSPECTUS_IMG = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80';

function OverlayMenu({
  setMenuOpen,
  navigate,
  scrollToId,
  timeStr,
}: {
  setMenuOpen: (v: boolean) => void;
  navigate: (path: string) => void;
  scrollToId: (id: string) => void;
  timeStr: string;
}) {
  const [stack, setStack] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [note, setNote] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const autoTimer = useRef<ReturnType<typeof setTimeout>>();
  const current = stack[stack.length - 1] ?? null;

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    const t = setTimeout(() => searchRef.current?.focus(), 420);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [setMenuOpen]);

  const runAuto = (val: string) => {
    setQuery(val);
    if (autoTimer.current) clearTimeout(autoTimer.current);
    const q = val.trim();
    if (q.length < 3) { setNote(q ? 'Keep typing…' : ''); return; }
    setNote('Searching…');
    autoTimer.current = setTimeout(() => {
      setMenuOpen(false);
      navigate(`/search?query=${encodeURIComponent(q)}`);
    }, 550);
  };
  const submit = () => {
    const q = query.trim();
    if (!q) return;
    if (autoTimer.current) clearTimeout(autoTimer.current);
    setMenuOpen(false);
    navigate(`/search?query=${encodeURIComponent(q)}`);
  };
  const goSub = (subItem: string, parentLabel?: string | null) => {
    const segment = resolveNavSegment(subItem, parentLabel, location.pathname);
    setMenuOpen(false);
    if (segment) {
      if (segment.startsWith('http://') || segment.startsWith('https://')) {
        window.open(segment, '_blank', 'noopener,noreferrer');
      } else {
        navigate(`/${segment}`);
      }
    }
  };

  const panelLeftVariants = {
    hidden: { x: isMobile ? 0 : '-102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1 },
    visible: { x: 0, y: 0, opacity: 1, transition: { ease: isMobile ? 'easeInOut' : [0.25, 1, 0.5, 1], duration: isMobile ? 0.5 : 0.65, delay: isMobile ? 0.01 : 0.05 } },
    exit: { x: isMobile ? 0 : '-102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1, transition: { ease: [0.7, 0, 0.84, 0], duration: isMobile ? 0.4 : 0.5, delay: 0.06 } }
  };
  const panelCtaVariants = {
    hidden: { x: isMobile ? 0 : '-102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1 },
    visible: { x: 0, y: 0, opacity: 1, transition: { ease: isMobile ? 'easeInOut' : [0.25, 1, 0.5, 1], duration: isMobile ? 0.5 : 0.65, delay: isMobile ? 0.04 : 0.12 } },
    exit: { x: isMobile ? 0 : '-102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1, transition: { ease: [0.7, 0, 0.84, 0], duration: isMobile ? 0.4 : 0.5, delay: 0 } }
  };
  const panelRightVariants = {
    hidden: { x: isMobile ? 0 : '102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1 },
    visible: { x: 0, y: 0, opacity: 1, transition: { ease: isMobile ? 'easeInOut' : [0.25, 1, 0.5, 1], duration: isMobile ? 0.5 : 0.65, delay: isMobile ? 0.02 : 0.02 } },
    exit: { x: isMobile ? 0 : '102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1, transition: { ease: [0.7, 0, 0.84, 0], duration: isMobile ? 0.4 : 0.5, delay: 0.12 } }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.045, delayChildren: isMobile ? 0.12 : 0.22 } }
  };
  const itemVariants = {
    hidden: { y: 22, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 20, stiffness: 170 } }
  };
  const sublistVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.035, delayChildren: 0.06 } }
  };
  const subitemVariants = {
    hidden: { x: 18, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', damping: 18, stiffness: 190 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeIn', delay: 0.35 } }}
      className="fixed inset-0 z-[60] flex flex-col md:flex-row bg-[#120F0F] overflow-y-auto md:overflow-hidden pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Menu and search"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <motion.button
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-[80] flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0A2850] text-white hover:bg-[#2563EB] hover:text-[#1E293B] border border-[#2563EB]/50 hover:border-transparent transition-all duration-300 active:scale-95 cursor-pointer group/close shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-md"
      >
        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 text-white group-hover/close:text-[#1E293B]">Close</span>
        <X size={15} className="stroke-[3] transition-all duration-300 group-hover/close:rotate-90 text-[#2563EB] group-hover/close:text-[#1E293B]" />
      </motion.button>

      <div className="order-2 md:order-1 hidden md:flex flex-col w-full md:w-2/5 relative z-10 h-full overflow-y-auto no-scrollbar">
        <motion.section
          variants={panelLeftVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative bg-white text-[#1E293B] overflow-hidden md:h-1/2 md:min-h-0 md:border-b-[10px] border-[#1E293B] p-4 md:p-12 flex flex-col justify-center shrink-0"
        >
          <div aria-hidden className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#2563EB]/25 pointer-events-none" />
          <div className="relative z-10 max-w-xl">
            <label htmlFor="ckp-search" className="block font-sans font-semibold text-xl md:text-3xl mb-2 md:mb-4">Search</label>
            <div className="flex items-center border-b-[3px] border-[#1E293B]">
              <input
                id="ckp-search"
                ref={searchRef}
                type="text"
                value={query}
                onChange={(e) => runAuto(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
                placeholder="Please enter a search term"
                autoComplete="off"
                className="flex-1 bg-transparent outline-none py-1.5 md:py-3 text-base md:text-xl placeholder:text-[#1E293B]/40"
              />
              <button onClick={submit} aria-label="Search" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#1E293B] hover:text-[#1D4ED8] transition-colors cursor-pointer shrink-0">
                <Search size={20} className="stroke-[2.5]" />
              </button>
            </div>
            <div className="mt-2 font-mono text-[10px] md:text-[11px] text-[#1E293B]/50 min-h-[16px]">{note}</div>
            <div className="mt-3 md:mt-6">
              <h4 className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#1E293B]/50 font-bold mb-2 md:mb-3">Popular search terms</h4>
              <div className="flex flex-wrap gap-x-3 md:gap-x-5 gap-y-1.5 md:gap-y-2">
                {POPULAR_TERMS.map((term) => (
                  <button
                    key={term}
                    onClick={() => { setQuery(term); runAuto(term); searchRef.current?.focus(); }}
                    className="relative font-sans font-semibold text-xs md:text-[15px] text-[#1E293B] cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-0.5 after:bg-[#1D4ED8] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={panelCtaVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative hidden md:flex bg-[#0A2850] text-white overflow-hidden md:h-1/2 md:min-h-0 p-4 sm:p-6 md:p-8 flex-col items-center justify-center shrink-0 text-center select-none"
        >
          {/* Background Image of students & campus with rich overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
              alt="Campus & Admissions" 
              className="w-full h-full object-cover opacity-50 transition-all duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2850]/95 via-[#0A2850]/80 to-[#0A2850]/65" />
          </div>

          <div aria-hidden className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-[#2563EB]/10 pointer-events-none" />
          
          <div className="relative z-10 flex-1 min-w-0 max-w-md flex flex-col items-center justify-center text-center gap-2 md:gap-3.5 my-auto">
            <div className="space-y-1 lg:space-y-1.5 text-center">
              <span className="font-mono text-[8px] md:text-[9.5px] tracking-[0.2em] text-[#2563EB] uppercase font-bold block text-center">2026 Admissions open</span>
              <h3 className="font-sans text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-tight text-center">Embark on Your Academic Journey</h3>
              <p className="text-[10px] md:text-xs text-white/70 leading-relaxed font-medium text-center line-clamp-2 md:line-clamp-none max-w-sm">Join Surat's premier institution for engineering, technology, and applied sciences. Apply online today.</p>
            </div>
            <button
              onClick={() => { setMenuOpen(false); scrollToId('admissions'); }}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-[#1E293B] font-sans font-bold text-[10px] md:text-[11px] lg:text-[12px] tracking-wider uppercase py-2 px-5 md:py-2.5 md:px-6 transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_10px_20px_rgba(37,99,235,0.15)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:scale-[1.02] mx-auto rounded-md"
            >
              Apply Now <ArrowRight size={13} className="stroke-[3] shrink-0" />
            </button>
          </div>
        </motion.section>
      </div>

      <motion.section
        variants={panelRightVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="order-1 md:order-2 relative flex-1 bg-white text-[#1E293B] overflow-hidden md:border-l-[10px] border-[#1E293B] min-h-[50vh] md:min-h-0"
      >
        <div aria-hidden className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-[#2563EB]/12 pointer-events-none" />
        <div className="relative z-10 h-full w-full overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {current === null ? (
              <motion.nav
                key="root"
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative h-full w-full max-h-full min-h-[400px] md:absolute md:inset-0 overflow-y-auto overscroll-contain touch-pan-y no-scrollbar px-5 sm:px-8 md:px-12 pt-20 md:pt-24 pb-14"
                data-lenis-prevent="true"
              >
                <motion.div 
                  variants={itemVariants} 
                  className="flex items-center justify-between border-b-2 border-[#1E293B] pb-3 mb-4 min-h-[36px]"
                >
                  {showMobileSearch ? (
                    <div className="flex items-center w-full gap-2 text-[#1E293B]">
                      <Search size={14} className="stroke-[2.5] text-[#1E293B]/60" />
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => runAuto(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
                        placeholder="Search website..."
                        className="flex-1 bg-transparent text-sm font-sans font-semibold outline-none text-[#1E293B] placeholder:text-[#1E293B]/40 py-0.5"
                        autoFocus
                      />
                      {query && (
                        <button onClick={() => setQuery('')} className="p-1 text-[#1E293B]/40 hover:text-[#1E293B] cursor-pointer">
                          <X size={14} className="stroke-[2.5]" />
                        </button>
                      )}
                      <button 
                        onClick={() => { setShowMobileSearch(false); setQuery(''); }} 
                        className="text-[#1E293B]/60 hover:text-[#1E293B] p-1 cursor-pointer"
                        aria-label="Close search"
                      >
                        <X size={15} className="stroke-[2.5]" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#1E293B]/45 font-bold">Main menu</span>
                      <button 
                        onClick={() => setShowMobileSearch(true)} 
                        className="md:hidden text-[#1E293B]/60 hover:text-[#1D4ED8] transition-colors p-1 -mr-1 cursor-pointer"
                        aria-label="Search website"
                      >
                        <Search size={15} className="stroke-[2.5]" />
                      </button>
                    </>
                  )}
                </motion.div>
                {OVERLAY_TREE.map((item, i) => {
                  return (
                    <motion.button
                      variants={itemVariants}
                      key={item.key}
                      onClick={() => setStack([item.key])}
                      className="group/row w-full flex items-center justify-between gap-4 py-4 border-b border-[#1E293B]/12 text-left cursor-pointer"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-[10px] font-bold text-[#1D4ED8] bg-[#2563EB]/12 rounded px-2 py-0.5">0{i + 1}</span>
                        <span className="relative font-sans font-semibold text-[22px] md:text-[26px] uppercase tracking-tight after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#1D4ED8] after:origin-left after:scale-x-0 group-hover/row:after:scale-x-100 after:transition-transform after:duration-300 group-hover/row:text-[#1D4ED8] transition-colors">
                          {item.label}
                        </span>
                      </span>
                      <span className="w-9 h-9 shrink-0 rounded-full bg-[#0A2850] text-white flex items-center justify-center transition-all duration-300 group-hover/row:bg-[#2563EB] group-hover/row:text-[#1E293B] group-hover/row:translate-x-1">
                        <ArrowRight size={16} className="stroke-[2.5]" />
                      </span>
                    </motion.button>
                  );
                })}
                <motion.button
                  variants={itemVariants}
                  onClick={() => { setMenuOpen(false); scrollToId('admissions'); }}
                  className="group/row w-full flex items-center justify-between gap-4 py-4 border-b border-[#1E293B]/12 text-left cursor-pointer"
                >
                  <span className="font-sans font-semibold text-[22px] md:text-[26px] uppercase tracking-tight group-hover/row:text-[#1D4ED8] transition-colors">Contact &amp; Apply</span>
                </motion.button>
              </motion.nav>
            ) : (
              <motion.div
                key="sub"
                variants={sublistVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative h-full w-full max-h-full min-h-[400px] md:absolute md:inset-0 overflow-y-auto overscroll-contain touch-pan-y px-5 sm:px-8 md:px-10 lg:px-14 pt-20 md:pt-24 pb-16 flex flex-col pointer-events-auto"
                data-lenis-prevent="true"
              >
                <motion.button
                  variants={subitemVariants}
                  onClick={() => setStack((s) => s.slice(0, -1))}
                  className="group/back flex items-center gap-3 mb-5 cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-full bg-[#0A2850] text-white flex items-center justify-center transition-all duration-300 group-hover/back:bg-[#2563EB] group-hover/back:text-[#1E293B] group-hover/back:-translate-x-1">
                    <ArrowRight size={16} className="stroke-[2.5] rotate-180" />
                  </span>
                  <span className="font-sans font-bold text-[15px]">Back</span>
                </motion.button>
                <motion.div variants={subitemVariants} className="font-sans font-bold text-[26px] md:text-[30px] uppercase tracking-tight border-b-2 border-[#1E293B] pb-3 mb-3">
                  {current}
                </motion.div>
                {(() => {
                  const parent = stack.length >= 2 ? stack[stack.length - 2] : null;
                  const children = (current && NAV_TREES[current]
                    ? NAV_TREES[current].map(node => node.label)
                    : current && parent && NODE_CHILDREN_MAP[`${parent} > ${current}`]
                      ? NODE_CHILDREN_MAP[`${parent} > ${current}`]
                      : current && NODE_CHILDREN_MAP[current]
                        ? NODE_CHILDREN_MAP[current]
                        : (menuSubmaps[current] || [])
                  );
                  return children.map((subItem) => {
                    const detail = dropdownDetails[subItem] || { desc: '', icon: Sparkles };
                    const SubIcon = detail.icon;
                    const parentTree = current && NAV_TREES[current] ? NAV_TREES[current] : (parent && NAV_TREES[parent] ? NAV_TREES[parent] : null);
                    const node = parentTree ? parentTree.find(n => n.label === subItem) : null;
                    const hasChildren = !!node?.children?.length;
                    return (
                    <motion.button
                      variants={subitemVariants}
                      key={subItem}
                      onClick={() => {
                        if (hasChildren) {
                          setStack((s) => [...s, subItem]);
                        } else {
                          goSub(subItem, current);
                        }
                      }}
                      className="group/sub w-full flex items-center gap-4 py-3.5 border-b border-[#1E293B]/10 text-left cursor-pointer"
                    >
                      <span className="p-2 rounded-lg bg-[#1E293B]/5 text-[#1E293B]/50 group-hover/sub:bg-[#2563EB]/20 group-hover/sub:text-[#1D4ED8] transition-colors shrink-0">
                        <SubIcon size={16} />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-sans font-bold text-[16px] group-hover/sub:text-[#1D4ED8] transition-colors leading-tight">{subItem}</span>
                        {detail.desc && <span className="font-sans text-[11px] text-[#1E293B]/50 mt-0.5 leading-snug">{detail.desc}</span>}
                      </span>
                      <ArrowRight size={13} className="ml-auto text-[#1D4ED8] opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all shrink-0" />
                    </motion.button>
                  );
                });
              })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </motion.div>
  );
}