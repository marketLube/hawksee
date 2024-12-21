import React from "react";

export const Grid = () => {
  const logos = [
    { id: 1, name: "logo" },
    { id: 2, name: "logo" },
    { id: 3, name: "logo" },
    { id: 4, name: "log" },
    { id: 5, name: "logo" },
    { id: 6, name: "DENNER " },
    { id: 7, name: "GEBERIT" },
    { id: 8, name: "Tal" },
    { id: 9, name: "Tal" },
    { id: 10, name: "Tal" },
    { id: 11, name: "Tal" },
    { id: 12, name: "Tal" },
    { id: 13, name: "Tal" },
    { id: 14, name: "Tal" },
    { id: 15, name: "Tal " },
    { id: 16, name: "Tal" },
    { id: 17, name: "Tall" },
    { id: 17, name: "Tall" },
  ];
  return (
    <div className="logo-grid">
      {logos.map((logo) => (
        <div key={logo.id} className="logo-card">
          <div className="logo-text">{logo.name}</div>
        </div>
      ))}
    </div>
  );
};
