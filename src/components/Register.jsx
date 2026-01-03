import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API } from '../api';

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
  };

  return (
    <div className='bg-lime-300 h-150 w-full'>
    <div className='p-6  max-w-sm mx-auto mt-5 bg-cyan-200' >
      <h2 className='text-xl font-bold mb-4 text-center'>Register Form</h2>
      <form onSubmit={handleRegister} className='space-y-4'>
       <div className='flex gap-5'>
         <label className='text-xl font-semibold' name='username'>Username</label>
        <input onChange={handleChange} name='username' className='border p-2 w-full rounded-md' type="text" placeholder='Enter username' />
       
       </div>
       <div  className='flex gap-15'>
         <label  className='text-xl font-semibold'  name='email'>Email Id</label>
        <input onChange={handleChange} name='email' className='border p-2 w-full rounded-md' type="email" placeholder='enter email id' />
       </div>
        <div  className='flex gap-5'>
          <label  className='text-xl font-semibold'  name='password'>Password</label>
        <input onChange={handleChange} name='password' className='border p-2 w-full rounded-md' type="password" placeholder='enter password' />
        </div>
       <div  className='flex gap-8'>
         <label  className='text-xl font-semibold'  name='mobilenumber'>Number</label>
        <input onChange={handleChange} name='mobilenumber' className='border p-2 w-full rounded-md' type="number" placeholder='enter mobilenumber' />
       </div>
       <div  className='flex gap-16'>
         <label  className='text-xl font-semibold'  name='role'>Role</label>
        <select onChange={handleChange} className='border p-2 w-full rounded-md' name="role">
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
       </div>
        <button type='submit' className='bg-black text-white w-full p-2 rounded-md cursor-pointer hover:bg-lime-700'>Register</button>
      </form> <div className='mt-4'>
        <h2 className='text-md font-semibold'>Already have an account ? <Link className='text-blue-700 font-bold hover:bg-stone-700 hover:text-white' to="/">Login</Link></h2>
      </div>
    </div>
    </div>
  )
}

export default Register