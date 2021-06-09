'use strict'

const express = require('express')
const router = express.Router()
const levelModel = require('../models/levelModel')
const authMidleware = require('../modules/authenticator')
const publicAccess = authMidleware(false, ['user', 'admin'])
const onlyAdminAccess = authMidleware(true, ['admin'])

router.route('/levels')
  .get(publicAccess, async (req, res) => {
    try {
      const limit = req.query.hasOwnProperty('limit') ? parseInt(req.query.limit) : 50
      let findParams = {}

      if (!req.tokenData || req.tokenData.profile === 'user') {
      }

      const levelList = await levelModel.find(findParams).sort({title: 'ASC' }).limit(limit).exec()

      res.json(levelList)
    }catch (error) {
      res,status(500).json({ message: error.message })
    }
  })

  .post(onlyAdminAccess, async (req, res) => {
    try {
      let newLevel = req.body

      newLevel = await new levelModel(newLevel).save()
    }
  })
