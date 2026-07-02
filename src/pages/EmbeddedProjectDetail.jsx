import { useState, useEffect } from "react";
import {
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  Cpu,
  Zap,
  Wrench,
  BookOpen,
  Play,
  Image as ImageIcon,
  ArrowRight,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";
import EMBEDDED_PROJECTS from "../data/embeddedProjects";

/* Keyed lookup */
const EMBEDDED_LOOKUP = Object.fromEntries(
  EMBEDDED_PROJECTS.map((p) => [p.id, p])
);

/* ── Component-type icon mapping ── */
const typeIcon = (type) => {
  switch (type) {
    case "Microcontroller":
      return <Cpu size={16} />;
    case "Sensor":
      return <Zap size={16} />;
    case "Actuator":
      return <Wrench size={16} />;
    case "Driver":
      return <Cpu size={16} />;
    case "Power":
      return <Zap size={16} />;
    case "Laser Emit":
      return <Zap size={16} />;
    default:
      return <Wrench size={16} />;
  }
};

const EmbeddedProjectDetail = ({ theme, isDarkMode }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = EMBEDDED_LOOKUP[projectId];
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close lightbox on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Notify NavBar when gallery opens/closes
  useEffect(() => {
    const event = new CustomEvent("galleryStateChange", {
      detail: { isOpen: !!selectedImage },
    });
    window.dispatchEvent(event);
  }, [selectedImage]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className={`text-4xl font-bold mb-6 ${theme.text}`}>
          Project Not Found
        </h1>
        <MagneticButton
          onClick={() => navigate("/work")}
          className={`px-6 py-3 rounded-full ${theme.btnSecondary} font-bold`}
        >
          Back to Projects
        </MagneticButton>
      </div>
    );
  }

  const hasGallery = project.gallery && project.gallery.length > 0;
  const hasImages = project.images && project.images.length > 0;
  const hasVideo = !!project.video;

  return (
    <div className="pb-24">
      {/* ===== HERO ===== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        {hasImages && (
          <div
            className="absolute inset-0 opacity-30 scale-105 blur-[3px]"
            style={{
              backgroundImage: `url(${project.images[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950"
              : "bg-gradient-to-b from-white/60 via-white/80 to-[#FDFBF7]"
          }`}
        />
        {/* Animated circuit-like dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: isDarkMode
                  ? `rgba(74,222,128,${Math.random() * 0.3 + 0.05})`
                  : `rgba(22,163,106,${Math.random() * 0.2 + 0.05})`,
                animation: `pulse ${Math.random() * 4 + 2}s ease-in-out ${Math.random() * 3}s infinite`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
              <Cpu size={14} className="text-green-400" />
              <span
                className="text-xs font-bold uppercase tracking-[0.15em]"
                style={{ color: isDarkMode ? "#4ADE80" : "#16A34A" }}
              >
                Embedded / Hardware Project · {project.year}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className={`text-5xl md:text-7xl lg:text-[90px] font-extrabold tracking-tight leading-none mb-6 ${theme.text}`}
            >
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p
              className={`text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${theme.textMuted}`}
            >
              {project.desc}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col items-center gap-4">
              {project.repo && (
                <MagneticButton
                  onClick={() => window.open(project.repo, "_blank")}
                  className={`inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border ${isDarkMode ? "border-white/20 text-white hover:bg-white/10" : "border-black/20 text-black hover:bg-black/5"} transition-all`}
                >
                  GitHub Repository <Github size={20} />
                </MagneticButton>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        {/* ===== TECH DASHBOARD ===== */}
        <Reveal>
          <div
            className={`-mt-20 relative z-20 grid grid-cols-1 sm:grid-cols-3 gap-8 p-10 rounded-3xl border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-xl`}
          >
            <div>
              <p
                className={`text-[11px] font-bold uppercase tracking-[0.1em] mb-3 ${theme.textMuted}`}
              >
                Project Type
              </p>
              <p className={`text-xl font-bold ${theme.text}`}>
                Hardware / Embedded
              </p>
            </div>
            <div>
              <p
                className={`text-[11px] font-bold uppercase tracking-[0.1em] mb-3 ${theme.textMuted}`}
              >
                Components Used
              </p>
              <p className={`text-xl font-bold ${theme.text}`}>
                {project.components.length} Parts
              </p>
            </div>
            <div>
              <p
                className={`text-[11px] font-bold uppercase tracking-[0.1em] mb-3 ${theme.textMuted}`}
              >
                Tags
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-medium px-3 py-1 rounded-full border ${theme.cardBorder} ${theme.accent}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===== VIDEO SECTION ===== */}
        <section className="mt-24">
          <Reveal>
            <h2 className={`text-3xl font-bold mb-2 ${theme.text}`}>
              Project <span className={theme.accent}>Demo</span>
            </h2>
            <p className={`${theme.textMuted} mb-8`}>
              Watch the hardware project in action
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div
              className={`rounded-3xl border ${theme.cardBorder} ${theme.cardBg} overflow-hidden`}
            >
              {hasVideo ? (
                <div className="flex justify-center bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-2xl">
                  <video
                    src={project.video}
                    controls
                    className="max-h-[75vh] w-auto max-w-full rounded-xl shadow-2xl"
                    poster={hasImages ? project.images[0] : undefined}
                  />
                </div>
              ) : (
                <div
                  className="aspect-video flex flex-col items-center justify-center gap-4"
                  style={{
                    background: isDarkMode
                      ? "linear-gradient(135deg, rgba(74,222,128,0.05) 0%, rgba(0,0,0,0.3) 100%)"
                      : "linear-gradient(135deg, rgba(22,163,106,0.05) 0%, rgba(255,255,255,0.3) 100%)",
                  }}
                >
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center border-2 ${isDarkMode ? "border-green-500/30 bg-green-500/10" : "border-green-600/30 bg-green-600/10"}`}
                  >
                    <Play
                      size={32}
                      className={isDarkMode ? "text-green-400" : "text-green-600"}
                    />
                  </div>
                  <p
                    className={`text-sm font-medium ${theme.textMuted}`}
                  >
                    Demo video will be added here
                  </p>
                  <p
                    className={`text-xs ${theme.textMuted} opacity-60`}
                  >
                    Supported formats: MP4, WebM
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </section>

        {/* ===== PROJECT IMAGES / GALLERY ===== */}
        <section className="mt-24">
          <Reveal>
            <h2 className={`text-3xl font-bold mb-2 ${theme.text}`}>
              Build <span className={theme.accent}>Gallery</span>
            </h2>
            <p className={`${theme.textMuted} mb-8`}>
              Photos of the hardware build, circuit diagrams, and final assembly
            </p>
          </Reveal>
          <Reveal delay={100}>
            {hasImages || hasGallery ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(hasGallery ? project.gallery : project.images).map(
                  (img, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl overflow-hidden border ${theme.cardBorder} ${theme.cardBg} cursor-zoom-in group`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={img}
                          alt={`Build photo ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-4`}
              >
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`aspect-video rounded-2xl border ${theme.cardBorder} flex flex-col items-center justify-center gap-3`}
                    style={{
                      background: isDarkMode
                        ? "rgba(255,255,255,0.02)"
                        : "rgba(0,0,0,0.02)",
                    }}
                  >
                    <ImageIcon
                      size={32}
                      className={`${theme.textMuted} opacity-20`}
                    />
                    <p
                      className={`text-xs ${theme.textMuted} opacity-40`}
                    >
                      Build photo {i}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </section>

        {/* ===== OVERVIEW & CHALLENGE ===== */}
        <section className="mt-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <h2 className={`text-4xl font-bold mb-6 ${theme.text}`}>
                  <span className={theme.accent}>Synopsis</span>
                </h2>
                <p
                  className={`text-lg leading-relaxed mb-8 ${theme.textMuted}`}
                >
                  {project.overview}
                </p>

                {project.challenge && (
                  <div className="mb-6">
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.1em] mb-2 ${theme.accent}`}
                    >
                      The Challenge
                    </p>
                    <p className={`leading-relaxed ${theme.textMuted}`}>
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div>
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.1em] mb-2 ${theme.accent}`}
                    >
                      The Solution
                    </p>
                    <p className={`leading-relaxed ${theme.textMuted}`}>
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Circuit / Schematic placeholder */}
            <Reveal delay={200}>
              <div
                className={`p-3 rounded-3xl border ${theme.cardBorder} ${theme.cardBg} shadow-2xl`}
              >
                {hasImages ? (
                  <div 
                    className="rounded-2xl overflow-hidden aspect-video bg-black cursor-zoom-in group"
                    onClick={() => setSelectedImage(project.images[0])}
                  >
                    <img
                      src={project.images[0]}
                      alt="Project overview"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div
                    className="rounded-2xl aspect-video flex flex-col items-center justify-center gap-3"
                    style={{
                      background: isDarkMode
                        ? "linear-gradient(135deg, rgba(74,222,128,0.05) 0%, rgba(0,0,0,0.2) 100%)"
                        : "linear-gradient(135deg, rgba(22,163,106,0.05) 0%, rgba(255,255,255,0.2) 100%)",
                    }}
                  >
                    <Cpu
                      size={40}
                      className={`${theme.textMuted} opacity-20`}
                    />
                    <p
                      className={`text-xs ${theme.textMuted} opacity-40`}
                    >
                      Circuit diagram / schematic
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== COMPONENTS USED ===== */}
        <Reveal>
          <section className="mt-24">
            <div
              className={`p-12 rounded-3xl border ${theme.cardBorder} ${theme.cardBg}`}
            >
              <h2 className={`text-3xl font-bold mb-3 ${theme.text}`}>
                Hardware{" "}
                <span className={theme.accent}>Components</span>
              </h2>
              <p className={`${theme.textMuted} mb-10`}>
                Parts and modules used to build this project
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.components.map((comp, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-5 rounded-2xl border ${theme.cardBorder} ${isDarkMode ? "bg-white/[0.02]" : "bg-black/[0.02]"} hover:scale-[1.02] transition-transform`}
                  >
                    <div
                      className={`p-2.5 rounded-xl ${isDarkMode ? "bg-green-500/10" : "bg-green-600/10"}`}
                    >
                      <span
                        className={
                          isDarkMode ? "text-green-400" : "text-green-600"
                        }
                      >
                        {typeIcon(comp.type)}
                      </span>
                    </div>
                    <div>
                      <p className={`font-bold text-sm ${theme.text}`}>
                        {comp.name}
                      </p>
                      <p
                        className={`text-xs ${theme.textMuted}`}
                      >
                        {comp.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ===== WHAT I LEARNED ===== */}
        <Reveal>
          <section className="mt-24">
            <div
              className={`p-12 rounded-3xl border ${theme.cardBorder} ${theme.cardBg}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <BookOpen size={24} className={theme.accent} />
                <h2 className={`text-3xl font-bold ${theme.text}`}>
                  What I{" "}
                  <span className={theme.accent}>Learned</span>
                </h2>
              </div>
              <p className={`${theme.textMuted} mb-10`}>
                Key takeaways and skills gained from this hardware build
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {project.learnings.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-4 items-start p-5 rounded-2xl border ${theme.cardBorder} ${isDarkMode ? "bg-white/[0.02]" : "bg-black/[0.02]"}`}
                  >
                    <span className={`font-extrabold ${theme.accent}`}>
                      0{idx + 1}
                    </span>
                    <p className={`font-medium ${theme.text}`}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ===== FEATURES & OUTCOMES ===== */}
        <div className="grid md:grid-cols-2 gap-8 mt-24">
          <Reveal>
            <div
              className={`p-10 rounded-3xl border ${theme.cardBorder} ${isDarkMode ? "bg-white/[0.01]" : "bg-black/[0.01]"} h-full`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>
                Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((f, idx) => (
                  <li
                    key={idx}
                    className={`${theme.textMuted} flex items-start gap-2`}
                  >
                    <span className={`${theme.accent} mt-0.5`}>•</span>{" "}
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              className={`p-10 rounded-3xl ${theme.accentBg} text-white h-full`}
            >
              <h3 className="text-2xl font-bold mb-6">Impact</h3>
              <ul className="space-y-4">
                {project.outcomes.map((o, idx) => (
                  <li key={idx} className="font-semibold text-base">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* ===== NAVIGATION ===== */}
        <div className="mt-32 text-center">
          <p
            className={`text-sm uppercase tracking-[0.1em] mb-6 ${theme.textMuted}`}
          >
            Ready to explore further?
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <MagneticButton
              onClick={() => navigate("/work")}
              className={`px-7 py-3 rounded-full border ${theme.cardBorder} ${theme.btnSecondary} font-semibold text-sm`}
            >
              Back to Work
            </MagneticButton>

            {project.nextProject && (
              <MagneticButton
                onClick={() => {
                  navigate(`/embedded/${project.nextProject}`);
                  window.scrollTo(0, 0);
                }}
                className={`px-7 py-3 rounded-full ${theme.accentBg} text-white font-semibold text-sm hover:opacity-90 transition-opacity`}
              >
                Next Hardware Project →
              </MagneticButton>
            )}
          </div>
        </div>
      </div>

      {/* ===== LIGHTBOX MODAL ===== */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-10 cursor-zoom-out"
          style={{
            backgroundColor: "rgba(12, 10, 9, 0.95)",
            backdropFilter: "blur(24px)",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors z-[10000]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>

          <img
            src={selectedImage}
            alt="Expanded"
            className="max-w-full max-h-full rounded-3xl shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default EmbeddedProjectDetail;
