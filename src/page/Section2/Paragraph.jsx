import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Paragraph = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.2 });

  return (
    // <Parallax speed={-40} className="no-transition">
    <section id="about">
      <div className="paragraph">
        <div className="paragraph__imageDiv" ref={ref}>
          <img
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara2_aollbn.png"
            alt="Image 1"
            className="paragraph__imageDiv__image1"
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
        <div className="paragraph__textDiv">
          {/* <Parallax speed={0} style={{ color: "white", opacity: 1 }}> */}
          <div
            style={
              isInView
                ? {
                    transform: "translateY(0)",
                  }
                : { transform: "translateY(-10rem)", opacity: "0" }
            }
          >
            Every Brand Needs Hawksee, Because We <strong>See</strong>! First,
            <br /> We <strong>See</strong> The Brand's Potential, Customer
            Needs, and the Gap. <br />
            Then, We Act to <strong>Show</strong> Results.
          </div>
          {/* </Parallax> */}
        </div>
      </div>
    </section>
    // </Parallax>
  );
};
