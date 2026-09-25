import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Reveal from "../ui/Reveal";
import SpecularButton from "../ui/SpecularButton";
const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative overflow-hidden select-text"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0A",
        padding: "0",
      }}
    >
      {/* ── Subtle Grid — dark, blending with bg ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.07,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Bottom Fade — smooth merge into rest of page ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-20"
        style={{
          height: "200px",
          background: "linear-gradient(to bottom, transparent 0%, #0A0A0A 100%)",
        }}
      />

      {/* ── Main Content ── */}
      <div
        className="relative z-10 w-full flex flex-col items-center justify-center"
        style={{ padding: "0 0.5vw" }}
      >
        {/* ── MASSIVE "SOFTWARE ENGINEER" — straight, bold, ultra-condensed, compacted ── */}
        <Reveal className="w-full">
          <h1
            className="select-text cursor-text w-full text-center"
            style={{
              fontFamily: "'League Gothic', 'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 16vw, 19rem)",
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
            SOFTWARE ENGINEER
          </h1>
        </Reveal>

        {/* ── Subtitle ── */}
        <Reveal delay={200}>
          <p
            className="select-text text-center"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(1.05rem, 2.2vw, 1.75rem)",
              color: "rgba(243, 232, 255, 0.7)",
              lineHeight: 1.45,
              maxWidth: "640px",
              margin: "2.5rem auto 0",
              padding: "0 1.5rem",
              fontWeight: 400,
            }}
          >
            I design &amp; build high-performance digital systems,
            embedded solutions, and modern web experiences.
          </p>
        </Reveal>

        {/* ── "My Works →" Button — matching navbar glass pill style ── */}
        <Reveal delay={350}>
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
            <SpecularButton
              size="lg"
              radius={18}
              tint="#ffffff"
              tintOpacity={0}
              blur={0}
              textColor="#f5f5f5"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1}
              shineSize={10}
              shineFade={40}
              thickness={1}
              speed={0.35}
              followMouse
              proximity={250}
              autoAnimate={false}
              onClick={() => navigate("/work")}
            >
              <div className="flex items-center gap-2">
                <span>My Works</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </SpecularButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;