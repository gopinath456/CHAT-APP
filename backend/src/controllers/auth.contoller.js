import User from "../model/user.model.js"
import bcrypt from 'bcryptjs'
import { createToken } from "../lb/jwt.js";
import cloudinary from "../lb/cloudinary.js";

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
                _id:userdoucment._id,
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

// created singIn controller
const singIn= async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password)
           return res.status(404).json({message:'all fields requred'})
        const userdoucment=await User.findOne({email:email});
        if(!userdoucment)
            return res.status(404).json({message:'invalid credentials'});
        const passwordCompare=await bcrypt.compare(password,userdoucment.password)
        if(passwordCompare){
            // generate token
            createToken(userdoucment._id,res);
           return res.status(202).json({
                _id:userdoucment._id,
                fullName:userdoucment.name,
                email:userdoucment.email,
                profilePic:userdoucment.profilepic
            })
        }
        else
           res.status(404).json({message:"invalid credentials"})
        
    } catch (error) {
        console.log('there is error in singIn controller',error.message);
        res.status(500).json({message:"internal server error"});
    } 
}

// created logOut controller
const logOut=(req,res)=>{
    try {
        res.clearCookie('token');
        return res.status(200).json({message:'succussfully loged out'});
    } catch (error) {
        console.log('there is an error in logout controller',error.message);
        return res.status(500).json({message:"internal server error"})
    }
  
}

// created updateProfilePic controller
const updateProfilePic=async (req,res)=>{
    try {
        const {profilepic}=req.body;
        const {_id}=req.user
        if(!profilepic){
            return res.status(400).json({message:'Profile pic required'})
        }
        // debug from here
        const updloadResponse=await cloudinary.uploader.upload(profilepic);
        const updateduser=await User.findByIdAndUpdate(_id,{profilepic:updloadResponse.secure_url},{new:true})
        return res.status(200).json(updateduser)
    } catch (error) {
        console.log('error in updateProfilePic controller',error.message);
        res.status(500).json({message:'internal server error'})
    }

}

// created checkAuth controller
const checkAuth=(req,res)=>{
    try {
        if(!req.user){
            res.status(400).json({message:'Not authorized - invalid token'})
        }
        res.status(200).json(req.user)
    } catch (error) {
       console.log('error in checkAuth controller',error.message);
       res.status(500).json({message:'internal server error'});
    }
    
}

export {singIn,signUp,logOut,updateProfilePic,checkAuth};