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

      res.status(201).json(newLevel)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  })

  router.route('/levels/:levelId')
    .get(onlyAdminAccess, async (req, res) => {
      try {
        const levelId = req.params.levelId

        const foundLevel = await levelModel.findById(levelId).exec()

        if(!foundLevel) {
          res.status(404).json({ message: `El nivel con ID ${levelId} no existe`})
          return
        }

        res.json(foundLevel)
      }catch (error) {
        res.status(500).json({ message: error.message })
      }
    })
    .put(onlyAdminAccess, async (req,res) => {
      try {
        const levelId = req.params.levelId
        const newData = req.body

        const updatedLevel = await levelModel.findOneAndUpdate({ _id: levelId }, newData, { new: true }).exec()

        if(!updatedLevel) {
          res.status(404).json({ message: `El nivel con ID ${levelId} no existe`})
          return
        }

        res.json(updatedLevel)
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
    })
    .delete(onlyAdminAccess, async (req, res) => {
      try {
        const levelId = req.params.levelId

        let foundLeveñ = await levelModel.findOneAndDelete({ _id: levelId }).exec()

        if(!foundLevel) {
          res.status(404).json({ message: `El nivel con ID ${levelId} no existe`})
          return
        }

        res.status(204).json(null)
      } catch (error) {
        res,status(500).json({ message: error.message})
      }
    })

module.exports = router
