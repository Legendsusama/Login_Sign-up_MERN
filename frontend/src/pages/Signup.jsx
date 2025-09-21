

import React from 'react'
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import { useState } from 'react';
import { handleError, handleSuccess } from '../utils.js';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();


  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: ""
  })


  const handleSignupChange = (e) => {
    setSignupInfo((prev) => ({...prev, [e.target.name]: e.target.value}))
  }


  const handleOnSubmit = async (e)=>{
    e.preventDefault();

    const {name, email, password} = signupInfo;

    if(!name || !email || !password){
      return handleError("All fields are required");
    }



    try {
      const url = 'http://localhost:5000/api/auth/signup'

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupInfo)
        
      });

      const data = await res.json();

      if(data.success){
        handleSuccess(data.message);

        setTimeout(()=>{
          navigate("/login")
        }, 2000)

      }else if(data.error){
        handleError(data.error.details[0].message);

      }else if(!data.success){
        handleError(data.message);
      }


      console.log(data);
    
    } catch (error) {
      handleError(error.message);
    
    }

  }





  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleOnSubmit} className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <input onChange={handleSignupChange} type="text" name='name' placeholder="Name" value={signupInfo.name} className="w-full mb-4 p-2 border border-gray-300 rounded" />
            <input onChange={handleSignupChange} type="email" name='email' placeholder="Email" value={signupInfo.email}  className="w-full mb-4 p-2 border border-gray-300 rounded" />
            <input onChange={handleSignupChange} type="password" name='password' placeholder="Password" value={signupInfo.password}  className="w-full mb-4 p-2 border border-gray-300 rounded" />

            <button type='submit' className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Sign Up</button>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
        </form>
        <ToastContainer />
    </div>


  )
}

export default Signup