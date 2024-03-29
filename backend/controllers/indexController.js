'use strict'

const express = require('express')
const { index } = require('../models/schemas/userSchemas')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    const now = new Date()
    const indexMessage = `API Swim Better v1.0.0, todos los derechos reservados ${now.getFullYear()}.`
    res.send(indexMessage)
  })

  module.exports = router
