import React from "react";
import "./About.scss";
import profile from "./profile.jpeg";

const About = () => {
  return (
    <div>
      <div className="about-section">
        <h1 className="about-us">About Us</h1>
        <p>
          We are a free trading demo platform designed to give you the
          experience of trading stocks in real time without having to risk your
          own hard earned money.
        </p>
      </div>

      <h2 className="our-team">Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img className="profile" src={profile} alt="Logo" />
            <div className="container">
              <h2 className="our-name">Kevin Yu</h2>
              <p className="title">Co-Founder</p>
              <p className="describe">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p className="email">kevin.yu.kfy@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="profile" src={profile} alt="Logo" />
            <div className="container">
              <h2 className="our-name">Anthony Kim</h2>
              <p className="title">Co-Founder</p>
              <p className="describe">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p className="email">ankim90@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="profile" src={profile} alt="Logo" />
            <div className="container">
              <h2 className="our-name">Dexter Glied-Beliak</h2>
              <p className="title">Co-Founder</p>
              <p className="describe">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p className="email">dextergb@rogers.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
