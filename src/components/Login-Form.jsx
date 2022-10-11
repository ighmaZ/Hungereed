import React from 'react'

const LoginForm = () => {
 
  return (


<div className=" mx-auto w-full max-w-xl ">

<form className=" shadow-xl px-32 pt-10 pb-32 mt-40 ">
        
              <label className="text-lg font-bold text-gray-700" for="email">Email</label>
              <input className="w-full text-lg py-6 px-1 border-b border-gray-300 " type="email" placeholder="Enter your email"/>
          <div className="mt-8">
              <div className="flex items-center justify-between ">
                  <label className="text-lg font-bold text-gray-700 " for="password">
                      Password
                  </label>
                      <a className="cursor-pointer text-lg text-blue-600 hover:text-blue-800">
                          Forgot Password?
                      </a>
              </div>
              <input className="w-full text-lg py-6 px-1  border-b border-gray-300 focus:outline-none focus:border-blue-700" type="password" placeholder="Enter your password"/>
          </div>

              <button className=" mt-8 bg-indigo-600 p-3 w-8/12 ml-8  rounded text-white hover:bg-blue-500
              shadow-lg">
                  Log In
              </button>

      </form>
      <div className=" text-lg text-center mt-10 font-bold">
          Don't have an account ? <a className="cursor-pointer text-blue-600 hover:text-blue-800">Sign up</a>
      </div>
  </div>


  )
}

export default LoginForm