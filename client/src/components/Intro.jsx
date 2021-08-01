import React from "react";
import { Button } from "./Button";

import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro-container">
      <h1>To The Moon!</h1>
      <p>Insert motto/mission/slogan here</p>
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
  );
};

export default Intro;
