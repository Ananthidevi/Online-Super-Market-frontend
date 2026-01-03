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
  }

  return (
    <div className='p-6 max-w-sm mx-auto' >
      <h2 className='text-xl font-bold mb-4'>Register Form</h2>
      <form onSubmit={handleRegister} className='space-y-4'>
        <input onChange={handleChange} name='username' className='border p-2 w-full rounded-md' type="text" placeholder='John' />
        <input onChange={handleChange} name='email' className='border p-2 w-full rounded-md' type="email" placeholder='john@mail.com' />
        <input onChange={handleChange} name='password' className='border p-2 w-full rounded-md' type="password" placeholder='*****' />
        <input onChange={handleChange} name='mobilenumber' className='border p-2 w-full rounded-md' type="number" placeholder='123456789' />
        <select onChange={handleChange} className='border p-2 w-full rounded-md' name="role">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type='submit' className='bg-black text-white w-full p-2 rounded-md'>Register</button>
      </form> <div className='mt-4'>
        <h2 className='text-md font-semibold'>Already have an account ? <Link className='text-blue-700 font-bold' to="/">Login</Link></h2>
      </div>
    </div>
  )
}

export default Register