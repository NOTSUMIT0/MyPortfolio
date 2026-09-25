const themeConfig = {
  light: {
    bg: "bg-[#FAFAFA]",

    // TEXT
    text: "text-neutral-900",
    textMuted: "text-neutral-500",

    // SURFACES
    cardBg: "bg-white",
    cardBorder: "border-neutral-200",

    // BUTTONS
    btnPrimary: "bg-black/10 text-neutral-900 border border-black/15 hover:bg-black/15 transition-all backdrop-blur-md",
    btnSecondary: "bg-transparent text-neutral-700 border border-black/10 hover:bg-black/5 hover:text-neutral-900 transition-all backdrop-blur-md",

    // NAV
    navBg: "bg-white/45 backdrop-blur-2xl backdrop-saturate-180",

    // ACCENT (Clean monochrome)
    accent: "text-neutral-600",
    accentBg: "bg-black/10 text-neutral-900",
    accentHover: "hover:bg-black/15",
    accentBorderHover: "hover:border-neutral-400",
    accentShadow: "shadow-black/10",

    navHoverBg: "hover:bg-black/5",
    navHoverText: "hover:text-neutral-900",
    navActiveBg: "bg-black/10",
  },

  dark: {
    bg: "bg-[#0A0A0A]",
    text: "text-white",
    textMuted: "text-neutral-400",
    cardBg: "bg-[#1A1A1A]/80",
    cardBorder: "border-neutral-800",

    // BUTTONS
    btnPrimary: "bg-white/10 border border-white/15 text-neutral-200 hover:bg-white/20 hover:text-white transition-all backdrop-blur-md",
    btnSecondary: "bg-transparent text-neutral-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md",

    navBg: "bg-neutral-950/45 backdrop-blur-2xl backdrop-saturate-180",
    accent: "text-neutral-400",
    accentBg: "bg-white/10 text-white",
    accentHover: "hover:bg-white/20",
    accentBorderHover: "hover:border-white/30",
    accentShadow: "shadow-white/10",
    navHoverBg: "hover:bg-white/10",
    navHoverText: "hover:text-neutral-100",
  },
};

export default themeConfig;
