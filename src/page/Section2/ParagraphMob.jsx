import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export const ParagraphMob = ({ isTesterHundered, style }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const paraRef = useRef(null);
  const paraInView = useInView(paraRef);

  useEffect(() => {
    if (paraInView) {
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 1000);
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [paraInView]);

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
        ref={ref}
        aria-label="Paragraph section"
      >
        <div className="paragraph__imageDiv" aria-label="Image container">
          <img
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara2_aollbn.png"
            alt="Image 1"
            className="paragraph__imageDiv__image1"
            aria-label="Image representing the brand's potential"
            style={{
              transform: isInView ? "translateY(0%)" : "translateY(100%)",

              transition: "transform 0.7s ease-out, opacity .5s ease-in-out",
            }}
          />
          <img
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara3_hvxfuk.png"
            alt="Image 2"
            className="paragraph__imageDiv__image2"
            aria-label="Image representing the brand's vision"
            style={{
              transform: isInView ? "translateY(0%)" : "translateY(500%)",
              opacity: isInView ? "0.3" : "0",
              transition: "transform 0.7s ease-out, opacity .5s ease-in-out",
            }}
          />
          <img
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986962/hawPara1_cc6pa2.png"
            alt="Image 3"
            className="paragraph__imageDiv__image3"
            aria-label="Image representing the brand's journey"
            style={{
              transform: isInView ? "translateY(0%)" : "translateY(400%)",
              opacity: isInView ? "0.3" : "0",
              transition: "transform 0.7s ease-out, opacity .5s ease-in-out",
            }}
          />
        </div>
        <div className="paragraph__textDiv" aria-label="Text container">
          <p
            ref={paraRef}
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
