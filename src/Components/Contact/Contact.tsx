import React, { useState } from 'react';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css'
import emailjs from '@emailjs/browser';

export const Contact = ()=>{
  let HeaderColors = ['lightgrey" : "#515561']

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [confirmationText, setConfirmationText] = useState<string>("");

  

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_b0rac6l', 'template_yyrdjct', e.target, '7L423PNkQYG05hp2r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

      setConfirmationText
      (
          `Beste ${name}, uw bericht werd succesvol verzonden! ${'\n'} 
          We nemen spoedig contact met u op.`
      )

        setName("")
        setEmail("")
        setMessage("")
  };
  
    return(

        <>
        <h1>Contact Us</h1>

<div className="container">
  <form  onSubmit={sendEmail} className="contactform" action="">


    <label className="subtitle">Name<span className="star">*</span></label>
    <input type="text" id="fname" name="user_name" placeholder="Write your name." onChange={(e)=>setName(e.target.value)} value={name} required />

    <label className="subtitle">Lastname</label>
    <input type="text" id="lname" name="lastname" placeholder="Write your lastname."/>

    <label className="subtitle">Email<span className="star">*</span></label>
    <input type="email" id="email" name="user_email" placeholder="Write your email." onChange={(e)=>setEmail(e.target.value)} value={email} required/>

    <label className='subtitle'>Message<span className="star">*</span></label>
    <textarea className='message' id="message" name="message" placeholder="Write your message." rows={10} onChange={(e)=>setMessage(e.target.value)} value={message} required ></textarea>
    
    {name !== "" &&  email !== "" &&  message !== "" 
                    ? <input className='button' type="submit" value='Submit'/> : <input className='button' type='submit' value='Verstuur' disabled={true}></input>}
                   
    
         <div>
    <p>{confirmationText}</p>
  </div> 
  </form>

  
</div>
</>
        
    )
    }