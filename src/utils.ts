import { NewPlayerEntry, Range, Honor } from '../types'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}
const isNumber = (number: number): boolean => {
  return typeof number === 'number'
}

const isHonor = (param: any): boolean => {
  return Object.values(Honor).includes(param)
}
const isRange = (param: any): boolean => {
  return Object.values(Range).includes(param)
}

const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error('only name account')
  }
  return nameFromRequest
}
const parseGameName = (gameFromRequest: any): string => {
  if (!isString(gameFromRequest)) {
    throw new Error('only names of games')
  }
  return gameFromRequest
}

const parseHonor = (honorFromRequest: any): Honor => {
  if (!isHonor(honorFromRequest) || !isNumber(honorFromRequest)) {
    throw new Error('honor can be from 0 to 5')
  }
  return honorFromRequest
}
const parseRange = (rangeFromRequest: any): Range => {
  if (!isString(rangeFromRequest) || !isRange(rangeFromRequest)) {
    throw new Error('Honor can beIron iron, bronze, silver, gold, platinium, esmerald, diamond, master, grandmaster, challenger')
  }
  return rangeFromRequest
}

const toNewPlayerAdded = (object: any): NewPlayerEntry => {
  const NewEntry: NewPlayerEntry = {
    namePlayer: parseName(object.namePlayer),
    gameName: parseGameName(object.gameName),
    honor: parseHonor(object.honor),
    range: parseRange(object.range)
  }
  return NewEntry
}

export default toNewPlayerAdded
