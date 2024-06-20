import React from "react";
import img from "../../assets/vic.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  AOS.init({ duration: 500 });

  return (
    <>
      <div id="hero">
        <div className="wrapper info-container">
          <div className="heroText column">
            <h3 data-aos-delay="200" data-aos="fade-down">
              Hi I'm <span className="primary">Victory Oseiwe</span>
            </h3>
            <h1 data-aos-delay="200" data-aos="fade-down">
              A <span className="gradient-text">FULLSTACK</span> Web Developer
            </h1>
            <p data-aos-delay="200" data-aos="fade-down-right">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex-center btn-wrapper">
              <a data-aos-delay="900" data-aos="fade-left" className="btn">
                Learn More
              </a>
              <a
                data-aos-delay="1400"
                data-aos="fade-left"
                className="btn services"
              >
                Get Started
              </a>
            </div>
          </div>
          <div
            data-aos-delay="200"
            data-aos="fade-down-left"
            className="column"
          >
            <img className="heroImage" src={img} alt="Hero Image" />
          </div>
        </div>
        <div className="achievement-cluster">
          <div className="wrapper">
            <div className="achievement-container">
              <div className="card">
                <div className="flex-center">
                  <h3>5+</h3>
                </div>
                <p>Year's of experience</p>
              </div>
              <div className="card">
                <div className="flex-center">
                  <h3>42+</h3>
                </div>
                <p>Clients worldwide</p>
              </div>
              <div className="card">
                <div className="flex-center">
                  <h3>500+</h3>
                </div>
                <p>Projects completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
