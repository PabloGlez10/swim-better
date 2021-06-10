'use strict'

const mongoose = require('mongoose')

const exerciseSchema = require('./schemas/exerciseSchema')

const exerciseModel = mongoose.model('exercises', exerciseSchema)

module.exports = exerciseModel
