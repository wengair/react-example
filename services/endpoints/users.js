const express = require('express')
const router = express.Router()
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
  const userInfo = req.body.userInfo
  // mongoose needs to use object to do the query
  const query = {
    email: userInfo.email,
    password: userInfo.password,
  }
  try {
    // search DB by matching user's email and password
    const queryResult = await Users.find(query).exec()
    // if queryResult === [] means email or password is incorrect and needs to return an error message
    if(!queryResult[0]) return endpointError(res, 400, 'BadRequest', 'Incorrect email or password.')
    return res.send({
      ok: true,
      userInfo: queryResult[0],
    })
  }
  catch(err) {
    // handle unexpected errors caused by server or any other places that is not related to user's action
    logError(500, 'Exception occurs in endpoint while searching for user info by email and password', err)
    return endpointError(res, 500, 'InternalServerError', 'Something went wrong and the user info could not be found by email and password.')
  }
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

  try {
    await Users.create(newUserInfo)
    return res.send({ok: true})
  }
  catch(err) {
    // duplicated email error
    if(err.errors) return res.status(400).json(generateParamErroes(err))
    // unexpected errors
    logError(500, 'Exception occurs in endpoint while searching for user info by email and password', err)
    return endpointError(res, 500, 'InternalServerError', 'Something went wrong and the user info could not be found by email and password.')
  }
})

module.exports = router
