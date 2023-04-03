import React, { useState } from "react"
import '../css/contact.css'
import emailjs from '@emailjs/browser';

const Result =() => {
  return (
    <i><p id="messageConfirmation">Thank you,Your message has been sent. I will be in contact shortly</p></i>
  )
}
function Contact () {
  const [result, showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_74vhnrv', 'template_weu4uhk', e.target, 'yeFxGc47iUwDmhRH4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };
  return (
    <>
    
    <div className="formContainer">
      <form className="contactForm" action="" onSubmit={sendEmail}>
        
        <h2 id="contact"><u> CONTACT</u></h2>
        <div className="formWord">

          <span className="formTitles">NAME</span>
          <br />
          <input className="input" type="text" name="name" placeholder="name"  required />
          <br />

          <span className="formTitles">EMAIL</span>
          <br />
          <input className="input" type="text" name="email" placeholder="email" required/>
          <br />

        </div>

        <div className="formWord">
          <span className="formTitles">MESSAGE</span>
          <br />
          <textarea className="input" type="text" name="message" placeholder="message" required></textarea>
          <br />
          <button id="submitButton"><i>SUBMIT</i></button>

          <div className="row">{
            result ? <Result /> : null}</div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Contact