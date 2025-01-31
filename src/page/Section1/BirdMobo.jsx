// import React, { useEffect, useState, useRef } from "react";
// import BirdMobile from "../../assets/birdForMobile.svg";
// import { useMediaQuery } from "react-responsive";

// export const BirdMobo = ({ isNavScrolling }) => {
//   const [offset, setOffset] = useState(0);
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [scrollDirection, setScrollDirection] = useState("down");
//   const birdSectionRef = useRef(null);

//   const smoothScrollTo = (targetPosition) => {
//     const duration = 700;
//     const start = window.scrollY;
//     const distance = targetPosition - start;
//     let startTime = null;

//     const animation = (currentTime) => {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const progress = Math.min(timeElapsed / duration, 1);

//       const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

//       window.scrollTo(0, start + distance * easeInOutQuad(progress));

//       if (timeElapsed < duration) {
//         requestAnimationFrame(animation);
//       }
//     };

//     requestAnimationFrame(animation);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       requestAnimationFrame(() => {
//         if (window.scrollY < 50) {
//           setHasScrolled(false);
//         }

//         if (!hasScrolled && window.scrollY > 50) {
//           setHasScrolled(true);
//           const targetHeight =
//             window.innerWidth <= 1199.98
//               ? window.innerHeight * 2
//               : window.innerHeight * 3.3;

//           if (isNavScrolling === null || isNavScrolling === false) {
//             smoothScrollTo(targetHeight);
//           }
//         }

//         const scrollY = window.scrollY;
//         const viewportHeight = window.innerHeight;
//         setOffset(Math.min(scrollY, viewportHeight * 2.7));
//       });
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasScrolled, isNavScrolling]);

//   useEffect(() => {
//     let lastScrollTop = 0;
//     const handleScroll = () => {
//       const currentScrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;
//       const birdRect = birdSectionRef.current.getBoundingClientRect();

//       const isInBirdSection =
//         birdRect.top <= 0 &&
//         birdRect.bottom >= 0 &&
//         currentScrollTop <=
//           (window.innerWidth <= 1199.98
//             ? window.innerHeight * 2
//             : window.innerHeight * 3);

//       if (currentScrollTop < lastScrollTop) {
//         setScrollDirection("up");
//         if (isInBirdSection) {
//           window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//           });
//         }
//       } else {
//         setScrollDirection("down");
//       }
//       lastScrollTop = currentScrollTop;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize, { passive: true });
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const getScaleMultiplier = () => {
//     const width = window.visualViewport?.width || window.innerWidth;
//     if (width <= 575.98) return 0.05;
//     if (width <= 767.98) return 0.05;
//     if (width <= 991.98) return 0.08;
//     if (width <= 1199.98) return 0.015;
//     if (width <= 1399.98) return 0.0012;
//     return 0.001;
//   };

//   const getTranslateMultiplier = () => {
//     const width = window.innerWidth;
//     if (width <= 575.98) return { x: 0.5, y: 5 };
//     if (width <= 767.98) return { x: 0.1, y: 10 };
//     if (width <= 991.98) return { x: 0.3, y: 0.28 };
//     if (width <= 1199.98) return { x: 0.45, y: 0.3 };
//     if (width <= 1399.98) return { x: 0.48, y: 0.31 };
//     return { x: 0.5, y: 0.315 };
//   };

//   const isSmallMobile = useMediaQuery({ query: "(max-width: 578px)" });

//   const birdStyle = {
//     transform: `translate3d(${-offset * getTranslateMultiplier().x}px, ${
//       -offset * getTranslateMultiplier().y
//     }px, 0) scale(${
//       (windowWidth <= 767.98 ? 2 : 0.8) + offset * getScaleMultiplier()
//     })`,
//     transformOrigin: "center center",
//     transition: `${
//       scrollDirection === "up"
//         ? "transform 0.5s cubic-bezier(0.01, 0.62, 0.38, 1.02)"
//         : "transform 1.3s cubic-bezier(0.49, 0.41, 0.1, 1.02)"
//     }`,
//     WebkitTransform: `translate3d(${-offset * getTranslateMultiplier().x}px, ${
//       -offset * getTranslateMultiplier().y
//     }px, 0) scale(${
//       (windowWidth <= 767.98 ? 2 : 0.8) + offset * getScaleMultiplier()
//     })`,
//     WebkitTransformOrigin: "center center",
//     WebkitTransition: `${
//       scrollDirection === "up"
//         ? "-webkit-transform 0.5s cubic-bezier(0.01, 0.62, 0.38, 1.02)"
//         : "-webkit-transform 1.3s cubic-bezier(0.49, 0.41, 0.1, 1.02)"
//     }`,
//     willChange: "transform",
//   };

//   return (
//     <section id="bird" className="bird" ref={birdSectionRef}>
//       <div className="caption">
//         <a>
//           <p>Every Brand {isSmallMobile && <br />} Needs Hawksee</p>
//         </a>
//       </div>
//       <div className="bird-container">
//         <img className="bird-image" alt="" src={BirdMobile} style={birdStyle} />
//       </div>
//     </section>
//   );
// };
import React, { useEffect, useState, useRef, useCallback } from "react";
import BirdMobile from "../../assets/birdForMobile.svg";
import { useMediaQuery } from "react-responsive";

export const BirdMobo = ({ isNavScrolling }) => {
  const [offset, setOffset] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollDirection, setScrollDirection] = useState("down");
  const birdSectionRef = useRef(null);
  const lastScrollTop = useRef(0);
  const rafId = useRef(null);

  const smoothScrollTo = useCallback((targetPosition) => {
    const duration = 700;
    const start = window.pageYOffset;
    const distance = targetPosition - start;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      window.scrollTo(0, start + distance * easeInOutQuad(progress));

      if (timeElapsed < duration) {
        rafId.current = requestAnimationFrame(animation);
      }
    };

    rafId.current = requestAnimationFrame(animation);
  }, []);

  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const scrollY = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const currentScrollTop = scrollY;
      const birdRect = birdSectionRef.current?.getBoundingClientRect();

      // Update scroll direction
      if (currentScrollTop < lastScrollTop.current) {
        setScrollDirection("up");
        if (
          birdRect &&
          birdRect.top <= 0 &&
          birdRect.bottom >= 0 &&
          currentScrollTop <=
            (window.innerWidth <= 1199.98
              ? viewportHeight * 2
              : viewportHeight * 3)
        ) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      } else {
        setScrollDirection("down");
      }
      lastScrollTop.current = currentScrollTop;

      // Handle initial scroll behavior
      if (scrollY < 50) {
        setHasScrolled(false);
      }

      if (!hasScrolled && scrollY > 50) {
        setHasScrolled(true);
        const targetHeight =
          window.innerWidth <= 1199.98
            ? viewportHeight * 2
            : viewportHeight * 3.3;

        if (isNavScrolling === null || isNavScrolling === false) {
          smoothScrollTo(targetHeight);
        }
      }

      setOffset(Math.min(scrollY, viewportHeight * 2.7));
    });
  }, [hasScrolled, isNavScrolling, smoothScrollTo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.documentElement);

    return () => resizeObserver.disconnect();
  }, []);

  const getScaleMultiplier = useCallback(() => {
    const width = window.visualViewport?.width || window.innerWidth;
    if (width <= 575.98) return 0.05;
    if (width <= 767.98) return 0.05;
    if (width <= 991.98) return 0.08;
    if (width <= 1199.98) return 0.015;
    if (width <= 1399.98) return 0.0012;
    return 0.001;
  }, []);

  const getTranslateMultiplier = useCallback(() => {
    const width = window.innerWidth;
    if (width <= 575.98) return { x: 0.5, y: 5 };
    if (width <= 767.98) return { x: 0.1, y: 10 };
    if (width <= 991.98) return { x: 0.3, y: 0.28 };
    if (width <= 1199.98) return { x: 0.45, y: 0.3 };
    if (width <= 1399.98) return { x: 0.48, y: 0.31 };
    return { x: 0.5, y: 0.315 };
  }, []);

  const isSmallMobile = useMediaQuery({ query: "(max-width: 578px)" });

  const birdStyle = {
    transform: `translate3d(${-offset * getTranslateMultiplier().x}px, ${
      -offset * getTranslateMultiplier().y
    }px, 0) scale(${
      (windowWidth <= 767.98 ? 2 : 0.8) + offset * getScaleMultiplier()
    })`,
    transformOrigin: "center center",
    transition: `${
      scrollDirection === "up"
        ? "transform 0.5s cubic-bezier(0.01, 0.62, 0.38, 1.02)"
        : "transform 1.3s cubic-bezier(0.49, 0.41, 0.1, 1.02)"
    }`,
    WebkitTransform: `translate3d(${-offset * getTranslateMultiplier().x}px, ${
      -offset * getTranslateMultiplier().y
    }px, 0) scale(${
      (windowWidth <= 767.98 ? 2 : 0.8) + offset * getScaleMultiplier()
    })`,
    WebkitTransformOrigin: "center center",
    WebkitTransition: `${
      scrollDirection === "up"
        ? "-webkit-transform 0.5s cubic-bezier(0.01, 0.62, 0.38, 1.02)"
        : "-webkit-transform 1.3s cubic-bezier(0.49, 0.41, 0.1, 1.02)"
    }`,
    willChange: "transform",
  };

  return (
    <section id="bird" className="bird" ref={birdSectionRef}>
      <div className="caption">
        <a>
          <p>Every Brand {isSmallMobile && <br />} Needs Hawksee</p>
        </a>
      </div>
      <div className="bird-container">
        <img className="bird-image" alt="" src={BirdMobile} style={birdStyle} />
      </div>
    </section>
  );
};
