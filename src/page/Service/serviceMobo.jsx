import React from "react";
import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";

const serviceMobo = () => {
  const items = [
    {
      title: "Branding & Identity",
      description:
        "Creating distinctive brand identities through innovative logos, marketing materials, and comprehensive design solutions.",
      img: "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-03_s18foa.webp",
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
                onClick={() => handleClick(item.title, index)}
                aria-label="View all projects button"
              >
                View service <FiArrowUpRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default serviceMobo;
