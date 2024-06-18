import React from "react";

function Skills() {
  return (
    <>
      <div id="skills">
        <div className="wrapper">
          <div className="section-header">
            <h1 className="flex-center headingText" data-aos="fade-left">
              <span className="gradient-text">My Skills</span>
            </h1>
          </div>
          <div className="skill-container">
            <div className="skill-card" data-aos="fade-right">
              <h4 className="gradient-text flex-center">Ui/Ux</h4>
              <div className="skill-details">
                <div></div>
              </div>
              <div></div>
            </div>
            <div className="skill-card" data-aos="fade-right">
              <h4 className="gradient-text flex-center">
                Front-End Devlopment
              </h4>
              <div className="skill-details">
                <div></div>
              </div>
              <div></div>
            </div>
            <div className="skill-card" data-aos="fade-right">
              <h4 className="gradient-text flex-center">
                Back-End Development
              </h4>
              <div className="skill-details">
                <div></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
