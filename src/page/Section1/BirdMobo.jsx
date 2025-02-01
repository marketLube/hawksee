import React, { useEffect, useState, useRef } from "react";
import BirdMobile from "../../assets/birdForMobile.svg";
import { useMediaQuery } from "react-responsive";

export const BirdMobo = ({ isNavScrolling }) => {
  const [offset, setOffset] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const birdSectionRef = useRef(null);

  // Initialize window width after component mount to avoid SSR issues
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const smoothScrollTo = (targetPosition) => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      return;
    }

    const duration = 700;
    const start = window.pageYOffset || document.documentElement.scrollTop;
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
    let rafId;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const scrollY =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollY < 50) {
          setHasScrolled(false);
        }

        if (!hasScrolled && scrollY > 50) {
          setHasScrolled(true);
          const targetHeight =
            window.innerWidth <= 1199.98
              ? window.innerHeight * 2.14
              : window.innerHeight * 3.3;

          if (isNavScrolling === null || isNavScrolling === false) {
            smoothScrollTo(targetHeight);
          }
        }

        const viewportHeight = window.innerHeight;
        setOffset(Math.min(scrollY, viewportHeight * 2.7));
      });
    };

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [hasScrolled, isNavScrolling]);

  useEffect(() => {
    let lastScrollTop = 0;
    let rafId;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (!birdSectionRef.current) return;

        const birdRect = birdSectionRef.current.getBoundingClientRect();

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
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
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
    <section id="bird" className="birdMobo" ref={birdSectionRef}>
      <div className="captionMobo">
        <a>
          <p>Every Brand {isSmallMobile && <br />} Needs Hawksee</p>
        </a>
      </div>
      <div className="bird-containerMobo">
        <img
          className="bird-imageMobo"
          alt="bird"
          src={BirdMobile}
          style={birdStyle}
        />
      </div>
    </section>
  );
};
