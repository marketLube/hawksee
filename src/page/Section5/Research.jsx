import React, { useEffect, useState, useRef } from "react";
import { Button } from "../../components/Button";
import { FiArrowDownRight } from "react-icons/fi";

export const Research = () => {
  const [headingText, setHeadingText] = useState("Research");
  const [paraText, setParaText] = useState(
    "Look for grammar, spelling mistakes, and make sure you proper nouns. A paragraph three parts:"
  );

  const textArray = [
    "Research",
    "Analyze",
    "Discover",
    "Innovate",
    "Learn",
    "Searching",
    "Study",
  ];

  const paraArray = [
    "Look for grammar, spelling mistakes, and make sure you proper nouns. A paragraph three parts:",
    "Examining data patterns and trends to draw meaningful insights and conclusions.",
    "Exploring new possibilities and uncovering hidden connections in research.",
    "Creating new solutions and pushing boundaries through creative thinking.",
    "Gaining knowledge and understanding through systematic study and practice.",
    "Finding specific information and resources through methodical investigation.",
    "Dedicating time to understand complex topics and master new skills.",
  ];

  const containerRef = useRef(null);
  const lastScrollTime = useRef(0);
  const lastIndex = useRef(0);

  // Throttle function to control scroll speed
  const throttle = (callback, delay) => {
    const now = new Date().getTime();
    if (now - lastScrollTime.current >= delay) {
      callback();
      lastScrollTime.current = now;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      throttle(() => {
        const rect = container.getBoundingClientRect();
        if (rect.top <= 0) {
          const scrolledPastTop = Math.abs(rect.top);
          // Adjust this value to control scroll sensitivity
          const scrollMultiplier = 0.5; // Lower number = slower text changes
          const viewportHeight = window.innerHeight;
          const scrollSegment =
            (viewportHeight / textArray.length) * scrollMultiplier;

          const index = Math.min(
            Math.floor(scrolledPastTop / scrollSegment),
            textArray.length - 1
          );

          // Only update if index has changed
          if (index !== lastIndex.current) {
            lastIndex.current = index;
            setHeadingText(textArray[index]);
            setParaText(paraArray[index]);
          }
        } else {
          if (lastIndex.current !== 0) {
            lastIndex.current = 0;
            setHeadingText(textArray[0]);
            setParaText(paraArray[0]);
          }
        }
      }, 200); // Adjust this delay (in ms) to control update frequency
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textArray, paraArray]);

  return (
    <div className="research" ref={containerRef}>
      <div className="research-scrol">
        <div className="research-bttn">
          <Button>
            The Process <FiArrowDownRight />
          </Button>
        </div>
        <div
          className="research-head"
          style={{
            transition: "opacity 0.3s ease-in-out",
            opacity: 6,
          }}
        >
          {headingText}
        </div>
        <p
          className="research-para"
          style={{
            transition: "opacity 0.3s ease-in-out",
            opacity: 8,
          }}
        >
          {paraText}
        </p>
      </div>
    </div>
  );
};
