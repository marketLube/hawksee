import React, { useEffect, useState } from "react";
import BirdImg from "../../assets/birdImg.svg";

export const Bird = () => {
  const [offset, setOffset] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const smoothScrollTo = (targetPosition) => {
    const duration = 1000;
    const start = window.scrollY;
    const distance = targetPosition - start;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      window.scrollTo(0, start + distance * ease(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setHasScrolled(false);
      }

      if (!hasScrolled && window.scrollY > 50) {
        setHasScrolled(true);
        smoothScrollTo(window.innerHeight * 3.5);
      }

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setOffset(Math.min(scrollY, viewportHeight * 2.7));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <section id="bird" className="bird">
      <img
        className="bird-image"
        alt=""
        src={BirdImg}
        style={{
          transform: `translate(${-offset * 0.5}px, ${
            -offset * 0.315
          }px) scale(${0.8 + offset * 0.001})`,
          transition: "transform 0.6s ease-out",
        }}
      />
    </section>
  );
};
