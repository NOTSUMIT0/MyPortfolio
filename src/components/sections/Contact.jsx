import { Mail, Github, Linkedin, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Reveal from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";

const Contact = ({ isSummary = false, theme }) => {
  const navigate = useNavigate();

  return (
    <section
      className={`px-6 flex items-center ${
        isSummary ? "py-32" : "min-h-screen pt-20"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <Reveal>
          <h2 className={`text-5xl md:text-7xl font-bold mb-8 ${theme.text}`}>
            Let’s build <span className={`${theme.accent} italic`}>something meaningful.</span>
          </h2>

          <p className={`text-xl mb-12 max-w-2xl mx-auto ${theme.textMuted}`}>
            I’m open to freelance work, internships, and full-time opportunities
            — especially where engineering meets AI.
          </p>

          {/* Primary CTA */}
          <MagneticButton
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
            className={`inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-lg transition-all hover:scale-105 shadow-2xl ${theme.accentShadow} ${theme.accentBg} ${theme.accentHover}`}
          >
            <Mail size={22} />
            Say Hello
          </MagneticButton>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-20">
            <MagneticButton
              onClick={() =>
                window.open("https://github.com/NOTSUMIT0", "_blank")
              }
              className={`p-4 rounded-full ${theme.btnSecondary} transition-all`}
            >
              <Github size={24} />
            </MagneticButton>

            <MagneticButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sumit-kumar010/",
                  "_blank",
                )
              }
              className={`p-4 rounded-full ${theme.btnSecondary} transition-all`}
            >
              <Linkedin size={24} />
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
