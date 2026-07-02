const themeConfig = {
  light: {
    bg: "bg-[#FAFAFA]",

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
    navHoverBg: "hover:bg-neutral-800/60",
    navHoverText: "hover:text-neutral-100",
  },
};

export default themeConfig;
