import React, { useEffect, useState } from "react";
import BirdImg from "../../assets/birdImg.svg";
import BirdMobile from "../../assets/birdForMobile.svg";
import { Link } from "react-router-dom";

export const Bird = ({ isNavScrolling }) => {
  const [offset, setOffset] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollDirection, setScrollDirection] = useState("down");

  const smoothScrollTo = (targetPosition) => {
    const duration = 700;
    const start = window.scrollY;
    const distance = targetPosition - start;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      window.scrollTo(0, start + distance * easeInOutQuad(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother animations on iOS
      requestAnimationFrame(() => {
        if (window.scrollY < 50) {
          setHasScrolled(false);
        }

        if (!hasScrolled && window.scrollY > 50) {
          setHasScrolled(true);
          const targetHeight =
            window.innerWidth <= 1199.98
              ? window.innerHeight * 2
              : window.innerHeight * 3.3;

          if (isNavScrolling === null) {
            smoothScrollTo(targetHeight);
          } else if (isNavScrolling === true) {
            // Hide logic when isNavScrolling is true
            // Add your hide logic here
          } else if (isNavScrolling === false) {
            smoothScrollTo(targetHeight);
          }
        }

        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        setOffset(Math.min(scrollY, viewportHeight * 2.7));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled, isNavScrolling]);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const birdSection = document.getElementById("bird");
      const birdRect = birdSection.getBoundingClientRect();

      const isInBirdSection =
        birdRect.top <= 0 &&
        birdRect.bottom >= 0 &&
        currentScrollTop <=
          (window.innerWidth <= 1199.98
            ? window.innerHeight * 2
            : window.innerHeight * 3);

      if (currentScrollTop < lastScrollTop) {
        setScrollDirection("up");
        if (isInBirdSection) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      } else {
        setScrollDirection("down");
      }
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScaleMultiplier = () => {
    const width = window.innerWidth;
    // if (width <= 575.98) return 0.05; // smallPhone
    if (width <= 767.98) return 0.05; // phone, reduced scaling
    if (width <= 991.98) return 0.08; // tablets
    if (width <= 1199.98) return 0.015; // bigTablets
    if (width <= 1399.98) return 0.0012; // desktop
    return 0.001;
  };

  const getTranslateMultiplier = () => {
    const width = window.innerWidth;

    if (width <= 575.98) return { x: 0.5, y: 5 }; // smallCard
    if (width <= 767.98) return { x: 0.1, y: 10 };
    if (width <= 991.98) return { x: 0.3, y: 0.28 }; // tablets
    if (width <= 1199.98) return { x: 0.45, y: 0.3 }; // bigTablets
    if (width <= 1399.98) return { x: 0.48, y: 0.31 }; // desktop
    return { x: 0.5, y: 0.315 }; // bigDesktop and larger
  };

  return (
    <section id="bird" className="bird">
      <div className="caption">
        <a>
          <p>Every Brand {windowWidth <= 575.98 && <br />} Needs Hawksee</p>
        </a>
      </div>
      <div className="bird-container">
        <img
          className="bird-image"
          alt=""
          src={windowWidth <= 767.98 ? BirdMobile : BirdImg}
          style={{
            transform: `translate(${-offset * getTranslateMultiplier().x}px, ${
              -offset * getTranslateMultiplier().y
            }px) scale(${
              (windowWidth <= 767.98 ? 2 : 0.8) + offset * getScaleMultiplier()
            })`,
            transition: `${
              scrollDirection === "up"
                ? "transform 0s cubic-bezier(.07,.69,.49,.75)"
                : "transform 1.3s cubic-bezier(.49,.41,.1,1.02)"
            }`,
          }}
        />
      </div>
    </section>
  );
};
