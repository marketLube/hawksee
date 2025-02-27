import React from "react";

import PojectImg1 from "../../assets/About/hawkgrid.png";
import PojectImg2 from "../../assets/About/hawPara1.png";
import PojectImg3 from "../../assets/About/hawPara2.png";
import PojectImg4 from "../../assets/About/hawPara3.png";
import PojectImg5 from "../../assets/About/nationalhospital.png";
import PojectImg6 from "../../assets/About/intimatetiles.png";

import VDO1 from "../../assets/vdo/vdo1.mp4";
import VDO2 from "../../assets/vdo/vdo2.mp4";
import VDO3 from "../../assets/vdo/vdo3.mp4";
import VDO4 from "../../assets/vdo/vdo4.mp4";
import VDO5 from "../../assets/vdo/vdo5.mp4";
import VDO6 from "../../assets/vdo/vdo6.mp4";
import VDO7 from "../../assets/vdo/vdo7.mp4";

export default function ProjectsShowAllBody({
  isAnimate,
  activeIndex,
  selectedNav,
}) {
  const content = [
    {
      type: "video",
      items: [VDO1, VDO2, VDO3, VDO4, VDO5, VDO6, VDO7],
      thumbnails: [
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409867/thum1_mdvzi7.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409872/thumb3_auq2g7.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409869/thum2_obznoi.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409866/thumb6_s3yzvs.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409867/thumb4_agsgnu.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409866/thumb5_jz7kak.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409866/thumb7_jkphur.png",
      ],
    },
    {
      type: "social",
      items: [
        PojectImg6,
        PojectImg2,
        PojectImg3,
        PojectImg4,
        PojectImg1,
        PojectImg5,
      ],
    },
    {
      type: "all",
      items: [
        PojectImg6,
        PojectImg2,
        PojectImg3,
        PojectImg4,
        PojectImg1,
        PojectImg5,
        VDO1,
        VDO2,
        VDO3,
        VDO4,
        VDO5,
        VDO6,
        VDO7,
      ],
      thumbnails: [
        "",
        "",
        "",
        "",
        "",
        "",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409867/thum1_mdvzi7.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409872/thumb3_auq2g7.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409869/thum2_obznoi.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409866/thumb6_s3yzvs.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409867/thumb4_agsgnu.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409866/thumb5_jz7kak.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409866/thumb7_jkphur.png",
      ],
    },
  ];

  const renderContent = () => {
    if (activeIndex === 0) return content[2].items;
    if (activeIndex === 1) return content[0].items;
    if (activeIndex === 2) return content[1].items;
    return content[2].items;
  };

  return (
    <div className="projects-show" aria-label="Projects show all body section">
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
          aria-label={`Project item ${i + 1}`}
        >
          {activeIndex === 0 ? (
            <>
              {val.endsWith(".mp4") ? (
                <video
                  src={val}
                  aria-label={`Project video ${i + 1}`}
                  poster={content[2]?.thumbnails[i]}
                  controls
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s, opacity 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.play();
                    e.target.style.transform = "scale(1.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.style.transform = "scale(1)";
                    e.target.style.opacity = "1";
                  }}
                />
              ) : (
                <img
                  src={val}
                  alt={val}
                  aria-label={`Project image ${i + 1}`}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s, opacity 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.opacity = "1";
                  }}
                />
              )}
            </>
          ) : activeIndex === 1 ? (
            <video
              src={val}
              poster={content[0]?.thumbnails[i]}
              aria-label={`Project video ${i + 1}`}
              controls
              onMouseEnter={(e) => {
                e.target.play();
                e.target.style.transform = "scale(1.07)";
              }}
              onMouseLeave={(e) => {
                e.target.pause();
                e.target.style.transform = "scale(1)";
                e.target.style.opacity = "1";
              }}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
                transition: "transform 0.3s, opacity 0.3s",
              }}
            />
          ) : (
            <img
              src={val}
              alt={val}
              aria-label={`Project image ${i + 1}`}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
                transition: "transform 0.3s, opacity 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.opacity = "1";
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
