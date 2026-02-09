import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function FilmPage() {
    const { id } = useParams()
    const [film, setFilm] = useState(null)



    useEffect(() => {
        fetch(`http://localhost:3000/films/${id}`)
            .then(res => res.json())
            .then(data => setFilm(data))
            .catch(err => console.error(err))
    }, [id])

    if (!film) return <p>Завантаження...</p>


    return (
        <div>
            <h1>{film.title}</h1>
            <p>ID: {id}</p>
        </div>
    )
}
