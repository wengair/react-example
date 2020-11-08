const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const config = require('../config')
const {endpointError, logError, generateParamErroes} = require('../util')

// Body Parser Middleware
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// DB
const mongoose = require('mongoose')
// For inheriting the DB schema models, we should require the schema files in the models folder 
require('../../models/users')
// Once the schema file is loaded we need to instantiate the model using mongoose package like this
const Users = mongoose.model('users') //check for this 'data' variable in /models/dbSchema.js then u can understand

router.route('/login').all(jsonParser).post(async (req, res) => {
  Users.find((err, document)=> {
    console.log(document)
  })
  return res.send({
    ok: true,
    recipes: 'has something',
  })
})

router.route('/register').all(jsonParser).post(async (req, res) => {
  const userInfo = req.body.userInfo
  const newUserInfo = new Users({
    email: userInfo.email,
    password: userInfo.password,
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    Created: Date.now(),
    Modified: Date.now(),
  })

  const validationResult = newUserInfo.validateSync()
  if (validationResult) return res.status(400).json(generateParamErroes(validationResult))

  Users.create(newUserInfo)
    .then((response, err)=>{
      if(err) logError(500, 'Exception occurs in endpoint while trying to create a new user.', err)
      else return res.send({ok: true})
    })
    .catch(err => res.status(400).json(generateParamErroes(err)))
})

module.exports = router
