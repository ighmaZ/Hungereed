import React from 'react'
import NavBar from './NavBar'
import Iframe from 'react-iframe'

const HomePage = () => {

  
  return (
    <>
<NavBar/>
<h1>hello</h1>
 {/* iframe here is used to show map */}
 <Iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22Subway%22%7D" frameborder="0" style="border:0" allowfullscreen></Iframe>
  {/* iframe here is used to show map */}

    </>
  )
}

export default HomePage