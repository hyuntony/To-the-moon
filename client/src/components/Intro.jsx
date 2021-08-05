import React from "react";
import { Button } from "./Button";
import Video from "./Video";
import "./App.scss";
import "./Intro.scss";
import background from "./intro/background.mp4";

const Intro = () => {
  return (
    <div className="intro-container">
      <Video />
      <div className="overlay">
        <h1 contenteditable data-heading="Fracture">
          To The Moon!
        </h1>
        <p>Insert Slogan/Motto/Mission</p>
        <div className="intro-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
