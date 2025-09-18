

import express from 'express';
import { userSignup, userLogin } from '../controllers/authController.js';
import { signupValidation, loginValidation } from '../middlewares/authValidation.js';



const router = express.Router();

router.post("/signup", signupValidation, userSignup);
router.post("/login", loginValidation, userLogin)



router.get("/", (req, res)=>{
    res.send("User Sign up")
})



export default router;