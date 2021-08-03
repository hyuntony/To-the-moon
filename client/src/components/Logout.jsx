import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Logout.scss";

function Logout() {
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
      <nav classNameName="logout">
        <div classNameName="logout-container">
          <Link to="/" classNameName="logout-logo" onClick={closeMobileMenu}>
            TTM
            <i className="fas fa-coins"></i>
          </Link>
          <div classNameName="menu-icon" onClick={handleClick}>
            <i classNameName={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul classNameName={click ? "logout-menu active" : "logout-menu"}>
            <li classNameName="logout-item">
              <Link
                to="/details"
                classNameName="logout-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li classNameName="logout-item">
              <Link
                to="/history"
                classNameName="logout-links"
                onClick={closeMobileMenu}
              >
                Order History
              </Link>
            </li>
            <li classNameName="logout-item">
              <Link
                to="/about"
                classNameName="logout-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li classNameName="logout-item">
              <Link
                to="/logout"
                classNameName="logout-links-mobile"
                onClick={closeMobileMenu}
              >
                Logout
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Logout</Button>}
        </div>
      </nav>
    </>
  );
}

export default Logout;
