import React from "react";

function contactForm(props) {
  const { type, placeholder, name } = props;
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="control"
        name={props.name}
      />
    </>
  );
}

export default contactForm;
