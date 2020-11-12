import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import {config} from '../lib/config'
// icons
import TitleIcon from '../images/pg3_recipename.svg'
import NutritionIcon from '../images/pg3_nutritionfacts.png'
import CalIcon from '../images/pg3_calorie.svg'
import YieldIcon from '../images/pg3_yield.svg'
import TimeIcon from '../images/pg3_time.svg'
import LikeIcon from '../images/like.svg'
const urlJoin = require('url-join')

function SingleRecipeView({match}) {
  const [queryString, setQueryString] = useState()
  const [recipe, setRecipe] = useState()
  const displayedNutrients = [
    'Protein',
    'Carbohydrates',
    'Fat',
    'Cholesterol',
    'Sodium',
  ]

  const fetchOneRecipe = async () => {
    const recipeId = match.params.id
    fetch(urlJoin(config.sous.apiUrl, `/recipe/${recipeId}`), {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.ok) {
          setRecipe(data.recipe)
        }
      })
  }

  useEffect(fetchOneRecipe, [])

  return (
    <div>
      <div className='searchbar-container'>
        <SearchBar queryString={queryString} setQueryString={setQueryString} />
      </div>
      <div className='stripe'/>
      {recipe && (
        <div className='recipe-container'>
          <div className='row'>
            <div>
              <img src={recipe.image} alt={recipe.title} className='recipe-img' id="test_single_recipe_image"/><br />
              <img src={LikeIcon} alt='like icon' />
            </div>
            <div>
              <div className='row'>
                <img src={TitleIcon} alt='title icon' className='header-icon' id="test_single_recipe_title_icon"/>
                <p className='title-text' id="test_single_recipe_title">{recipe.title}</p>
              </div>
              {/* title, and other information */}
              <div className='row'>
                <div className='header-icon'>
                  <img src={NutritionIcon} alt='nutrition icon' className='nutrition-icon'/>
                </div>
                <div>
                  <p className='header-sub-title nutrition-title'>Nutritional Facts:</p>
                  <p className='header-content'>Per Serving:</p>
                  {/* only list the nutritions that we want to show to users */}
                  {recipe.nutrition.nutrients.map(nutruent => {
                    if(displayedNutrients.includes(nutruent.title)) {
                      return <p key={nutruent.title} className='header-content' id="test_single_recipe_nutrients">{nutruent.title} {nutruent.amount}{nutruent.unit} {nutruent.percentOfDailyNeeds}% DV</p>
                    }
                    else return null
                  })}
                  <div className='row recipe-misc-container'>
                    {/* calories */}
                    <div className='row recipe-misc'>
                      <img src={CalIcon} alt='calorie icon'/>
                      <div>
                        <p className='header-sub-title'>CALORIES:</p>
                        <p className='misc-content' id="test_single_recipe_calories">{recipe.nutrition.nutrients[0].amount} calories</p>
                        <p className='misc-content'>per serving</p>
                      </div>
                    </div>
                    {/* yield */}
                    <div className='row recipe-misc'>
                      <img src={YieldIcon} alt='yield icon'/>
                      <div>
                        <p className='header-sub-title'>YIELD:</p>
                        <p className='misc-content' id="test_single_recipe_serving">{recipe.servings} Serving{recipe.servings > 1 ? 's' : ''}</p>
                      </div>
                    </div>
                    {/* timing */}
                    <div className='row recipe-misc'>
                      <img src={TimeIcon} alt='time icon'/>
                      <div>
                        <p className='header-sub-title'>TIMING:</p>
                        <p className='misc-content' id="test_single_recipe_cook_time">{recipe.cookingMinutes} mins</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row body-container'>
            <div className='instruction-container'>
              <p className='body-title'>Directions:</p>
              {recipe.analyzedInstructions[0]?.steps.map((instruction, idx) => {
                return (
                  <>
                    <p className='body-text'>Step {idx + 1}</p>
                    <p className='instruction-step body-text' id="test_single_recipe_instructions">{instruction.step}</p>
                  </>
                )
              })}
            </div>
            <div className='ingredient-container'>
              <div className='sticky'>
                <p className='body-title'>Ingredients:</p>
                {recipe.nutrition.ingredients.map(ingredient => {
                  return <p key={ingredient.name} className='body-text' id="test_single_recipe_ingredients">{ingredient.name} {ingredient.amount} {ingredient.unit}</p>
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx='true'>
        {`
        .searchbar-container {
          display: flex;
          justify-content: center;
          padding-top: 30px;
          padding-bottom: 45px;
        }

        .stripe {
          width: 100%;
          height: 300px;
          background-color: var(--c-light-brown);
          position: absolute;
          z-index: -1;
          opacity: 0.6;
        }

        .recipe-container {
          padding: 30px 11vw;
        }

        .recipe-img {
          width: 370px;
          height: 320px;
          object-fit: cover;
          margin-right: 65px;
          padding-top: 20px;
        }

        .header-icon {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }

        .title-text {
          font-family: Signika SC;
          font-size: 40px;
          margin: 0px;
          color: #6C6868;
          margin-top: -5px;
        }

        .nutrition-icon {
          width: 30px;
          height: 30px;
          padding: 10px 5px 0px 5px;
        }

        .header-sub-title {
          font-family: Shanti;
          font-size: 20px;
          color: #767676;
          margin: 15px 0px 2px 0px;
        }

        .nutrition-title {
          font-weight: bold;
        }

        .header-content {
          font-family: Shanti;
          font-size: 15px;
          color: #584E4E;
          margin: 10px 0px;
        }

        .recipe-misc-container {
          margin-top: 20px;
          margin-left: -6px;
        }

        .recipe-misc {
          align-items: start;
          margin-right: 80px;
        }

        .misc-content {
          font-family: Shanti;
          font-size: 15px;
          color: #584E4E;
          margin: 2px 0px;
        }

        .body-title {
          font-family: Shanti;
          font-size: 32px;
          font-weight: bold;
          color: #584E4E;
        }

        .body-container {
          justify-content: space-between;
        }

        .instruction-container {
          width: 63%;
        }

        .ingredient-container {
          width: 18%;
        }

        .body-text {
          font-family: Shanti;
          font-size: 20px;
          color: #584E4E;
        }

        .instruction-step {
          margin-top: 35px;
          margin-bottom: 60px;
        }

        .sticky {
          position: -webkit-sticky;
          position: sticky;
          top: 20px;
        }
        `}
      </style>
    </div>
  )
}

export default SingleRecipeView
