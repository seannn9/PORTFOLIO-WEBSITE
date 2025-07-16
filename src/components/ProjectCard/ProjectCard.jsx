import "./ProjectCard.css";

export default function ProjectCard({ project_name }) {
    return (
        <div className="card">
            <div>
                <h3>{project_name}</h3>
            </div>
        </div>
    );
}
