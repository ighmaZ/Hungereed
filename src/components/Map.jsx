import React from 'react'
import Iframe from 'react-iframe'

export const Map = () => {
  return (
    <>
     <div className='border border-black '>
<div className='flex flex-col items-center justify-center mt-28 w-full '>

  {/* iframe here is used to show map */}

 <Iframe  width="600" height="450" src="https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22Subway%22%7D"  allowfullscreen></Iframe>
</div>

<div className='flex flex-row items-center justify-center mt-8 w-full mb-10'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-32'>Bookmark</button>
    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Remove</button>
    </div>   
</div>
    </>
  )
}
