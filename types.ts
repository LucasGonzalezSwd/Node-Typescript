export enum Range {
  Iron = 'IRON',
  Bronze = 'BRONZE',
  Silver = 'SILVER',
  Gold = 'GOLD',
  Platinium = 'PLATINIUM',
  Esmerald = 'ESMERALD',
  Diamond = 'DIAMOND',
  Master = 'MASTER',
  Grandmaster = 'GRANDMASTER',
  Challenger = 'CHALLENGER'
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

  'gameName': string
  'namePlayer': string
  'range': Range
  'honor': Honor
}

export type NoEloPlayer = Omit<PlayerData, 'range' >
