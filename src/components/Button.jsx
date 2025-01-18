import React from "react";

export const Button = ({ children, onClick }) => {
  return (
    <button className="btn commonbutton" onClick={onClick}>
      {children}
    </button>
  );
};
