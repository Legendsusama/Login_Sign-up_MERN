

import express from 'express';
import { userSignup } from '../controllers/authController.js';
import { signupValidation } from '../middlewares/authValidation.js';





const router = express.Router();

router.post("/signup", signupValidation, userSignup);



router.get("/", (req, res)=>{
    res.send("User Sign up")
})





export default router;