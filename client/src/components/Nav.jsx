import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav classNameName="navbar">
        <div classNameName="navbar-container">
          <Link to="/" classNameName="navbar-logo" onClick={closeMobileMenu}>
            TTM
            <i className="fas fa-coins"></i>
          </Link>
          <div classNameName="menu-icon" onClick={handleClick}>
            <i classNameName={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul classNameName={click ? "nav-menu active" : "nav-menu"}>
            <li classNameName="nav-item">
              <Link
                to="/about"
                classNameName="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                classNameName="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                GET STARTED
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">GET STARTED</Button>}
        </div>
      </nav>
    </>
  );
}

export default Nav;
