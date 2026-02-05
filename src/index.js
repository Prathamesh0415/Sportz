import express from "express"
import { matchRouter } from "./routes/matches"

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from express server')
})

app.use('/matches', matchRouter)

app.listen(port, () => {
    console.log('listening on port 3000')
})