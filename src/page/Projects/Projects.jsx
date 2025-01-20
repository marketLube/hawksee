import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Projects() {
  const location = useLocation();
  const [isAnmate, setIsAnmate] = useState(false);

  useEffect(() => {
    // Function to check if #projects is the active target
    const checkHash = () => {
      if (window.location.hash === "#projects") {
        setIsAnmate(true);
      } else setIsAnmate(false);
    };

    // Add hashchange listener
    window.addEventListener("hashchange", checkHash);

    // Initial check in case the hash is already set
    checkHash();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  return (
    <div
      id="projects"
      className="projects"
      style={
        isAnmate
          ? { height: "500vh", backgroundColor: "rgba(0, 0, 0, 0.5)" }
          : { height: "0rem", backgroundColor: "transparent" }
      }
    >
      <div
        className="projects_body"
        style={
          isAnmate
            ? { transform: "translateY(0)" }
            : { transform: "translateY(150vh)" }
        }
      >
        <h2 className="projects__title">Projects</h2>
      </div>
    </div>
  );
}
