import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import {config} from '../lib/config'
const urlJoin = require('url-join')

function SearchResult({location}) {
  // when redirected form landing page, the user's query will be put in location.state.queryString
  const [queryString, setQueryString] = useState(location.state.queryString)
  const [recipies, setRecipies] = useState()

  const fetchRecipies = async () => {
    fetch(urlJoin(config.sous.apiUrl, 'findByIngredients'), {
      method: 'GET',
      headers: {
      },
    })
      .then(res => res.json())
      .then(data => setRecipies(data))
  }
  
  useEffect(() => {
    fetchRecipies()
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
