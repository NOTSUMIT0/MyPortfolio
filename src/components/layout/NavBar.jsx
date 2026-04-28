import { useEffect, useState, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import MagneticButton from "../ui/MagneticButton";

const NavBar = ({ theme, isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollDownAccum = useRef(0);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleGalleryState = (e) => setGalleryOpen(e.detail.isOpen);
    window.addEventListener("galleryStateChange", handleGalleryState);
    return () => window.removeEventListener("galleryStateChange", handleGalleryState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const atTop = currentY <= 20;
      const delta = currentY - lastScrollY.current;

      setScrolled(!atTop);

      if (delta > 0) {
        // Scrolling down — accumulate distance
        scrollDownAccum.current += delta;
        if (scrollDownAccum.current > 600) {
          setHidden(true);
        }
      } else if (delta < 0) {
        // Scrolling up — reset accumulator and show
        scrollDownAccum.current = 0;
        setHidden(false);
      }

      // Always show at top
      if (atTop) {
        setHidden(false);
        scrollDownAccum.current = 0;
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/work" },
    { label: "Contact", path: "/contact" },
  ];

  const isHidden = hidden || galleryOpen;

  return (
    <nav
      className={`fixed w-full z-50 flex justify-center px-4 transition-transform duration-700 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] ${
        isHidden
          ? "-translate-y-[150%] delay-[700ms] pt-4"
          : "translate-y-0 delay-0 pt-4"
      } ${scrolled && !isHidden ? "!pt-1" : ""}`}
    >
      <div
        className={`relative flex items-center justify-between h-[52px] overflow-hidden rounded-full border ${theme.navBg} backdrop-blur-xl ${theme.cardBorder} ${
          isHidden
            ? "w-[52px] max-w-[52px] !px-0"
            : `w-full max-w-7xl px-6 ${
                scrolled
                  ? "shadow-lg shadow-black/5"
                  : "shadow-sm shadow-black/5"
              }`
        }`}
        style={{
          transitionProperty: "width, max-width, padding, background-color, border-color, box-shadow",
          transitionDuration: "500ms, 500ms, 500ms, 300ms, 300ms, 300ms",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: isHidden ? "0ms" : "700ms, 700ms, 700ms, 0ms, 0ms, 0ms"
        }}
      >
        <div
          className={`flex items-center justify-between w-full min-w-max transition-opacity duration-300 ${
            isHidden ? "opacity-0 delay-0 pointer-events-none" : "opacity-100 delay-[900ms]"
          }`}
        >
        {/* Logo */}
        <div
          className="flex-shrink-0 cursor-pointer group"
          onClick={() => handleNav("/")}
        >
          <span className={`text-xl font-bold tracking-tighter ${theme.text}`}>
            Sumit
            <span className={`${theme.accent} group-hover:px-1 transition-all`}>
              .
            </span>
            Kumar
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <MagneticButton
                key={item.label}
                onClick={() => handleNav(item.path)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? `${theme.accentBg} text-white`
                    : `${theme.textMuted} ${theme.navHoverBg} ${theme.navHoverText}`
                }`}
              >
                {item.label}
              </MagneticButton>
            );
          })}

          <div
            className={`mx-3 h-5 w-[1px] bg-current opacity-15 ${theme.textMuted}`}
          />

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${theme.textMuted} ${theme.navHoverBg}`}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className={theme.textMuted}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={theme.text}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute top-20 left-4 right-4 ${theme.navBg} backdrop-blur-xl rounded-2xl p-4 border ${theme.cardBorder} shadow-xl shadow-black/10`}
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.path)}
                  className={`text-left px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive
                      ? `${theme.accentBg} text-white`
                      : `${theme.text} ${theme.navHoverBg}`
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
