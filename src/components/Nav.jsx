import React, { useState, useEffect } from "react";
import logo from "./../assets/HawkseeLogo.svg";

export const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight * 2;

      if (currentScrollY > viewportHeight) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav id="nav" className={`headerNav ${isHidden ? "hidden" : ""}`}>
      <img src={logo} alt="logo" className="headerNav-hawlogo" />
      <ul className="headerNav-right">
        <li onClick={() => scrollToSection("about")}>About us</li>
        <li onClick={() => scrollToSection("works")}>Our Works</li>
        <li onClick={() => scrollToSection("stories")}>Stories</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
};
