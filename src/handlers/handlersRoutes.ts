import { Request, Response } from 'express'
import Player from '../models/Player'
import toNewPlayerAdded, { parseHonor, parseName, parseRange } from '../utils'
import { PlayerData } from '../../types'

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
      return
    }
    res.json(player)
  } catch (error) {
    res.status(500).send('Error retrieving player')
  }
}

export const addPlayers = async (playerData: PlayerData): Promise<PlayerData> => {
  try {
    const newPlayer = new Player({
      namePlayer: playerData.namePlayer,
      gameName: playerData.gameName,
      honor: playerData.honor,
      range: playerData.range
    })

    await newPlayer.save()

    return await newPlayer.toObject()
  } catch (error) {
    console.log(error)
    throw new Error('Error al agregar jugador a la base de datos')
  }
}

export const postPlayer = async (req: Request, res: Response): Promise<void> => {
  try {
    const newPlayer = toNewPlayerAdded(req.body)
    const newPlayerAdded = await addPlayers(newPlayer)

    res.json(newPlayerAdded)
  } catch (error) {
    if (typeof error === 'object' && error !== null && 'message' in error) {
      const errorMessage = (error as Error).message
      if (errorMessage.includes('honor debe estar entre 0 y 5')) {
        res.status(400).send(errorMessage) // Manejo del error específico del honor
      } else {
        res.status(500).send('Error al agregar el jugador')
      }
    } else {
      res.status(500).send('Error al agregar el jugador')
    }
  }
}

export const putPlayer = async (req: Request, res: Response): Promise<void> => {
  const playerId = req.params.id
  const { namePlayer, range, honor } = req.body

  try {
    const parsedNamePlayer = parseName(namePlayer)
    const parsedHonor = parseHonor(honor)
    const parsedRange = parseRange(range)

    const updatedPlayer = await Player.findByIdAndUpdate(
      playerId,
      { namePlayer: parsedNamePlayer, range: parsedRange, honor: parsedHonor },
      { new: true }
    )
    if (updatedPlayer == null) {
      res.status(404).send('Jugador no encontrado')
      return
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
      return
    }
    res.status(200).json(deletedPlayer)
  } catch (error) {
    res.status(500).send('Error retrieving players')
  }
}
