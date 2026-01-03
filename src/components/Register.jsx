import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BaggageClaim } from 'lucide-react';
import {API} from '../api';


function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    mobilenumber: "",
    role: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleRegister = async (e) => {
    e.preventDefault();
  await axios.post(`${API}/auth/register`, form);
    navigate("/");
   
    
  }

  return (
     <div className="row">
    <div className=' image '>
      <BaggageClaim size={40} color="#ff0000" strokeWidth={2} className='mt-3'/>
      
    <div className='p-6 max-w-sm mx-auto' >
          <p className='text-5xl font-bold text-center mt-5 mb-50 '>Welcome to ...</p>
      <p  className='text-xl font-bold text-center items-center mb-50 '> Delivering the essentials straight to your home</p>
      <h2 className='text-xl font-bold mb-4 col-8 ml-250'>Register Form</h2>
      <form onSubmit={handleRegister} className='space-y-4 col-12 ml-250'>
        <input onChange={handleChange} name="username"className='border p-2 mb-2 w-full rounded-md' type="text" placeholder='John' />
        <input onChange={handleChange} name="email" className='border p-2 w-full  mb-2 rounded-md' type="email" placeholder='john@mail.com' />
        <input onChange={handleChange} name="password" className='border p-2 w-full mb-2  rounded-md' type="password" placeholder='***' />
        <input onChange={handleChange} name="mobilenumber" className='border p-2  mb-2 w-full rounded-md' type="number" placeholder='123456789' />
        <select onChange={handleChange} className='border p-2 w-full rounded-md mb-2' name="role">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type='submit' className='bg-black text-white w-full p-2 rounded-md mb-2'>Register</button>
      </form> <div className='mt-4'>
        <h2 className='text-sm font-semibold col-12 ml-250'>Already have an account ? <Link className='text-blue-700 font-semibold' to="/">Login</Link></h2>
      </div>
    </div>
    </div></div>
  )
}

export default Register