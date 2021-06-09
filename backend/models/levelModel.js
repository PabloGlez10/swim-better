'use strict'

const mongoose = require('mongoose')

const levelSchema = require('./schemas/levelSchema')

const levelModel = require('levels', levelSchema)

module.exports = levelModel