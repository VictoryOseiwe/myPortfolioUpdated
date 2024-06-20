import React from "react";
import Skills from "../Skills/Skills";
import logo from "../../assets/logo.svg";
import Icon from "../Icon";
import Ig from "../../assets/ig.svg";
import Fb from "../../assets/fb.svg";
import X from "../../assets/x.svg";
import Yt from "../../assets/yt.svg";

function Header() {
  return (
    <>
      <div className="navPosition">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>Portfolio</h1>
          </div>
          <div className="link flex-center">
            <a className="tab" href={Skills}>
              About me
            </a>
            <a className="tab" href="">
              Skills
            </a>
            <a className="tab" href="">
              Services
            </a>
            <a className="tab" href="">
              Projects
            </a>
            <a className="tab" href="">
              Testimonials
            </a>
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
