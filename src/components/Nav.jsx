import React, { useState, useEffect } from "react";
import logo from "./../assets/image.svg";
import LogoTop from "./../assets/HawkseeLogoTop.svg";
import { motion } from "framer-motion";

export const Nav = ({ setIsNavScrolling, isTesterHundered, isMobile }) => {
  const [isHidden, setIsHidden] = useState(false);
  const MOBILE_NAV_ITEMS = [
    {
      id: 0,
      navTitle: "Home",
    },
    {
      id: 1,
      navTitle: "About Us",
    },
    {
      id: 2,
      navTitle: "Services",
    },
    {
      id: 3,
      navTitle: "Our Work",
    },
    {
      id: 4,
      navTitle: "Blogs",
    },
    {
      id: 5,
      navTitle: "Contact",
    },
  ];
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [mobileNavOpen]);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        duration: 0,
        ease: [0, 0, 0, 0],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: [0.8, 0, 0.1, 1],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        duration: 0,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const ulVariant = {
    opened: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: 80,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
  };

  const handleNavItemClick = (navTitle) => {
    if (navTitle === "About Us") {
      window.location.href = "/about";
    } else if (navTitle === "Blogs") {
      window.location.href = "/blogs";
    } else if (navTitle === "Our Work") {
      window.location.hash = "projects";
    } else if (navTitle === "Contact") {
      window.open("https://wa.me/919995000123", "_blank");
    } else if (navTitle === "Services") {
      window.location.href = "#serviceDetails";
    } else {
      const hashValue = navTitle.toLowerCase().trim();
      window.location.hash = `#${hashValue}`;
    }
    setMobileNavOpen(false);
  };

  return (
    <nav
      id="nav"
      className={`headerNav ${isHidden ? "hidden" : ""}`}
      aria-label="Main navigation"
      style={
        !isTesterHundered && isMobile
          ? { transform: "translateY(-100%)" }
          : { transform: "translateY(0)" }
      }
    >
      <div
        onClick={() => {
          window.location.hash = "#home";
          setIsNavScrolling(false);
        }}
        style={{ cursor: "pointer" }}
        role="button"
        aria-label="Go to home page"
      >
        <img
          src={LogoTop}
          alt="Hawksee logo"
          className="headerNav-hawlogo"
          aria-label="Hawksee logo"
        />
      </div>
      <button
        className="hamburger-menu"
        aria-label="Toggle menu"
        onClick={() => setMobileNavOpen(true)}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <motion.div
        variants={mobileMenuVariant}
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="mobile-menu"
      >
        <motion.button
          variants={fadeInVariant}
          onClick={() => setMobileNavOpen(false)}
          className="close-button"
          aria-label="Close menu"
          style={{ backgroundColor: "white" }}
        >
          <div className="close-icon">
            <span className="close-line"></span>
            <span className="close-line"></span>
          </div>
        </motion.button>
        <motion.ul
          variants={ulVariant}
          initial="closed"
          animate={mobileNavOpen ? "opened" : "closed"}
        >
          {MOBILE_NAV_ITEMS.map((navItem) => (
            <motion.li
              variants={liVariant}
              whileTap={{ scale: 0.95 }}
              key={navItem.id}
              onClick={() => handleNavItemClick(navItem.navTitle)}
            >
              <motion.div variants={liVariant}>{navItem.navTitle}</motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
};
