import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const Paragraph = ({ isTesterHundered, style }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const isMobile = useMediaQuery({ query: "(max-width: 767.98px)" });
  const navigate = useNavigate();
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
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara2_aollbn.png"
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
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara3_hvxfuk.png"
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
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986962/hawPara1_cc6pa2.png"
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
          <div className="aboutbutton">
            <Button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/about");
              }}
            >
              About us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
