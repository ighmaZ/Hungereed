import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
 
  const navigate = useNavigate();

const[username, setUsername] = useState("");
const[password, setPassword] = useState("");
const[message, setMessage] = useState(""); // error message

function onSubmit(e){

  e.preventDefault();
  axios.get('https://mocki.io/v1/52623ca0-6153-49f7-ab2e-f1a1b50650bc')
  .then((response)=>{

    const userName = username;  // username as typed through state
    const passWord = password;  // password as typed through state

  (response.data.user.map((x) => {  // if username and password  matches with the json api the navigate

    x.username === userName && x.password === passWord ? navigate("/homePage"): setMessage("invalid username and password");
  }))
  })


}

  return (


<div className=" mx-auto w-full max-w-xl ">

<form onSubmit={onSubmit}
className=" shadow-xl px-32 pt-10 pb-32 mt-40 ">
        
              <label className="text-lg font-bold text-gray-700" htmlFor="email">Username</label>
              <input className="w-full text-lg py-6 px-1 border-b border-gray-300 " 
              type="username" 
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
              placeholder="Enter your Username"/>

          <div className="mt-8">
              <div className="flex items-center justify-between ">
                  <label className="text-lg font-bold text-gray-700 " htmlFor="password">
                      Password
                  </label>
                      <a className="cursor-pointer text-lg text-blue-600 hover:text-blue-800">
                          Forgot Password?
                      </a>
              </div>
              <input className="w-full text-lg py-6 px-1  border-b border-gray-300 focus:outline-none focus:border-blue-700" 
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
               placeholder="Enter your password"/>
          </div>

              <button 
              type='submit'
              className=" mt-8 bg-indigo-600 p-3 w-8/12 ml-8  rounded text-white hover:bg-blue-500
              shadow-lg">
                  Log In
              </button>
              <p className='text-red-500 text-xl mt-10'>{message}</p>

      </form>
      <div className=" text-lg text-center mt-10 font-bold">
          Don't have an account ? <a className="cursor-pointer text-blue-600 hover:text-blue-800">Sign up</a>
      </div>
  </div>


  )
}

export default LoginForm