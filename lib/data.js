// ---------------------------------------------------------------------------
// Centralized content for the portfolio.
// Edit the values in this file to update copy anywhere on the site —
// components read from here instead of hard-coding text.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Raveenesshan T",
  firstName: "Raveenesshan",
  initials: "RT",
  titleParts: [
    "Cloud Engineer",
    "AWS Enthusiast",
    "Python Developer",
    "B.Tech IT Graduate",
  ],
  tagline:
    "Building scalable cloud solutions while continuously learning modern technologies.",
  email: "raveenesshan08@gmail.com",
  phoneDisplay: "+91 73586 41692",
  phoneHref: "tel:+917358641692",
  linkedin: "https://linkedin.com/in/raveenesshan",
  github: "https://github.com/raveenesshan",
  resumeUrl: "/resume.pdf",
  photo: "/images/profile.jpg",
};

export const siteMeta = {
  title: "Raveenesshan T — Cloud Engineer & AWS Enthusiast",
  description:
    "Portfolio of Raveenesshan T, a B.Tech Information Technology graduate building scalable, secure cloud-native applications with AWS, Python and Flask.",
  keywords: [
    "Raveenesshan T",
    "Cloud Engineer",
    "AWS Portfolio",
    "Python Developer",
    "Sathyabama Institute of Science and Technology",
    "Cloud Computing Portfolio",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "4+", label: "AWS services in production use" },
  { value: "4", label: "End-to-end projects shipped" },
  { value: "7", label: "Milestones & recognitions" },
];

export const about = {
  eyebrow: "// about",
  heading: "Turning cloud theory into working systems",
  paragraphs: [
    "I'm a Bachelor of Technology graduate in Information Technology from Sathyabama Institute of Science and Technology with a strong passion for Cloud Computing, AWS, Python, and backend development.",
    "I enjoy building practical cloud-native applications that solve real-world problems while following industry best practices — with hands-on experience across AWS services including EC2, S3, IAM, and DynamoDB through personal projects.",
    "I'm constantly learning new technologies, sharpening my skills, and working on projects that strengthen my understanding of cloud architecture, deployment, automation, and software engineering. My goal is to begin my career as a Cloud Engineer, contribute meaningfully from day one, learn from experienced professionals, and grow into a highly skilled cloud architect.",
  ],
  highlights: [
    { icon: "GraduationCap", label: "B.Tech, Information Technology" },
    { icon: "Cloud", label: "Cloud & AWS focused" },
    { icon: "Code2", label: "Python & backend systems" },
    { icon: "Sparkles", label: "Always shipping, always learning" },
  ],
  terminal: {
    title: "whoami.sh",
    lines: [
      { prompt: "$", text: "whoami" },
      { prompt: ">", text: "Raveenesshan T" },
      { prompt: "$", text: "cat focus.txt" },
      { prompt: ">", text: "Cloud · AWS · Python · Backend" },
      { prompt: "$", text: "echo $STATUS" },
      { prompt: ">", text: "building & learning, always" },
    ],
  },
};

export const skillGroups = [
  {
    id: "cloud",
    title: "Cloud",
    note: "Where I spend most of my energy",
    featured: true,
    skills: [
      { name: "Amazon Web Services (AWS)", level: 82, icon: "Cloud" },
      { name: "EC2", level: 82, icon: "Server" },
      { name: "S3", level: 85, icon: "HardDrive" },
      { name: "IAM", level: 78, icon: "ShieldCheck" },
      { name: "DynamoDB", level: 80, icon: "Database" },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    skills: [
      { name: "Python", level: 88, icon: "Code2" },
      { name: "Java", level: 75, icon: "Coffee" },
      { name: "JavaScript", level: 78, icon: "Braces" },
      { name: "HTML", level: 90, icon: "FileCode" },
      { name: "CSS", level: 85, icon: "Palette" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    skills: [
      { name: "Flask", level: 82, icon: "FlaskConical" },
      { name: "Next.js", level: 80, icon: "Triangle" },
      { name: "Tailwind CSS", level: 85, icon: "Wind" },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [{ name: "MySQL", level: 78, icon: "Database" }],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", level: 85, icon: "GitBranch" },
      { name: "GitHub", level: 85, icon: "Github" },
      { name: "VS Code", level: 90, icon: "Terminal" },
      { name: "Postman", level: 80, icon: "Send" },
      { name: "Figma", level: 70, icon: "PenTool" },
    ],
  },
  {
    id: "concepts",
    title: "Concepts",
    skills: [
      { name: "REST APIs", level: 85, icon: "Share2" },
      { name: "Cloud Computing", level: 82, icon: "Globe" },
      { name: "Object-Oriented Programming", level: 85, icon: "Boxes" },
      { name: "Version Control", level: 85, icon: "History" },
      { name: "Responsive Web Design", level: 85, icon: "LayoutGrid" },
    ],
  },
];

export const featuredProjects = [
  {
    id: "cloudvault",
    name: "CloudVault",
    tagline: "Cloud Document Sharing Platform",
    description:
      "A cloud-based document sharing application built with Flask and AWS. Users can upload, download, delete, and securely share files using temporary share codes.",
    details: [
      "Integrated Amazon S3 for secure, durable file storage",
      "DynamoDB manages temporary share-codes with automatic expiration",
      "IAM policies enforce least-privilege access across every service",
      "Deployed and served from an EC2 Windows Server instance",
    ],
    tech: ["AWS EC2", "AWS S3", "IAM", "DynamoDB", "Python", "Flask"],
    icon: "Lock",
    links: { code: "https://github.com/raveenesshan" },
  },
  {
  id: "cloudnotes",
  name: "CloudNotes",
  tagline: "Cross-Platform Cloud Note-Taking Application",
  description:
    "A modern mobile note-taking application built with Flutter and Flask using a clean, scalable architecture. Designed for future migration to AWS cloud services while providing a secure and intuitive note management experience.",
  details: [
    "JWT-based authentication with secure user registration and login",
    "Create, edit, delete, search, pin, favorite, and categorize notes",
    "Built with Flutter (Material 3) and Flask REST API using clean architecture",
    "Backend designed for future deployment on AWS EC2 with Amazon RDS, S3, and SNS integration"
  ],
  tech: [
    "Flutter",
    "Python",
    "Flask",
    "SQLite",
    "SQLAlchemy",
    "JWT"
  ],
  icon: "NotebookPen",
  links: {
    code: "https://github.com/raveenesshan"
  },
},
  {
    id: "portfolio",
    name: "Personal Portfolio Website",
    tagline: "This very site",
    description:
      "A responsive portfolio website showcasing projects, technical skills, achievements, and educational background using modern frontend technologies.",
    details: [
      "Built section-by-section as reusable, composable React components",
      "Scroll-triggered motion, glassmorphism and an animated backdrop",
      "Dark-mode-first design tuned for both recruiters and mobile visitors",
    ],
    tech: ["Next.js", "Tailwind CSS", "Motion (Framer Motion)"],
    icon: "Layers",
    links: { code: "https://github.com/raveenesshan" },
  },
];

export const universityProjects = [
  {
    id: "vr-interview",
    name: "Virtual Reality Mock Interview Simulator",
    period: "University Project",
    description:
      "An immersive VR application to help students practice interviews in a realistic environment — simulating real interview scenarios to build communication skills, confidence, and interview preparedness.",
    tech: ["Unity", "C#", "VR Development"],
    icon: "Users",
  },
  {
    id: "data-to-decisions",
    name: "Data to Decisions",
    period: "University Project",
    description:
      "A data-driven application demonstrating how structured information can be transformed into actionable insights using modern software development techniques.",
    tech: ["Python", "Data Analysis"],
    icon: "BarChart3",
  },
];

export const education = {
  institution: "Sathyabama Institute of Science and Technology",
  degree: "Bachelor of Technology, Information Technology",
  status: "Graduate",
  icon: "GraduationCap",
  note: "Add your exact enrollment / graduation years in lib/data.js — kept open here since they weren't provided.",
};

export const achievements = [
  { icon: "GraduationCap", label: "Bachelor of Technology Graduate in Information Technology" },
  { icon: "Briefcase", label: "Campus Placement Achievement" },
  { icon: "Users", label: "Executive Member of IEI Student Chapter" },
  { icon: "Award", label: "Received a Certificate of Appreciation for contributions to the IOXIT Startup (2024–2025)" },
  { icon: "Rocket", label: "Built and deployed cloud-native applications using AWS" },
  { icon: "Sparkles", label:"Hands-on experience with AWS EC2, S3, IAM, and DynamoDB" },
];

export const contactCards = [
  {
    id: "phone",
    label: "Phone",
    value: personal.phoneDisplay,
    href: personal.phoneHref,
    icon: "Phone",
    copyValue: "+917358641692",
  },
  {
    id: "email",
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: "Mail",
    copyValue: personal.email,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/raveenesshan",
    href: personal.linkedin,
    icon: "Linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/raveenesshan",
    href: personal.github,
    icon: "Github",
  },
];
