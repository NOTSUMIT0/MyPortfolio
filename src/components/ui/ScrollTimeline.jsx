import { useEffect, useState, useRef, useCallback } from "react";

const SECTIONS_MAP = {
  Hero: "Overview",
  About: "About",
  Skills: "Skills",
  Projects: "Projects",
  Contact: "Contact",
};
const SECTIONS = Object.keys(SECTIONS_MAP);

const TRACK_RIGHT = 6;
const TRACK_TOP = 12;
const TRACK_BOTTOM = 12;
const BAR_MIN_HEIGHT = 4;
const BAR_WIDTH_DEFAULT = 4;
const BAR_WIDTH_ACTIVE = 10;

const ScrollTimeline = ({ isDarkMode, showBlob = false }) => {
  const [activeSection, setActiveSection] = useState("Hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [needsScroll, setNeedsScroll] = useState(true);

  const activeSectionRef = useRef("Hero");
  const hideTimerRef = useRef(null);

  // DOM refs for real-time updates (bypass React render cycle)
  const barRef = useRef(null);
  const dotRef = useRef(null);
  const blobAnchorRef = useRef(null);
  const fractionRef = useRef(0);

  // Drag refs
  const dragStartY = useRef(0);
  const dragStartFraction = useRef(0);

  /**
   * Directly set the bar height, dot position, and blob anchor
   * on the DOM — no React state, no re-render, instant.
   */
  const applyFraction = useCallback((fraction) => {
    fractionRef.current = fraction;
    const trackH = window.innerHeight - TRACK_TOP - TRACK_BOTTOM;
    const barH = Math.max(BAR_MIN_HEIGHT, fraction * trackH);

    if (barRef.current) {
      barRef.current.style.height = `${barH}px`;
    }
    if (dotRef.current) {
      const dotSize = dotRef.current.offsetWidth || 6;
      dotRef.current.style.top = `${barH - dotSize / 2}px`;
    }
    if (blobAnchorRef.current) {
      blobAnchorRef.current.style.top = `${TRACK_TOP + barH}px`;
    }
  }, []);

  // ── Resize / body-size tracking ──
  useEffect(() => {
    const sync = () => {
      const scrollH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      setNeedsScroll(scrollH > winH + 20);
      // Re-apply current fraction with new dimensions
      applyFraction(fractionRef.current);
    };

    window.addEventListener("resize", sync);
    const ro = new ResizeObserver(sync);
    ro.observe(document.body);

    return () => {
      window.removeEventListener("resize", sync);
      ro.disconnect();
    };
  }, [applyFraction]);

  // ── Section detection for blobs ──
  const detectSection = useCallback(() => {
    const mid = window.innerHeight * 0.4;
    let found = SECTIONS[0];
    for (const name of SECTIONS) {
      const el = document.querySelector(`[data-section="${name}"]`);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= mid) found = name;
    }
    return found;
  }, []);

  // ── Scroll listener (hot path — direct DOM, no setState for position) ──
  useEffect(() => {
    const onScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const fraction = Math.min(1, Math.max(0, window.scrollY / maxScroll));

      // Real-time DOM update
      applyFraction(fraction);

      // Check if page became scrollable
      setNeedsScroll(document.documentElement.scrollHeight > window.innerHeight + 20);

      if (!showBlob) return;

      const section = detectSection();
      if (section !== activeSectionRef.current) {
        activeSectionRef.current = section;
        setActiveSection(section);
      }

      setIsScrolling(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial sync
    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const initFraction = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    applyFraction(initFraction);

    if (showBlob) {
      const section = detectSection();
      activeSectionRef.current = section;
      setActiveSection(section);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [showBlob, detectSection, applyFraction]);

  // ── Drag start ──
  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartFraction.current = fractionRef.current;

    setIsScrolling(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    document.body.style.userSelect = "none";
  };

  // ── Drag move / end ──
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e) => {
      e.preventDefault();
      const trackH = window.innerHeight - TRACK_TOP - TRACK_BOTTOM;
      const deltaY = e.clientY - dragStartY.current;
      const deltaFraction = deltaY / trackH;
      const newFraction = Math.min(
        1,
        Math.max(0, dragStartFraction.current + deltaFraction)
      );

      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      window.scrollTo(0, newFraction * maxScroll);

      setIsScrolling(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = "";
      hideTimerRef.current = setTimeout(() => setIsScrolling(false), 1000);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  // ── Click-on-track to jump ──
  const handleTrackClick = (e) => {
    if (e.target !== e.currentTarget) return;

    const trackRect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - trackRect.top;
    const trackH = trackRect.height;
    const newFraction = Math.min(1, Math.max(0, clickY / trackH));

    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    window.scrollTo({ top: newFraction * maxScroll, behavior: "smooth" });
  };

  // ── Derived values (only for hover/glow styling, not position) ──
  const isActive = isHovered || isDragging;
  const barWidth = isActive ? BAR_WIDTH_ACTIVE : BAR_WIDTH_DEFAULT;

  return (
    <>
      {/* ── Track (hit area + background groove) ── */}
      {needsScroll && (
        <div
          onClick={handleTrackClick}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => {
            if (!isDragging) setIsHovered(false);
          }}
          style={{
            position: "fixed",
            right: TRACK_RIGHT,
            top: TRACK_TOP,
            width: 20,
            height: `calc(100vh - ${TRACK_TOP + TRACK_BOTTOM}px)`,
            zIndex: 60,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Background groove — visible on hover */}
          <div
            style={{
              position: "absolute",
              top: 0,
              width: barWidth,
              height: "100%",
              borderRadius: 999,
              backgroundColor: isDarkMode
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.06)",
              opacity: isActive ? 1 : 0,
              transition: "opacity 0.3s ease, width 0.2s ease",
              pointerEvents: "none",
            }}
          />

          {/* Filled timeline bar — grows from top, NO height transition */}
          <div
            ref={barRef}
            onPointerDown={handlePointerDown}
            style={{
              position: "absolute",
              top: 0,
              width: barWidth,
              height: BAR_MIN_HEIGHT, // initial; updated by applyFraction
              borderRadius: 999,
              backgroundColor: "#ea580c",
              boxShadow: isActive
                ? "0 0 16px 2px rgba(234, 88, 12, 0.55)"
                : "0 0 8px 1px rgba(234, 88, 12, 0.15)",
              transition: "width 0.2s ease, box-shadow 0.25s ease",
              cursor: isDragging ? "grabbing" : "grab",
              willChange: "height",
            }}
          />

          {/* Bright dot at the tip */}
          <div
            ref={dotRef}
            style={{
              position: "absolute",
              top: 0, // updated by applyFraction
              width: isActive ? 10 : 6,
              height: isActive ? 10 : 6,
              borderRadius: "50%",
              backgroundColor: "#fb923c",
              boxShadow: isActive
                ? "0 0 12px 3px rgba(251, 146, 60, 0.7)"
                : "0 0 6px 1px rgba(251, 146, 60, 0.3)",
              transition:
                "width 0.2s ease, height 0.2s ease, box-shadow 0.25s ease",
              pointerEvents: "none",
              willChange: "top",
            }}
          />
        </div>
      )}

      {/* ── Section blobs (home page only) ── */}
      {showBlob && needsScroll && (
        <div
          ref={blobAnchorRef}
          className="fixed z-50 pointer-events-none"
          style={{
            right: TRACK_RIGHT + 22,
            top: TRACK_TOP + BAR_MIN_HEIGHT, // initial; updated by applyFraction
            willChange: "top",
          }}
        >
          {SECTIONS.map((sectionId) => {
            const isActiveBlob = isScrolling && activeSection === sectionId;

            return (
              <div
                key={sectionId}
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: `translateY(-50%) scale(${isActiveBlob ? 1 : 0.6})`,
                  padding: "10px 22px",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ea580c",
                  backgroundColor: isDarkMode
                    ? "rgba(20, 20, 20, 0.95)"
                    : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(16px)",
                  boxShadow: isDarkMode
                    ? "0 4px 24px rgba(0,0,0,0.45)"
                    : "0 4px 24px rgba(0,0,0,0.07)",
                  opacity: isActiveBlob ? 1 : 0,
                  transition:
                    "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease",
                  transformOrigin: "right center",
                  whiteSpace: "nowrap",
                }}
              >
                {SECTIONS_MAP[sectionId]}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ScrollTimeline;
