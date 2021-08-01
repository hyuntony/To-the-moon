import React from "react";
import TextButtons from "./Universal/TextButtons";

import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro-container">
      <h1>To The Moon!</h1>
      <p>Insert motto/mission/slogan here</p>
      <div className="intro-btns">
        <TextButtons
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </TextButtons>
      </div>
    </div>
  );
};

export default Intro;
