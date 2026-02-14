import express from 'express'
import cors from 'cors'

import filmRoutes from './routes/film.routes.js'



const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/films', filmRoutes)

app.listen(port, () => {
    console.log('Server running on port 3000')
})
