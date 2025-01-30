import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function LeftScroll({ content }) {
  const prevContentRef = useRef(content);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const navigate = useNavigate();

  const handleRegisterNow = () => {
    navigate("/enquiry");
  };

  useEffect(() => {
    if (
      prevContentRef.current.title !== content.title ||
      prevContentRef.current.description !== content.description
    ) {
      setShouldAnimate(true);
      prevContentRef.current = content;
    }
  }, [content]);
  return (
    <div
      className={`about-scroll-container-left-content ${
        shouldAnimate ? "animate-mount" : ""
      }`}
    >
      <div className="home-text">
        <span>{content.title}</span>
      </div>
      <div className="about-para-container">
        <button onClick={handleRegisterNow}>Register Now</button>
        <p className="about-para-container-right">{content.description}</p>
      </div>
    </div>
  );
}

export default LeftScroll;
