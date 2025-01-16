import React, { useState, useEffect } from "react";
import logo from "./../assets/image.svg";

export const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const multiplier = window.innerWidth < 768 ? 0.9 : 2;
      const viewportHeight = window.innerHeight * multiplier;

      if (currentScrollY > viewportHeight) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      <div className="navigation">
        <input
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          type="checkbox"
          className="navigation__checkbox"
          id="navi__toggle"
          aria-label="Toggle navigation"
        />
        <label
          htmlFor="navi__toggle"
          className="navigation__btn"
          aria-controls="navigationMenu"
        >
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <nav
          className="navigation__nav"
          id="navigationMenu"
          aria-label="Main navigation"
        >
          <ul className="navigation__list">
            <li className="navigation__item">
              <a
                href="#home"
                onClick={() => {
                  scrollToSection("about");
                  setIsChecked(false);
                }}
              >
                About us
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#service"
                onClick={() => {
                  scrollToSection("works");
                  setIsChecked(false);
                }}
              >
                Our Works
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#portfolio"
                onClick={() => {
                  scrollToSection("stories");
                  setIsChecked(false);
                }}
              >
                Stories
              </a>
            </li>
            <li className="navigation__item">
              <a
                onClick={() => {
                  scrollToSection("contact");
                  setIsChecked(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};
