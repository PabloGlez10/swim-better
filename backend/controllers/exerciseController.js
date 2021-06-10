'use strict'

const express = require('express')
const router = express.Router()
const slugify = require('slugify')
const exerciseModel = require('../models/exerciseModel')
const authMiddleware = require('../modules/authenticator')
const publicAccess =  authMiddleware(false, ['user', 'admin'])
const onlyAdminAccess = authMiddleware(true, ['admin'])

router.route('/exercises')
  .get(publicAccess, async (req, res) => {
    try {
      const limit = req.query.hasOwnProperty('limit') ? parseInt(req.query.limit) : 50
      const filterParams = {}

      if(!req.tokenData || req.tokenData.profile === 'user'){
        filterParams.enabled = true
      }

      const exerciseList = await exerciseModel.find(filterParams).sort({ difficulty: 'ASC', title: 'ASC' }).limit(limit).exec()

      res.json(exerciseList)
    }catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  .post(onlyAdminAccess, async (req, res) => {
    try {
      let newExercise = req.body

      if (!newExercise.hasOwnProperty("slug") || (newExercise.hasOwnProperty("slug") && newExercise.slug === '')) {
        newExercise.slug = newExercise.title
      }

      newExercise.slug = slugify(newExercise.slug, { lower: true, strict: true })

      newExercise = await new exerciseModel(newExercise).save()

      res.status(201).json(newExercise)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

router.route('/exercises/:exerciseSlug')
  .get(publicAccess, async (req, res) => {
    try {
      const exerciseSlug = req.params.exerciseSlug

      const filterParams = {slug: exerciseSlug}

      if (!req.tokenData || req.tokenData.profile === 'user') {
        filterParams.enabled = true
      }

      const foundExercise = await exerciseModel.findOne(filterParams).exec()

      if(!foundExercise){
        res.status(404).json({ message: `El ejercicio con ruta ${exerciseSlug} no existe.`})
        return
      }

      res.json(foundExercise)
    }catch (error){
      res.status(500).json({message: error.message })
    }
  })

router.route('/exercises/:exerciseId')
  .pus(onlyAdminAccess, async (req, res) => {
    try{
      const exerciseId = requ.params.exerciseId
      const exerciseData = req.body

      if(!exerciseData.hasOwnProperty("slug") || (exerciseData.hasOwnProperty("slug") && exerciseData.slug === '')) {
        exerciseData.slug = exerciseData.title
      }

      exerciseData.slug = slugify(exerciseData.slug, {lower: true, strict: true})

      let updatedExercise = await exerciseModel.findOneAndUpdate({ _id: exerciseId }, exerciseData, { new: true }).exec()

      if (!updatedExercise){
        res.status(404).json({message: `El ejercicio con ID ${exerciseId} no existe.`})
        return
      }

      res.json(updatedExercise)
    }catch (error){
      res.status(500).json({message: error.message})
    }
  })
  .delete(onlyAdminAccess, async (req, res) => {
    try{
      const exerciseId = res.params.exerciseId

      const result = await exerciseModel.findOneAndDelete({_id: exerciseId}).exec()

      if(!result){
        res.status(404).json({ message: `El ejercicio con ID ${exerciseId} no existe.`})
        return
      }

      res.status(204).json(null)
    }catch (error) {
      res.status(500).json({ message: error.message})
    }
  })

module.exports = router
