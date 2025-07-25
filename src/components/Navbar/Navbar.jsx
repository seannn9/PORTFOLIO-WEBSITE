import "./Navbar.css";

export default function Navbar() {
    const scrollTo = (section_id) => {
        document
            .getElementById(section_id)
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="navbar">
            <div className="wrapper">
                <svg
                    onClick={() => scrollTo("home-section")}
                    className="navbar-icon"
                    width="24px"
                    height="24px"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Home</title>
                    <path
                        d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                        fill="var(--light)"
                    />
                </svg>
                <div className="tooltip">Home</div>
            </div>
            <div className="wrapper">
                <svg
                    onClick={() => scrollTo("aboutme-section")}
                    className="aboutme-icon navbar-icon"
                    fill="var(--light)"
                    width="28px"
                    height="28px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>About Me</title>
                    <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                </svg>
                <div className="tooltip">About</div>
            </div>
            <div className="wrapper">
                <svg
                    onClick={() => scrollTo("projects-section")}
                    className="navbar-icon"
                    width="24px"
                    height="24px"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Projects</title>
                    <path d="M0 1H6L9 4H16V14H0V1Z" fill="var(--light)" />
                </svg>
                <div className="tooltip">Projects</div>
            </div>
        </nav>
    );
}
