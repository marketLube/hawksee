import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import paraImg1 from "../../assets/newAssets/hawPara1.png";
import paraImg2 from "../../assets/newAssets/hawPara2.png";
import paraImg3 from "../../assets/newAssets/hawPara3.png";

export const Paragraph = ({ isTesterHundered, style }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const isMobile = useMediaQuery({ query: "(max-width: 767.98px)" });

  return (
    <section
      id="about"
      aria-label="About section"
      className="paraMobo"
      style={style}
    >
      <div
        className="paragraph"
        style={{
          backgroundColor: "transparent",
        }}
        aria-label="Paragraph section"
      >
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
              transition: "transform 0.7s ease-out, opacity 0.7s ease-out",
            }}
          />
          <img
            src={paraImg3}
            alt="Image 2"
            className="paragraph__imageDiv__image2"
            aria-label="Image representing the brand's vision"
            style={{
              transform: isInView ? "translateY(0%)" : "translateY(200%)",
              opacity: isInView ? "0.3" : "0",
              transition: "transform 0.7s ease-out, opacity 0.7s ease-out",
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
              transition: "transform 0.7s ease-out, opacity 0.7s ease-out",
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
                    transition: "all 1.3",
                  }
                : {
                    transform: "translateY(-5rem)",
                    opacity: "0",
                    transition: "all 1.3s",
                  }
            }
          >
            Every Brand Needs Hawksee, Because We <strong>See</strong>! First,
            <br /> We <strong>See</strong> The Brand&apos;s Potential, Customer
            Needs, and the Gap. <br />
            Then, We Act to <strong>Show</strong> Results.
          </p>
        </div>
      </div>
    </section>
  );
};
