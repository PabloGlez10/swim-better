'use strict'

const express = require('express')
const nunjucks = require('nunjucks')
const database = require('./modules/database')
const bearerToken = require('express-bearer-token')
const cors = require('cors')

const usersController = require()
const authController = require()
const indexController = require()
const levelsController = require()
const exercisesController = require()

const app = express()

app.use(bearerToken())
app.use(cors())

nunjucks.configure('', {
  autoescape: true,
  express: app
})

app.use(express.json())

// app.use(usersController)
// app.use(authController)
// app.use(indexController)
// app.use(levelsController)
// app.use(exercisesController)

database.connect()

module.exports = app
