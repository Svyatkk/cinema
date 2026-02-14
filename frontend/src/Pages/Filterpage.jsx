import { useEffect, useState } from "react"
import './FilterPage.css'



export default function FilterPage() {
    const [films, setFilms] = useState([])


    const [name, setName] = useState('')




    const fetchFilms = () => {
        const url = `http://localhost:3000/films/sortpage?name=${name}`

        console.log("Fetching:", url)

        fetch(url)
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(err => console.error(err))
    }





    useEffect(() => {
        fetchFilms()
    }, [])

    return (
        <div className="page-container">

            <div className="filters-sidebar">
                <h3>Фільтри</h3>


                <label htmlFor="">
                    <input type="text" value={name} onChange={(e) => {
                        setName(e.target.value)


                    }} />
                </label>

                <button onClick={fetchFilms} className="filter-btn">
                    Застосувати
                </button>
            </div>

            <div className="films-grid">
                {films.length > 0 ? (
                    films.map((film, index) => (
                        <div key={index} className="film-card">
                            <h4>{film.title}</h4>
                            <p>⭐ Pop: {film.popularity}</p>
                            <p>🔞 Age: {film.ageRating}+</p>
                        </div>
                    ))
                ) : (
                    <h2>Фільмів не знайдено...</h2>
                )}
            </div>

        </div>
    )
}
