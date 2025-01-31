import React, { useEffect, useState, useRef } from "react";
import BirdMobile from "../../assets/birdForMobile.svg";
import { useMediaQuery } from "react-responsive";

export const BirdMobo = () => {
  const isSmallMobile = useMediaQuery({ query: "(max-width: 578px)" });
  const [isAnimated, setIsAnimated] = useState(false);
  const birdRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (birdRef.current) {
        if (window.scrollY > 500) {
          setIsAnimated(true);
        } else {
          setIsAnimated(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="bird" className="bird">
      <div className="caption">
        <a>
          <p>Every Brand {isSmallMobile && <br />} Needs Hawksee</p>
        </a>
      </div>
      <div className="bird-container">
        <img
          ref={birdRef}
          style={{
            transform: isAnimated
              ? "translate(-10rem, -50rem) scale(10)"
              : "translate(0, 0) scale(1)",
          }}
          alt=""
          src={BirdMobile}
        />
      </div>
    </section>
  );
};
