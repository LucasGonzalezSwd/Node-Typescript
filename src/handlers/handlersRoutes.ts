import { Request, Response } from 'express'
import Player from '../models/Player'
import * as playerServices from '../services/playersService'
import toNewPlayerAdded from '../utils'

export const getAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const allPlayers = await Player.find().sort({ honor: -1 })
    res.send(allPlayers)
  } catch (error) {
    res.status(500).send('Error retrieving players')
  }
}
export const getById = async (req: Request, res: Response): Promise<void> => {
  const playerId = req.params.id
  const player = await Player.findById(playerId)

  try {
    if (player === null || player === undefined) {
      res.status(404).send('Player not found')
    }
    res.json(player)
  } catch (error) {
    res.status(500).send('Error retrieving player')
  }
}

export const postPlayer = async (req: Request, res: Response): Promise<void> => {
  const newPlayer = toNewPlayerAdded(req.body)
  try {
    const newPlayerAdded = await playerServices.addPlayers(newPlayer)

    res.json(newPlayerAdded)
  } catch (e) {
    res.status(400).send((e as Error).message)
  }
}

export const putPlayer = async (req: Request, res: Response): Promise<void> => {
  const playerId = req.params.id
  const { namePlayer, range, honor } = req.body

  try {
    const updatedPlayer = await Player.findByIdAndUpdate(
      playerId,
      { namePlayer, range, honor },
      { new: true }
    )
    if (updatedPlayer == null) {
      res.status(404).send('Jugador no encontrado')
    }
    res.status(200).json(updatedPlayer)
  } catch (error) {
    res.status(500).send('Error retrieving players')
  }
}

export const deletePlayer = async (req: Request, res: Response): Promise<void> => {
  const playerId = req.params.id

  try {
    const deletedPlayer = await Player.findOneAndDelete({ _id: playerId })

    if (deletedPlayer == null) {
      res.status(404).send('Jugador no encontrado')
    }
    res.status(200).send('Jugador eliminado correctamente')
    res.json(deletedPlayer)
  } catch (error) {
    res.status(500).send('Error retrieving players')
  }
}
