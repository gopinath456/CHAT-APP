import User from "../model/user.model.js"
import Message from "../model/message.model.js";
import cloudinary from "../lb/cloudinary.js";

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

//created controller for getting the messages from message collection
//I should debug this controller 
const getMessages=async(req,res)=>{
  try {
    const {id:chatToUserId}=req.params;
    const {_id:myId}=req.user;
    const messagelist=await Message.find({
     $or:[{senderId:myId,receiverId:chatToUserId},
         {senderId:chatToUserId,receiverId:myId}]
     });
    res.status(200).json(messagelist);
  } catch (error) {
    console.log('error in getMessage cotroller',error.message);
    res.status(500).json({message:'internal server error'});
  }
  
}

// Created the sendMessage controller to save user message data into the database.

const sendMessage=async(req,res)=>{
    try {
        const {id:receiverId}=req.params;
        const {_id:senderId}=req.user;
        const {text,image}=req.body;
        let imageUrl;
        if(image){
           const uploadResponse=await cloudinary.uploader.upload(image);
           imageUrl=uploadResponse.secure_url;
        }
        const message=new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl
        });
        await message.save();

        //real time functionality will be gone there
        res.status(200).json({message});
    } catch (error) {
        console.log('error occured in sendMessage controller',error.message)
        res.status(500).json({message:'internal server error'});
    }

}
export {getUserForSideBar,getMessages,sendMessage}