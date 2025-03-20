import { useEffect, useState, useRef } from "react";
import { useHash } from "./useHash";
import { FiArrowLeft } from "react-icons/fi";

const ServiceDetails = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedNav, setSelectedNav] = useState("Show All");
  const [serviceData, setServiceData] = useState({ title: "", index: 0 });

  const servicesData = [
    {
      id: 1,
      title: "Branding & Identity",
      subtitle: "Make Your Brand Unforgettable",

      descPara1:
        "Your brand is more than just a logo—it's your voice, personality, and first impression. We craft brands that stand out and stay memorable with the perfect mix of design, strategy, and storytelling.",
      descPara2:
        "From logos, color palettes, and typography to brand positioning and messaging, we ensure every element reflects who you are and what you stand for. Whether you're starting fresh or rebranding, we help build a strong, consistent identity that connects with your audience and leaves a lasting impact.",
      descPara3:
        "Because branding isn't just about looking good—it's about being recognized, remembered, and trusted.",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-03_s18foa.webp",
    },
    {
      id: 2,
      title: "Performance Marketing",
      subtitle: "Data-driven ad campaigns to maximize conversions and ROI",
      descPara1:
        "We create data-driven ad campaigns that target the right audience, measure results, and optimize for maximum ROI.",
      descPara2:
        "From Google Ads to social media campaigns, we ensure your brand reaches the right people at the right time with the right message.",
      descPara3:
        "Our performance marketing strategies are designed to deliver measurable results, helping you achieve your business goals.",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-02_yv8ubf.webp",
    },
    {
      id: 3,
      title: "Social Media & Content Marketing",
      subtitle: "Get Noticed, Get Engaged",

      descPara1:
        "Social media is more than just posts and likes—it's about creating real connections. We craft scroll-stopping content and data-driven strategies that keep your audience hooked and engaged.",
      descPara2:
        "From viral reels and engaging posts to performance-driven ad campaigns, we ensure your brand is always in front of the right people. Whether it's Instagram, LinkedIn, Facebook, or TikTok, we create content that speaks your audience's language.",
      descPara3:
        "No more posting just for the sake of it—we turn your social media into a powerhouse for growth and engagement.",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-01_wczbap.webp",
    },
    {
      id: 4,
      title: "Creative Content & Video Production",
      subtitle: "Make an Impact",

      descPara1:
        "Boring content doesn't sell. Great content tells a story, sparks interest, and drives action. Our team at HawkSpot creates high-quality videos, reels, and motion graphics that demand attention..",
      descPara2:
        "From brand stories and product promos to trendy reels and engaging ads, we make sure your content doesn't just get seen—it gets remembered.",
      descPara3:
        "In the age of short-form content, standing out is everything. Let's create content that entertains, informs, and converts.",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-04_htxnpe.webp",
    },
    {
      id: 5,
      title: "Website Development & SEO",
      subtitle: "Be Found, Be Fast",

      descPara1:
        "A slow, outdated website is a business killer. We design and develop SEO-powered, high-performance websites that load fast, look great, and turn visitors into customers.",
      descPara2:
        "But a great site isn't enough—you need to be searchable. Our SEO strategies make sure your brand ranks higher on Google, bringing in more traffic, leads, and conversions organically.",
      descPara3:
        "Your website should be your hardest-working sales tool—we make sure it does the job.",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779410/hawksee-06_dqikyl.webp",
    },

    {
      id: 6,
      title: "UGC (User-Generated Content) & Outdoor Marketing",
      subtitle: "Real Voices, Real Impact",

      descPara1:
        "People trust authentic content more than ads. That's why UGC (User-Generated Content) is the new marketing gold. We help brands leverage real customer stories, testimonials, and organic brand interactions to build credibility and trust.",
      descPara2:
        "Beyond digital, we also take your brand to the streets—billboards, events, activations—making sure you're seen where it matters. Whether it's a trending UGC campaign or an eye-catching outdoor promotion, we put your brand in the spotlight.",
      descPara3:
        "Because when real people talk about your brand, people listen.",
      image:
        "https://res.cloudinary.com/dznxxalrb/image/upload/v1739779409/hawksee-10_xdqwt7.webp",
    },
  ];

  const contentRef = useRef(null);

  useHash({ setIsAnimate });

  useEffect(() => {
    if (!isAnimate) return;

    const initialScrollY = window.scrollY;

    const handleWheel = (e) => {
      if (contentRef.current.scrollHeight > contentRef.current.clientHeight) {
        e.preventDefault();
        window.scrollTo(0, initialScrollY);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isAnimate]);

  const handleTouchStart = (e) => {
    if (!isAnimate) return;
    setIsDragging(true);
    setStartY(e.touches ? e.touches[0].clientY : e.clientY);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !isAnimate) return;
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = startY - currentY;
    setStartY(currentY);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const progressPercentage = (scrollPosition / (window.innerHeight * 4)) * 100;

  useEffect(() => {
    const handlePopState = () => {
      setIsAnimate(false);
      setScrollPosition(0);
      setIsDragging(false);
      setStartY(0);
      setActiveIndex(0);
      setSelectedNav("Show All");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      setIsAnimate(false);
      setScrollPosition(0);
      setIsDragging(false);
      setStartY(0);
      setActiveIndex(0);
      setSelectedNav("Show All");
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#serviceDetails") {
        // Add a small delay to ensure the component is mounted
        setTimeout(() => {
          setIsAnimate(true);
          // Get the stored data
          const storedData = sessionStorage.getItem("selectedService");
          if (storedData) {
            setServiceData(JSON.parse(storedData));
          }
        }, 100);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      sessionStorage.removeItem("selectedService");
    };
  }, []);

  const handleBackClick = () => {
    setServiceData({ title: "", index: 0 });

    sessionStorage.removeItem("selectedService");

    window.history.back();
  };

  const handleNextService = () => {
    const nextIndex = serviceData.index + 1;
    if (nextIndex < servicesData.length) {
      const nextService = {
        title: servicesData[nextIndex].title,
        index: nextIndex,
      };
      setServiceData(nextService);
      sessionStorage.setItem("selectedService", JSON.stringify(nextService));
    }
  };

  const handlePrevService = () => {
    const prevIndex = serviceData.index - 1;
    if (prevIndex >= 0) {
      const prevService = {
        title: servicesData[prevIndex].title,
        index: prevIndex,
      };
      setServiceData(prevService);
      sessionStorage.setItem("selectedService", JSON.stringify(prevService));
    }
  };

  const currentService = servicesData[serviceData.index] || {
    title: "",
    subtitle: "",
    description: "",
    image: "",
  };

  return (
    <div
      id="serviceDetails"
      className={`serviceDetail ${isAnimate ? "serviceDetail--active" : ""}`}
      style={{
        height: isAnimate ? "500vh" : "0",
        backgroundColor: isAnimate ? "rgba(0, 0, 0, 0.5)" : "transparent",
        pointerEvents: isAnimate ? "auto" : "none",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      aria-label="serviceDetail section"
    >
      <div
        className="serviceDetail__body"
        style={{
          transform: isAnimate
            ? `translateY(calc(-${progressPercentage}% + 0vh))`
            : "translateY(150vh)",
          pointerEvents: "auto",
        }}
        ref={contentRef}
        aria-label="serviceDetail body section"
      >
        <div
          className="serviceDetail-body-scroll"
          style={{ height: "100vh", overflowY: "scroll" }}
        >
          <div
            className="serviceDetail__content"
            aria-label="serviceDetail content section"
          >
            <button
              className={`back-button-service ${
                isAnimate
                  ? "animate-slide-up show-animation"
                  : "animate-slide-up"
              }`}
              onClick={handleBackClick}
              style={{
                borderRadius: "50%",
                background: "transparent",
                border: "1px solid white",
                cursor: "pointer",
                zIndex: 100,
                width: "40px",
                height: "40px",
                animationDelay: "0.1s",
              }}
              aria-label="Go back to the previous page"
            >
              <FiArrowLeft size={20} color="white" />
            </button>
            {/* <h2 className="serviceDetail__title">Service</h2> */}
          </div>

          <div className="service-details-container">
            <div className="service-details-container__content">
              <div>
                <h1
                  className={`service-title ${
                    isAnimate
                      ? "animate-slide-up show-animation"
                      : "animate-slide-up"
                  }`}
                  style={{ animationDelay: "0.2s" }}
                >
                  {currentService.title}
                </h1>
                <p
                  className={`service-subtitle ${
                    isAnimate
                      ? "animate-slide-up show-animation"
                      : "animate-slide-up"
                  }`}
                  style={{ animationDelay: "0.3s" }}
                >
                  {currentService.subtitle}
                </p>
              </div>
              <div className="service-description-container">
                <p
                  className={`service-description1 ${
                    isAnimate
                      ? "animate-slide-up show-animation"
                      : "animate-slide-up"
                  }`}
                  style={{ animationDelay: "0.4s" }}
                >
                  {currentService.descPara1}
                </p>
                <p
                  className={`service-description2 ${
                    isAnimate
                      ? "animate-slide-up show-animation"
                      : "animate-slide-up"
                  }`}
                  style={{ animationDelay: "0.5s" }}
                >
                  {currentService.descPara2}
                </p>
                <p
                  className={`service-description3 ${
                    isAnimate
                      ? "animate-slide-up show-animation"
                      : "animate-slide-up"
                  }`}
                  style={{ animationDelay: "0.6s" }}
                >
                  {currentService.descPara3}
                </p>
              </div>
            </div>
            <div className="service-details-container__image">
              <img
                className={`service-image ${
                  isAnimate
                    ? "animate-slide-up show-animation"
                    : "animate-slide-up"
                }`}
                src={currentService.image}
                alt={currentService.title}
                style={{ animationDelay: "0.7s" }}
              />
            </div>
          </div>
          <div
            className={`service__navigation ${
              isAnimate ? "animate-slide-up show-animation" : "animate-slide-up"
            }`}
            style={{ animationDelay: "0.8s" }}
          >
            {serviceData.index > 0 && (
              <button className="nav-btn prev" onClick={handlePrevService}>
                ← Previous
              </button>
            )}
            <div className="nav-spacer"></div>
            {serviceData.index < servicesData.length - 1 && (
              <button className="nav-btn next" onClick={handleNextService}>
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
