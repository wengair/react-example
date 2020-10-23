import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import {config} from '../lib/config'
const urlJoin = require('url-join')

function SearchResult({location}) {
  // when redirected form landing page, the user's query will be put in location.state.queryString
  const [queryString, setQueryString] = useState(location.state.queryString)
  const [recipies, setRecipies] = useState()

  const fetchRecipies = async () => {
    const queryIngredients = queryString.replace(', ', ',').split(',')
    console.log(queryIngredients, 'queryIngredients')
    fetch(urlJoin(config.sous.apiUrl, 'findByIngredients'), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        queryIngredients: queryIngredients,
      }),
    })
      .then(res => res.json())
      .then(data => setRecipies(data.recipes))
  }

  const fetchOneRecipies = async () => {
    // fetch(urlJoin(config.sous.apiUrl, 'recipeInformationWithNutrition'), {
    fetch(urlJoin(config.sous.apiUrl, '/recipe/553847'), {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      // body: JSON.stringify({
      //   recipeId: 553847,
      // }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  
  useEffect(() => {
    fetchRecipies()
    // fetchOneRecipies()
  }, [])


  return (
    <div>
      <SearchBar queryString={queryString} setQueryString={setQueryString} />
      {/* if recipes has value, print all recipies' title */}
      {/* we need "recipies &&" to not show anything since recipies will recieve data later (in useEffect) */}
      {recipies && recipies.map(recipe => { return recipe.title })}
    </div>
  )
}

export default SearchResult
