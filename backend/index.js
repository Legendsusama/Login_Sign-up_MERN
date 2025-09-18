


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import authRouter from "./routes/authRouter.js";
import productRouter from "./routes/productRouter.js";


const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);



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