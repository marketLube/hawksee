import React, { useEffect, useState } from "react";
import BirdImg from "../../assets/birdImg.svg";

export const Bird = () => {
  const [offset, setOffset] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const smoothScrollTo = (targetPosition) => {
    const duration = 1000;
    const start = window.scrollY;
    const distance = targetPosition - start;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      window.scrollTo(0, start + distance * ease(progress));

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
        smoothScrollTo(window.innerHeight * 3.5);
      }

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setOffset(Math.min(scrollY, viewportHeight * 2.7));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

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
        currentScrollTop <= window.innerHeight * 3;

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

  const getScaleMultiplier = () => {
    const width = window.innerWidth;
    if (width <= 575.98) return 0.0024; // smallPhone
    if (width <= 767.98) return 0.002; // phone
    if (width <= 991.98) return 0.0018; // tablets
    if (width <= 1199.98) return 0.0015; // bigTablets
    if (width <= 1399.98) return 0.0012; // desktop
    return 0.001; // bigDesktop and larger
  };

  const getTranslateMultiplier = () => {
    const width = window.innerWidth;
    if (width <= 575.98) return { x: 0.3, y: 0.2 }; // smallPhone
    if (width <= 767.98) return { x: 0.35, y: 0.25 }; // phone
    if (width <= 991.98) return { x: 0.4, y: 0.28 }; // tablets
    if (width <= 1199.98) return { x: 0.45, y: 0.3 }; // bigTablets
    if (width <= 1399.98) return { x: 0.48, y: 0.31 }; // desktop
    return { x: 0.5, y: 0.315 }; // bigDesktop and larger
  };

  return (
    <section id="bird" className="bird">
      <div className="bird-container">
        <img
          className="bird-image"
          alt=""
          src={BirdImg}
          style={{
            transform: `translate(${-offset * getTranslateMultiplier().x}px, ${
              -offset * getTranslateMultiplier().y
            }px) scale(${0.8 + offset * getScaleMultiplier()})`,
            transition: "transform 0.6s ease-out",
          }}
        />
      </div>
    </section>
  );
};
