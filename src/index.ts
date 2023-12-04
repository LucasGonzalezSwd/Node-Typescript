import express from 'express'
import playerList from './routes/playerList'
import connectDB from './db'
import cors from 'cors'
const app = express()
const PORT = 3001

/* eslint-disable-next-line @typescript-eslint/no-floating-promises */
connectDB()

app.use(express.json())
app.use(cors())
app.use('/api/players', playerList)

app.listen(PORT, () => {
  console.log(' ')
})
