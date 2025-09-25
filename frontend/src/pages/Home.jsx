import React, { useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import { handleError } from '../utils';
import useAuth from '../auth/useAuth.js' 

const Home = () => {

  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState([]);

  const { logout } = useAuth();

  const fetchProducts = async () => {

    try {

      const url = "http://localhost:5000/api/products";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });



      const data = await response.json();
      setProducts(data.products);
      console.log(data);


      
    } catch (error) {
      handleError(error.message);
    }

  
  }


  useEffect(() => {
    setLoggedInUser(localStorage.getItem("user"));
    fetchProducts();
  }, []);




  return (

    <div className="min-h-screen bg-gray-100 p-6">
      <div className='flex justify-between items-center mb-8'>
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        {loggedInUser && <p className="text-center mb-6 text-lg">Welcome, {JSON.parse(loggedInUser).name}!</p>}
        <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <div className="text-sm text-gray-500 mb-1">Category: {product.category}</div>
            <div className="text-sm text-gray-500 mb-1">Brand: {product.brand}</div>
            <div className="text-sm text-gray-500 mb-1">Rating: ⭐ {product.rating}</div>
            <div className="text-sm text-gray-500 mb-1">In Stock: {product.stock}</div>
            <div className="text-lg font-bold text-blue-600 mt-2">${product.price}</div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>


  )
}

export default Home