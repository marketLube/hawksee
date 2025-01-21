import React from "react";
import hawksee from "./../../assets/hawksee.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const GetInTouch = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      console.log(`Scrolling to section: ${sectionId}`);
    } else {
      console.error(`Element with ID ${sectionId} not found`);
    }
  };
  return (
    <>
      <footer id="contact" className="get-in-touch">
        <div className="get-in-touch__container">
          <h1 className="get-in-touch__title">Get in touch</h1>

          <div className="get-in-touch__content">
            <div className="get-in-touch__logo">
              <img src={hawksee} alt="Hawksee Logo" />
            </div>
            <div className="get-in-touch-about">
              <div className="get-in-touch__links">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("about")}
                >
                  About us
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("works")}
                >
                  Our Works
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("stories")}
                >
                  Stories
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </a>

                <span
                  className="get-in-touch__email"
                  onClick={() => {
                    window.open("mailto:hello@hawksee.org", "_blank");
                  }}
                >
                  hello@hawksee.org
                </span>
              </div>

              <div className="get-in-touch__address">
                <h3>Calicut: </h3>
                <p className="addressnote">
                  5/639R, 1st Floor,
                  <br />
                  City Gate Building,Sales tax Office
                  <br /> Road, Mini Bypass Rd, Eranhippalam,
                  <br /> Kozhikode, Kerala 673006
                </p>

                <h3 style={{ marginTop: "10px" }}>Kochi: </h3>
                <p className="addressnote">
                  Second Floor,Trine Tower,
                  <br /> Seaport - Airport Rd, near Naipunya <br />
                  Public School, Thrikkakara, Kochi,
                  <br /> Kerala 682021
                </p>

                <a href="tel:0495290199" className="get-in-touch__phone">
                  9995000123
                </a>
              </div>
            </div>
            <div className="get-in-touch__smContact">
              <span
                onClick={() =>
                  window.open("mailto:hello@hawksee.org", "_blank")
                }
              >
                info@hawksee.in
              </span>
              <span onClick={() => window.open("tel:0495290199")}>
                0495-290 199
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className="social-media-container">
        <div className="social-media-container__content">
          <a
            href="https://www.facebook.com/hawkseedigital"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <FaFacebookF className="social-media-icon" />
          </a>
          <a
            href="https://www.instagram.com/hawkseedigital/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <FaInstagram className="social-media-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/hawksee-digital-marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <FaLinkedinIn className="social-media-icon" />
          </a>
          <a
            href="https://www.youtube.com/@hawkseedigitalmarketing2411"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <FaYoutube className="social-media-icon" />
          </a>
          <a
            href="https://wa.me/919995000123"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <FaWhatsapp className="social-media-icon" />
          </a>
          <a
            href="https://www.google.com/maps/place/Your+Location"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <FaMapMarkerAlt className="social-media-icon" />
          </a>
        </div>
      </div>
    </>
  );
};
