import cors from 'cors'
import express from 'express'



const app = express()

const port = 3000

app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {

    res.send('its ok')


})


app.listen(port, () => {

    console.log('port is running')
})