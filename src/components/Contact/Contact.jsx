import React, { useState } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';
import {useRef} from "react";

const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f38r85j', 'template_fnalaln', form.current, 'user_nGPqSzoWYlmQPCVPejEAd')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  const Sendbtn = (e) => {
    e.preventDefault();

  }

  return (
    <div className="contact-form" id='Contact-form'>
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div 
                  className='blur s-blur1'
                  style={{background: "#ABF1FF94"}}
                ></div>

                <div className='c-right'>
                    <form ref={form} onSubmit={sendEmail} >
                        <input type="text" name='user_name' className='user' placeholder='Name' />
                        <input type="email" name='user_email' className='user' placeholder='Email' />
                        <textarea name='message' className='user' placeholder='Message' />
                        <input type="submit" value="Send" className="button" onClick={Sendbtn} />

                        <span>{done && "Thanks for contacting me!"}</span>
                        <div className='blur c-blur1'
                             style={{background: "var(--purple)"}}
                        ></div>     
                    </form> 
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact;