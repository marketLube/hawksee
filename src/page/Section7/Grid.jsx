import React from "react";
import Logo1 from "../../assets/logos/Ayu.png";
import Logo2 from "../../assets/logos/bhima.png";
import Logo3 from "../../assets/logos/cams.png";
import Logo4 from "../../assets/logos/choice.png";
import Logo5 from "../../assets/logos/docdpro.png";
import Logo6 from "../../assets/logos/dubai.png";
import Logo7 from "../../assets/logos/eventia.png";
import Logo8 from "../../assets/logos/hawksee.png";
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

export const Grid = () => {
  const logos = [
    {
      id: 1,
      image: Logo1,
    },
    {
      id: 2,
      image: Logo2,
    },
    {
      id: 3,
      image: Logo3,
    },
    {
      id: 4,
      image: Logo4,
    },
    {
      id: 5,
      image: Logo5,
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
      image: Logo10,
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
      image: Logo18,
    },
  ];

  // Function to determine how many logos to show based on screen width
  const getVisibleLogos = () => {
    const width = window.innerWidth;
    if (width <= 480) return logos.slice(0, 6); // Mobile: show 6 logos (3 rows × 2 columns)
    if (width <= 768) return logos.slice(0, 9); // Tablet: show 8 logos
    return logos; // Desktop: show all logos
  };

  // Add window resize listener
  const [visibleLogos, setVisibleLogos] = React.useState(getVisibleLogos());

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleLogos(getVisibleLogos());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="logo-grid">
      {visibleLogos.map((logo) => (
        <div key={logo.id} className="logo-card">
          <img src={logo.image} alt="Company logo" className="logo-image" />
        </div>
      ))}
    </div>
  );
};
