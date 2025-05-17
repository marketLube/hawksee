import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState, useEffect } from "react";
import ScrollTrigger from "react-scroll-trigger";
import VDO1 from "../../assets/vdo/vdo1.mp4";
import VDO2 from "../../assets/vdo/vdo2.mp4";
import VDO3 from "../../assets/vdo/vdo3.mp4";
import VDO4 from "../../assets/vdo/vdo4.mp4";
import VDO5 from "../../assets/vdo/vdo5.mp4";
import VDO6 from "../../assets/vdo/vdo6.mp4";
import VDO7 from "../../assets/vdo/vdo7.mp4";
import VDO8 from "../../assets/vdo/VDO8.mp4";
import VDO9 from "../../assets/vdo/VDO9.mp4";
import VDO10 from "../../assets/vdo/VDO10.mp4";
import VDO11 from "../../assets/vdo/vdo11.mp4";
import VDO12 from "../../assets/vdo/VDO12.mp4";
import VDO13 from "../../assets/vdo/VDO13.mp4";
import VDO14 from "../../assets/vdo/vdo14.mp4";
import PojectImg1 from "../../assets/About/hawkgrid.png";
import PojectImg2 from "../../assets/About/hawPara1.png";
import PojectImg3 from "../../assets/About/hawPara2.png";
import PojectImg4 from "../../assets/About/hawPara3.png";
import PojectImg5 from "../../assets/About/nationalhospital.png";
import PojectImg6 from "../../assets/About/intimatetiles.png";
import Branding12 from "../../assets/Branding/dh8.png";
import Branding13 from "../../assets/Branding/rewaq.png";
import Branding14 from "../../assets/Branding/chiccone.png";
import Branding15 from "../../assets/Branding/vitamin.png";
import project8 from "../../assets/Branding/project8.png";
import project9 from "../../assets/Branding/project9.png";
import Thumb1 from "../../assets/vdo/thum1.png";
import Thumb2 from "../../assets/vdo/thumb2.png";
import Thumb3 from "../../assets/vdo/thumb3.png";
import Thumb4 from "../../assets/vdo/thum4.png";
import Thumb5 from "../../assets/vdo/thum5.png";
import Thumb6 from "../../assets/vdo/thumb6.png";
import Thumb7 from "../../assets/vdo/thumb7.png";
import Thumb8 from "../../assets/vdo/thum8.jpeg";
import Thumb9 from "../../assets/vdo/thum9.jpeg";
import Thumb10 from "../../assets/vdo/thum10.jpeg";
import Thumb11 from "../../assets/vdo/thum11.jpeg";
import Thumb12 from "../../assets/vdo/thum12.jpeg";
import Thumb13 from "../../assets/vdo/thum13.jpeg";
import Thumb14 from "../../assets/vdo/thum14.jpeg";

export const DoubleLineReels = () => {
  const images = [
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474943/mashir1_wgk37r.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474944/mashir4_v9vgta.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474945/ony3_kol28y.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474945/PB-christmas_ouudls.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474945/peppergrey1_lsg8p0.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474946/preethi1_fcoscq.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474946/whitefield1_u9r7vu.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474947/artha2_ohsr6e.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1746601616/Eventia_The-Scret-in-Detail_01_ky3ewm.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1746600376/Eventia_The-Scret-in-Detail_03_k36fhx.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1747458866/roseapps_j4frwz.jpg",
    PojectImg1,
    Branding15,
    project8,
    project9,
    Branding13,
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474947/address2_wycxdy.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742476381/7-1024x480_1_sbxp7e.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742476462/5-1024x480_1_tfh7z3.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742476559/IMG-20170428-WA0063_yzvozy.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742476619/WhatsApp-Image-2020-09-23-at-20.41.15-1_ym84yp.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742475668/IMG-20171106-WA0053-1_zixhb9.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742475833/stone_fzx2mc.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742476071/Mug-1-scaled_1_egcgda.jpg",
    PojectImg2,
    PojectImg3,
    PojectImg4,
    PojectImg5,
    PojectImg6,
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474939/choice3_igjcn5.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474940/daya3_rbb5tb.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474942/dubai2_jm6kzc.jpg",
    "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474943/image_sifi2s.jpg",
    Branding12,
    Branding14,
  ];

  const videos = [
    VDO2,
    VDO4,
    VDO1,
    VDO3,
    VDO5,
    VDO6,
    VDO7,
    VDO8,
    VDO9,
    VDO10,
    VDO11,
    VDO12,
    VDO13,
    VDO14,
  ];

  const thumbnails = [
    Thumb2,
    Thumb4,
    Thumb1,
    Thumb3,
    Thumb5,
    Thumb6,
    Thumb7,
    Thumb8,
    Thumb9,
    Thumb10,
    Thumb11,
    Thumb12,
    Thumb13,
    Thumb14,
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
        <h2 className="logos-title" aria-label="Projects title">
          Projects
        </h2>
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
        <Button
          onClick={handleClick}
          aria-label="View all button"
          href="#projects"
        >
          View All <FiArrowUpRight />
        </Button>
      </div>
    </section>
  );
};
