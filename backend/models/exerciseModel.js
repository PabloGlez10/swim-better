'use strict'

const mongoose = require('mongoose')

const exerciseSchema = require('./schemas/exerciseSchema')

const exerciseModel = require('exercises', exerciseSchema)

module.exports = exerciseModel