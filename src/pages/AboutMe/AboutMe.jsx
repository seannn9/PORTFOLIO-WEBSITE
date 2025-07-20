import ScrollDown from "../../components/ScrollDown/ScrollDown";
import "./AboutMe.css";
import { useEffect, useState } from "react";

import supabase from "../../server/supabase.js";

export default function AboutMe() {
    const [myPic, setMyPic] = useState("");
    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = () => {
        try {
            const { data, error } = supabase.storage
                .from("project-images")
                .getPublicUrl("gradpic.jpg");
            if (error) {
                console.log("An error occured while fetching image", error);
            }
            if (data) {
                setMyPic(data.publicUrl);
            }
        } catch (error) {
            console.log("An error occured while fetching image", error);
        }
    };

    return (
        <section id="aboutme-section" className="aboutme-section">
            <h2 className="aboutme-header">ABOUT ME</h2>
            <div className="aboutme-container">
                <div className="myinfo">
                    <h3>Sean Ulric C. Montano</h3>
                    <h4>August 1, 2003</h4>
                    <h4>Maragondon, Cavite, Philippines</h4>
                    <h4>De La Salle University - Dasmariñas</h4>
                </div>
                {myPic && (
                    <img
                        className="mypic"
                        src={myPic}
                        alt="graduation picture"
                    />
                )}
            </div>
            <ScrollDown
                section_id="projects-section"
                theme="dark w-100"
                action="PROJECTS"
            />
        </section>
    );
}
