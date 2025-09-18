

import express from 'express';
import { ensureAuth } from '../middlewares/auth.js';

const router = express.Router();



router.get("/", ensureAuth, (req, res) => {

  // Logged-in user information
  const user = req.user;
  console.log("Authenticated user:", user);
  res.status(200).json({
    message: "Product route is working fine",
    success: true,
    products: [
      {
        id: 1,
        name: "Wireless Bluetooth Earbuds",
        description: "Compact and high-quality earbuds with noise cancellation and 24-hour battery life.",
        category: "Electronics",
        price: 49.99,
        brand: "SoundFlex",
        rating: 4.5,
        stock: 120
      },
      {
        id: 2,
        name: "Stainless Steel Water Bottle",
        description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours.",
        category: "Home & Kitchen",
        price: 18.95,
        brand: "HydroPeak",
        rating: 4.7,
        stock: 300
      },
      {
        id: 3,
        name: "Portable Laptop Stand",
        description: "Adjustable and foldable laptop stand suitable for all sizes and heights.",
        category: "Office Supplies",
        price: 27.50,
        brand: "ErgoMate",
        rating: 4.4,
        stock: 75
      },
      {
        id: 4,
        name: "Organic Green Tea (100 bags)",
        description: "Premium organic green tea bags packed with antioxidants and flavor.",
        category: "Grocery",
        price: 15.99,
        brand: "NatureBrew",
        rating: 4.6,
        stock: 200
      },
      {
        id: 5,
        name: "Men's Running Shoes",
        description: "Lightweight, breathable running shoes designed for comfort and durability.",
        category: "Footwear",
        price: 69.99,
        brand: "SprintX",
        rating: 4.3,
        stock: 50
      },
      {
        id: 6,
        name: "Smart LED Light Bulb",
        description: "Color-changing LED bulb with voice and app control, compatible with Alexa and Google Home.",
        category: "Electronics",
        price: 12.49,
        brand: "GlowSmart",
        rating: 4.2,
        stock: 400
      },
      {
        id: 7,
        name: "Yoga Mat with Carrying Strap",
        description: "Non-slip, eco-friendly yoga mat with extra cushioning and strap for portability.",
        category: "Fitness",
        price: 22.00,
        brand: "ZenFlex",
        rating: 4.8,
        stock: 180
      },
      {
        id: 8,
        name: "USB-C Multiport Adapter",
        description: "7-in-1 adapter with HDMI, USB, SD card slots and Ethernet for laptops.",
        category: "Computers & Accessories",
        price: 34.95,
        brand: "ConnectPro",
        rating: 4.5,
        stock: 90
      },
      {
        id: 9,
        name: "Kids’ Coloring Book Set",
        description: "Includes 5 themed coloring books and 48 vibrant crayons for ages 3+.",
        category: "Toys & Games",
        price: 14.75,
        brand: "ColorJoy",
        rating: 4.9,
        stock: 220
      },
      {
        id: 10,
        name: "Ceramic Cooking Pan - 10 Inch",
        description: "Non-stick ceramic-coated pan suitable for all stovetops and dishwasher safe.",
        category: "Kitchenware",
        price: 29.99,
        brand: "ChefEase",
        rating: 4.6,
        stock: 130
      }
    ]
  });
});



export default router;