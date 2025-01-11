import React from "react";
import hawksee from "./../../assets/HawkseeLogo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export const GetInTouch = () => {
  return (
    <>
      <div id="contact" className="get-in-touch">
        <div className="get-in-touch__container">
          <h1 className="get-in-touch__title">Get in touch</h1>

          <div className="get-in-touch__content">
            <div className="get-in-touch__logo">
              <img src={hawksee} alt="Hawksee Logo" />
            </div>
            <div className="get-in-touch-about">
              <div className="get-in-touch__links">
                <a href="#about">About us</a>
                <a href="#works">Our Works</a>
                <a href="#stories">Stories</a>
                <a href="#contact">Contact</a>

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
                <h3>Address 010</h3>
                <p className="addressnote">
                  Lorem ipsum dolor
                  <br /> consectetur adipiscing <br />
                  euismod incididunt ut dolore
                  <br /> magna aliquam erat Ut wisi
                  <br /> enim ad minim veniam.
                </p>

                <a href="tel:0495290199" className="get-in-touch__phone">
                  0495-290 199
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-media-container">
        <div className="social-media-container__content">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <FaFacebookF className="social-media-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <FaInstagram className="social-media-icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <FaLinkedinIn className="social-media-icon" />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <FaWhatsapp className="social-media-icon" />
          </a>
        </div>
      </div>
    </>
  );
};
