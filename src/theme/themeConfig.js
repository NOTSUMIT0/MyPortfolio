const themeConfig = {
  light: {
    bg: "bg-[linear-gradient(to_bottom,#F5E3D0,50%,#F0D6C8,100%,#E6C8D1)]", // Pure CSS gradient to prevent Tailwind from/to variables affecting buttons

    // TEXT
    text: "text-neutral-800",
    textMuted: "text-neutral-600",

    // SURFACES
    cardBg: "bg-white",
    cardBorder: "border-neutral-200",

    // BUTTONS
    btnPrimary: "bg-[#0A0A0A] text-white border-[#0A0A0A]",
    btnSecondary: "bg-transparent text-neutral-800 border-neutral-300 hover:bg-neutral-200/50",

    // NAV
    navBg: "bg-white/70",

    // ACCENT
    accent: "text-[#C2410C]",
    accentBg: "bg-[#C2410C]",
    accentHover: "hover:bg-[#9A3412]",
    accentBorderHover: "hover:border-[#C2410C]/50",
    accentShadow: "shadow-[#C2410C]/30",

    // DECOR
    blob1: "bg-[#E8C09E]", // Deeper warm cream/peach
    blob2: "bg-[#DEACBA]", // Deeper soft dusty pink
    blob3: "bg-[#E6BCAE]", // Deeper warm blush/cream

    spotlight: "234, 88, 12",

    navHoverBg: "hover:bg-orange-100/70",
    navHoverText: "hover:text-neutral-900",
    navActiveBg: "bg-orange-200/60",
  },

  dark: {
    bg: "bg-[#0A0A0A]",
    text: "text-neutral-100",
    textMuted: "text-neutral-400",
    cardBg: "bg-[#1A1A1A]/80",
    cardBorder: "border-neutral-800",

    // BUTTONS
    btnPrimary: "bg-white text-[#0A0A0A] border-white",
    btnSecondary: "bg-transparent text-neutral-200 border-neutral-700 hover:bg-neutral-800/50",

    navBg: "bg-[#1A1A1A]/95",
    accent: "text-orange-500",
    accentBg: "bg-orange-500",
    accentHover: "hover:bg-orange-600",
    accentBorderHover: "hover:border-orange-500/50",
    accentShadow: "shadow-orange-500/30",
    blob1: "bg-orange-900/40",
    blob2: "bg-rose-900/30",
    blob3: "bg-indigo-900/30",
    spotlight: "255, 255, 255",
    navHoverBg: "hover:bg-neutral-800/60",
    navHoverText: "hover:text-neutral-100",
  },
};

export default themeConfig;
