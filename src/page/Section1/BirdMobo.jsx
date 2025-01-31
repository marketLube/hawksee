import React, { useEffect, useState, useRef } from "react";
import BirdMobile from "../../assets/birdForMobile.svg";
import { useMediaQuery } from "react-responsive";

export const BirdMobo = ({ setIsAnimated, isAnimated }) => {
  const isSmallMobile = useMediaQuery({ query: "(max-width: 578px)" });
  const birdRef = useRef(null);
  const [animateBird, setAnimateBird] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (birdRef.current) {
        if (window.scrollY > 300) {
          setAnimateBird(true);
          setIsAnimated(true);
        } else {
          setAnimateBird(false);
          setIsAnimated(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsAnimated]);

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
          className="bird-image"
          alt=""
          src={BirdMobile}
          style={
            animateBird
              ? {
                  transform: "translate(-10rem, -50rem) scale(10)",
                  transition:
                    "transform 0.5s cubic-bezier(0.79, 0.07, 1, 0.69)",
                }
              : {
                  transform: "translateY(0) scale(1)",
                  transition: "transform 1s ease-in-out",
                }
          }
        />
      </div>
    </section>
  );
};
