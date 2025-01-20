import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const DoubleLineReels = () => {
  const images = [
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736935751/portfolio-1_ywooxn.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736935750/portfolio-2_bjxa5k.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736935751/portfolio-3_ehundx.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736935751/portfolio-4_afbyfw.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736935751/portfolio-5_bz87jz.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736935754/portfolio-6_zhxyf0.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736935751/portfolio-7_lam80k.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736935753/portfolio-8_b9vkwc.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736935752/portfolio-9_s8vzrf.jpg",

    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/cc1_qo8ln2.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/ccc2_qyszou.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/ccc3_hb1jbq.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/cc1_qo8ln2.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc2_onpzpf.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc3_mchddg.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947128/cc4_olsgfg.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc5_cmbv2q.jpg",
    "https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc6_guqslz.jpg",
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

  return (
    <section id="works" className="logos">
      <h1 className="logos-title">Projects</h1>
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
                    e.target.controls = true; // Enable controls on hover
                    e.target
                      .closest(".doubleline-slide")
                      .swiper.autoplay.stop();
                  }}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.controls = false; // Disable controls when not hovered
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
        <Button>
          View All <FiArrowUpRight />
        </Button>
      </div>
    </section>
  );
};
