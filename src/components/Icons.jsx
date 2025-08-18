
export default function Icons() {
    return (
        <div
            className="social-icons pt-3 slide-up"
            style={{ animationDelay: "1.2s" }}
        >
            <a
                href="https://github.com/carinahuang68"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
            >
                <i className="fab fa-github" style={{ color: "#312B36", fontSize: "24px" }}></i>
            </a>
            <a
                href="https://linkedin.com/in/carina-huang-b489a6237"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
            >
                <i className="fab fa-linkedin" style={{ color: "#312B36", fontSize: "24px" }}></i>
            </a>
            <a
                href="mailto:carinahuang673@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
            >
                <i className="fas fa-envelope" style={{ color: "#312B36", fontSize: "24px" }}></i>
            </a>
        </div>
    )
}