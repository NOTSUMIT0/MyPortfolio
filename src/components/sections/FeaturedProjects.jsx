import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Reveal from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";

const FeaturedProjects = ({ projects, theme }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [slideshowIndices, setSlideshowIndices] = useState([0, 0, 0]);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  const slideshowTimer = useRef(null);
  const hoverThresholdTimer = useRef(null);
  const navigate = useNavigate();

  // Take first 3 projects
  const featured = projects.slice(0, 3);

  useEffect(() => {
    if (hoveredIndex !== null) {
      // Start threshold timer
      hoverThresholdTimer.current = setTimeout(() => {
        setIsSlideshowActive(true);
      }, 1500); // 1.5s threshold before slideshow starts
    } else {
      setIsSlideshowActive(false);
      if (hoverThresholdTimer.current) clearTimeout(hoverThresholdTimer.current);
      if (slideshowTimer.current) clearInterval(slideshowTimer.current);
    }

    return () => {
      if (hoverThresholdTimer.current) clearTimeout(hoverThresholdTimer.current);
      if (slideshowTimer.current) clearInterval(slideshowTimer.current);
    };
  }, [hoveredIndex]);

  useEffect(() => {
    if (isSlideshowActive && hoveredIndex !== null) {
      const project = featured[hoveredIndex];
      const gallery = project.gallery || [project.image];
      
      if (gallery.length > 1) {
        slideshowTimer.current = setInterval(() => {
          setSlideshowIndices(prev => {
            const next = [...prev];
            next[hoveredIndex] = (next[hoveredIndex] + 1) % gallery.length;
            return next;
          });
        }, 3000); // 3s per slide
      }
    } else {
      if (slideshowTimer.current) clearInterval(slideshowTimer.current);
    }
    
    return () => {
      if (slideshowTimer.current) clearInterval(slideshowTimer.current);
    };
  }, [isSlideshowActive, hoveredIndex]);

  // Reset indices when not hovering
  useEffect(() => {
    if (hoveredIndex === null) {
      setSlideshowIndices([0, 0, 0]);
    }
  }, [hoveredIndex]);

  const getGridTemplate = () => {
    // Default: P1 takes 60% width, P2/P3 split right side
    let cols = "1.5fr 1fr";
    let rows = "1.2fr 1fr";

    if (hoveredIndex === 0) {
      cols = "3fr 1fr";
    } else if (hoveredIndex === 1) {
      cols = "1fr 3fr";
      rows = "3fr 1fr";
    } else if (hoveredIndex === 2) {
      cols = "1fr 3fr";
      rows = "1fr 3fr";
    }

    return { gridTemplateColumns: cols, gridTemplateRows: rows };
  };

  const handleProjectClick = (project) => {
    if (project.id) {
      navigate(`/project/${project.id}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="mb-24">
      <Reveal>
        <h2 className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${theme.accent}`}>
          Selections
        </h2>
        <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme.text}`}>
          Featured <span className={`${theme.accent} italic`}>Projects</span>
        </h3>
        <p className={`text-lg mb-12 ${theme.textMuted} max-w-xl`}>
          A curated selection of my most impactful work, ranging from enterprise ML platforms 
          to modular desktop systems.
        </p>
      </Reveal>

      <div 
        className={`h-[500px] md:h-[650px] grid gap-0 transition-all duration-700 ease-in-out overflow-hidden rounded-3xl border ${theme.cardBorder}`}
        style={getGridTemplate()}
      >
        {/* Project 1 - Main (Left Side) */}
        {featured[0] && (
          <div
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleProjectClick(featured[0])}
            className={`relative row-span-2 overflow-hidden cursor-pointer group border-r ${theme.cardBorder}`}
          >
            <ProjectContent 
              project={featured[0]} 
              isActive={hoveredIndex === 0} 
              slideIndex={slideshowIndices[0]}
              isSlideshowActive={isSlideshowActive && hoveredIndex === 0}
              theme={theme}
              onClick={() => handleProjectClick(featured[0])}
            />
          </div>
        )}

        {/* Project 2 - Top Right */}
        {featured[1] && (
          <div
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleProjectClick(featured[1])}
            className={`relative overflow-hidden cursor-pointer group border-b ${theme.cardBorder}`}
          >
            <ProjectContent 
              project={featured[1]} 
              isActive={hoveredIndex === 1} 
              slideIndex={slideshowIndices[1]}
              isSlideshowActive={isSlideshowActive && hoveredIndex === 1}
              theme={theme}
              onClick={() => handleProjectClick(featured[1])}
              isSmall
            />
          </div>
        )}

        {/* Project 3 - Bottom Right */}
        {featured[2] && (
          <div
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleProjectClick(featured[2])}
            className={`relative overflow-hidden cursor-pointer group`}
          >
            <ProjectContent 
              project={featured[2]} 
              isActive={hoveredIndex === 2} 
              slideIndex={slideshowIndices[2]}
              isSlideshowActive={isSlideshowActive && hoveredIndex === 2}
              theme={theme}
              onClick={() => handleProjectClick(featured[2])}
              isSmall
            />
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectContent = ({ project, isActive, slideIndex, isSlideshowActive, theme, isSmall, onClick }) => {
  const gallery = project.gallery || [project.image];
  
  return (
    <>
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        {gallery.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              slideIndex === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`${project.title} slide ${idx}`}
              className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${
                isActive ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
        {/* Dark Overlay */}
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${isActive ? 'opacity-40' : 'opacity-60'}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      {/* Text Content */}
      <div className={`absolute inset-0 z-10 p-6 md:p-10 flex flex-col justify-end transition-all duration-500 ${isActive ? 'translate-y-0' : 'translate-y-2'}`}>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, isActive ? 5 : 2).map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20">
              {tag}
            </span>
          ))}
        </div>
        
        <h4 className={`font-bold text-white transition-all duration-500 ${isSmall ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'} ${isActive ? 'mb-4' : 'mb-2'}`}>
          {project.title}
        </h4>
        
        <p className={`text-white/70 max-w-lg transition-all duration-500 line-clamp-3 ${isActive ? 'opacity-100 h-auto mb-6' : 'opacity-0 h-0 overflow-hidden'}`}>
          {project.desc}
        </p>

        <MagneticButton 
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className={`w-fit flex items-center gap-2 text-white font-bold text-sm transition-opacity duration-500 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          View Case Study <ArrowUpRight size={18} className="text-orange-500" />
        </MagneticButton>
      </div>

      {/* Progress bar for slideshow */}
      {isSlideshowActive && gallery.length > 1 && (
        <div className="absolute top-0 left-0 right-0 h-1 z-20 flex gap-1 p-4">
          {gallery.map((_, idx) => (
            <div key={idx} className="flex-1 h-full bg-white/20 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-white transition-all duration-[3000ms] linear ${slideIndex === idx ? 'w-full' : 'w-0'}`}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturedProjects;
