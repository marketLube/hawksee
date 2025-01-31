import React, { useEffect, useState, useRef } from "react";
import BirdMobile from "../../assets/birdForMobile.svg";
import { useMediaQuery } from "react-responsive";

// export const BirdMobo = ({ isNavScrolling }) => {
//   const [offset, setOffset] = useState(0);
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);
//   const [scrollDirection, setScrollDirection] = useState("down");
//   const birdSectionRef = useRef(null);

//   // Initialize window width after component mount to avoid SSR issues
//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//   }, []);

//   const smoothScrollTo = (targetPosition) => {
//     const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

//     if (isSafari) {
//       window.scrollTo({ top: targetPosition, behavior: "smooth" });
//       return;
//     }

//     const duration = 700;
//     const start = window.pageYOffset || document.documentElement.scrollTop;
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
//     let rafId;

//     const handleScroll = () => {
//       // Cancel any existing animation frame
//       if (rafId) {
//         cancelAnimationFrame(rafId);
//       }

//       rafId = requestAnimationFrame(() => {
//         const scrollY =
//           window.pageYOffset || document.documentElement.scrollTop;

//         if (scrollY < 50) {
//           setHasScrolled(false);
//         }

//         if (!hasScrolled && scrollY > 50) {
//           setHasScrolled(true);
//           const targetHeight =
//             window.innerWidth <= 1199.98
//               ? window.innerHeight * 2
//               : window.innerHeight * 3.3;

//           if (isNavScrolling === null || isNavScrolling === false) {
//             smoothScrollTo(targetHeight);
//           }
//         }

//         const viewportHeight = window.innerHeight;
//         setOffset(Math.min(scrollY, viewportHeight * 2.7));
//       });
//     };

//     // Use passive scroll listener for better performance
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (rafId) {
//         cancelAnimationFrame(rafId);
//       }
//     };
//   }, [hasScrolled, isNavScrolling]);

//   useEffect(() => {
//     let lastScrollTop = 0;
//     let rafId;

//     const handleScroll = () => {
//       if (rafId) {
//         cancelAnimationFrame(rafId);
//       }

//       rafId = requestAnimationFrame(() => {
//         const currentScrollTop =
//           window.pageYOffset || document.documentElement.scrollTop;

//         if (!birdSectionRef.current) return;

//         const birdRect = birdSectionRef.current.getBoundingClientRect();

//         const isInBirdSection =
//           birdRect.top <= 0 &&
//           birdRect.bottom >= 0 &&
//           currentScrollTop <=
//             (window.innerWidth <= 1199.98
//               ? window.innerHeight * 2
//               : window.innerHeight * 3);

//         if (currentScrollTop < lastScrollTop) {
//           setScrollDirection("up");
//           if (isInBirdSection) {
//             window.scrollTo({
//               top: 0,
//               behavior: "smooth",
//             });
//           }
//         } else {
//           setScrollDirection("down");
//         }
//         lastScrollTop = currentScrollTop;
//       });
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (rafId) {
//         cancelAnimationFrame(rafId);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize, { passive: true });
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const getScaleMultiplier = () => {
//     if (!windowWidth) return 0.001; // Default value
//     if (windowWidth <= 575.98) return 0.05;
//     if (windowWidth <= 767.98) return 0.05;
//     if (windowWidth <= 991.98) return 0.08;
//     if (windowWidth <= 1199.98) return 0.015;
//     if (windowWidth <= 1399.98) return 0.0012;
//     return 0.001;
//   };

//   const getTranslateMultiplier = () => {
//     if (!windowWidth) return { x: 0.5, y: 0.315 }; // Default values
//     if (windowWidth <= 575.98) return { x: 0.5, y: 5 };
//     if (windowWidth <= 767.98) return { x: 0.1, y: 10 };
//     if (windowWidth <= 991.98) return { x: 0.3, y: 0.28 };
//     if (windowWidth <= 1199.98) return { x: 0.45, y: 0.3 };
//     if (windowWidth <= 1399.98) return { x: 0.48, y: 0.31 };
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
//     transition: `transform ${
//       scrollDirection === "up" ? "0.5s" : "1.3s"
//     } cubic-bezier(0.49, 0.41, 0.1, 1.02)`,
//     willChange: "transform",
//     // Add hardware acceleration
//     WebkitBackfaceVisibility: "hidden",
//     WebkitPerspective: 1000,
//     WebkitTransform: `translate3d(${-offset * getTranslateMultiplier().x}px, ${
//       -offset * getTranslateMultiplier().y
//     }px, 0) scale(${
//       (windowWidth <= 767.98 ? 2 : 0.8) + offset * getScaleMultiplier()
//     })`,
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
// };import React, { useEffect, useState } from "react";
import BirdImg from "../../assets/birdImg.svg";
// import BirdMobile from "../../assets/birdForMobile.svg";
import { Link } from "react-router-dom";

export const BirdMobo = ({ isNavScrolling }) => {
  const [offset, setOffset] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      if (window.scrollY < 50) {
        setHasScrolled(false);
      }

      if (!hasScrolled && window.scrollY > 50) {
        setHasScrolled(true);
        const targetHeight =
          window.innerWidth <= 1199.98
            ? window.innerHeight * 1.3
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
    };

    window.addEventListener("scroll", handleScroll);
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
            ? window.innerHeight
            : window.innerHeight * 3);

      if (currentScrollTop < lastScrollTop && isInBirdSection) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScaleMultiplier = () => {
    const width = window.innerWidth;
    if (width <= 575.98) return 0.1; // smallPhone
    if (width <= 767.98) return 0.05; // phone, reduced scaling
    if (width <= 991.98) return 0.08; // tablets
    if (width <= 1199.98) return 0.015; // bigTablets
    if (width <= 1399.98) return 0.0012; // desktop
    return 0.001; // bigDesktop and larger
  };

  const getTranslateMultiplier = () => {
    const width = window.innerWidth;
    if (width <= 575.98) return { x: 1, y: 11 }; // smallCard
    if (width <= 767.98) return { x: 0.1, y: 10 };
    if (width <= 991.98) return { x: 0.3, y: 0.28 }; // tablets
    if (width <= 1199.98) return { x: 0.45, y: 0.3 }; // bigTablets
    if (width <= 1399.98) return { x: 0.48, y: 0.31 }; // desktop
    return { x: 0.5, y: 0.315 }; // bigDesktop and larger
  };

  return (
    <section id="bird" className="bird">
      <div className="caption">
        <a href="#projects">
          <p>Every Brand Needs Hawksee</p>
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
              (windowWidth <= 767.98 ? 1.9 : 0.8) +
              offset * getScaleMultiplier()
            })`,
            transition: "transform 0.6s ease-out",
          }}
        />
      </div>
    </section>
  );
};
