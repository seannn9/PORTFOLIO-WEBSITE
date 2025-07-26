import "./ProjectCard.css";

export default function ProjectCard({ project_image, project_name }) {
    return (
        <div className="card">
            <div className="project-image">
                <img src={project_image} alt={project_name} />
            </div>
            <div className="project-details">
                <h3>{project_name}</h3>
                <div className="row-2">
                    <div className="tech-used"></div>
                    <div className="take-action"></div>
                </div>
            </div>
        </div>
    );
}
