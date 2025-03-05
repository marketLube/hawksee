import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Button } from "../../components/Button";
import { FiArrowDownRight } from "react-icons/fi";
import { useRef, useState } from "react";
import portfolio from "./../../assets/Hawksee_Portfo.pdf";
export const Counter = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  const stats = [
    { value: 1000, label: "Projects Done", suffix: "+" },
    { value: 500, label: "Happy Clients", suffix: "+" },
    { value: 12, label: "Business", suffix: "CR+" },
    { value: 4.6, label: "Rated on google", decimals: 1 },
  ];

  const handleButtonClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    } else {
      console.error(`Element with ID ${sectionId} not found`);
    }
  };

  const handleDownload = () => {
    const pdfUrl = portfolio;

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Hawksee_Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="counterSection" aria-label="Counter section">
      <div className="counter-content" aria-label="Counter content">
        <div className="title-container" aria-label="Title container">
          <h1 className="counterup" aria-label="Counter title">
            <div className="counterup-text" aria-label="Counterup text">
              <span className="question-top">The Essential Question</span>
              <h2
                style={
                  animate
                    ? {
                        transform: "translateY(0rem)",
                        transition: "transform 0.5s",
                      }
                    : { transform: "translateY(10rem)" }
                }
                aria-label="Does it work text"
              >
                Does it work?
                <span className="answer">(in short, yep...)</span>
              </h2>
            </div>
          </h1>
        </div>

        <ScrollTrigger
          onEnter={() => setAnimate(true)}
          onExit={() => setAnimate(false)}
        >
          <div
            className="stats-section"
            ref={ref}
            aria-label="Statistics section"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stats-section__item"
                aria-label={`Statistic ${index + 1}`}
              >
                <h3
                  className="stats-section__value"
                  aria-label={`Value for ${stat.label}`}
                >
                  {animate ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={1.5}
                      decimals={stat.decimals || 0}
                    />
                  ) : (
                    stat.value
                  )}
                  {stat.suffix || ""}
                </h3>
                <p
                  className="stats-section__label"
                  aria-label={`Label for ${stat.label}`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollTrigger>

        <div className="buttondivCounter">
          <Button
            className="portfolio-btn"
            aria-label="View portfolio button"
            onClick={handleDownload}
          >
            Download Portfolio <FiArrowDownRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
