import React from "react";
import { Button } from "./Button";

import "./App.scss";
import "./Intro.scss";

function Intro() {
  return (
    <div classNameName="intro-container">
      <h1>To The Moon!</h1>
      <p>Insert Slogan/Motto/Mission</p>
      <div classNameName="intro-btns">
        <Button
          classNameName="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Intro;
