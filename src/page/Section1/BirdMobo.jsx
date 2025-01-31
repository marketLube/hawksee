import React, { useEffect, useState, useRef } from "react";
import BirdMobile from "../../assets/birdForMobile.svg";
import { useMediaQuery } from "react-responsive";

export const BirdMobo = () => {
  const isSmallMobile = useMediaQuery({ query: "(max-width: 578px)" });

  return (
    <section id="bird" className="bird">
      <div className="caption">
        <a>
          <p>Every Brand {isSmallMobile && <br />} Needs Hawksee</p>
        </a>
      </div>
      <div className="bird-container">
        <img className="bird-image" alt="" src={BirdMobile} />
      </div>
    </section>
  );
};
