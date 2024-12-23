import React from "react";

export const RealStories = () => {
  const logos = Array.from({ length: 15 }, (_, i) => `${i + 1}`);
  return (
    <section className="realstories">
      <h1 className="realstories-title">Real Stories</h1>
      <div className="realstories-rot">
        <div className="realstories-slide">
          {/* Render two sets of logos for seamless looping */}
          {logos.map((logo, index) => (
            <div key={`realstories-${index}`}>{logo}</div>
          ))}
          {logos.map((logo, index) => (
            <div key={`realstories-duplicate-${index}`}>{logo}</div>
          ))}
          {logos.map((logo, index) => (
            <div key={`realstories-duplicate-${index}`}>{logo}</div>
          ))}
          {logos.map((logo, index) => (
            <div key={`realstories-duplicate-${index}`}>{logo}</div>
          ))}
          {logos.map((logo, index) => (
            <div key={`realstories-duplicate-${index}`}>{logo}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
