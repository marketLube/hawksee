import React from "react";

// import Logo0 from "../../assets/logos/kaspersky.png";
// import Logo1 from "../../assets/logos/Ayu.png";
// import Logo2 from "../../assets/logos/bhima.png";
// import Logo3 from "../../assets/logos/cams.png";
// import Logo4 from "../../assets/logos/choice.png";
// import Logo5 from "../../assets/logos/docdpro.png";
// import Logo6 from "../../assets/logos/dubai.png";
// import Logo7 from "../../assets/logos/Eventia.png";
// import Logo8 from "../../assets/logos/Whitefield.png";
// import Logo9 from "../../assets/logos/kudumbini.png";
// import Logo10 from "../../assets/logos/national.png";
// import Logo11 from "../../assets/logos/prime.png";
// import Logo12 from "../../assets/logos/qpets.png";
// import Logo13 from "../../assets/logos/rasha.png";
// import Logo14 from "../../assets/logos/revive.png";
// import Logo15 from "../../assets/logos/royal.png";
// import Logo16 from "../../assets/logos/sma.png";
// import Logo17 from "../../assets/logos/tanza.png";
// import Logo18 from "../../assets/logos/artha.png";

export const Grid = () => {
  const logos = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408817/choice_tdnzpf.png",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408817/kaspersky_x5svi8.png",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408818/national_czua9c.png",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408816/bhima_yokz8d.png",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408819/artha_m26zv7.png",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408818/dubai_iss9rq.png",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408816/Eventia_ukj9ov.png",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408819/Whitefield_tcgze8.png",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408817/kudumbini_i6ze5l.png",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408817/cams_gk8naf.png",
    },
    {
      id: 11,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408818/prime_aclynz.png",
    },
    {
      id: 12,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408819/qpets_wvksna.png",
    },
    {
      id: 13,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408820/rasha_a93wvn.png",
    },
    {
      id: 14,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408818/revive_amnh6g.png",
    },
    {
      id: 15,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408819/royal_ovydsv.png",
    },
    {
      id: 16,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408819/sma_kqkwod.png",
    },
    {
      id: 17,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408819/tanza_wrxyoq.png",
    },
    {
      id: 18,
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1738408818/docdpro_uzovxq.png",
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
