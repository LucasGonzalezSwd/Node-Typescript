import { PlayerData } from '../../types'
import Player from '../models/Player'

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
