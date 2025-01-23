import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link, useLocation } from "react-router-dom";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";

import haw from "../../assets/About/hawkgrid.png";

export const DoubleLineReels = () => {
  const images = [
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/cc1_qo8ln2.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/ccc2_qyszou.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/ccc3_hb1jbq.jpg",
    // "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/cc1_qo8ln2.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc2_onpzpf.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc3_mchddg.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947128/cc4_olsgfg.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc5_cmbv2q.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc6_guqslz.jpg",
    haw,
  ];

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
        : 5.6,
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
      slideChange: (swiper) => {
        console.log("Slide changed to: ", swiper.activeIndex);
      },
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
    // Function to check if #projects is the active target
    const checkHash = () => {
      if (window.location.hash === "#projects") {
        setIsSmall(true);
      } else setIsSmall(false);
    };

    // Add hashchange listener
    window.addEventListener("hashchange", checkHash);

    // Initial check in case the hash is already set
    checkHash();

    // Cleanup listener on unmount
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
    >
      <ScrollTrigger
        onEnter={() => setAnimate(true)}
        onExit={() => setAnimate(false)}
      >
        <h1
          className="logos-title"
          style={{
            transform: animate ? "translateY(0rem)" : "translateY(10rem)",
            transition: "transform 0.6s",
          }}
        >
          Projects
        </h1>
      </ScrollTrigger>
      <div className="logos-rot">
        <div className="logo-slide">
          {images.map((image, index) => (
            <img key={`image-${index}`} src={image} alt={`Slide ${index}`} />
          ))}
          {images.map((image, index) => (
            <img
              key={`image-duplicate-${index}`}
              src={image}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
        <div className="video-slide">
          <Swiper
            modules={[Autoplay]}
            {...settings}
            direction="horizontal"
            ease="linear"
            reverseDirection={true}
            className="doubleline-slide"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={`video-${index}`}>
                <video
                  src={video}
                  muted
                  alt={`Story ${index + 1}`}
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

      <div className="buttondivPortfolio">
        <Button onClick={handleClick}>
          <a href="#projects">
            View All <FiArrowUpRight />
          </a>
        </Button>
      </div>
    </section>
  );
};
