import React, { useState } from 'react'
import useMapStore from '../store/Store';

const Search = () => {

    const addMapItem = useMapStore((state) => state.addMapItem)

    const [text, setText] = useState("");   // restaurant name

    
    const onSubmit = () => {

        
        addMapItem({
            id: Math.ceil(Math.random() * 1000000),
            title: text
        })
        setText("")

    }
        


  return (
    <>
<div className=" text-black text-2xl bg-white flex items-center justify-center py-20">
  <div className="border border-blue-600 rounded overflow-hidden flex">

    <input type="text" 
    value={text}
    onChange={(e) => setText(e.target.value)}
    className="px-32 py-4 "
     placeholder="Add Restaurants"/>

    <button 
     onClick={onSubmit}
    className=" text-white flex items-center justify-center px-4 border-l bg-blue-600 hover:bg-blue-700">
    ADD
    </button>
  </div>
</div>
    </>
  )
}

export default Search