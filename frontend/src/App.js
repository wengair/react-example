import React from 'react'
import Nav from './components/Nav.js'
import Landing from './views/Landing.js'
import Test from './views/Test'
import Footer from './components/Footer.js'
import SearchResult from './views/SearchResult'
import SingleRecipeView from './views/SingleRecipeView'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Nav />
      <Route path='/' exact component={Landing} />
      <Route path='/test' component={Test} />
      <Route path='/result' component={SearchResult} />
      <Route path='/recipe/:id' component={SingleRecipeView} />
	  <Footer />
    </Router>
  )
}

export default App
