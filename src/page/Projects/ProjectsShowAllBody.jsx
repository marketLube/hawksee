import React from "react";

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
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738231033/intimate_tiles_tcsjgs.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986962/hawPara1_cc6pa2.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara2_aollbn.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara3_hvxfuk.png",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738039828/WhatsApp_Image_2025-01-19_at_14.13.21_zosyku.jpg",
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1739427751/nationalHospitalHawksee_wniwun.png",
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
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1739427751/nationalHospitalHawksee_wniwun.png",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/thechoiceschoolkochi_2396992194_chpkzz.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/eventiamiddleeast_2397100622_eivznr.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/thechoiceschoolkochi_2396868545_adnwse.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039785/eventiamiddleeast_2397179228_g27agw.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039796/_hawkspot__2396281520_tdk7bn.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039791/dubai_gold_and_diamonds_2396372525_pqsxk8.mp4",
        "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039801/ayumanthra_2395873315_ivlkov.mp4",
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
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s, opacity 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.controls = true;
                    e.target.play();
                    e.target.style.transform = "scale(1.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.controls = false;
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
              onMouseEnter={(e) => {
                e.target.play();
                e.target.controls = true;
                e.target.style.transform = "scale(1.07)";
              }}
              onMouseLeave={(e) => {
                e.target.pause();
                e.target.controls = false;
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
