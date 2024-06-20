import React from "react";

function Icon(props) {
  return (
    <>
      <a className="flex-center icon" href="#">
        <img src={props.img} alt="social handles" />
      </a>
    </>
  );
}

export default Icon;
