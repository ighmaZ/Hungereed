import React from 'react'
import Home from './components/Home'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage'
import Bookmark from './components/Bookmark'


const App = () => {
  return (
    
<Routes>
  <Route path='/' element={ <Home /> } />
  <Route path='homePage' element={ <HomePage /> } />
  <Route path='homePage/bookMark' element={ <Bookmark/> } />

</Routes>
    
  )
}

export default App