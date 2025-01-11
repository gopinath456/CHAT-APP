import mongoose from "mongoose";
import 'dotenv/config'
const connect=async ()=>{
    try {
        await mongoose.connect(process.env.DATA_BASE);
        
        console.log('connected succussfully')
    } catch (error) {
        console.log(process.env.DATA_BASE);
        console.log('connected unsuccussfully')
    } 
}

export {connect};