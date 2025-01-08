import React from "react";
import image1 from "./../../assets/img1.jpg";

export const Paragraph = () => {
  return (
    <section className="sectionPara">
      <div className="imgsOne">
        <img src={image1} alt="" className="first" />
        <img src={image1} alt="" className="second" />
        <img src={image1} alt="" className="third" />
      </div>

      <div className="paragraph">
        Lorem ipsum dolor sit amet, consectetuer adipiing elit, sed diam nonummy
        nibh euismod tincidunt ut laoreet{" "}
        <strong>Performance Marketing, Branding and Video Production</strong>
      </div>

      {/* <Logoauto /> */}
    </section>
  );
};
