import React from "react";
import Hobbies from "./simple/Hobbies";
import "./css/About.css";

const About = () => (
    <section id="about" className="section section-about">
        <div className="section-title">
            <img alt="hexagon" className="section-title-hexagon" src="img/hexagon.png" />
            <h1>About Me</h1>
        </div>
        <h2>Everyday Life</h2>
        <div className="hr hr-simple"></div>
        <p>
            My Name is Michał Wiśniewski. I am 32 years old, living in Wroclaw/Poland with my beautiful wife and Portos. 
            Portos is our dog, cream-colored Golden Retriever who makes our lives happier. We both love to travel and 
            visit new places during every vacation. I am a big fan of travelling by plane, sightseeing, Neapolitan 
            pizza and single malt whisky. One of my life goals is to visit Seven Wonders of World.
        </p>
        <h2>Hobbies</h2>
        <div className="hr hr-simple"></div>
        <div className="section-about-hobbies">
            <Hobbies />
        </div>
    </section>
);

export default About;