import { useEffect, useState } from "react";
import BirdImg from "../../assets/birdForMobile.svg";

export const BirdMobo = ({ isTesterHundered, isTesterVisible, paraInView }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");

  const [styles, setStyles] = useState({
    transform: "scale(1) translate(0, 0)",
    transition: "all .5s ease-in-out",
  });

  useEffect(() => {
    if (window.scrollY > 300) {
      setStyles({
        transform: "scale(20) translate(8rem, -3rem)",
        transition: "all 1s ease-in-out",
      });
    }

    if (scrollDirection === "down" && !isTesterHundered && lastScrollY < 100) {
      setStyles({
        transform: "scale(20) translate(8rem, -3rem)",
        transition: "all 1s cubic-bezier(0.76, 0.18, 0.92, 0.53)",
      });

      const para = document.getElementById("about");
      para.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (scrollDirection === "up") {
      if (isTesterVisible) {
        setStyles({
          transform: "scale(1) translate(0, 0)",
          transition: "all .5s cubic-bezier(0,.87,.63,.85)",
        });

        // Add a small delay before scrolling to top to prevent flickering
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 50);
      }
    }
  }, [scrollDirection, isTesterVisible, isTesterHundered, lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add a threshold to prevent tiny scroll fluctuations
      const scrollThreshold = 5;

      if (currentScrollY > lastScrollY + scrollThreshold) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY - scrollThreshold) {
        setScrollDirection("up");
      }

      // Debounce the scroll position update
      requestAnimationFrame(() => {
        setLastScrollY(currentScrollY);
      });
    };

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

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
            // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738575060/birdForMobile_ipivoa.svg"
            BirdImg
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
