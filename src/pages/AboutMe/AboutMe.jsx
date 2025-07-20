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
                    <div className="detail mybday">
                        <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13.9999 3.125C13.9999 4.16053 13.1044 5 11.9999 5C10.8953 5 9.99988 4.16053 9.99988 3.125C9.99988 2.08947 11.9999 0 11.9999 0C11.9999 0 13.9999 2.08947 13.9999 3.125ZM0.460826 13.6423L2.31939 14.8317L4.02549 22.2249C4.1302 22.6786 4.53422 23 4.99988 23H18.9999C19.4655 23 19.8696 22.6786 19.9743 22.2249L21.6804 14.8317L23.5389 13.6423C24.0041 13.3446 24.1399 12.7261 23.8421 12.2609C23.5444 11.7958 22.926 11.66 22.4608 11.9577L21.9256 12.3003C21.5906 9.92302 19.5498 8 16.9717 8H12.9999V7C12.9999 6.44772 12.5522 6 11.9999 6C11.4476 6 10.9999 6.44772 10.9999 7V8H7.02808C4.44994 8 2.40918 9.92302 2.0742 12.3003L1.53893 11.9577C1.07376 11.66 0.455319 11.7958 0.157608 12.2609C-0.140103 12.7261 -0.0043478 13.3446 0.460826 13.6423ZM5.79539 21L4.65309 16.05C6.02133 16.4189 7.50983 16.1952 8.72873 15.3826L10.3358 14.3113C11.3435 13.6395 12.6563 13.6395 13.664 14.3113L15.271 15.3826C16.4899 16.1952 17.9784 16.4189 19.3467 16.05L18.2044 21H5.79539ZM16.9717 10C18.8713 10 20.2847 11.74 19.9135 13.588L19.6617 13.7492C18.6588 14.391 17.3712 14.379 16.3804 13.7185L14.7734 12.6472C13.0939 11.5275 10.9059 11.5275 9.22638 12.6472L7.61933 13.7185C6.62859 14.379 5.34099 14.391 4.33807 13.7492L4.08623 13.588C3.71509 11.74 5.12847 10 7.02808 10H11.9999H16.9717ZM8.99993 18C8.99993 17.4477 8.55221 17 7.99993 17C7.44764 17 6.99993 17.4477 6.99993 18V19C6.99993 19.5523 7.44764 20 7.99993 20C8.55221 20 8.99993 19.5523 8.99993 19V18ZM12.9999 18C12.9999 17.4477 12.5522 17 11.9999 17C11.4476 17 10.9999 17.4477 10.9999 18V19C10.9999 19.5523 11.4476 20 11.9999 20C12.5522 20 12.9999 19.5523 12.9999 19V18ZM16.9999 18C16.9999 17.4477 16.5522 17 15.9999 17C15.4476 17 14.9999 17.4477 14.9999 18V19C14.9999 19.5523 15.4476 20 15.9999 20C16.5522 20 16.9999 19.5523 16.9999 19V18Z"
                                fill="var(--dark)"
                            />
                        </svg>
                        <h4>August 1, 2003</h4>
                    </div>
                    <div className="detail myhome">
                        <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22 22L2 22"
                                stroke="var(--dark)"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                            <path
                                d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                                stroke="var(--dark)"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                            <path
                                d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                                stroke="var(--dark)"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                            <path
                                d="M4 22V9.5"
                                stroke="var(--dark)"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                            <path
                                d="M20 9.5V13.5M20 22V17.5"
                                stroke="var(--dark)"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                            <path
                                d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                                stroke="var(--dark)"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                                stroke="var(--dark)"
                                stroke-width="1.5"
                            />
                        </svg>
                        <h4>Maragondon, Cavite, Philippines</h4>
                    </div>
                    <div className="detail mycourse">
                        <svg
                            fill="var(--dark)"
                            width="32px"
                            height="32px"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M16 6.28a1.23 1.23 0 0 0-.62-1.07l-6.74-4a1.27 1.27 0 0 0-1.28 0l-6.75 4a1.25 1.25 0 0 0 0 2.15l1.92 1.12v2.81a1.28 1.28 0 0 0 .62 1.09l4.25 2.45a1.28 1.28 0 0 0 1.24 0l4.25-2.45a1.28 1.28 0 0 0 .62-1.09V8.45l1.24-.73v2.72H16V6.28zm-3.73 5L8 13.74l-4.22-2.45V9.22l3.58 2.13a1.29 1.29 0 0 0 1.28 0l3.62-2.16zM8 10.27l-6.75-4L8 2.26l6.75 4z" />
                        </svg>
                        <h4>BS in Computer Engineering</h4>
                    </div>
                    <div className="detail myuni">
                        <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 8V17.0192M9 8V17M15 8V17M19 8V17.0192M5 17.0192C5.31428 17 5.70173 17 6.2 17H17.8C18.2983 17 18.6857 17 19 17.0192M5 17.0192C4.60779 17.0431 4.32953 17.097 4.09202 17.218C3.71569 17.4097 3.40973 17.7157 3.21799 18.092C3 18.5198 3 19.0799 3 20.2V21H21V20.2C21 19.0799 21 18.5198 20.782 18.092C20.5903 17.7157 20.2843 17.4097 19.908 17.218C19.6705 17.097 19.3922 17.0431 19 17.0192M3 5.5V8H21V5.5L12 3L3 5.5Z"
                                stroke="var(--dark)"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <h4>De La Salle University - Dasmariñas</h4>
                    </div>
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
