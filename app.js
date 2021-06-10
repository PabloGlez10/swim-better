'use strict'

const express = require('express')
const nunjucks = require('nunjucks')
const database = require('./backend/modules/database')
const bearerToken = require('express-bearer-token')
const cors = require('cors')

const usersController = require('./backend/controllers/usersController')
const authController = require('./backend/controllers/authController')
const indexController = require('./backend/controllers/indexController')
const levelsController = require('./backend/controllers/levelsController')
const exercisesController = require('./backend/controllers/exerciseController')

const app = express()

app.use(bearerToken())
app.use(cors())

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(express.json())

app.use(usersController)
app.use(authController)
app.use(indexController)
app.use(levelsController)
app.use(exercisesController)

database.connect()

module.exports = app
