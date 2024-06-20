import React from "react";
import emailIcon from "../../assets/email.svg";
import ContactCard from "./contactCard";
import phoneIcon from "../../assets/phone.svg";
import locationIcon from "../../assets/location.svg";
import ContactForm from "./contactForm";

function Contact() {
  return (
    <>
      <div id="contact">
        <div className="wrapper">
          <div className="contact-option">
            <ContactCard
              img={emailIcon}
              contactHead="Email"
              contactBody="victoryoseiwe9@gmail.com"
            />
            <ContactCard
              img={phoneIcon}
              contactHead="Phone"
              contactBody="+2349122182908"
            />
            <ContactCard
              img={locationIcon}
              contactHead="Address"
              contactBody="Nigeria, Edo State, Ubiaja"
            />
          </div>
          <div className="contact-form" data-aos="fade-left">
            <h1 className="title">
              <span className="gradient-text">Join Forces With Me</span>
            </h1>
            <p>
              I build with precision and passion, creating web projects that
              stands out. It's as straight forward as that!
            </p>
            <div className="flex">
              <ContactForm
                type="text"
                placeholder="First Name"
                name="firstName"
              />
              <ContactForm
                type="text"
                placeholder="Last Name"
                name="lastName"
              />
            </div>
            <div className="flex">
              <ContactForm
                type="email"
                placeholder="Email Address"
                name="emailAddress"
              />
              <ContactForm
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
              />
            </div>
            <textarea
              name="messageFromContactForm"
              id="messageFromContactForm"
              className="control"
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <div className="flex-center">
              <button className="btn">Send Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
