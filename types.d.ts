export type Range = 'iron' | 'bronze' | 'silver' | 'gold' | 'platinium' | 'esmerald' | 'diamond' | 'master' | 'grandmaster' | 'challenger'

export type Honor = 0 | 1 | 2 | 3 | 4 | 5

export interface PlayerData {
  'idPlayer': number
  'gameName': string
  'namePlayer': string
  'range': Range
  'honor': Honor
}

export type NoEloPlayer = Omit<PlayerData, 'range' >
// export type NoEloPlayer = Pick<PlayerData, 'idPlayer' | 'gameName' | 'namePlayer' | 'honor'>
