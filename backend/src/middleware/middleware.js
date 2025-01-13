import jwt from 'jsonwebtoken'
import 'dotenv/config'
const protectRoute=async(req,res,next)=>{
    try {
        const token=req.cookie;
        if(!token)
          return res.status(404).json({message:"Please login"})
        const user=jwt.decode(token,process.env.KEY)
        if(user){
           req.body._id=user._id;
           next();
        }
        else
          return res.json({message:'invalid user'});
    } catch (error) {
        console.log('error in middleware controller',error.message);
        return res.status(500).json({message:'internal server error'})
    }
}

export {protectRoute}