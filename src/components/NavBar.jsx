import React from 'react'
import { Link } from 'react-router-dom'



// const isLoggedIn = useMapStore(state => state.isLoggedIn);

const NavBar = () => {
  return (
    <>

<nav className='relative w-full flex items-center justify-between py-8 shadow-lg'>
  
   <div className='mr-6'>
   <h1 className='text-4xl text-blue-600 font-bold ml-10'>HUNGEREED</h1>
   </div>

<div className="mr-10">
<Link to ="/Bookmark"className=" text-2xl mr-20  hover:text-blue-600 mr-4"> Bookmark
   </Link>


<Link to ="/homePage"className=" text-2xl mr-20  hover:text-blue-600 mr-4"> Home Page
   </Link>

   <Link to ="/" className=" mt-4  text-2xl  hover:text-red-600 mr-4">
     Logout
   </Link>
 </div>

 


</nav>
    </>
  )
}

export default NavBar