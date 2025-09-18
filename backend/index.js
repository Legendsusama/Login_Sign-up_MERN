


import express from "express";
import mongoose from "mongoose";
import "dotenv/config";


const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());



app.get("/", (req, res)=>{
    res.send("Hello world")
})


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("Database Connected Successfully")})
    .catch((err)=>{console.error("Database Connection Failed", err)});



app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})