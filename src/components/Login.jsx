import React, { useState } from 'react'
import axios from "axios"; //for login 
import { useNavigate, Link } from 'react-router-dom';
import { BaggageClaim } from 'lucide-react';

import {jwtDecode} from "jwt-decode"  //for using user and admin login 

// http://localhost:8081/auth/login

function Login() {
  const[form, setForm] = useState({
    email: "",
    password: ""
  });
  const[error, setError] = useState("");
  

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  // LOGIN API CALL
  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:8081/auth/login", form);
      localStorage.setItem("token", response.data.token);
     const decoded = jwtDecode(response.data.token);
     if(decoded.role === "admin"){
      navigate("/dashboard");

     }
     else if (decoded.role === "user"){
      navigate("/home");
     }
    }catch(err){
      setError(err.message || "Something went wrong");
    }
  }
  return (
    <div className="row">
    <div className=' image '>
      <BaggageClaim size={40} color="#ff0000" strokeWidth={2} className='mt-3'/>
      
    <div className='p-6 max-w-sm mx-auto'>
      <p className='text-5xl font-bold text-center mt-5 mb-50 '>Welcome to ...</p>
      <p  className='text-xl font-bold text-center items-center mb-50 '> Delivering the essentials straight to your home</p>
        
           

        <h2 className='text-xl font-bold mb-4 col-8 ml-250'>Login Form</h2>
        <p className='text-xl font-bold mb-4 col-12 ml-250'>Welcome! Login to get amazing discounts and offers only for you.</p>

    <form onSubmit={handleLogin} className='space-y-4 col-12 ml-250'>
        <input name='email' onChange={handleChange} className='border p-3 mb-3 w-full rounded-md' type="email" placeholder='john@mail.com' />
        <input name='password' onChange={handleChange} className='border p-3 mb-3 w-full rounded-md' type="password" placeholder='****' />
        {error && <p>{error}</p>}
        <button type='sumbit' className='bg-black text-white w-full p-3 rounded-md '>Login</button>
      </form>
      <div className='mt-2 '>
        <p  className='text-xl font-semibold  col-12 ml-250 '>Forgot your Password</p>
        <h2 className='text-xl font-semibold   col-12 ml-300  '>Newuser?<Link className='text-xl mr-50 text-blue-700 font-semibold' to="/register">Register</Link></h2>
      </div>
      </div>
   </div>
    </div>
  )
}

export default Login