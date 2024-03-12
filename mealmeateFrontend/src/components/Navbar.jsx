import React from "react";
import "../style.css";
import { Link, useLocation } from "react-router-dom";
import bell from "../Assets/bell.svg";

const Navbar = () => {

  const location = useLocation();
  if (location.pathname === "/restaurant") {
    return null;
  }
  return (
    <nav className="navbar bg-light">
      <div className="navbar-notifications d-flex justify-content-end align-items-center" style={{ width: "100%" }}>
        <Link to="/notification">
          <img
            src={bell}
            alt="LogoYellow"
            style={{ width: "50px", height: "auto" }}
          />
        </Link>
      </div>
    </nav>

  );
};

export default Navbar;
