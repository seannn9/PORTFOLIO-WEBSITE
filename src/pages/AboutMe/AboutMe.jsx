import ScrollingMarquee from "../../components/ScrollingMarquee/ScrollingMarquee";
import "./AboutMe.css";
import { motion } from "motion/react";

export default function AboutMe() {
    return (
        <section id="aboutme-section" className="aboutme-section">
            <h2 className="aboutme-header">ABOUT ME</h2>
            <h3 className="aboutme-subheader">Get to know me more</h3>
            <div className="aboutme-container">
                <div className="myinfo">
                    <h3 className="myname" style={{ color: "var(--primary)" }}>
                        Sean Ulric C. Montano
                    </h3>
                    <div className="detail myhome">
                        <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 18V17C16 15.8954 16.8954 15 18 15C19.1046 15 20 15.8954 20 17V18M16.9527 11C16.9839 10.7366 17 10.47 17 10.2C17 6.22355 13.866 3 10 3C6.13401 3 3 6.22355 3 10.2C3 14.1764 6.5 17.4 10 21C10.3344 20.6561 10.6687 20.3156 11 19.9776M16.5 21H19.5C19.9659 21 20.1989 21 20.3827 20.9239C20.6277 20.8224 20.8224 20.6277 20.9239 20.3827C21 20.1989 21 19.9659 21 19.5C21 19.0341 21 18.8011 20.9239 18.6173C20.8224 18.3723 20.6277 18.1776 20.3827 18.0761C20.1989 18 19.9659 18 19.5 18H16.5C16.0341 18 15.8011 18 15.6173 18.0761C15.3723 18.1776 15.1776 18.3723 15.0761 18.6173C15 18.8011 15 19.0341 15 19.5C15 19.9659 15 20.1989 15.0761 20.3827C15.1776 20.6277 15.3723 20.8224 15.6173 20.9239C15.8011 21 16.0341 21 16.5 21ZM13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z"
                                stroke="var(--light)"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <h4>Maragondon, Cavite, Philippines</h4>
                    </div>
                    <div className="detail mycourse">
                        <svg
                            fill="var(--light)"
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
                                stroke="var(--light)"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <h4>De La Salle University - Dasmariñas</h4>
                    </div>
                </div>
                <motion.div
                    className="pic-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.5 },
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <img
                        className="mypic"
                        src="images/gradpic-optimized.jpg"
                        loading="lazy"
                        alt="graduation picture"
                    />
                </motion.div>
            </div>
            <div className="skills-container">
                <ScrollingMarquee />
            </div>
        </section>
    );
}
