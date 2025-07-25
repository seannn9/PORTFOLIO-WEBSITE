import "./Projects.css";
import supabase from "../../server/supabase.js";
import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const { data, error } = await supabase
                .from("Projects")
                .select("*")
                .order("id", { ascending: true });
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
            <h2 className="projects-header">RECENT PROJECTS</h2>
            <div className="project-container">
                {projects.length > 0 &&
                    projects.map((project, key) => (
                        <ProjectCard
                            key={key}
                            project_name={project.project_name}
                            project_desc={project.description}
                        />
                    ))}
            </div>
        </section>
    );
}
