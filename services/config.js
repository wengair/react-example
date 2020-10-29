require('dotenv').config()
const config = {
  // db: {
  //   user: process.env.DB_USER,
  //   pass: process.env.DB_PASS,
  //   name: process.env.DB_NAME,
  //   host: process.env.DB_HOST,
  //   port: process.env.DB_PORT,
  // },
  sous: {
    domain: process.env.sousDomain,
    apiUrl: process.env.sousAPI + '/api/v1/',
  },
  spoonacular: {
    APIKey: process.env.spoonacularAPIKey
  }
}

module.exports = config
