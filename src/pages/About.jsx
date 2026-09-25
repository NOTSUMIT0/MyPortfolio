import React, { useState } from "react";
import { ArrowRight, Github, Linkedin, X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";
import GlowCard from "../components/ui/GlowCard";
import EXPERIENCE_DATA from "../data/experience";

// Profile Photo
import myPhoto from "../assets/me/me.png";

// Game Cover Assets
import AW2 from "../assets/games/AW2.jpg";
import DBH from "../assets/games/DBH.jpg";
import GOT from "../assets/games/GOT.jpg";
import Metro from "../assets/games/Metro.jpg";
import rdr2 from "../assets/games/rdr2.jpg";

// Sketches Assets
import sketch1 from "../assets/Sketches/1.jpg";
import sketch2 from "../assets/Sketches/2.jpg";
import sketch3 from "../assets/Sketches/3.jpg";
import sketch4 from "../assets/Sketches/4.jpg";
import sketch5 from "../assets/Sketches/5.jpg";
import sketch6 from "../assets/Sketches/6.jpg";
import sketch7 from "../assets/Sketches/7.jpg";
import sketch8 from "../assets/Sketches/8.jpg";
import sketch9 from "../assets/Sketches/9.jpg";
import sketch10 from "../assets/Sketches/10.jpg";

const sketches = [
  sketch1, sketch2, sketch3, sketch4, sketch5, 
  sketch6, sketch7, sketch8, sketch9, sketch10
];

const EDUCATION_DATA = [
  {
    degree: "B.Tech in Computer Science Engineering (IOT with Cyber Security including Blockchain)",
    institution: "Chandigarh Group of Colleges (CGC), Landran",
    period: "2023 - Present",
    desc: "Focused on software development, data structures, algorithms, and applied machine learning. Building real-world projects including IDS and prediction systems.",
  }
];

// eslint-disable-next-line no-unused-vars
const AboutPage = ({ theme, isDarkMode }) => {
  const [isSketchesModalOpen, setIsSketchesModalOpen] = useState(false);
  const [currentSketchIndex, setCurrentSketchIndex] = useState(0);

  const handleNextSketch = () => {
    setCurrentSketchIndex((prev) => (prev + 1) % sketches.length);
  };

  const handlePrevSketch = () => {
    setCurrentSketchIndex((prev) => (prev - 1 + sketches.length) % sketches.length);
  };

  return (
    <div className="pt-32 pb-20 w-full overflow-hidden">
      <div className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        {/* ===== HERO / BIO ===== */}
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
              ABOUT
            </h1>
          </Reveal>

          <Reveal delay={200} className="w-full">
            <p
              className="select-text text-center"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(1.2rem, 3.2vw, 2.8rem)",
                color: isDarkMode ? "rgba(255, 255, 255, 0.95)" : "rgba(0,0,0,0.9)",
                lineHeight: 1.3,
                maxWidth: "1200px",
                margin: "4rem auto 0",
                padding: "0 1rem",
                fontWeight: 400,
              }}
            >
              I am a Computer Science Engineering student focused on building intelligent systems, securing digital networks, and bridging the gap between software logic and physical hardware.
            </p>
          </Reveal>

          <Reveal delay={350} className="w-full">
            <p
              className="select-text text-center"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.95rem",
                color: isDarkMode ? "rgba(255, 255, 255, 0.6)" : "rgba(0,0,0,0.6)",
                lineHeight: 1.6,
                maxWidth: "760px",
                margin: "2rem auto 0",
                padding: "0 1rem",
              }}
            >
              Sumit Kumar is a Computer Science Engineering student at Chandigarh Group of Colleges (CGC), Landran. With a strong foundation in cybersecurity, machine learning, and Internet of Things, he builds real-world projects ranging from Intrusion Detection Systems to LLM-based tools. Beyond traditional software development, he actively explores embedded systems, crafting custom firmware and IoT solutions using Arduino, FPGA, and Raspberry Pi.
            </p>
          </Reveal>

        </div>

        {/* ===== BENTO BOX GRID ===== */}
        {/* 
          Wireframe layout:
          [Education (short)]  [              ]  [Sketches (short) ]
          [Experience (tall) ] [ Photo (full)  ]  [Gaming (tall)    ]
        */}
        <Reveal delay={600} className="w-full">
          <div 
            className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.5fr_1.3fr] gap-7 w-full max-w-[110rem] mx-auto mb-10"
            style={{ gridAutoRows: "auto" }}
          >
            
            {/* ====== LEFT COLUMN ====== */}
            <div className="flex flex-col gap-7 order-2 lg:order-1">
              
              {/* Education Box */}
              <GlowCard className="bg-[#060606] shadow-2xl">
                <div className="p-8 flex flex-col justify-center min-h-[14rem]">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-white leading-tight">Education</h3>
                    <p className="text-xs text-emerald-400/70 mt-1.5 font-medium">2023 - Present</p>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">Chandigarh Group of Colleges, Landran</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-3">
                    B.Tech in Computer Science Engineering (IOT with Cyber Security including Blockchain).
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Focused on software development, data structures, algorithms, and applied machine learning.
                  </p>
                </div>
              </GlowCard>

              {/* Experience Box */}
              <GlowCard className="bg-[#060606] shadow-2xl flex-1">
                <div className="p-8 h-full flex flex-col min-h-[22rem]">
                  <h3 className="text-2xl font-bold text-white mb-4">Cyber Security Trainee</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    4-week intensive training program with SecureHack & NASSCOM. Hands-on exposure to scanning, enumeration, exploitation, and network analysis using industry-standard tools.
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      • Vulnerability assessment & penetration testing with Nmap, Metasploit, and Burp Suite
                    </p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      • Network traffic analysis & intrusion detection techniques
                    </p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      • Security auditing, risk assessment & incident response fundamentals
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="text-xs font-semibold text-emerald-400/60 uppercase tracking-wider">Jun 2025 – Jul 2025</span>
                  </div>
                </div>
              </GlowCard>
            </div>

            {/* ====== CENTER COLUMN ====== */}
            <div className="flex flex-col gap-7 order-1 lg:order-2">
              <GlowCard className="bg-[#060606] shadow-2xl flex-1 group">
                <div className="h-full w-full relative min-h-[44rem] overflow-hidden rounded-3xl">
                  {/* Gradient overlay at bottom for name */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent z-10 rounded-3xl" />
                  
                  {/* Photo */}
                  <img 
                    src={myPhoto} 
                    alt="Sumit Kumar" 
                    className="absolute inset-0 w-full h-full object-cover object-top rounded-3xl opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  
                  {/* Name at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center pb-10 pt-24">
                    <h2 className="text-[3rem] font-bold text-white tracking-tight">Sumit Kumar</h2>
                  </div>
                </div>
              </GlowCard>

              {/* Resume Button with GlowCard outline */}
              <GlowCard 
                className="bg-[#060606] shadow-2xl cursor-pointer group"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <div className="py-5 px-8 flex items-center justify-center gap-3">
                  <span className="text-white font-semibold text-base tracking-wide">Resume</span>
                  <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </GlowCard>
            </div>

            {/* ====== RIGHT COLUMN ====== */}
            <div className="flex flex-col gap-7 order-3 lg:order-3">
              
              {/* Sketches Box */}
              <GlowCard 
                className="bg-[#060606] shadow-2xl cursor-pointer group relative"
                onClick={() => setIsSketchesModalOpen(true)}
              >
                <div className="p-7 flex flex-col justify-center gap-6 min-h-[14rem] relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-2xl bg-neutral-800 flex-shrink-0 overflow-hidden border border-white/5 relative">
                      <img 
                        src={sketch1} 
                        alt="Sketch" 
                        className="w-full h-full object-cover grayscale opacity-80" 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">Sketches</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        I like drawing portraits of fictional characters from anime, mangas, and more.
                      </p>
                    </div>
                  </div>
                  
                  {/* "click to check" doodle */}
                  <div className="absolute top-4 right-4 flex flex-col items-end z-50">
                    <svg className="w-12 h-12 text-neutral-500 opacity-60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M70 20 C 50 15, 30 30, 20 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" fill="none"/>
                      <path d="M12 45 L 18 63 L 35 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <span 
                      className="text-neutral-500 text-[13px] italic mr-4 -mt-2 -rotate-6"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                    >
                      click to check
                    </span>
                  </div>
                </div>
              </GlowCard>

              {/* I Love Gaming */}
              <GlowCard className="bg-[#060606] shadow-2xl flex-1 group">
                <div className="p-8 h-full flex flex-col relative min-h-[28rem] overflow-hidden rounded-3xl">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 relative z-30">
                    I love gaming
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[15px] text-neutral-400 leading-relaxed max-w-[55%] relative z-30">
                    Usually prefer playing story campaigns, but hey who doesn't love a little bit of NFS action with friends
                  </p>
                  
                  {/* ===== Game Covers — matching reference layout ===== */}
                  {/* Row 1: RDR2 (left) | GOT (center) | AW2 (right) */}
                  {/* Row 2: doodle      | Metro (center)| DBH (right) */}
                  
                  {/* RDR2 — Largest, left side */}
                  <img 
                    src={rdr2}
                    alt="Red Dead Redemption 2" 
                    className="absolute bottom-[9.5rem] left-[10%] w-[9rem] h-[9rem] rounded-[1.4rem] object-cover shadow-2xl z-30 border-2 border-white/5 hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-pointer" 
                  />
                  
                  {/* GOT — Center-right, slightly higher than RDR2 */}
                  <img 
                    src={GOT}
                    alt="Ghost of Tsushima" 
                    className="absolute bottom-[11rem] left-[42%] w-[8.5rem] h-[8.5rem] rounded-[1.4rem] object-cover shadow-2xl z-20 border-2 border-white/5 hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-pointer" 
                  />
                  
                  {/* AW2 — Far right, same row as GOT */}
                  <img 
                    src={AW2}
                    alt="Alan Wake 2" 
                    className="absolute bottom-[9.5rem] right-[1rem] w-[7.5rem] h-[7.5rem] rounded-[1.4rem] object-cover shadow-2xl z-10 border-2 border-white/5 hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-pointer" 
                  />
                  
                  {/* Metro — Center-right, below GOT */}
                  <img 
                    src={Metro}
                    alt="Metro Exodus" 
                    className="absolute bottom-[2.5rem] left-[44%] w-[8rem] h-[8rem] rounded-[1.4rem] object-cover shadow-2xl z-40 border-2 border-white/5 hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-pointer" 
                  />
                  
                  {/* DBH — Bottom-right */}
                  <img 
                    src={DBH}
                    alt="Detroit Become Human" 
                    className="absolute bottom-[1rem] right-[0.5rem] w-[7.5rem] h-[7.5rem] rounded-[1.4rem] object-cover shadow-2xl z-0 border-2 border-white/5 hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-pointer" 
                  />
                  
                  {/* Doodle Arrow — spiral pointing upper-right toward games */}
                  <div className="absolute bottom-[4rem] left-[3%] z-50">
                    <svg className="w-24 h-24 text-neutral-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Spiral loop */}
                      <path 
                        d="M45 90 C 25 85, 15 65, 25 50 C 35 35, 55 35, 55 50 C 55 60, 45 62, 42 55" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"
                      />
                      {/* Upward curve from spiral toward upper-right */}
                      <path 
                        d="M42 55 C 40 45, 50 30, 70 15" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"
                      />
                      {/* Arrowhead pointing upper-right */}
                      <path d="M62 10 L 72 14 L 65 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                  
                  {/* "some of my favourites" text */}
                  <span 
                    className="absolute bottom-[2rem] left-[3%] text-neutral-300 text-[17px] italic font-semibold tracking-wide z-50"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    some of my favourites
                  </span>
                </div>
              </GlowCard>
            </div>

          </div>
        </Reveal>
      </div>

      {/* ===== SKETCHES MODAL ===== */}
      {isSketchesModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setIsSketchesModalOpen(false)}
        >
          
          {/* Main Content Area */}
          <div 
            className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/9] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevSketch();
              }}
              className="absolute left-2 sm:left-4 z-[110] p-3 rounded-full bg-black/50 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image Container with GlowCard */}
            <div className="w-full h-full max-w-3xl max-h-full p-4 sm:p-12 flex items-center justify-center z-[100]">
              <GlowCard className="bg-[#060606] shadow-2xl p-2 w-auto h-auto inline-block">
                <img
                  src={sketches[currentSketchIndex]}
                  alt={`Sketch ${currentSketchIndex + 1}`}
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl"
                />
              </GlowCard>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextSketch();
              }}
              className="absolute right-2 sm:right-4 z-[110] p-3 rounded-full bg-black/50 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110"
            >
              <ChevronRight size={28} />
            </button>
            
            {/* Counter Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#060606] px-5 py-2 rounded-full border border-white/10 backdrop-blur-md z-[110] shadow-xl">
              <span className="text-white text-sm font-semibold">{currentSketchIndex + 1}</span>
              <span className="text-neutral-500 text-sm">/</span>
              <span className="text-neutral-400 text-sm">{sketches.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
