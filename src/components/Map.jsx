import React from 'react'
import Iframe from 'react-iframe'
import useMapStore from '../store/Store'
import useBookmarkStore from '../store/BookmarkStore'

export const Map = () => {

  const addBookmarkItem = useBookmarkStore((state) => state.addBookmarkItem) // to add bookmark item


  const onClickAdd = () => {   // add bookmark item

    addBookmarkItem({
        id: Math.ceil(Math.random() * 1000000),
        
    })
 
}


  const {mapItems, removeItem} = useMapStore( // from map store
    (state) => ({
        mapItems: state.mapItems,
        removeItem: state.removeItem
   })


      
  
)
  return (

    <>
    
    
    {mapItems.map((mapItem, i ) => {  

return (  


  <React.Fragment key={i}>
    
  <div className='border border-black '>
<div className='flex flex-col items-center justify-center mt-10 w-full '>


<h1 className='text-3xl'>{mapItem.title}</h1>

{/* iframe here is used to show map */}

<Iframe width="600" height="450"  url={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22${mapItem.title}%22%7D`}></Iframe>
</div>

<div className='flex flex-row items-center justify-center mt-8 w-full mb-10'>
 <button 
 onClick={onClickAdd}
 className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-32'>Bookmark</button>
 <button 
 onClick={()=>{
   removeItem(mapItem.id)
 }}
 className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Remove</button>
 
    </div>   
</div>
 
</React.Fragment>

)
}


)

}
</>

  )

}













   