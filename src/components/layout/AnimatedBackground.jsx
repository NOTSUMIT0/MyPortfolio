import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "button, a, [role='button'], .magnetic-btn";

const AnimatedBackground = ({ theme, isDarkMode }) => {
  const spotlightRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const pos = useRef({ x: -200, y: -200 });
  const scale = useRef(1);
  const targetScale = useRef(1);
  const raf = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Check if hovering over an interactive element
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive = el && el.closest(INTERACTIVE_SELECTOR);
      targetScale.current = isInteractive ? 1.8 : 1;
    };

    const animate = () => {
      // Smooth lerp — trails behind cursor
      pos.current.x += (mouse.current.x - pos.current.x) * 0.04;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.04;
      // Smooth scale transition
      scale.current += (targetScale.current - scale.current) * 0.08;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate(${pos.current.x - 150}px, ${pos.current.y - 150}px) scale(${scale.current})`;
        spotlightRef.current.style.opacity = scale.current > 1.2 ? 1.6 : 1;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Use the theme's accent color for the spotlight
  const spotlightColor = isDarkMode
    ? "rgba(249, 115, 22, 0.08)"
    : "rgba(194, 65, 12, 0.06)";

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Cursor-following spotlight */}
      <div
        ref={spotlightRef}
        className="fixed top-0 left-0 w-[250px] h-[250px] rounded-full pointer-events-none z-[1] will-change-transform transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${spotlightColor} 0%, ${spotlightColor} 30%, transparent 50%)`,
          transform: "translate(-200px, -200px)",
        }}
      />
      
      {/* 1. Distinct Circular Spotlight (Top Left) */}
      <div
        className={`absolute top-[8%] left-[8%] w-[18vw] h-[18vw] rounded-full filter blur-[35px] opacity-70 animate-blob ${
          theme.blob1
        } ${isDarkMode ? "mix-blend-screen" : "mix-blend-multiply"}`}
      />
      
      {/* 2. Square with very rounded edges (Top Right) */}
      <div
        className={`absolute top-[15%] right-[12%] w-[16vw] h-[16vw] rounded-[3rem] rotate-12 filter blur-[30px] opacity-80 animate-blob animation-delay-2000 ${
          theme.blob2
        } ${isDarkMode ? "mix-blend-screen" : "mix-blend-multiply"}`}
      />

      {/* 3. Semi-circle protruding from the right edge */}
      <div
        className={`absolute top-[50%] right-[-10vw] w-[20vw] h-[20vw] rounded-full filter blur-[25px] opacity-70 animate-blob animation-delay-4000 ${
          theme.blob3
        } ${isDarkMode ? "mix-blend-screen" : "mix-blend-multiply"}`}
      />

      {/* 4. Large distinct circular spotlight (Bottom Right) */}
      <div
        className={`absolute bottom-[-5%] right-[20%] w-[35vw] h-[35vw] rounded-full filter blur-[45px] opacity-60 animate-blob ${
          theme.blob1
        } ${isDarkMode ? "mix-blend-screen" : "mix-blend-multiply"}`}
      />

      {/* 5. Semi-circle protruding from the bottom edge */}
      <div
        className={`absolute bottom-[-12vw] left-[30%] w-[25vw] h-[25vw] rounded-full filter blur-[35px] opacity-70 animate-blob animation-delay-2000 ${
          theme.blob2
        } ${isDarkMode ? "mix-blend-screen" : "mix-blend-multiply"}`}
      />

      {/* 6. Another rounded square (Center Left) */}
      <div
        className={`absolute top-[40%] left-[5%] w-[14vw] h-[14vw] rounded-[2.5rem] -rotate-12 filter blur-[25px] opacity-60 animate-blob animation-delay-4000 ${
          theme.blob3
        } ${isDarkMode ? "mix-blend-screen" : "mix-blend-multiply"}`}
      />
      
    </div>
  );
};

export default AnimatedBackground;
