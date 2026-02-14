import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ShowFavourite() {
    const [favfilms, setFavFilms] = useState([])





    useEffect(() => {
        fetch('http://localhost:3000/films/favourites')
            .then(res => res.json())
            .then(data => {
                console.log("Дані з сервера:", data);
                setFavFilms(data)
            })
            .catch(err => console.log(err))
    }, [])




    return (
        <div style={{ padding: "20px", color: "white" }}>
            <h1>Мої улюблені фільми</h1>

            {favfilms.length === 0 && <p>Ви ще нічого не додали в улюблене 😢</p>}


            {favfilms.map(film => (
                <div key={film.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
                    <h3>{film.title}</h3>
                    <img src={film.filmPosterHref} alt={film.title} style={{ width: "100px" }} />
                    <button
                        onClick={() => {


                            fetch(`http://localhost:3000/films/${film.id}/favourite`, {
                                method: 'PATCH'
                            })
                                .then(res => {

                                    if (res.ok) {
                                        res.json(film)

                                        setFavFilms(fav => fav.filter(item => item.id !== film.id))
                                    }
                                    else {

                                    }
                                })
                                .catch(err => console.log(err))


                        }}






                    >❌ </button>


                </div>
            ))
            }
        </div >
    )
}