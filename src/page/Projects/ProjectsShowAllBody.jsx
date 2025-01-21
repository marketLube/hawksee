import React from "react";

const arr = ["one", "two", "three", "four", "five"];

export default function ProjectsShowAllBody({ isAnimate }) {
  return (
    <div className="projects-show">
      {arr.map((val, i) => (
        <div
          className="projects-show-item"
          style={{
            transform: isAnimate
              ? `translateY(0rem)`
              : `translateY(${i * 30}rem)`,
            opacity: isAnimate ? 1 : 0,
          }}
          key={i}
        >
          {val}
        </div>
      ))}
    </div>
  );
}
