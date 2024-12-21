import React from "react";
import logo from "./../assets/HawkseeLogo.svg";

export const Nav = () => {
  return (
    <nav className="headerNav">
      <img src={logo} alt="logo" className="headerNav-hawlogo" />
      <ul className="headerNav-right">
        <li>About us</li>
        <li>Our Works</li>
        <li>Stories</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
