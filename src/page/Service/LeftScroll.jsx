import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";
function LeftScroll({ content }) {
  const prevContentRef = useRef(content);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (
      prevContentRef.current?.title !== content?.title ||
      prevContentRef.current?.description !== content?.description
    ) {
      setShouldAnimate(true);
      prevContentRef.current = content;
    }
  }, [content]);

  const handleClick = () => {
    window.location.hash = "#projects";
    window.scrollTo({
      top: window.scrollY + 100,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`about-scroll-container-left-content ${
        shouldAnimate ? "animate-mount" : ""
      }`}
      aria-label="Left scroll content container"
    >
      <div
        style={{ height: "15rem" }}
        aria-label="Content area with fixed height"
      >
        <h2 className="home-text" aria-label="Left scroll title">
          <span aria-label="Left scroll title text">{content?.title}</span>
        </h2>
        <p
          className="about-para-container-right"
          aria-label="Left scroll description"
        >
          {content?.description}
        </p>
      </div>
      <div
        className="buttondivPortfolioSer"
        aria-label="Button container for portfolio section"
      >
        <Button
          onClick={handleClick}
          aria-label="View all button"
          href="#projects"
        >
          View All <FiArrowUpRight aria-label="Arrow icon for view all" />
        </Button>
      </div>
    </div>
  );
}

export default LeftScroll;
