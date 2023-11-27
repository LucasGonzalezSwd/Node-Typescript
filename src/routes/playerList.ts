/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { deletePlayer, getAll, getById, postPlayer, putPlayer } from '../handlers/handlersRoutes'

const router = express.Router()

router.get('/', getAll)

router.get('/:id', getById)

router.post('/', postPlayer)

router.put('/', putPlayer)

router.delete('/', deletePlayer)

export default router
