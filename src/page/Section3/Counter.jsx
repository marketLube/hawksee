import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Button } from "../../components/Button";
import { FiArrowDownRight } from "react-icons/fi";
import { useRef, useState } from "react";

export const Counter = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  const stats = [
    { value: 1000, label: "Projects Done" },
    { value: 500, label: "Happy Clients" },
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

  return (
    <div className="counterSection" aria-label="Counter section">
      <div className="counter-content" aria-label="Counter content">
        <div className="title-container" aria-label="Title container">
          <h1 className="counterup" aria-label="Counter title">
            <div className="counterup-text" aria-label="Counterup text">
              <div
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
              </div>
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
                <h2
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
                </h2>
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
            onClick={() => handleButtonClick("works")}
            aria-label="View portfolio button"
          >
            View Portfolio <FiArrowDownRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
