import './About.css';
import carinaPhoto from '../assets/images/carina-photo.jpg'; // adjust path based on your folder
import Icons from '../components/Icons';

export default function About() {
    return (
        <div id="about" className="container-fluid pl-0 ml-0">
            <div className="row">
                <div className="col-5 my-photo pr-0">
                    <img src={carinaPhoto} alt="Carina" className="img-full" />
                </div>
                <div id="intro" className="col-7 d-flex align-items-center justify-content-center px-5">
                    <div id="intro-content" className="text-center d-md-block">
                        <div id="hello-world-container" className="pb-4">
                            <h1 id="hello-world">Hello World!</h1>
                        </div>
                        <h2
                            className="slide-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            I'm Carina
                        </h2>
                        <div className="py-4">
                            <p
                                className="slide-up"
                                style={{ animationDelay: "0.6s" }}
                            >
                                A caring individual, aspiring web developer, and passionate problem solver.
                            </p>
                            <p
                                className="slide-up"
                                id="introduction"
                                style={{ animationDelay: "0.9s" }}
                            >
                                I’m currently a second-year CS student at UBC, learning the ins and outs of web development. My goal is to become a full-stack developer who can build impactful, user-friendly websites and applications.
                            </p>
                        </div>
                        <Icons />
                    </div>
                </div>
            </div>
        </div>
    );
}
