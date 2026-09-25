import React, { useState, useEffect, useRef } from "react";

import Reveal from "../ui/Reveal";
import SKILLS_DATA from "../../data/skills";

const Skills = ({ theme }) => {
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

  const filteredSkills =
    activeTab === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeTab);

  useEffect(() => {
    const idx = categories.indexOf(activeTab);
    const el = tabsRef.current[idx];
    if (el) {
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <section className="py-32 px-6 min-h-screen pt-40">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${theme.textMuted}`}>
            Technical Proficiency
          </h3>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-12 ${theme.text}`}>
            Technical <span className="italic font-light">Arsenal</span>
          </h2>
        </Reveal>

        {/* CATEGORY BAR */}
        <Reveal delay={200}>
          <div
            className={`relative inline-flex flex-wrap gap-2 mb-12 p-1.5 rounded-full border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-sm`}
          >
            <div
              className="absolute top-1.5 bottom-1.5 rounded-full bg-white/20 shadow-sm transition-all duration-300 ease-out"
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
                className={`group p-5 sm:p-6 rounded-2xl border ${theme.cardBorder} ${theme.cardBg} hover:border-white/30 transition-all duration-300 flex flex-col items-center justify-between text-center cursor-default h-full min-h-[160px]`}
              >
                <div
                  className={`p-3 rounded-full ${theme.textMuted} group-hover:text-white transition-colors duration-300 [&>svg]:w-7 [&>svg]:h-7`}
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
                    className={`text-[10px] font-bold uppercase tracking-[0.15em] ${theme.textMuted}`}
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
      </div>
    </section>
  );
};

export default Skills;
