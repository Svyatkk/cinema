import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



export default function Showfilms() {
    const navigate = useNavigate()


    const { category } = useParams()
    const currentCategory = category || 'now';
    const [films, setFim] = useState([])



    useEffect(() => {
        fetch(`http://localhost:3000/films/${currentCategory}`)
            .then(res => res.json())
            .then(data => setFim(data))
            .catch(err => console.log(err))

    }, [currentCategory])




    return (
        <>

            <div className="preremykach">
                <a

                    onClick={() => {
                        navigate('/films/now')
                    }}
                    className={`${currentCategory === 'now' ? "active" : ""}`}>Зараз у кіно</a>
                <a
                    onClick={() => {
                        navigate('/films/soon')
                    }}
                    className={`${currentCategory === 'soon' ? "active" : ""}`} >Скоро у прокаті</a>

            </div >
            {
                films.map((film, index) => {
                    return <div style={{ border: "1px solid white" }} key={index}>
                        <h1>{film.title}</h1>





                    </div>
                })
            }

        </>
    )
}