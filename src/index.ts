import express from 'express'
import playerList from './routes/playerList'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/api/players', playerList)

app.get('/ping', (_req, res) => {
  console.log('someone pinged over here' + ' ' + new Date().toLocaleDateString())
  res.send('Pong')
})

app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`)
})
