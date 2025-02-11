import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export const ParagraphMob = ({ isTesterHundered, style }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const paraRef = useRef(null);
  const paraInView = useInView(paraRef);

  useEffect(() => {
    if (!paraInView) return;

    // Store current position
    const scrollY = window.scrollY;

    // Add vendor prefixes for iOS
    document.body.style.position = "fixed";
    document.body.style["-webkit-position"] = "fixed"; // iOS Safari prefix
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;

    // Prevent overscroll/bounce effect on iOS
    document.body.style.overscrollBehavior = "none";
    document.body.style["-webkit-overflow-scrolling"] = "auto";

    // Release everything after 1 second
    const timer = setTimeout(() => {
      document.body.style.position = "";
      document.body.style["-webkit-position"] = ""; // Clear iOS Safari prefix
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.style.overscrollBehavior = "";
      document.body.style["-webkit-overflow-scrolling"] = "";
      window.scrollTo(0, scrollY);
    }, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (document.body.style.position === "fixed") {
        document.body.style.position = "";
        document.body.style["-webkit-position"] = "";
        document.body.style.width = "";
        document.body.style.top = "";
        document.body.style.overscrollBehavior = "";
        document.body.style["-webkit-overflow-scrolling"] = "";
        window.scrollTo(0, scrollY);
      }
    };
  }, [paraInView]);

  return (
    <section
      id="about"
      aria-label="About section"
      className="paraMobo"
      style={style}
    >
      <div
        className="paragraph"
        style={{ backgroundColor: "transparent" }}
        aria-label="Paragraph section"
      >
        <div
          className="paragraph__imageDiv"
          ref={ref}
          aria-label="Image container"
        >
          <img
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara2_aollbn.png"
            alt="Image 1"
            className="paragraph__imageDiv__image1"
            aria-label="Image representing the brand's potential"
            style={{
              transform: isInView ? "translateY(0%)" : "translateY(100%)",
              opacity: isInView ? "0.2" : "0",
              transition: "transform 1s ease-out, opacity 2s ease-out",
            }}
          />
          <img
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986961/hawPara3_hvxfuk.png"
            alt="Image 2"
            className="paragraph__imageDiv__image2"
            aria-label="Image representing the brand's vision"
            style={{
              transform: isInView ? "translateY(0%)" : "translateY(700%)",
              opacity: isInView ? "0.2" : "0",
              transition: "transform 1s ease-out, opacity 2s ease-out",
            }}
          />
          <img
            src="https://res.cloudinary.com/ddp7f64w0/image/upload/v1737986962/hawPara1_cc6pa2.png"
            alt="Image 3"
            className="paragraph__imageDiv__image3"
            aria-label="Image representing the brand's journey"
            style={{
              transform: isInView ? "translateY(0%)" : "translateY(400%)",
              opacity: isInView ? "0.2" : "0",
              transition: "transform 1s ease-out, opacity 2s ease-out",
            }}
          />
        </div>

        <div className="paragraph__textDiv" aria-label="Text container">
          <p
            aria-label="Text content for the brand's message"
            style={
              isInView
                ? {
                    transform: "translateY(.2)",
                    transition: "transform 1s ease",
                  }
                : {
                    transform: "translateY(-5rem)",
                    opacity: "0",
                    transition: "transform 1s ease",
                  }
            }
          >
            <span ref={paraRef}>Every</span> Brand Needs Hawksee, Because We
            <strong>See</strong>! First,
            <br /> We <strong>See</strong> The Brand&apos;s Potential, Customer
            Needs, and the Gap. <br />
            Then, We Act to <strong>Show</strong> Results.
          </p>
        </div>
      </div>
    </section>
  );
};
