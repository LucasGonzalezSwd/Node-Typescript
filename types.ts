export enum Range {
  Iron = 'iron',
  Bronze = 'bronze',
  Silver = 'silver',
  Gold = 'gold',
  Platinium = 'platinium',
  Esmerald = 'esmerald',
  Diamond = 'diamond',
  Master = 'master',
  Grandmaster = 'grandmaster',
  Challenger = 'challenger'
}

export enum Honor {
  Cero = 0,
  Uno = 1,
  Dos = 2,
  Tres = 3,
  Cuatro = 4,
  Cinco = 5
}

export interface PlayerData {
  'idPlayer': number
  'gameName': string
  'namePlayer': string
  'range': Range
  'honor': Honor
}

export type NoEloPlayer = Omit<PlayerData, 'range' >
// export type NoEloPlayer = Pick<PlayerData, 'idPlayer' | 'gameName' | 'namePlayer' | 'honor'>
export type NewPlayerEntry = Omit<PlayerData, 'idPlayer'>
