import { ExternalLink, Layout, ArrowUpRight, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Reveal from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";
import PROJECTS_DATA from "../../data/projects";

const Projects = ({ isSummary = false, theme }) => {
  const navigate = useNavigate();

  if (!isSummary) {
    return (
      <div className="pt-32 pb-20">
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <h1 className={`text-5xl font-bold mb-6 ${theme.text}`}>
                All Projects
              </h1>
              <p className={`text-xl mb-20 ${theme.textMuted} max-w-2xl`}>
                A curated list of projects I've worked on, ranging from complex
                web applications to experimental creative coding.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {PROJECTS_DATA.featured.map((project, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div
                    className={`group rounded-3xl overflow-hidden border ${theme.cardBorder} ${theme.cardBg}`}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="p-8">
                      <div className="flex gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${theme.cardBorder} ${theme.textMuted}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className={`text-2xl font-bold mb-3 ${theme.text}`}>
                        {project.title}
                      </h3>
                      <p className={`mb-6 ${theme.textMuted}`}>
                        {project.desc}
                      </p>
                      <MagneticButton
                        onClick={() => {
                          if (project.id) {
                            navigate(`/project/${project.id}`);
                          }
                        }}
                        className={`px-4 py-2 rounded-full border ${theme.cardBorder} ${theme.text} hover:${theme.accent} transition-colors flex items-center gap-2 text-sm font-bold`}
                      >
                        View Project <ArrowUpRight size={16} />
                      </MagneticButton>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <h2 className={`text-3xl font-bold mb-8 ${theme.text}`}>
                More Experiments
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6">
              {PROJECTS_DATA.noteworthy.map((project, idx) => (
                <Reveal key={idx} delay={idx * 50}>
                  <div
                    className={`p-6 rounded-2xl border ${theme.cardBorder} ${theme.cardBg} ${theme.accentBorderHover} transition-all h-full flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className={theme.accent}>
                          <Layout size={24} />
                        </div>
                        <ExternalLink
                          size={18}
                          className={`${theme.textMuted} hover:${theme.text}`}
                        />
                      </div>
                      <h4 className={`text-xl font-bold mb-2 ${theme.text}`}>
                        {project.title}
                      </h4>
                      <p className={`text-sm mb-4 ${theme.textMuted}`}>
                        {project.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs ${theme.textMuted} opacity-70`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-20">
            <div>
              <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${theme.accent}`}>
                Portfolio
              </h3>
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${theme.text}`}
              >
                Selected <span className={`${theme.accent} italic`}>Work</span>
              </h2>
              <p className={theme.textMuted}>
                A collection of projects that define my career.
              </p>
            </div>
            <MagneticButton
              onClick={() => navigate("/work")}
              className={`px-6 py-3 rounded-full ${theme.btnSecondary} font-bold transition-all hidden md:block`}
            >
              View All Projects
            </MagneticButton>
          </div>
        </Reveal>
        <div className="space-y-32 mb-32">
          {PROJECTS_DATA.featured.map((project, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div
                className={`group relative grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div
                  className={`relative aspect-[4/3] rounded-3xl overflow-hidden border ${
                    theme.cardBorder
                  } ${idx % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div
                  className={`${
                    idx % 2 === 1 ? "lg:order-1 lg:text-right" : ""
                  }`}
                >
                  <div
                    className={`flex gap-3 mb-6 ${
                      idx % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${theme.cardBorder} ${theme.textMuted}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3
                    className={`text-4xl md:text-5xl font-bold mb-6 ${theme.text} group-hover:${theme.accent} transition-colors`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-lg leading-relaxed mb-8 ${theme.textMuted}`}
                  >
                    {project.desc}
                  </p>
                  <div
                    className={`flex items-center gap-4 ${
                      idx % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    <MagneticButton
                      onClick={() => project.repo && window.open(project.repo, "_blank")}
                      className={`p-4 rounded-full ${theme.btnSecondary} transition-all`}
                    >
                      <Github size={20} />
                    </MagneticButton>
                    <MagneticButton
                      onClick={() => {
                        if (project.id) {
                          navigate(`/project/${project.id}`);
                          window.scrollTo(0, 0);
                        }
                      }}
                      className={`px-6 py-4 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all flex items-center gap-2`}
                    >
                      View Case Study <ArrowUpRight size={18} />
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
