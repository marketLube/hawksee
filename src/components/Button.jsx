import React from "react";

export const Button = ({ children, onClick, href }) => {
  return (
    <a className="btn commonbutton" onClick={onClick} href={href}>
      {children}
    </a>
  );
};
