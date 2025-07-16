import "./Projects.css";
import supabase from "../../server/supabase.js";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import ScrollDown from "../../components/ScrollDown/ScrollDown.jsx";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data, error } = await supabase.from("Projects").select("*");
            if (error) {
                console.log(
                    "An error occured while fetching projects: ",
                    error
                );
            } else {
                setProjects(data);
            }
        } catch (error) {
            console.log("An error occured while fetching projects: ", error);
        } finally {
        }
    };

    return (
        <section id="projects-section" className="projects-section">
            <h2 className="projects-header">PROJECTS</h2>
            <div className="project-container">
                {projects.map((project, key) => (
                    <ProjectCard
                        key={key}
                        project_name={project.project_name}
                    />
                ))}
            </div>
        </section>
    );
}

{
    /* <ScrollDown section_id="projects-section" color_stroke="#1b1b1b" /> */
}
