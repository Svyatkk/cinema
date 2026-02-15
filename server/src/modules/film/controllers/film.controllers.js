import * as filmService from '../services/film.service.js'

export const getAll = (req, res) => {
    res.json(filmService.getAllFilms())
}
export const getFavourites = (req, res) => {
    res.json(filmService.getFavouriteFilms())
}

export const getById = (req, res) => {
    const film = filmService.getFilmById(Number(req.params.id))

    if (!film) return res.sendStatus(404)

    res.json(film)
}

export const rateFilm = (req, res) => {
    const film = filmService.rateFilm(Number(req.params.id), req.body.rating)


    if (!film) return res.sendStatus(404)

    res.json(film)
}

export const toggleFavourite = (req, res) => {
    const film = filmService.toggleFavourite(Number(req.params.id))

    if (!film) return res.sendStatus(404)

    res.json(film)
}

export const deleteFilm = (req, res) => {
    const success = filmService.deleteFilm(Number(req.params.id))

    if (!success) return res.sendStatus(404)


    res.sendStatus(204)
}




export const findByName = (req, res) => {
    try {
        console.log("QUERY:", req.query)

        const name = req.query.name || ""

        const result = filmService.findByName(name)

        res.json(result)
    } catch (error) {
        console.error("ERROR IN findByName:", error)
        res.status(500).json({ message: "Internal server error" })
    }
}