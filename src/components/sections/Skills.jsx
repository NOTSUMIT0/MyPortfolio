import React, { useState, useEffect, useRef } from "react";
import { Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Reveal from "../ui/Reveal";
import SKILLS_DATA from "../../data/skills";
import MagneticButton from "../ui/MagneticButton";

const Skills = ({ isSummary = false, theme }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const tabsRef = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const categories = [
    "All",
    "Languages",
    "Frontend",
    "Backend",
    "Databases",
    "Design",
    "Concepts",
    "Tools",
  ];

  const filteredSkillsRaw =
    activeTab === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeTab);

  // Summary ignores category filtering
  const filteredSkills = isSummary ? SKILLS_DATA : filteredSkillsRaw;

  // Heavy duplication for seamless infinite scroll
  const loopItems = [
    ...filteredSkills,
    ...filteredSkills,
    ...filteredSkills,
    ...filteredSkills,
  ];

  useEffect(() => {
    if (!isSummary) {
      const idx = categories.indexOf(activeTab);
      const el = tabsRef.current[idx];
      if (el) {
        setIndicatorStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
        });
      }
    }
  }, [activeTab, isSummary]);

  return (
    <section className={`py-32 px-6 ${!isSummary ? "min-h-screen pt-40" : ""}`}>
      <div className="max-w-7xl mx-auto">
        {isSummary ? (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <Reveal>
              <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${theme.accent}`}>
                Expertise
              </h3>
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${theme.text}`}>
                Technical <span className={`${theme.accent} italic`}>Arsenal</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <MagneticButton
                onClick={() => navigate("/skills")}
                className={`px-6 py-3 rounded-full ${theme.btnSecondary} font-bold transition-all text-sm`}
              >
                See all skills
              </MagneticButton>
            </Reveal>
          </div>
        ) : (
          <Reveal>
            <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${theme.accent}`}>
              Technical Proficiency
            </h3>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-12 ${theme.text}`}>
              Technical <span className={`${theme.accent} italic`}>Arsenal</span>
            </h2>
          </Reveal>
        )}

        {/* CATEGORY BAR (HIDDEN IN SUMMARY MODE) */}
        {!isSummary && (
          <Reveal delay={200}>
            <div
              className={`relative inline-flex flex-wrap gap-2 mb-12 p-1.5 rounded-full border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-sm`}
            >
              <div
                className={`absolute top-1.5 bottom-1.5 rounded-full ${theme.accentBg} shadow-sm transition-all duration-300 ease-out`}
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
              />
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  onClick={() => setActiveTab(cat)}
                  className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeTab === cat
                      ? "text-white"
                      : `${theme.textMuted} hover:${theme.text}`
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* ================= SUMMARY MODE ================= */}
        {isSummary ? (
          <Reveal delay={200}>
            {/* Break out of max-w container to be full viewport width */}
            <div className="relative overflow-hidden py-4 w-screen left-1/2 -translate-x-1/2">
              <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] space-y-4 px-4">
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      @keyframes scroll-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                      }
                      @keyframes scroll-right {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                      }
                    `,
                  }}
                />

                {[0, 1, 2].map((lane) => {
                  const reverse = lane % 2 === 1;
                  return (
                    <div
                      key={lane}
                      className="flex gap-4 w-max hover:[animation-play-state:paused]"
                      style={{
                        animation: `${
                          reverse ? "scroll-right" : "scroll-left"
                        } 600s linear infinite`,
                      }}
                    >
                      {loopItems.map((skill, idx) => (
                        <div
                          key={`${lane}-${skill.name}-${idx}`}
                          className={`flex-shrink-0 group px-5 py-2.5 rounded-full border ${theme.cardBorder} ${theme.cardBg} hover:border-orange-500/40 transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-1 cursor-default`}
                          title={skill.name}
                        >
                          <div
                            className={`w-4 h-4 flex items-center justify-center ${theme.textMuted} group-hover:text-orange-500 transition-colors [&>svg]:w-full [&>svg]:h-full`}
                          >
                            {skill.icon}
                          </div>

                          <span
                            className={`text-sm font-bold ${theme.textMuted} group-hover:${theme.text} transition-colors whitespace-nowrap`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ) : (
          /* ================= TILE MODE ================= */
          <>
            {/* Core Expertise Header */}
            <Reveal delay={100}>
              <div className="flex items-baseline gap-3 mb-8">
                <h3 className={`text-2xl font-bold italic ${theme.text}`}>
                  Core Expertise
                </h3>
                <span className={`text-sm italic ${theme.textMuted}`}>
                  Primary Focus & Systems Mastery
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
              {filteredSkills.map((skill, idx) => (
                <Reveal key={skill.name + activeTab} delay={idx * 30} className="h-full">
                  <div
                    className={`group p-5 sm:p-6 rounded-2xl border ${theme.cardBorder} ${theme.cardBg} hover:border-orange-500/40 transition-all duration-300 flex flex-col items-center justify-between text-center cursor-default h-full min-h-[160px]`}
                  >
                    <div
                      className={`p-3 rounded-full ${theme.textMuted} group-hover:text-orange-500 transition-colors duration-300 [&>svg]:w-7 [&>svg]:h-7`}
                    >
                      {React.cloneElement(skill.icon, { size: 28 })}
                    </div>
                    
                    <div className="flex flex-col items-center justify-end w-full flex-grow mt-2">
                      <div className="relative h-10 flex items-center justify-center w-full mb-1">
                        {/* Base Text */}
                        <span
                          className={`font-bold ${theme.text} ${skill.name.length > 14 ? 'text-xs' : 'text-sm'} leading-tight line-clamp-2 w-full px-1`}
                        >
                          {skill.name}
                        </span>
                        
                        {/* Hover Tooltip (Glassmorphism) */}
                        <span
                          className={`absolute top-1/2 -translate-y-1/2 font-bold text-white bg-neutral-900/95 backdrop-blur-md text-xs px-3 py-2 rounded-xl shadow-2xl z-20 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 scale-95 group-hover:scale-100 w-max max-w-[180%]`}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-[0.15em] ${theme.accent}`}
                      >
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Continuous Learning Header */}
            <Reveal delay={100}>
              <div className="flex items-baseline gap-3 mb-8">
                <h3 className={`text-2xl font-bold italic ${theme.text}`}>
                  Continuous Learning
                </h3>
                <span className={`text-sm italic ${theme.textMuted}`}>
                  Actively Developing & Future Systems
                </span>
              </div>
            </Reveal>

          </>
        )}
      </div>
    </section>
  );
};

export default Skills;
