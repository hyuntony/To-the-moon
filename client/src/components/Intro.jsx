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
        <h1 className="intro-title">To The Moon!</h1>
        <p className="intro-slogan">
          A powerful financial tool to help you learn how to invest your money
        </p>
        <div className="intro-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            LOGIN
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
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
