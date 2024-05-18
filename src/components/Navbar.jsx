import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper } from "../Wrapper/Navbar";
function Navbar() {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="logo">MixMaster</div>
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/Newsletter">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
