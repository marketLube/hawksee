import React from "react";

export const Button = ({ children, onClick }) => {
  return (
    <a className="btn commonbutton" onClick={onClick}>
      {children}
    </a>
  );
};
