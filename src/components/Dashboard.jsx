import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate , Link} from 'react-router-dom';
import {API} from '../api';


function Dashboard() {
  const [products, setProducts] = useState([]);
  
  const [form, setForm] = useState({
    title: "",
    brand: "",
    price: ""
  });

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const createProduct = async (e) => {
   

    try {
      const response = await axios.post(`${API}/product`, form, {
        headers: {
          Authorization: `Bearer ${token}` //token from Application local storage
        }
      });
      alert("Product Created");
      setForm({ title: "", brand: "", price: "" });
    } catch (err) {
      console.error(err.response?.message || err.message);
    }
  }




  const allProducts = async (e) => {
    try {
      const response = await axios.get(`${API}/product/`)
      setProducts(response.data.data);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    allProducts();
  }, []);



  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
  





  return (
     
      <div>


          <div className='flex min-h-screen bg-grey-100'>
      <aside className='w-65 bg-gray-300 text-white flex flex-col justify-between p-6'>
        <div >
      <h2 className='text-2xl font-bold mb-8 text-pink-800 '>Click here</h2>
      <nav className='space y-4'>
        <ul className='font-family-sans-serif'>
        <li className='block hover:text-yellow-300 text-xl font-semibold' > <Link to = "/dashboard">Dashboard</Link></li> 
         <li className='block hover:text-yellow-300 text-xl font-semibold'> <Link to = "/register">Register</Link></li>
       <li className='block hover:text-yellow-300 text-xl font-semibold' > <Link to = "/login">Login</Link></li>
        <li className='block hover:text-pink-300 text-xl font-semibold' > <Link to = "/home">Products</Link></li> 
        
        </ul>
      </nav>
</div>
 <button onClick={handleLogout} className='w-full bg-red-500 cursor pointer text-white font-semibold px-4 py-2 '>Logout</button>
</aside>
<main className='flex-2 p-6 col-4'>
  <div>

  <h1 className='  bg-orange-300 p-4 rounded-lg shadow mb-6 text-lg font-semibold text-white text-center'>Welcome to the Online Super-Market  </h1>
<p className='text-center font-bold text-2xl'>Welcome and add your new Products here </p>
</div>
 <form onSubmit={createProduct} className='bg-white shadow-md rounded-lg p-6 w-full max-w-lg mb-8 '>
            <h3 className='text-xl font-semibold mb-4'>Add New Product</h3>
            <input placeholder='Product Title' value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className='border p-2 rounded-md w-full mb-4' type="text" />
            <textarea placeholder='Product Brand' value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} className='border p-2 rounded-md w-full mb-3' name="" />
            <input placeholder='Product Price' value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className='border p-2 rounded-md w-full mb-3' type="text" />
            <button type='submit' className='px-4 py-2 rounded-md cursor-pointer bg-green-600 text-white w-full'>Add Product</button>
             </form>
</main>
          
         <div className='  bg-white-100 col-8 ' >
            <h3 className='text-xl font-bold mb-4'>All Products</h3>
            {


              products.length === 0 ? (
                <p className='text-gray-600'>No Product Found</p>
              ) : (
                <ul className='flex row row-cols-4 space-y-0'>
                  {
                    products.map(data => (

                     
                        <li className='flex  justify-between items-center mb-5  pb-2' key={data._id}>


                          <div className='w-100 max-w-2xl bg-orange-200 rounded-lg shadow-md p-6 ' >

                            <div className='w-full max-w-2xl bg-gray-50 rounded-lg shadow-md p-6'>
                            
                              <div>
                              <h4 className='font-bold'>{data.title}</h4>
                              <p className='text-sm mb-4 text-gray-600'>{data.brand}</p>
                              <span className='bg-orange-200 px-4 py-1 rounded-lg font-semibold'>${data.price}</span><br />
                              <button className='mt-4 bg-indigo-600 px-4 py-2 rounded-md text-white font-bold'>Add to Cart</button>
                              </div>
                            </div>
                          </div>

                        </li>
                    

                    ))
                  }
                </ul>

              )

            }
          </div>
        
      
  </div>
  </div>




  )
}



export default Dashboard