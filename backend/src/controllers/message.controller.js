import User from "../model/user.model.js"

// Created the Fitch User Data Controller to manage all user-related data operations efficiently

const getUserForSideBar=async (req,res)=>{
    try {
        const {_id}=req.user;
        console.log(_id)
        const userdata=await User.find({_id:{$ne:_id}}).select('-password');
        res.status(200).json(userdata);
    } catch (error) {
        console.log('error in message user controller',error.message)
        res.status(500).json({message:"internal server error"})
    }
}

export {getUserForSideBar}