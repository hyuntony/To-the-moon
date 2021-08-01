import React from 'react'
import SimpleMenu from './nav/SimpleMenu'
import Logo from './Universal/Logo'
import GetStartedButton from './nav/GetStartedButton'
import TextButtons from './Universal/TextButtons'
import './Nav.scss'
const Nav = (props) => {
  const loggedIn = props.loggedIn
  if (loggedIn) {
    return (
<div className="Nav">
      <Logo />
      <SimpleMenu />
    </div>
    )
  } else {
    return (
      <div className="Nav">
      <Logo />
      <div className = 'right_nav'>
      <TextButtons text="About Us" href='about'/>
      <TextButtons text="Login" href='login'/>
      <GetStartedButton />
      </div>
    </div>
    )
  }
}

export default Nav
