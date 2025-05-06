import React from "react";

import Logo0 from "../../assets/logos/kaspersky.png";
import Logo1 from "../../assets/logos/Ayu.png";
import Logo2 from "../../assets/logos/bhima.png";
import Logo3 from "../../assets/logos/cams.png";
import Logo4 from "../../assets/logos/choice.png";
import Logo5 from "../../assets/logos/docdpro.png";
import Logo6 from "../../assets/logos/dubai.png";
import Logo7 from "../../assets/logos/Eventia.png";
import Logo8 from "../../assets/logos/Whitefield.png";
import Logo9 from "../../assets/logos/kudumbini.png";
import Logo10 from "../../assets/logos/national.png";
import Logo11 from "../../assets/logos/prime.png";
import Logo12 from "../../assets/logos/qpets.png";
import Logo13 from "../../assets/logos/rasha.png";
import Logo14 from "../../assets/logos/revive.png";
import Logo15 from "../../assets/logos/royal.png";
import Logo16 from "../../assets/logos/sma.png";
import Logo17 from "../../assets/logos/tanza.png";
import Logo18 from "../../assets/logos/artha.png";

// girid

export const Grid = () => {
  const logos = [
    {
      id: 1,
      image: Logo4,
    },
    {
      id: 2,
      image: Logo0,
    },
    {
      id: 3,
      image: Logo10,
    },
    {
      id: 4,
      image: Logo2,
    },
    {
      id: 5,
      image: Logo18,
    },
    {
      id: 6,
      image: Logo6,
    },
    {
      id: 7,
      image: Logo7,
    },
    {
      id: 8,
      image: Logo8,
    },
    {
      id: 9,
      image: Logo9,
    },
    {
      id: 10,
      image: Logo3,
    },
    {
      id: 11,
      image: Logo11,
    },
    {
      id: 12,
      image: Logo12,
    },
    {
      id: 13,
      image: Logo13,
    },
    {
      id: 14,
      image: Logo14,
    },
    {
      id: 15,
      image: Logo15,
    },
    {
      id: 16,
      image: Logo16,
    },
    {
      id: 17,
      image: Logo17,
    },
    {
      id: 18,
      image: Logo5,
    },
  ];

  const getVisibleLogos = () => {
    const width = window.innerWidth;
    if (width <= 480) return logos.slice(0, 8);
    if (width <= 768) return logos.slice(0, 9);
    return logos;
  };

  const [visibleLogos, setVisibleLogos] = React.useState(getVisibleLogos());

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleLogos(getVisibleLogos());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="logo-grid" aria-label="Logo grid section container">
      <h2 className="logo-grid-title">Some of Our Major Clients</h2>
      <div className="logo-grid-section" aria-label="Logo grid section">
        {visibleLogos.map((logo) => (
          <div key={logo.id} className="logo-card" aria-label="Logo card">
            <img
              src={logo.image}
              alt="Company logo"
              className="logo-image"
              aria-label="Company logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
