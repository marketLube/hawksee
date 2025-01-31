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
      <div className="bird-container"></div>
    </section>
  );
};
