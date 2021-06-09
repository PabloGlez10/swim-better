'use strict'

const express = require('express')
const { sha512 } = require('js-sha512')
const router = express.Router()
const config = require('../modules/config')
const mailer = require('../modules/mailer')
const authMiddleware = require('../modules/authenticator')
const onlyRegisteredAccess = authMiddleware(true, ['user', 'admin'])
const onlyAdminAccess = authMiddleware(true, ['admin'])

const userModel = require('../models/userModel')

router.route('/users')
  .get(onlyAdminAccess, async (req, res) => {
    try {
      const limit = req.query.hasOwnProperty('limit') ? parseInt(req.query.limit) : 50

      let userList = await userModel.find().sort({ firstName: 'ASC', lastName: 'ASC' }).limit(limit).exec()
      userList = userList.map((user) => {
        user = user.toJSON()
        delete user.password

        return user
      })

      res.json(userList)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  .post(async (req, res) => {
    let userData = req.body
    try {

      userData.profile = "user"
      userData.password = sha512(userData.password)

      userData = await new userModel(userData).save()
      userData = userData.toJSON()
      delete userData.password

      res.status(201).json(userData)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }

    try {
      userData.public_domain = config.PUBLIC_DOMAIN
      res.render(config.WELLCOME_EMAIL_TPL, userData, async (err, emailBody) => {
        if (err) {
          return
        }

        const from = { name: userData.firstname, email: userData.email }

        await mailer.send(from, userData.email, config.WELLCOME_SUBJECT, emailBody, true)
      })
    } catch (error) {
      console.info("Envío de correo electrónico al usuario erróneo.")
      console.error(error)
    }
  })

router.route('/users/:userId')
  .get(onlyRegisteredAccess, async (req, res) => {
    try {
      const userId = req.params.userId

      if(userId !== req.tokenData._id && req.tokenData.profile === 'user'){
        res.status(404).json({ message: `Usuario con identificador ${userId} no encontrado.` })
        return
      }

      let foundUser = await userModel.findById(userId).exec()

      if (!foundUser) {
        res.status(404).json({ message: `Usuario con identificador ${userId} no encontrado.` })
        return
      }
      foundUser = foundUser.toJSON()
      delete foundUser.password

      res.json(foundUser)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  .put(onlyRegisteredAccess, async(req, res) => {
    try {
      const userId = req.params.userId
      const userData = req.body

      if(userId !== req.tokenData._id && req.tokenData.profile === 'user'){
        res.status(404).json({ message: `Usuario con identificador ${userId} no encontrado.` })
        return
      }

      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true }).exec()

      if (!updatedUser) {
        res.status(404).json({ message: `Usuario con identificador ${userId} no encontrado.` })
        return
      }

      updatedUser = updatedUser.toJSON()
      delete updatedUser.password

      res.json(updatedUser)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  .delete(onlyRegisteredAccess, async (req, res) => {
    try {
      const userId = req.params.userId

      if(userId !== req.tokenData._id && req.tokenData.profile === 'user'){
        res.status(404).json({ message: `Usuario con identificador ${userId} no encontrado.` })
        return
      }

      let foundUser = await userModel.findOneAndDelete({ _id: userId }).exec()

      if (!foundUser) {
        res.status(404).json({ message: `Usuario con identificador ${userId} no encontrado.` })
        return
      }

      res.status(204).json(null)
    } catch (error) {
      res.status(500).json({ message: error.message})
    }
  })

  module.exports = router
