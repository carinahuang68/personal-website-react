import './Card.css'

export default function ProjectCard({image, title, text, buttonText, buttonLink}) {
    return (
        <div className="card shadow slide-up project-card">
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title ">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={buttonLink} className="btn link-button">{buttonText}</a>
                </div>
        </div>
    )
}