import React from "react";
import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";

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
  ];

  const imagesCC = [
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

  return (
    <section id="works" className="logos">
      <h1 className="logos-title"> ل ا م ع أ ل ا</h1>
      <div className="logos-rot">
        <div className="logo-slide">
          {/* Render images for seamless looping */}
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
        <div className="logo-slide reverse">
          {/* Render images for seamless looping */}
          {imagesCC.map((image, index) => (
            <img
              key={`image-reverse-${index}`}
              src={image}
              alt={`Slide ${index}`}
            />
          ))}
          {imagesCC.map((image, index) => (
            <img
              key={`image-reverse-duplicate-${index}`}
              src={image}
              alt={`Slide ${index}`}
            />
          ))}
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
