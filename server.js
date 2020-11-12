const express = require('express')
const path = require('path');
const app = express()
const cors = require('cors')
const config = require('./services/config')

//MongoDB configuration 
const mongoose = require('mongoose')
const mongoUri = 'mongodb://recipeAdmin:recipe123@ds233571.mlab.com:33571/recipedb'

mongoose.connect(
  mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
)
  .then((res, err) => {
    if(err) console.log(err)
    console.log('connected to the MongoDB successfully')
  })


const { Client } = require('pg');
const client = new Client({
  connectionString: config.postgreUrl,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query(`
INSERT INTO users (name)
VALUES ('test user');`
, (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

// general settings
app.use(cors())
app.use((req, res, next) => {
  // Enabling CORS
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, PATCH')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

// API
const endpoints = require('./services/endpoints/recipes.js') // file name doesn't affect
app.use('/api/v1', endpoints)
const userEndpoints = require('./services/endpoints/users.js')
app.use('/api/v1/users', userEndpoints)

// deployment
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend/build')))
  app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
  })
}

// Setting up server
const Port = process.env.PORT || 8080
app.listen(Port, () => {
  console.log('App now running on port', Port)
})
