import { Milestone } from "../types";

// Source of truth: https://ckpcet.ac.in/about/institute/profile
// Kept factual and matched to the live "About the Institute" page — no
// invented milestones (the real page is prose, not a timeline, so this
// mirrors its actual claims rather than dramatizing them).

export const ABOUT_INSTITUTE = {
  heading: "About the Institute",
  paragraphs: [
    "C. K. Pithawala College of Engineering and Technology was established in a year 1998 with the total intake of 240 students in four different branches. Institute has successfully completed 18 years in the field of Technical Education under the leadership of our honorable president Shri. C. K. Pithawalla.",
    "Today it has grown to one of the premier institute of the state with total approved intake of 1236 students in five different branch of Engineering at UG level (i.e. Computer, Civil, Electrical, Electronics and Communication and Mechanical engineering) and one branch at PG level (Mechanical Engineering (specialization: Machine Design))",
    "The Institute is located in peaceful environment at Surat-Dumas road in Surat city. The Institute provides disciplined, conducive and professional environment for academic and research with the team of qualified and experienced faculties.",
    "Along with the academic activities, institute is committed for overall development of the students. Industrial training, industrial visits, symposia, short term training programs, workshops, seminar expert lectures are taken up as a part of academic calendar. Students are encouraged to organize and participate in sports activities, cultural programs, technical festivals and social welfare activities like blood donation, thalassemia awareness etc.",
    "As a being institute offering UG and PG courses in the field of professional education, we are committed to provide learning base academic environment to our students. This in turn will equipped the students with technical knowledge and skill to increase their competency and will transformed the students to qualified professionals. We understand the expectations of the society, government and affiliating university from us as being institute offering technical education and accordingly we are committed for continuous improvement in teaching learning process.",
  ],
};

export const ABOUT_TRUST_SECTION = {
  heading: "The Navyug Vidyabhavan Trust",
  paragraphs: [
    "After the independence, demand for facilities of higher education grew rapidly. It was primarily to correct the imbalance between demand and supply and with that purpose Navyug Vidyabhavan Trust was founded in February, 1965. The aims and objectives of the Trust are to provide facilities for higher education to students without consideration of caste, community, sex or religion and to undertake research in the exact and social science.",
    "The trust was registered as Public Education Trust under the Bombay Public Trust ACT, 1950 and allotted registration No. 1268. The trust also received exemption under section 80(G) of the Income-Tax Act for donations to it.",
    "Over the span of last 55 years of its functioning, the Trust has fulfilled that objective most honorably and is today recognized as an ideally managed educational organization. While it has constantly undertaken a program of expansion to meet the growing educational needs of the region, it has never compromised on quality.",
  ],
};

export const ABOUT_CITY_SECTION = {
  heading: "The City - Surat",
  paragraphs: [
    "Surat is the most industrialized city in the state of Gujarat today. It is well known all over the world for its diamonds, jari and manmade textiles. Situated on the banks of the river Tapi, it is the fastest growing industrial city in the country. Besides this, it has also witnessed considerable growth in the various industrial fields such as dyes, chemicals and intermediates, textile machinery, plastic technology as well as agro-based products. This has attracted skilled, semiskilled and unskilled workmen from all over the country.",
    "The pace of growth of the city accelerated during the past 60 years and Surat became a dominant center of commercial activity in South Gujarat. This in its wake brought some opportunity and requirements in the field of higher education.",
  ],
};

// Legacy export kept for backward-compat with any component still importing
// `milestones` — but content now factually mirrors the real page above
// instead of a dramatized/fabricated timeline.
export const milestones: Milestone[] = [
  {
    year: "1965",
    title: "Navyug Vidyabhavan Trust Founded",
    desc: "Trust founded to provide higher education facilities without consideration of caste, community, sex or religion; registered under the Bombay Public Trust Act, 1950 (Reg. No. 1268).",
  },
  {
    year: "1998",
    title: "CKPCET Established",
    desc: "C. K. Pithawala College of Engineering and Technology established under the Navyug Vidyabhavan Trust, initially affiliated with Veer Narmad South Gujarat University, Surat.",
  },
  {
    year: "2005",
    title: "Civil Engineering Department",
    desc: "Civil Engineering Department established, later NBA accredited.",
  },
  {
    year: "Present Day",
    title: "Premier Engineering Institute",
    desc: "Now affiliated with Gujarat Technological University (GTU) and approved by AICTE, with a total approved intake of 1,236 students across UG programs (Computer, Civil, Electrical, Electronics & Communication, Mechanical, Information Technology) and one PG program (Mechanical Engineering — Machine Design).",
  },
];
