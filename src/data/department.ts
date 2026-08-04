// REAL department data for CKPCET (Engineering college).
// Replaces the previous BBA / BCA / B.Com "Commerce College" placeholder content,
// which belongs to a different institution (CKPCMC) and does not apply here.

export interface DepartmentStaff {
  name: string;
  designation: string;
  qualification: string;
}

export interface Department {
  key: string;
  name: string;
  established?: string;
  intake?: string;
  nbaAccredited?: boolean;
  vision?: string;
  about: string;
  staff: DepartmentStaff[];
}

export const DEPARTMENTS: Department[] = [
  {
    key: "civil",
    name: "Civil Engineering",
    established: "2005",
    intake: "60 (UG)",
    nbaAccredited: true,
    vision:
      "To prepare competent graduates by incorporating fundamental knowledge, professional skill with ethics and integrity to confront the subsequent challenges in the field of Civil Engineering.",
    about:
      "The Civil Engineering department was established in 2005 and NBA Accredited (2021–2024). It runs a 4-year UG program with an intake of 60 students, plus a minor degree in Smart Cities affiliated to GTU. More than half the faculty hold doctoral degrees, with grants received from the Ministry of Housing and Urban Affairs, the Institution of Engineers, GUJCOST and the GTU Quality Assessment Cell. The department operates a material testing facility and offers consultancy services in design, construction and operation & maintenance.",
    staff: [
      { name: "Dr. Priti A. Patel", designation: "Professor", qualification: "Ph.D, M.E (Civil), B.E (Civil)" },
      { name: "Dr. Reena Popawala", designation: "Associate Professor", qualification: "Ph.D, M.E (Civil), B.E (Civil)" },
      { name: "Dr. Boski P. Chauhan", designation: "Assistant Professor (HOD)", qualification: "Ph.D., M.Tech. (Environment), B.E. (Civil)" },
      { name: "Dr. Soumita D. Bid", designation: "Assistant Professor", qualification: "Ph.D, M.Tech (Environment), B.E. (Civil)" },
      { name: "Dr. Tandra Banerjee", designation: "Assistant Professor", qualification: "Ph.D, M.Tech. (Environment), B.E. (Civil)" },
      { name: "Dr. Mital J. Dholawala", designation: "Assistant Professor", qualification: "Ph.D, M.Tech. (Environment), B.E. (Civil)" },
      { name: "Dr. Hiralkumari B. Patel", designation: "Assistant Professor", qualification: "Ph.D (SVNIT), M.Tech, B.E. (Civil)" },
      { name: "Prof. Pranav Desai", designation: "Assistant Professor", qualification: "M.Tech. (Structure)" },
      { name: "Dr. Anuj Kaushikkumar Chandiwala", designation: "Assistant Professor", qualification: "Ph.D., M.Tech (Soil Mechanics & Foundation Engineering), B.E. (Civil)" },
    ],
  },
  {
    key: "computer",
    name: "Computer Engineering",
    nbaAccredited: true,
    vision:
      "To expand horizons of proficiency through insightful learning, perseverance and profound ethics for global career advancements in the domain of Computer Engineering.",
    about:
      "The Computer Engineering department is NBA Accredited with 22 Assistant Professors and 1 Associate Professor on the teaching staff. Faculty guide students through coding competitions such as Smart India Hackathon and Smart Gujarat Hackathon, where CKPCET teams have repeatedly reached the finals and won awards.",
    staff: [
      { name: "Dr. Ami Tusharkant Choksi", designation: "Associate Professor", qualification: "Ph.D (Computer Engg.), M.E.(Computer Engg.), B.E.(Computer Engg.)" },
      { name: "Dr. Saurabh S. Tandel", designation: "Assistant Professor (HOD)", qualification: "Ph.D, ME (CSE), BE (Computer Engineering), MBA (Finance)" },
      { name: "Dr. Vishruti V. Desai", designation: "Assistant Professor", qualification: "Ph.D, M.Tech.(Computer), B.E.(Computer)" },
      { name: "Dr. Unnati S. Shah", designation: "Assistant Professor", qualification: "Ph.D., M.Tech. (Computer), B.E. (Computer)" },
      { name: "Prof. Neelam N. Parmar", designation: "Assistant Professor", qualification: "PhD (Pursuing), M.E.(Computer), B.E.(Computer)" },
      { name: "Prof. Chetan K. Solanki", designation: "Assistant Professor", qualification: "PhD (Pursuing), M.E.(Computer), B.E.(Computer)" },
      { name: "Prof. Hemil A. Patel", designation: "Assistant Professor", qualification: "M.E.(Computer), B.E. (I.T)" },
    ],
  },
  {
    key: "electrical",
    name: "Electrical Engineering",
    vision: "To produce globally competitive and socially sensitized engineering graduates in the field of Electrical Engineering.",
    about:
      "The Electrical Engineering department has highly qualified and experienced faculty across domains including robotics, instrumentation, electric vehicles, energy storage, renewable energy generation, aircraft technology and healthcare, aiming to disseminate quality teaching alongside cutting-edge research.",
    staff: [
      { name: "Dr. Naimish K. Zaveri", designation: "Professor (HOD)", qualification: "Ph.D, M.E (Power System), B.E (Electrical)" },
      { name: "Dr. Deepak Chhaganrao Bhonsle", designation: "Professor", qualification: "Ph.D, M.E (Electrical Power Engineering), B.E (Electrical)" },
      { name: "Dr. Chetan K. Lad", designation: "Assistant Professor", qualification: "Ph.D., M.Tech Electrical (I.E.), B.E. Electrical" },
      { name: "Prof. Kapil K. Patel", designation: "Assistant Professor", qualification: "M.E.(Electrical), B.E.(Electrical)" },
      { name: "Ms. Trishakumari N Chaudhari", designation: "Assistant Professor", qualification: "M.Tech" },
    ],
  },
  {
    key: "ecc",
    name: "Electronics and Communication Engineering",
    intake: "30 (UG)",
    vision: "To prepare academically sound and globally competitive Electronics and Communication engineers to meet both industrial and societal demands.",
    about:
      "The ECC department has offered a B.E. in Electronics and Communication since 1998, with an intake of 30 seats. The department maintains well-equipped laboratories and conducts workshops, industrial visits and expert talks on recent trends in the field.",
    staff: [
      { name: "Dr. Mita C. Paunwala", designation: "Associate Professor", qualification: "Ph.D, M.Tech, B.E (Electronics)" },
      { name: "Dr. Amisha J. Shah", designation: "Assistant Professor", qualification: "Ph.D., M.Tech., B.E (Electronics)" },
      { name: "Dr. Vijayendra A. Desai", designation: "Assistant Professor (HOD)", qualification: "Ph.D., M.Tech., B.E (Electronics)" },
    ],
  },
  {
    key: "it",
    name: "Information Technology",
    vision: "To attain comprehensive standards in delivering quality technical education and practicing professional ethics in the domain of Information Technology.",
    about:
      "The Information Technology department, staffed entirely by Assistant Professors, focuses on delivering strong fundamentals alongside professional ethics for the IT domain.",
    staff: [
      { name: "Prof. Himani S Parekh", designation: "Assistant Professor (HOD)", qualification: "M.E.(Computer), B.E.(Computer)" },
      { name: "Dr. Shivani V Vora", designation: "Assistant Professor", qualification: "Ph.D.(SVNIT), M.E.(Computer), B.E.(Electronics)" },
      { name: "Prof. Disha N Chavda", designation: "Assistant Professor", qualification: "M.E.(CSE), B.E.(Computer)" },
      { name: "Prof. Nilam R. Patel", designation: "Assistant Professor", qualification: "M.Tech.(Computer), B.E.(Computer)" },
    ],
  },
  {
    key: "mechanical",
    name: "Mechanical Engineering",
    intake: "60 (UG) + 18 (PG, Machine Design)",
    vision:
      "The Mechanical Engineering Department endeavors to be recognized as a leader of its discipline through teaching and to groom motivated, self-esteemed, entrepreneurial and creative engineers.",
    about:
      "The Mechanical Engineering department offers a UG program since 1998 (60 seats) and a PG program specializing in Machine Design (18 seats). Subjects are organized around Thermal Engineering, Design & Dynamics, and Production & Manufacturing Engineering, with well-equipped laboratories and workshops.",
    staff: [
      { name: "Dr. Chaitanya K. Desai", designation: "Professor", qualification: "Ph.D (IIT Kanpur), M.E (Mechanical), B.E (Production)" },
      { name: "Dr. Kalpesh D. Maniya", designation: "Professor", qualification: "Ph.D, M.E (Mechanical), B.E (Mechanical)" },
      { name: "Prof. Mahesh N. Patel", designation: "Assistant Professor (HOD)", qualification: "M.Tech. (CAD/CAM), B.E (Mechanical)" },
      { name: "Dr. Nishith R. Rathod", designation: "Assistant Professor", qualification: "Ph.D, M.Tech. (IPED), MBA, LLB, B.E (Production)" },
      { name: "Dr. Gaurangkumar C. Chaudhari", designation: "Assistant Professor", qualification: "Ph.D, M.Tech. (Turbo Machines), B.E (Mechanical)" },
    ],
  },
  {
    key: "applied-science",
    name: "Applied Science and Humanities",
    about:
      "The Department of Applied Sciences and Humanities lays the fundamental groundwork for all first-year engineering students — Applied Physics, Applied Mathematics, technical communication, and management/economics. The department also runs the Centre for Language Proficiency and Professional Enlightenment, preparing students for IELTS and developing English proficiency.",
    staff: [
      { name: "Dr. Mitesh S. Joshi", designation: "Associate Professor (HOD)", qualification: "Ph.D, MSc., BSc." },
      { name: "Dr. Nisha B. Vyas", designation: "Assistant Professor", qualification: "Ph.D., MSc., BSc." },
      { name: "Dr. Ankita Rajdipsingh Devdhara", designation: "Assistant Professor", qualification: "B.Sc/M.Sc/Ph.D" },
      { name: "Dr. Krupa C. Desai", designation: "Assistant Professor", qualification: "Ph.D. (Mathematics)" },
    ],
  },
  {
    key: "aiml",
    name: "AIML",
    about: "Department of Artificial Intelligence & Machine Learning at CKPCET.",
    staff: [],
  },
];