import { useEffect, useState, useCallback, useRef } from "react";
import ProjectsNav from "./ProjectsNav";
import ProjectsShowAllBody from "./ProjectsShowAllBody";
import { useHash } from "./useHash";
import { FiArrowLeft } from "react-icons/fi";

const Projects = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedNav, setSelectedNav] = useState("Show All");

  const contentRef = useRef(null);

  useHash({ setIsAnimate });

  // Handle wheel scrolling
  useEffect(() => {
    if (!isAnimate) return;

    const initialScrollY = window.scrollY;

    const handleWheel = (e) => {
      if (contentRef.current.scrollHeight > contentRef.current.clientHeight) {
        // Allow default scrolling if content is scrollable
        e.preventDefault();
        window.scrollTo(0, initialScrollY);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isAnimate]);

  // Handle touch/drag scrolling
  const handleTouchStart = (e) => {
    if (!isAnimate) return;
    setIsDragging(true);
    setStartY(e.touches ? e.touches[0].clientY : e.clientY);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !isAnimate) return;
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = startY - currentY;
    setStartY(currentY);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const progressPercentage = (scrollPosition / (window.innerHeight * 4)) * 100;

  // Reset state when component unmounts
  useEffect(() => {
    const handlePopState = () => {
      setIsAnimate(false);
      setScrollPosition(0);
      setIsDragging(false);
      setStartY(0);
      setActiveIndex(0);
      setSelectedNav("Show All");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      setIsAnimate(false);
      setScrollPosition(0);
      setIsDragging(false);
      setStartY(0);
      setActiveIndex(0);
      setSelectedNav("Show All");
    };
  }, []);

  return (
    <div
      id="projects"
      className={`projects ${isAnimate ? "projects--active" : ""}`}
      style={{
        height: isAnimate ? "500vh" : "0",
        backgroundColor: isAnimate ? "rgba(0, 0, 0, 0.5)" : "transparent",
        pointerEvents: isAnimate ? "auto" : "none",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      <div
        className="projects__body"
        style={{
          transform: isAnimate
            ? `translateY(calc(-${progressPercentage}% + 0vh))`
            : "translateY(150vh)",
          pointerEvents: "auto",
        }}
        ref={contentRef}
      >
        <div className="projects__content">
          <button
            className="back-button"
            onClick={() => window.history.back()}
            style={{
              borderRadius: "50%",
              background: "transparent",
              border: "1px solid white",
              cursor: "pointer",

              zIndex: 100,
              width: "40px",
              height: "40px",
            }}
          >
            <FiArrowLeft size={20} color="white" />
          </button>
          <h2 className="projects__title">Projects</h2>
          <ProjectsNav
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setSelectedNav={setSelectedNav}
          />
          <ProjectsShowAllBody
            isAnimate={isAnimate}
            activeIndex={activeIndex}
            selectedNav={selectedNav}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
