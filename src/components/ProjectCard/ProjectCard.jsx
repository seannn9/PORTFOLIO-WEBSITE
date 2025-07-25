import "./ProjectCard.css";

export default function ProjectCard({ project_name }) {
    return (
        <div className="card">
            <div className="project-image"></div>
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
