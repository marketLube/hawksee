import { useState, useEffect } from "react";
import Aboutbanner from "../../assets/About/Aboutbanner.jpg";
import About from "../../assets/About/About.jpg";
import { FiArrowLeft } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function Aboutus() {
  const [isAnimate, setIsAnimate] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAnimate(true);
    return () => setIsAnimate(false);
  }, [location]);

  return (
    <div
      className={`about-container ${
        isAnimate ? "about-container--active" : ""
      }`}
    >
      <button
        className="back-button"
        onClick={() => window.history.back()}
        style={{
          borderRadius: "50%",
          background: "transparent",
          border: "1px solid white",
          cursor: "pointer",
          zIndex: 100,
          width: "40px",
          height: "40px",
        }}
        aria-label="Go back to the previous page"
      >
        <FiArrowLeft size={20} color="white" />
      </button>
      <section className="hero-section">
        <h1>About us</h1>
      </section>

      <section className="story-section">
        <div className="story-content">
          <h2>The Hawksee Story </h2>
          <div className="story-paragraphs">
            <p>
              At HAWKSEE Digital Solutions, we don't just market—we create
              experiences that connect, engage, and convert. Established in
              2017, we started as a group of passionate marketers and
              storytellers, driven by the idea of making marketing more
              strategic, data-driven, and impactful.
            </p>

            <p>
              From branding and content marketing to social media strategies and
              video production, we help businesses stand out in a crowded
              digital world. Our in-house production wing, HawkSpot, crafts
              high-quality video content, while DocsPro focuses exclusively on
              healthcare marketing. Over the years, we have expanded operations
              and now serve clients across the Middle East.
            </p>

            <div className={`additional-content ${showMore ? "show" : ""}`}>
              <p>
                What makes us different? We stay ahead of trends, understand
                customer pain points, and ensure every campaign delivers real
                ROI. Our team of strategists, designers, and content creators
                works together like a well-oiled machine, turning ideas into
                marketing that matters.
              </p>
              <p>
                At HAWKSEE, we believe in smart, creative, and result-driven
                marketing—because your brand deserves nothing less. Let's build
                something amazing together.
              </p>
            </div>

            <button
              className="read-more-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
        <img
          src={Aboutbanner}
          alt="Hawksee team at work"
          className="story-image"
        />
      </section>

      <section className="vision-section">
        <img src={About} alt="Modern office space" className="vision-image" />
        <div className="vision-content">
          <h2>Our Vision</h2>
          <div className="vision-subtitle">
            <h3>Your Success,</h3>
            <h3>Digitally Transformed</h3>
          </div>
          <p>
            To consistently deliver passionate and tailored-fit services to
            clients for their individual business needs by leveraging
            transformative and holistic digital marketing solutions using our
            deep domain expertise.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-header">
          <h2>Our Mission</h2>
          <h3>Customer-Centric, Innovation-Fueled Growth</h3>
        </div>

        <div className="mission-grid">
          <div className="mission-card">
            <p>
              Work alongside our clients, helping them become visionaries and
              trendsetters in their industries through expert digital marketing
              solutions, including strategy consulting, branding, social media,
              web services, and SEO.
            </p>
          </div>

          <div className="mission-card">
            <p>
              Be known for our disciplined and customer-centric approach towards
              providing the highest value of satisfaction to every customer, we
              work with.
            </p>
          </div>

          <div className="mission-card">
            <p>
              Be leagues beyond our competitors by continuously introducing new
              ideas, original and creative thinking thus profit the business for
              further growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
