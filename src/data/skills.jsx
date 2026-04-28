import {
  Code,
  Terminal,
  Database,
  Globe,
  Cpu,
  Layout,
  Layers,
  Wrench,
  Brain,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";

const SKILLS_DATA = [
  // ─── Languages ───
  { name: "C++", category: "Languages", icon: <Code size={18} /> },
  { name: "Python", category: "Languages", icon: <Terminal size={18} /> },
  { name: "JavaScript", category: "Languages", icon: <Code size={18} /> },
  { name: "SQL", category: "Languages", icon: <Database size={18} /> },

  // ─── Frontend ───
  { name: "React.js", category: "Frontend", icon: <Code size={18} /> },
  { name: "HTML5", category: "Frontend", icon: <Layout size={18} /> },
  { name: "CSS", category: "Frontend", icon: <Layout size={18} /> },

  // ─── Backend ───
  { name: "Node.js", category: "Backend", icon: <Globe size={18} /> },
  { name: "Express.js", category: "Backend", icon: <Globe size={18} /> },
  { name: "Flask", category: "Backend", icon: <Terminal size={18} /> },
  { name: "REST API", category: "Backend", icon: <Globe size={18} /> },

  // ─── Databases ───
  { name: "MongoDB", category: "Databases", icon: <Database size={18} /> },
  { name: "MySQL", category: "Databases", icon: <Database size={18} /> },
  { name: "PostgreSQL", category: "Databases", icon: <Database size={18} /> },
  { name: "SQLite", category: "Databases", icon: <Database size={18} /> },

  // ─── CyberSec & IoT ───
  { name: "Cyber-security", category: "Concepts", icon: <Shield size={18} /> },
  { name: "Intrusion Detection", category: "Concepts", icon: <Shield size={18} /> },
  { name: "Internet of Things", category: "Concepts", icon: <Zap size={18} /> },

  // ─── Concepts ───
  { name: "Data Structures", category: "Concepts", icon: <Brain size={18} /> },
  { name: "Problem Solving", category: "Concepts", icon: <Brain size={18} /> },

  // ─── Tools & OS ───
  { name: "Git", category: "Tools", icon: <Wrench size={18} /> },
  { name: "GitHub", category: "Tools", icon: <Wrench size={18} /> },
  { name: "Linux", category: "Tools", icon: <Terminal size={18} /> },
  { name: "Kali Linux", category: "Tools", icon: <Shield size={18} /> },
  { name: "Android Studio", category: "Tools", icon: <Smartphone size={18} /> },
];

export default SKILLS_DATA;
