import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import {config} from '../lib/config'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Link} from 'react-router-dom'
import LikeIcon from '../images/like.svg'

const urlJoin = require('url-join')


function SearchResult({location}) {
  // when redirected form landing page, the user's query will be put in location.state.queryString
  const [queryString, setQueryString] = useState(location.state.queryString)
  const [refresh, setRefresh] = useState(false)
  const [recipies, setRecipies] = useState()
  
  // import the image from src/images for Carousel to show

  const submitHandler = (e) => {
    e.preventDefault()
    // when user hit enter, redirect them to /result page with what they typed in the search bar
    // history.push({pathname: `/result`, state: {queryString: queryString}})
    setRefresh(true)
  }


  const fetchRecipies = async () => {
    const queryIngredients = queryString.replace(', ', ',').split(',')
    console.log(queryIngredients, 'queryIngredients')
    console.log(process.env.NODE_ENV,'process.env.NODE_ENV')
    fetch(urlJoin(config.sous.apiUrl, 'findByIngredients'), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        queryIngredients: queryIngredients,
      }),
    })
      .then(res => res.json())
      .then(data => setRecipies(data.recipes))
      .catch(e => console.log(e))
  }
  
  useEffect(() => {
    fetchRecipies()
    return () => {
      setRefresh(false)
    }
  }, [refresh])

  return (
    <div>
      <div className='searchbar-container'>
        <SearchBar onSubmit={submitHandler} queryString={queryString} setQueryString={setQueryString} />
      </div>
      {/* if recipes has value, print all recipies' title */}
      {/* we need "recipies &&" to not show anything since recipies will recieve data later (in useEffect) */}
      <div className='result-wrapper'>
        {recipies && recipies.map(recipe => {  
          return (
            <div className='recipe-card'>
              <Link to={`/recipe/${recipe.id}`}>
                <div>
                  <img src={recipe.image} className='recipe-img' alt={recipe.title} />
                  <div className='reicpe-text'>
                    <p className='recipe-name'> {recipe.title} </p>
                    <img src={LikeIcon} alt='like icon' className='like-icon'/>
                  </div>
                </div>
              </Link>
            </div>)
        })}
      </div>
      <style jsx='true'>
      {`
      .searchbar-container {
        display: flex;
        justify-content: center;
        padding-top: 30px;
        padding-bottom: 45px;
      }

      .result-wrapper {
        background: rgba(252, 209, 127, 0.26);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 50px;
        min-height: calc(100vh - 400px);
      }
    
      .container-fluid{
        padding: 50px;
        align: center;
      }

      .recipe-card {
        padding: 10px;
        object-fit: cover;
      }
      .recipe-img {
        width: 100%;
        
      }
      
      .reicpe-text {
        display: flex;
        justify-content: space-between;
      }

      .recipe-name {
        margin: 0px;
      }

      .like-icon {
        width: 20px;
      }
      `}
      </style>
    </div>
  )
}

export default SearchResult
