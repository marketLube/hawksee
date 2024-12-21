import React from "react";
import image1 from "./../../assets/img1.jpg";

export const Paragraph = () => {
  return (
    <>
      <div className="imgsOne">
        <img src={image1} alt="" className="first" />
        <img src={image1} alt="" className="second" />
        <img src={image1} alt="" className="third" />
      </div>
      <div className="paragraph">
        Paragraph,Look for grammar mistakes, spelling mistakes, and make sure
        you all proper nouns.A paragraph typically has three parts: concluding
        sentence.The topic sentence Whereas dignity.
      </div>
      {/* <Logoauto /> */}
    </>
  );
};
