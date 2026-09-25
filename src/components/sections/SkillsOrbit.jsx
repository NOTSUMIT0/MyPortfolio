import React from 'react';
import Reveal from '../ui/Reveal';
import OrbitImages from '../ui/OrbitImages';

const skillsLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
];

const SkillsOrbit = ({ theme }) => {
  return (
    <section className="w-full pt-20 overflow-hidden relative">
      <div className="max-w-[120rem] mx-auto px-6 sm:px-10 lg:px-24">
        
        {/* Heading Section matching reference image */}
        <Reveal>
          <div className="flex flex-col items-center justify-center text-center mb-8 z-10 relative">
            <span className="text-neutral-500 uppercase tracking-[0.2em] text-xs font-bold mb-4">
              NOW BUILDING
            </span>
            <h2 
              className="text-white font-black tracking-tighter text-[4rem] md:text-[6rem] leading-none mb-6"
              style={{
                fontFamily: "'League Gothic', 'Bebas Neue', Impact, sans-serif",
                textTransform: "uppercase",
                transform: "scaleY(1.1)",
              }}
            >
              My Skills
            </h2>
            <p 
              className="text-neutral-300 text-xl md:text-2xl max-w-3xl leading-relaxed"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              A robust foundation in modern programming languages and web technologies, navigating an era where everything is changing. Frameworks, rituals, and real stories for growing your technical expertise.
            </p>
          </div>
        </Reveal>

        {/* Orbit Images Component */}
        <Reveal delay={200}>
          <div className="w-full flex justify-center items-center overflow-visible relative">
            <OrbitImages
              images={skillsLogos}
              shape="ellipse"
              radiusX={400}
              radiusY={120}
              rotation={-10}
              duration={30}
              itemSize={60}
              responsive={true}
              containerAspectRatio="1400 / 400"
              showPath={true}
              pathColor="rgba(255,255,255,0.05)"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default SkillsOrbit;
