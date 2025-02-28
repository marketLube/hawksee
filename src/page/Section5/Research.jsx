import React, { useEffect } from "react";

export const Research = () => {
  useEffect(() => {
    const handleScroll = () => {
      const numbers = document.querySelectorAll(".research__step-number");
      const scrollPosition = window.scrollY;

      numbers.forEach((number) => {
        // Get the number's position relative to the viewport
        const rect = number.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;

        // Calculate the distance from the center of the viewport
        const distanceFromCenter = elementCenter - viewportCenter;
        const movement = distanceFromCenter * 0.1;

        // Apply the transform with cubic-bezier transition
        number.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
        number.style.transform = `translate(-50%, calc(-50% + ${movement}px))`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Initial call to set positions
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      number: "1",
      title: "Preparation",
      description:
        "Market research, brain storming for result oriented strategy development",
    },
    {
      number: "2",
      title: "Execution",
      description:
        "Execute the marketing strategy in the most impactful ways to reach the target customers",
    },
    {
      number: "3",
      title: "Analysis",
      description:
        "Performance monitoring and analysis of the marketing activities.",
    },
    {
      number: "4",
      title: "Optimization  ",
      description:
        "Optimization based on results to create the maximum results.",
    },
  ];

  return (
    <div className="research">
      <div className="research__header">
        {/* <p className="research__subtitle">OUR PROCESS</p>
        <h2 className="research__title">Easy as 1, 2, 3.</h2> */}
      </div>

      <div className="research__steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`research__step ${
              index % 2 === 0 ? "research__step--left" : "research__step--right"
            }`}
          >
            <div className="research__step-number">{step.number}</div>
            <div className="research__step-content">
              <h3 className="research__step-title">
                <span> {step.number}</span>
                <span> {step.title}</span>
              </h3>
              <p className="research__step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
