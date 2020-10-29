const express = require('express')
const app = express()
// const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = express.Router()
const fetch = require('node-fetch')
const config = require('./config')
// Body Parser Middleware
const jsonParser = bodyParser.json()
// require('../models/dbSchema.js')
// require('../models/erp.js')
const recipes = require('../recipeRecord/findByIngredients')
const recipeInfo = require('../recipeRecord/recipeInformationWithNutrition')
const {endpointError, logError} = require('./util')

app.use(function(req, res, next) {
  // Enabling CORS
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization')
  next()
})


router.route('/findByIngredients').all(jsonParser).post(async (req, res) => {
  // const queryString = req.body.queryIngredients.join(',+')
  // try {
  //   await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${queryString}&apiKey=${config.spoonacular.APIKey}`, {
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         if(!data.status) {
  //           return res.send({
  //             ok: true,
  //             recipes: data,
  //           })
  //         }
  //         else return res.send({
  //           ok: false,
  //           recipes: data,
  //         })
  //       })
  // }
  // catch(err) {
  //   logError(500, 'Exception occurs in endpoint while trying to read this client.', err)
  //   return endpointError(res, 500, 'InternalServerError', 'Something went wrong and this client could not be read.')
  // }
  return res.send({
    ok: true,
    recipes: recipes,
  })
})

router.route('/recipe/:id').get(async (req, res) => {
  // const recipeId = req.params.id
  // try {
  //   await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${config.spoonacular.APIKey}`, {
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         if(!data.status) {
  //           return res.send({
  //             ok: true,
  //             recipe: data,
  //           })
  //         }
  //         else return res.send({
  //           ok: false,
  //           recipe: data,
  //         })
  //       })
  // }
  // catch(err) {
  //   logError(500, 'Exception occurs in endpoint while trying to read this client.', err)
  //   return endpointError(res, 500, 'InternalServerError', 'Something went wrong and this client could not be read.')
  // }
  return res.send({
    ok: true,
    recipe: recipeInfo[0],
  })
})

module.exports = router
