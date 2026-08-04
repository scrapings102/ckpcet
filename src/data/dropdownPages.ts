import { INSTITUTE, TRUST, PRINCIPAL_MESSAGE, VISION_MISSION, CONTACT } from "./institute";
import { DEPARTMENTS } from "./departments";
import { cdn } from "../utils/image";

export interface DropdownPageContent {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
  keyHighlights: string[];
  image: string;
  extraDetails?: string;
  curriculumOrBody?: Array<{ title: string; desc: string }>;
}

const DEPT_IMAGE_MAP: Record<string, string> = {
  civil: cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 1200, 85),
  computer: cdn("https://ckpcet.ac.in/img/home-page/video-section/01Entry_03.jpg", 1200, 85),
  electrical: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/41.webp", 1200, 85),
  ecc: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/04.webp", 1200, 85),
  it: cdn("https://ckpcet.ac.in/img/home-page/video-section/25Hackathon.jpg", 1200, 85),
  mechanical: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/42.webp", 1200, 85),
  "applied-science": cdn("https://ckpcet.ac.in/img/home-page/mission-vision/10Library1.jpg", 1200, 85),
  aiml: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/38.webp", 1200, 85),
};

// All content below is sourced only from the official site's published pages
// (ckpcet.ac.in). Where the live site has a page title but no public write-up
// yet, that is stated plainly instead of inventing numbers/stats/fest names.

export const dropdownPagesData: Record<string, DropdownPageContent> = {
  "Overview": {
    title: "Overview",
    category: "About Us",
    subtitle: "About the Institute",
    description: `${INSTITUTE.fullName} is a self-financed institute which started functioning in ${INSTITUTE.established}, affiliated initially with ${INSTITUTE.previousAffiliation} and now with ${INSTITUTE.affiliation}. It is managed by the ${INSTITUTE.managedBy}.`,
    stats: [
      { label: "Established", value: INSTITUTE.established },
      { label: "Affiliation", value: INSTITUTE.affiliation },
      { label: "Approved By", value: INSTITUTE.approvedBy },
      { label: "Total Intake", value: "1,236 Students" },
    ],
    keyHighlights: [
      "Self-financed institute managed by the Navyug Vidyabhavan Trust.",
      "Six UG branches: Computer, Civil, Electrical, Electronics & Communication, Information Technology, Mechanical.",
      "One PG branch: Mechanical Engineering (Machine Design).",
      "Located on Surat-Dumas Road, Surat.",
    ],
    image: cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 1200, 85),
    extraDetails: "Source: ckpcet.ac.in/about/institute/profile",
  },
  "Management Trustees": {
    title: "Management Trustees",
    category: "About Us",
    subtitle: "The Navyug Vidyabhavan Trust",
    description: `${TRUST.name}, founded in ${TRUST.founded}, is registered as a Public Education Trust under the Bombay Public Trust Act, 1950 (Registration No. 1268), and is exempt under Section 80(G) of the Income-Tax Act.`,
    stats: [
      { label: "Trust Founded", value: TRUST.founded },
      { label: "Institutions Managed", value: `${TRUST.institutions.length}` },
      { label: "Registration", value: "No. 1268" },
    ],
    keyHighlights: [
      TRUST.mission,
      `Institutions under the Trust: ${TRUST.institutions.join(", ")}.`,
    ],
    image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/10Library1.jpg", 1200, 85),
    extraDetails: "Source: ckpcet.ac.in/about/institute/profile",
  },
  "Principal Message": {
    title: "Principal Message",
    category: "About Us",
    subtitle: `${PRINCIPAL_MESSAGE.name}, ${PRINCIPAL_MESSAGE.designation}`,
    description: PRINCIPAL_MESSAGE.body.split("\n\n")[0],
    stats: [
      { label: "Total Intake", value: "1,236 Seats" },
      { label: "UG Branches", value: "6 B.E. Programs" },
      { label: "PG Program", value: "Machine Design" },
    ],
    keyHighlights: [
      "Disciplined, conducive academic environment on Surat-Dumas Road.",
      "Industrial training, industrial visits, symposia, and workshops as part of the academic calendar.",
      "Sports, cultural programs, and social welfare activities (blood donation, thalassemia awareness).",
    ],
    image: cdn("https://ckpcet.ac.in/img/about-us/institute/principal.jpg", 1200, 85),
    extraDetails: PRINCIPAL_MESSAGE.body.split("\n\n")[1] || "",
  },
  "Vision And Mission": {
    title: "Vision And Mission",
    category: "About Us",
    subtitle: "Institutional Vision & Mission",
    description: VISION_MISSION.vision,
    stats: [],
    keyHighlights: VISION_MISSION.mission,
    image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/13.webp", 1200, 85),
    extraDetails: "Source: ckpcet.ac.in/about/institute/vision-mission",
  },
  "Reach Us": {
    title: "Reach Us",
    category: "About Us",
    subtitle: "Contact & Location",
    description: CONTACT.address,
    stats: [
      { label: "Phone", value: CONTACT.phones.join(" / ") },
      { label: "Email", value: CONTACT.emails.join(" / ") },
      { label: "Timings", value: CONTACT.timings },
    ],
    keyHighlights: [CONTACT.transport],
    image: cdn("https://ckpcet.ac.in/img/about-us/institute/routes-1.png", 1200, 85),
    extraDetails: "Source: ckpcet.ac.in/about/institute/reach-us",
  },
  "Committees": {
    title: "Committees",
    category: "About Us",
    subtitle: "Institutional Committees",
    description: "The institute maintains several standing committees for governance and student welfare. Membership lists for the current term (2024-26) are published on the official site; detailed activity reports are not yet publicly listed.",
    stats: [],
    keyHighlights: [
      "Academic Council", "Co-Curricular Activities Committee", "Finance Committee",
      "Institute Innovation Council", "Library Committee", "Magazine Committee",
      "NIRF Committee", "NSS Sankul", "Purchase/Equipment Committee",
      "Timetable Committee", "Nasha Mukti Hostel Committee", "ABC ID Committee",
    ],
    image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/13.webp", 1200, 85),
    extraDetails: "Source: ckpcet.ac.in/about/committees/*",
  },
  "NIRF Rankings": {
    title: "NIRF Rankings",
    category: "About Us",
    subtitle: "National Institutional Ranking Framework",
    description: "The institute participates in NIRF. Ranking outcomes are not publicly listed on the site beyond the nodal contact.",
    stats: [
      { label: "Nodal Officer", value: "Dr. Ami T. Choksi" },
      { label: "Contact", value: "nirf@ckpcet.ac.in" },
    ],
    keyHighlights: ["NIRF reports for prior years (2016-17 through 2020-21) are archived on the Academics > NIRF page."],
    image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/24.webp", 1200, 85),
    extraDetails: "Source: ckpcet.ac.in/about/nirf/contact-us",
  },
  "Admission": {
    title: "Admission",
    category: "Academics",
    subtitle: "Admission Procedure",
    description: "Admission procedure is finalized by the Joint Admission Committee for Professional Courses (ACPC) at Ahmedabad.",
    stats: [],
    keyHighlights: ["Visit the ACPC website for merit lists, vacant-seat rounds, and NRI/Management Quota seat notices."],
    image: cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 1200, 85),
    extraDetails: "Source: ckpcet.ac.in/about/academics/admission",
  },
  "General Information": {
    title: "General Information",
    category: "Academics",
    subtitle: "Campus & Programs",
    description: "Navyug Vidyabhavan Trust constructed the campus on a 100-acre allotted plot (R.S. No. 937, village Dumas, Surat), allotted by the Govt. of Gujarat in 2000.",
    stats: [{ label: "Campus Area", value: "100 Acres" }],
    keyHighlights: [
      "Degree branches offered: Civil, Computer, Electrical, Electronics & Communication, Information Technology, Mechanical Engineering.",
      "Campus zoning: Administrative & services core, Academic zone, Residential zone, Recreational zone.",
    ],
    image: cdn("https://ckpcet.ac.in/img/home-page/slider/si-01.jpg", 1200, 85),
    extraDetails: "Source: ckpcet.ac.in/about/academics/information",
  },
  "Innovations in Teaching & Learning": {
    title: "Innovations in Teaching & Learning",
    category: "Academics",
    subtitle: "Teaching Methods",
    description: "The institute uses Google Classroom and a Moodle server run by the Computer Engineering department for online learning resources.",
    stats: [],
    keyHighlights: [
      "PowerPoint-based instruction shared via Google Classroom / Moodle.",
      "Simulation software: NS2, Wireshark, DVWA, Netcat, GNU 8085 simulator.",
      "Mini/major technical projects, expert talks, ICT tools (LCD, Arduino, Raspberry Pi).",
      "MOOC (NPTEL/Coursera/Edx/Udemy) mentoring, hackathon mentoring, flipped classroom model.",
    ],
    image: cdn("https://ckpcet.ac.in/img/home-page/mission-vision/31.webp", 1200, 85),
    extraDetails: "Source: ckpcet.ac.in/about/academics/innovations-teaching",
  },
};

// Dynamically generate entries for each real engineering department from DEPARTMENTS
DEPARTMENTS.forEach((dept) => {
  dropdownPagesData[dept.name] = {
    title: dept.name,
    category: "Departments",
    subtitle: `Department of ${dept.name}`,
    description: dept.about || "Department details as published by the institute.",
    stats: [
      { label: "Affiliation", value: "GTU, Ahmedabad" },
      { label: "Intake", value: dept.intake || "Not publicly listed" },
      { label: "Accreditation", value: dept.nbaAccredited ? "NBA Accredited" : "AICTE Approved" },
      { label: "Faculty Listed", value: dept.staff?.length ? `${dept.staff.length} Members` : "Not yet published" },
    ],
    keyHighlights: dept.vision ? [`Vision: "${dept.vision}"`] : ["Department profile not yet fully published by the institute."],
    image: DEPT_IMAGE_MAP[dept.key] || cdn("https://ckpcet.ac.in/img/home-page/video-section/01Entry_03.jpg", 1200, 85),
    extraDetails: `Source: ckpcet.ac.in/departments/${dept.key}`,
  };
});

// AIML page exists on the live site but has no published content yet.
dropdownPagesData["AIML"] = {
  title: "AIML",
  category: "Departments",
  subtitle: "Artificial Intelligence & Machine Learning",
  description: "This department page exists on the official site but no about/vision/staff content has been published yet.",
  stats: [],
  keyHighlights: ["Content pending — check ckpcet.ac.in/departments/aiml for updates."],
  image: DEPT_IMAGE_MAP["aiml"],
  extraDetails: "Source: ckpcet.ac.in/departments/aiml (currently empty)",
};

// Clean aliases for department names and common nav item labels
dropdownPagesData["Computer"] = dropdownPagesData["Computer Engineering"];
dropdownPagesData["Civil"] = dropdownPagesData["Civil Engineering"];
dropdownPagesData["Electrical"] = dropdownPagesData["Electrical Engineering"];
dropdownPagesData["Electronics & Communication"] = dropdownPagesData["Electronics and Communication Engineering"];
dropdownPagesData["Electronics and Communication"] = dropdownPagesData["Electronics and Communication Engineering"];
dropdownPagesData["ECE"] = dropdownPagesData["Electronics and Communication Engineering"];
dropdownPagesData["IT"] = dropdownPagesData["Information Technology"];
dropdownPagesData["Mechanical"] = dropdownPagesData["Mechanical Engineering"];
dropdownPagesData["Applied Science & Humanities"] = dropdownPagesData["Applied Science and Humanities"];
dropdownPagesData["Applied Science"] = dropdownPagesData["Applied Science and Humanities"];