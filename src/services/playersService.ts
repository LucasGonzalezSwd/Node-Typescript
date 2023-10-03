import { PlayerData, NoEloPlayer, NewPlayerEntry } from '../../types'
import playerData from './games.json'

const playerList: PlayerData[] = playerData as PlayerData[]

export const getPlayers = (): PlayerData[] => playerList

export const getPlayersId = (id: number): NoEloPlayer | undefined => {
  const playerEntry = playerList.find(p => p.idPlayer === id)

  if (playerEntry != null) {
    const { range, ...restOfPlayer } = playerEntry
    return restOfPlayer
  }
  return undefined
}
export const getPlayerNoElo = (): NoEloPlayer[] => {
  return playerList.map(({ idPlayer, namePlayer, range, gameName, honor }) => {
    return {
      idPlayer,
      range,
      namePlayer,
      gameName,
      honor
    }
  })
}

export const addPlayers = (newPlayerEntry: NewPlayerEntry): PlayerData => {
  const newPlayer = {
    idPlayer: Math.max(...playerList.map(d => d.idPlayer)) + 1,
    ...newPlayerEntry
  }
  playerList.push(newPlayer)
  return newPlayer
}
