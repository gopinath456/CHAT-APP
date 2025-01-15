import mongoose from "mongoose";

// created message Schema

const schema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    text:{
        type:String,
    },
    image:{
        typ:String,
    }
},{timestamps:true})

//created the Message model

const Message=mongoose.model('Message',schema);

export default Message;