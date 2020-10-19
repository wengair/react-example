var express = require('express')
var app = express()
// var mongoose = require('mongoose')
// var bodyParser = require('body-parser')
var router = express.Router()
const fetch = require('node-fetch')
const config = require('./config')
// Body Parser Middleware
// var jsonParser = bodyParser.json()
require('../models/dbSchema.js')
require('../models/erp.js')
const recipes = require('../recipeRecord/findByIngredients')


// var Data = mongoose.model('data')
// var Erp = mongoose.model('erp')

app.use(function(req, res, next) {
  // Enabling CORS
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization')
  next()
})

// 2 POST API for the processing of data based on the given DATE

// router.route('/process') // localhost:3000/process
// .all(jsonParser)
// .post((req,res) => {
//     var dt  = req.body.date
//     console.log(dt)
//   // finding the data where the Date is given date and sorted in asc oreder of Sno
//     var list =[
//         Data.find({Date: dt}).sort({'ID':'asc'}),
//       ]
//       Promise.all(list)
//       .then((result,err) =>{
//         if(err) console.log(err)
//         var n = result[0].length
//         console.log(n)
//         res.send('done dude')
//         if(n === 1){
//           console.log('only one record')
//         // let updateData = {
//         //     power_diff : 0,
//         //     diesel_diff : 0,
//         //     lpg_diff : 0
//         //    }
//         //  var saving = [
//         //   Data.findOneAndUpdate({ID:result[0][0].ID},updateData,{upsert:true})
//         //   ]
//         //   Promise.all(saving)
//         //   .then((re) =>{
//         //     console.log(re)
//         //   })
//         //    //for loop close
//         }
//        else{
//       //For loop to loop over the result and calculate the differences in power,diesel,lpg
//       for(var x = 1 ; x < n; x++){
//           var y = x-1
//           var diff0 = (result[0][x].power_consumed - result[0][y].power_consumed)
//           var diff1 = (result[0][x].DIESEL - result[0][y].DIESEL)
//           var diff2 = (result[0][x].LPG - result[0][y].LPG)
//           var diff2x = Math.abs(diff2)
//           var diff1x = Math.abs(diff1)
//           var diff0x = Math.abs(diff0)
//        let updateData = {
//           power_diff : diff0x,
//           diesel_diff : diff1x,
//           lpg_diff : diff2x
//          }
//          console.log(updateData)
//        var saving = [
//         Data.findOneAndUpdate({ID:result[0][x].ID},updateData,{upsert:true})
//         ]
//         Promise.all(saving)
//         .then((re) =>{
//           console.log(re)
//         })
//        }   //for loop close
//       }
//     })
//          // for the Promise .then() function
//   })            //for the post call close

// // 3 DASHBOARD TAB-1 Data retrieval api
// router.route('/dashboard')
// .all(jsonParser)
// .post((req,res) => {
//     var Time1 = req.body.time1
//     var dt = req.body.date
//     var Time2 = req.body.time2
//     var count = req.body.counter
//       // var x = count - 60
//       // var new1 = [
//       //   Data.find({'Date' : dt, 'Time' : time}),
//       // Data.find({'Sno' : {$gte : x , $lte : count},'Date': dt}).sort({'Sno':'asc'})]
//       // Promise.all(new1)
//       // .then((resp) =>{
//       // res.send(resp[0])
//       // var n = resp[1].length
//       // console.log(n)
//       // var enrAggr = 0
//       // var lpgAggr = 0
//       // var dieselAggr = 0
//       //     for(var i = 0;  i<n-1;i++){
//       //  enrAggr += resp[1][i].eleEnCons
//       //  lpgAggr += resp[1][i].lpgCons
//       //  dieselAggr += resp[1][i].dieCons
//       // }
//       // console.log(enrAggr,lpgAggr,dieselAggr)
//       // })
//    //for the power data
//      var new1 = [
//        Data.find({'Time' :{$gte : Time1 , $lte : Time2} , 'Date' : dt}),
//       ]
//      Promise.all(new1)
//      .then( (result) => {
//        console.log(Time1)
//        console.log(Time2)
//        //console.log(result[0])
//        // console.log(result[1].length)
//        // console.log(result[2].length)
//        res.send(result)
//      })
//      .catch((err) => {
//        res.status(500).send(err)
//      })
//    })

//    // 4 Post Api call for the date selection data rendering to client
// router.route('/date')
// .all(jsonParser)
// .post((req,res) => {
//     var dt = req.body.date
//     // var time = req.body.Time
//     // var dt1 = new Date(dt)
//     // var x =
//   console.log(dt)
//    // console.log(dt1)
//     var dateArr = [
//       Data.find({'Date' : dt}).sort({'ID' : 'asc'})
//      ]
//      Promise.all(dateArr)
//      .then((result) => {
//         console.log(result)
//         res.send(result)
//      })
//   })

//   // 5 Post api for the retrieval of the PRODUCTION DATA FOR (DASHBOARD-TAB 2)
// router.route('/prdt')
// .all(jsonParser)
// .post((req,res)=>{
//     var Dt = req.body.date2
//     var time  = req.body.timex
//     var count = req.body.counter
//      if(count%12 == 0){
//       var x = count - 12
//       var new1 = [
//         Erp.find({'Date' : Dt, 'Time' : time}),
//       Erp.find({'Sno' : {$gte : x , $lte : count},'Date': Dt}).sort({'Sno':'asc'})]
//       Promise.all(new1)
//       .then((resp) =>{
//       res.send(resp[0])
//       var n = resp[1].length
//       console.log(n)
//       var enrAggr = 0
//       var lpgAggr = 0
//       var dieselAggr = 0
//           for(var i = 0 ; i<n-1;i++){
//        enrAggr += resp[1][i].eleEnCons
//        lpgAggr += resp[1][i].lpgCons
//        dieselAggr += resp[1][i].dieCons
//       }
//       console.log(enrAggr,lpgAggr,dieselAggr)
//       })
//     }
//     else{
//       Erp.find({$and :[{'Date': Dt}, {'Time' : time},{'Sno': count}]})
//       .then((result)=>{
//         res.send(result)
//       })
//     }
//     })

router.route('/findByIngredients').get(async (req, res) => {
  // const APIKey = '99aeca724c4c4e91b2e33cf0e680773a'
  // const text = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+sugar&apiKey=${APIKey}`, {
  //   method: 'GET',
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  // })
  //   .then(res => res.json())
  //   .then(data => data)
  res.send(recipes)
})

router.route('/recipeInformationWithNutrition').get(async (req, res) => {
  const APIKey = '99aeca724c4c4e91b2e33cf0e680773a'
  const recipe = await fetch(`https://api.spoonacular.com/recipes/553847/information?includeNutrition=true&apiKey=${APIKey}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => data)
  res.send(recipe)
})

router.route('/analyzedInstructions').get(async (req, res) => {
  const APIKey = '99aeca724c4c4e91b2e33cf0e680773a'
  const instructions = await fetch(`https://api.spoonacular.com/recipes/553847/analyzedInstructions?stepBreakdown=true&apiKey=${APIKey}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log(e))
  res.send(instructions)
})

module.exports = router
