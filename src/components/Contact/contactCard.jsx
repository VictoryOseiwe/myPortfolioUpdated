import React from "react";

function contactCard(props) {
  const { img, contactHead, contactBody } = props;
  return (
    <>
      <div className="flex-center option" data-aos="fade-right">
        <div className="flex-center icon">
          <img src={img} alt="contact image" />
        </div>
        <h4>{contactHead}</h4>
        <h3 className="value">{contactBody}</h3>
      </div>
    </>
  );
}

export default contactCard;
