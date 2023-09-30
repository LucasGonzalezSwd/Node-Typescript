import { PlayerData, NoEloPlayer } from '../../types'
import playerData from './games.json'

const playerList: PlayerData[] = playerData as PlayerData[]

export const getPlayers = (): PlayerData[] => playerList

export const getPlayersId = (id: number): PlayerData | undefined => {
  const playerEntry = playerList.find(p => p.idPlayer === id)
  return playerEntry
}
export const getPlayerNoElo = (): NoEloPlayer[] => {
  return playerList.map(({ idPlayer, namePlayer, gameName, honor }) => {
    return {
      idPlayer,
      namePlayer,
      gameName,
      honor
    }
  })
}

export const addPlayers = (): undefined => undefined
