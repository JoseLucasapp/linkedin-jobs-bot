import 'dotenv/config'
import express from "express";
import cors from 'cors'
import getData from './services/getData';

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})
app.get('/linkedin', async (req, res) => {
    await getData('josluc2016@gmail.com', 'joselucas2016')
})

app.listen(PORT)