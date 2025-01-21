import { useEffect, useState, useCallback } from "react";
import ProjectsNav from "./ProjectsNav";
import ProjectsShowAllBody from "./ProjectsShowAllBody";
import { useHash } from "./useHash";

const Projects = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  useHash({ setIsAnimate });

  const handleScrolling = useCallback((deltaY) => {
    const maxScroll = window.innerHeight * 4; // 400vh for scrollable area
    setScrollPosition((prev) => {
      const newPosition = prev + deltaY;
      return Math.max(0, Math.min(newPosition, maxScroll));
    });
  }, []);

  // Handle wheel scrolling
  useEffect(() => {
    if (!isAnimate) return;

    const initialScrollY = window.scrollY;

    const handleWheel = (e) => {
      e.preventDefault();
      handleScrolling(e.deltaY * 0.5); // Adjust multiplier for speed
      window.scrollTo(0, initialScrollY);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isAnimate, handleScrolling]);

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
    handleScrolling(deltaY * 0.5);
    setStartY(currentY);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const progressPercentage = (scrollPosition / (window.innerHeight * 4)) * 100;

  return (
    <div
      id="projects"
      className={`projects ${isAnimate ? "projects--active" : ""}`}
      style={{
        height: isAnimate ? "500vh" : "0",
        backgroundColor: isAnimate ? "rgba(0, 0, 0, 0.5)" : "transparent",
        pointerEvents: isAnimate ? "auto" : "none",
        cursor: isDragging ? "grabbing" : "grab",
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
      >
        <div className="projects__content">
          <h2 className="projects__title">Projects</h2>
          <ProjectsNav />
          <ProjectsShowAllBody isAnimate={isAnimate} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
