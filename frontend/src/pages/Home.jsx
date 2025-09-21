import React, { useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'
import { handleSuccess } from '../utils';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");

    const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds",
      description: "High-quality earbuds with noise cancellation.",
      category: "Electronics",
      price: 49.99,
      brand: "SoundFlex",
      rating: 4.5,
      stock: 120
    },
    {
      id: 2,
      name: "Stainless Steel Water Bottle",
      description: "Insulated water bottle, keeps drinks cold for 24 hours.",
      category: "Home & Kitchen",
      price: 18.95,
      brand: "HydroPeak",
      rating: 4.7,
      stock: 300
    },
    {
      id: 3,
      name: "Portable Laptop Stand",
      description: "Adjustable and foldable laptop stand.",
      category: "Office Supplies",
      price: 27.50,
      brand: "ErgoMate",
      rating: 4.4,
      stock: 75
    },
    {
      id: 4,
      name: "Organic Green Tea (100 bags)",
      description: "Premium green tea bags packed with antioxidants.",
      category: "Grocery",
      price: 15.99,
      brand: "NatureBrew",
      rating: 4.6,
      stock: 200
    },
    {
      id: 5,
      name: "Men's Running Shoes",
      description: "Breathable running shoes designed for comfort.",
      category: "Footwear",
      price: 69.99,
      brand: "SprintX",
      rating: 4.3,
      stock: 50
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      description: "Waterproof speaker with deep bass.",
      category: "Electronics",
      price: 39.95,
      brand: "BoomBox",
      rating: 4.7,
      stock: 110
    },
    {
      id: 7,
      name: "LED Desk Lamp",
      description: "Adjustable brightness and color temperature.",
      category: "Home & Office",
      price: 34.99,
      brand: "BrightLite",
      rating: 4.8,
      stock: 60
    },
    {
      id: 8,
      name: "Smartphone Tripod",
      description: "Flexible tripod compatible with all phones.",
      category: "Electronics",
      price: 22.99,
      brand: "FlexiMount",
      rating: 4.5,
      stock: 90
    },
    {
      id: 9,
      name: "Coffee Grinder",
      description: "Manual burr grinder for coffee lovers.",
      category: "Kitchen Appliances",
      price: 29.99,
      brand: "BrewMaster",
      rating: 4.2,
      stock: 85
    },
    {
      id: 10,
      name: "Yoga Mat (Non-slip)",
      description: "Eco-friendly yoga mat with strong grip.",
      category: "Fitness",
      price: 25.00,
      brand: "ZenFit",
      rating: 4.6,
      stock: 150
    }
  ];

  const handleLoggout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    handleSuccess("User Logged out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }


  useEffect(() => {
    setLoggedInUser(localStorage.getItem("user"));
  }, []);




  return (

    <div className="min-h-screen bg-gray-100 p-6">
      <div className='flex justify-between items-center mb-8'>
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        {loggedInUser && <p className="text-center mb-6 text-lg">Welcome, {JSON.parse(loggedInUser).name}!</p>}
        <button onClick={handleLoggout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
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