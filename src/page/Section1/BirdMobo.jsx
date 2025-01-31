import React, { useEffect, useState, useRef } from "react";
import BirdMobile from "../../assets/birdForMobile.svg";
import { useMediaQuery } from "react-responsive";

export const BirdMobo = () => {
  const isSmallMobile = useMediaQuery({ query: "(max-width: 578px)" });
  const birdRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (birdRef.current) {
        if (window.scrollY > 100 && window.scrollY < 500) {
          birdRef.current.classList.add("animate-bird");
          birdRef.current.classList.remove("animate-bird-reverse");
          // Smooth scroll to the next section
          const nextSection =
            document.querySelector("#bird").nextElementSibling;
          if (nextSection) {
            nextSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else if (window.scrollY < 100) {
          birdRef.current.classList.remove("animate-bird");
          birdRef.current.classList.add("animate-bird-reverse");
        }
      }
    };

    // Throttle the scroll event to prevent too many calls
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <section id="bird" className="bird">
      <div className="caption">
        <a>
          <p>Every Brand {isSmallMobile && <br />} Needs Hawksee</p>
        </a>
      </div>
      <div className="bird-container">
        <img ref={birdRef} className="bird-image" alt="" src={BirdMobile} />
      </div>
    </section>
  );
};
