import React from "react";
import hawksee from "./../../assets/HawkseeLogo.svg";

export const GetInTouch = () => {
  return (
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

          {/* <div className="get-in-touch__contact">
            <a href="mailto:hello@hawksee.org">hello@hawksee.org</a>
            <a href="tel:0495-290-199">0495-290 199</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
