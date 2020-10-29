const express = require('express')
const path = require("path");
const app = express()
const cors = require('cors')

// const mongoose = require('mongoose')
// mongoose connection
// mongoose.connect('mongodb://localhost:27017/hellodb')

// general settings
app.use(cors())
app.use((req, res, next) => {
  // Enabling CORS
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization')
  next()
})

// deployment
app.use(express.static(path.join(__dirname, './frontend/build')))
app.use((req, res) => {
  res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})

// API
const endpoints = require('./services/endpoints.js') // file name doesn't affect
app.use('/api/v1', endpoints)

// Setting up server
const Port = process.env.PORT || 8080
app.listen(Port, () => {
  console.log('App now running on port', Port)
})
