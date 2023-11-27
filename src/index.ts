import express from 'express'
import playerList from './routes/playerList'
import connectDB from './db'

const app = express()
const PORT = 3000

/* eslint-disable-next-line @typescript-eslint/no-floating-promises */
connectDB()

app.use(express.json())

app.use('/api/players', playerList)

app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`)
})
