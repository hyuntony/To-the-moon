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
      <nav className="logout">
        <div className="logout-container">
          <Link to="/" className="logout-logo" onClick={closeMobileMenu}>
            TTM
            <i class="fas fa-coins"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "logout-menu active" : "logout-menu"}>
            <li className="logout-item">
              <Link
                to="/details"
                className="logout-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="logout-item">
              <Link
                to="/history"
                className="logout-links"
                onClick={closeMobileMenu}
              >
                Order History
              </Link>
            </li>
            <li className="logout-item">
              <Link
                to="/about"
                className="logout-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="logout-item">
              <Link
                to="/logout"
                className="logout-links-mobile"
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
