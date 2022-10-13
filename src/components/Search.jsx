import React, { useEffect, useState } from 'react'
import useMapStore from '../store/Store';
import axios from 'axios';

const Search = () => {

    const addMapItem = useMapStore((state) => state.addMapItem) // to add search item to map 

    const [text, setText] = useState("");   // restaurant name typed 
    const [data, setData] = useState([]); // data from api for autocomplete
    const [suggestions, setSuggestions] = useState([]); // suggestions from api for autocomplete


    useEffect(()=> {

    const loadData = async () => {

      const response = await axios.get('https://mocki.io/v1/8b5984c1-10d8-48a2-be46-806ac79317e9');


      setData(response.data.restaurant);
      console.log(data)
    }

    loadData();

    },[])


    const onChangeHandler = (text) => {

      let matches = []
      if(text.length > 0) {

        matches = data.filter(x => {

          const regex = new RegExp(`${text}` , "gi") // case insensitive 
          return x.Name.match(regex);
        })

      }
      setSuggestions(matches);
      setText(text);
    }

    const onSuggestHandler = (text) =>{  // auto suggest handler

      setText(text);
      setSuggestions([]);
    }


    const onSubmit = () => { // button click

        
       addMapItem({
            id: Math.ceil(Math.random() * 1000000),
            title: text
        })
        setText("")

    }
        


  return (
    <>
<div className=" text-black text-xl bg-white flex items-center justify-center py-6">
  <div className="border border-blue-600 rounded overflow-hidden flex flex-col  ">

    <input type="text" 
    value={text}
    onChange={e => onChangeHandler(e.target.value)}
    className="px-32 py-4 "
     placeholder="Add Restaurants"/>
   
   {suggestions && suggestions.map((suggestion,i) =>
    <div className='cursor-pointer flex flex-col' onClick={() => onSuggestHandler(suggestions.Name)} key={i}>{suggestion.Name}
    </div>
    ) } 

    <button 
     onClick={onSubmit}
    className=" text-white  items-center justify-center px-4  hover:bg-blue-700">
    ADD
    </button>
  </div>
</div>
    </>
  )
}

export default Search