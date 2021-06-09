'user strict'

const express = require('express')
const { sha512 } = require('js-sha512')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('../modules/config')

const userModel = require('../models/userModel')

router.route('/auth/login')
  .post(async (req, res) => {
    const credentials = req.body

    credentials.password = sha512(credentials.password)
  })
