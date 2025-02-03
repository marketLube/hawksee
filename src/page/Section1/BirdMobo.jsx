import React, { useEffect, useState, useRef } from "react";
import BirdMobile from "../../assets/birdForMobile.svg";
import { useMediaQuery } from "react-responsive";

export const BirdMobo = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const birdSectionRef = useRef(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const birdStyle = {
    transform: "scale(1.2)",
    transformOrigin: "center center",
    willChange: "transform",
    WebkitBackfaceVisibility: "hidden",
    WebkitPerspective: 1000,
  };

  const isSmallMobile = useMediaQuery({ query: "(max-width: 578px)" });

  return (
    <section
      id="bird"
      className="birdMobo"
      ref={birdSectionRef}
      aria-label="Bird section"
    >
      <div className="captionMobo" aria-label="Caption for the bird section">
        <a>
          <p>Every Brand {isSmallMobile && <br />} Needs Hawksee</p>
        </a>
      </div>
      <div
        className="bird-containerMobo"
        aria-label="Container for the bird image"
      >
        <img
          className="bird-imageMobo"
          alt="A stylized bird representing Hawksee"
          src={BirdMobile}
          style={birdStyle}
          aria-label="Stylized bird representing Hawksee"
        />
      </div>
    </section>
  );
};
