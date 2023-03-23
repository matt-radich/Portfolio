import React from "react"
import '../css/contact.css'


function Contact () {
  return (
    <>
    <h1 className="contact-title">Contact Page</h1>

    <form action="" onSubmit="">
      <div className="formWord">

        <h2> LETS TALK</h2>
        <span>FULLNAME</span>
        <br />
        <input className="input" type="text" name="Full Name" required />
        <br />

        <span>PHONE NUMBER</span>
        <br />
        <input className="input" type="text" name="Phone" required/>
        <br />

        <span>EMAIL</span>
        <br />
        <input className="input" type="text" name="Email" required/>
        <br />

      </div>

      <div className="formWord">
        <span>MESSAGE</span>
        <br />
        <textarea name="message" required></textarea>
        <br />
        <button>SUBMIT</button>
      </div>
    </form>
    </>
  )
}

export default Contact