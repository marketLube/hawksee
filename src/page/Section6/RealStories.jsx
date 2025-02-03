import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const RealStories = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const videos = [
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939269/thechoiceschoolkochi_2396992194_xj1zmk.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939269/eventiamiddleeast_2397100622_imwrzh.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939270/thechoiceschoolkochi_2396868545_kku9re.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939270/eventiamiddleeast_2397179228_yo5biz.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939482/_hawkspot__2396281520_uvzavh.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939483/dubai_gold_and_diamonds_2396372525_zku1kp.mp4",
    "https://res.cloudinary.com/dcys2vbpv/video/upload/v1736939487/ayumanthra_2395873315_tbdjib.mp4",
  ];

  const thumbnails = [
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028864/thum1_pw3c4d.png",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028865/thumb6_eewq7i.png",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028865/thum2_tdb0bv.png",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028865/thumb6_eewq7i.png",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028865/thumb4_wwwcks.png",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737028872/thumb5_orazze.png",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737030315/thumb7_pbqfyo.png",
  ];

  const settings = {
    slidesPerView: 1.3,
    spaceBetween: 0,
    autoplay: false,
    loop: true,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
  };

  const isFullAlign = settings.slidesPerView === 1.3;

  return (
    <section
      id="stories"
      className="realstories"
      aria-label="Real stories section"
    >
      <h1 className="realstories-title" aria-label="Real Stories title">
        Real Stories
      </h1>
      {isMobile ? (
        <Swiper className="realstories-slide" {...settings}>
          {videos.map((video, index) => (
            <SwiperSlide
              key={`video-${index}`}
              aria-label={`Story ${index + 1}`}
            >
              <video
                src={video}
                muted
                aria-label={`Story ${index + 1}`}
                poster={thumbnails[index]}
                onClick={(e) => (e.target.muted = false)}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
                controls
                className={isFullAlign ? "full-align" : ""}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          className="realstories-rot"
          aria-label="Real stories rotation section"
        >
          <div
            className="realstories-slide"
            aria-label="Real stories slide section"
          >
            {videos.map((video, index) => (
              <video
                key={`video-${index}`}
                src={video}
                muted
                alt={`Story ${index + 1}`}
                aria-label={`Story ${index + 1}`}
                poster={thumbnails[index]}
                onClick={(e) => (e.target.muted = false)}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
            ))}
            {videos.map((video, index) => (
              <video
                key={`video-duplicate-${index}`}
                src={video}
                alt={`Story ${index + 1}`}
                aria-label={`Story ${index + 1}`}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
            ))}
            {videos.map((video, index) => (
              <video
                key={`video-duplicate-${index}`}
                src={video}
                alt={`Story ${index + 1}`}
                aria-label={`Story ${index + 1}`}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
            ))}
            {videos.map((video, index) => (
              <video
                key={`video-duplicate-${index}`}
                src={video}
                alt={`Story ${index + 1}`}
                aria-label={`Story ${index + 1}`}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
