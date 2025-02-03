import React from "react";

export const Logoauto = () => {
  const logos = Array.from({ length: 15 }, (_, i) => `Logo ${i + 1}`);
  return (
    <div>
      <div className="logo-slide" aria-label="Logo slide section">
        {logos.map((logo, index) => (
          <div key={`logo-${index}`} aria-label={`Logo ${index + 1}`}>
            {logo}
          </div>
        ))}

        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} aria-label={`Logo ${index + 1}`}>
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} aria-label={`Logo ${index + 1}`}>
            {logo}
          </div>
        ))}

        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} aria-label={`Logo ${index + 1}`}>
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-duplicate-${index}`} aria-label={`Logo ${index + 1}`}>
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
