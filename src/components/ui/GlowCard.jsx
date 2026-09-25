import React, { useState } from "react";

const GlowCard = ({
  children,
  className = "",
  isDarkMode = true, // Default to true if not provided, or pass from theme
  ...props
}) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
    if (props.onMouseMove) props.onMouseMove(e);
  };

  const handleMouseEnter = (e) => {
    setIsHovering(true);
    if (props.onMouseEnter) props.onMouseEnter(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovering(false);
    if (props.onMouseLeave) props.onMouseLeave(e);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-transparent transition-colors duration-300 ${className}`}
      {...props}
    >
      {/* Base Border */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-3xl"
        style={{
          background: isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Hover Glow Border */}
      <div
        className={`pointer-events-none absolute -inset-[1px] rounded-3xl transition-opacity duration-300 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(250px circle at ${mouseX}px ${mouseY}px, ${
            isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.4)"
          }, transparent 100%)`,
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
