import './Card.css'
import { Link } from "react-router-dom";

export default function MiniCard({ title, text, path }) {
    return (
        <div className="card shadow mini-card px-3 my-3">
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text italic">{text}</p>
                {path !== "/" ? <Link to={path} className="btn link-button">Enter</Link> : null}
            </div>
        </div>
    )
}