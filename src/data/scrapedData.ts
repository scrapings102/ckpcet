import { cdn } from '../utils/image';

export interface StaffMember {
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  area_of_interest: string;
  email: string;
  image_url: string;
  isTeaching?: boolean;
}

export interface CommitteeMember {
  role?: string;
  committee_role?: string;
  name: string;
  designation?: string;
  contact?: string;
}

export interface AchievementItem {
  title: string;
  image_url: string;
  date: string;
  description: string;
  students: string;
  hashtags: string;
}

export interface EventItem {
  title: string;
  image_url: string;
  date: string;
  venue_description: string;
  coordinators: string;
  document_link?: string;
}

export interface NewsItem {
  title: string;
  description: string;
  link: string;
  icon_image?: string;
}

// Complete raw scraped data from user prompt
export const scrapedData = {
  "site": "ckpcet.ac.in",
  "note": "source_url fields are only for content provenance/reference (which page the text came from) — not meant to be used as navigation or page-slug design elements. image_url fields are the official, correct hosted image URLs from the live site. STATUS: PARTIAL — navigation_menu is complete (full site map); about/vision/mission verified from live pages. Remaining sections pending a second pass.",
  "navigation_menu": [
    {
      "section": "About Us",
      "items": [
        { "label": "Profile", "source_url": "https://ckpcet.ac.in/about/institute/profile" },
        { "label": "Vision And Mission", "source_url": "https://ckpcet.ac.in/about/institute/vision-mission" },
        { "label": "The Founder", "source_url": "https://ckpcet.ac.in/about/institute/chairman" },
        { "label": "Governing Body", "source_url": "https://ckpcet.ac.in/about/institute/governing-body" },
        { "label": "Administrative Setup", "source_url": "https://ckpcet.ac.in/about/institute/administrative-setup" },
        { "label": "Employee Service Rules", "source_url": "https://drive.google.com/file/d/1Frn0EO9bYzaNbEdsKgJsdsvjsKhHMLZc/view?usp=sharing" },
        { "label": "The Principal", "source_url": "https://ckpcet.ac.in/about/institute/principal" },
        { "label": "Reach Us", "source_url": "https://ckpcet.ac.in/about/institute/reach-us" },
        { "label": "Campus Map", "source_url": "https://ckpcet.ac.in/about/institute/campus-map" },
        { "label": "General Information", "source_url": "https://ckpcet.ac.in/about/academics/information" },
        { "label": "Programs Offered", "source_url": "https://ckpcet.ac.in/about/academics/programs" },
        { "label": "Admission", "source_url": "https://ckpcet.ac.in/about/academics/admission" },
        { "label": "Notice Board", "source_url": "https://ckpcet.ac.in/about/academics/notice-board" },
        { "label": "News & Announcements", "source_url": "https://ckpcet.ac.in/about/academics/announcements" },
        { "label": "Course Curriculum", "source_url": "https://ckpcet.ac.in/about/academics/curriculum" },
        { "label": "Time Tables", "source_url": "https://ckpcet.ac.in/about/academics/time-tables" },
        { "label": "Admin Staff", "source_url": "https://ckpcet.ac.in/about/academics/admin-staff" },
        { "label": "Innovations in Teaching & Learning", "source_url": "https://ckpcet.ac.in/about/academics/innovations-teaching" },
        { "label": "Deans and Faculty In-charges", "source_url": "https://ckpcet.ac.in/about/direct/deans" },
        { "label": "MOUs", "source_url": "https://ckpcet.ac.in/about/direct/mou" },
        { "label": "Grants", "source_url": "https://ckpcet.ac.in/about/direct/grants" },
        { "label": "AICTE Approval", "source_url": "https://ckpcet.ac.in/about/affiliations-approvals/aicte-approval" },
        { "label": "AICTE Essentials", "source_url": "https://ckpcet.ac.in/about/aicte-essentials/aicte-essentials" },
        { "label": "NIRF Contact Us", "source_url": "https://ckpcet.ac.in/about/nirf/contact-us" },
        { "label": "Academic Council", "source_url": "https://ckpcet.ac.in/about/committees/academic-council" },
        { "label": "Co-Curricular Activities", "source_url": "https://ckpcet.ac.in/about/committees/co-curricular" },
        { "label": "Finance", "source_url": "https://ckpcet.ac.in/about/committees/finance" },
        { "label": "Innovation Council", "source_url": "https://ckpcet.ac.in/about/committees/iinc" },
        { "label": "Library", "source_url": "https://ckpcet.ac.in/about/committees/library" },
        { "label": "Magazine", "source_url": "https://ckpcet.ac.in/about/committees/magazine" },
        { "label": "NIRF", "source_url": "https://ckpcet.ac.in/about/committees/nirf" },
        { "label": "NSS Sankul", "source_url": "https://ckpcet.ac.in/about/committees/nss" },
        { "label": "Purchase/Equipment", "source_url": "https://ckpcet.ac.in/about/committees/purchase" },
        { "label": "Timetable", "source_url": "https://ckpcet.ac.in/about/committees/timetable" },
        { "label": "Nasha Mukti Hostel Committee", "source_url": "https://ckpcet.ac.in/about/committees/nmc" },
        { "label": "ABC ID Committee", "source_url": "https://ckpcet.ac.in/about/committees/abc" }
      ]
    },
    {
      "section": "Departments",
      "items": [
        { "label": "Applied Science and Humanities", "source_url": "https://ckpcet.ac.in/departments/applied-science" },
        { "label": "Civil Engineering", "source_url": "https://ckpcet.ac.in/departments/civil" },
        { "label": "Computer Engineering", "source_url": "https://ckpcet.ac.in/departments/computer" },
        { "label": "Electrical Engineering", "source_url": "https://ckpcet.ac.in/departments/electrical" },
        { "label": "Electronics and Communication Engineering", "source_url": "https://ckpcet.ac.in/departments/ecc" },
        { "label": "Information Technology", "source_url": "https://ckpcet.ac.in/departments/it" },
        { "label": "Mechanical Engineering", "source_url": "https://ckpcet.ac.in/departments/mechanical" },
        { "label": "AIML", "source_url": "https://ckpcet.ac.in/departments/aiml" }
      ]
    },
    {
      "section": "Resources",
      "items": [
        { "label": "Sports - Facilities", "source_url": "https://ckpcet.ac.in/resources/sports/facilities" },
        { "label": "Sports - Coordinators", "source_url": "https://ckpcet.ac.in/resources/sports/coordinators" },
        { "label": "Sports - Activities", "source_url": "https://ckpcet.ac.in/resources/sports/activities" },
        { "label": "Sports - Achievements", "source_url": "https://ckpcet.ac.in/resources/sports/achivements" },
        { "label": "Central Library", "source_url": "https://ckpcet.ac.in/resources/central-library" },
        { "label": "Library - Services Offered", "source_url": "https://ckpcet.ac.in/resources/central-library/services" },
        { "label": "Library - Magazines and Journals", "source_url": "https://ckpcet.ac.in/resources/central-library/magazines" },
        { "label": "Library - Books", "source_url": "https://ckpcet.ac.in/resources/central-library/books" },
        { "label": "Hostel Detail", "source_url": "https://ckpcet.ac.in/resources/hostel/detail" },
        { "label": "Hostel Photos", "source_url": "https://ckpcet.ac.in/resources/hostel/photos" },
        { "label": "Class Room Complex", "source_url": "https://ckpcet.ac.in/resources/central/classroom-complex" },
        { "label": "Workshop", "source_url": "https://ckpcet.ac.in/resources/central/workshop" },
        { "label": "Central Computer Centre", "source_url": "https://ckpcet.ac.in/resources/central/ccc" },
        { "label": "Center of Language Proficiency and Personality Enrichment", "source_url": "https://ckpcet.ac.in/resources/central/clp" },
        { "label": "Stationery Store", "source_url": "https://ckpcet.ac.in/resources/central/store" },
        { "label": "Medical Center", "source_url": "https://ckpcet.ac.in/resources/direct/medical" },
        { "label": "Seminar Hall", "source_url": "https://ckpcet.ac.in/resources/direct/seminar-hall" },
        { "label": "Cafeteria", "source_url": "https://ckpcet.ac.in/resources/direct/cafeteria" },
        { "label": "Transportation", "source_url": "https://ckpcet.ac.in/resources/direct/transportation" }
      ]
    },
    {
      "section": "Cells",
      "items": [
        { "label": "Anti Ragging", "source_url": "https://ckpcet.ac.in/cells/anti-ragging" },
        { "label": "Gender Cell", "source_url": "https://ckpcet.ac.in/cells/gender-cell" },
        { "label": "Grievance Redressal Cell", "source_url": "https://ckpcet.ac.in/cells/grievance" },
        { "label": "Institute Industry Cell", "source_url": "https://ckpcet.ac.in/cells/iic" },
        { "label": "IQAC", "source_url": "https://ckpcet.ac.in/cells/iqac-cell" },
        { "label": "Media Cell", "source_url": "https://ckpcet.ac.in/cells/media" },
        { "label": "Ombudsman", "source_url": "https://ckpcet.ac.in/cells/ombudsman" },
        { "label": "Physical Disability Grievance Redressal", "source_url": "https://ckpcet.ac.in/cells/pdgr" },
        { "label": "SC-ST Cell", "source_url": "https://ckpcet.ac.in/cells/sc-st" },
        { "label": "SHMC", "source_url": "https://ckpcet.ac.in/cells/shmc" },
        { "label": "UBA Cell", "source_url": "https://ckpcet.ac.in/cells/uba" },
        { "label": "Women Development Cell", "source_url": "https://ckpcet.ac.in/cells/women-cell" },
        { "label": "National Innovation & Startup Policy", "source_url": "https://ckpcet.ac.in/cells/nisp" },
        { "label": "Institute Development Plan", "source_url": "https://ckpcet.ac.in/cells/idp" },
        { "label": "Student Counselor Committee", "source_url": "https://ckpcet.ac.in/cells/scc" },
        { "label": "Food Safety and Standard Act", "source_url": "https://ckpcet.ac.in/cells/fssa" }
      ]
    },
    {
      "section": "Alumni",
      "items": [
        { "label": "About Alumni", "source_url": "https://ckpcet.ac.in/alumni" },
        { "label": "Objectives", "source_url": "https://ckpcet.ac.in/alumni/objectives" },
        { "label": "Rules & Regulations", "source_url": "https://ckpcet.ac.in/alumni/rules-regulations" },
        { "label": "Managing Committee", "source_url": "https://ckpcet.ac.in/alumni/managing-committee" },
        { "label": "Executive Committee", "source_url": "https://ckpcet.ac.in/alumni/executive-committee" },
        { "label": "Registration", "source_url": "https://ckpcet.ac.in/alumni/registration" },
        { "label": "Events", "source_url": "https://ckpcet.ac.in/alumni/events" }
      ]
    },
    {
      "section": "T & P",
      "items": [
        { "label": "About T & P", "source_url": "https://ckpcet.ac.in/trainning-and-placement/about" },
        { "label": "Rules & Regulations", "source_url": "https://ckpcet.ac.in/trainning-and-placement/about/rules" },
        { "label": "Placement Team", "source_url": "https://ckpcet.ac.in/trainning-and-placement/about/placement-team" },
        { "label": "GIC Club", "source_url": "https://ckpcet.ac.in/trainning-and-placement/about/gic-club" },
        { "label": "Contact @ T&P", "source_url": "https://ckpcet.ac.in/trainning-and-placement/about/contact-us" },
        { "label": "Placement Procedure", "source_url": "https://ckpcet.ac.in/trainning-and-placement/campus-placements/procedure" },
        { "label": "Placement Summary", "source_url": "https://ckpcet.ac.in/trainning-and-placement/campus-placements/summary" },
        { "label": "Placement Records", "source_url": "https://ckpcet.ac.in/trainning-and-placement/campus-placements/records" },
        { "label": "Companies", "source_url": "https://ckpcet.ac.in/trainning-and-placement/campus-placements/companies" },
        { "label": "Industrial Training", "source_url": "https://ckpcet.ac.in/trainning-and-placement/training/industrial-trainning" },
        { "label": "Expert Talks", "source_url": "https://ckpcet.ac.in/trainning-and-placement/training/expert-talks" },
        { "label": "Industrial Visit", "source_url": "https://ckpcet.ac.in/trainning-and-placement/training/industrial-visits" },
        { "label": "Higher Studies", "source_url": "https://ckpcet.ac.in/trainning-and-placement/training/higher-studies" }
      ]
    },
    {
      "section": "Activities",
      "items": [
        { "label": "TFMS 2022", "source_url": "https://ckpcet.ac.in/activities/programs/tfms2022" },
        { "label": "SCE 22", "source_url": "https://ckpcet.ac.in/activities/programs/sce2022" },
        { "label": "Webinars", "source_url": "https://ckpcet.ac.in/activities/events/webinars" },
        { "label": "Workshops", "source_url": "https://ckpcet.ac.in/activities/events/workshops" },
        { "label": "Seminars", "source_url": "https://ckpcet.ac.in/activities/events/seminars" },
        { "label": "STTPS", "source_url": "https://ckpcet.ac.in/activities/events/sttps" },
        { "label": "Camps", "source_url": "https://ckpcet.ac.in/activities/events/camps" },
        { "label": "All Events", "source_url": "https://ckpcet.ac.in/activities/events/all" },
        { "label": "Technical Festivals", "source_url": "https://ckpcet.ac.in/activities/festivals/technical" },
        { "label": "Cultural Festivals", "source_url": "https://ckpcet.ac.in/activities/festivals/cultural" },
        { "label": "Print Media", "source_url": "https://ckpcet.ac.in/activities/media/print" },
        { "label": "Club Coordinators", "source_url": "https://ckpcet.ac.in/activities/clubs/coordinators" },
        { "label": "Dance Club", "source_url": "https://ckpcet.ac.in/activities/clubs/dance" },
        { "label": "Drama Club", "source_url": "https://ckpcet.ac.in/activities/clubs/drama" },
        { "label": "Fine Art Club", "source_url": "https://ckpcet.ac.in/activities/clubs/fine-arts" },
        { "label": "Literature Club", "source_url": "https://ckpcet.ac.in/activities/clubs/literature" },
        { "label": "Music Club", "source_url": "https://ckpcet.ac.in/activities/clubs/music" },
        { "label": "Photography Club", "source_url": "https://ckpcet.ac.in/activities/clubs/photography" },
        { "label": "NSS Sankul", "source_url": "https://ckpcet.ac.in/activities/community/nss" },
        { "label": "COSI Club", "source_url": "https://ckpcet.ac.in/activities/community/cosi" },
        { "label": "MYSY Scheme", "source_url": "https://ckpcet.ac.in/activities/community/mysy" },
        { "label": "Vishwakarma Yojana", "source_url": "https://ckpcet.ac.in/activities/community/vishwakarma" },
        { "label": "SHODH Scheme", "source_url": "https://ckpcet.ac.in/activities/community/shodh" }
      ]
    }
  ],
  "about": [
    {
      "subpage": "Profile",
      "source_url": "https://ckpcet.ac.in/about/institute/profile",
      "heading": "About the Institute",
      "content": "C. K. Pithawala College of Engineering and Technology is a self-financed Institute which started its functioning in December, 1998 affiliated initially with Veer Narmad South Gujarat University, Surat and now with Gujarat Technological University, Ahmedabad. C. K. Pithawala College of Engineering And Technology is being managed by the Navyug Vidyabhavan Trust which was founded in February, 1965. The aims and objectives of the Trust are to provide facilities for higher education to students without consideration of caste, community, sex or religion and to undertake research in the exact and social science.\n\nThe intake capacity in Engineering Colleges in Gujarat State in the late 1990s was very much inadequate to cater the demand of the engineering graduates. Because of limited number of engineering colleges in the Gujarat state, number of students have to seek admission in colleges in the other states on India such as Maharashtra and Karnataka.\n\nLooking to the above fact, in line with the objective of the trust, the institute \"C. K. Pithawala College of Engineering and Technology\" was established in the year 1998 under the aegis of the Navyug Vidyabhavan Trust to take upon itself the responsibility of providing technical education.\n\nLate Shri. C. K. Pithawalla has been the driving force for the setting up of this institute named after him. The management has vowed to run the institute with the professional attention to each student to develop their overall personality and thereby making them more compatible to the Industrial standards. For the purpose, the institute is provided with all the necessary facilities for establishment of quality teaching learning process.",
      "image_url": null
    },
    {
      "subpage": "Profile — The Navyug Vidyabhavan Trust",
      "source_url": "https://ckpcet.ac.in/about/institute/profile",
      "heading": "The Navyug Vidyabhavan Trust",
      "content": "After the independence, demand for facilities of higher education grew rapidly. It was primarily to correct the imbalance between demand and supply and with that purpose Navyug Vidyabhavan Trust was founded in February, 1965. The aims and objectives of the Trust are to provide facilities for higher education to students without consideration of caste, community, sex or religion and to undertake research in the exact and social science.\n\nThe trust was registered as Public Education Trust under the Bombay Public Trust ACT, 1950 and allotted registration No. 1268. The trust also received exemption under section 80(G) of the Income-Tax Act for donations to it.\n\nOver the span of last 55 years of its functioning, the Trust has fulfilled that objective most honorably and is today recognized as an ideally managed educational organization. While it has constantly undertaken a program of expansion to meet the growing educational needs of the region, it has never compromised on quality.",
      "institutions_under_trust": [
        { "name": "Navyug Arts College" },
        { "name": "Navyug Science College" },
        { "name": "Navyug Commerce College" },
        { "name": "Maniben Pithawalla Industrial Training Institute" },
        { "name": "C. K. Pithawala College of Engineering & Technology" },
        { "name": "C. K. Pithawalla Institute Of Pharmaceutical Science & Research" }
      ],
      "image_url": null
    },
    {
      "subpage": "Profile — The City: Surat",
      "source_url": "https://ckpcet.ac.in/about/institute/profile",
      "heading": "The City - Surat",
      "content": "Surat is the most industrialized city in the state of Gujarat today. It is well known all over the world for its diamonds, jari and manmade textiles. Situated on the banks of the river Tapi, it is the fastest growing industrial city in the country. Besides this, it has also witnessed considerable growth in the various industrial fields such as dyes, chemicals and intermediates, textile machinery, plastic technology as well as agro-based products. This has attracted skilled, semiskilled and unskilled workmen from all over the country.\n\nThe pace of growth of the city accelerated during the past 60 years and Surat became a dominant center of commercial activity in South Gujarat. This in its wake brought some opportunity and requirements in the field of higher education.",
      "image_url": null
    },
    {
      "subpage": "Vision and Mission",
      "source_url": "https://ckpcet.ac.in/about/institute/vision-mission",
      "heading": "Vision and Mission",
      "vision": "To prepare engineering graduates with sound fundamental knowledge and professional competence to meet the requirement of engineering profession locally as well as globally.",
      "mission": [
        "To provide state of the art teaching learning process.",
        "To provide conducive environment and necessary infrastructure to students and staff for academic and research.",
        "To create effective interaction with industries, other institutes and government organizations for mutual benefits and promoting research activities.",
        "To enhance the co-curricular skill of students for developing professional competence and thereby enhancing employability and promoting entrepreneurship.",
        "To enhance teaching skill and technical knowledge of faculties."
      ],
      "image_url": null
    }
  ],
  "courses": "Bachelor of Engineering (B.E) programs in Civil, Computer, Electrical, Electronics & Communication, Information Technology, Mechanical, and AIML.",
  "contact_us": {
    "source_url": "https://ckpcet.ac.in/about/institute/reach-us",
    "address": "Near Malvan Mandir, Via Magdalla Port, Dumas Road, Surat, Gujarat - 395007",
    "institute_timings": "8:30 AM - 4:10 PM",
    "phone": [
      "+91 63550 55839",
      "+91 63550 62275",
      "+91 90990 63009 (24x7 Woman Helpline)"
    ],
    "admission_enquiry_numbers": {
      "BE_ME": "78628-24298",
      "AIML_IT": "90234-37774",
      "Civil_Mech_Elect": "98792-29825",
      "other": "63550-55839"
    },
    "email": "contact@ckpcet.ac.in",
    "google_maps_location": "https://www.google.com/maps/dir//C.K+Pithawalla+College+of+Engineering+and+Technology,+Near+Malvan+Mandir+Via+Magdalla Port,+Dumas+Rd,+Surat,+Gujarat+395007/@21.131746,72.7176834,18z",
    "coordinates": { "latitude": 21.1320246, "longitude": 72.7180835 },
    "social": {
      "whatsapp": "https://wa.link/rwuq5u",
      "facebook": "https://www.facebook.com/ckpcollege",
      "instagram": "https://www.instagram.com/ckpcollege",
      "youtube": "https://www.youtube.com/ckpcollege",
      "linkedin": "https://www.linkedin.com/in/ckpcollege"
    },
    "portals": {
      "institute_mail": "https://mail.google.com/a/ckpcet.ac.in",
      "student_feedback": "https://admin.ckpcet.ac.in/feedbacks/start",
      "staff_portal": "https://app.ckpcet.ac.in/",
      "pay_fees": "https://grayquest.com/institute/ck-pithawala"
    }
  },
  "homepage": {
    "admission_popup_image": "https://ckpcet.ac.in/img/home-page/popup/Admission_Poster_26-27.jpg",
    "inquiry_form": "https://forms.gle/5Jxic4dkmonpaJYL9",
    "logo": "https://ckpcet.ac.in/img/logo.svg",
    "trust_logo": "https://ckpcet.ac.in/img/trust_logo.png",
    "trust_link": "https://navyugtrust.org/",
    "accreditation": {
      "body": "National Board of Accreditation, New Delhi",
      "accredited_ug_programs": [
        { "program": "Civil Engineering", "valid_upto": "June 2024" },
        { "program": "Computer Engineering", "valid_upto": "June 2024" }
      ]
    },
    "bank_details_link": "https://drive.google.com/file/d/1FNCEb7eitLJJaiiPbk6qcnisuxY8Qye5/view?usp=drive_link",
    "four_pillars": [
      { "title": "Objective", "text": "Empowering the Education", "icon": "https://ckpcet.ac.in/img/icons/objective.svg" },
      { "title": "Process", "text": "Achieving Excellence Together", "icon": "https://ckpcet.ac.in/img/icons/process.svg" },
      { "title": "Outcome", "text": "Creating a Community of Life-Long Learners", "icon": "https://ckpcet.ac.in/img/icons/culture.svg" },
      { "title": "Culture", "text": "The NVT Way", "icon": "https://ckpcet.ac.in/img/icons/culture.svg" }
    ],
    "institute_vision": "To prepare engineering graduates with sound fundamental knowledge and professional competence to meet the requirement of engineering profession locally as well as globally.",
    "institute_mission": [
      "To provide state of the art teaching learning process.",
      "To provide conducive environment and necessary infrastructure to students and staff for academic and research.",
      "To create effective interaction with industries, other institutes and government organizations for mutual benefits and promoting research activities.",
      "To enhance the co-curricular skill of students for developing professional competence and thereby enhancing employability and promoting entrepreneurship.",
      "To enhance teaching skill and technical knowledge of faculties."
    ],
    "mission_vision_gallery_images": [
      "https://ckpcet.ac.in/img/home-page/mission-vision/41.webp",
      "https://ckpcet.ac.in/img/home-page/mission-vision/04.webp",
      "https://ckpcet.ac.in/img/home-page/mission-vision/42.webp",
      "https://ckpcet.ac.in/img/home-page/mission-vision/38.webp",
      "https://ckpcet.ac.in/img/home-page/mission-vision/40.webp",
      "https://ckpcet.ac.in/img/home-page/mission-vision/13.webp",
      "https://ckpcet.ac.in/img/home-page/mission-vision/24.webp",
      "https://ckpcet.ac.in/img/home-page/mission-vision/31.webp",
      "https://ckpcet.ac.in/img/home-page/mission-vision/32.webp"
    ],
    "video_section": {
      "cover_image": "https://ckpcet.ac.in/img/home-page/video-section/video-img.jpg",
      "youtube_link": "https://www.youtube.com/watch?v=artKg5wnn-o",
      "images": [
        "https://ckpcet.ac.in/img/home-page/video-section/25Hackathon.jpg",
        "https://ckpcet.ac.in/img/home-page/video-section/01Entry_03.jpg",
        "https://ckpcet.ac.in/img/home-page/video-section/03AirForce.jpg",
        "https://ckpcet.ac.in/img/home-page/video-section/10Library1.jpg",
        "https://ckpcet.ac.in/img/home-page/video-section/24Women.jpg"
      ]
    },
    "footer_summary": "C. K. Pithawala College of Engineering and Technology is a self financed Institute that started its functioning in December, 1998. The institute is affiliated to Gujarat Technological University, Ahmedabad. The institute is managed by the Navyug Vidyabhavan Trust that was registered under Bombay Public Trust Act 1950 as a Public Education Trust on 21 February 1965."
  },
  "documents": {
    "mandatory_disclosure": "https://drive.google.com/file/d/1PZsx5TibGQkIE7Lrv6pmGngx1zId3YqL/view",
    "induction_programme": "https://drive.google.com/file/d/14B2HZ6zx3oNpxZJKACXvgSen_lAgY0-I/view",
    "employee_service_rules": "https://drive.google.com/file/d/1Frn0EO9bYzaNbEdsKgJsdsvjsKhHMLZc/view?usp=sharing",
    "nirf_reports": [
      { "year": "2025-26-2", "link": "https://drive.google.com/file/d/1jGqP64awieyf7c5B1KynL9qyn4G2jIFB/view" },
      { "year": "2025-26-1", "link": "https://drive.google.com/file/d/1hZLCgPaP3Aw1yQMMgd47Zq7QD2KEPnBI/view" },
      { "year": "2024-25-2", "link": "https://drive.google.com/file/d/1s34DoLGe3ndYobkMh-XP20Nt0TB1XNAl/view" },
      { "year": "2024-25-1", "link": "https://drive.google.com/file/d/12wLD0JzxWgWjnHYQT7lG4_iNARV_Slfd/view" },
      { "year": "2023-24", "link": "https://drive.google.com/file/d/1Jqx7eRyMm0oveEoO0vHTvo9TyZP3F77I/view" },
      { "year": "2022-23", "link": "https://drive.google.com/file/d/1KA8TYTjnXbsthcHELe70u0EVjxSf9x43/view" },
      { "year": "2021-22", "link": "https://drive.google.com/file/d/16VO8AjT7sRSlUfBT95zJNXlmlAClQMvY/view" },
      { "year": "2020-21", "link": "https://drive.google.com/file/d/1Egim4WDE47URUWNrktXrBDwCTSRkK4zV/view" }
    ],
    "financial_audits": [
      { "year": "2024-25", "link": "https://drive.google.com/file/d/1OK3dFI2yBUxFVSVIxBRBO0jzW2DsAt-p/view?usp=sharing" },
      { "year": "2023-24", "link": "https://drive.google.com/file/d/1upRfQLbjp9391cqT04FoBLkzShf_prf2/view?usp=sharing" },
      { "year": "2022-23", "link": "https://drive.google.com/file/d/112tLh1ny15zaN_kbdprdQzCpTagVr4dG/view?usp=sharing" },
      { "year": "2021-22", "link": "https://drive.google.com/file/d/1tdGHN67Y8qqxKR7tduM9V_PYuYUYObyx/view?usp=sharing" },
      { "year": "2020-21", "link": "https://drive.google.com/file/d/1g7IaMVGn2flibEFRCrTDIy-O0AvsSfrU/view?usp=sharing" },
      { "year": "2019-20", "link": "https://drive.google.com/file/d/11TCIH1fN8k8DvNjZsguPACvjiJXAg5jA/view?usp=sharing" },
      { "year": "2018-19", "link": "https://drive.google.com/file/d/1dzpbqAsRSQL_sFm0qZ8YYMSRoajaoXT-/view?usp=sharing" },
      { "year": "2017-18", "link": "https://drive.google.com/file/d/12CmjYiJyCcOqNSzKhNIdIoIDLr-3fQ3a/view?usp=sharing" }
    ],
    "newsletters": [
      { "title": "Newsletter Jan 2024", "link": "https://drive.google.com/file/d/1vOXZJ65jWmcc1TNAd68Ow5M1BD8rsgZ_/view?usp=drive_link" },
      { "title": "Newsletter Jan 2023", "link": "https://drive.google.com/file/d/1okRBWnug8APWJjZgqnY0OLTJqqfGbyl3/view?usp=share_link" },
      { "title": "Newsletter July 2021", "link": "https://drive.google.com/file/d/1KAHmnYLa2JoHGEK3hMiX8S8lsb1U0V7G/view?usp=sharing" },
      { "title": "Newsletter Jan 2021", "link": "https://drive.google.com/file/d/1eCQtV9YuaXWkCo8SP2xorvWZShF2LMMz/view" },
      { "title": "Newsletter 2019-20", "link": "https://drive.google.com/file/d/1ixKU_LXuzPlPWEOcPiyeKa5EpiSddaFF/view?usp=sharing" },
      { "title": "Newsletter 2018-19", "link": "https://drive.google.com/file/d/13hpKAttJ4B6vL5IU0S501esSJ_3jynYE/view?usp=sharing" },
      { "title": "Newsletter 2017-18", "link": "https://drive.google.com/file/d/1CZJyjeowKyRnxnuzUb-RH_sztQ3qQl0V/view?usp=sharing" },
      { "title": "e-Magazine 2018-19", "link": "https://drive.google.com/file/d/0B1N9snDSA9nIOWdFcTA4OFd3VHNJbmNIcmhvT3pZYWk5RU0w/view?usp=sharing" },
      { "title": "e-Magazine 2017", "link": "https://drive.google.com/file/d/0B_BYtnrCxr51ZkFkdjUwNzhuYkE/view?usp=sharing" }
    ],
    "scholarships": [
      { "name": "SEBC", "link": "https://drive.google.com/file/d/0B1N9snDSA9nIZ1dpR1htb1JJcnZSUkVJOEZQaEFCX1JPNGVV/view?usp=sharing" },
      { "name": "SC", "link": "https://drive.google.com/file/d/0B1N9snDSA9nIZXkwaWlUZmVOMUMtb3EyRC0ycGQ3Ynlwazhr/view?usp=sharing" },
      { "name": "ST", "link": "https://drive.google.com/file/d/1Yrpt3crpHGYE3ANFq2Wz1JIHZ363jSL7/view?usp=sharing" },
      { "name": "MYSY", "link": "https://drive.google.com/file/d/0B1N9snDSA9nIdGV0QmdWbjlhbk5JcUx4ckdNQVlSQlgxdXdV/view?usp=sharing" },
      { "name": "CMSS", "link": "https://drive.google.com/file/d/0B1N9snDSA9nISzloaXJKcHRzNFJKaU8yeXFDV0U1TGl0N3c4/view?usp=sharing" }
    ],
    "hostel": {
      "fees": "https://drive.google.com/file/d/1TS9RdhD-jUShRojsu9ji19P9gSwQk9dH/view?usp=sharing",
      "rules": "https://drive.google.com/file/d/1hsTc8S7faWM0_Hc_ERyGML18409mor8-/view?usp=sharing",
      "facilities": "https://drive.google.com/file/d/11pFIeOsdeQVa0mco3oRCWlQP06eZlr6w/view?usp=sharing",
      "registration_form": "https://drive.google.com/file/d/1axFKG_F9U0SqD-Nne36DuOvi-lqTx7Ww/view?usp=sharing"
    }
  },
  "affiliations": {
    "university": "Gujarat Technological University, Ahmedabad",
    "previously": "Veer Narmad South Gujarat University, Surat",
    "approval": "AICTE",
    "trust": "Navyug Vidyabhavan Trust (Reg. No. 1268, Bombay Public Trust Act 1950, registered 21 February 1965)",
    "established": "December 1998"
  }
};

const _STAFF_MEMBERS: StaffMember[] = [
  {
    name: "Dr. Chaitanya K. Desai",
    designation: "Principal",
    qualification: "Ph.D (IIT Kanpur), M.E (Mechanical), B.E (Production)",
    experience: "22 years+",
    area_of_interest: "Experimental Stress Analysis, Mechanics of Composite materials, Contact and Impact mechanics, Fracture Mechanics",
    email: "principal@ckpcet.ac.in",
    image_url: "https://ckpcet.ac.in/img/about-us/institute/principal.jpg",
    isTeaching: true
  },
  {
    name: "Dr. Marteenkumar H Patel",
    designation: "Assistant Professor",
    qualification: "B.COM, MBA (FIN), NET, PH.D",
    experience: "9 years Teaching & 7 years Industry experience",
    area_of_interest: "Management & Finance",
    email: "drmarteenpatel@gmail.com",
    image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    isTeaching: true
  },
  {
    name: "Mr. Hitesh B Vora",
    designation: "Assistant Professor & Head of Department (HOD)",
    qualification: "Ph.D. (Pursuing), MCA, NET",
    experience: "4+ years Asst. Prof & 8+ years teaching",
    area_of_interest: "Bigdata Analytics, AI, ML, Cloud Computing, Image Processing",
    email: "hv.ckpcmc@gmail.com",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    isTeaching: true
  },
  {
    name: "Mr. Gaurang A Joshi",
    designation: "Assistant Professor",
    qualification: "PhD Pursuing, NET, M.Sc.IT",
    experience: "15+ Years",
    area_of_interest: "Natural Language Processing, Machine Learning, Cyber Security",
    email: "gaurangjo@gmail.com",
    image_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
    isTeaching: true
  }
];

export const COMMITTEES_DATA = {
  anti_ragging: [
    { role: "I/C Principal", name: "Dr. Marteenkumar Patel", contact: "7383804620" },
    { role: "Civil Administration Rep.", name: "Member-Civil Administration", contact: "0261-2665800" },
    { role: "Police In-Charge Rep.", name: "Member-Police Administrative", contact: "0261-2251010" },
    { role: "Local Media Rep.", name: "Mr. Mihir Pathak", contact: "9327511695" },
    { role: "N.G.O Representative", name: "Ms. Janhvi Shah", contact: "9998776909" },
    { role: "Faculty Representatives", name: "Gaurang Joshi, Dr. Varsha Gondaliya, Dipan Naik, Krishna Khandwala, Khushi Bhajiwala", contact: "9106016234" },
    { role: "Parents Representative", name: "Pintubhai", contact: "7383804620" },
    { role: "Non-Teaching Rep.", name: "Mr. Pankaj Rajput", contact: "8460101665" },
    { role: "Student Representatives", name: "Patel Heer, Patel Richa", contact: "7043633921" }
  ],
  st_sc_cell: [
    { name: "Prof. Jigisha Acharya", designation: "Asst. Professor" },
    { name: "Dr. Ami Desai", designation: "Asst. Professor" },
    { name: "Ambuj Mishra", designation: "Asst. Professor" }
  ],
  sexual_harassment: [
    { name: "Prof. Gaurang Joshi", committee_role: "Member", designation: "Asst. Prof." },
    { name: "Dr. Ami Desai", committee_role: "Member", designation: "Asst. Prof." },
    { name: "Reshma D. Patel", committee_role: "Member", designation: "Asst. Prof." }
  ]
};

const _GALLERY_IMAGES: Record<string, string[]> = {
  sports: [
    "https://ckpcet.ac.in/img/home-page/mission-vision/31.webp",
    "https://ckpcet.ac.in/img/home-page/mission-vision/32.webp",
    "https://ckpcet.ac.in/img/home-page/mission-vision/24.webp"
  ],
  hostel: [
    "https://ckpcet.ac.in/img/home-page/mission-vision/04.webp"
  ],
  canteen: [
    "https://ckpcet.ac.in/img/home-page/video-section/10Library1.jpg"
  ],
  classrooms: [
    "https://ckpcet.ac.in/img/home-page/video-section/01Entry_03.jpg"
  ],
  "inter-college": [
    "https://ckpcet.ac.in/img/home-page/video-section/25Hackathon.jpg",
    "https://ckpcet.ac.in/img/home-page/video-section/03AirForce.jpg"
  ],
  competitions: [
    "https://ckpcet.ac.in/img/home-page/video-section/24Women.jpg"
  ],
  gallery: [
    "https://ckpcet.ac.in/img/home-page/mission-vision/41.webp",
    "https://ckpcet.ac.in/img/home-page/mission-vision/04.webp",
    "https://ckpcet.ac.in/img/home-page/mission-vision/42.webp",
    "https://ckpcet.ac.in/img/home-page/mission-vision/38.webp",
    "https://ckpcet.ac.in/img/home-page/mission-vision/40.webp"
  ],
  "media-appreciation": [
    "https://ckpcet.ac.in/img/home-page/video-section/cover_image.jpg"
  ]
};

const _ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "National Hackathon Championship Victory",
    image_url: "https://ckpcet.ac.in/img/home-page/video-section/25Hackathon.jpg",
    date: "2025-02-15",
    description: "CKPCET Engineering teams won top positions at Gujarat Technological University National level software hackathon.",
    students: "Vatsal Patel, Jemish Jikadra, Nilesh Goswami, Shlok Sarang",
    hashtags: "#Hackathon #GTU #Engineering #CKPCET"
  },
  {
    title: "Air Force Wing Cadet Excellence",
    image_url: "https://ckpcet.ac.in/img/home-page/video-section/03AirForce.jpg",
    date: "2025-03-10",
    description: "Official cadet recognition at state level camp representing engineering community.",
    students: "Tejas Solanki, Heer Patel",
    hashtags: "#AirForce #NCC #CKPCET #Welfare"
  }
];

const _EVENTS_DATA: EventItem[] = [
  {
    title: "Women Empowerment Cell Meet",
    image_url: "https://ckpcet.ac.in/img/home-page/video-section/24Women.jpg",
    date: "2025-03-08",
    venue_description: "CKPCET main presentation seminar complex.",
    coordinators: "Dr. Ami Desai, Prof. Jigisha Acharya",
    document_link: "https://drive.google.com/file/d/1Frn0EO9bYzaNbEdsKgJsdsvjsKhHMLZc/view"
  },
  {
    title: "Hackathon Boot Camp 2025",
    image_url: "https://ckpcet.ac.in/img/home-page/video-section/25Hackathon.jpg",
    date: "2025-01-20",
    venue_description: "Central Computer Centre and Labs.",
    coordinators: "Mr. Hitesh B Vora, Mr. Gaurang Joshi",
    document_link: "https://drive.google.com/file/d/1Frn0EO9bYzaNbEdsKgJsdsvjsKhHMLZc/view"
  }
];

const _NEWS_DATA: NewsItem[] = [
  {
    title: "GTU Engineering Examination Updates",
    description: "Academic timetables and examination enrollment forms guidelines for all departments.",
    link: "https://drive.google.com/file/d/1Frn0EO9bYzaNbEdsKgJsdsvjsKhHMLZc/view",
    icon_image: "https://ckpcet.ac.in/img/icons/objective.svg"
  }
];

export const STAFF_MEMBERS: StaffMember[] = _STAFF_MEMBERS.map((member) => ({
  ...member,
  image_url: cdn(member.image_url, 800, 90),
}));

export const GALLERY_IMAGES: Record<string, string[]> = Object.fromEntries(
  Object.entries(_GALLERY_IMAGES).map(([key, urls]) => [
    key,
    urls.map((url) => cdn(url, 1000, 90)),
  ])
);

export const ACHIEVEMENTS_DATA: AchievementItem[] = _ACHIEVEMENTS_DATA.map((item) => ({
  ...item,
  image_url: cdn(item.image_url, 800, 90),
}));

export const EVENTS_DATA: EventItem[] = _EVENTS_DATA.map((item) => ({
  ...item,
  image_url: cdn(item.image_url, 800, 90),
}));

export const NEWS_DATA: NewsItem[] = _NEWS_DATA.map((item) => ({
  ...item,
  icon_image: item.icon_image ? cdn(item.icon_image, 200, 90) : undefined,
}));
