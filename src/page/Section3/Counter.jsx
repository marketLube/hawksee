import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Button } from "../../components/Button";
import { FiArrowDownRight } from "react-icons/fi";

export const Counter = () => {
  const [animate, setAnimate] = useState(false);

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
      console.log(`Scrolling to section: ${sectionId}`);

      window.history.pushState(null, "", `#${sectionId}`);
    } else {
      console.error(`Element with ID ${sectionId} not found`);
    }
  };

  return (
    <div className="counterSection">
      <div className="counter-content">
        <div className="title-container">
          <h1 className="counterup">Does it work?</h1>
        </div>

        <ScrollTrigger
          onEnter={() => setAnimate(true)}
          onExit={() => setAnimate(false)}
        >
          <div className="stats-section">
            {stats.map((stat, index) => (
              <div key={index} className="stats-section__item">
                <h2 className="stats-section__value">
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
                <p className="stats-section__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollTrigger>

        <div className="buttondivCounter">
          <Button
            className="portfolio-btn"
            onClick={() => handleButtonClick("works")}
          >
            View Portfolio <FiArrowDownRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
