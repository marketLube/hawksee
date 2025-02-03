import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";

export const DoubleLineReels = () => {
  const images = [
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738231033/intimate_tiles_tcsjgs.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986962/hawPara1_cc6pa2.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara2_aollbn.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara3_hvxfuk.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738039828/WhatsApp_Image_2025-01-19_at_14.13.21_zosyku.jpg",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738231033/intimate_tiles_tcsjgs.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986962/hawPara1_cc6pa2.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara2_aollbn.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara3_hvxfuk.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738039828/WhatsApp_Image_2025-01-19_at_14.13.21_zosyku.jpg",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738231033/intimate_tiles_tcsjgs.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986962/hawPara1_cc6pa2.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara2_aollbn.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara3_hvxfuk.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738039828/WhatsApp_Image_2025-01-19_at_14.13.21_zosyku.jpg",
  ];

  const videos = [
    "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/thechoiceschoolkochi_2396992194_chpkzz.mp4",
    "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/eventiamiddleeast_2397100622_eivznr.mp4",
    "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039784/thechoiceschoolkochi_2396868545_adnwse.mp4",
    "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039785/eventiamiddleeast_2397179228_g27agw.mp4",
    "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039796/_hawkspot__2396281520_tdk7bn.mp4",
    "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039791/dubai_gold_and_diamonds_2396372525_pqsxk8.mp4",
    "https://res.cloudinary.com/ddp7f64w0/video/upload/v1738039801/ayumanthra_2395873315_ivlkov.mp4",
  ];

  const thumbnails = [
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409867/thum1_mdvzi7.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409872/thumb3_auq2g7.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409869/thum2_obznoi.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409866/thumb6_s3yzvs.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409867/thumb4_agsgnu.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409866/thumb5_jz7kak.png",
    "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738409866/thumb7_jkphur.png",
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    slidesPerView:
      windowWidth < 480
        ? 1.5
        : windowWidth < 768
        ? 2
        : windowWidth < 1024
        ? 3
        : windowWidth < 1400
        ? 4
        : windowWidth < 1600
        ? 4.1
        : 5,
    spaceBetween: 0,
    freeMode: true,
    freeModeMomentum: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 2000,

    on: {
      init: (swiper) => {
        swiper.autoplay.start();
      },
      slideChange: (swiper) => {},
    },
    snapOnRelease: false,
  };

  const [isSmall, setIsSmall] = useState(false);

  const handleClick = () => {
    window.location.hash = "#projects";
    window.scrollTo({
      top: window.scrollY + 100,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#projects") {
        setIsSmall(true);
      } else setIsSmall(false);
    };

    window.addEventListener("hashchange", checkHash);

    checkHash();

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  return (
    <section
      id="works"
      className="logos"
      ref={sectionRef}
      style={isSmall ? { transform: "scale(0.8)" } : { transform: "scale(1)" }}
      aria-label="Projects section showcasing logos and videos"
    >
      <ScrollTrigger
        onEnter={() => setAnimate(true)}
        onExit={() => setAnimate(false)}
      >
        <h1 className="logos-title" aria-label="Projects title">
          Projects
        </h1>
      </ScrollTrigger>
      <div className="logos-rot" aria-label="Rotating logos section">
        <div className="logo-slide" aria-label="Logo slide section">
          {images.map((image, index) => (
            <img
              key={`image-${index}`}
              src={image}
              alt={`Slide ${index}`}
              aria-label={`Image slide ${index}`}
            />
          ))}
          {images.map((image, index) => (
            <img
              key={`image-duplicate-${index}`}
              src={image}
              alt={`Slide ${index}`}
              aria-label={`Image slide ${index}`}
            />
          ))}
        </div>
        <div className="video-slide" aria-label="Video slide section">
          <Swiper
            modules={[Autoplay]}
            {...settings}
            direction="horizontal"
            ease="linear"
            reverseDirection={true}
            className="doubleline-slide"
          >
            {videos.map((video, index) => (
              <SwiperSlide
                key={`video-${index}`}
                aria-label={`Video slide ${index}`}
              >
                <video
                  src={video}
                  muted
                  aria-label={`Story ${index + 1}`}
                  poster={thumbnails[index]}
                  onClick={(e) => (e.target.muted = false)}
                  onMouseEnter={(e) => {
                    e.target.play();
                    e.target.controls = true;
                    e.target
                      .closest(".doubleline-slide")
                      .swiper.autoplay.stop();
                  }}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.controls = false;
                    e.target
                      .closest(".doubleline-slide")
                      .swiper.autoplay.start();
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="buttondivPortfolio" aria-label="Button section">
        <Button onClick={handleClick} aria-label="View all button">
          <a href="#projects" aria-label="View all link">
            View All <FiArrowUpRight />
          </a>
        </Button>
      </div>
    </section>
  );
};
