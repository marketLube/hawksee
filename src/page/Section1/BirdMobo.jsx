import { useEffect, useState } from "react";
import { ParagraphMob } from "../Section2/ParagraphMob";

export const BirdMobo = ({ isTesterHundered, isTesterVisible }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [styles, setStyles] = useState({
    transform: "scale(20) translate(8rem, -3rem)",
    transition: "transform 1s ease-in-out",
  });

  useEffect(() => {
    if (scrollDirection === "down") {
      setStyles({
        transform: "scale(20) translate(8rem, -3rem)",
        transition: "transform 1s ease-in-out",
      });
      const para = document.getElementById("about");
      para.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      if (isTesterVisible) {
        setStyles({
          transform: "scale(1) translate(0, 0)",
          transition: "transform .5s ease-in-out",
        });
        const header = document.getElementById("header");
        header.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [scrollDirection, isTesterVisible]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section id="bird" className="birdMobo" aria-label="Bird section">
      <div className="captionMobo" aria-label="Caption for the bird section">
        <h1>
          Every Brand <br /> Needs Hawksee
        </h1>
      </div>

      <div>
        <img
          style={styles}
          className="bird-imageMobo"
          alt="A stylized bird representing Hawksee"
          src={
            "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738575060/birdForMobile_ipivoa.svg"
          }
          aria-label="Stylized bird representing Hawksee"
        />
      </div>
      {/* 
      <ParagraphMob
        aria-label="Paragraph section"
        isTesterHundered={isTesterHundered}
        style={style}
      /> */}
    </section>
  );
};
// cubic - bezier(0.76, 0.18, 0.92, 0.53);
// cubic-bezier(0,.87,.63,.85)
