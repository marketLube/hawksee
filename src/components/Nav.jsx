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

  return (
    <nav id="nav" className={`headerNav ${isHidden ? "hidden" : ""}`}>
      <img src={logo} alt="logo" className="headerNav-hawlogo" />
      <ul className="headerNav-right">
        <li>About us</li>
        <li>Our Works</li>
        <li>Stories</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
