import jwt from 'jsonwebtoken'
import 'dotenv/config'
import User from '../model/user.model.js';

// Implemented middleware for user authentication.

const protectRoute=async(req,res,next)=>{
    try {
        const {token}=req.cookies;

        if(!token)
          return res.status(404).json({message:"unauthorized - invalid token"})

        const decode=jwt.verify(token,process.env.KEY)

        if(!decode)
          return res.status(404).json({message:"unauthorized - invalid token"})

        const user=await User.findById(decode._id).select('-password');

        if(!user)
          return res.status(404).json({message:'user not found'})

        req.user=user;
        
        next();

    } catch (error) {
        console.log('error in middleware controller',error.message);
        return res.status(500).json({message:'internal server error'})
    }
}

export {protectRoute}