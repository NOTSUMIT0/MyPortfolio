import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

/* ──────────────────────────────────────────────
   Doodle Ellipse (Rough hand-drawn double loop circle)
   ────────────────────────────────────────────── */
const DoodleEllipse = ({ children, className = "", isDarkMode }) => {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        className="absolute pointer-events-none"
        viewBox="0 0 420 100"
        fill="none"
        style={{
          width: "110%",
          height: "135%",
          left: "-5%",
          top: "-17%",
        }}
        preserveAspectRatio="none"
      >
        {/* Single sketchy, slightly-broken loop — lighter weight */}
        <path
          d="M 18,48 C 18,27 155,19 212,19 C 285,19 402,27 402,48 C 402,69 285,79 212,79 C 145,79 18,71 22,52"
          stroke={isDarkMode ? "#FAF9F5" : "#1A1A1A"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="1200"
          strokeDashoffset={drawn ? 0 : 1200}
          style={{
            opacity: 0.55,
            transition: "stroke-dashoffset 2.2s cubic-bezier(0.25, 1, 0.5, 1)",
            transitionDelay: "100ms",
          }}
        />
      </svg>
      {children}
    </span>
  );
};

/* ──────────────────────────────────────────────
   Floating particles for ambient background depth
   ────────────────────────────────────────────── */
const FloatingParticles = () => {
  const particles = React.useMemo(() => {
    const p = [];
    for (let i = 0; i < 20; i++) {
      p.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.2 + 0.8,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.25 + 0.05,
      });
    }
    return p;
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(255,255,255,${p.opacity})`,
            animation: `hero-particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </>
  );
};

/* ──────────────────────────────────────────────
   Hero Section — Centered Stacked Typography
   ────────────────────────────────────────────── */
const Hero = ({ theme, isDarkMode }) => {
  const navigate = useNavigate();

  const colors = {
    yellow: isDarkMode ? "#FACC15" : "#CA8A04",
    green: isDarkMode ? "#4ADE80" : "#16A34A",
    blue: isDarkMode ? "#60A5FA" : "#2563EB",
    purple: isDarkMode ? "#A78BFA" : "#7C3AED",
    white: isDarkMode ? "#F5F5F5" : "#1A1A1A",
    cream: isDarkMode ? "#FAF9F5" : "#2D2D2D",
    muted: isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.45)",
    mutedText: isDarkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
  };

  const commonTitleSize = "clamp(2.2rem, 6.2vw, 5rem)";

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative py-20 overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes hero-particle-float {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
            25% { transform: translateY(-15px) translateX(8px); opacity: 0.3; }
            50% { transform: translateY(-8px) translateX(-5px); opacity: 0.15; }
            75% { transform: translateY(-20px) translateX(3px); opacity: 0.25; }
          }
          @keyframes hero-glow-pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.05); }
          }
          @keyframes hero-badge-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); }
            50% { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
          }
          @keyframes local-cursor-movement {
            0% { transform: translate(0px, 0px) rotate(-1deg); }
            25% { transform: translate(45px, -25px) rotate(5deg); }
            50% { transform: translate(65px, 15px) rotate(-3deg); }
            75% { transform: translate(25px, 35px) rotate(2deg); }
            100% { transform: translate(0px, 0px) rotate(-1deg); }
          }
        `,
        }}
      />

      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute"
          style={{
            width: "600px",
            height: "600px",
            top: "-10%",
            left: "10%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "hero-glow-pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "500px",
            height: "500px",
            bottom: "0%",
            right: "5%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "hero-glow-pulse 10s ease-in-out 2s infinite",
          }}
        />
        <FloatingParticles />
      </div>

      {/* Main container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center flex flex-col items-center justify-center">

        {/* ── "Hello, I'm Sumit Kumar" pill ── */}
        <Reveal>
          <div className="flex justify-center mb-1">
            <div
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border shadow-md hover:scale-102 transition-transform duration-300"
              style={{
                borderColor: isDarkMode
                  ? "rgba(255,255,255,0.22)"
                  : "rgba(0,0,0,0.16)",
                background: isDarkMode
                  ? "rgba(255,255,255,0.07)"
                  : "rgba(0,0,0,0.05)",
              }}
            >
              <span
                className="text-lg font-bold tracking-wide"
                style={{ color: colors.cream }}
              >
                Hello, I'm Sumit Kumar
              </span>
            </div>
          </div>
        </Reveal>

        {/* ── Centered typography block ── */}
        <div className="relative max-w-4xl w-full mx-auto flex flex-col items-center justify-center" style={{ lineHeight: 0.82 }}>

          {/* Line 1: FULLSTACK — centered */}
          <Reveal delay={100} className="w-full">
            <div className="flex justify-center w-full">
              <h1
                className="font-bold tracking-normal select-none"
                style={{
                  fontSize: "clamp(3.5rem, 9.5vw, 8.8rem)",
                  color: colors.yellow,
                  lineHeight: 0.85,
                  marginBottom: "-0.05em",
                }}
              >
                FULLSTACK
              </h1>
            </div>
          </Reveal>

          {/* Line 2: DEVELOPER — centered */}
          <Reveal delay={200} className="w-full">
            <div className="flex justify-center w-full">
              <h1
                className="font-bold tracking-normal select-none"
                style={{
                  fontSize: "clamp(3.5rem, 9.5vw, 8.8rem)",
                  color: colors.white,
                  lineHeight: 0.85,
                  marginBottom: "-0.05em",
                  textShadow: isDarkMode
                    ? "0 0 60px rgba(255,255,255,0.03)"
                    : "none",
                }}
              >
                DEVELOPER
              </h1>
            </div>
          </Reveal>

          {/* Line 3: EMBEDDED SYSTEMS + Let's Connect — centered as one tight group */}
          <Reveal delay={350} className="w-full">
            <div
              className="relative flex items-center justify-center flex-wrap md:flex-nowrap gap-4 md:gap-6 w-full"
              style={{
                margin: "0.08em 0",
              }}
            >
              <DoodleEllipse isDarkMode={isDarkMode}>
                <span
                  className="font-bold tracking-normal select-none px-5 py-2 text-center whitespace-nowrap"
                  style={{
                    fontSize: commonTitleSize,
                    color: colors.cream,
                    lineHeight: 1,
                  }}
                >
                  EMBEDDED SYSTEMS
                </span>
              </DoodleEllipse>

              {/* "Let's Connect" bubble + local animated cursor */}
              <div
                className="relative inline-flex items-center mt-4 md:mt-0"
                style={{ zIndex: 10 }}
              >
                <div
                  className="absolute pointer-events-none z-20 hidden md:block"
                  style={{
                    left: "-34px",
                    top: "-38px",
                    animation: "local-cursor-movement 6s ease-in-out infinite",
                    willChange: "transform",
                  }}
                >
                  <svg
                    width="36"
                    height="42"
                    viewBox="0 0 20 24"
                    fill="none"
                    style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.35))" }}
                  >
                    <path
                      d="M1 1L1 20L6.5 15L12 22L15 20L9.5 13L17 12L1 1Z"
                      fill={isDarkMode ? "#60A5FA" : "#2563EB"}
                    />
                  </svg>
                  <span
                    className="absolute left-8 top-8 px-4 py-2 rounded-md text-xs font-bold text-white shadow-md"
                    style={{
                      background: isDarkMode ? "#60A5FA" : "#2563EB",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Sumit
                  </span>
                </div>

                <MagneticButton
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full border transition-all duration-300 shadow-md"
                  style={{
                    borderColor: isDarkMode
                      ? "rgba(255,255,255,0.22)"
                      : "rgba(0,0,0,0.2)",
                    background: isDarkMode
                      ? "rgba(255,255,255,0.09)"
                      : "rgba(0,0,0,0.06)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{
                      background: colors.green,
                      animation: "hero-badge-pulse 2s ease-in-out infinite",
                    }}
                  />
                  <span
                    className="text-xs md:text-sm font-bold tracking-wide"
                    style={{ color: colors.cream }}
                  >
                    Let's Connect
                  </span>
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          {/* Line 4: comment + & SECURITY — centered as one group */}
          <Reveal delay={500} className="w-full">
            <div
              className="flex items-center justify-center flex-wrap w-full gap-6 md:gap-10"
              style={{
                marginTop: "-0.05em",
              }}
            >
              <div
                className="hidden md:block text-left font-mono leading-relaxed tracking-wider"
                style={{
                  fontSize: "12.5px",
                  color: colors.cream,
                  opacity: 0.75,
                }}
              >
                // Full-Stack Developer
                <br />
                EMBEDDED SYSTEMS
                <br />
                CYBERSECURITY
              </div>

              <div className="flex items-baseline gap-3 md:gap-5">
                <span
                  className="font-bold tracking-tight select-none"
                  style={{
                    fontSize: commonTitleSize,
                    color: colors.cream,
                    lineHeight: 1,
                  }}
                >
                  &
                </span>
                <span
                  className="font-bold tracking-tight select-none"
                  style={{
                    fontSize: commonTitleSize,
                    color: colors.green,
                    lineHeight: 1,
                  }}
                >
                  SECURITY.
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Tagline ── */}
        <Reveal delay={700}>
          <p
            className="mt-12 text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.mutedText }}
          >
            I build digital systems that merge{" "}
            <span style={{ color: colors.yellow, fontWeight: 700 }}>
              Efficiency
            </span>
            ,{" "}
            <span style={{ color: colors.purple, fontWeight: 700 }}>
              Security
            </span>{" "}
            and{" "}
            <span style={{ color: colors.blue, fontWeight: 700 }}>
              Innovation
            </span>
            .
          </p>
        </Reveal>

        {/* ── CTA Buttons ── */}
        <Reveal delay={900}>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <MagneticButton
              onClick={() => navigate("/about")}
              className={`px-8 py-4 rounded-full ${theme.btnPrimary} font-bold shadow-sm hover:shadow-xl transition-all flex items-center gap-2 group border`}
            >
              More About Me{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </MagneticButton>
            <MagneticButton
              onClick={() => navigate("/work")}
              className={`px-8 py-4 rounded-full ${theme.btnSecondary} font-medium transition-all flex items-center gap-2 group border`}
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </MagneticButton>
          </div>
        </Reveal>

        {/* ── Bottom tags ── */}
        <Reveal delay={1100}>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            {[
              "Full-Stack",
              "Cybersecurity",
              "IoT",
              "FPGA",
              "Microprocessors",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  borderColor: isDarkMode
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.1)",
                  color: colors.mutedText,
                  background: isDarkMode
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.03)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;