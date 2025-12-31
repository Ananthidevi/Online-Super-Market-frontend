import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { API } from '../api';

function Home() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [filteredProducts, setFilteredProducts] = useState(products);


    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    const allProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8081/product/")
            setProducts(response.data.data);
            
        } catch (err) {
            console.error(err.message);
        }
    }
    const handleSearch = () => {
        console.log(`Searching for: ${searchTerm}`);
        // Add your search logic here
        useEffect(() => {
            e.preventDefault();
            const filtered = products.filter((product) =>
                product.title.toUpperCase().includes(searchTerm.toUpperCase())
            );
            setFilteredProducts(filtered);
        }, [searchTerm]);
    };

    useEffect(() => {
        allProducts();

    }, []);



    return (

        <div className="  container  cols-4 ">



            <div class="row">
                <div className='  max-w-3xl bg-orange-200 rounded-lg shadow-md p-3'>

                    <div className='w-1000 container row max-w-2xl bg-gray-50 rounded-lg shadow-md p-6'>
                        <h2 className='text-3xl font-bold mb-10  mt-20'>Welcome to the Online Super-Market </h2>

                        <h3 className='text-xl font-semibold mb-4'>All Products</h3>
                        <form   className="d-flex">
                            <input className="form-control me-2 w-50" value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success w-20" onClick={handleSearch} type="submit">Search</button>
                        </form>
                        {
                            products.length === 0 ? (
                                <p className='text-gray-600'>No Product Found</p>
                            ) : (
                                <ul className=' flex row row-cols-4 space-y-0'>

                                    {
                                        products.map(data => (
                                            <li className='flex justify-between items-center border-b pb-2' key={data._id}>

                                                <div >
                                                    <h4 className='font-bold'>{data.title}</h4>
                                                    <p className='text-sm mb-4 text-gray-600'>{data.brand}</p>
                                                    <span className='bg-orange-200 px-4 py-1 rounded-lg font-semibold'>${data.price}</span><br />
                                                    <button  type='submit'  className='mt-4 bg-indigo-600 px-4 py-1 rounded-md text-white font-bold'>Add to Cart</button>

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

            <button onClick={handleLogout} className=' w-50 mt-5 d-grid gap-2 col-6 mx-auto rounded-lg  bg-red-500 cursor pointer text-white font-semibold px-2 py-2'>Logout</button>

            <footer className='w-500 bg-white rounded-xl shadow p-4 text-center mt-39  text-grey-400'>
                <p>&copy: {new Date().getFullYear()} Super-Market Home All rights recerved</p>
            </footer>


        </div>

    )
}

export default Home;