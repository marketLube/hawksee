import { useState } from "react";

export default function ProjectsNav({ activeIndex, setActiveIndex }) {
  const navItems = ["Show All", "Videos", "Social Media"];

  return (
    <ul className="projects-nav">
      {navItems.map((item, index) => (
        <li
          key={index}
          className={activeIndex === index ? "active" : ""}
          onClick={() => setActiveIndex(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
