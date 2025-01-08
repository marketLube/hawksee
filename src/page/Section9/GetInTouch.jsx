import React from "react";
import hawksee from "./../../assets/HawkseeLogo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const GetInTouch = () => {
  return (
    <>
      <div className="get-in-touch">
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
              </div>

              <div className="get-in-touch__address">
                <h3>Address 010</h3>
                <p className="addressnote">
                  Lorem ipsum dolor consectetur adipiscing euismod incididunt ut
                  dolore magna aliquam erat Ut wisi enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "black",
          height: "10vh",
          display: "flex",
          alignItems: "center",
          // justifyContent: "flex-start",
        }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}
        >
          <FaFacebook style={{ color: "white", fontSize: "34px" }} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}
        >
          <FaInstagram style={{ color: "white", fontSize: "34px" }} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}
        >
          <FaLinkedin style={{ color: "white", fontSize: "34px" }} />
        </a>
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}
        >
          <FaWhatsapp style={{ color: "white", fontSize: "34px" }} />
        </a>
      </div>
    </>
  );
};
