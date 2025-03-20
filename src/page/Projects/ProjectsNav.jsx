import React, { useState } from "react";

export default function ProjectsNav({
  activeIndex,
  setActiveIndex,
  setSelectedNav,
}) {
  const navItems = [
    "Show All",
    "Reels",
    "Perfomance Marketing",
    "Branding",
    "Creatives",
    "Website",
  ];

  return (
    <ul className="projects-nav" aria-label="Projects navigation section">
      {navItems.map((item, index) => (
        <li
          key={index}
          className={activeIndex === index ? "active" : ""}
          onClick={() => {
            setActiveIndex(index);
            setSelectedNav(item);
          }}
          aria-label={`Navigate to ${item} section`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
