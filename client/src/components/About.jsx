import React from "react";
import "./About.scss";
import profile from "./profile.jpeg";

const About = () => {
  return (
    <div>
      <div className="about-section">
        <h1 className="about-us">About Us</h1>
        <p>
          We are a cutting edge, state of the art trading platform. Use our app
          to get rich quick. To the moon baby!
        </p>
        <p>Also, we are fucking amazing. Read about us below.</p>
      </div>

      <h2 className="our-team">Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img className="profile" src={profile} alt="Logo" />
            <div className="container">
              <h2>Kevin Yu</h2>
              <p className="title">Co-Founder</p>
              <p className="describe">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p className="email">keviny@example.com</p>
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
              <h2>Anthony Kim</h2>
              <p className="title">Co-Founder</p>
              <p className="describe">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p className="email">anthonyk@example.com</p>
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
              <h2>Dexter Glied</h2>
              <p className="title">Co-Founder</p>
              <p className="describe">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p className="email">dexterg@example.com</p>
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
