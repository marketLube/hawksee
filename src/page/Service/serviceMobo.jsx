import React from "react";
import { Button } from "../../components/Button";
import { FiArrowUpRight } from "react-icons/fi";

const serviceMobo = () => {
  const items = [
    {
      title: "Social Media Management",
      description:
        "Strategically managing and growing your brand’s presence across social platforms.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738314849/medium-shot-men-holding-smartphone_1_1_g4xoqb.jpg",
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
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738314736/side-view-woman-using-computer-laptop_2_jm2kju.jpg",
    },
    {
      title: "Video Production",
      description:
        "Professional video shoots and edits tailored to your brand’s message.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738314191/pexels-bertellifotografia-2608519_qyt9rk.jpg",
    },
    {
      title: "Branding & Design",
      description:
        "Crafting unique brand identities with logos, collaterals, and design assets.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738314188/pexels-knownasovan-57690_lprrdo.jpg",
    },
    {
      title: "Website Development",
      description:
        "User-friendly, conversion-optimized websites for businesses of all sizes.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738314191/pexels-divinetechygirl-1181359_obar07.jpg",
    },
    {
      title: "SEO & Digital Strategy",
      description:
        "Enhancing online visibility with tailored SEO and digital growth strategies.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738314188/32010_wacweg.jpg",
    },
    {
      title: "Influencer Marketing",
      description:
        "Connecting brands with the right influencers for authentic engagement.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738314280/influencer-posting-social-media_1_yi3qqt.jpg",
    },
    {
      title: "Reels Marketing",
      description:
        "Engaging short-form video strategies to boost brand awareness and reach.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738314185/5140568_u1ugv7.jpg",
    },
    {
      title: "Outdoor & Print Advertising",
      description:
        "Designing and printing leaflets, brochures, hoardings, and other marketing materials.",
      img: "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738314187/pexels-valeriiamiller-3752659_ct5hxe.jpg",
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
    >
      <div className="mob-work-section__scroll-container">
        {items.map((item, index) => (
          <div key={index} className="mob-work-section__item">
            <div className="mob-work-section__item-image-container">
              <img src={item.img} alt={item.heading} />
            </div>
            <div className="mob-work-section__item-pills">
              <h4 className="work-section__subtitle-style">{item.subtitle}</h4>
              <h1
                className="work-section__heading-style"
                style={{ fontWeight: "500" }}
              >
                {item.title}
              </h1>
              <p className="work-section__para-style">{item.description}</p>
            </div>
            <div className="buttondivPortfolioSer">
              <Button onClick={handleClick}>
                <a href="#projects">
                  View All <FiArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default serviceMobo;
