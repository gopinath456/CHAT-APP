import {create} from 'zustand'
import axiosinstance from '../lib/axios'
import axios from 'axios';
import toast from 'react-hot-toast';

const useStore = create((set)=>({
    authUser:null,
    isCheckingAuth:true,
    isSigningIn:false,
    isLoggingIn:false,
    isUpdatingProfile:false,
    checkingAuth:async()=>{
        try {
            const {data}=await axiosinstance.get('/auth/check')
            console.log(data);
            set({authUser:data})
        } catch (error) {
            if (error.response) {
                console.log('Response status:', error.response.status); // Logs 404
                console.log('Response data:', error.response.data); // Logs { message: "unauthorized - invalid token" }
            } else {
                console.log('Unexpected error:', error.message);
            }
            set({authUser:null});
        } finally{
             set({isCheckingAuth:false})
        }
    },
    signUp:async(formData)=>{
        set({isSigningIn:true});
        try {
            console.log(formData,'data');
            const {data}=await axiosinstance.post('/auth/signup',formData);
            console.log(data)
            set({authUser:data});
            toast.success('Successfully signed up!');
        } catch (error) {
            toast.error(error.response.data.message) 
            console.log(error)
        } finally{
          set({isSigningIn:false})
        }
    }
 }))

 export default useStore;