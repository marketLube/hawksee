import React from "react";

export const Grid = () => {
  const logos = [
    {
      id: 1,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 2,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 3,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 4,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 5,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 6,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 7,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 8,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 9,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 10,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 11,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 12,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 13,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 14,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 15,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 16,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 17,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
    },
    {
      id: 18,
      image:
        "https://wallpapers.com/images/high/red-bull-f1-logo-j4y1l9zon2qh8604.webp",
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
