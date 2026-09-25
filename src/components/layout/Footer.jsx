import { ArrowUpRight, Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CurvedInput from "../ui/CurvedInput";
import SocialIconsBlock from "../ui/SocialIconsBlock";
const Footer = ({ theme, isDarkMode, toggleTheme }) => {
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`w-full py-16 px-6 md:px-12 border-t ${theme.cardBorder} relative z-10 mt-12`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Email Input */}
        <div className="w-full md:w-[350px]">
          <CurvedInput
            placeholder="Email me for work"
            buttonText="Email"
            theme="dark"
            width="100%"
            height={48}
            bend={18}
            fontSize={14}
            onSubmit={() => window.location.href = 'mailto:kumarsumeet683@gmail.com'}
          />
        </div>

        {/* Center Text */}
        <div className="flex items-center justify-center">
          <p className={`text-2xl md:text-3xl font-bold tracking-wide ${theme.text}`}>
            Let's connect
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center md:items-end gap-5 text-center md:text-right">
          <SocialIconsBlock />
          <p className={`text-sm ${theme.textMuted} font-medium`}>
            © {new Date().getFullYear()} Sumit Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
