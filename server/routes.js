const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/truth/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getTruthById(id)
    .then(truthQuestion => {
      res.json(truthQuestion)
    })
})

router.get('/dare/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getDareById(id)
    .then(dareQuestion => {
      res.json(dareQuestion)
    })
})

router.get('/deer/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getDeerById(id)
    .then(deerPic => {
      res.json(deerPic)
    })
})

module.exports = router
