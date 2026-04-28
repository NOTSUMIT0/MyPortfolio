import mentor_dashboard from "../assets/futureguard/mentor_dashboard.png";
import mentor_dashboard_inference from "../assets/futureguard/mentor_dashboard_inference.png";
import signup_page from "../assets/futureguard/signup_page.png";
import admin_1 from "../assets/futureguard/Admin-1.png";
import admin_2 from "../assets/futureguard/Admin-2.png";
import admin_3 from "../assets/futureguard/Admin-3.png";
import superadmin_1 from "../assets/futureguard/SuperAdmin-1.png";
import superadmin_2 from "../assets/futureguard/SuperAdmin-2.png";

import stc_landing from "../assets/stc/landing.png";
import stc_dashboard from "../assets/stc/dashboard.png";
import stc_roadmaps from "../assets/stc/roadmaps.png";
import stc_resources from "../assets/stc/resources.png";
import stc_community from "../assets/stc/community.png";
import stc_settings from "../assets/stc/settings.png";
import stc_profile from "../assets/stc/profile.png";

import siem_dashboard from "../assets/siem/dashboard.png";
import siem_alerts from "../assets/siem/alerts.png";
import siem_investigations from "../assets/siem/investigations.png";
import siem_analytics from "../assets/siem/analytics.png";
import siem_mitre from "../assets/siem/mitre.png";
import siem_packet_details from "../assets/siem/packet_details.png";
import siem_alert_details from "../assets/siem/alert_details.png";
import siem_resolved from "../assets/siem/resolved.png";

const ALL_PROJECTS = [
  {
    id: "stc",
    category: "featured",
    title: "STC (Student Teaching Companion)",
    desc: "A comprehensive web application designed to be an all-in-one learning companion for students.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"],
    image: stc_landing,
    repo: "https://github.com/NOTSUMIT0/STC",

    // ── Case-study detail fields ──
    year: "2024",
    role: "Full Stack Developer",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "HTML5", "CSS", "Javascript"],
    overview: "Student Platform (STC) is a comprehensive web application designed to be an all-in-one learning companion for students. It acts as a centralized hub that helps students organize their self-learning journey by providing structured learning roadmaps, productivity tools, resource management, and a supportive community. It aims to solve common student challenges like information overload, lack of direction, and disorganization.",
    challenge: "Students often struggle with information overload, disorganized study materials, and a lack of structured guidance when trying to master new subjects independently.",
    solution: "Developed an integrated platform that combines learning roadmaps, personal productivity tools, a resource hub, and community forums into a single unified dashboard.",
    contributions: [
      "Built the interactive dashboard with To-Do lists and progress tracking",
      "Developed curated learning roadmaps for different domains (Frontend, AI/ML)",
      "Implemented a centralized resource hub with nested folder organization",
      "Created community forums with discussion boards and polls",
      "Integrated full-stack authentication and secure resource sharing"
    ],
    details: [
      {
        title: "Interactive Dashboard",
        content: "A personal command center with To-Do lists, a Time Table, and progress-tracking analytics (pie charts/graphs).",
        points: [
          "Visual progress tracking with charts",
          "Integrated task management",
          "Customizable study schedules"
        ],
        image: stc_dashboard,
      },
      {
        title: "Learning Roadmaps",
        content: "Structured, curated paths designed to guide students step-by-step in mastering new skills and technologies.",
        points: [
          "Curated learning paths for Frontend, AI/ML, and more",
          "Step-by-step guidance to accelerate careers",
          "Community-powered learning tracks"
        ],
        image: stc_roadmaps,
      },
      {
        title: "Cumulative Resources",
        content: "A centralized library for students to upload, organize, and share their study materials efficiently.",
        points: [
          "Nested folder architecture for PDFs and notes",
          "Seamless file upload and sharing capabilities",
          "Easy access to curated learning materials"
        ],
        image: stc_resources,
      },
      {
        title: "Active Community Hub",
        content: "Interactive forums designed to connect students, facilitate peer-to-peer discussions, and encourage collaborative learning.",
        points: [
          "Interactive community polls and discussion threads",
          "Dedicated sub-communities for different domains",
          "Real-time peer support and networking"
        ],
        image: stc_community,
      },
    ],
    features: [
      "Interactive Dashboard with Analytics",
      "Learning Roadmaps (Step-by-step guides)",
      "Resource Hub (Nested Folders, PDFs)",
      "Community Forums & Polls",
      "Progress Tracking & Time Tables",
      "Secure User Authentication"
    ],
    outcomes: [
      "Centralized student workflow into a single app",
      "Improved peer-to-peer resource sharing",
      "Structured learning paths for complex topics",
      "Scalable MERN stack architecture"
    ],
    team: [
      { name: "Sumit Kumar", role: "Full Stack Developer" }
    ],
    gallery: [stc_landing, stc_dashboard, stc_roadmaps, stc_resources, stc_community, stc_settings, stc_profile],
    demoUrl: "https://stc-platform.onrender.com/",
    demoText: "STC Live",
    nextProject: "siem-ids",
  },

  {
    id: "siem-ids",
    category: "featured",
    title: "SIEM based Intrusion Detection System",
    desc: "A hybrid Intrusion Detection System combining signature-based and anomaly-based techniques with a real-time SIEM dashboard.",
    tags: ["Python", "FastAPI", "WebSockets", "Javascript"],
    image: siem_dashboard,
    repo: "https://github.com/NOTSUMIT0/SIEM-Based-Intrusion-Detection-System",

    // ── Case-study detail fields ──
    year: "2024",
    role: "Cybersecurity Developer",
    tools: ["Javascript", "HTML5", "CSS", "Python", "Wireshark", "WebSockets", "FastAPI", "Tailwind CSS", "ECharts", "Scapy"],
    overview: "Designed and developed a hybrid Intrusion Detection System combining signature-based and anomaly-based techniques to detect network attacks from PCAP files and live traffic. The system features a real-time backend API and a SIEM-style interactive dashboard.",
    challenge: "Network security analysts need real-time, correlated alerts with high visibility to rapidly detect and mitigate advanced persistent threats and anomalous network behavior.",
    solution: "Engineered a modular packet analysis pipeline that feeds into a real-time WebSocket backend. Combined this with a modern, responsive frontend dashboard to visualize alerts, traffic trends, and threat intelligence mapping.",
    contributions: [
      "Built a modular packet analysis pipeline using Scapy for capturing and extracting features",
      "Implemented a real-time backend API using FastAPI with WebSocket support",
      "Developed a SIEM-style interactive dashboard with Tailwind CSS and ECharts",
      "Integrated MITRE ATT&CK framework mapping for attack context",
      "Engineered alert correlation and incident grouping logic",
      "Added support for offline PCAP-based analysis and live packet capture"
    ],
    details: [
      {
        title: "Interactive Dashboard",
        content: "A central command view providing real-time threat monitoring, displaying the MITRE ATT&CK Kill Chain, total alerts, and severity distributions via live charts.",
        points: [
          "Real-time alert streaming and kill chain visibility",
          "Severity distribution and active threat summaries",
          "Actionable insights on total alerts and severity levels"
        ],
        image: siem_dashboard,
      },
      {
        title: "Detected Alerts",
        content: "Comprehensive logging of all captured alerts, detailing anomalies, packet characteristics, and severity metrics for granular inspection.",
        points: [
          "Detailed logs of anomalous traffic patterns",
          "Per-packet characteristics and flow duration details",
          "Severity categorization for rapid triage"
        ],
        image: siem_alerts,
      },
      {
        title: "Investigation Center",
        content: "A dedicated forensics workspace for analysts to review, analyze, and resolve active investigations based on deep packet insights.",
        points: [
          "Detailed forensics on under-investigation packets",
          "Resolution workflow (Investigating -> Resolved)",
          "In-depth breakdown of source, destination, and payload data"
        ],
        image: siem_investigations,
      },
      {
        title: "Security Analytics",
        content: "Deep visibility into attack patterns, traffic behavior, and temporal trends through advanced visualizations.",
        points: [
          "Time-series graphs for temporal alert activity",
          "Distribution charts for attack types and severity",
          "Top source IPs and coordinated attack detection"
        ],
        image: siem_analytics,
      },
      {
        title: "MITRE ATT&CK Intelligence",
        content: "Threat intelligence mapping that correlates detected attacks to known adversary tactics and techniques.",
        points: [
          "Visual ATT&CK Kill Chain Overview mapping",
          "Identification of specific detected MITRE techniques",
          "Severity and frequency metrics by tactic"
        ],
        image: siem_mitre,
      },
    ],
    features: [
      "Hybrid detection (Signature & Anomaly)",
      "Live packet capture & PCAP analysis",
      "Real-time WebSocket alert streaming",
      "MITRE ATT&CK framework mapping",
      "Interactive data visualizations (ECharts)",
      "Incident grouping and lifecycle management"
    ],
    outcomes: [
      "High accuracy in detecting known and unknown network attacks",
      "Significant reduction in alert fatigue via correlation",
      "Actionable mitigation guidance for detected threats",
      "Scalable architecture ready for machine learning integration"
    ],
    team: [{ name: "Sumit Kumar", role: "Cybersecurity Developer" }],
    gallery: [
      siem_dashboard,
      siem_alerts,
      siem_investigations,
      siem_analytics,
      siem_mitre,
      siem_packet_details,
      siem_alert_details,
      siem_resolved
    ],
    demoUrl: null,
    nextProject: "futureguard",
  },

  {
    id: "futureguard",
    category: "featured",
    title: "FutureGuard : Student Intelligence System",
    desc: "A data-driven system designed to predict and identify students at risk of dropping out by analyzing academic, behavioral, and performance-related data.",
    tags: ["React.js", "Javascript", "HTML5", "CSS"],
    image: signup_page,
    repo: "https://github.com/NOTSUMIT0/future-guard",

    // ── Case-study detail fields ──
    year: "2025",
    role: "Frontend Developer & Testing",
    tools: ["React.js", "Javascript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "FastAPI", "XGBoost", "SHAP"],
    overview: "FutureGuard is a full-stack student dropout risk prediction and intervention platform combining centralized metadata-driven ingestion, a hybrid risk engine (Rule-Based + XGBoost ML), and SHAP explainability. It helps institutions identify at-risk students early with transparent, actionable insights. The entire system is production-deployed on Render with a decoupled ML microservice for scalable inference.",
    challenge: "Educational institutions needed an intuitive and reliable system to monitor student engagement and performance to prevent dropout rates, but they struggled with opaque 'black-box' ML models that lacked clear explanations.",
    solution: "Designed and built an intuitive, role-based dashboard for Mentors, Admins, and SuperAdmins. We integrated SHAP for transparent ML interpretability alongside deterministic rule-based checks, translating complex predictive analytics into actionable insights.",
    contributions: [
      "Designed and built an intuitive dashboard to display student data and risk levels using React and Recharts",
      "Created responsive UI components for effective visualization of SHAP-based feature importance",
      "Conducted functional and system testing to ensure accuracy of predictions and model explainability",
      "Identified bugs and validated outputs across the hybrid (Rule-Based + ML) risk evaluation engine",
      "Ensured data consistency, aggregation propagation, and reliable system performance in production"
    ],
    details: [
      {
        title: "Explainable ML & Frontend Dashboards",
        content: "Focused on building a responsive and accessible user interface that translates complex XGBoost predictive analytics and SHAP explanations into actionable insights for educators.",
        points: [
          "Intuitive data visualization and risk level displays",
          "Interactive charts for Risk Distribution and Success comparisons",
          "Clear presentation of feature-level & SHAP-driven insights"
        ],
        image: mentor_dashboard,
      },
      {
        title: "Quality Assurance & System Validation",
        content: "Conducted thorough testing across the application to ensure the reliability of the predictive system, backend integrations, and a smooth user experience.",
        points: [
          "Functional testing of UI components and real-time aggregations",
          "System testing for prediction accuracy and consistency across Mentor/Admin flows",
          "Usability improvements based on testing feedback"
        ],
        image: superadmin_1,
      },
    ],
    features: [
      "Student risk prediction dashboard",
      "Hybrid Risk Engine (Rule-based + XGBoost ML)",
      "SHAP-based transparent explainability",
      "Responsive visualization components (Recharts)",
      "Role-Based Access (Mentor, Admin, SuperAdmin)",
      "Real-time aggregations and success tracking"
    ],
    outcomes: [
      "Delivered a reliable, bug-free user interface",
      "Improved system transparency with explainable AI (SHAP)",
      "Enabled clear visibility into student performance metrics"
    ],
    team: [
      { name: "Sumit Kumar", role: "Frontend Developer & Testing" },
      { name: "Manpreet Singh", role: "Full-Stack & ML Engineer" }
    ],
    gallery: [signup_page, admin_1, admin_2, admin_3, superadmin_1, superadmin_2, mentor_dashboard, mentor_dashboard_inference],
    demoUrl: "https://futureguard.onrender.com",
    demoText: "FutureGuard Live",
    nextProject: "stc",
  },
];

/* ── Derived views (no duplication, computed from the single array) ── */

/** Categorised lists for card-based listings (Projects section, Work page) */
const PROJECTS_DATA = {
  featured: ALL_PROJECTS.filter((p) => p.category === "featured"),
  noteworthy: ALL_PROJECTS.filter((p) => p.category === "noteworthy"),
};

/** Keyed lookup for the case-study detail page */
const PROJECT_DETAILS = Object.fromEntries(
  ALL_PROJECTS.filter((p) => p.overview).map((p) => [p.id, p]),
);

export default PROJECTS_DATA;
export { PROJECT_DETAILS, ALL_PROJECTS };
