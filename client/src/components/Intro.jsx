import React from "react";
import { Button } from "./Button";

import "./App.scss";
import "./Intro.scss";
import background from './intro/background.mp4'
const Intro = () => {
  return (
    <div className="intro-container">
      <video className='videoTag' autoPlay loop muted>
    <source src={background} type='video/mp4' />
</video>
<div className='intro-details'>
      <h1>To The Moon!</h1>
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
