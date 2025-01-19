import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";

export const Paragraph = () => {
  // const isMobileView = window.innerWidth <= 768;
  const ref = useRef(null);

  const isInView = useInView(ref);

  return (
    <Parallax speed={-30}>
      <section id="about" className="sectionPara">
        <div className="imgsOne" ref={ref}>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947125/cc1_qo8ln2.jpg"
              alt=""
              className="first"
              style={
                isInView
                  ? {
                      transform: "translateY(0%)",
                    }
                  : { transform: "translateY(100%)" }
              }
            />
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dzuqczvb7/image/upload/v1736935751/portfolio-1_ywooxn.jpg"
              alt=""
              className="second"
              style={
                isInView
                  ? {
                      transform: "translateY(0%)",
                    }
                  : { transform: "translateY(200%)" }
              }
            />
          </div>

          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dzuqczvb7/image/upload/v1736947126/cc6_guqslz.jpg"
              alt=""
              className="third"
              style={
                isInView
                  ? {
                      transform: "translateY(0%)",
                    }
                  : { transform: "translateY(400%)" }
              }
            />
          </div>
        </div>

        <div
          className="parallax-wrapper"
          style={!isInView ? { opacity: "0" } : { opacity: "1" }}
        >
          <Parallax speed={-50} style={{ color: "white", opacity: 1 }}>
            <div className="paragraph">
              Every Brand Needs Hawksee, Because We <strong>See</strong>! First,
              We <strong>See</strong>
              The Brand’s Potential, Customer Needs, and the Gap. Then, We Act
              to <strong>Show</strong> Results.
            </div>
          </Parallax>
        </div>
      </section>
    </Parallax>
  );
};
