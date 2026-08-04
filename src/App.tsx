import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { AboutSection } from "./components/About";
import { PrincipalMessage } from "./components/PrincipalMessage";
import Courses from "./components/Courses";
import CampusLife from "./components/CampusLife";
import Faculty from "./components/Faculty";
import BlogsAndMagazine from "./components/BlogsAndMagazine";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";
import NewsBlogs from "./components/NewsBlogs";
import ChatbotButton from "./components/ChatbotButton";
import AdmissionsPopup from "./components/AdmissionsPopup";

// Subpages
import Overview from "./pages/about/Overview";
import VisionMission from "./pages/about/VisionMission";
import Mission from "./pages/about/Mission";
import Founder from "./pages/about/Founder";
import Trust from "./pages/about/Trust";
import Trustee from "./pages/about/Trustee";
import DirectorsMessage from "./pages/about/DirectorsMessage";
import PrincipalsMessage from "./pages/about/PrincipalsMessage";
import HodsMessage from "./pages/about/HodsMessage";
import ReachUs from "./pages/about/ReachUs";
import CampusMap from "./pages/about/CampusMap";
import AdministrativeSetup from "./pages/about/AdministrativeSetup";
import EmployeeServiceRules from "./pages/about/EmployeeServiceRules";
import GeneralInformation from "./pages/about/GeneralInformation";
import ProgramsOffered from "./pages/academics/ProgramsOffered";
import AdmissionPage from "./pages/academics/AdmissionPage";
import InnovationsPage from "./pages/academics/InnovationsPage";
import AdminStaffPage from "./pages/academics/AdminStaffPage";
import DeansFacultyPage from "./pages/about/DeansFacultyPage";
import MOUsPage from "./pages/about/MOUsPage";
import GrantsPage from "./pages/about/GrantsPage";
import NoticeBoardPage from "./pages/academics/NoticeBoardPage";
import NewsAnnouncementsPage from "./pages/academics/NewsAnnouncementsPage";
import CurriculumPage from "./pages/academics/CurriculumPage";
import TimeTablesPage from "./pages/academics/TimeTablesPage";
import AicteApprovalPage from "./pages/about/AicteApprovalPage";
import AicteEssentialsPage from "./pages/about/AicteEssentialsPage";
import CommitteesPage from "./pages/about/Committees";
import AffiliationsPage from "./pages/about/Affiliations";
import NirfPage from "./pages/about/Nirf";
import AuditReportsPage from "./pages/about/AuditReports";
import DepartmentPage from "./pages/departments/DepartmentPage";
import DynamicSubPage from "./pages/DynamicSubPage";

export default function App() {
  const location = useLocation();
  const isSubPage = location.pathname !== "/";

  const [navbarReady, setNavbarReady] = useState(isSubPage);
  const [showAdmissionsPopup, setShowAdmissionsPopup] = useState(false);
  const hasShownAutoPopupRef = useRef(false);

  const handleQuotesComplete = () => {
    // 1. Quotes come up -> Navbar appears
    setNavbarReady(true);

    // 2. Navbar drops in -> Popup opens after short delay ONLY ONCE
    if (!hasShownAutoPopupRef.current) {
      hasShownAutoPopupRef.current = true;
      setTimeout(() => {
        setShowAdmissionsPopup(true);
      }, 600);
    }
  };

  // Reset navbar visibility if switching back to subpages/home, and add safety timer for navbar + popup
  useEffect(() => {
    if (isSubPage) {
      setNavbarReady(true);
    } else {
      const timer = setTimeout(() => {
        setNavbarReady(true);
        if (!hasShownAutoPopupRef.current) {
          hasShownAutoPopupRef.current = true;
          setShowAdmissionsPopup(true);
        }
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isSubPage]);

  // Scroll to top on route change & recalculate scroll bounds
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== 'undefined' && (window as any).lenis) {
      const lenis = (window as any).lenis;
      lenis.scrollTo(0, { immediate: true });
      const timer = setTimeout(() => {
        lenis.resize();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <SmoothScroll>
        <ChatbotButton />

        {/* Header bar container with animations */}
        <Navbar isReady={navbarReady} onOpenAdmissions={() => setShowAdmissionsPopup(true)} />

        {!isSubPage ? (
          <>
            <Hero 
              loaded={true} 
              isSubPage={false} 
              onQuotesComplete={handleQuotesComplete}
              onOpenAdmissions={() => setShowAdmissionsPopup(true)}
            />
            <main>
              <AboutSection />
              <NewsBlogs />
              <PrincipalMessage />
              <Courses />
              <CampusLife />
              <Faculty />
              <BlogsAndMagazine />
              <Admissions onOpenAdmissions={() => setShowAdmissionsPopup(true)} />
            </main>
          </>
        ) : (
          <main className="pt-0 min-h-screen bg-[#F8FAFC]">
            <Routes>
              {/* About Us / Institute Routes */}
              <Route path="/about/overview" element={<Overview />} />
              <Route path="/about/profile" element={<Overview />} />
              <Route path="/about-us/overview" element={<Overview />} />
              <Route path="/about-us/profile" element={<Overview />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/profile" element={<Overview />} />

              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/vision-and-mission" element={<VisionMission />} />
              <Route path="/about-us/vision-mission" element={<VisionMission />} />
              <Route path="/about-us/vision-and-mission" element={<VisionMission />} />
              <Route path="/vision-mission" element={<VisionMission />} />
              <Route path="/vision-and-mission" element={<VisionMission />} />

              <Route path="/about/mission" element={<Mission />} />
              <Route path="/about-us/mission" element={<Mission />} />
              <Route path="/mission" element={<Mission />} />

              <Route path="/about/founder" element={<Founder />} />
              <Route path="/about/the-founder" element={<Founder />} />
              <Route path="/about-us/founder" element={<Founder />} />
              <Route path="/about-us/the-founder" element={<Founder />} />
              <Route path="/founder" element={<Founder />} />
              <Route path="/the-founder" element={<Founder />} />

              <Route path="/about/trust" element={<Trust />} />
              <Route path="/about/the-trust" element={<Trust />} />
              <Route path="/about-us/trust" element={<Trust />} />
              <Route path="/about-us/the-trust" element={<Trust />} />
              <Route path="/trust" element={<Trust />} />
              <Route path="/the-trust" element={<Trust />} />

              <Route path="/about/trustees" element={<Trustee />} />
              <Route path="/about/governing-body" element={<Trustee />} />
              <Route path="/about-us/trustees" element={<Trustee />} />
              <Route path="/about-us/governing-body" element={<Trustee />} />
              <Route path="/trustees" element={<Trustee />} />
              <Route path="/governing-body" element={<Trustee />} />

              <Route path="/about/directors-message" element={<DirectorsMessage />} />
              <Route path="/about/campus-director-message" element={<DirectorsMessage />} />
              <Route path="/about-us/directors-message" element={<DirectorsMessage />} />
              <Route path="/about-us/campus-director-message" element={<DirectorsMessage />} />
              <Route path="/directors-message" element={<DirectorsMessage />} />
              <Route path="/campus-director-message" element={<DirectorsMessage />} />

              <Route path="/about/principals-message" element={<PrincipalsMessage />} />
              <Route path="/about/the-principal" element={<PrincipalsMessage />} />
              <Route path="/about/principal" element={<PrincipalsMessage />} />
              <Route path="/about-us/principals-message" element={<PrincipalsMessage />} />
              <Route path="/about-us/the-principal" element={<PrincipalsMessage />} />
              <Route path="/about-us/principal" element={<PrincipalsMessage />} />
              <Route path="/principals-message" element={<PrincipalsMessage />} />
              <Route path="/the-principal" element={<PrincipalsMessage />} />
              <Route path="/principal" element={<PrincipalsMessage />} />

              <Route path="/about/hods-message" element={<HodsMessage />} />
              <Route path="/about-us/hods-message" element={<HodsMessage />} />
              <Route path="/hods-message" element={<HodsMessage />} />

              <Route path="/about/reach-us" element={<ReachUs />} />
              <Route path="/about-us/reach-us" element={<ReachUs />} />
              <Route path="/reach-us" element={<ReachUs />} />

              <Route path="/about/campus-map" element={<CampusMap />} />
              <Route path="/about-us/campus-map" element={<CampusMap />} />
              <Route path="/campus-map" element={<CampusMap />} />

              <Route path="/about/administrative-setup" element={<AdministrativeSetup />} />
              <Route path="/about-us/administrative-setup" element={<AdministrativeSetup />} />
              <Route path="/administrative-setup" element={<AdministrativeSetup />} />

              <Route path="/about/employee-service-rules" element={<EmployeeServiceRules />} />
              <Route path="/about-us/employee-service-rules" element={<EmployeeServiceRules />} />
              <Route path="/employee-service-rules" element={<EmployeeServiceRules />} />

              <Route path="/about/general-information" element={<GeneralInformation />} />
              <Route path="/about-us/general-information" element={<GeneralInformation />} />
              <Route path="/academics/general-information" element={<GeneralInformation />} />
              <Route path="/about-us/academics/general-information" element={<GeneralInformation />} />
              <Route path="/about/academics/information" element={<GeneralInformation />} />
              <Route path="/about-us/academics/information" element={<GeneralInformation />} />
              <Route path="/general-information" element={<GeneralInformation />} />

              {/* Engineering Departments Routes */}
              <Route path="/departments/computer" element={<DepartmentPage deptKey="computer" />} />
              <Route path="/departments/computer-engineering" element={<DepartmentPage deptKey="computer" />} />
              <Route path="/departments/civil" element={<DepartmentPage deptKey="civil" />} />
              <Route path="/departments/civil-engineering" element={<DepartmentPage deptKey="civil" />} />
              <Route path="/departments/electrical" element={<DepartmentPage deptKey="electrical" />} />
              <Route path="/departments/electrical-engineering" element={<DepartmentPage deptKey="electrical" />} />
              <Route path="/departments/ecc" element={<DepartmentPage deptKey="ecc" />} />
              <Route path="/departments/electronics-and-communication-engineering" element={<DepartmentPage deptKey="ecc" />} />
              <Route path="/departments/it" element={<DepartmentPage deptKey="it" />} />
              <Route path="/departments/information-technology" element={<DepartmentPage deptKey="it" />} />
              <Route path="/departments/mechanical" element={<DepartmentPage deptKey="mechanical" />} />
              <Route path="/departments/mechanical-engineering" element={<DepartmentPage deptKey="mechanical" />} />
              <Route path="/departments/applied-science" element={<DepartmentPage deptKey="applied-science" />} />
              <Route path="/departments/applied-science-and-humanities" element={<DepartmentPage deptKey="applied-science" />} />
              <Route path="/departments/aiml" element={<DepartmentPage deptKey="aiml" />} />

              {/* Programs Offered Routes */}
              <Route path="/academics/programs-offered" element={<ProgramsOffered />} />
              <Route path="/academics/programs" element={<ProgramsOffered />} />
              <Route path="/about/academics/programs" element={<ProgramsOffered />} />
              <Route path="/about/programs-offered" element={<ProgramsOffered />} />
              <Route path="/about-us/programs-offered" element={<ProgramsOffered />} />
              <Route path="/about-us/academics/programs-offered" element={<ProgramsOffered />} />
              <Route path="/about-us/academics/programs" element={<ProgramsOffered />} />
              <Route path="/programs-offered" element={<ProgramsOffered />} />
              <Route path="/programs" element={<ProgramsOffered />} />

              {/* Admission Routes */}
              <Route path="/academics/admission" element={<AdmissionPage />} />
              <Route path="/about/academics/admission" element={<AdmissionPage />} />
              <Route path="/about/admission" element={<AdmissionPage />} />
              <Route path="/about-us/admission" element={<AdmissionPage />} />
              <Route path="/about-us/academics/admission" element={<AdmissionPage />} />
              <Route path="/admission" element={<AdmissionPage />} />

              {/* Innovations in Teaching & Learning Routes */}
              <Route path="/academics/innovations" element={<InnovationsPage />} />
              <Route path="/academics/innovations-teaching" element={<InnovationsPage />} />
              <Route path="/about/academics/innovations-teaching" element={<InnovationsPage />} />
              <Route path="/about/innovations" element={<InnovationsPage />} />
              <Route path="/about-us/innovations" element={<InnovationsPage />} />
              <Route path="/about-us/innovations-teaching" element={<InnovationsPage />} />
              <Route path="/about-us/academics/innovations" element={<InnovationsPage />} />
              <Route path="/about-us/academics/innovations-teaching" element={<InnovationsPage />} />
              <Route path="/innovations" element={<InnovationsPage />} />
              <Route path="/innovations-teaching" element={<InnovationsPage />} />

              {/* Admin Staff Routes */}
              <Route path="/academics/admin-staff" element={<AdminStaffPage />} />
              <Route path="/about/academics/admin-staff" element={<AdminStaffPage />} />
              <Route path="/about/admin-staff" element={<AdminStaffPage />} />
              <Route path="/about-us/admin-staff" element={<AdminStaffPage />} />
              <Route path="/about-us/academics/admin-staff" element={<AdminStaffPage />} />
              <Route path="/admin-staff" element={<AdminStaffPage />} />
              <Route path="/staff/admin-staff" element={<AdminStaffPage />} />

              {/* Notice Board Routes */}
              <Route path="/academics/notice-board" element={<NoticeBoardPage />} />
              <Route path="/about/academics/notice-board" element={<NoticeBoardPage />} />
              <Route path="/about/notice-board" element={<NoticeBoardPage />} />
              <Route path="/about-us/notice-board" element={<NoticeBoardPage />} />
              <Route path="/about-us/academics/notice-board" element={<NoticeBoardPage />} />
              <Route path="/notice-board" element={<NoticeBoardPage />} />

              {/* News & Announcements Routes */}
              <Route path="/academics/news-announcements" element={<NewsAnnouncementsPage />} />
              <Route path="/academics/announcements" element={<NewsAnnouncementsPage />} />
              <Route path="/about/academics/announcements" element={<NewsAnnouncementsPage />} />
              <Route path="/about/academics/news-announcements" element={<NewsAnnouncementsPage />} />
              <Route path="/about/announcements" element={<NewsAnnouncementsPage />} />
              <Route path="/about/news-announcements" element={<NewsAnnouncementsPage />} />
              <Route path="/about-us/announcements" element={<NewsAnnouncementsPage />} />
              <Route path="/about-us/news-announcements" element={<NewsAnnouncementsPage />} />
              <Route path="/about-us/academics/announcements" element={<NewsAnnouncementsPage />} />
              <Route path="/about-us/academics/news-announcements" element={<NewsAnnouncementsPage />} />
              <Route path="/announcements" element={<NewsAnnouncementsPage />} />
              <Route path="/news-announcements" element={<NewsAnnouncementsPage />} />

              {/* Deans & Faculty In-charges Routes */}
              <Route path="/about/deans" element={<DeansFacultyPage />} />
              <Route path="/about/direct/deans" element={<DeansFacultyPage />} />
              <Route path="/about/deans-and-faculty-in-charges" element={<DeansFacultyPage />} />
              <Route path="/about-us/deans" element={<DeansFacultyPage />} />
              <Route path="/about-us/direct/deans" element={<DeansFacultyPage />} />
              <Route path="/about-us/deans-and-faculty-in-charges" element={<DeansFacultyPage />} />
              <Route path="/deans-and-faculty-in-charges" element={<DeansFacultyPage />} />
              <Route path="/deans" element={<DeansFacultyPage />} />

              {/* MOUs Routes */}
              <Route path="/t-and-p/mou" element={<MOUsPage />} />
              <Route path="/training-and-placement/mou" element={<MOUsPage />} />
              <Route path="/about/mou" element={<MOUsPage />} />
              <Route path="/about/direct/mou" element={<MOUsPage />} />
              <Route path="/about/mous" element={<MOUsPage />} />
              <Route path="/about-us/mou" element={<MOUsPage />} />
              <Route path="/about-us/direct/mou" element={<MOUsPage />} />
              <Route path="/about-us/mous" element={<MOUsPage />} />
              <Route path="/mou" element={<MOUsPage />} />
              <Route path="/mous" element={<MOUsPage />} />

              {/* Grants Routes */}
              <Route path="/about/grants" element={<GrantsPage />} />
              <Route path="/about/direct/grants" element={<GrantsPage />} />
              <Route path="/about/grant" element={<GrantsPage />} />
              <Route path="/about-us/grants" element={<GrantsPage />} />
              <Route path="/about-us/direct/grants" element={<GrantsPage />} />
              <Route path="/about-us/grant" element={<GrantsPage />} />
              <Route path="/grants" element={<GrantsPage />} />
              <Route path="/grant" element={<GrantsPage />} />

              {/* Course Curriculum Routes */}
              <Route path="/academics/curriculum" element={<CurriculumPage />} />
              <Route path="/academics/course-curriculum" element={<CurriculumPage />} />
              <Route path="/about/academics/curriculum" element={<CurriculumPage />} />
              <Route path="/about/curriculum" element={<CurriculumPage />} />
              <Route path="/about-us/curriculum" element={<CurriculumPage />} />
              <Route path="/about-us/course-curriculum" element={<CurriculumPage />} />
              <Route path="/about-us/academics/curriculum" element={<CurriculumPage />} />
              <Route path="/about-us/academics/course-curriculum" element={<CurriculumPage />} />
              <Route path="/curriculum" element={<CurriculumPage />} />
              <Route path="/course-curriculum" element={<CurriculumPage />} />

              {/* Academic Time Tables Routes */}
              <Route path="/academics/time-tables" element={<TimeTablesPage />} />
              <Route path="/academics/timetables" element={<TimeTablesPage />} />
              <Route path="/about/academics/time-tables" element={<TimeTablesPage />} />
              <Route path="/about/time-tables" element={<TimeTablesPage />} />
              <Route path="/about-us/time-tables" element={<TimeTablesPage />} />
              <Route path="/about-us/timetables" element={<TimeTablesPage />} />
              <Route path="/about-us/academics/time-tables" element={<TimeTablesPage />} />
              <Route path="/time-tables" element={<TimeTablesPage />} />
              <Route path="/timetables" element={<TimeTablesPage />} />
              <Route path="/academic-time-tables" element={<TimeTablesPage />} />

              {/* AICTE Approval Routes */}
              <Route path="/about/affiliations-approvals/aicte-approval" element={<AicteApprovalPage />} />
              <Route path="/about/affiliations-approvals/aicte" element={<AicteApprovalPage />} />
              <Route path="/about/aicte-approval" element={<AicteApprovalPage />} />
              <Route path="/about/aicte" element={<AicteApprovalPage />} />
              <Route path="/about-us/affiliations-approvals/aicte-approval" element={<AicteApprovalPage />} />
              <Route path="/about-us/affiliations-approvals/aicte" element={<AicteApprovalPage />} />
              <Route path="/about-us/aicte-approval" element={<AicteApprovalPage />} />
              <Route path="/about-us/aicte" element={<AicteApprovalPage />} />
              <Route path="/affiliations-approvals/aicte-approval" element={<AicteApprovalPage />} />
              <Route path="/affiliations-and-approvals/aicte-approval" element={<AicteApprovalPage />} />
              <Route path="/aicte-approval" element={<AicteApprovalPage />} />
              <Route path="/aicte" element={<AicteApprovalPage />} />

              <Route path="/about/aicte-essentials" element={<AicteEssentialsPage />} />
              <Route path="/about/aicte-essentials/aicte-essentials" element={<AicteEssentialsPage />} />
              <Route path="/about-us/aicte-essentials" element={<AicteEssentialsPage />} />
              <Route path="/about-us/aicte-essentials/aicte-essentials" element={<AicteEssentialsPage />} />
              <Route path="/aicte-essentials" element={<AicteEssentialsPage />} />

              {/* Committees, Affiliations, NIRF, and Audit Reports Routes */}
              <Route path="/about/committees" element={<CommitteesPage />} />
              <Route path="/about/committees/:slug" element={<CommitteesPage />} />
              <Route path="/about-us/committees" element={<CommitteesPage />} />
              <Route path="/about-us/committees/:slug" element={<CommitteesPage />} />
              <Route path="/committees" element={<CommitteesPage />} />
              <Route path="/committees/:slug" element={<CommitteesPage />} />
              
              <Route path="/about/affiliations" element={<AffiliationsPage />} />
              <Route path="/about-us/affiliations" element={<AffiliationsPage />} />
              <Route path="/affiliations" element={<AffiliationsPage />} />

              <Route path="/about/nirf" element={<NirfPage />} />
              <Route path="/about-us/nirf" element={<NirfPage />} />
              <Route path="/about/nirf-rankings" element={<NirfPage />} />
              <Route path="/about-us/nirf-rankings" element={<NirfPage />} />
              <Route path="/nirf" element={<NirfPage />} />

              <Route path="/about/audit-reports" element={<AuditReportsPage />} />
              <Route path="/about-us/audit-reports" element={<AuditReportsPage />} />
              <Route path="/about/financial-audits" element={<AuditReportsPage />} />
              <Route path="/about-us/financial-audits" element={<AuditReportsPage />} />
              <Route path="/audit-reports" element={<AuditReportsPage />} />
              
              {/* Fallback path wildcard */}
              <Route path="*" element={<DynamicSubPage />} />
            </Routes>
          </main>
        )}
        
        {/* Render Footer only on homepage */}
        {!isSubPage && <Footer />}
      </SmoothScroll>

      <AdmissionsPopup isOpen={showAdmissionsPopup} onClose={() => setShowAdmissionsPopup(false)} />
    </>
  );
}
