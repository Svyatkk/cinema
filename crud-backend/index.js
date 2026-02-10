import express from 'express'
import cors from 'cors'
import { films } from './films.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/films', (req, res) => {
    res.json(films)
})





app.get('/films/:id', (req, res) => {
    const film = films.find(f => f.id === Number(req.params.id))
    res.json(film)
})

app.listen(port, () => {
    console.log('Server running on port 3000')
})

