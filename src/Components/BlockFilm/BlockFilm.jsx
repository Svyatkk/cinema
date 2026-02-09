import { useNavigate } from 'react-router-dom'
import './BlockFilm.css'

export default function BlockFilm({ film }) {
    const navigate = useNavigate()

    return (
        <div
            className="blockFilm"
            onClick={() => navigate(`/film/${film.id}`)}
        >
            <h1>{film.title}</h1>
        </div>
    )
}
