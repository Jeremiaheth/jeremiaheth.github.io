export type Skill = {
  name: string;
  category: "Security" | "Development" | "AI & Data" | "Infrastructure";
  icon: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  points: string[];
  type: "role" | "education";
};

export type Project = {
  number: string;
  name: string;
  description: string;
  tech: string[];
  link?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Jeremiaheth" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jeremiah-e-ojo" },
  { label: "Email", href: "mailto:Jeremiah.ojo@outlook.com" },
];

export const aboutStats = [
  { label: "Years Experience", value: "4+" },
  { label: "Resolution Rate", value: "90%" },
  { label: "Employees Supported", value: "50+" },
];

export const skills: Skill[] = [
  { name: "Network Security", category: "Security", icon: "Shield" },
  { name: "Ethical Hacking", category: "Security", icon: "Bug" },
  { name: "Network Defense", category: "Security", icon: "Network" },
  { name: "Threat Awareness", category: "Security", icon: "Eye" },
  { name: "Access Control", category: "Security", icon: "Key" },
  { name: "OSINT", category: "Security", icon: "Search" },
  { name: "Python", category: "Development", icon: "Code2" },
  { name: "Node.js", category: "Development", icon: "Server" },
  { name: "JavaScript / TypeScript", category: "Development", icon: "Braces" },
  { name: "PowerShell", category: "Development", icon: "Terminal" },
  { name: "REST APIs", category: "Development", icon: "Webhook" },
  { name: "Vector Databases", category: "AI & Data", icon: "Database" },
  { name: "LLM Integration", category: "AI & Data", icon: "Brain" },
  { name: "Agent Architectures", category: "AI & Data", icon: "Bot" },
  { name: "Semantic Search", category: "AI & Data", icon: "Binary" },
  { name: "OCI", category: "Infrastructure", icon: "Cloud" },
  { name: "Supabase", category: "Infrastructure", icon: "Database" },
  { name: "Docker", category: "Infrastructure", icon: "Box" },
  { name: "Linux", category: "Infrastructure", icon: "Laptop" },
  { name: "Microsoft 365", category: "Infrastructure", icon: "Building2" },
];

export const experience: ExperienceItem[] = [
  {
    title: "Technical Specialist",
    company: "Self-Employed",
    date: "Feb 2025 - Present",
    type: "role",
    points: [
      "Freelance technical support, web development, and design consulting.",
      "Delivered WordPress website implementations and custom Python scripting.",
      "Provided practical security consulting for small business environments.",
    ],
  },
  {
    title: "IT Support Technician",
    company: "Mabo Global Solution",
    date: "Jul 2021 - Mar 2024",
    type: "role",
    points: [
      "Served as first point of contact and sustained a 90% first-call resolution rate.",
      "Maintained systems and local network reliability for day-to-day operations.",
      "Enforced security protocols and user access controls across departments.",
      "Created support documentation that reduced repetitive tickets by 25%.",
    ],
  },
  {
    title: "BS Computer Science",
    company: "University of the People",
    date: "2025 - 2029",
    type: "education",
    points: ["Focused on software engineering, systems design, and cybersecurity foundations."],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    name: "neolata-mem",
    description:
      "Graph-native memory engine for AI agents featuring Zettelkasten linking, biological decay mechanics, and vector plus keyword retrieval.",
    tech: ["Node.js", "Supabase", "NVIDIA NIM", "Vector Embeddings"],
    link: "https://github.com/Jeremiaheth/neolata-mem",
  },
  {
    number: "02",
    name: "AI SOC Assistant",
    description:
      "Automates threat intelligence gathering, vulnerability triage, and incident analysis with MITRE ATT&CK mapping, STRIDE modeling, and CVSS scoring.",
    tech: ["Python", "Node.js", "REST APIs", "Vector DBs", "OCI"],
  },
  {
    number: "03",
    name: "The Vanguard",
    description:
      "Multi-agent offensive security platform with four AI agents dedicated to reconnaissance, code review, architecture analysis, and security operations.",
    tech: ["Node.js", "OpenClaw", "Multi-Agent Systems"],
  },
];

export const certifications: Certification[] = [
  { name: "ISC2 Candidate (Pursuing CC)", issuer: "ISC2", date: "In Progress" },
  { name: "Mastercard Cybersecurity Simulation", issuer: "Forage", date: "Completed" },
  { name: "Ethical Hacking Essentials", issuer: "EC-Council", date: "Completed" },
  { name: "Network Defense Essentials", issuer: "EC-Council", date: "Completed" },
  { name: "AI Fundamentals", issuer: "IBT Learning", date: "Completed" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "Completed" },
];

export const contact = {
  email: "Jeremiah.ojo@outlook.com",
  linkedin: "https://linkedin.com/in/jeremiah-e-ojo",
  github: "https://github.com/Jeremiaheth",
  location: "Lagos, Nigeria",
  roleStatus: "Open to cybersecurity analyst, SOC analyst, and security operations roles",
};

export const aboutBio =
  "Results-driven IT professional transitioning into cybersecurity with 4+ years of hands-on experience supporting users, securing systems, and building practical automation. I combine IT operations expertise with AI-driven development to create intelligent tools that strengthen security outcomes.";
