import { ArrowRight, Github, Linkedin } from "lucide-react";
import Reveal from "../components/ui/Reveal";
import MagneticButton from "../components/ui/MagneticButton";
import EXPERIENCE_DATA from "../data/experience";

const EDUCATION_DATA = [
  {
    degree: "B.Tech in Computer Science Engineering (IOT with Cyber Security including Blockchain)",
    institution: "Chandigarh Group of Colleges (CGC), Landran",
    period: "2023 - Present",
    desc: "Focused on software development, data structures, algorithms, and applied machine learning. Building real-world projects including IDS and prediction systems.",
  },
  {
    degree: "12th Standard",
    institution: "KV 33 FAD Dappar, Mohali, Punjab",
    period: "2022 - 2023",
    desc: "Completed Senior Secondary education.",
  },
  {
    degree: "10th Standard",
    institution: "KV 33 FAD Dappar, Mohali, Punjab",
    period: "2020 - 2021",
    desc: "Completed Secondary education.",
  }
];

// eslint-disable-next-line no-unused-vars
const AboutPage = ({ theme, isDarkMode }) => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* ===== HERO / BIO ===== */}
        <Reveal>
          <h2
            className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${theme.accent}`}
          >
            About Me
          </h2>
          <h3
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-10 ${theme.text}`}
          >
            The <span className={`${theme.accent} italic`}>Engineer</span>{" "}
            Behind the Systems.
          </h3>

          <div
            className={`space-y-6 text-lg leading-relaxed ${theme.textMuted}`}
          >
            <p>
              I am a{" "}
              <span className={`${theme.text} font-medium`}>
                Computer Science Engineering student
              </span>{" "}
              with a strong interest in cybersecurity, machine learning, 
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
          </div>

          {/* SOCIAL + RESUME ROW */}
          <div className="flex items-center gap-4 pt-10">
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

            <MagneticButton
              onClick={() => window.open("/resume.pdf", "_blank")}
              className={`ml-auto px-6 py-3 rounded-full ${theme.btnSecondary} font-bold transition-all flex items-center gap-2 text-sm`}
            >
              Download Resume <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </Reveal>

        {/* ===== EXPERIENCE ===== */}
        <Reveal>
          <div className="mt-24">
            <h3
              className={`text-3xl font-bold pb-4 border-b ${theme.cardBorder} mb-10 ${theme.text}`}
            >
              Experience
            </h3>
            <div className="space-y-12">
              {EXPERIENCE_DATA.map((job, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h4 className={`text-xl font-bold ${theme.text}`}>
                      {job.role}
                    </h4>
                    <span
                      className={`text-sm font-bold uppercase tracking-wider ${theme.accent} flex-shrink-0`}
                    >
                      {job.period}
                    </span>
                  </div>
                  <p className={`text-sm mb-4 ${theme.textMuted}`}>
                    {job.company}
                  </p>
                  <ul className="space-y-2">
                    {job.desc
                      .split(". ")
                      .filter(Boolean)
                      .map((point, j) => (
                        <li
                          key={j}
                          className={`flex items-start gap-3 ${theme.textMuted}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-sm ${theme.accentBg} mt-2.5 flex-shrink-0`}
                          />
                          <span>
                            {point.endsWith(".") ? point : `${point}.`}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ===== EDUCATION ===== */}
        <Reveal>
          <div className="mt-24">
            <h3
              className={`text-3xl font-bold pb-4 border-b ${theme.cardBorder} mb-10 ${theme.text}`}
            >
              Education
            </h3>
            <div className="space-y-12">
              {EDUCATION_DATA.map((edu, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h4 className={`text-xl font-bold ${theme.text}`}>
                      {edu.degree}
                    </h4>
                    <span
                      className={`text-sm font-bold uppercase tracking-wider ${theme.accent} flex-shrink-0`}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p className={`text-sm mb-4 ${theme.textMuted}`}>
                    {edu.institution}
                  </p>
                  <p className={`leading-relaxed ${theme.textMuted}`}>
                    {edu.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutPage;
