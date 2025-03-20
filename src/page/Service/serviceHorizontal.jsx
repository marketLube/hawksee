import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";

export default function StudyIn() {
  const countries = [
    {
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-03_s18foa.webp",
      title: "Branding & Identity",
      description:
        "Creating distinctive brand identities through innovative logos, marketing materials, and comprehensive design solutions.",
    },
    {
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-02_yv8ubf.webp",
      title: "Performance Marketing",
      description: "Data-driven ad campaigns to maximize conversions and ROI",
    },
    {
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-01_wczbap.webp",
      title: "Social Media & Content Marketing",
      description:
        "Expertly curating and expanding your brand's visibility and engagement on various social media platforms.",
    },
    {
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-04_htxnpe.webp",
      title: "Creative Content & Video Production",
      description:
        "Delivering exceptional visuals, engaging videos, and compelling graphics to elevate brand storytelling.",
    },
    {
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-06_dqikyl.webp",
      title: "Website Development & SEO",
      description:
        "User-friendly, conversion-optimized websites for businesses of all sizes and SEO strategies to boost online visibility.",
    },
    {
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-10_xdqwt7.webp",
      title: "Influencer & Outdoor Marketing",
      description:
        "Creating impactful marketing campaigns with a focus on high-quality printed materials, including brochures, flyers, and outdoor advertising.",
    },
  ];

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getFlagsTransform = () => {
    const breakpoints = [
      { width: 1700, divisor: 4.5, offsetDivisor: 2.95 },
      { width: 1600, divisor: 4, offsetDivisor: 2.55 },
      { width: 1400, divisor: 3, offsetDivisor: 2.42 },
      { width: 1200, divisor: 3.5, offsetDivisor: 2.2 },
      { width: 1100, divisor: 3.2, offsetDivisor: 1.9 },
      { width: 1024, divisor: 3.2, offsetDivisor: 1.7 },
      { width: 768, divisor: 3.5, offsetDivisor: 1.3 },
      { width: 992, divisor: 3.2, offsetDivisor: 1 },
      { width: 800, divisor: 3.2, offsetDivisor: 1 },
      { width: 0, divisor: 3, offsetDivisor: 2 },
    ];

    const { divisor, offsetDivisor } = breakpoints.find(
      (bp) => screenWidth >= bp.width
    );

    return [
      `calc(50vw - ${100 / divisor}vw)`,
      `calc(-${(countries.length - 2) * (100 / offsetDivisor)}vw)`,
    ];
  };

  const flagsX = useTransform(scrollYProgress, [0, 1], getFlagsTransform());

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const totalSections = countries.length - 1;
      const scrollPosition = latest * totalSections;
      const currentIndex = Math.round(scrollPosition);

      const boundedIndex = Math.min(
        countries.length - 1,
        Math.max(0, currentIndex)
      );

      setActiveIndex(boundedIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, countries.length]);

  const handleClick = (title, index) => {
    window.location.hash = "serviceDetails";

    sessionStorage.setItem(
      "selectedService",
      JSON.stringify({
        title: title,
        index: index,
      })
    );
  };
  return (
    <div
      ref={containerRef}
      className="researchNew"
      style={{
        height: `${countries.length * 100}vh`,
      }}
      id="country"
    >
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div className="researchNew-container">
          <motion.div
            className="researchNew-header"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="header-content">
              <h2>{countries[activeIndex].title}</h2>
              <h3>{countries[activeIndex].description}</h3>
            </div>
            <div
              className="buttondivPortfolioSer"
              aria-label="Button container for portfolio section"
            >
              <Button
                aria-label="View all button"
                onClick={() =>
                  handleClick(countries[activeIndex].title, activeIndex)
                }
              >
                View Service{" "}
                <FiArrowUpRight aria-label="Arrow icon for view all" />
              </Button>
            </div>
          </motion.div>

          <div className="researchNew-flags-wrapper">
            <motion.div
              className="researchNew-flags"
              style={{ x: flagsX }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
              }}
            >
              {countries.map((country, index) => (
                <motion.div
                  key={index}
                  className={`country-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  animate={{
                    opacity: activeIndex === index ? 1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={country.img} alt={`${country.country} flag`} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
