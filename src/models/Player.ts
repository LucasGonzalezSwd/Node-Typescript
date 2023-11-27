import mongoose from 'mongoose'
import { Honor, Range } from '../../types'

const Schema = mongoose.Schema

const lolPlayerSchema = new Schema({
  namePlayer: String,
  range: {
    type: String,
    enum: Object.values(Range)
  },
  gameName: String,
  honor: {
    type: Number,
    enum: Object.values(Honor).map((value) => Number(value))
  }

})

const Player = mongoose.model('LolPlayer', lolPlayerSchema)

export default Player
