import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { StyledNav, Line } from "./styles/Nav";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <NavLink id="logo" to="/">
          Picturesque
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/molisher/">1. About Us</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <NavLink to="/molisher/work">2. Our Work</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <NavLink to="/molisher/contact">3. Contact Us</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
