import React from 'react'
import NavBar from './NavBar'
import {Map} from './Map'
import Search from './Search'

const HomePage = () => {

    return (
      <React.Fragment>
          <NavBar/>
          <Search/>
          <Map/>
      </React.Fragment>
  )
}

export default HomePage