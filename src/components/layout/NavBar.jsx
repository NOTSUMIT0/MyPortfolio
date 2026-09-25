import { useEffect, useState, useRef } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = ({ theme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef([]);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolledIntoWhite, setIsScrolledIntoWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname.startsWith('/project/') || location.pathname.startsWith('/embedded/')) {
        // Hero section is ~90vh. Navbar overlaps white bg after scrolling past it.
        if (window.scrollY > window.innerHeight * 0.85) {
          setIsScrolledIntoWhite(true);
        } else {
          setIsScrolledIntoWhite(false);
        }
      } else {
        setIsScrolledIntoWhite(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const dynamicTextColor = isScrolledIntoWhite ? "text-black" : theme.text;
  const dynamicMutedText = isScrolledIntoWhite ? "text-neutral-500" : theme.textMuted;
  const dynamicLinkClass = isScrolledIntoWhite 
    ? "text-neutral-500 hover:text-black hover:bg-black/5"
    : (isDarkMode ? "text-neutral-400 hover:text-white hover:bg-white/10" : "text-neutral-600 hover:text-neutral-900 hover:bg-black/5");

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/work" },
  ];

  // Recalculate active sliding pill position whenever path changes
  useEffect(() => {
    const activeIdx = navItems.findIndex(
      (item) => item.path === location.pathname || (item.path === "/work" && (location.pathname.startsWith("/project") || location.pathname.startsWith("/embedded")))
    );
    if (activeIdx !== -1 && tabsRef.current[activeIdx]) {
      const el = tabsRef.current[activeIdx];
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [location.pathname]);

  const handleNav = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full z-50 px-6 sm:px-8 md:px-12 pt-5 top-0 left-0 pointer-events-none">
      <div className="w-full flex items-center justify-between pointer-events-auto relative">
        
        {/* Extreme Left: Name & Subtitle */}
        <div className="flex-1 flex justify-start">
          <div
            className="cursor-pointer group flex flex-col justify-center"
            onClick={() => handleNav("/")}
          >
            <span className="text-lg md:text-xl font-bold tracking-tight select-none leading-tight transition-colors duration-300">
              <span className={dynamicTextColor}>Sumit</span>
              <span className={`${dynamicTextColor} font-bold ml-1.5`}>Kumar</span>
            </span>
            <span
              className={`text-xs md:text-sm font-medium ${dynamicMutedText} tracking-wide mt-0.5 transition-colors duration-300`}
            >
              Software Developer
            </span>
          </div>
        </div>

        {/* Center: Floating Translucent Glass Pill Nav with Smooth Gliding Active Pill (Just 4 Pages) */}
        <div className="flex-1 hidden md:flex justify-center">
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex items-center relative h-[44px] px-1.5 rounded-full border border-transparent shadow-xl ${
              isDarkMode
                ? "bg-neutral-950/45 shadow-black/30"
                : "bg-white/45 shadow-black/5"
            } backdrop-blur-2xl backdrop-saturate-180`}
          >
            {/* Base Border */}
            <div
              className="pointer-events-none absolute -inset-[1px] rounded-full"
              style={{
                background: isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
                padding: '1px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            {/* Hover Glow Border */}
            <div
              className={`pointer-events-none absolute -inset-[1px] rounded-full transition-opacity duration-300 ${
                isHovering ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: `radial-gradient(60px circle at ${mouseX}px ${mouseY}px, ${isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'}, transparent 100%)`,
                padding: '1px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            {/* Sliding Greyish Active Pill Indicator */}
            {navItems.some(
              (item) =>
                item.path === location.pathname ||
                (item.path === "/work" && (location.pathname.startsWith("/project") || location.pathname.startsWith("/embedded")))
            ) && (
              <div
                className={`absolute top-1.5 bottom-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isDarkMode
                    ? "bg-white/15 border border-white/10 shadow-inner"
                    : "bg-black/10 border border-black/5"
                }`}
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
              />
            )}

            {/* Nav Items */}
            {navItems.map((item, idx) => {
              const isActive =
                location.pathname === item.path ||
                (item.path === "/work" && (location.pathname.startsWith("/project") || location.pathname.startsWith("/embedded")));
              return (
                <button
                  key={item.label}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  onClick={() => handleNav(item.path)}
                  className={`relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? theme.text
                      : `${theme.textMuted} hover:${theme.text}`
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Extreme Right: GitHub & LinkedIn Links */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-2">
          {/* GitHub Link */}
          <a
            href="https://github.com/NOTSUMIT0"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3.5 py-1.5 text-sm md:text-base font-medium rounded-full transition-colors duration-200 flex items-center gap-1.5 ${dynamicLinkClass}`}
          >
            <span>GitHub</span>
            <ArrowUpRight size={16} />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/sumit-kumar010/"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-3.5 py-1.5 text-sm md:text-base font-medium rounded-full transition-colors duration-200 flex items-center gap-1.5 ${dynamicLinkClass}`}
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-3 ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center ${
              isDarkMode
                ? "bg-white/10 border-white/15 text-neutral-200 hover:bg-white/20"
                : "bg-black/5 border-black/10 text-neutral-800 hover:bg-black/10"
            } backdrop-blur-md`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute top-20 left-4 right-4 backdrop-blur-2xl backdrop-saturate-180 rounded-3xl p-4 border shadow-2xl transition-all pointer-events-auto ${
            isDarkMode
              ? "bg-neutral-950/85 border-white/15 text-white"
              : "bg-white/85 border-black/10 text-neutral-900"
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.path)}
                  className={`text-left px-4 py-3 rounded-2xl font-medium transition-all ${
                    isActive
                      ? isDarkMode
                        ? "bg-white/15 text-white shadow-sm"
                        : "bg-black/10 text-neutral-900 shadow-sm"
                      : isDarkMode
                      ? "text-neutral-300 hover:bg-white/10"
                      : "text-neutral-700 hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <a
              href="https://github.com/NOTSUMIT0"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-4 py-3 rounded-2xl font-medium transition-all ${
                isDarkMode
                  ? "text-neutral-300 hover:bg-white/10"
                  : "text-neutral-700 hover:bg-black/5"
              }`}
            >
              <span>GitHub</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/sumit-kumar010/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-4 py-3 rounded-2xl font-medium transition-all ${
                isDarkMode
                  ? "text-neutral-300 hover:bg-white/10"
                  : "text-neutral-700 hover:bg-black/5"
              }`}
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
