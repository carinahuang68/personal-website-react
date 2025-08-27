import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md py-0 fixed-top pr-3 pl-2 shadow">
            <Link to="/" className="navbar-brand ps-2 pb-0">
                <span id="my-name">Carina Huang</span>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navLinks"
                aria-controls="navLinks"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navLinks">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-2">
                        <Link to="/about" className="nav-link">ABOUT</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link id="project-link" to="/projects" className="nav-link">PROJECTS</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}