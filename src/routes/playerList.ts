import express from 'express'
import * as playerServices from '../services/playersService'
import toNewPlayerAdded from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(playerServices.getPlayerNoElo())
})
router.get('/:id', (req, res) => {
  const player = playerServices.getPlayersId(Number(req.params.id))

  return (player != null)
    ? res.send(player)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    // const { gameName, namePlayer, range, honor } = req.body es de tipo any cada prop

    const newPlayer = toNewPlayerAdded(req.body)

    const newPlayerAdded = playerServices.addPlayers(newPlayer)

    res.json(newPlayerAdded)
  } catch (e) {
    res.status(400).send((e as Error).message)
  }
})

export default router
