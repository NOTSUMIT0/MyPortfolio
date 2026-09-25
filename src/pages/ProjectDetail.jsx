import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";
import SpecularButton from "../components/ui/SpecularButton";
import { PROJECT_DETAILS } from "../data/projects";
import macbookMockup from "../assets/projects-images/macbook.png";

const ProjectDetail = ({ theme, isDarkMode }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = PROJECT_DETAILS[projectId];
  
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "background", "approach", "solution", "outcomes"];
      let current = "overview";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 400) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "background", label: "Background" },
    { id: "approach", label: "Approach" },
    { id: "solution", label: "Solution" },
    { id: "outcomes", label: "Outcomes" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topPos = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPos - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full bg-[#080808]">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] relative flex flex-col justify-center overflow-hidden pt-32 pb-20">
        <div className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Typography */}
          <div className="w-full md:w-[40%] z-20 flex-shrink-0">
            <Reveal>
              <h1 
                className="text-[15vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-extrabold uppercase text-[#fcdde1] break-words"
                style={{ 
                  fontFamily: "'League Gothic', 'Bebas Neue', sans-serif", 
                  transform: "scaleY(1.2) scaleX(0.9)",
                  transformOrigin: "left center" 
                }}
              >
                {project.title}
              </h1>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="mt-16 flex flex-wrap gap-4">
                {project.demoUrl && (
                  <MagneticButton 
                    onClick={() => window.open(project.demoUrl, "_blank")} 
                    className="px-[40px] py-[18px] text-[1.15rem] rounded-[30px] bg-white text-black font-bold flex items-center justify-center transition-colors hover:bg-neutral-200"
                  >
                    <div className="flex items-center gap-2">
                      Live Demo <ExternalLink size={18} />
                    </div>
                  </MagneticButton>
                )}
                {project.repo && (
                  <SpecularButton 
                    radius={30}
                    tint="#ffffff"
                    tintOpacity={0}
                    textColor="#f5f5f5"
                    lineColor="#ffffff"
                    baseColor="#525252"
                    intensity={1}
                    shineSize={10}
                    shineFade={40}
                    thickness={1}
                    speed={0.35}
                    followMouse
                    proximity={250}
                    onClick={() => window.open(project.repo, "_blank")}
                  >
                    <div className="flex items-center gap-2 text-sm font-bold px-2 py-1">
                      GitHub <Github size={16} />
                    </div>
                  </SpecularButton>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Macbook */}
          <div className="w-full md:w-[60%] relative flex flex-col justify-center items-center mt-24 md:mt-0 right-[-5%] md:right-[-10%] lg:right-[-12%]">
            <Reveal delay={300} className="w-full relative flex justify-center md:justify-end">
              <div className="relative w-[110%] md:w-[130%] max-w-[1500px]">
                <img src={macbookMockup} alt="Macbook" className="w-full relative z-10 pointer-events-none drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]" />
                <div className="absolute z-0 bg-black overflow-hidden" style={{ top: "12.4%", left: "10.4%", width: "79.2%", height: "69.5%" }}>
                  <img src={project.image} alt="Screen" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={400} className="w-full max-w-[850px] mt-16 px-4">
              <p className="text-[#999999] text-lg md:text-[1.3rem] leading-[1.8] font-serif italic text-center">
                {project.overview}
              </p>
            </Reveal>
          </div>

        </div>
      </section>

      {/* CASE STUDY CONTENT (WHITE BG) */}
      <section className="bg-white text-black min-h-screen py-32 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row gap-16 lg:gap-32 relative">
          
          {/* Left Sticky Sidebar */}
          <div className="hidden md:block w-[200px] flex-shrink-0">
            <div className="sticky top-32 flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                if (item.id === "background" && !project.challenge) return null;
                if (item.id === "solution" && !project.solution) return null;
                if (item.id === "outcomes" && !project.outcomes) return null;
                
                return (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-semibold pl-4 transition-all duration-300 border-l-[3px] ${
                      isActive ? "border-black text-black" : "border-transparent text-neutral-400 hover:text-black hover:border-neutral-300"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Video Placeholder */}
            <div className="w-full aspect-[16/10] bg-[#f4f4f4] rounded-2xl flex items-center justify-center mb-24 overflow-hidden relative border border-neutral-200 shadow-sm">
               <div className="absolute inset-0 flex flex-col items-center justify-center group cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">Showcase Video Coming Soon</span>
               </div>
            </div>

            {/* OVERVIEW */}
            <div id="overview" className="mb-24 scroll-mt-32">
              <h2 className="text-[3.5rem] leading-none font-extrabold mb-10 text-black" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                Overview
              </h2>
              <p className="text-[1.15rem] text-neutral-800 font-serif leading-[1.8] mb-10">
                {project.overview}
              </p>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <span className="text-black mt-1 font-bold">•</span>
                  <p className="text-[1.15rem] text-neutral-800 font-serif leading-[1.8]">
                    <strong className="text-black font-bold font-sans tracking-wide">Role: </strong> {project.role}
                  </p>
                </li>
                {project.team && project.team.length > 0 && (
                  <li className="flex gap-4">
                    <span className="text-black mt-1 font-bold">•</span>
                    <p className="text-[1.15rem] text-neutral-800 font-serif leading-[1.8]">
                      <strong className="text-black font-bold font-sans tracking-wide">Teams: </strong> {project.team.map(t => `${t.name} (${t.role})`).join(', ')}
                    </p>
                  </li>
                )}
                <li className="flex gap-4">
                  <span className="text-black mt-1 font-bold">•</span>
                  <p className="text-[1.15rem] text-neutral-800 font-serif leading-[1.8]">
                    <strong className="text-black font-bold font-sans tracking-wide">Timeline: </strong> {project.year}
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-black mt-1 font-bold">•</span>
                  <p className="text-[1.15rem] text-neutral-800 font-serif leading-[1.8]">
                    <strong className="text-black font-bold font-sans tracking-wide">Tech Stack: </strong> {project.tools.join(', ')}
                  </p>
                </li>
              </ul>
            </div>

            {/* BACKGROUND */}
            {project.challenge && (
              <div id="background" className="mb-24 scroll-mt-32">
                <h2 className="text-[3.5rem] leading-none font-extrabold mb-10 text-black" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  Background
                </h2>
                <h3 className="text-[1.3rem] font-bold mb-4 text-black">The Challenge</h3>
                <p className="text-[1.15rem] text-neutral-800 font-serif leading-[1.8] mb-8">
                  {project.challenge}
                </p>
              </div>
            )}

            {/* APPROACH */}
            <div id="approach" className="mb-24 scroll-mt-32">
               <h2 className="text-[3.5rem] leading-none font-extrabold mb-12 text-black" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                 Approach
               </h2>
               <div className="space-y-20">
                 {project.details.map((detail, idx) => (
                    <div key={idx}>
                       <h3 className="text-[1.3rem] font-bold mb-4 text-black">{detail.title}</h3>
                       <p className="text-[1.15rem] text-neutral-800 font-serif leading-[1.8] mb-10">{detail.content}</p>
                       {detail.image && (
                         <div className="w-full bg-[#f8f8f8] p-4 rounded-xl border border-neutral-200 shadow-sm">
                           <img src={detail.image} alt={detail.title} className="w-full h-auto rounded-lg shadow-sm border border-neutral-100" />
                         </div>
                       )}
                    </div>
                 ))}
               </div>
            </div>

            {/* SOLUTION */}
            {project.solution && (
              <div id="solution" className="mb-24 scroll-mt-32">
                <h2 className="text-[3.5rem] leading-none font-extrabold mb-10 text-black" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  Solution
                </h2>
                <p className="text-[1.15rem] text-neutral-800 font-serif leading-[1.8] mb-8">
                  {project.solution}
                </p>
                <div className="pl-6 border-l-[3px] border-black">
                  <ul className="space-y-5">
                     {project.features.map((f, i) => (
                        <li key={i} className="flex gap-4">
                           <span className="text-black font-extrabold font-serif italic text-xl -mt-1">✓</span>
                           <span className="text-[1.1rem] text-neutral-800">{f}</span>
                        </li>
                     ))}
                  </ul>
                </div>
              </div>
            )}

            {/* OUTCOMES */}
            {project.outcomes && (
              <div id="outcomes" className="mb-24 scroll-mt-32">
                <h2 className="text-[3.5rem] leading-none font-extrabold mb-10 text-black" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  Outcomes
                </h2>
                <div className="bg-[#fafafa] p-10 rounded-2xl border border-neutral-200">
                   <ul className="space-y-6">
                      {project.outcomes.map((o, i) => (
                         <li key={i} className="flex gap-5">
                            <span className="text-black font-bold mt-1">→</span>
                            <span className="text-[1.15rem] text-neutral-800 font-medium leading-[1.6]">{o}</span>
                         </li>
                      ))}
                   </ul>
                </div>
              </div>
            )}
            
            {/* BOTTOM NAV */}
            <div className="mt-32 pt-16 border-t border-neutral-200 flex justify-between items-center">
              <button onClick={() => navigate("/work")} className="text-sm font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-colors">
                ← Back to Work
              </button>
              {project.nextProject && (
                <button onClick={() => {
                  navigate(`/project/${project.nextProject}`);
                  window.scrollTo(0, 0);
                }} className="text-sm font-bold uppercase tracking-wider text-black hover:text-neutral-500 transition-colors">
                  Next Project →
                </button>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
