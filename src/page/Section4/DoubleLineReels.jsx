import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export const DoubleLineReels = () => {
  const images = [
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/cc1_qo8ln2.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/ccc2_qyszou.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/ccc3_hb1jbq.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/cc1_qo8ln2.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc2_onpzpf.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc3_mchddg.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947128/cc4_olsgfg.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc5_cmbv2q.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc6_guqslz.jpg",
    // haw,
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

  const settings = {
    slidesPerView: 5,
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
  // const isInView = useInView(ref, { once: true });
  const rotRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const isInView = useInView(rotRef);

  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isInView]);

  return (
    <section id="works" className="logos">
      <h1 className="logos-title">
        <div className="logos-text ">
          <div
            style={
              animate
                ? { transform: "translateY(-1rem)" }
                : { transform: "translateY(10rem)" }
            }
          >
            Projects
          </div>
        </div>
      </h1>
      <div className="logos-rot">
        <div className="logo-slide" ref={rotRef}>
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
        <Link to="/projects">
          <Button>
            View All <FiArrowUpRight />
          </Button>
        </Link>
      </div>
    </section>
  );
};
