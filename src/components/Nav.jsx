import React, { useState, useEffect } from "react";
import logo from "./../assets/image.svg";

export const Nav = ({ setIsNavScrolling }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const multiplier = window.innerWidth < 768 ? 0.1 : 1.9;
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

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isChecked);
  }, [isChecked]);

  useEffect(() => {
    if (isChecked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isChecked]);

  const scrollToSection = (sectionId) => {
    if (sectionId !== "about") {
      setIsNavScrolling(true);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    } else {
      console.error(`Element with ID ${sectionId} not found`);
    }
    setTimeout(() => setIsNavScrolling(false), 1000);
  };

  return (
    <nav
      id="nav"
      className={`headerNav ${isHidden ? "hidden" : ""}`}
      aria-label="Main navigation"
    >
      <img
        src={logo}
        alt="Hawksee logo"
        className="headerNav-hawlogo"
        aria-label="Hawksee logo"
      />
      <ul className="headerNav-right" aria-label="Navigation links">
        <li
          onClick={() => scrollToSection("about")}
          aria-label="Navigate to About us section"
        >
          About us
        </li>
        <li
          onClick={() => scrollToSection("works")}
          aria-label="Navigate to Our Works section"
        >
          Our Works
        </li>
        <li>
          <a
            href="https://wa.me/919995000123"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "3rem",
            }}
            aria-label="Contact us via WhatsApp"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="navigation" aria-label="Navigation menu">
        <input
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          type="checkbox"
          className="navigation__checkbox"
          id="navi__toggle"
          aria-label="Toggle navigation"
        />
        <label
          htmlFor="navi__toggle"
          className="navigation__btn"
          aria-controls="navigationMenu"
          aria-label="Toggle navigation menu"
        >
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <nav
          className="navigation__nav"
          id="navigationMenu"
          aria-label="Main navigation"
        >
          <ul className="navigation__list" aria-label="Main navigation links">
            <li className="navigation__item">
              <a
                href="#about"
                onClick={() => {
                  scrollToSection("about");
                  setIsChecked(false);
                }}
                aria-label="Navigate to About us section"
              >
                About us
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#works"
                onClick={() => {
                  scrollToSection("works");
                  setIsChecked(false);
                }}
                aria-label="Navigate to Our Works section"
              >
                Our Works
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="https://wa.me/919995000123"
                target="_blank"
                onClick={() => {
                  scrollToSection("contact");
                  setIsChecked(false);
                }}
                aria-label="Contact us via WhatsApp"
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
