import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
const Projects = () => {
    return (
        <div>
            <section id="projects">
                <div className="cardGrid">
                    {
                        projects.map((project,index)=>{
                            return (
                                <ProjectCard key={index}
                                    projectImage={project.projectImage}
                                    projectTitle={project.title}
                                    projectDiscription={project.discription}
                                    techStack={project.techStack}
                                    projectLink={project.projectLink}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </div>
    )
}
export default Projects;