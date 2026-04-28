import { useState, useEffect } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight, Github } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";
import { PROJECT_DETAILS } from "../data/projects";

const ProjectDetail = ({ theme, isDarkMode }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = PROJECT_DETAILS[projectId];
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

  return (
    <div className="pb-24">
      {/* ===== HERO ===== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-40 scale-105"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 ${isDarkMode ? "bg-gradient-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950" : "bg-gradient-to-b from-white/60 via-white/80 to-[#FDFBF7]"}`}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <Reveal>
            <p
              className={`text-sm font-bold uppercase tracking-[0.2em] mb-4 ${theme.accent}`}
            >
              Project Overview · {project.year}
            </p>
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
              {project.brief}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col items-center gap-4">
              {project.demoUrl && (
                <MagneticButton
                  onClick={() => window.open(project.demoUrl, "_blank")}
                  className={`inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full text-white font-bold text-lg ${theme.accentBg} ${theme.accentHover} shadow-2xl ${theme.accentShadow} transition-all`}
                >
                  {project.demoText || "Live Demo"} <ExternalLink size={20} />
                </MagneticButton>
              )}
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
            <div className="sm:col-span-2">
              <p
                className={`text-[11px] font-bold uppercase tracking-[0.1em] mb-3 ${theme.textMuted}`}
              >
                Role
              </p>
              <p className={`text-xl font-bold ${theme.text}`}>
                {project.role}
              </p>
            </div>
            <div>
              <p
                className={`text-[11px] font-bold uppercase tracking-[0.1em] mb-3 ${theme.textMuted}`}
              >
                Technology Stack
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tools.map((t, idx) => (
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

        {/* ===== OVERVIEW ===== */}
        <section className="mt-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <h2
                  className={`text-4xl font-bold mb-6 ${theme.text}`}
                >
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

            {/* Gallery Preview */}
            <Reveal delay={200}>
              <div
                className={`p-3 rounded-3xl border ${theme.cardBorder} ${theme.cardBg} shadow-2xl`}
              >
                <div
                  className="rounded-2xl overflow-hidden aspect-video bg-black cursor-zoom-in"
                  onClick={() =>
                    setSelectedImage(project.gallery[activeImageIndex])
                  }
                >
                  <img
                    src={project.gallery[activeImageIndex]}
                    alt="Project Screenshot"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Thumbnail strip */}
                {project.gallery.length > 1 && (
                  <div className="flex gap-2.5 mt-3 px-1 pb-2 overflow-x-auto gallery-scrollbar">
                    {project.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`flex-shrink-0 w-[70px] h-[45px] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                          activeImageIndex === idx
                            ? "ring-2 ring-orange-500 opacity-100"
                            : "opacity-50 hover:opacity-80"
                        }`}
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="px-2 pt-4 pb-2 flex justify-between items-center">
                  <div>
                    <p
                      className={`text-xs font-semibold ${theme.text} mb-0.5`}
                    >
                      Media Gallery
                    </p>
                    <p className={`text-[11px] ${theme.textMuted}`}>
                      {project.gallery.length} Screenshots
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== CONTRIBUTIONS ===== */}
        <Reveal>
          <section className="mt-24">
            <div
              className={`p-12 rounded-3xl border ${theme.cardBorder} ${theme.cardBg}`}
            >
              <h2 className={`text-3xl font-bold mb-10 ${theme.text}`}>
                Key{" "}
                <span className={theme.accent}>Contributions</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.contributions.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-4 items-start p-5 rounded-2xl border ${theme.cardBorder} ${isDarkMode ? "bg-white/[0.02]" : "bg-black/[0.02]"}`}
                  >
                    <span className={`font-extrabold ${theme.accent}`}>
                      0{idx + 1}
                    </span>
                    <p className={`font-medium ${theme.text}`}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* ===== TECHNICAL DEEP DIVES ===== */}
        <div className="mt-24 space-y-24">
          {project.details.map((section, sIdx) => (
            <Reveal key={sIdx}>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className={`text-3xl font-bold mb-6 ${theme.text}`}>
                    {section.title}
                  </h2>
                  <p
                    className={`text-lg leading-relaxed mb-8 ${theme.textMuted}`}
                  >
                    {section.content}
                  </p>
                  <div className="space-y-3">
                    {section.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${theme.accentBg} flex-shrink-0`}
                        />
                        <p className={`font-medium ${theme.text}`}>{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`aspect-video rounded-3xl border ${theme.cardBorder} ${isDarkMode ? "bg-white/[0.02]" : "bg-black/[0.02]"} flex items-center justify-center overflow-hidden`}
                  onClick={() =>
                    section.image && setSelectedImage(section.image)
                  }
                  style={{
                    cursor: section.image ? "zoom-in" : "default",
                  }}
                >
                  {section.image ? (
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <p
                      className={`text-xs uppercase tracking-[0.2em] opacity-20 ${theme.textMuted}`}
                    >
                      Visual Documentation
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

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
                    <span className={`${theme.accent} mt-0.5`}>•</span> {f}
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

        {/* ===== TEAM ===== */}
        <Reveal>
          <section
            className={`mt-24 pt-12 border-t ${theme.cardBorder}`}
          >
            <h2 className={`text-2xl font-bold mb-8 ${theme.text}`}>
              Collaborators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {project.team.map((member, idx) => (
                <div key={idx}>
                  <p className={`font-bold mb-1 ${theme.text}`}>
                    {member.name}
                  </p>
                  <p className={`text-sm ${theme.textMuted}`}>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

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
                  navigate(`/project/${project.nextProject}`);
                  window.scrollTo(0, 0);
                }}
                className={`px-7 py-3 rounded-full ${theme.accentBg} text-white font-semibold text-sm hover:opacity-90 transition-opacity`}
              >
                Next Case Study →
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
          {/* Close */}
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

          {/* Nav buttons */}
          {project.gallery.length > 1 && (
            <>
              <button
                className="absolute left-10 p-5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-[10001]"
                onClick={(e) => {
                  e.stopPropagation();
                  const cur = project.gallery.indexOf(selectedImage);
                  const prev =
                    (cur - 1 + project.gallery.length) %
                    project.gallery.length;
                  setSelectedImage(project.gallery[prev]);
                }}
              >
                <ChevronLeft size={32} />
              </button>
              <button
                className="absolute right-10 p-5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-[10001]"
                onClick={(e) => {
                  e.stopPropagation();
                  const cur = project.gallery.indexOf(selectedImage);
                  const next = (cur + 1) % project.gallery.length;
                  setSelectedImage(project.gallery[next]);
                }}
              >
                <ChevronRight size={32} />
              </button>

              {/* Counter */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono tracking-[3px] z-[10001] pointer-events-none">
                {String(project.gallery.indexOf(selectedImage) + 1).padStart(
                  2,
                  "0",
                )}{" "}
                / {String(project.gallery.length).padStart(2, "0")}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
