import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function FilmPage() {
    const { id } = useParams()
    const [film, setFilm] = useState(null)

    const [rate, setRate] = useState(null)

    const naviagate = useNavigate()

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

            <button
                onClick={() => {



                    naviagate('/')
                }}
            >Back</button>



            <label htmlFor=""><input
                onChange={(e) => {
                    setRate(e.target.value)

                }}
                className="" type="text" />
            </label>


            {rate > 5 ? "👍" : "👎"}

            <button
                onClick={() => {

                    fetch(`http://localhost:3000/films/${id}/rate`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        }, body: JSON.stringify({ rating: rate })
                    })
                        .then(res => {
                            if (res.ok) {
                                console.log("Успіх!");
                                return res.json();
                            }
                        })
                        .then(updatedFilm => {

                            setFilm(updatedFilm);
                        })
                        .catch(err => console.error("Помилка:", err));
                }}


            >Установити рейтинг</button>

        </div>
    )
}
