// just example
var mongoose = require('mongoose')

var {Schema} = mongoose

var wrhSchema = new Schema({
  Sno: Number,
  MaterialName: String,
  MaterialId: String,
  LocationName: String,
  LocationId: String,
  Quantity: String,
  DeliveryLocationName: String,
  DeliveryLocationID: String,
  PickedUp: String,
  PickTimeStamp: {
    type: Date,
    default: Date.now,
  },
  Delivered: String,
  DeliveryTimeStamp: {
    type: Date,
    default: Date.now,
  },
})

mongoose.model('wrh', wrhSchema)
