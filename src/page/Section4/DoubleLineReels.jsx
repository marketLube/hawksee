import React from "react";

export const DoubleLineReels = () => {
  const logos = Array.from({ length: 15 }, (_, i) => `Logo ${i + 1}`);

  return (
    // <div>
    //   <p>Loved by users from forward-thinking companies</p>
    <section className="logos">
      {/* <p className="logos-pp">Loved by users from forward-thinking companies</p> */}
      <div className="logo-slide">
        {/* Render two sets of logos for seamless looping */}
        {logos.map((logo, index) => (
          <div key={`logo-${index}`}>{logo}</div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`}>{logo}</div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`}>{logo}</div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`}>{logo}</div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`}>{logo}</div>
        ))}
      </div>
    </section>
  );
};
