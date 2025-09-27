import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import paraImg1 from "../../assets/newAssets/hawPara1.png";
import paraImg2 from "../../assets/newAssets/hawPara2.png";
import paraImg3 from "../../assets/newAssets/hawPara3.png";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export const ParagraphMob = ({ isTesterHundered, style, paraRef }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Store current position
  //   const scrollY = window.scrollY;
  //   let timer;

  //   if (!paraInView) {
  //     clearTimeout(timer);
  //     return;
  //   }
  //   // Add vendor prefixes for iOS
  //   document.body.style.position = "fixed";
  //   document.body.style["-webkit-position"] = "fixed";
  //   document.body.style.width = "100%";
  //   document.body.style.top = `-${scrollY}px`;

  //   // Prevent overscroll/bounce effect on iOS
  //   document.body.style.overscrollBehavior = "none";
  //   document.body.style["-webkit-overflow-scrolling"] = "auto";

  //   // Release everything after 1 second
  //   timer = setTimeout(() => {
  //     document.body.style.position = "";
  //     document.body.style["-webkit-position"] = ""; // Clear iOS Safari prefix
  //     document.body.style.width = "";
  //     document.body.style.top = "";
  //     document.body.style.overscrollBehavior = "";
  //     document.body.style["-webkit-overflow-scrolling"] = "";
  //     window.scrollTo(0, scrollY);
  //   }, 1000);

  //   // Cleanup function
  //   return () => {
  //     clearTimeout(timer);
  //     if (document.body.style.position === "fixed") {
  //       document.body.style.position = "";
  //       document.body.style["-webkit-position"] = "";
  //       document.body.style.width = "";
  //       document.body.style.top = "";
  //       document.body.style.overscrollBehavior = "";
  //       document.body.style["-webkit-overflow-scrolling"] = "";
  //       window.scrollTo(0, scrollY);
  //     }
  //   };
  // }, [paraInView]);

  return (
    <section
      id="about"
      aria-label="About section"
      className="paraMobo"
      style={style}
    >
      <div className="paragraph" aria-label="Paragraph section">
        <div
          className="paragraph__imageDiv"
          ref={ref}
          aria-label="Image container"
        >
          <img
            src={paraImg1}
            alt="Image 1"
            className="paragraph__imageDiv__image1"
            aria-label="Image representing the brand's potential"
            style={{
              transform: isInView ? "translateY(0%)" : "translateY(100%)",
              opacity: isInView ? "0.3" : "0",
              transition: "transform 1s ease-out, opacity 2s ease-out",
            }}
          />
          <img
            src={paraImg3}
            alt="Image 2"
            className="paragraph__imageDiv__image2"
            aria-label="Image representing the brand's vision"
            style={{
              transform: isInView ? "translateY(0%)" : "translateY(700%)",
              opacity: isInView ? "0.3" : "0",
              transition: "transform 1s ease-out, opacity 2s ease-out",
            }}
          />
          <img
            src={paraImg2}
            alt="Image 3"
            className="paragraph__imageDiv__image3"
            aria-label="Image representing the brand's journey"
            style={{
              transform: isInView ? "translateY(0%)" : "translateY(400%)",
              opacity: isInView ? "0.3" : "0",
              transition: "transform 1s ease-out, opacity 2s ease-out",
            }}
          />
        </div>

        <div className="paragraph__textDiv" aria-label="Text container">
          <div
            aria-label="Text content for the brand's message"
            style={
              isInView
                ? {
                    transform: "translateY(0)",
                    transition: "all 1.3s",
                  }
                : {
                    transform: "translateY(-5rem)",
                    opacity: "0",
                    transition: "all 1.3s",
                  }
            }
          >
            <h2 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "1.8rem" }}>
              <span ref={paraRef}>Get</span> a team that's part of you
            </h2>
            <p style={{ fontSize: "1.2rem", fontWeight: 300, lineHeight: "1.6" }}>
              We work with you as an extension of your team to deliver business impact 
              with growth-ready systems, intent-driven strategies and insight-powered 
              content – faster.
            </p>
          </div>
          <div className="aboutbutton">
            <Button
              onClick={() => navigate("/about")}
              style={{
                padding: "0rem 2rem !important",
              }}
            >
              About Us <FiArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};