import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export const Paragraph = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 575.98px)" });

  return (
    <section id="about" aria-label="About section">
      <div
        className="paragraph"
        style={{
          backgroundColor: isSmallMobile ? "black" : "transparent",
        }}
        aria-label="Paragraph section"
      >
        <div
          className="paragraph__imageDiv"
          ref={ref}
          aria-label="Image container"
        >
          <img
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara2_aollbn.png"
            alt="Image 1"
            className="paragraph__imageDiv__image1"
            aria-label="Image representing the brand's potential"
            style={
              isInView
                ? {
                    transform: "translateY(0%)",
                    opacity: ".5",
                  }
                : { transform: "translateY(100%)", opacity: "0" }
            }
          />
          <img
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara3_hvxfuk.png"
            alt="Image 2"
            className="paragraph__imageDiv__image2"
            aria-label="Image representing the brand's vision"
            style={
              isInView
                ? {
                    transform: "translateY(0%)",
                    opacity: ".5",
                  }
                : { transform: "translateY(200%)", opacity: "0" }
            }
          />
          <img
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986962/hawPara1_cc6pa2.png"
            alt="Image 3"
            className="paragraph__imageDiv__image3"
            aria-label="Image representing the brand's journey"
            style={
              isInView
                ? {
                    transform: "translateY(0%)",
                    opacity: ".5",
                  }
                : { transform: "translateY(400%)", opacity: "0" }
            }
          />
        </div>
        <div className="paragraph__textDiv" aria-label="Text container">
          <p
            aria-label="Text content for the brand's message"
            style={
              isInView
                ? {
                    transform: "translateY(0)",
                  }
                : { transform: "translateY(-10rem)", opacity: "0" }
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
