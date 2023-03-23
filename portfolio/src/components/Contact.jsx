import React, { useState } from "react"
import '../css/contact.css'
import emailjs from '@emailjs/browser';

const Result =() => {
  return (
    <p>Your message has been sent, Thank you!. I will be in contact soon</p>
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
    <h1 className="contact-title">Contact Page</h1>

    <form action="" onSubmit={sendEmail}>
      <div className="formWord">

        <h2> LETS TALK</h2>

        <span>FULLNAME</span>
        <br />
        <input className="input" type="text" name="name" required />
        <br />

        <span>EMAIL</span>
        <br />
        <input className="input" type="text" name="email" required/>
        <br />

      </div>

      <div className="formWord">
        <span>MESSAGE</span>
        <br />
        <textarea name="message" required></textarea>
        <br />
        <button>SUBMIT</button>

        <div className="row">{
          result ? <Result /> : null}</div>
      </div>
    </form>
    </>
  )
}

export default Contact