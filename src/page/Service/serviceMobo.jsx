import React from "react";
import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";

const serviceMobo = () => {
  const items = [
    {
      title: "Social Media Management",
      description:
        "Strategically managing and growing your brand’s presence across social platforms.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1739448455/1_srtdne.jpg",
    },
    {
      title: "Performance Marketing",
      description: "Data-driven ad campaigns to maximize conversions and ROI.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738314188/email-4284157_1280_thrf18.png",
    },
    {
      title: "Content Creation ",
      description:
        "High-quality visuals, videos, and graphics to enhance brand storytelling.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1739448624/3_mut2lz.jpg",
    },
    {
      title: "Video Production",
      description:
        "Professional video shoots and edits tailored to your brand’s message.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1739448455/4_y7k6i5.jpg",
    },
    {
      title: "Branding & Design",
      description:
        "Crafting unique brand identities with logos, collaterals, and design assets.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1739448454/5_w9vp9j.jpg",
    },
    {
      title: "Website Development",
      description:
        "User-friendly, conversion-optimized websites for businesses of all sizes.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1739448866/0_1_jmwqfc.jpg",
    },
    {
      title: "SEO & Digital Strategy",
      description:
        "Enhancing online visibility with tailored SEO and digital growth strategies.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1739448454/7_uxaltl.jpg",
    },
    {
      title: "Influencer Marketing",
      description:
        "Connecting brands with the right influencers for authentic engagement.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1739448453/8_syuy5b.jpg",
    },
    {
      title: "Reels Marketing",
      description:
        "Engaging short-form video strategies to boost brand awareness and reach.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1739448453/9_y2xcun.jpg",
    },
    {
      title: "Outdoor & Print Advertising",
      description:
        "Designing and printing leaflets, brochures, hoardings, and other marketing materials.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1739449175/00_oxksgi.jpg",
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
                style={{ fontWeight: "500" }}
                aria-label={`Title for ${item.title}`}
              >
                {item.title}
              </h1>
              <p
                className="work-section__para-style"
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
