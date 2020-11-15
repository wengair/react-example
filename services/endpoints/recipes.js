const express = require('express')
const router = express.Router()

// Body Parser Middleware
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const sampleRecipes = require('../../recipeRecord/findByIngredients')
const recipeInfo = require('../../recipeRecord/recipeInformationWithNutrition')
const {endpointError, logError} = require('../util')
const pgConn = require('../dbConnection')

router.route('/findByIngredients').all(jsonParser).post(async (req, res) => {
  // const validationDefinition = {
  //   email: [
  //     validate.notEmpty,
  //   ],
  //   password: [
  //     validate.notEmpty,
  //   ],
  // }
  
  // const errorMsg = await validate.run(validationDefinition, req.body.userInfo)
  // if (errorMsg) return res.status(400).json(errorMsg)

  // try {
  //   const queryIngredients = req.body.queryIngredients
  //   // convert all ingredients into ids
  //   const findIngredientResults = await pgConn.query(`SELECT * FROM ingredients WHERE name = ANY ($1);`,[queryIngredients])
  //   const ingredientIds = findIngredientResults.rows.map(ingredient => ingredient.id)
  //   const result = await pgConn.query(`
  //     SELECT rc.name,
  //            COALESCE(SUM(i.score),0) AS total
  //     FROM (
  //       SELECT ir.recipe_id
  //       FROM recipe_ingredients AS ir
  //       WHERE ingredient_id = ANY ($1)
  //       GROUP BY ir.recipe_id
  //     ) AS r
  //     LEFT JOIN (
  //       SELECT * FROM recipe_ingredients
  //       WHERE NOT (ingredient_id = ANY ($1))
  //     ) AS ir
  //       ON ir.recipe_id = r.recipe_id
  //     LEFT JOIN ingredients AS i ON i.id = ir.ingredient_id
  //     JOIN recipes AS rc ON rc.id = r.recipe_id
  //     GROUP BY rc.name
  //     ORDER BY total ASC
  //     `, [ingredientIds])
  //   if(!result.rows[0]) return endpointError(res, 400, 'BadRequest', 'Incorrect email or password.')
  //   return res.send({
  //     ok: true,
  //     result,
  //   })
  // }
  // catch(err) {
  //   // handle unexpected errors caused by server or any other places that is not related to user's action
  //   logError(500, 'Exception occurs in endpoint while searching for user info by email and password', err)
  //   return endpointError(res, 500, 'InternalServerError', 'Something went wrong and the user info could not be found by email and password.')
  // }
  return res.send({
    ok: true,
    recipes: sampleRecipes,
  })
})

router.route('/recipe/:id').get(async (req, res) => {
  // const recipeId = req.params.id
  // try {
  //   await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${config.spoonacular.APIKey}`, {
  //       method: 'GET',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         if(!data.status) {
  //           return res.send({
  //             ok: true,
  //             recipe: data,
  //           })
  //         }
  //         else return res.send({
  //           ok: false,
  //           recipe: data,
  //         })
  //       })
  // }
  // catch(err) {
  //   logError(500, 'Exception occurs in endpoint while trying to read this client.', err)
  //   return endpointError(res, 500, 'InternalServerError', 'Something went wrong and this client could not be read.')
  // }
  return res.send({
    ok: true,
    recipe: recipeInfo[0],
  })
})

// router.route('/recipes/import').all(jsonParser).post(async (req, res) => {
//   console.log(req.body)
//   const recipes = req.body.recipes
//   try {
//     for(const recipe in recipes) {
//       // spoonacularSourceUrl -> imgurl instruction
//       const result = await pgConn.query(`
//         INSERT INTO recipes (
//           name,
//           servings,
//           readyInMinutes,
//           sourceName,
//           sourceUrl,
//           spoonacularSourceUrl,
//           healthScore,
//           spoonacularScore,
//           pricePerServing,
//           cheap,
//           dairyFree,
//           glutenFree,
//           ketogenic,
//           lowFodmap,
//           sustainable,
//           vegan,
//           vegetarian,
//           veryHealthy,
//           whole30,
//           created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, NOW());`,
//           [
//             recipe.title,
//             recipe.servings,
//             recipe.readyInMinutes,
//             recipe.sourceName,
//             recipe.sourceUrl,
//             recipe.image,
//             recipe.healthScore,
//             recipe.spoonacularScore,
//             recipe.pricePerServing * 100,
//             recipe.cheap,
//             recipe.dairyFree,
//             recipe.glutenFree,
//             recipe.ketogenic,
//             recipe.lowFodmap,
//             recipe.sustainable,
//             recipe.vegan,
//             recipe.vegetarian,
//             recipe.veryHealthy,
//             recipe.whole30,
//           ]
//       )
//       console.log(result)
//     }
//     return res.send({ok: true})
//   }
//   catch(err) {
//     logError(500, 'Exception occurs in endpoint while trying to import recipes.', err)
//     return endpointError(res, 500, 'InternalServerError', 'Something went wrong and new recipes could not be added.')
//   }
// })

module.exports = router
