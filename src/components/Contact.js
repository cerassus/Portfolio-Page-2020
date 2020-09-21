import React from "react";
import Form from "./simple/Form";
import "./css/Contact.css";

const Contact = () => (
    <section id="contact" className="section-contact section">
        <div className="section-title">
            <img alt="hexagon" className="section-title-hexagon" src="img/hexagon_white.png" />
            <h1>Contact</h1>
        </div>
        <h2>Find me in social media</h2>
        <div className="hr hr-contact"></div>
        <div className="project-icon-container">
            <a href="http://github.com/cerassus" target="_blank" rel="noopener noreferrer">
                <img alt="img-social-1" src="img/social/github.png" />
            </a>
            <a href="https://www.linkedin.com/in/micha%C5%82-wi%C5%9Bniewski-235460a7/" target="_blank" rel="noopener noreferrer">
                <img alt="img-social-2" src="img/social/linkedin.png" />
            </a>
            <a href="https://www.codewars.com/users/cerassus" target="_blank" rel="noopener noreferrer">
                <img alt="img-social-3" src="img/social/codewars-large.png" />
            </a>
            <a href="https://my.flightradar24.com/cerassus" target="_blank" rel="noopener noreferrer">
                <img alt="img-social-4" src="img/social/flightradar.png" />
            </a>
            <a href="https://www.facebook.com/cerassus" target="_blank" rel="noopener noreferrer">
                <img alt="img-social-5" src="img/social/facebook.png" />
            </a>
        </div>
        <h2>Write to me!</h2>
        <Form />
    </section>
);

export default Contact;