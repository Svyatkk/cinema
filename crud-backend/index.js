import express from 'express'
import cors from 'cors'
import { films } from './films.js'
import { users } from './users.js'




const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/films', (req, res) => {
    res.json(films)
})
function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}



app.get('/films/favourites', (req, res) => {
    const filmFavourites = films.filter(film => film.isFavorite === true)


    res.json(filmFavourites)
})

app.get('/films/sortpage', (req, res) => {
    const minpopularity = Number(req.query.minpopularity) || 0
    const minageRating = Number(req.query.minageRating) || 0

    const name = req.query.name || ""


    const sortfilms = films.filter(film =>
        film.popularity >= minpopularity &&
        film.ageRating >= minageRating



    )



    res.json(sortfilms)
})

app.patch('/films/:id/favourite', (req, res) => {

    const id = Number(req.params.id)

    const film = films.find(film => film.id === id);

    if (film) {
        film.isFavorite = !film.isFavorite;
        console.log(`Фільм ${film.title} тепер favorite: ${film.isFavorite}`);

        res.json(film)
    }
    else {

        res.sendStatus(404)
    }

})

app.patch('/films/:id/rate', (req, res) => {
    const id = Number(req.params.id);
    const { rating } = req.body;

    const film = films.find(film => film.id === id);

    if (film) {
        film.rating = rating;
        console.log(`Рейтинг оновлено: ${film.title} -> ${film.rating}`);

        res.json(film);
    } else {
        res.status(404).json({ message: "Фільм не знайдено" });
    }
});



app.delete('/film/delete/:id', (req, res) => {
    const id = Number(req.params.id);

    const deleteFilm = films.find(film => film.id === id);

    if (deleteFilm) {
        removeItemOnce(films, deleteFilm);

        console.log(`Фільм з ID ${id} видалено`);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }


});





app.post('/register', (req, res) => {
    const user = req.body;

    if (!user.name) {
        return res.status(400).json({ message: "Ім'я обов'язкове" });
    }
    const newUser = {
        id: users.length + 1,
        name: user.name
    }
    users.push(user)

    console.log("Додано юзера:", newUser)

    res.status(201).json(newUser);
})


app.get('/login', (req, res) => {
    res.json(users)
})

app.get('/login/:id', (req, res) => {


    const user = users.find(user => user.id === Number(req.params.id))
    if (user) {
        res.json(user)
    } else {


        const newUser = {
            name: "Guest",
            id: Number(req.params.id)
        }

        users.push(newUser)


        console.log('Юзера створено!')
        res.status(201).json(newUser);


    }
})



app.get('/films/:id', (req, res) => {
    const film = films.find(f => f.id === Number(req.params.id))
    res.json(film)
})

app.listen(port, () => {
    console.log('Server running on port 3000')
})

