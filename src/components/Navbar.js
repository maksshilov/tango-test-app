import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { DropdownPageSize } from "../components/DropdownPageSize";
import { CultureFilter } from "./CultureFilter";
import { DropdownGenderFilter } from "./DropdownGenderFilter";

export const Navbar = () => {
  const location = useLocation();
  const history = useNavigate();

  return (
    <nav
      className="navbar navbar-light navbar-expand-lg"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Link to={"/"} className="navbar-brand" style={{ marginLeft: "20px" }}>
        Ice & Fire Library
      </Link>
      {location.pathname === "/tango-test-app/" && <DropdownPageSize />}
      {location.pathname === "/tango-test-app/" && <DropdownGenderFilter />}
      {location.pathname === "/tango-test-app/" && <CultureFilter />}
      {location.pathname !== "/tango-test-app/" && (
        <button
          type="button"
          className="btn btn-info"
          onClick={() => history(-1)}
        >
          {"< Go Back"}
        </button>
      )}
    </nav>
  );
};
