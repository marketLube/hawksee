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

import Thumb1 from "../../assets/vdo/thum1.png";
import Thumb2 from "../../assets/vdo/thumb2.png";
import Thumb3 from "../../assets/vdo/thumb3.png";
import Thumb4 from "../../assets/vdo/thum4.png";
import Thumb5 from "../../assets/vdo/thum5.png";
import Thumb6 from "../../assets/vdo/thumb6.png";
import Thumb7 from "../../assets/vdo/thumb7.png";

import Branding1 from "../../assets/Branding/airavan.jpg";
import Branding2 from "../../assets/Branding/artha.jpeg";
import Branding3 from "../../assets/Branding/beka.jpg";
import Branding4 from "../../assets/Branding/bringo.jpg";
import Branding5 from "../../assets/Branding/inviot.jpg";
import Branding6 from "../../assets/Branding/mordernRoyal.jpg";
import Branding7 from "../../assets/Branding/mrFix.jpg";
import Branding8 from "../../assets/Branding/odura.jpg";
import Branding9 from "../../assets/Branding/painat.jpeg";
import Branding10 from "../../assets/Branding/repairkada.jpeg";
import Branding11 from "../../assets/Branding/stoneSmith.jpg";

export default function ProjectsShowAllBody({
  isAnimate,
  activeIndex,
  selectedNav,
}) {
  const content = [
    {
      type: "video",
      items: [VDO1, VDO2, VDO3, VDO4, VDO5, VDO6, VDO7],
      thumbnails: [Thumb1, Thumb2, Thumb3, Thumb4, Thumb5, Thumb6, Thumb7],
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
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474939/choice3_igjcn5.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474940/daya3_rbb5tb.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474941/dholi3_innmgq.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474942/dubai2_jm6kzc.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474942/gg-new-year_kec4n1.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474943/image_sifi2s.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474943/mashir1_wgk37r.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474944/mashir4_v9vgta.jpg",
        Branding9,
        Branding2,
        Branding3,
        Branding4,
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474945/ony3_kol28y.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474945/PB-christmas_ouudls.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474945/peppergrey1_lsg8p0.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474946/preethi1_fcoscq.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474946/whitefield1_u9r7vu.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474947/artha2_ohsr6e.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474947/address2_wycxdy.jpg",
        PojectImg4,
        PojectImg1,
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
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        Thumb1,
        Thumb2,
        Thumb3,
        Thumb4,
        Thumb5,
        Thumb6,
        Thumb7,
      ],
    },

    {
      type: "branding",
      items: [
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742475668/IMG-20171106-WA0053-1_zixhb9.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742475833/stone_fzx2mc.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742476071/Mug-1-scaled_1_egcgda.jpg",
        Branding9,
        Branding2,
        Branding3,
        Branding4,
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742476381/7-1024x480_1_sbxp7e.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742476462/5-1024x480_1_tfh7z3.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742476559/IMG-20170428-WA0063_yzvozy.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742476619/WhatsApp-Image-2020-09-23-at-20.41.15-1_ym84yp.jpg",
      ],
    },

    {
      type: "creatives",
      items: [
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474939/choice3_igjcn5.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474940/daya3_rbb5tb.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474941/dholi3_innmgq.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474942/dubai2_jm6kzc.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474942/gg-new-year_kec4n1.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474943/image_sifi2s.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474943/mashir1_wgk37r.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474944/mashir4_v9vgta.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474945/ony3_kol28y.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474945/PB-christmas_ouudls.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474945/peppergrey1_lsg8p0.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474946/preethi1_fcoscq.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474946/whitefield1_u9r7vu.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474947/artha2_ohsr6e.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474947/address2_wycxdy.jpg",
        // "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474944/melco2_uyqaed.jpg",
      ],
    },

    {
      type: "website",
      items: [
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474264/inviot_nizgrs.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474264/modernRoyal_pf2whq.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474263/eventia_zvnlzn.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474263/fingerByte_lgibf6.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474263/fortador_ae1cid.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474263/akom_qfrbqf.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474263/artha_dlcewk.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474262/prime_a1elt0.jpg",
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1742474262/praana_trgb2l.jpg",
      ],
    },
  ];

  const renderContent = () => {
    if (activeIndex === 0) return content[2].items;
    if (activeIndex === 1) return content[0].items;
    if (activeIndex === 2) return content[1].items;
    if (activeIndex === 3) return content[3].items;
    if (activeIndex === 4) return content[4].items;
    if (activeIndex === 5) return content[5].items;
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
                  muted
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
                    if (window.matchMedia("(hover: hover)").matches) {
                      e.target.play();
                      e.target.style.transform = "scale(1.07)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (window.matchMedia("(hover: hover)").matches) {
                      e.target.pause();
                      e.target.style.transform = "scale(1)";
                      e.target.style.opacity = "1";
                    }
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
                    if (window.matchMedia("(hover: hover)").matches) {
                      e.target.style.transform = "scale(1.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (window.matchMedia("(hover: hover)").matches) {
                      e.target.style.transform = "scale(1)";
                      e.target.style.opacity = "1";
                    }
                  }}
                />
              )}
            </>
          ) : activeIndex === 1 ? (
            <video
              src={val}
              muted
              poster={content[0]?.thumbnails[i]}
              aria-label={`Project video ${i + 1}`}
              controls
              onMouseEnter={(e) => {
                if (window.matchMedia("(hover: hover)").matches) {
                  e.target.play();
                  e.target.style.transform = "scale(1.07)";
                }
              }}
              onMouseLeave={(e) => {
                if (window.matchMedia("(hover: hover)").matches) {
                  e.target.pause();
                  e.target.style.transform = "scale(1)";
                  e.target.style.opacity = "1";
                }
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
                if (window.matchMedia("(hover: hover)").matches) {
                  e.target.style.transform = "scale(1.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (window.matchMedia("(hover: hover)").matches) {
                  e.target.style.transform = "scale(1)";
                  e.target.style.opacity = "1";
                }
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
