import React from "react";
import "./about.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className="maindiv">
      <div className="contact">
        {/* <div className='inner'>
        <p>This is my contact</p>
      </div> */}
      </div>
      <div className="para">
        <h2>About Us</h2>
        <p>
          At Phinder, we are highly looking forward to establishing a strong<br/>
          virtual community where people can expressely find and interact with<br/>
          like-minded individuals without reservations and discrimination.<br/>
        </p>
      </div>
    </div>
  );
}

export default Contact;
