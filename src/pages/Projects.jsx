import './Projects.css'
import ProjectCard from '../components/Card/ProjectCard'
import { Link } from "react-router-dom";
import {projects, miniProjects} from '../data/projects'
import MiniCard from '../components/Card/MiniCard';
import Footer from '../components/Footer/Footer'

export default function Projects() {
    return (<>
        <section className="my-5 pt-3" id="projects">
            <h2 className="py-4 heading slide-up">Projects</h2>
            <div className="container">
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col d-flex justify-content-around" key={index}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
            <a href="#mini-games" className="" id="message"><p>⬇ See more below!</p></a>
        </section>

        <div className="d-flex flex-column pt-4 pb-5" id="mini-games">
            <h2 className="mt-5 pt-4 pb-3 heading">Mini games and applications</h2>
            <div className="container py-3 px-5">
                <div className="d-flex flex-wrap justify-content-evenly gap-5">
                    {miniProjects.map((mp, index) => (
                        <MiniCard {...mp} key={index}/>
                    ))}
                </div>
            </div>
        </div>

        <Footer />
    </>)
}