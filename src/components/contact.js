import React from 'react'
import Logomail from '../icons/logomail.svg';

const Contact = () => {
    return (
      
            <div className="contact-section">
                <p id="title-contact">GET IN TOUCH !</p>
                <a className="mail-btn" href="gotoline" target="_blank"> <img src={Logomail} className="mail-logo" alt="mail-logo"></img> </a>
                <p id="contact-sentence">Whether you have an idea for a project or just want to chat, feel free to shoot me an email!</p> 
                <a id="email-button" href="mailto:solidaritydev93@gmail.com?" target="_blank" rel="noopener noreferrer">Say Hello :)</a> 
            </div>
    
    )
}

export default Contact