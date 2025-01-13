import User from "../model/user.model.js"
import bcrypt from 'bcryptjs'
import { createToken } from "../lb/jwt.js";

// sing up controller
const signUp=async (req,res)=>{
    try {
        const {email,name,password}=req.body;
        if(!email || !name || !password )
            return res.status(400).json({message:'All fields are required'})
        if(password.lenght<6)
            return res.status(400).json({message:'password atleast should be 6 character'})
        const user=await User.findOne({email:email})
        if(user)
            return res.status(400).json({message:"You are already user , Please singin"})
        const hashPassword=await bcrypt.hash(password,10)
        const userdoucment=new User({
            email,name,password:hashPassword
            })
        await userdoucment.save();
        
        if(userdoucment){
            // gerating jwt token
            createToken(userdoucment._id,res)
        return res.status(201).json(
            {
                id:userdoucment._id,
                fullName:userdoucment.name,
                email:userdoucment.email,
                profilePic:userdoucment.profilepic
            })

        }
        else
           res.status(404).json({message:'invalid user data'})

    } catch (error) {
        console.log('errore in sing up controller',error.message)
        return res.status(500).json({message:'internal server error'})
    }
    
}

const singIn=(req,res)=>{
    res.send('sing in')
  
}

const logOut=(req,res)=>{
    res.send('log out');
  
}

export {singIn,signUp,logOut};