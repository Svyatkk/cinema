import { useNavigate } from 'react-router-dom'
import './BlockFilm.css'
import { useState } from 'react'

export default function BlockFilm({ film }) {
    const navigate = useNavigate()




    return (

        <>
            <div
                className="blockFilm"
                onClick={() => navigate(`/film/${film.id}`)}
            >

                <div className='shadow'>
                    <div>
                        <div><span>!</span> <p>Детальніше про фільм</p></div>
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
                        </div>
                    </div>

                </div>


                <h1>{film.title}</h1>
            </div>


        </>

    )
}
