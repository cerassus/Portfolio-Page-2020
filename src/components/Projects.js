import React from "react";
import "./css/Projects.css";
import { projects } from "./const/const";
import SingleProject from "./simple/SingleProject";

const Projects = () => (
    <section id="projects" className="section-about section">
        <div className="section-title">
            <img alt="hexagon" className="section-title-hexagon" src="img/hexagon.png" />
            <h1>Projects</h1>
        </div>
        <h2>My Resume</h2>
        <div className="hr"></div>
        <p className="resume">
            You can look at my resume here: <a href="http://cerassus.eu/pdf/CV_PL.pdf"  target="_blank" rel="noopener noreferrer">Polish version </a> 
            and <a href="http://cerassus.eu/pdf/CV_EN.pdf"  target="_blank" rel="noopener noreferrer">English version</a> 
        </p>
        <h2>Finished Projects</h2>
        <div className="hr"></div>
        <p>
            Here you can find couple of simple projects I prepared to practice
            web development tools and technologies. Besides the links to websites
            you can check used technologies and source code.
        </p>
        <div className="projects">
            {projects.map((item, i) => <SingleProject project={item} key={i} />)}
        </div>
    </section>
);

export default Projects;