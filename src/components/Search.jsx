import React from 'react'

const Search = () => {
  return (
    <>
<div className=" text-black text-2xl bg-white flex items-center justify-center py-20">
  <div className="border border-blue-600 rounded overflow-hidden flex">
    <input type="text" className="px-32 py-4 " placeholder="Add Restaurants"/>
    <button className=" text-white flex items-center justify-center px-4 border-l bg-blue-600 hover:bg-blue-700">
    ADD
    </button>
  </div>
</div>
    </>
  )
}

export default Search