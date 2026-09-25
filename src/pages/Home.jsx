import Hero from "../components/sections/Hero";
import SelectedWork from "../components/sections/SelectedWork";
import SkillsOrbit from "../components/sections/SkillsOrbit";

const Home = ({ theme, isDarkMode }) => {
  return (
    <>
      <div data-section="Hero">
        <Hero theme={theme} isDarkMode={isDarkMode} />
      </div>
      <div data-section="SelectedWork">
        <SelectedWork />
      </div>
      <div data-section="SkillsOrbit">
        <SkillsOrbit theme={theme} />
      </div>
    </>
  );
};

export default Home;
