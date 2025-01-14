import React, { useState, useEffect } from "react";
import logo from "./../assets/HawkseeLogo.svg";

export const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

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
                // href="https://wa.me/9876543210"
                // target="_blank"
                // rel="noopener noreferrer"
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
