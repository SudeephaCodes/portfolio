export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumePdf: string;
  description: string;
}

export interface Stat {
  label: string;
  target: number;
}

export interface AboutData {
  title: string;
  content: string[];
  stats: Stat[];
}

export interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  details: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  tags: string[];
}

export interface ProjectItem {
  number: string;
  year: string;
  name: string;
  tech: string;
  details: string[];
}

export interface TrainingItem {
  name: string;
  provider: string;
  progress: number;
  type: 'ai' | 'code';
}

export interface AchievementData {
  title: string;
  date: string;
  text: string;
  funding: string;
  impact: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  major: string;
  duration: string;
  grade: string;
  coursework: string;
}

export interface CodeToken {
  type: 'comment' | 'bracket' | 'property' | 'string' | 'keyword' | 'variable';
  text: string;
}

export interface CodeLine {
  tokens: CodeToken[];
}

export type FilesData = Record<string, CodeLine[]>;

export const personalInfo: PersonalInfo = {
  name: "Sudeepha R",
  role: "Jr.Software Developer",
  location: "Rajapalayam, Tamil Nadu, India",
  email: "sudeesudee78@gmail.com",
  github: "https://github.com/SudeephaCodes",
  linkedin: "http://www.linkedin.com/in/sudeepharamasubramanian",
  resumePdf: "/Assets/Resume/Sudeepha.R.pdf",
  description: "Building secure, scalable full-stack applications with React, Node.js & .NET — while staying sharp on OWASP, AI-assisted development, and modern security practices."
};

export const aboutData: AboutData = {
  title: "About Me",
  content: [
    "I'm Sudeepha R, an entry-level Jr.Software Developer based in Rajapalayam, Tamil Nadu. I specialize in building full-stack web applications with modern technologies.",
    "With hands-on experience in React, Node.js, and SQL, along with REST API design and integration, I bring ideas to life through clean, efficient code. I'm also skilled in UI/UX design using tools like Stitch and Figma.",
    "My growing focus on AI-assisted development — including context engineering, code validation, and effective ORM coding — keeps me at the cutting edge. On the security front, I'm knowledgeable in OWASP Top 10, data protection, supply chain security, and network security."
  ],
  stats: [
    { label: "Work Experiences", target: 3 },
    { label: "Projects Built", target: 5 },
    { label: "Technologies", target: 7 },
    { label: "FAER Award", target: 1 }
  ]
};

export const experienceData: ExperienceItem[] = [
  {
    date: "07/2025 – Present",
    role: "Junior Software Developer",
    company: "Cybervault Innovations & Technologies Pvt Ltd",
    details: [
      "Developed the STS mobile application using React Native for the frontend with an ASP.NET backend and SQL Server database, delivering cross-platform functionality for end users.",
      "Built Banking LMS, a web-based loan management system, using React.js for the frontend, PHP for the backend, and MySQL for data storage.",
      "Developed the STS Web Application using ASP.NET MVC Razor Views, HTML5, CSS3, Bootstrap, JavaScript, jQuery, and AJAX for the frontend; ASP.NET MVC (C#) and .NET Framework for the backend; and Microsoft SQL Server as the database.",
      "Conducted cybersecurity awareness sessions covering GitHub Security Best Practices, Keylogger Threats, and SOC Monitoring using Splunk SIEM."
    ]
  },
  {
    date: "10/2024 – 11/2024",
    role: "Machine Learning Intern",
    company: "Geons Logix",
    details: [
      "Built and trained supervised Machine Learning models for predictive data analysis.",
      "Performed dataset preprocessing, feature extraction, and model performance evaluation.",
      "Applied classification algorithms for real-world data-driven problem solving using Python."
    ]
  },
  {
    date: "06/2024 – 09/2024",
    role: "IoT Development Intern",
    company: "Kevell Corp",
    details: [
      "Gained hands-on experience in IoT development using ESP32 modules.",
      "Worked on real-time sensor integration, device communication, and IoT-based system deployment.",
      "Used the Kioski tool for practical IoT applications and prototyping."
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "Monitor",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "React Native"]
  },
  {
    name: "Backend",
    icon: "Server",
    tags: ["Node.js", "Java", "Express.js", "ASP.NET", "PHP"]
  },
  {
    name: "Database & API",
    icon: "Database",
    tags: ["SQL", "MySQL", "SQL Server", "REST API"]
  },
  {
    name: "UI/UX Tools",
    icon: "PenTool",
    tags: ["Stitch", "Figma"]
  },
  {
    name: "AI Development",
    icon: "Cpu",
    tags: ["Context Eng.", "Validation", "ORM Coding"]
  },
  {
    name: "Cybersecurity",
    icon: "ShieldAlert",
    tags: ["OWASP Top 10", "Data Protection", "Supply Chain", "Network Sec.", "Splunk SIEM"]
  }
];

export const projectsData: ProjectItem[] = [
  {
    number: "01",
    year: "2026",
    name: "STS Mobile Application",
    tech: "React Native · ASP.NET · SQL Server",
    details: [
      "Cross-platform mobile app with React Native frontend and ASP.NET backend",
      "Designed RESTful APIs for authentication, data sync, and business logic",
      "Built reusable UI components for consistent Android & iOS experience",
      "Optimized database queries and schema design for performance",
      "Collaborated on testing & debugging for smooth cross-device deployment"
    ]
  },
  {
    number: "02",
    year: "2025",
    name: "Banking LMS",
    tech: "React.js · PHP · MySQL",
    details: [
      "Web-based loan management system for banking operations",
      "React.js frontend with PHP backend and MySQL data storage",
      "Full CRUD operations for loan processing workflows",
      "Secure data handling for financial transactions"
    ]
  },
  {
    number: "03",
    year: "2025",
    name: "STS Web Application",
    tech: "ASP.NET MVC · C# · SQL Server · Bootstrap",
    details: [
      "Enterprise web app using ASP.NET MVC Razor Views",
      "Frontend with HTML5, CSS3, Bootstrap, JavaScript, jQuery, AJAX",
      "Backend with ASP.NET MVC (C#) and .NET Framework",
      "Microsoft SQL Server database integration"
    ]
  },
  {
    number: "04",
    year: "2025",
    name: "Expense Tracker Web App",
    tech: "HTML · CSS · JavaScript",
    details: [
      "Responsive expense tracker with interactive UI components",
      "CRUD operations using browser local storage",
      "Multi-page navigation with seamless UX",
      "Deployed on GitHub Pages for public access"
    ]
  },
  {
    number: "05",
    year: "2025",
    name: "Vision-Based Suspicious Detection & Alert System",
    tech: "Python · Computer Vision · ML",
    details: [
      "FAER Scholar Award-winning project",
      "Vision-based suspicious activity detection",
      "Presented at REVA University, Bengaluru",
      "Awarded Certificate of Excellence and ₹7,000 funding"
    ]
  }
];

export const trainingsData: TrainingItem[] = [
  {
    name: "Artificial Intelligence",
    provider: "Infosys Springboard",
    progress: 100,
    type: "ai"
  },
  {
    name: "Java Programming: OOP & SQL",
    provider: "E-BOX Platform",
    progress: 100,
    type: "code"
  }
];

export const achievementData: AchievementData = {
  title: "FAER Scholar Award",
  date: "Presented on 20/06/2025",
  text: "Project \"Vision-Based Suspicious Detection and Alert System\" was selected by the Foundation for Advancement of Education and Research (FAER). It was showcased at REVA University, Bengaluru, earning a Certificate of Excellence.",
  funding: "₹7,000 Project Funding Awarded",
  impact: "Recognized for innovative engineering and real-world intelligence applications in surveillance."
};

export const educationData: EducationData = {
  degree: "Bachelor of Engineering",
  institution: "Ramco Institute of Technology",
  major: "Electronics and Communication Engineering",
  duration: "2021 – 2025",
  grade: "ECE Major",
  coursework: "Microcontrollers, OOP, Data Structures, Communication Systems, Embedded Systems, and Database Systems."
};

export const filesData: FilesData = {
  "resume.json": [
    { tokens: [{ type: 'comment', text: '// sudeepha_resume.json' }] },
    { tokens: [{ type: 'comment', text: '// Software Developer | Cybersecurity' }] },
    { tokens: [] },
    { tokens: [{ type: 'bracket', text: '{' }] },
    { tokens: [{ type: 'property', text: '  "name"' }, { type: 'bracket', text: ': ' }, { type: 'string', text: '"Sudeepha R"' }, { type: 'bracket', text: ',' }] },
    { tokens: [{ type: 'property', text: '  "role"' }, { type: 'bracket', text: ': ' }, { type: 'string', text: '"Junior Software Developer"' }, { type: 'bracket', text: ',' }] },
    { tokens: [{ type: 'property', text: '  "location"' }, { type: 'bracket', text: ': ' }, { type: 'string', text: '"Rajapalayam, Tamil Nadu"' }, { type: 'bracket', text: ',' }] },
    { tokens: [{ type: 'property', text: '  "email"' }, { type: 'bracket', text: ': ' }, { type: 'string', text: '"sudeesudee78@gmail.com"' }] },
    { tokens: [{ type: 'bracket', text: '}' }] }
  ],
  "skills.ts": [
    { tokens: [{ type: 'comment', text: '// skills.ts' }] },
    { tokens: [] },
    { tokens: [{ type: 'keyword', text: 'export const' }, { type: 'variable', text: ' technicalSkills' }, { type: 'bracket', text: ' = {' }] },
    { tokens: [{ type: 'property', text: '  frontend' }, { type: 'bracket', text: ': [' }, { type: 'string', text: '"HTML"' }, { type: 'bracket', text: ', ' }, { type: 'string', text: '"CSS"' }, { type: 'bracket', text: ', ' }, { type: 'string', text: '"React.js"' }, { type: 'bracket', text: ', ' }, { type: 'string', text: '"React Native"' }, { type: 'bracket', text: '],' }] },
    { tokens: [{ type: 'property', text: '  backend' }, { type: 'bracket', text: ': [' }, { type: 'string', text: '"Node.js"' }, { type: 'bracket', text: ', ' }, { type: 'string', text: '"Express"' }, { type: 'bracket', text: ', ' }, { type: 'string', text: '"ASP.NET"' }, { type: 'bracket', text: ', ' }, { type: 'string', text: '"PHP"' }, { type: 'bracket', text: '],' }] },
    { tokens: [{ type: 'property', text: '  database' }, { type: 'bracket', text: ': [' }, { type: 'string', text: '"SQL Server"' }, { type: 'bracket', text: ', ' }, { type: 'string', text: '"MySQL"' }, { type: 'bracket', text: '],' }] },
    { tokens: [{ type: 'property', text: '  cybersecurity' }, { type: 'bracket', text: ': [' }, { type: 'string', text: '"OWASP Top 10"' }, { type: 'bracket', text: ', ' }, { type: 'string', text: '"Splunk SIEM"' }, { type: 'bracket', text: ']' }] },
    { tokens: [{ type: 'bracket', text: '};' }] }
  ],
  "experience.json": [
    { tokens: [{ type: 'comment', text: '// experience.json' }] },
    { tokens: [] },
    { tokens: [{ type: 'bracket', text: '[' }] },
    { tokens: [{ type: 'bracket', text: '  {' }] },
    { tokens: [{ type: 'property', text: '    "role"' }, { type: 'bracket', text: ': ' }, { type: 'string', text: '"Junior Software Developer"' }, { type: 'bracket', text: ',' }] },
    { tokens: [{ type: 'property', text: '    "company"' }, { type: 'bracket', text: ': ' }, { type: 'string', text: '"Cybervault Innovations"' }, { type: 'bracket', text: ',' }] },
    { tokens: [{ type: 'property', text: '    "duration"' }, { type: 'bracket', text: ': ' }, { type: 'string', text: '"07/2025 - Present"' }] },
    { tokens: [{ type: 'bracket', text: '  },' }] },
    { tokens: [{ type: 'bracket', text: '  {' }] },
    { tokens: [{ type: 'property', text: '    "role"' }, { type: 'bracket', text: ': ' }, { type: 'string', text: '"Machine Learning Intern"' }, { type: 'bracket', text: ',' }] },
    { tokens: [{ type: 'property', text: '    "company"' }, { type: 'bracket', text: ': ' }, { type: 'string', text: '"Geons Logix"' }] },
    { tokens: [{ type: 'bracket', text: '  }' }] },
    { tokens: [{ type: 'bracket', text: ']' }] }
  ],
  "contact.sh": [
    { tokens: [{ type: 'comment', text: '#!/bin/bash' }] },
    { tokens: [] },
    { tokens: [{ type: 'keyword', text: 'echo' }, { type: 'string', text: ' "--- CONNECT WITH ME ---"' }] },
    { tokens: [{ type: 'keyword', text: 'echo' }, { type: 'string', text: ' "Email: sudeesudee78@gmail.com"' }] },
    { tokens: [{ type: 'keyword', text: 'echo' }, { type: 'string', text: ' "GitHub: github.com/sudeepha"' }] },
    { tokens: [{ type: 'keyword', text: 'echo' }, { type: 'string', text: ' "LinkedIn: linkedin.com/in/sudeepha"' }] }
  ]
};
