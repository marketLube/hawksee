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
  return (
    <div className="logo-grid">
      {logos.map((logo) => (
        <div key={logo.id} className="logo-card">
          <img src={logo.image} alt="Company logo" className="logo-image" />
        </div>
      ))}
    </div>
  );
};
