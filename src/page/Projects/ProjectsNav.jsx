import { useState } from "react";

export default function ProjectsNav() {
  const [activeIndex, setActiveIndex] = useState(0); // Default active item index

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
