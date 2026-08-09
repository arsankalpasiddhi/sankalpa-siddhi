import { getImageUrl } from '../utils/imageHelper';

export const FACULTY_DATA = [
  {
    id: 1,
    name: "Dr. G L K Durga",
    designation: "Former Principal & Senior Professor (Commerce)",
    specialization: "Commerce & Higher Education",
    image: getImageUrl("faculty_1"),
    bio: "Renowned academic administrator and former college Principal dedicated to guiding students toward educational excellence."
  },
  {
    id: 2,
    name: "Jaya Simha",
    designation: "Memory Class Lead & Trainer",
    specialization: "Memory Techniques & Retention",
    image: getImageUrl("faculty_2"),
    bio: "Master memory trainer empowering students with rapid recall and study techniques."
  },
  {
    id: 3,
    name: "Dr. Mahendra B Dewal",
    designation: "Founding Member, HoD R&PD, Expansion Technologies, MA, USA",
    specialization: "R&D & Global Educational Initiatives",
    image: getImageUrl("faculty_3"),
    bio: "Global tech leader and philanthropist advancing research, development, and digital learning opportunities for rural youth."
  },
  {
    id: 4,
    name: "Mallikarjuna Rao Y",
    designation: "Director, National Handwriting Academy",
    specialization: "Handwriting Enhancement & Speed Writing",
    image: getImageUrl("faculty_4"),
    bio: "Pioneer in handwriting science helping thousands of students improve legibility, presentation, and exam writing speed."
  },
  {
    id: 5,
    name: "Ramakrishna Potluri",
    designation: "Former CIO - Dangote Group",
    specialization: "IT Leadership & Enterprise Technology",
    image: getImageUrl("faculty_5"),
    bio: "Veteran technology executive mentoring students on digital transformation, STEM careers, and global leadership."
  },
  {
    id: 6,
    name: "Sampath Kumar Kokkula",
    designation: "English Teacher",
    specialization: "English Communication & Language Skills",
    image: getImageUrl("faculty_6"),
    bio: "Passionate language educator building core English vocabulary, grammar, and spoken confidence in government school students."
  },
  {
    id: 7,
    name: "M Santhosh Kumar",
    designation: "Administrative Officer, Indian Air Force",
    specialization: "Defense Careers & Leadership",
    image: getImageUrl("faculty_7"),
    bio: "Distinguished Air Force officer inspiring youth with patriotic values, discipline, and career pathways in the Armed Forces."
  },
  {
    id: 8,
    name: "M Sunkara Naresh",
    designation: "High Court Advocate of Telangana",
    specialization: "Constitutional Law & Legal Awareness",
    image: getImageUrl("faculty_8"),
    bio: "Prominent High Court advocate delivering lectures on constitutional rights, civics, legal literacy, and social ethics."
  },
  {
    id: 9,
    name: "Uday Kumar Alajangi",
    designation: "Life Coach, HRD Trainer",
    specialization: "Soft Skills, Morals & Motivation",
    image: getImageUrl("faculty_9"),
    bio: "Acclaimed life coach and corporate trainer facilitating transformative workshops on self-confidence, goal setting, and stress management."
  },
  {
    id: 10,
    name: "Kantheti Satya Narayana",
    designation: "Retd. Sr Official - Tata Group",
    specialization: "Corporate Management & Ethics",
    image: getImageUrl("faculty_10"),
    bio: "Former senior executive with Tata Group sharing insights on ethical leadership, perseverance, and career success."
  },
  {
    id: 11,
    name: "Yamuna Srinidhi",
    designation: "Classical Dancer, Actor/Producer, Educationalist & Philanthropist",
    specialization: "Arts, Culture & Holistic Development",
    image: getImageUrl("faculty_11"),
    bio: "Celebrated classical exponent and cultural icon promoting arts integration, value education, and youth empowerment."
  },
  {
    id: 12,
    name: "N Chandrababu",
    designation: "Circle Inspector, Bhongir Rural, Telangana",
    specialization: "Law Enforcement & Youth Safety",
    image: getImageUrl("faculty_12"),
    bio: "Dedicated police inspector guiding students on civic responsibility, drug awareness, and public service careers."
  }
];

export const NEWS_COVERAGE = [
  {
    id: 1,
    title: "సంకల్ప సిద్ధి ద్వారా ప్రభుత్వ పాఠశాలల్లో విప్లవాత్మక విద్య",
    publication: "Eenadu / Sakshi Main Edition",
    date: "May 2025",
    snippet: "పీటీఏ (PTA) మరియు అకెళ్ల రాఘవేంద్ర ఫౌండేషన్ సంయుక్త ఆధ్వర్యంలో గ్రామీణ విద్యార్థులకు ఉచిత ఐఏఎస్, ఐఐటీ, నీట్ ఫౌండేషన్ శిక్షణ.",
    image: getImageUrl("news_article_1"),
    category: "Main Press Feature"
  },
  {
    id: 2,
    title: "సూపర్ 100 బ్యాచ్ ద్వారా సివిల్స్, ఐఐటీ దిశగా పేద విద్యార్థుల ప్రయాణం",
    publication: "Namasthe Telangana",
    date: "June 2025",
    snippet: "గండీడ్ పాఠశాల నుండి ప్రారంభమై 25కు పైగా ప్రభుత్వ డిజిటల్ క్లాస్‌రూమ్‌లలో సంకల్ప సిద్ధి ప్రతిష్టాత్మక శిక్షణ.",
    image: getImageUrl("news_article_2"),
    category: "Impact Report"
  },
  {
    id: 3,
    title: "అమెరికా ప్రవాసాంధ్రులు, పీటీఏ చొరవతో సర్కారు బడుల్లో స్మార్ట్ తరగతులు",
    publication: "Andhra Jyothy",
    date: "January 2026",
    snippet: "శ్రీ వరాహప్రసాద్ కందగాట్ల, మోహన్ రెడ్డి గారి సహకారంతో గ్రామీణ విద్యార్థులకు డిజిటల్ లెర్నింగ్ బోర్డులు.",
    image: getImageUrl("news_article_3"),
    category: "NRI Partnership"
  }
];

export const IMPACT_METRICS = [
  { label: "Digital Classrooms", value: "25+", icon: "Monitor" },
  { label: "Super 100 Students", value: "300+", icon: "Users" },
  { label: "Free Coaching Offered", value: "100%", icon: "Award" },
  { label: "Target Student Grades", value: "6th - 10th", icon: "BookOpen" }
];

export const PROGRAM_MODULES = [
  {
    id: "ias-foundation",
    title: "IAS Foundation Course",
    target: "Grades 8th to 10th",
    description: "Comprehensive introduction to General Knowledge, Current Affairs, Critical Thinking, Indian Polity, and Essay Writing designed to instill administrative leadership from an early age.",
    image: getImageUrl("digital_board_setup"),
    badge: "Most Popular",
    link: "https://iasmentoring.com/"
  },
  {
    id: "iit-foundation",
    title: "IIT-JEE Mathematics & Physics",
    target: "Grades 7th to 10th",
    description: "Deep analytical problem-solving, advanced mathematical theorems, physics mechanics, and conceptual chemistry for budding engineers.",
    image: getImageUrl("online_class_preview"),
    badge: "STEM Focus",
    link: "https://iasmentoring.com/"
  },
  {
    id: "neet-foundation",
    title: "NEET Medical Sciences",
    target: "Grades 7th to 10th",
    description: "In-depth biology, botanical classification, human anatomy, and physical chemistry foundations tailored for medical aspirants.",
    image: getImageUrl("classroom_students"),
    badge: "Medical Path",
    link: "https://iasmentoring.com/"
  },
  {
    id: "summer-camps",
    title: "Holistic Summer Camps & Skill Workshops",
    target: "Grades 6th to 10th",
    description: "Intensive 3-week interactive workshops covering memory techniques, handwriting enhancement, public speaking, ethics, and moral values.",
    image: getImageUrl("volunteer_faculty"),
    badge: "Annual Program",
    link: "#"
  }
];

export const GALLERY_ITEMS = [
  { id: 1, title: "Sri Akella Raghavendra Sir Teaching", category: "Akella Sir & Mentors", image: getImageUrl("akella_sir_teaching") },
  { id: 2, title: "Akella Raghavendra Sir Portrait", category: "Akella Sir & Mentors", image: getImageUrl("akella_raghavendra") },
  { id: 3, title: "Interactive Digital Board Setup in School", category: "Digital Classrooms", image: getImageUrl("digital_board_setup") },
  { id: 4, title: "Digital Classroom Hero Interaction", category: "Digital Classrooms", image: getImageUrl("classroom_hero") },
  { id: 5, title: "Students Engaged in Smart Learning", category: "Digital Classrooms", image: getImageUrl("classroom_students") },
  { id: 6, title: "Online Live Interactive Class Session", category: "Digital Classrooms", image: getImageUrl("online_class_preview") },
  { id: 7, title: "Official Summer Camp Brochure Poster", category: "Summer Camp & Poster", image: getImageUrl("camp_poster") },
  { id: 8, title: "Volunteer Faculty & Workshop Sessions", category: "Summer Camp & Poster", image: getImageUrl("volunteer_faculty") },
  { id: 9, title: "Main Press Clipping - Eenadu Feature", category: "In the News", image: getImageUrl("news_article_1") },
  { id: 10, title: "Press Coverage - Namasthe Telangana", category: "In the News", image: getImageUrl("news_article_2") },
  { id: 11, title: "Press Feature - NRI Partnership", category: "In the News", image: getImageUrl("news_article_3") },
  ...FACULTY_DATA.map((f, idx) => ({
    id: 12 + idx,
    title: `${f.name} - ${f.designation}`,
    category: "Faculty",
    image: f.image
  }))
];
