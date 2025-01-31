import React from "react";
import haw from "../../assets/About/hawkgrid.png";

const arr = ["one", "two", "three", "four", "five"];

export default function ProjectsShowAllBody({
  isAnimate,
  activeIndex,
  selectedNav,
}) {
  const content = [
    {
      type: "video",
      items: [
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/thechoiceschoolkochi_2396992194_chpkzz.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/eventiamiddleeast_2397100622_eivznr.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/thechoiceschoolkochi_2396868545_adnwse.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039785/eventiamiddleeast_2397179228_g27agw.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039796/_hawkspot__2396281520_tdk7bn.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039791/dubai_gold_and_diamonds_2396372525_pqsxk8.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039801/ayumanthra_2395873315_ivlkov.mp4",
      ],
      thumbnails: [
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028864/thum1_pw3c4d.png",
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028865/thumb6_eewq7i.png",
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028865/thum2_tdb0bv.png",
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028865/thumb6_eewq7i.png",
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028865/thumb4_wwwcks.png",
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028872/thumb5_orazze.png",
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737030315/thumb7_pbqfyo.png",
      ],
    },
    {
      type: "social",
      items: [
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738231033/intimate_tiles_tcsjgs.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986962/hawPara1_cc6pa2.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara2_aollbn.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara3_hvxfuk.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738039828/WhatsApp_Image_2025-01-19_at_14.13.21_zosyku.jpg",
      ],
    },
    {
      type: "all",
      items: [
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738231033/intimate_tiles_tcsjgs.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986962/hawPara1_cc6pa2.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara2_aollbn.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara3_hvxfuk.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738039828/WhatsApp_Image_2025-01-19_at_14.13.21_zosyku.jpg",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/thechoiceschoolkochi_2396992194_chpkzz.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/eventiamiddleeast_2397100622_eivznr.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/thechoiceschoolkochi_2396868545_adnwse.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039785/eventiamiddleeast_2397179228_g27agw.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039796/_hawkspot__2396281520_tdk7bn.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039791/dubai_gold_and_diamonds_2396372525_pqsxk8.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039801/ayumanthra_2395873315_ivlkov.mp4",
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
    <div className="projects-show">
      {renderContent().map((val, i) => (
        <div
          className="projects-show-item"
          style={{
            // transition: "transform 1s cubic-bezier(0, 1.08, 0.69, 0.97)",
            transform: isAnimate
              ? `translateY(0rem)`
              : `translateY(${i * 30}rem)`,
            opacity: isAnimate ? 1 : 0,
          }}
          key={i}
        >
          {activeIndex === 0 ? (
            <>
              {val.endsWith(".mp4") ? (
                <video
                  src={val}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  onMouseEnter={(e) => {
                    e.target.controls = true;
                  }}
                  onMouseLeave={(e) => {
                    e.target.controls = false;
                  }}
                />
              ) : (
                <img
                  src={val}
                  alt={val}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              )}
            </>
          ) : activeIndex === 1 ? (
            <video
              src={val}
              onMouseEnter={(e) => {
                e.target.controls = true;
              }}
              onMouseLeave={(e) => {
                e.target.controls = false;
              }}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <img
              src={val}
              alt={val}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
