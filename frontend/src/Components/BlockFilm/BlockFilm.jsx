import { useNavigate } from 'react-router-dom'
import './BlockFilm.css'
import { useEffect, useState } from 'react'



export default function BlockFilm({ film }) {
    const navigate = useNavigate()

    const [rating, setRating] = useState(null)
    const [isFav, setIsFav] = useState(film.isFavorite)

    function deleteMovie() {
        fetch(`http://localhost:3000/film/delete/${film.id}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (res.ok) {
                    console.log("Фільм видалено");
                    window.location.reload();
                }
            })
            .catch(err => console.log(err));
    }

    return (

        <>
            <div
                className="blockFilm"
                style={{ backgroundImage: `url(${film.filmPosterHref})` }}            >



                <div className='shadow'>
                    <div>
                        <div
                            onClick={() => navigate(`/film/${film.id}`)}

                        ><span>!</span> <p>Детальніше про фільм</p></div>
                        <div><span> &#9654;</span><p>Дивитись трейлер</p></div>
                    </div>

                    <div className='block-graphics'>
                        <a href="">                        Кінотеатр
                        </a>


                        {
                            film.premiere ? <img src="src\Images\door.png" alt="" /> : <a style={{ color: "red" }}>Сьогодні</a>
                        }

                        <div className='block-show-premier'>
                            <a href="" style={{ color: "red" }}>Прем'єра!</a>


                            <a href="">Квитки у продажу</a>

                            <button
                                onClick={() => {
                                    deleteMovie()

                                }}
                            >
                                ❌
                            </button>

                            <button
                                onClick={() => {
                                    fetch(`http://localhost:3000/films/${film.id}/favourite`, {
                                        method: 'PATCH'
                                    })
                                        .then(res => {
                                            if (res.ok) {
                                                console.log('Успіно оновлено')
                                                setIsFav(true)

                                            }
                                            else {
                                                setIsFav(!isFav)


                                            }
                                        })

                                        .catch(err => console.log(err))



                                }}
                            >



                                {isFav ? "❤️" : "🤍"}


                            </button>




                        </div>
                    </div>

                </div>


                <h1>{film.title}</h1>
            </div >


        </>

    )
}
