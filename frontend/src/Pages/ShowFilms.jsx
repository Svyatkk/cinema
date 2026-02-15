import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Showfilms() {
    const navigate = useNavigate()
    const { category } = useParams()
    const [films, setFilms] = useState([])


    const [currentCategory, setCurrentCategory] = useState(category || 'now')


    useEffect(() => {
        if (category) {
            setCurrentCategory(category)
        }
    }, [category])


    useEffect(() => {
        fetch(`http://localhost:3000/films/${currentCategory}`)
            .then(res => res.json())
            .then(data => {
                setFilms(data)
            })
            .catch(err => console.log(err))
    }, [currentCategory])




    const handleCategoryChange = (newCategory) => {


        navigate(`/films/${newCategory}`)
        setCurrentCategory(newCategory)
    }

    return (
        <>
            <div className="preremykach">
                <a
                    onClick={() => handleCategoryChange('now')}
                    className={`${currentCategory === 'now' ? "active" : ""}`}
                >
                    Зараз у кіно
                </a>
                <a
                    onClick={() => handleCategoryChange('soon')}
                    className={`${currentCategory === 'soon' ? "active" : ""}`}
                >
                    Скоро у прокаті
                </a>
            </div>

            {films.map((film) => (
                <div style={{ border: "1px solid white" }} key={film.id}>
                    <h1>{film.title}</h1>
                </div>
            ))}
        </>
    )
}