import React from "react";
import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";

const serviceMobo = () => {
  const items = [
    {
      title: "Social Media Management",
      description:
        "Strategically managing and growing your brand’s presence across social platforms.",
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-01_wczbap.webp",
    },
    {
      title: "Performance Marketing",
      description: "Data-driven ad campaigns to maximize conversions and ROI.",
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-02_yv8ubf.webp",
    },
    {
      title: "Content Creation ",
      description:
        "High-quality visuals, videos, and graphics to enhance brand storytelling.",
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-05_fqv7yy.webp",
    },
    {
      title: "Video Production",
      description:
        "Professional video shoots and edits tailored to your brand’s message.",
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-04_htxnpe.webp",
    },
    {
      title: "Branding & Design",
      description:
        "Crafting unique brand identities with logos, collaterals, and design assets.",
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-03_s18foa.webp",
    },
    {
      title: "Website Development",
      description:
        "User-friendly, conversion-optimized websites for businesses of all sizes.",
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-06_dqikyl.webp",
    },
    {
      title: "SEO & Digital Strategy",
      description:
        "Enhancing online visibility with tailored SEO and digital growth strategies.",
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-07_v1tvb0.webp",
    },
    {
      title: "Influencer Marketing",
      description:
        "Connecting brands with the right influencers for authentic engagement.",
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-08_mdp7e5.webp",
    },
    {
      title: "Reels Marketing",
      description:
        "Engaging short-form video strategies to boost brand awareness and reach.",
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-09_y1yjqy.webp",
    },
    {
      title: "Outdoor & Print Advertising",
      description:
        "Designing and printing leaflets, brochures, hoardings, and other marketing materials.",
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-10_xdqwt7.webp",
    },
  ];

  const handleClick = () => {
    window.location.hash = "#projects";
    window.scrollTo({
      top: window.scrollY + 100,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="mob-work-section"
      id="service"
      style={{ backgroundColor: "black" }}
      aria-label="Mobile work section for services"
    >
      <div
        className="mob-work-section__scroll-container"
        aria-label="Scroll container for service items"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="mob-work-section__item"
            aria-label={`Service item ${index + 1}`}
          >
            <div
              className="mob-work-section__item-image-container"
              aria-label={`Image for ${item.title}`}
            >
              <img
                src={item.img}
                alt={item.heading}
                aria-label={`Image representing ${item.title}`}
              />
            </div>
            <div
              className="mob-work-section__item-pills"
              aria-label={`Details for ${item.title}`}
            >
              <h4
                className="work-section__subtitle-style"
                aria-label={`Subtitle for ${item.title}`}
              >
                {item.subtitle}
              </h4>
              <h1
                className="work-section__heading-style"
                style={{ fontWeight: "700" }}
                aria-label={`Title for ${item.title}`}
              >
                {item.title}
              </h1>
              <p
                className="work-section__para-style"
                style={{ fontWeight: "200" }}
                aria-label={`Description for ${item.title}`}
              >
                {item.description}
              </p>
            </div>
            <div
              className="buttondivPortfolioSer"
              aria-label="Button to view all projects"
            >
              <Button
                onClick={handleClick}
                aria-label="View all projects button"
              >
                View All <FiArrowUpRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default serviceMobo;
