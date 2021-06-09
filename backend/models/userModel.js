'use strict'

const mongoose = require('mongoose')

const userSchema = require('./schemas/userSchemas')

const userModel = mongoose.model('users', userSchema)

module.exports = userModel