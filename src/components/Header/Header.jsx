import React, { useState } from "react";
import Skills from "../Skills/Skills";
import logo from "../../assets/logo.svg";
import Icon from "../Icon";
import Ig from "../../assets/ig.svg";
import Fb from "../../assets/fb.svg";
import X from "../../assets/x.svg";
import Yt from "../../assets/yt.svg";
import { LuMenu } from "react-icons/lu";
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  function handleMobileMenu() {
    console.log(menuOpened);
    return setMenuOpened(!menuOpened);
  }

  return (
    <>
      <div className="navPosition">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>Portfolio</h1>
          </div>
          <div className="link tab flex-center">
            <a href="">About me</a>
            <a href="">Skills</a>
            <a href="">Services</a>
            <a href="">Projects</a>
            <a href="">Testimonials</a>
          </div>
          <div onClick={handleMobileMenu} className="mobileMenu">
            <LuMenu size={30} />
          </div>
          <div className="handlesContainer">
            <Icon img={Ig} />
            <Icon img={Fb} />
            <Icon img={X} />
            <Icon img={Yt} />
          </div>
          <div className="flex-center">
            <a className="btn">Hire Me</a>
            <a className="btn services">Services</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
