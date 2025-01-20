import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";

import para1 from "../../assets/About/one.jpeg";
import para2 from "../../assets/About/two.jpeg";
import para3 from "../../assets/About/three.jpeg";

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
              src={para1}
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
              src={para2}
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
              src={para3}
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
              <div>
                Every Brand Needs Hawksee, Because We <strong>See</strong>!
              </div>
              First, We <strong>See</strong> The Brand’s Potential, Customer
              Needs,
              <div>
                and the Gap. Then, We Act to <strong>Show</strong> Results.
              </div>
            </div>
          </Parallax>
        </div>
      </section>
    </Parallax>
  );
};
