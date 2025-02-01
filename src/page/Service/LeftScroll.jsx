import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";
function LeftScroll({ content }) {
  const prevContentRef = useRef(content);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const navigate = useNavigate();

  const handleRegisterNow = () => {
    navigate("/enquiry");
  };

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
    >
      <div className="home-text">
        <span>{content?.title}</span>
      </div>
      <div className="about-para-container">
        {/* <button className="clickbtn" onClick={handleRegisterNow}>
          Register Now
        </button> */}
        <p className="about-para-container-right">{content?.description}</p>
      </div>
      <div className="buttondivPortfolioSer">
        <Button onClick={handleClick}>
          <a href="#projects">
            View All <FiArrowUpRight />
          </a>
        </Button>
      </div>
    </div>
  );
}

export default LeftScroll;
