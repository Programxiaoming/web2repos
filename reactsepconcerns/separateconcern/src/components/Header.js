import React from "react";
import { NavLink } from "react-router-dom";
import HomeButton from "./HomeButton";
import "./Header.css";


function Header() {
  const buttonStyle = {
    backgroundColor: "green",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };

  return (
    <div>
      <div>
        <HomeButton />
      </div>
      <div>
        <NavLink
          className={({isActive}) => 
          isActive ? "link-active" : "link-inactive"
          } 
          to="/">
            {" "}
            Home
        </NavLink>

        <NavLink
          className={({isActive}) =>
          isActive ? "link-active" : "link-inactive"
          } 
          to="/About">
            {" "}
            About
        </NavLink>

        <NavLink
          className={({isActive}) =>
          isActive ? "link-active" : "link-inactive"
          } 
          to="/Content">
            {" "}
            Content
        </NavLink>

        <NavLink
          className={({isActive}) =>
          isActive ? "link-active" : "link-inactive"
          } 
          to="/Contact">
            {" "}
            Contact
        </NavLink>

        <NavLink
          className={({isActive}) =>
          isActive ? "link-active" : "link-inactive"
          } 
          to="/Details">
            {" "}
            Details
        </NavLink>
        
        <NavLink to="/">
          <button style={buttonStyle}>
            {" "}
            <p>Home</p>
          </button>
        </NavLink>

      </div>
    </div>
  );
}

export default Header;