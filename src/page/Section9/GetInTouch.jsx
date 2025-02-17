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
    } else {
      console.error(`Element with ID ${sectionId} not found`);
    }
  };
  return (
    <>
      <footer
        id="contact"
        className="get-in-touch"
        aria-label="Get in touch section"
      >
        <div
          className="get-in-touch__container"
          aria-label="Get in touch container"
        >
          <h3 className="get-in-touch__title" aria-label="Get in touch title">
            Get in touch
          </h3>

          <div
            className="get-in-touch__content"
            aria-label="Get in touch content"
          >
            <div className="get-in-touch__logo" aria-label="Get in touch logo">
              <img src={hawksee} alt="Hawksee Logo" aria-label="Hawksee Logo" />
            </div>
            <div
              className="get-in-touch-about"
              aria-label="Get in touch about section"
            >
              <div
                className="get-in-touch__links"
                aria-label="Links to get in touch"
              >
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("about")}
                  aria-label="Navigate to About Us section"
                  href="#about"
                >
                  About Us
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("works")}
                  aria-label="Navigate to Our Works section"
                  href="#works"
                >
                  Our Works
                </a>
                <a
                  href="https://wa.me/919995000123"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "black",
                    color: "white",
                    padding: ".5rem 1rem",
                  }}
                  onClick={() => scrollToSection("contact")}
                  aria-label="Contact us via WhatsApp"
                >
                  Contact
                </a>

                <span
                  className="get-in-touch__email"
                  onClick={() => {
                    window.open("mailto:hello@hawksee.org", "_blank");
                  }}
                  aria-label="Email address for contact"
                >
                  hello@hawksee.org
                </span>
              </div>

              <div
                className="get-in-touch__address"
                aria-label="Get in touch address"
              >
                <h4 aria-label="Location heading for Calicut">Calicut: </h4>
                <p
                  className="addressnote"
                  aria-label="Address for Calicut location"
                >
                  5/639R, 1st Floor,
                  <br />
                  City Gate Building, Sales tax Office
                  <br /> Road, Mini Bypass Rd, Eranhippalam,
                  <br /> Kozhikode, Kerala 673006
                </p>

                <h4
                  style={{ marginTop: "10px" }}
                  aria-label="Location heading for Kochi"
                >
                  Kochi:{" "}
                </h4>
                <p
                  className="addressnote"
                  aria-label="Address for Kochi location"
                >
                  Second Floor,Trine Tower,
                  <br /> Seaport - Airport Rd, near Naipunya <br />
                  Public School, Thrikkakara, Kochi,
                  <br /> Kerala 682021
                </p>

                <a
                  href="tel:0495290199"
                  className="get-in-touch__phone"
                  aria-label="Phone number for contact"
                >
                  +91 9995000123
                </a>
              </div>
            </div>
            <div
              className="get-in-touch__smContact"
              aria-label="Social media contact information"
            >
              <a
                onClick={() =>
                  window.open("mailto:hello@hawksee.org", "_blank")
                }
                aria-label="Email contact for Hawksee"
                href="mailto:hello@hawksee.org"
              >
                info@hawksee.in
              </a>

              <a
                onClick={() => window.open("tel:0495290199")}
                aria-label="Click to call the phone number +91 9995000123"
                href="tel:0495290199"
              >
                +91 9995000123
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="social-media-container"
        aria-label="Social media container"
      >
        <div
          className="social-media-container__content"
          aria-label="Social media content"
        >
          <a
            href="https://www.facebook.com/hawkseedigital"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our Facebook page"
          >
            <FaFacebookF className="social-media-icon" />
          </a>
          <a
            href="https://www.instagram.com/hawkseedigital/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our Instagram page"
          >
            <FaInstagram className="social-media-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/hawksee-digital-marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our LinkedIn page"
          >
            <FaLinkedinIn className="social-media-icon" />
          </a>
          <a
            href="https://www.youtube.com/@hawkseedigitalmarketing2411"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our YouTube channel"
          >
            <FaYoutube className="social-media-icon" />
          </a>
          <a
            href="https://wa.me/919995000123"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our WhatsApp chat"
          >
            <FaWhatsapp className="social-media-icon" />
          </a>
          <a
            href="https://www.google.com/maps/place/Your+Location"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
            aria-label="Visit our location on Google Maps"
          >
            <FaMapMarkerAlt className="social-media-icon" />
          </a>
        </div>
      </div>
    </>
  );
};
