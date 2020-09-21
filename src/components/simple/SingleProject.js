import React from "react";

const SingleProject = ({project}) => (
    <div className="project-container">
        <div className="project-container-white">
            <img alt="project-icon-big" className="project-icon-big" src={project.img} />
            <div className="project-title">
            {project.title}
            </div>
        </div>
        <div className="project-container-white">
            <a href={project.link} target="_blank" rel="noopener noreferrer"
                className={project.done ? "button btn-website" : "btn-under-contruction"}>{project.done ? "Visit website" : "In Progress"}
            </a>
            <div className="project-icon-container">
                {project.icons.map(pro =>  <img key={pro.alt} alt={pro.alt} src={pro.url} /> )}
            </div>
            <a href={project.code} target="_blank" rel="noopener noreferrer"
                className="button btn-code">Code
            </a>
        </div>
    </div>
)

export default SingleProject;