var express = require('express')
const path = require("path");
var app = express()
// var mongoose = require('mongoose')

var cors = require('cors')
// mongoose connection
// mongoose.connect('mongodb://localhost:27017/hellodb')

app.use(cors())
// CORS Middleware
app.use((req, res, next) => {
  // Enabling CORS
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization')
  next()
})

app.get('/recipeApp', (req, res) => {
  res.send('this is Recipe app building up soon')
  console.log('initial test of the app')
})
// require('./services/scada.js')
app.use(express.static('../build'))

var endpoints = require('./services/endpoints.js') // file name doesn't affect
app.use('/api/v1', endpoints)
// app.use(function(req, res) {
// 	res.sendFile(path.join(__dirname, ' ../build/index.html'));
// });

// Setting up server
var Port = process.env.PORT || 8080
app.listen(Port, () => {
  console.log('App now running on port', Port)
})
