import { films } from "../films.js"

export const getAllFilms = () => films

export const getAllNowFilms = () => {
    return films.filter(film => film.isSoon === false)
}

export const getAllSoonFilms = () => {
    return films.filter(film => film.isSoon === true)
}

export const getFavouriteFilms = () =>
    films.filter(f => f.isFavorite)

export const getFilmById = (id) =>
    films.find(f => f.id === id)

export const rateFilm = (id, rating) => {
    const film = films.find(f => f.id === id)
    if (!film) return null

    film.rating = rating
    return film
}

export const toggleFavourite = (id) => {
    const film = films.find(f => f.id === id)
    if (!film) return null

    film.isFavorite = !film.isFavorite
    return film
}

export const deleteFilm = (id) => {
    const index = films.findIndex(f => f.id === id)
    if (index === -1) return false

    films.splice(index, 1)
    return true
}

export const findByName = (name) => {

    if (!name || name.trim() === "") {
        return films
    }



    const search = name.toLowerCase()


    return films.filter(film => {
        if (!film.title) return false

        return film.title.toLowerCase().includes(search)
    })
}