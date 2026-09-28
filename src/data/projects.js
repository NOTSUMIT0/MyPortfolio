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

import fm_landing from "../assets/flaskmarket/1.png";
import fm_market from "../assets/flaskmarket/2.png";
import fm_product_details from "../assets/flaskmarket/3.png";
import fm_cart from "../assets/flaskmarket/4.png";
import fm_categories from "../assets/flaskmarket/5.png";
import fm_deals from "../assets/flaskmarket/6.png";

import cr_1 from "../assets/carracing/1.png";
import cr_2 from "../assets/carracing/2.png";

import fd_1 from "../assets/finance-dashboard/1.png";
import fd_2 from "../assets/finance-dashboard/2.png";
import fd_3 from "../assets/finance-dashboard/3.png";

import pc_1 from "../assets/pychain/1.png";
import pc_2 from "../assets/pychain/2.png";
import pc_3 from "../assets/pychain/3.png";

const ALL_PROJECTS = [
  {
    id: "altair",
    category: "featured",
    title: "ALTAIR : AI CONVERSION PLATFORM",
    desc: "A desktop-first AI document conversion platform that transforms documents, media, and YouTube content into structured, AI-ready Markdown.",
    tags: ["React.js", "Electron", "FastAPI", "AI", "Python"],
    image: "/assets/Altair/1.png",
    videoUrl: "/assets/Project-Videos/Altair.mp4",
    repo: "https://github.com/NOTSUMIT0/Altair",

    year: "2026",
    role: "Full Stack Developer",
    tools: ["React.js", "Electron", "FastAPI", "MarkItDown", "Whisper", "Tesseract OCR", "Python"],
    overview: "Altair is a powerful desktop-first AI platform built to convert nearly any format—including PDFs, images, audio, video, and YouTube URLs—into structured, searchable, and AI-ready Markdown. By leveraging advanced local AI models like Whisper for transcription and Tesseract for OCR, it guarantees complete privacy by keeping all processing directly on your machine.",
    challenge: "Knowledge workers and students often struggle with scattered information locked inside videos, scanned PDFs, and audio recordings. Converting this media into usable, searchable text typically requires multiple disjointed, cloud-based tools that can compromise user privacy.",
    solution: "Engineered a unified, local-first Electron and FastAPI application. Altair orchestrates advanced AI pipelines (OCR, Whisper transcriptions, and Microsoft MarkItDown) to effortlessly process complex files into clean Markdown, complete with AI summaries and structured study notes.",
    contributions: [
      "Architected a cross-platform desktop application using React and Electron",
      "Developed a robust local AI backend with FastAPI, integrating Whisper and Tesseract OCR",
      "Engineered automated pipelines to generate AI summaries and structured study notes",
      "Ensured a completely local-first architecture for maximum data privacy"
    ],
    details: [
      {
        title: "Universal Document Conversion",
        content: "Effortlessly convert standard documents, scanned PDFs, and images into structured Markdown using Microsoft MarkItDown and OCRmyPDF.",
        points: [
          "Seamless PDF & Image OCR",
          "Rich Markdown export",
          "Local-first document processing"
        ],
        image: "/assets/Altair/2.png"
      },
      {
        title: "Advanced Media Transcription",
        content: "Unlock the value in audio and video files. Altair uses local Whisper models to generate highly accurate transcriptions from local media and YouTube URLs.",
        points: [
          "Audio & Video to text",
          "Direct YouTube transcription",
          "High accuracy local Whisper integration"
        ],
        image: "/assets/Altair/3.png"
      },
      {
        title: "AI Summaries & Study Notes",
        content: "Go beyond raw text. The platform intelligently processes transcriptions to generate concise AI summaries, tailored study notes, and interview prep materials.",
        points: [
          "Automated study note generation",
          "Interview preparation outlines",
          "Searchable conversion history"
        ],
        image: "/assets/Altair/4.png"
      }
    ],
    features: [
      "Document to Markdown & PDF OCR",
      "Audio/Video transcription with Whisper",
      "YouTube transcript generation",
      "AI Summaries & Study Notes",
      "Local-first, privacy-focused processing",
      "Markdown, TXT, and JSON exports"
    ],
    outcomes: [
      "Eliminated reliance on expensive, cloud-based conversion tools",
      "Streamlined research workflows for students and professionals",
      "Maintained 100% user data privacy through local processing"
    ],
    team: [
      { name: "Sumit Kumar", role: "Full Stack Developer" }
    ],
    gallery: [
      "/assets/Altair/1.png",
      "/assets/Altair/2.png",
      "/assets/Altair/3.png",
      "/assets/Altair/4.png",
      "/assets/Altair/5.png",
      "/assets/Altair/6.png"
    ],
    demoUrl: null,
    desktopSetupUrl: "https://github.com/NOTSUMIT0/Altair/releases/tag/v2.0.0",
    nextProject: "daymark",
  },
  {
    id: "daymark",
    category: "featured",
    title: "DAYMARK : PRODUCTIVITY WORKSPACE",
    desc: "A powerful, privacy-first productivity workspace designed to seamlessly manage daily tasks, long-term roadmaps, and blueprints.",
    tags: ["React.js", "Tauri", "Mobile", "Desktop", "Javascript"],
    image: "/assets/DayMark/for desktop/Today.png",
    videoUrl: "/assets/Project-Videos/DayMark.mp4",
    repo: "https://github.com/NOTSUMIT0/Daymark",

    year: "2026",
    role: "Full Stack Developer",
    tools: ["React.js", "Tauri", "Javascript", "Tailwind CSS"],
    overview: "Daymark is an all-in-one cross-platform application (Android and Desktop) designed to give you a complete view of your life's plans. It goes beyond simple to-do lists by integrating your daily tasks with comprehensive roadmaps and blueprints, keeping you focused on the big picture.",
    challenge: "The problem with most productivity apps is they only focus on tasks. To truly maintain focus and create a better view of a plan, you need everything in one place—not just tasks, but a full map of roadmaps, blueprints, and long-term goals.",
    solution: "Developed a unified workspace that bridges the gap between daily execution and long-term planning. By bringing tasks, roadmaps, and blueprints into a single, cohesive view, users can maintain their focus and track progress effectively across both mobile and desktop devices.",
    contributions: [
      "Built cross-platform support using Tauri for desktop and modern web technologies for mobile",
      "Designed a seamless UI that adapts perfectly to both large desktop screens and compact mobile displays",
      "Implemented the core Today page, Roadmaps, and Blueprints features",
      "Ensured a privacy-first architecture with localized data management"
    ],
    details: [
      {
        title: "The Today Page",
        content: "A centralized hub to maintain daily focus. It shows exactly what needs to be done today while keeping your broader goals in perspective.",
        points: [
          "Daily task tracking",
          "Focus-oriented dashboard",
          "Quick access to active blueprints"
        ],
        images: {
          desktop: "/assets/DayMark/for desktop/Today.png",
          mobile: "/assets/DayMark/for mobile/Today.jpg"
        }
      },
      {
        title: "Full Map of Roadmaps",
        content: "Step back and view your entire journey. The roadmaps feature allows you to visualize long-term plans and track your overall progress across multiple domains.",
        points: [
          "Visual timeline of goals",
          "Milestone tracking",
          "Comprehensive progress overview"
        ],
        images: {
          desktop: "/assets/DayMark/for desktop/Roadmaps.png",
          mobile: "/assets/DayMark/for mobile/Roadmaps.jpg"
        }
      },
      {
        title: "Detailed Blueprints & Tasks",
        content: "Break down complex projects into manageable, actionable blueprints. Everything required to maintain focus and execute your plan is organized here.",
        points: [
          "In-depth project breakdown",
          "Structured planning tools",
          "Seamless integration with daily tasks"
        ],
        images: {
          desktop: "/assets/DayMark/for desktop/Tasks.png",
          mobile: "/assets/DayMark/for mobile/Tasks.jpg"
        }
      }
    ],
    features: [
      "Cross-platform capability (Android & Desktop)",
      "Today Page for immediate focus",
      "Comprehensive Roadmaps for long-term vision",
      "Project Blueprints for structured planning",
      "Privacy-first architecture"
    ],
    outcomes: [
      "Delivered a unified application across Android and Desktop",
      "Created a holistic view for planning and execution",
      "Solved the disjointed experience of using multiple apps for tasks and roadmaps"
    ],
    team: [
      { name: "Sumit Kumar", role: "Developer" }
    ],
    gallery: [
      "/assets/DayMark/for desktop/Today.png",
      "/assets/DayMark/for mobile/Today.jpg",
      "/assets/DayMark/for desktop/Roadmaps.png",
      "/assets/DayMark/for mobile/Roadmaps.jpg",
      "/assets/DayMark/for desktop/Tasks.png",
      "/assets/DayMark/for mobile/Tasks.jpg",
      "/assets/DayMark/for desktop/Files.png",
      "/assets/DayMark/for desktop/Notes.png",
      "/assets/DayMark/for desktop/Reports.png",
      "/assets/DayMark/for desktop/Settings.png"
    ],
    demoUrl: null,
    androidSetupUrl: "https://github.com/NOTSUMIT0/Daymark/releases/download/v1.0.0/app-release.apk",
    desktopSetupUrl: "https://github.com/NOTSUMIT0/Daymark/releases/download/v1.0.0/Daymark_1.0.0_x64-setup.exe",
    nextProject: "stc",
  },
  {
    id: "stc",
    category: "featured",
    title: "STC : STUDENT TEACHING COMPANION",
    desc: "A comprehensive web application designed to be an all-in-one learning companion for students.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"],
    image: stc_landing,
    videoUrl: "/assets/Project-Videos/STC.mp4",
    repo: "https://github.com/NOTSUMIT0/STC",

    // ── Case-study detail fields ──
    year: "2024",
    role: "Full Stack Developer",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "HTML5", "CSS", "Javascript"],
    overview: "Student Platform STC is a comprehensive web application designed to be an all-in-one learning companion for students. It acts as a centralized hub that helps students organize their self-learning journey by providing structured learning roadmaps, productivity tools, resource management, and a supportive community. It aims to solve common student challenges like information overload, lack of direction, and disorganization.",
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
    videoUrl: "/assets/Project-Videos/IDS.mp4",
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
    videoUrl: "/assets/Project-Videos/FutureGuard.mp4",
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

  {
    id: "finance-dashboard",
    category: "noteworthy",
    title: "Finance Dashboard Backend",
    desc: "A secure, role-based backend API for managing financial records and analytics, built with Node.js and Express.",
    tags: ["Node.js", "Express", "SQLite", "JWT", "RBAC"],
    image: fd_2,
    repo: "https://github.com/NOTSUMIT0/Finance-Dashboard-Backend",

    year: "2025",
    role: "Backend Developer",
    tools: ["Node.js", "Express.js", "SQLite", "better-sqlite3", "bcryptjs", "JWT"],
    overview: "Developed a robust backend architecture for a finance dashboard featuring Role-Based Access Control (Admin, Analyst, Viewer). The system supports full CRUD operations for financial records, soft deletes to preserve data integrity, and analytical endpoints for categorizing and summarizing expenses over time.",
    challenge: "Building a secure financial system requires strict access controls and robust data integrity, ensuring users can only access information relevant to their roles without risking accidental permanent data loss.",
    solution: "Implemented JWT-based authentication with a clear three-tier RBAC system, utilized SQLite for zero-config deployment, and designed the database with soft-delete functionality for all financial records.",
    contributions: [
      "Built a complete RESTful API using Node.js and Express",
      "Implemented JWT authentication and RBAC middleware",
      "Designed database schema with SQLite and soft-deletes",
      "Created analytical endpoints for monthly trends and category breakdowns"
    ],
    details: [
      {
        title: "RESTful API Documentation",
        content: "Comprehensive Swagger/OpenAPI documentation for all financial and user management endpoints.",
        points: ["Auto-generated Docs", "Endpoint Testing", "Role-based Access Labels"],
        image: fd_1,
      },
      {
        title: "Resource Management",
        content: "Sophisticated backend architecture for managing financial records with soft-delete and filtering capabilities.",
        points: ["Soft-delete Logic", "Paginated Records", "Secure Authentication"],
        image: fd_2,
      },
      {
        title: "Robust Data Schemas",
        content: "Strongly typed database models ensuring data integrity across users and financial transactions.",
        points: ["User-Record Relations", "Transaction Integrity", "Error Handling Schema"],
        image: fd_3,
      }
    ],
    features: [
      "Role-Based Access Control",
      "JWT Authentication",
      "Full CRUD for Financial Records",
      "Soft Delete Functionality",
      "Data Analytics & Summaries"
    ],
    outcomes: [
      "Delivered a secure, production-ready REST API",
      "Ensured data safety with soft-delete architecture"
    ],
    team: [{ name: "Sumit Kumar", role: "Backend Developer" }],
    gallery: [fd_1, fd_2, fd_3],
    demoUrl: null,
    nextProject: "flask-market",
  },
  {
    id: "flask-market",
    category: "noteworthy",
    title: "Universal Cart (FlaskMarket)",
    desc: "A premium, high-end e-commerce marketplace featuring a professional dark-themed UI, cinematic authentication, and dynamic flash deals.",
    tags: ["Python", "Flask", "PostgreSQL", "Tailwind CSS"],
    image: fm_landing,
    videoUrl: "/assets/Project-Videos/FlaskMarket.mp4",
    repo: "https://github.com/NOTSUMIT0/FlaskMarket",

    year: "2025",
    role: "Full Stack Developer",
    tools: ["Python", "Flask", "SQLAlchemy", "Tailwind CSS", "PostgreSQL", "Bcrypt", "Flask-Login"],
    overview: "Universal Cart is a high-performance e-commerce platform designed with a modern tech-focused aesthetic. It transitions away from traditional e-commerce layouts toward a cinematic user experience, from a split-screen authentication flow with looping video backgrounds to a dynamic flash deals engine. The platform manages real-time inventory, secure user sessions, and transaction integrity using a robust PostgreSQL backend.",
    challenge: "Moving beyond traditional e-commerce layouts to create a cinematic, high-performance shopping experience that feels like a premium tech ecosystem while maintaining strict database integrity for multi-item transactions.",
    solution: "Developed a modular Flask backend with SQLAlchemy for atomic transactions and state management, paired with a responsive Tailwind CSS frontend utilizing glassmorphism and custom CSS animations. Integrated specialized 3D-rendered views for categories and a real-time discount engine.",
    contributions: [
      "Designed and implemented a cinematic split-screen authentication system with looping video backgrounds",
      "Developed a dynamic Flash Deals engine with custom Jinja2 filter logic for real-time price calculations",
      "Built an intelligent category ecosystem featuring premium 3D renders and glassmorphic depth effects",
      "Engineered an atomic transaction system for buying and selling items with real-time budget validation",
      "Integrated PostgreSQL for production-ready persistence and secure session handling via Flask-Login"
    ],
    details: [
      {
        title: "Cinematic Landing Page",
        content: "A high-impact entry point featuring a custom dark tech aesthetic, real-time statistics, and a glassmorphic hero section designed for visual excellence.",
        points: ["Modern Hero Section with CTA", "Platform Stats Visualization", "Glassmorphic UI Architecture"],
        image: fm_landing,
      },
      {
        title: "Product Ecosystem",
        content: "A detailed product discovery system featuring modal-driven deep dives into item specifications, pricing, and availability.",
        points: ["Detailed Item Modals", "Real-time Pricing Information", "Granular Inventory Specs"],
        image: fm_product_details,
      },
      {
        title: "3D Category Ecosystem",
        content: "Specialized views for tech gear, each represented by premium 3D renders with deep-shadow effects and smooth hover transitions.",
        points: ["Smartphones, Laptops, Gaming", "Premium 3D Visual Assets", "Responsive Category Grid"],
        image: fm_categories,
      },
      {
        title: "Flash Deals Engine",
        content: "A dedicated promotional hub featuring a high-impact 'Flash Deals' banner with up to 60% off on premium tech gadgets. The page includes a 'Deal of the Day' section highlighting exclusive discounts on top-rated marketplace items.",
        points: ["Up to 60% Limited Time Offers", "Deal of the Day Curations", "Real-time -20% Discount Badges"],
        image: fm_deals,
      },
      {
        title: "Unified Marketplace & Cart",
        content: "The central hub for commerce where users can browse, purchase, and stage items in a real-time shopping cart before commitment.",
        points: ["Real-time Sidebar Cart", "Atomic Buy/Sell Transactions", "Dynamic Budget Tracking"],
        image: fm_cart,
      }
    ],
    features: [
      "Cinematic Split-Screen Auth Flow",
      "Dynamic Flash Deals Engine",
      "3D-Rendered Category Ecosystem",
      "Atomic Transaction & Budget System",
      "Premium Dark Theme (Tailwind CSS)",
      "PostgreSQL Production Backend",
      "Circular Economy Resale Feature"
    ],
    outcomes: [
      "Built a professional-grade e-commerce prototype",
      "Achieved cinematic UI/UX responsiveness",
      "Ensured 100% database transaction integrity",
      "Delivered a visually stunning tech marketplace"
    ],
    team: [{ name: "Sumit Kumar", role: "Full Stack Developer" }],
    gallery: [fm_landing, fm_market, fm_categories, fm_deals, fm_product_details, fm_cart],
    demoUrl: "https://flaskmarket-lrvq.onrender.com/",
    demoText: "Live Demo",
    nextProject: "pychain",
  },
  {
    id: "pychain",
    category: "noteworthy",
    title: "PyChain Prototype",
    desc: "A lightweight Python-based blockchain prototype demonstrating core concepts like Proof-of-Work and decentralized consensus.",
    tags: ["Python", "Flask", "Blockchain"],
    image: pc_1,
    repo: "https://github.com/NOTSUMIT0/PyChain---A-Lightweight-Blockchain-Prototype",

    year: "2025",
    role: "Developer",
    tools: ["Python", "Flask", "SHA-256"],
    overview: "PyChain is a lightweight blockchain implementation built entirely in Python. It demonstrates the fundamental mechanics of blockchain technology, including block creation, hashing, Proof-of-Work mining, and transaction processing through a RESTful API.",
    challenge: "Understanding the underlying mechanics of blockchain technology can be difficult when obscured by complex frameworks and massive codebases.",
    solution: "Engineered a minimalistic blockchain from scratch, providing clear and transparent logic for hashing, mining, and consensus, exposed via simple Flask API endpoints.",
    contributions: [
      "Implemented block creation and SHA-256 hashing",
      "Developed Proof-of-Work mining algorithm",
      "Created Flask endpoints for transactions and mining",
      "Built simple consensus logic for nodes"
    ],
    details: [
      {
        title: "Miner Terminal",
        content: "An interactive Streamlit-based terminal for mining new blocks and monitoring node status in real-time.",
        points: ["Active Node Status", "PoW Mining Trigger", "Address Management"],
        image: pc_1,
      },
      {
        title: "Block Explorer",
        content: "Transparent view of the blockchain ledger, including proof-of-work values, timestamps, and transaction data.",
        points: ["Hash Visualization", "Block Verification", "Transaction History"],
        image: pc_2,
      },
      {
        title: "Transaction Handling",
        content: "Secure interface for creating and broadcasting new transactions to the blockchain network.",
        points: ["Digital Signatures", "Transaction Validation", "Minimalist UI"],
        image: pc_3,
      }
    ],
    features: [
      "SHA-256 Block Hashing",
      "Proof-of-Work Mining",
      "RESTful API (Flask)",
      "Transaction Logging",
      "Genesis Block Generation"
    ],
    outcomes: [
      "Created a clear educational tool for blockchain concepts",
      "Successfully implemented PoW algorithm from scratch"
    ],
    team: [{ name: "Sumit Kumar", role: "Developer" }],
    gallery: [pc_1, pc_2, pc_3],
    demoUrl: null,
    nextProject: "car-racing",
  },
  {
    id: "car-racing",
    category: "noteworthy",
    title: "2D Car Racing",
    desc: "A 2D top-down car racing game built with Python and Pygame, featuring collision detection and keyboard controls.",
    tags: ["Python", "Pygame", "Game Dev"],
    image: cr_1,
    videoUrl: "/assets/Project-Videos/2D-Car-Racing.mp4",
    repo: "https://github.com/NOTSUMIT0/CAR-RACING",

    year: "2025",
    role: "Game Developer",
    tools: ["Python", "Pygame"],
    overview: "A classic 2D top-down racing game developed using Python and the Pygame library. The project demonstrates fundamental game development concepts including sprite rendering, game loop management, collision detection, and user input handling.",
    challenge: "Creating a smooth gaming experience requires optimizing the game loop, handling real-time continuous user input, and accurately calculating pixel-perfect or bounding-box collisions.",
    solution: "Utilized Pygame's robust event handling and sprite groups to create an efficient game loop. Implemented custom movement physics and bounding-box collision detection for reliable gameplay mechanics.",
    contributions: [
      "Programmed the core game loop and event handling",
      "Implemented car movement physics and keyboard controls",
      "Designed track boundaries and collision detection",
      "Added sprite management and rendering logic"
    ],
    details: [
      {
        title: "Track Dynamics & Mechanics",
        content: "Detailed track layout with optimized collision boundaries and smooth car movement physics designed for high-speed maneuvering.",
        points: ["Track Constraints Logic", "Physics-based Car Handling", "Collision Optimization"],
        image: cr_1,
      },
      {
        title: "Real-time Dashboard",
        content: "Integrated HUD (Heads-Up Display) for tracking level progression, elapsed time, and current speed in real-time during gameplay.",
        points: ["Live Speedometer (px/s)", "Level Progression HUD", "Elapsed Time Tracking"],
        image: cr_2,
      }
    ],
    features: [
      "2D Top-Down Racing",
      "Keyboard Controls",
      "Collision Detection",
      "Sprite Management",
      "Score Tracking"
    ],
    outcomes: [
      "Developed a fully playable 2D racing game",
      "Gained practical experience with game loops and Pygame"
    ],
    team: [{ name: "Sumit Kumar", role: "Game Developer" }],
    gallery: [cr_1, cr_2],
    demoUrl: null,
    nextProject: "stc",
  }
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
