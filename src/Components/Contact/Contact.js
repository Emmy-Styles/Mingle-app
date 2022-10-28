import React from "react";
import "./contact.css";
import {BsFillTelephoneFill} from "react-icons/bs";
import {CiMobile3} from "react-icons/ci";
import {AiOutlineMail} from "react-icons/ai";

function Contact() {
  return (
    <div className="main">
      <div className="contact">
        {/* <div className='inner'>
        <p>This is my contact</p>
      </div> */}
      </div>
      <div className="p">
        <h2>Contact Us</h2>
        <p>
          245 Carlton Way, Atlanta Georgia <br/>
          <BsFillTelephoneFill className="icontel" /> Telephone Number : 405-360-4966;<br/>
          <CiMobile3 className="icontel"/> Mobile Number : 918-953-6624;<br/>
          <AiOutlineMail className="icontel"/> Email : contact@phinder.com
        </p>
      </div>
    </div>
  );
}

export default Contact;
