import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

const Home = ({ theme, isDarkMode }) => {
  return (
    <>
      <div data-section="Hero">
        <Hero theme={theme} />
      </div>
      <div data-section="About">
        <About
          isSummary
          theme={theme}
          isDarkMode={isDarkMode}
        />
      </div>
      <div data-section="Skills">
        <Skills isSummary theme={theme} />
      </div>
      <div data-section="Projects">
        <Projects isSummary theme={theme} />
      </div>
      <div data-section="Contact">
        <Contact isSummary theme={theme} />
      </div>
    </>
  );
};

export default Home;
