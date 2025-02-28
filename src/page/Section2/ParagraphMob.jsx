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
          <p
            aria-label="Text content for the brand's message"
            style={
              isInView
                ? {
                    transform: "translateY(0)",
                    transition: "all 2s ease",
                  }
                : {
                    transform: "translateY(5rem)",
                    opacity: "0",
                    transition: "all 2s ease",
                  }
            }
          >
            <span ref={paraRef}>Every</span> Brand Needs Hawksee, Because We{" "}
            {""}
            <strong style={{ fontWeight: 600 }}>See</strong>! First,
            <br /> We <strong style={{ fontWeight: 600 }}>See</strong> The
            Brand&apos;s Potential, Customer Needs, and the Gap. <br />
            Then, We Act to <strong style={{ fontWeight: 600 }}>
              Show
            </strong>{" "}
            Results.
          </p>
          <div className="aboutbutton">
            <button
              style={{
                border: "none",
                outline: "none",
                cursor: "pointer",
                backgroundColor: "#3e3d3c",
                borderRadius: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem 2rem",
                color: "#fff",
                fontSize: "1rem",
              }}
              onClick={() => navigate("/about")}
            >
              About Us <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
