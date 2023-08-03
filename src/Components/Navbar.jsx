import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "../Components/MenuItems.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.css";


function Navbar() {
  const [menuicon, setmenuicon] = useState(false);

  function menuChangeHandler() {
    setmenuicon(!menuicon);
  }

  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  return (
    <div>
      <nav className="nav-items">
        <NavLink to="/" className="nav-logo font-bold text-blue-400">
  <h1 className="text-blue">GlobalWander</h1>
</NavLink>
        <div className="menu-icon" onClick={menuChangeHandler}>
          {menuicon ? <RxCross1 /> : <GiHamburgerMenu />}
        </div>
        <ul className={menuicon ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                className="links"
                to={item.url}
                activeStyle={{ backgroundColor: "#01959a", color: "white" }}
              >
                {item.icon} {item.title}
              </NavLink>
            </li>
          ))}
          <NavLink to="/SignUp">
            <button onClick={topFunction}>Sign Up</button>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
