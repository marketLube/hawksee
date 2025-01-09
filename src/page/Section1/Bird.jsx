import React, { useEffect, useState } from "react";
import BirdImg from "../../assets/birdImg.svg";

export const Bird = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setOffset(Math.min(scrollY, viewportHeight * 2.7));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bird">
      <img
        className="bird-image"
        alt=""
        src={BirdImg}
        style={{
          transform: `translate(${-offset * 0.5}px, ${
            -offset * 0.315
          }px) scale(${0.85 + offset * 0.001})`,
          transition: "transform 0.6s ease-out",
        }}
      />
    </section>
  );
};
