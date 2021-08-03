import React from "react";
import "./About.scss";
import profile from "./profile.jpeg";

const About = () => {
  return (
    <div>
      <div class="about-section">
        <h1 class="about-us">About Us</h1>
        <p>
          We are a cutting edge, state of the art trading platform. Use our app
          to get rich quick. To the moon baby!
        </p>
        <p>Also, we are fucking amazing. Read about us below.</p>
      </div>

      <h2 class="our-team">Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img class="profile" src={profile} alt="Logo" />
            <div class="container">
              <h2>Kevin Yu</h2>
              <p class="title">Co-Founder</p>
              <p class="describe">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p class="email">keviny@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img class="profile" src={profile} alt="Logo" />
            <div class="container">
              <h2>Anthony Kim</h2>
              <p class="title">Co-Founder</p>
              <p class="describe">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p class="email">anthonyk@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img class="profile" src={profile} alt="Logo" />
            <div class="container">
              <h2>Dexter GB</h2>
              <p class="title">Co-Founder</p>
              <p class="describe">
                Some text that describes me lorem ipsum ipsum lorem.
              </p>
              <p class="email">dexterg@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
