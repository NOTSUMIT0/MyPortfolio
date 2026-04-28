import {
  MapPin,
  Mail,
  Calendar,
  ArrowRight,
  Github,
  Linkedin,
  Briefcase,
} from "lucide-react";

import profileImg from "../../assets/me.webp";

import Reveal from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";

import { useNavigate } from "react-router-dom";

const About = ({ isSummary = false, theme, isDarkMode }) => {
  const navigate = useNavigate();
  return (
    <section
      className={`py-24 px-6 ${isDarkMode ? "bg-black/20" : "bg-white/30"} backdrop-blur-3xl`}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 lg:col-span-4">
              <div
                className={`sticky top-24 p-6 rounded-3xl border ${theme.cardBorder} ${theme.cardBg} backdrop-blur-sm`}
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src={profileImg}
                    alt="Sumit Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-1 ${theme.text}`}>
                  Sumit Kumar
                </h3>
                <p className={`mb-6 ${theme.textMuted}`}>
                  Full Stack Software Developer
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div
                      className={`p-2 rounded-lg ${theme.cardBg} ${theme.textMuted}`}
                    >
                      <MapPin size={16} />
                    </div>
                    <span className={theme.text}>India (Remote-Friendly)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div
                      className={`p-2 rounded-lg ${theme.cardBg} ${theme.textMuted}`}
                    >
                      <Mail size={16} />
                    </div>
                    <span className={theme.text}>Contact via LinkedIn</span>
                  </div>
                </div>

                {/* RESUME BUTTON */}
                <div className="mt-8 flex flex-col gap-3">
                  <MagneticButton
                    onClick={() => window.open("/resume.pdf", "_blank")}
                    className={`w-full py-3 rounded-xl ${theme.accentBg} text-white font-bold hover:opacity-90 transition-opacity flex justify-center items-center gap-2`}
                  >
                    Download Resume <ArrowRight size={16} />
                  </MagneticButton>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex justify-center gap-4">
                  <MagneticButton
                    onClick={() =>
                      window.open("https://github.com/NOTSUMIT0", "_blank")
                    }
                    className={`p-3 rounded-full ${theme.btnSecondary} transition-all`}
                  >
                    <Github size={20} />
                  </MagneticButton>

                  <MagneticButton
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/sumit-kumar010/",
                        "_blank",
                      )
                    }
                    className={`p-3 rounded-full ${theme.btnSecondary} transition-all`}
                  >
                    <Linkedin size={20} />
                  </MagneticButton>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 lg:col-span-8 space-y-8">
              <div>
                <h2
                  className={`text-sm font-bold uppercase tracking-widest mb-3 ${theme.accent}`}
                >
                  About Me
                </h2>
                <h3
                  className={`text-3xl md:text-4xl font-bold mb-6 ${theme.text}`}
                >
                  I build efficient, scalable, and intelligent solutions.
                </h3>
                <div
                  className={`space-y-6 text-lg leading-relaxed ${theme.textMuted}`}
                >
                  <p>
                    I am a{" "}
                    <span className={`${theme.text} font-medium`}>
                      Computer Science Engineering student
                    </span>{" "}
                    with a strong interest in cybersecurity, backend systems, 
                    Internet of Things, and software development.
                  </p>

                  <p>
                    I have experience in building real-world projects including an{" "}
                    <span className={`${theme.text} font-medium`}>
                      Intrusion Detection System (IDS)
                    </span>
                    , a student dropout prediction system (FutureGuard), and 
                    LLM-based learning tools.
                  </p>

                  <p>
                    Skilled in{" "}
                    <span className={`${theme.text} font-medium`}>
                      C++, Python, and system-level programming
                    </span>
                    , I am seeking opportunities to apply my technical skills 
                    in solving real-world problems and contributing to 
                    innovative development teams.
                  </p>

                  {isSummary && (
                    <MagneticButton
                      onClick={() => navigate("/about")}
                      className={`mt-4 text-sm font-bold ${theme.accent} flex items-center gap-2`}
                    >
                      Read Full Bio <ArrowRight size={16} />
                    </MagneticButton>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {[
                  { label: "Core Projects", value: "10+" },
                  { label: "Hackathons", value: "5+" },
                  { label: "Tech Stack", value: "Full-Stack \n& CyberSec", valueClass: "text-base lg:text-lg whitespace-pre-line leading-tight" },
                  { label: "Availability", value: "Open" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-2xl border ${theme.cardBorder} ${theme.cardBg} flex flex-col`}
                  >
                    <div className={`${stat.valueClass || 'text-2xl'} font-bold ${theme.text} mb-2`}>
                      {stat.value}
                    </div>
                    <div
                      className={`text-xs uppercase tracking-wider ${theme.textMuted} mt-auto`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
