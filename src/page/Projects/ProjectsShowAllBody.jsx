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
import VDO8 from "../../assets/vdo/VDO8.mp4";
import VDO9 from "../../assets/vdo/VDO9.mp4";
import VDO10 from "../../assets/vdo/VDO10.mp4";
import VDO11 from "../../assets/vdo/vdo11.mp4";
import VDO12 from "../../assets/vdo/VDO12.mp4";
import VDO13 from "../../assets/vdo/VDO13.mp4";
import VDO14 from "../../assets/vdo/vdo14.mp4";

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
import Branding12 from "../../assets/Branding/dh8.png";
import Branding13 from "../../assets/Branding/rewaq.png";
import Branding14 from "../../assets/Branding/chiccone.png";
import Branding15 from "../../assets/Branding/vitamin.png";

export default function ProjectsShowAllBody({
  isAnimate,
  activeIndex,
  selectedNav,
}) {
  const content = [
    {
      type: "video",
      items: [
        VDO2,
        VDO4,
        VDO1,
        VDO8,
        VDO3,
        VDO5,
        VDO9,
        VDO6,
        VDO7,
        VDO10,
        VDO11,
        VDO12,
        VDO13,
        VDO14,
      ],
      thumbnails: [
        Thumb2,
        Thumb4,
        Thumb1,
        Thumb8,
        Thumb3,
        Thumb5,
        Thumb9,
        Thumb6,
        Thumb7,
        Thumb10,
        Thumb11,
        Thumb12,
        Thumb13,
        Thumb14,
      ],
    },
    {
      type: "social",
      items: [PojectImg1, PojectImg2, PojectImg3, PojectImg5],
    },
    {
      type: "all",
      items: [
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/Eventia_The-Scret-in-Detail_01_ky3ewm.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/Eventia_The-Scret-in-Detail_03_k36fhx.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/roseapps_j4frwz.jpg",
        Branding15,
        Branding13,
        Branding12,
        PojectImg1,
        Branding14,
        PojectImg4,
        PojectImg6,
        PojectImg2,
        PojectImg3,
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/choice3_igjcn5.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/daya3_rbb5tb.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/dholi3_innmgq.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/dubai2_jm6kzc.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/gg-new-year_kec4n1.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/image_sifi2s.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/mashir1_wgk37r.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/mashir4_v9vgta.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/stone_fzx2mc.jpg",
        PojectImg5,
        Branding9,
        Branding2,
        Branding3,
        Branding4,
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/ony3_kol28y+(1).jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/PB-christmas_ouudls.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/peppergrey1_lsg8p0.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/preethi1_fcoscq.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/whitefield1_u9r7vu+(1).jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/artha2_ohsr6e+(1).jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/address2_wycxdy+(1).jpg",

        VDO1,
        VDO2,
        VDO3,
        VDO4,
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
        Thumb8,
        Thumb9,
        Thumb10,
        Thumb11,
        Thumb12,
        Thumb13,
        Thumb14,
      ],
    },

    {
      type: "branding",
      items: [
        Branding13,
        Branding15,
        Branding12,
        Branding14,
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/IMG-20171106-WA0053-1_zixhb9.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/stone_fzx2mc+(1).jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/Mug-1-scaled_1_egcgda.jpg",
        PojectImg6,
        Branding9,
        Branding2,
        Branding3,
        Branding4,
        PojectImg4,
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/7-1024x480_1_sbxp7e.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/5-1024x480_1_tfh7z3.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/IMG-20170428-WA0063_yzvozy.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/WhatsApp-Image-2020-09-23-at-20.41.15-1_ym84yp.jpg",
      ],
    },

    {
      type: "creatives",
      items: [
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/Eventia_The-Scret-in-Detail_01_ky3ewm+(1).jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/Eventia_The-Scret-in-Detail_03_k36fhx+(1).jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/roseapps_j4frwz.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/choice3_igjcn5.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/daya3_rbb5tb.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/dholi3_innmgq.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/dubai2_jm6kzc.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/gg-new-year_kec4n1.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/image_sifi2s.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/mashir1_wgk37r.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/mashir4_v9vgta.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/ony3_kol28y+(1).jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/PB-christmas_ouudls.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/peppergrey1_lsg8p0.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/preethi1_fcoscq.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/whitefield1_u9r7vu.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/artha2_ohsr6e.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/address2_wycxdy.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/ross_dcawlr.jpg",
      ],
    },

    {
      type: "website",
      items: [
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/eventia_zvnlzn.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/inviot_nizgrs.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/modernRoyal_pf2whq.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/fingerByte_lgibf6.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/fortador_ae1cid.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/akom_qfrbqf.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/artha_dlcewk.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/prime_a1elt0.jpg",
        "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/hawksee/project/praana_trgb2l.jpg",
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
