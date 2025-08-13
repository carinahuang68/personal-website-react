import './Navbar.css';

export default function Navbar() {
    return (
        <nav id="mainNavbar" class="navbar navbar-dark navbar-expand-md py-0 fixed-top pr-3 pl-2">
            <a href="#" class="navbar-brand ps-2 pb-0">
                <span id="my-name">Carina Huang</span>
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navLinks"
                aria-controls="navLinks"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navLinks">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-2">
                        <a href="/index.html" class="nav-link">ABOUT</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a id="project-link" href="/projects/projects.html" class="nav-link">PROJECTS</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}