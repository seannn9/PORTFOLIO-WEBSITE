import ScrollDown from "../../components/ScrollDown/ScrollDown";
import "./AboutMe.css";

export default function AboutMe() {
    return (
        <section id="aboutme-section" className="aboutme-section">
            <h2 className="aboutme-header">ABOUT ME</h2>
            <ScrollDown
                section_id="projects-section"
                theme="dark"
                action="PROJECTS"
            />
        </section>
    );
}
