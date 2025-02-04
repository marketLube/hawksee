import React, { useEffect, useState, useRef } from "react";

export const Bird = ({ isNavScrolling }) => {
  const [offset, setOffset] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollDirection, setScrollDirection] = useState("down");
  const birdSectionRef = useRef(null);

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

          if (isNavScrolling === null || isNavScrolling === false) {
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
    const width = window.visualViewport?.width || window.innerWidth;
    if (width <= 575.98) return 0.05;
    if (width <= 767.98) return 0.05;
    if (width <= 991.98) return 0.08;
    if (width <= 1199.98) return 0.015;
    if (width <= 1399.98) return 0.0012;
    return 0.001;
  };

  const getTranslateMultiplier = () => {
    const width = window.innerWidth;
    if (width <= 575.98) return { x: 0.5, y: 5 };
    if (width <= 767.98) return { x: 0.1, y: 10 };
    if (width <= 991.98) return { x: 0.3, y: 0.28 };
    if (width <= 1199.98) return { x: 0.45, y: 0.3 };
    if (width <= 1399.98) return { x: 0.48, y: 0.31 };
    return { x: 0.5, y: 0.315 };
  };

  return (
    <section
      id="bird"
      className="bird"
      ref={birdSectionRef}
      aria-label="Bird section"
    >
      <div className="caption" aria-label="Caption for the bird section">
        <h1>Every Brand Needs Hawksee</h1>
      </div>

      <img
        className="bird-image"
        alt="A stylized bird representing Hawksee"
        src={
          "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738574941/birdImg_jaomgz.svg"
        }
        aria-label="Stylized bird representing Hawksee"
        style={{
          transform: `translate3d(${-offset * getTranslateMultiplier().x}px, ${
            -offset * getTranslateMultiplier().y
          }px, 0) scale(${
            (windowWidth <= 767.98 ? 2 : 0.8) + offset * getScaleMultiplier()
          })`,
          transformOrigin: "center center",
          transition: `${
            scrollDirection === "up"
              ? "transform 0.5s cubic-bezier(.73,.58,.83,.67)"
              : "transform 1.3s cubic-bezier(.49,.41,.1,1.02)"
          }`,
          willChange: "transform",
        }}
      />
    </section>
  );
};
