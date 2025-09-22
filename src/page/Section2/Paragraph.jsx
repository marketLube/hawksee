import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import paraImg1 from "../../assets/newAssets/hawPara1.png";
import paraImg2 from "../../assets/newAssets/hawPara2.png";
import paraImg3 from "../../assets/newAssets/hawPara3.png";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

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
  <h2 style={{ fontWeight: 600, marginBottom: "1rem" }}>
    Get a team that's part of you
  </h2>
  <p style={{ fontSize: "2.25rem" }}>
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
