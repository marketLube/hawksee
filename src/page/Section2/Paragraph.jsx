import React from "react";
import { Parallax } from "react-scroll-parallax";
import image1 from "../../assets/protienNutMob.jpeg";
import image2 from "../../assets/hilineLap.jpeg";
import image3 from "../../assets/skymarkLap.jpeg";

export const Paragraph = () => {
  // const isMobileView = window.innerWidth <= 768;

  return (
    <section id="about" className="sectionPara">
      <div className="imgsOne">
        <img
          src="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737020741/para1_tv6vug.jpg"
          alt=""
          className="first"
        />
        <img
          src="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737020741/para3_qmitif.jpg"
          alt=""
          className="second"
        />
        <img
          src="https://res.cloudinary.com/dzuqczvb7/image/upload/v1737020741/para2_ao82wb.jpg"
          alt=""
          className="third"
        />
      </div>

      <div className="parallax-wrapper">
        {/* <Parallax speed={-110} style={{ color: "white", opacity: 1 }}> */}
        <div className="paragraph">
          Every Brand Needs Hawksee, Because We <strong>See</strong>! First, We{" "}
          <strong>See</strong>
          The Brand’s Potential, Customer Needs, and the Gap. Then, We Act to{" "}
          <strong>Show</strong> Results.
        </div>
        {/* </Parallax> */}
      </div>

      {/* <Logoauto /> */}
    </section>
  );
};
