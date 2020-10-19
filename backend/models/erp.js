// just example
var mongoose = require('mongoose')

var {Schema} = mongoose

var erpSchema = new Schema({
  Sno: Number,
  Time: String,
  Date: String,
  anadieCost: Number,
  anadieCstPerHr: Number,
  anaeleEneCost: Number,
  anaeleEneCstPerHr: Number,
  analpgCost: Number,
  analpgCstPerHr: Number,
  anatotCostOFUnitProdPerHr: Number,
  anatotEneCostPerHr: Number,
  anatotQtyProPerHr: Number,
  dieCon: Number,
  eleEnCons: Number,
  idleRun: Number,
  linSp: Number,
  lpgCons: Number,
  macBreakdown: Number,
  macTemp: Number,
  matDel: Number,
  matPic: Number,
  proEnd: Number,
  proQty: String,
  proStrt: Number,
  runSp: Number,
  skuLo: String,
  tarQty: String,
})

mongoose.model('erp', erpSchema)
