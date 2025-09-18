
import User from "../models/User.js";
import bcrypt from "bcrypt";


async function userSignup(req, res){

    try {

        const {name, email, password} = req.body;
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


export {userSignup};