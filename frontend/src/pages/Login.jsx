import React from 'react'
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import { useState } from 'react';
import { handleError, handleSuccess } from '../utils.js';
import { useNavigate } from 'react-router-dom';
import useAuth from '../auth/useAuth.js' 


const Login = () => {

  const navigate = useNavigate();
  const { login } = useAuth();
  
  
  const [loginInfo, setLoginInfo] = useState({

    email: "",
    password: ""
  })
  
  
    const handleLoginChange = (e) => {
      setLoginInfo((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
  
  
    const handleOnSubmit = async (e)=>{
      e.preventDefault();
  
      const {email, password} = loginInfo;
  
      if(!email || !password){
        return handleError("All fields are required");
      }
  
  
  
      try {
        const url = 'http://localhost:5000/api/auth/login'
  
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginInfo)
          
        });
  
        const data = await res.json();
  
        if(data.success){

          handleSuccess(data.message);
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          // ✅ Update context
          

          setTimeout(()=>{
            login(data.token, data.user);
            navigate("/")
          }, 2000)
  
        }else if(data.error){
          handleError(data.error.details[0].message);
  
        }else if(!data.success){
          handleError(data.message);
        }
      
      } catch (error) {
        handleError(error.message);
      
      }
  
    }


  
  return (


<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded shadow-md w-96">
    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
    <form onSubmit={handleOnSubmit}>
      <input
        type="email"
        name='email'
        onChange={handleLoginChange}
        value={loginInfo.email}
        placeholder="Email"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        name='password'
        onChange={handleLoginChange}
        value={loginInfo.password}
        placeholder="Password"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
    
    <p className="mt-4 text-center text-sm text-gray-600">
      Don't have an account?{" "}
      <Link to="/signup" className="text-blue-600 hover:underline">
        Sign up
      </Link>
    </p>
  </div>
  <ToastContainer />
</div>



  )
}

export default Login