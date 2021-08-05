import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Logout.scss";

const Logout = ({ user, login, logout }) => {
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
            <i className="fas fa-coins"></i>
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
            {!user && <li className="logout-item">
              <button
                className="logout-links"
                onClick={() => login('1@email.com')}
              >
                Login 1
              </button>
            </li> }
            {!user && <li className="logout-item">
              <button
                className="logout-links"
                onClick={() => login('2@email.com')}
              >
                Login 2
              </button>
            </li> }
            <li className="logout-item">
              <button
                className="logout-links-mobile"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Logout</Button>}
        </div>
      </nav>
    </>
  );
};

export default Logout;
