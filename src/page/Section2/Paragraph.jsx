import React from "react";
import image1 from "./../../assets/img1.jpg";

export const Paragraph = () => {
  React.useEffect(() => {
    let lastScrollTop = 0;
    let isSticky = false;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const paragraphSection = document.getElementById("paragraph");
      const paragraphRect = paragraphSection.getBoundingClientRect();

      if (currentScrollTop < lastScrollTop) {
        if (Math.abs(paragraphRect.top) < 10 && isSticky) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          isSticky = false;
        } else if (paragraphRect.top < 0) {
          paragraphSection.scrollIntoView({ behavior: "smooth" });
          isSticky = true;
        }
      } else {
        if (paragraphRect.top > 0) {
          isSticky = false;
        }
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="paragraph" className="sectionPara">
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
