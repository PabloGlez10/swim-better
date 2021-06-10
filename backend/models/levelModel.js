'use strict'

const mongoose = require('mongoose')

const levelSchema = require('./schemas/levelSchema')

const levelModel = mongoose.model('levels', levelSchema)

module.exports = levelModel
