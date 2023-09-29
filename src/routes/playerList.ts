import express from 'express'
import * as playerServices from '../services/playersService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(playerServices.getPlayerNoElo())
})

router.post('/', (_req, res) => {
  res.send('Saving a new player')
})

export default router
