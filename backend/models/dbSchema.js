// just example
var mongoose = require('mongoose') // table

var {Schema} = mongoose

var dataSchema = new Schema({
  ID: Number,
  Time: String,
  Date: String,
  Total_system_power_factor: Number,
  power_consumed: Number,
  RunStatus: String,
  LineSpeed: String,
  LinerLoaded: String,
  FacerLoaded: String,
  SteamTemperature: Number,
  SteamPressure: Number,
  SteamFlowRate: Number,
  Oven1Temperature: Number,
  Oven2Temperature: Number,
  Oven3Temperature: Number,
  Oven4Temperature: Number,
  Oven5Temperature: Number,
  AdhesiveAvailable: String,
  AdhesiveHeaterTemperature: Number,
  SKU: String,
  LPG: Number,
  DIESEL: Number,
  power_diff: Number,
  lpg_diff: Number,
  diesel_diff: Number,
})

mongoose.model('data', dataSchema)
