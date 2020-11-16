const express = require('express')
const router = express.Router()
const {endpointError, logError, generateParamErroes} = require('../util')
const validate = require('../validation')
// DB connection to Heroku's PostgreSQL
const pgConn = require('../dbConnection')

// Body Parser Middleware
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.route('/login').all(jsonParser).post(async (req, res) => {
  const validationDefinition = {
    email: [
      validate.notEmpty,
    ],
    password: [
      validate.notEmpty,
    ],
  }
  
  const errorMsg = await validate.run(validationDefinition, req.body.userInfo)
  if (errorMsg) return res.status(400).json(errorMsg)

  try {
    const userInfo = req.body.userInfo
    const result = await pgConn.query(`SELECT * FROM users WHERE email = $1 and password = $2;`, [userInfo.email, userInfo.password])
    if(!result.rows[0]) return endpointError(res, 400, 'BadRequest', 'Incorrect email or password.')
    return res.send({
      ok: true,
      userInfo: result.rows[0],
    })
  }
  catch(err) {
    // handle unexpected errors caused by server or any other places that is not related to user's action
    logError(500, 'Exception occurs in endpoint while searching for user info by email and password', err)
    return endpointError(res, 500, 'InternalServerError', 'Something went wrong and the user info could not be found by email and password.')
  }
})

router.route('/register').all(jsonParser).post(async (req, res) => {
  const validationDefinition = {
    email: [
      validate.notEmpty,
      validate.validEmailFormat,
      validate.uniqueEmail,
    ],
    password: [
      validate.notEmpty,
      validate.noSpace,
    ],
  }
  
  const errorMsg = await validate.run(validationDefinition, req.body.userInfo)
  if (errorMsg) return res.status(400).json(errorMsg)
  
  try {
    const userInfo = req.body.userInfo
    const now = new Date()
    await pgConn.query(`INSERT INTO users (email, password, created_at) VALUES ($1, $2, $3);`, [userInfo.email, userInfo.password, now])
    return res.send({ok: true})
  }
  catch(err) {
    // unexpected errors
    logError(500, 'Exception occurs in endpoint while searching for user info by email and password', err)
    return endpointError(res, 500, 'InternalServerError', 'Something went wrong and the user info could not be found by email and password.')
  }
})

module.exports = router
