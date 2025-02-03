import React, { useState, useEffect, useRef } from "react";

const ImageComponent = ({ src, isActive, animationClass }) => (
  <div
    className={`serviceMain__image-wrapper`}
    style={{
      display: isActive ? "block" : "none",
      animation: isActive ? "blink 1s ease-in-out forwards" : "none",
    }}
    aria-label={isActive ? "Active service image" : "Inactive service image"}
  >
    <img src={src} alt="IMGS" aria-label="Service image" />
  </div>
);

const Service = () => {
  const [animationClass, setAnimationClass] = useState("");
  const contentArray = [
    {
      title: "Save the Environment",
      subtitle: "HS1",
      description:
        "With electric cars, you'll reduce smog pollution around you right now and cut greenhouse gases to protect people and the planet for years to come. Future generations will thank you.",
    },
    {
      title: "Embrace Renewable Energy",
      subtitle: "HS2",
      description:
        "On average, an electric car costs less than £1.30 to drive 100 miles (based on our GoElectric 35 tariff during off-peak hours) vs. £17.16(1) for a petrol car. Save on Fuel and Maintenance Costs.",
    },
    {
      title: "Conserve Water",
      subtitle: "HS3",
      description:
        "Simply stated, electric cars are fun to drive–with quick acceleration and enviable performance. Unlike gas-powered cars, electric motors produce peak torque from a standstill, without the buildup gasoline engines require to reach maximum power.",
    },
  ];

  const images = [
    "https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2/66b0b02ee9974feab54aa9b4_unsplash_R-6HkET2pTU.png",
    "https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2/66b0b02de9974feab54aa8fd_Car%203.png",
    "https://cdn.prod.website-files.com/66b0a2749f8ac3c146b191c2/66b0b02ee9974feab54aa9b4_unsplash_R-6HkET2pTU.png",
  ];

  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const scrollPosition = window.scrollY;
      const containerTop = scrollContainer.offsetTop;
      const sectionHeight = window.innerHeight;
      const relativeScroll = scrollPosition - containerTop;
      const newIndex = Math.floor(relativeScroll / sectionHeight);

      if (newIndex >= 0 && newIndex < contentArray.length) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentArray.length, activeIndex]);

  useEffect(() => {
    setAnimationClass("blinking-effect");

    const timer = setTimeout(() => {
      setAnimationClass("");
    }, 1000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div
      className="scroll-container"
      ref={scrollContainerRef}
      id="service"
      aria-label="Service section scroll container"
    >
      <div className="serviceMain" aria-label="Main service section">
        <div
          className="serviceMain__image-container"
          aria-label="Image container"
        >
          {images.map((image, index) => (
            <ImageComponent
              key={index}
              src={image}
              isActive={index === activeIndex}
              animationClass={animationClass}
            />
          ))}
        </div>
        <div
          className="serviceMain__text-container"
          aria-label="Service main text container"
        >
          {contentArray.map((content, index) => (
            <>
              <div
                className={`serviceMain__content-item ${
                  index === activeIndex
                    ? "serviceMain__content-item-active"
                    : ""
                } ${index === 0 ? "serviceMain__content-item-fixed" : ""}`}
                key={index}
                aria-label={`Service content item ${index + 1}`}
                style={
                  index === activeIndex && index !== 0
                    ? {
                        opacity: 1,
                        marginTop:
                          index === 2 ? "-8rem" : index === 3 ? "-11rem" : "0",
                      }
                    : index === 1 && activeIndex === 2
                    ? {
                        transform: "translateY(0rem)",
                      }
                    : {
                        transform: "translateY(8rem)",
                        marginTop:
                          index === 2 ? "-8rem" : index === 3 ? "-11rem" : "0",
                      }
                }
              >
                <h4
                  className={`serviceMain__main-subtitle${
                    index === activeIndex ? "" : "-fade"
                  }`}
                  aria-label={`Service subtitle for item ${index + 1}`}
                >
                  {content.subtitle}
                </h4>
                <h1
                  className={`serviceMain__main-title${
                    index === activeIndex ? "" : "-fade"
                  }`}
                  aria-label={`Service title for item ${index + 1}`}
                >
                  {content.title}
                </h1>
                <p
                  className={`serviceMain__description${
                    index === activeIndex ? "" : "-fade"
                  }`}
                  aria-label={`Service description for item ${index + 1}`}
                >
                  {content.description}
                </p>
              </div>
            </>
          ))}
          <div
            className="serviceMain__content-item-button"
            aria-label="Service content item button"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Service;
