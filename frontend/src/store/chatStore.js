import { create } from "zustand";
import axiosinstance from "../lib/axios";
import toast from "react-hot-toast";

const useChatStore=create((set)=>({
    userdata:[],
    chatadata:[],
    isLoadingUser:false,
    isLoadingChat:false,
    selectedUser:null,

    setUserdata:async()=>{
        set({isLoadingUser:true})
        try {
            const {data}=await axiosinstance.get('/message/user')
            set({userdata:data});
        } catch (error) {
            toast.error(error.response.data.message);
            if(error.message)
            console.log('error in setUserdata',error.message);
        }
        finally{
            set({isLoadingUser:null});   
        }
    },
    setChatdata:async (senderId)=>{
      set({isLoadingChat:true})
      try {
        const {data}=await axiosinstance.get(`/message/${senderId}`);
        set({chatadata:data});
      } catch (error) {
        toast.error(error.response.data.message);
        if(error.message)
            console.log('error in setChatdata state function',error.message);
      }finally{
        set({isLoadingChat:null});
      }
    },
    setSelectedUser:(index)=>{
      set({selectedUser:index})
    }
}))

export default useChatStore;