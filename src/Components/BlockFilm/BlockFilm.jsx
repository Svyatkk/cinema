import './BlockFilm.css'



export default function BlockFilm({ film }) {
    return (
        <>
            <div className="blockFilm">
                <h3>{film.title}</h3>


                <p>Рік: {film.year}</p>
                <p>Жанр: {film.genre.join(", ")}</p>
            </div>
        </>
    )
}