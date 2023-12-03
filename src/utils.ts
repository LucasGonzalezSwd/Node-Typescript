import { PlayerData, Range, Honor } from '../types'

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}
export const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

export const isHonor = (param: any): boolean => {
  return Object.values(Honor).includes(param)
}
export const isRange = (param: any): boolean => {
  return Object.values(Range).includes(param)
}

export const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('only name account')
  }
  return nameFromRequest
}
export const parseGameName = (gameFromRequest: any): string => {
  if (!isString(gameFromRequest)) {
    throw new Error('only names of games')
  }
  return gameFromRequest
}

export const parseHonor = (honorFromRequest: any): Honor => {
  if (!isHonor(honorFromRequest) || !isNumber(honorFromRequest)) {
    throw new Error('honor can be from 0 to 5')
  }
  return honorFromRequest
}
export const parseRange = (rangeFromRequest: any): Range => {
  if (!isString(rangeFromRequest) || !isRange(rangeFromRequest)) {
    throw new Error('Honor can be iron, bronze, silver, gold, platinium, esmerald, diamond, master, grandmaster, challenger')
  }
  return rangeFromRequest
}

const toNewPlayerAdded = (object: any): PlayerData => {
  const NewEntry: PlayerData = {
    namePlayer: parseName(object.namePlayer).toUpperCase(),
    gameName: parseGameName(object.gameName).toUpperCase(),
    range: parseRange(object.range),
    honor: parseHonor(object.honor)
  }
  return NewEntry
}

export default toNewPlayerAdded
