import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import {config} from '../lib/config'
import {useHistory} from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const urlJoin = require('url-join')


function SearchResult({location}) {
  // when redirected form landing page, the user's query will be put in location.state.queryString
  const history = useHistory()
  const [queryString, setQueryString] = useState(location.state.queryString)
  const [recipies, setRecipies] = useState()
  
  // import the image from src/images for Carousel to show

  const submitHandler = (e) => {
    // e.preventDefault()
    // when user hit enter, redirect them to /result page with what they typed in the search bar
    history.push({pathname: `/result`, state: {queryString: queryString}})
  }


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
      <div class = 'container-fluid'>
      <div class = 'row justify-content-center' >
      <SearchBar onSubmit={submitHandler} queryString={queryString} setQueryString={setQueryString} />
      </div>
      </div>
      {/* if recipes has value, print all recipies' title */}
      {/* we need "recipies &&" to not show anything since recipies will recieve data later (in useEffect) */}
    <div className='SearchResult-container'>
    <div className='wrapper'>   
      {recipies && recipies.map(recipe => {  
        return (  

        <div>
        <img src= {recipe.image} alt=""/>
        <p> {recipe.title} </p>
        </div>


            )})}
            </div>
                    </div>
      
        <style jsx='true'>
        {`

        .SearchResult-container {
        width: 100%;
        height: 100%;
        left: 100px;
        top: 500px;
        background: rgba(252, 209, 127, 0.26);
        }
        
        .wrapper {
        display: grid;
        grid-template-columns: 20% 20% 20%;
        grid-template-rows: 20% 20% 20%;
        gap: 10% 10%;
        padding: 50px;
    grid-template-areas:
    "wrapper wrapper wrapper"
    "wrapper wrapper wrapper"
    "wrapper wrapper wrapper";
        }
      
        .container-fluid{
          padding: 50px;
          align: center;
        }
        
        `}
        
        </style>
        </div>
  )
}

export default SearchResult
