
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


async function userSignup(req, res){

    try {

        const {name, email, password} = req.body;
        console.log("The data received is ", req.body);
        // Check if user already exists
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({message : "User already exists. Please login.", success: false});
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password : hashedPassword
        });  

        await newUser.save();

        res.status(201).json({message : "User registered successfully", success: true});

        
    } catch (error) {

        res.status(500).json({message : "Internal Server Error", success: false});
        
    }


}


async function userLogin(req, res){
    try {

        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message : "Email or password is incorrect", success: false});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(400).json({message : "Email or password is incorrect", success: false});
        }

        // Generate JWT token
        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, {expiresIn : "24h"});

        res.status(200).json({message : "Login successful", success: true, user : {name : user.name, email : user.email }, token});

        
    } catch (error) {

        res.status(500).json({message : "Internal Server Error", success: false});
        
    }
}


export {userSignup, userLogin};