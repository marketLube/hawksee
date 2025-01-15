import React from "react";
import image1 from "../../assets/protienNutMob.jpeg";
import image2 from "../../assets/hilineLap.jpeg";
import image3 from "../../assets/skymarkLap.jpeg";

export const Paragraph = () => {
  return (
    <section id="about" className="sectionPara">
      <div className="imgsOne">
        <img src={image1} alt="" className="first" />
        <img src={image2} alt="" className="second" />
        <img src={image3} alt="" className="third" />
      </div>

      <div className="paragraph">
        Every Brand Needs Hawksee, Because We See! First, We See The Brand’s
        Potential, Customer Needs, and the Gap. Then, We Act to Show Results.
        {/* <strong>Performance Marketing, Branding and Video Production</strong> */}
      </div>

      {/* <Logoauto /> */}
    </section>
  );
};
