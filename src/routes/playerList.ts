import express from 'express'

const router = express.Router()

router.get("/", (_req,res) =>{
  res.send('Fetching all players')
})

router.post("/", (_req,res) =>{
    res.send('Saving a new player')
})


export default router;