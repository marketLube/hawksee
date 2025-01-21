import React from "react";

const arr = ["one", "two", "three", "four", "five"];

export default function ProjectsShowAllBody({ isAnimate, activeIndex }) {
  const content = [
    { type: "video", items: ["Video 1", "Video 2"] },
    { type: "social", items: ["Image 1", "Image 2"] },
    { type: "all", items: ["one", "two", "three", "four", "five"] },
  ];

  const renderContent = () => {
    if (activeIndex === 1) return content[0].items;
    if (activeIndex === 2) return content[1].items;
    return content[2].items;
  };

  return (
    <div className="projects-show">
      {renderContent().map((val, i) => (
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
