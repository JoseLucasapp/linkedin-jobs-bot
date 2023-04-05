import 'dotenv/config'
import express from "express";
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.listen(PORT)