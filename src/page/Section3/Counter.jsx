import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Button } from "../../components/Button";
import { FiArrowDownRight } from "react-icons/fi";
export const Counter = () => {
  const [counterState, setCounterState] = useState(false);

  const stats = [
    { value: "59", label: "Projects Done" },
    { value: "23", label: "Happy Clients" },
    { value: "12CR+", label: "Business" },
    { value: "96%", label: "Success Rate" },
  ];

  return (
    <div className="counterSection">
      <h1 className="counterup">Does it Work?</h1>
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="stats-section">
          {counterState && (
            <div className="stats-section__item">
              <h2 className="stats-section__value">
                <CountUp start={0} end={59} duration={1.5}></CountUp>
              </h2>
              <p className="stats-section__label">Projects Done</p>
            </div>
          )}

          {counterState && (
            <div className="stats-section__item">
              <h2 className="stats-section__value">
                <CountUp start={0} end={23} duration={1.5}></CountUp>
              </h2>
              <p className="stats-section__label">Happy Clients</p>
            </div>
          )}
          {counterState && (
            <div className="stats-section__item">
              <h2 className="stats-section__value">
                <CountUp start={0} end={12} duration={1.5}></CountUp>CR+
              </h2>
              <p className="stats-section__label">Business</p>
            </div>
          )}
          {counterState && (
            <div className="stats-section__item">
              <h2 className="stats-section__value">
                <CountUp start={0} end={96} duration={1.5}></CountUp>%
              </h2>
              <p className="stats-section__label">Success Rate</p>
            </div>
          )}
        </div>
      </ScrollTrigger>
      <div className="buttondiv">
        <Button>
          View Portfolio <FiArrowDownRight />
        </Button>
      </div>
    </div>
  );
};
