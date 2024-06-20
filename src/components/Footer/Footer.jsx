import React from "react";
import logo from "../../assets/logo.svg";
import Icon from "../Icon";
import Ig from "../../assets/ig.svg";
import Fb from "../../assets/fb.svg";
import X from "../../assets/x.svg";
import Yt from "../../assets/yt.svg";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <div id="footer">
        <div className="footer">
          <div className="bottom wrapper">
            <div className="footLogo">
              <div className="logo">
                <img src={logo} alt="logo" />
                <h1>Portfolio</h1>
              </div>
              <div className="handlesContainer">
                <Icon img={Ig} />
                <Icon img={Fb} />
                <Icon img={X} />
                <Icon img={Yt} />
              </div>
            </div>
            <div className="flex">
              <h3>Explore</h3>
              <a className="value" href="">
                About Me
              </a>
              <a className="value" href="">
                Skills
              </a>
            </div>
            <div className="flex">
              <h3>Trusted</h3>
              <a className="value" href="">
                About Me
              </a>
              <a className="value" href="">
                Skills
              </a>
            </div>
            <div className="flex">
              <h3>Others</h3>
              <a className="value" href="">
                About Me
              </a>
              <a className="value" href="">
                Skills
              </a>
            </div>
          </div>
          <h4 className="flex-center value">
            Copyright @ Victory Oseiwe {date}
          </h4>
          <p className="flex-center">
            All appreciation goes to my mentor @Uncle Iyanu & @Aunt Mary Jane
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
