import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ALL_PROJECTS } from "../../data/projects";

const FEATURED_PROJECTS = ALL_PROJECTS.filter((p) => p.category === "featured");

/* ── Individual Project Card ── */
const ProjectCard = ({ project, index, totalCards }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isReversed = index % 2 !== 0;
  const stickyTop = 96 + index * 20; // Increased spacing for stacking

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate(`/project/${project.id}`);
      window.scrollTo(0, 0);
    }, 400); // Wait for animation
  };

  return (
    <div
      className={`sticky w-full cursor-pointer group transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isClicked ? "scale-[0.95] opacity-50" : "scale-100 opacity-100"
      }`}
      style={{
        top: `${stickyTop}px`,
        zIndex: 10 + index,
        marginBottom: index < totalCards - 1 ? "4rem" : "0", // More margin for scrolling
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer wrapper for the simple white outline glow on hover */}
      <div
        className="rounded-[24px] transition-all duration-300"
        style={{
          background: "#0c0c0d", // Match Harrison's very dark card body
          border: isHovered
            ? "1px solid rgba(255,255,255,0.25)" // Small white line on hover
            : "1px solid rgba(255,255,255,0.03)", // Almost invisible normally
          boxShadow: isHovered
            ? "0 10px 40px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.05)"
            : "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="w-full rounded-[23px] overflow-hidden relative"
          style={{
            minHeight: "420px",
            // Subtly faded from the bottom
            background: "linear-gradient(180deg, #0c0c0d 0%, #050505 100%)",
          }}
        >
          <div
            className={`flex flex-col ${
              isReversed ? "md:flex-row-reverse" : "md:flex-row"
            } items-stretch h-full`}
            style={{ minHeight: "420px" }}
          >
            {/* ── Text Column ── */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <h3
                className="uppercase select-text transition-colors duration-300"
                style={{
                  fontFamily: "'League Gothic', 'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  lineHeight: 0.95,
                  letterSpacing: "0.01em",
                  fontWeight: 400,
                  marginBottom: "1.5rem",
                  color: isHovered ? "#FFFFFF" : "#E8C4CC", // Pinkish normally, brightens on hover
                }}
              >
                {project.title}
              </h3>

              <p
                className="select-text"
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.5,
                  maxWidth: "480px",
                }}
              >
                {project.desc}
              </p>
            </div>

            {/* ── Image Column ── */}
            <div className="flex-1 flex items-center justify-center p-6 md:p-10 relative">
              <div
                className="w-full h-full rounded-2xl overflow-hidden"
                style={{
                  background: "#111114",
                  minHeight: "280px",
                  maxHeight: "420px",
                }}
              >
                {/* Static image - no zoom */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top rounded-2xl transition-opacity duration-300"
                  style={{ 
                    minHeight: "280px",
                    opacity: isHovered ? 1 : 0.85
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Main Section ── */
const SelectedWork = () => {
  return (
    <section
      className="relative w-full"
      style={{
        background: "#0A0A0A",
        padding: "6rem 1.5rem 8rem",
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* ── "Select Work" Heading ── */}
        <div className="text-center mb-6">
          <h2
            className="select-text"
            style={{
              fontFamily: "'League Gothic', 'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              color: "#FFFFFF",
              lineHeight: 1,
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Select Work
          </h2>
        </div>

        {/* ── Subtitle ── */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p
            className="select-text"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.6,
            }}
          >
            A few case studies in engineering and the products I've built.
            The problems, the solutions, and what shipped.
          </p>
        </div>

        {/* ── Stacking Project Cards ── */}
        <div className="flex flex-col">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={FEATURED_PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
