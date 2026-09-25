import { ArrowUpRight, Cpu, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";
import PROJECTS_DATA from "../data/projects";
import EMBEDDED_PROJECTS from "../data/embeddedProjects";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import TechText from "../components/ui/TechText";
import SpecularButton from "../components/ui/SpecularButton";

const WorkPage = ({ theme }) => {
  const navigate = useNavigate();
  const featuredProjects = PROJECTS_DATA.featured;
  const otherProjects = PROJECTS_DATA.noteworthy;

  return (
    <div className="pt-32 pb-20 w-full overflow-hidden">
      <div className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        {/* ===== HERO / INTRO ===== */}
        <div className="relative w-full flex flex-col items-center justify-center mb-32">
          <Reveal className="w-full">
            <h1
              className="select-text cursor-text w-full text-center"
              style={{
                fontFamily: "'League Gothic', 'Bebas Neue', sans-serif",
                fontSize: "clamp(4rem, 24vw, 22rem)",
                lineHeight: 0.78,
                letterSpacing: "-0.04em",
                color: "#A3F3C4",
                fontWeight: 400,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                transform: "scaleY(1.2) scaleX(0.88)",
                transformOrigin: "center center",
              }}
            >
              PROJECTS
            </h1>
          </Reveal>

          <Reveal delay={200} className="w-full">
            <p
              className="select-text text-center"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(1.2rem, 3.2vw, 2.8rem)",
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: 1.3,
                maxWidth: "1200px",
                margin: "4rem auto 0",
                padding: "0 1rem",
                fontWeight: 400,
              }}
            >
              I build engaging digital experiences, transforming bold ideas into robust and working realities.
            </p>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* ALL PROJECTS HEADING */}
          <div className="mt-16 mb-16 flex flex-col items-center justify-center text-center">
            <Reveal className="w-full flex flex-col items-center">
              <div style={{ width: '100%', height: '120px', position: 'relative' }} className="mb-6">
                <TechText
                  text="Software Projects"
                  fontWeight={800}
                  fontSize={100}
                  reveal="letter"
                  dashLength={4}
                  dashGap={2}
                  specks={15}
                />
              </div>
              <p className="text-[1.1rem] leading-relaxed text-[#A3A3A3] max-w-2xl mx-auto">
                A comprehensive archive of deep dives into the systems I've
                architected, the models I've trained, and the experiments I've
                shipped.
              </p>
            </Reveal>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...featuredProjects, ...otherProjects].map((project, idx) => (
              <Reveal key={project.title} delay={(idx % 2) * 100}>
                <SpecularButton
                  as="div"
                  size="none"
                  radius={32}
                  tint="#ffffff"
                  tintOpacity={0}
                  blur={0}
                  textColor="#ffffff"
                  lineColor="#ffffff"
                  baseColor="#333333"
                  intensity={1.2}
                  shineSize={10}
                  shineFade={40}
                  thickness={1.5}
                  speed={0.35}
                  followMouse
                  proximity={250}
                  autoAnimate={false}
                  className="w-full text-left flex p-0"
                  onClick={() => {
                    if (project.id) {
                      navigate(`/project/${project.id}`);
                      window.scrollTo(0, 0);
                    } else if (project.repo) {
                      window.open(project.repo, "_blank");
                    }
                  }}
                >
                  <div
                    className="group relative flex flex-col h-[380px] w-full rounded-[2rem] bg-[#060606] overflow-hidden cursor-pointer border border-white/5 transition-all duration-300 shadow-2xl"
                    role="button"
                  >
                    {/* IMAGE AREA (Background) */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                          <span className="opacity-20 uppercase tracking-widest text-sm text-white">
                            No Image
                          </span>
                        </div>
                      )}
                      {/* Subtle dark gradient for top/middle readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                    </div>

                    {/* BOTTOM OVERLAY (Title + Desc + Github) */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#111111] rounded-t-3xl border-t border-white/5 flex flex-col z-20 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] h-[175px] group-hover:h-full p-6 pt-5">
                      {/* TITLE */}
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-wide mb-3 flex-shrink-0 line-clamp-2">
                        {project.title}
                      </h3>
                      
                      {/* DESCRIPTION */}
                      <div className="flex-1 overflow-hidden pr-12 relative">
                        <p className="text-[15px] text-neutral-400 leading-relaxed line-clamp-2 absolute top-0 left-0 right-0 transition-opacity duration-300 group-hover:opacity-0">
                          {project.desc}
                        </p>
                        <p className="text-[15px] text-neutral-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {project.overview || project.desc}
                        </p>
                      </div>
                      
                      {/* ICON */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.repo) window.open(project.repo, "_blank");
                        }}
                        className="absolute bottom-7 right-7 text-neutral-500 hover:text-white transition-colors duration-300 z-30 cursor-pointer"
                      >
                        {project.repo ? <Github size={28} /> : <ArrowUpRight size={28} />}
                      </button>
                    </div>
                  </div>
                </SpecularButton>
              </Reveal>
            ))}
          </div>

        {/* ═══════════════════════════════════════════
            EMBEDDED / HARDWARE PROJECTS SECTION
            ═══════════════════════════════════════════ */}
        {EMBEDDED_PROJECTS.length > 0 && (
          <>
            <div className="mt-32 mb-16 flex flex-col items-center justify-center text-center">
              <Reveal className="w-full flex flex-col items-center">
                <div style={{ width: '100%', height: '120px', position: 'relative' }} className="mb-6">
                  <TechText
                    text="Embedded Projects"
                    fontWeight={800}
                    fontSize={100}
                    reveal="letter"
                    dashLength={4}
                    dashGap={2}
                    specks={15}
                  />
                </div>
                <p className="text-[1.1rem] leading-relaxed text-[#A3A3A3] max-w-2xl mx-auto">
                  Hands-on hardware builds — Arduino, sensors, motors, and
                  microcontrollers brought to life through circuits and code.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {EMBEDDED_PROJECTS.map((project, idx) => (
                <Reveal key={project.title} delay={(idx % 2) * 100}>
                  <SpecularButton
                    as="div"
                    size="none"
                    radius={32}
                    tint="#ffffff"
                    tintOpacity={0}
                    blur={0}
                    textColor="#ffffff"
                    lineColor="#ffffff"
                    baseColor="#333333"
                    intensity={1.2}
                    shineSize={10}
                    shineFade={40}
                    thickness={1.5}
                    speed={0.35}
                    followMouse
                    proximity={250}
                    autoAnimate={false}
                    className="w-full text-left flex p-0"
                    onClick={() => {
                      if (project.id) {
                        navigate(`/embedded/${project.id}`);
                        window.scrollTo(0, 0);
                      } else if (project.repo) {
                        window.open(project.repo, "_blank");
                      }
                    }}
                  >
                    <div
                      className="group relative flex flex-col h-[380px] w-full rounded-[2rem] bg-[#060606] overflow-hidden cursor-pointer border border-white/5 transition-all duration-300 shadow-2xl"
                      role="button"
                    >
                      {/* IMAGE AREA (Background) */}
                      <div className="absolute inset-0 w-full h-full overflow-hidden">
                        {project.images && project.images.length > 0 ? (
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                            <span className="opacity-20 uppercase tracking-widest text-sm text-white">
                              No Image
                            </span>
                          </div>
                        )}
                        {/* Subtle dark gradient for top/middle readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                      </div>

                      {/* BOTTOM OVERLAY (Title + Desc + Github) */}
                      <div className="absolute bottom-0 left-0 right-0 bg-[#111111] rounded-t-3xl border-t border-white/5 flex flex-col z-20 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] h-[175px] group-hover:h-full p-6 pt-5">
                        {/* TITLE */}
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-wide mb-3 flex-shrink-0 line-clamp-2">
                          {project.title}
                        </h3>
                        
                        {/* DESCRIPTION */}
                        <div className="flex-1 overflow-hidden pr-12 relative">
                          <p className="text-[15px] text-neutral-400 leading-relaxed line-clamp-2 absolute top-0 left-0 right-0 transition-opacity duration-300 group-hover:opacity-0">
                            {project.desc}
                          </p>
                          <p className="text-[15px] text-neutral-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {project.overview || project.desc}
                          </p>
                        </div>
                        
                        {/* ICON */}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.repo) window.open(project.repo, "_blank");
                          }}
                          className="absolute bottom-7 right-7 text-neutral-500 hover:text-white transition-colors duration-300 z-30 cursor-pointer"
                        >
                          {project.repo ? <Github size={28} /> : <ArrowUpRight size={28} />}
                        </button>
                      </div>
                    </div>
                  </SpecularButton>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
      </div>
    </div>
  );
};

export default WorkPage;
