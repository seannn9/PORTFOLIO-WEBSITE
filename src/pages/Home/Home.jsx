import Button from "../../components/Button/Button.jsx";
import ScrollDown from "../../components/ScrollDown/ScrollDown.jsx";
import "./Home.css";
import supabase from "../../server/supabase.js";

import Projects from "../Projects/Projects.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";

import GradientText from "../../components/GradientText/GradientText.jsx";
import DotGrid from "../../assets/DotGrid/DotGrid.jsx";

const emailTo = `mailto:seanulric9@gmail.com?subject=Hello%20Sean%20Montano&body=Hi%20Sean,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.%0D%0A%0D%0ARegards,%0D%0A`;

export default function Home() {
    const downloadResume = async () => {
        try {
            const { data, error } = await supabase.storage
                .from("work-files")
                .download("MontanoSean_2025Resume.pdf");
            if (error) {
                console.log(
                    "An error occured while trying to downloading resume",
                    error
                );
            }
            if (data) {
                const url = URL.createObjectURL(data);
                const link = document.createElement("a");
                link.href = url;
                link.download = "MontanoSean_2025Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);

                console.log("Download successful");
            }
        } catch (error) {
            console.log(
                "An error occured while trying to downloading resume",
                error
            );
        }
    };

    return (
        <>
            <div className="intro-container">
                <div
                    style={{
                        width: "100%",
                        height: "100vh",
                        position: "absolute",
                    }}
                >
                    <DotGrid
                        dotSize={5}
                        gap={15}
                        baseColor="#251e36"
                        activeColor="#5227FF"
                        proximity={120}
                        shockRadius={250}
                        shockStrength={5}
                        resistance={750}
                        returnDuration={1.5}
                    />
                </div>
                <section id="intro-section" className="intro-section">
                    <h1 className="header flex">
                        <span className="header-one">Hi, I'm</span>
                        <span className="header-two">
                            <GradientText
                                colors={[
                                    "#944bbb",
                                    "#b366e6",
                                    "#d9a8ff",
                                    "#b366e6",
                                    "#944bbb",
                                ]}
                                animationSpeed={5}
                                showBorder={false}
                                className="custom-class"
                            >
                                Sean Montano
                            </GradientText>
                        </span>
                    </h1>
                    <section className="intro">
                        <h2 className="intro-one">Computer Engineer with</h2>
                        <h2 className="intro-two">
                            Specialization in Software Engineering
                        </h2>
                    </section>
                    <div className="cta-container">
                        <Button
                            colorscheme="cta-1"
                            action="Contact Me"
                            onclick={emailTo}
                            icon={
                                <svg
                                    fill="none"
                                    height="32px"
                                    viewBox="0 0 24 24"
                                    width="32px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        d="m3.75 5.25-.75.75v12l.75.75h16.5l.75-.75v-12l-.75-.75zm.75 2.4455v9.5545h15v-9.55475l-7.5001 6.81835zm13.8099-.9455h-12.62004l6.31004 5.7364z"
                                        fill="#1b1b1b"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                            }
                        />
                        <div onClick={downloadResume}>
                            <Button
                                colorscheme="cta-2"
                                action="My Resume"
                                icon={
                                    <svg
                                        width="32px"
                                        height="32px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5"
                                            stroke="#1b1b1b"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12 12V20M12 20L9.5 17.5M12 20L14.5 17.5"
                                            stroke="#1b1b1b"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                }
                            />
                        </div>
                    </div>
                    <div className="links-container">
                        <a
                            href="https://github.com/seannn9"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="social-icon"
                                width="32px"
                                height="32px"
                                viewBox="0 0 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                                <title>github profile</title>
                                <defs></defs>
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    <g
                                        id="Dribbble-Light-Preview"
                                        transform="translate(-140.000000, -7559.000000)"
                                        fill="rgb(228,228,228)"
                                    >
                                        <g
                                            id="icons"
                                            transform="translate(56.000000, 160.000000)"
                                        >
                                            <path
                                                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                                id="github-[#142]"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/seanmontano/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="social-icon"
                                width="32px"
                                height="32px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>linkedin profile</title>
                                <path
                                    d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                                    fill="rgb(228,228,228)"
                                />
                                <path
                                    d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                                    fill="rgb(228,228,228)"
                                />
                                <path
                                    d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                                    fill="rgb(228,228,228)"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                                    fill="rgb(228,228,228)"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="home-divider"></div>
                    <ScrollDown
                        section_id="aboutme-section"
                        theme="light"
                        action="ABOUT ME"
                    />
                </section>
            </div>
            <AboutMe />
            <Projects />
        </>
    );
}
