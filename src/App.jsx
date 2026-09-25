import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import themeConfig from "./theme/themeConfig";

import NavBar from "./components/layout/NavBar";
import AnimatedBackground from "./components/layout/AnimatedBackground";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import EmbeddedProjectDetail from "./pages/EmbeddedProjectDetail";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();
  const theme = isDarkMode ? themeConfig.dark : themeConfig.light;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`${theme.bg} min-h-screen`}>
      <AnimatedBackground theme={theme} isDarkMode={isDarkMode} />

      <NavBar
        theme={theme}
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} isDarkMode={isDarkMode} />}
          />
          <Route
            path="/about"
            element={<About theme={theme} isDarkMode={isDarkMode} />}
          />
          <Route
            path="/work"
            element={<Work theme={theme} />}
          />
          <Route
            path="/project/:projectId"
            element={<ProjectDetail theme={theme} isDarkMode={isDarkMode} />}
          />
          <Route
            path="/embedded/:projectId"
            element={<EmbeddedProjectDetail theme={theme} isDarkMode={isDarkMode} />}
          />
        </Routes>
      </main>

      <Footer
        theme={theme}
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
    </div>
  );
}
