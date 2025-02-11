import { useEffect } from "react";
import { ParagraphMob } from "../Section2/ParagraphMob";

export const BirdMobo = ({ isTesterHundered, isTesterVisible }) => {
  const style = {
    opacity: !isTesterHundered ? "1" : "0",
    transform: isTesterHundered ? "translateY(10rem)" : "translateY(0)",
  };

  console.log(isTesterHundered, "isTesterHundered");

  useEffect(() => {
    if (!isTesterHundered) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [isTesterHundered]);

  return (
    <section id="bird" className="birdMobo" aria-label="Bird section">
      <div className="captionMobo" aria-label="Caption for the bird section">
        <h1>
          Every Brand <br /> Needs Hawksee
        </h1>
      </div>

      <img
        style={
          !isTesterHundered
            ? {
                transform: "scale(15) translate(8rem, -3rem)",
                transition: "transform 1s ease",
              }
            : isTesterVisible
            ? {
                transform: "scale(1) translate(0, 0)",
                transition: "transform .5s ease",
              }
            : {}
        }
        className="bird-imageMobo"
        alt="A stylized bird representing Hawksee"
        src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1738575060/birdForMobile_ipivoa.svg"
        aria-label="Stylized bird representing Hawksee"
      />

      <ParagraphMob
        aria-label="Paragraph section"
        isTesterHundered={isTesterHundered}
        style={style}
      />
    </section>
  );
};
