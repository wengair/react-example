// just example
var mongoose = require('mongoose')

var {Schema} = mongoose

var wrhSchema = new Schema({
  Sno: Number,
  MaterialName: String,
})

mongoose.model('tests', wrhSchema)
