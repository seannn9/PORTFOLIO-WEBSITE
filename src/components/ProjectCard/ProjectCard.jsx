import "./ProjectCard.css";

export default function ProjectCard({ project_name }) {
    return (
        <div className="card">
            <div className="project-image"></div>
            <div className="details">
                <h3>{project_name}</h3>
            </div>
        </div>
    );
}
