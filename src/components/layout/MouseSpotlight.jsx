import { useEffect, useRef } from "react";

const MouseSpotlight = ({ theme, isDarkMode }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (divRef.current) {
        divRef.current.style.setProperty("--x", `${e.clientX}px`);
        divRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={divRef}
      className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at var(--x) var(--y), rgba(${
          theme.spotlight
        }, ${isDarkMode ? "0.08" : "0.05"}), transparent 40%)`,
      }}
    />
  );
};

export default MouseSpotlight;
