import React from "react";
import "./css/Career.css";

const Career = () => (
    <section id="career" className="section section-career">
        <div className="section-title">
            <img alt="hexagon" className="section-title-hexagon" src="img/hexagon_white.png" />
            <h1>Career</h1>
        </div>
        <div className="section-career-whitebg">
            <h2>Story</h2>
        </div>
        <p>
            My career started in sales sector. Since I was a little boy, I was fascinated by computers and the way they work. 
            My first job was at local computer store, I was selling laptops, PC’s and accessories. I was constantly improving 
            my sales skills in consumer electronics sector selling cameras, tv screens and in gaming industry. Since the 
            beginning of  2020 I decided to move my career to a completely different direction. I decided to leave the sales 
            behind and learn programming. My old fascination has returned, and I became interested in Front End development. 
            I am constantly improving my knowledge of Front-End by practicing writing code in JavaScript using React, Redux 
            and other libraries. I still have a lot to learn but I am sure I am ready to start my first job as Junior Front-End 
            Developer. I am open to work in Poland or abroad. You can find my projects <a id="link" href="#projects">here</a>
        </p>
        <div className="section-career-whitebg">
            <h2>Skills</h2>
            <div className="section-career-icons skills">
                <a href="https://www.udemy.com/certificate/UC-47741973-118b-4b4e-bbf0-4da7b95e3215/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email" target="_blank" rel="noopener noreferrer">
                    <img alt="img-course-1" src="img/course/udemy.png" />
                </a>
                <a href="http://cerassus.eu/pdf/coderslab2.pdf" target="_blank" rel="noopener noreferrer">
                    <img alt="img-course-2" src="img/course/coderlab.png" />
                </a>
                <a href="https://www.freecodecamp.org/certification/cerassus/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">
                    <img alt="img-course-3" src="img/course/fcc.png" />
                </a>
                <a href="http://cerassus.eu/pdf/codeme.pdf" target="_blank" rel="noopener noreferrer">
                    <img alt="img-course-4" src="img/course/codeme.png" />
                </a>
                <img alt="img-course-5" src="img/course/codewars.png" />
            </div>
        </div>
        <p>
            I started with mastering my HTML and CSS skills. I completed many online courses like “Web Developer Bootcamp” on 
            Udemy or “Basics Web Development” in CodersLab School. FreeCodeCamp helped me take my first steps in programming, 
            after it I decided to dig deeper into JavaScript world and started to learn coding using React library. Taking 
            step by step I was learning another libraries and extensions. Now I can say I have basic experience in Redux, 
            React-Router, MaterlUI and Bootstrap. Completing the course “React, Redux for programmers” gave me a lot of new 
            knowledge and experience. <span className="certifications">You can see the certifications by clicking the links above.</span>
        </p>
        <div className="section-career-whitebg">
            <h2>Experience</h2>
            <div className="section-career-icons tech-icons">
                <img alt="img-tech-1" src="img/tech/html.png" />
                <img alt="img-tech-2" src="img/tech/css.png" />
                <img alt="img-tech-3" src="img/tech/react.png" />
                <img alt="img-tech-4" src="img/tech/redux.png" />
                <img alt="img-tech-5" src="img/tech/router.png" />
                <img alt="img-tech-6" src="img/tech/mui.png" />
                <img alt="img-tech-7" src="img/tech/bootstrap.png" />
                <img alt="img-tech-8" src="img/tech/vsc.png" />
            </div>
        </div>
        <p>
            I learned the most from projects I prepared for this portfolio. Mostly by creating problems and trying to figure it 
            out how to solve them on my own or looking for hints the internet. Reading documentations showed me that even if I 
            know how to do something, there is always an another way to do it.
        </p>
    </section>
);

export default Career;