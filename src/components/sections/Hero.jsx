import { ArrowRight, Code, CheckCircle2, Command } from "lucide-react";
import Reveal from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";

import React, { useState, useEffect } from "react";
import { Loader2, PenLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = ({ theme }) => {
  const navigate = useNavigate();
  const [appState, setAppState] = useState("writing");
  const [charIndex, setCharIndex] = useState(0);

  const codeLines = [
    [
      { t: "import ", c: "text-purple-400" },
      { t: "React ", c: "text-white" },
      { t: "from ", c: "text-purple-400" },
      { t: "'react'", c: "text-green-400" },
      { t: ";", c: "text-white" },
    ],
    [],
    [
      { t: "  function ", c: "text-blue-400" },
      { t: "App", c: "text-yellow-400" },
      { t: "() {", c: "text-white" },
    ],
    [
      { t: "      return ", c: "text-purple-400" },
      { t: "(", c: "text-white" },
    ],
    [
      { t: "        <", c: "text-white" },
      { t: "Hero ", c: "text-orange-400" },
      { t: "/>", c: "text-white" },
    ],
    [{ t: "      );", c: "text-white" }],
    [{ t: "  }", c: "text-blue-400" }],
  ];

  const totalChars = codeLines.reduce(
    (acc, line) => acc + line.reduce((sum, token) => sum + token.t.length, 0),
    0,
  );

  useEffect(() => {
    let timeout;
    if (appState === "writing") {
      if (charIndex < totalChars) {
        const delay = Math.random() * 40 + 20;
        timeout = setTimeout(() => setCharIndex((c) => c + 1), delay);
      } else {
        timeout = setTimeout(() => setAppState("compiling"), 600);
      }
    } else if (appState === "compiling") {
      timeout = setTimeout(() => setAppState("success"), 1500);
    } else if (appState === "success") {
      timeout = setTimeout(() => {
        setAppState("writing");
        setCharIndex(0);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [appState, charIndex, totalChars]);

  const getStatusToast = () => {
    if (appState === "writing") {
      return {
        icon: <PenLine size={16} className="text-blue-400" />,
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        title: "Writing Code...",
        desc: "App.tsx",
        bounce: false,
      };
    }
    if (appState === "compiling") {
      return {
        icon: <Loader2 size={16} className="text-yellow-400 animate-spin" />,
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        title: "Compiling",
        desc: "Building module...",
        bounce: false,
      };
    }
    return {
      icon: <CheckCircle2 size={16} className="text-green-500" />,
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      title: "Compiled Successfully",
      desc: "Ready in 200ms",
      bounce: true,
    };
  };

  const status = getStatusToast();

  const renderCodeLines = () => {
    let charsLeft = charIndex;
    let cursorRendered = false;

    return codeLines.map((line, lineIdx) => {
      if (line.length === 0) {
        return <div key={lineIdx} className="h-[14px]"></div>;
      }

      return (
        <div
          key={lineIdx}
          className="flex font-mono text-[10px] leading-tight min-h-[14px]"
        >
          {line.map((token, tIdx) => {
            if (charsLeft <= 0) return null;

            const textToShow = token.t.slice(0, Math.max(0, charsLeft));
            charsLeft -= token.t.length;

            const isCursorHere =
              charsLeft <= 0 && appState === "writing" && !cursorRendered;
            if (isCursorHere) cursorRendered = true;

            return (
              <span
                key={tIdx}
                className={token.c}
                style={{ whiteSpace: "pre" }}
              >
                {textToShow}
                {isCursorHere && (
                  <span className="inline-block w-[1.5px] h-[12px] bg-white animate-pulse align-middle ml-[1px] translate-y-[1px]"></span>
                )}
              </span>
            );
          })}
          {appState === "writing" &&
            charIndex >= totalChars &&
            lineIdx === codeLines.length - 1 &&
            !cursorRendered && (
              <span className="inline-block w-[1.5px] h-[12px] bg-white animate-pulse align-middle ml-[1px] translate-y-[1px]"></span>
            )}
        </div>
      );
    });
  };

  return (
    <section className="min-h-screen flex items-center px-6 relative py-20 overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.05); opacity: 0.6; }
        }
        .animate-breathe {
          animation: breathe 8s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `,
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative z-10">
          <Reveal>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${theme.cardBorder} bg-opacity-50 backdrop-blur-sm mb-6 ${theme.cardBg}`}
            >
              <span
                className={`w-2 h-2 rounded-full ${theme.accentBg} animate-pulse`}
              ></span>
              <span
                className={`text-xs font-bold uppercase tracking-wider ${theme.textMuted}`}
              >
                Available for Work
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1] mb-8 ${theme.text}`}
            >
              Full-Stack <br />
              <span className={`${theme.accent} italic`}>Software Developer.</span>
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p
              className={`max-w-lg text-lg md:text-xl leading-relaxed mb-10 ${theme.textMuted}`}
            >
              I build efficient, scalable, and intelligent solutions — from 
              full-stack web applications to robust backend systems and 
              cybersecurity tools.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-wrap gap-4">
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
              <p className={`mt-6 text-sm ${theme.textMuted} w-full`}>
                Full-stack • Cybersecurity • Backend Systems • IoT
              </p>
            </div>
          </Reveal>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Reveal
            delay={300}
            className="relative w-full max-w-md aspect-square"
          >
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/30 via-rose-500/30 to-purple-500/30 blur-[60px] animate-breathe`}
            ></div>
            <div
              className={`relative w-full h-full rounded-[2rem] border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-xl p-8 flex flex-col justify-between transform rotate-2 hover:rotate-0 transition-all duration-700 overflow-visible shadow-2xl`}
            >
              <div className="relative z-10 flex justify-between items-start mb-4">
                <div
                  className={`p-4 rounded-2xl ${theme.cardBg} shadow-sm border ${theme.cardBorder}`}
                >
                  <Code size={32} className={theme.accent} />
                </div>
                <div className={`text-6xl font-black ${theme.text} opacity-5`}>
                  01
                </div>
              </div>

              <div className="relative z-10 flex-1 min-h-[200px]">
                <div
                  className={`absolute top-12 left-8 right-[-20px] h-40 rounded-xl border ${theme.cardBorder} bg-neutral-900 shadow-2xl transform translate-x-4 translate-y-4 opacity-60 z-0`}
                ></div>
                <div
                  className={`absolute top-4 left-0 right-0 h-48 rounded-xl border ${theme.cardBorder} bg-[#141414] shadow-xl p-4 overflow-hidden z-10 group`}
                >
                  <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="text-[10px] text-neutral-500 font-mono">
                      App.tsx
                    </div>
                  </div>

                  <div className="flex flex-col space-y-[2px]">
                    {renderCodeLines()}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>

                <div
                  className={`absolute bottom-4 -right-6 px-4 py-3 rounded-lg border ${status.border} ${theme.cardBg} shadow-2xl flex items-center gap-3 z-20 transition-all duration-500 ease-out ${
                    status.bounce ? "animate-bounce-slow" : "translate-y-0"
                  }`}
                >
                  <div
                    className={`${status.bg} p-1.5 rounded-full transition-colors duration-300`}
                  >
                    {status.icon}
                  </div>
                  <div>
                    <div
                      className={`text-xs font-bold ${theme.text} transition-colors duration-300`}
                    >
                      {status.title}
                    </div>
                    <div className="text-[10px] text-neutral-500 transition-colors duration-300">
                      {status.desc}
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute -top-6 -left-4 px-3 py-2 rounded-md bg-[#1a1a1a] text-neutral-400 text-xs font-mono shadow-lg border border-neutral-800 flex items-center gap-2 transform -rotate-6 z-20`}
                >
                  <Command size={12} />
                  <span>Cmd + K</span>
                </div>
              </div>

              <div className="mt-6 relative z-10">
                <h3 className={`text-2xl font-bold mb-1 ${theme.text}`}>
                  Clean Code
                </h3>
                <p className={theme.textMuted}>
                  Scalable, maintainable, and efficient architectures.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
