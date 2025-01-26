import { Eye, EyeOff, Loader, LockIcon, MailIcon, MessageSquare } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useStore from '../store/authStore'
import toast from 'react-hot-toast'
import AuthImagePattern from '../component/AuthImagePattern'

const LoginPage = () => {
  const [formdata,setFormData]=useState({
    email:'',
    password:''
  })

  const [showPassword,setShowPassword]=useState(false);

  const {isLoggingIn,login}= useStore();

  const handelSummit=(e)=>{
    e.preventDefault();
    const success=validate();
    if(success===true) login(formdata);
  }
  
  const validate=()=>{
    if(!formdata.email.trim()) return toast.error('Email field requied');
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if(!formdata.password.trim()) return toast.error('password field required');
    if(!formdata.password.length<6) return toast.error('password must be atleast 6 character')
    return true;
  }

  return (
    <div className='bg-red-300 grid h-[95vh] grid-cols-2'>
      <div className='bg-gray-700 text-white flex justify-center items-center w-full'>
        <div className='w-full max-w-md flex flex-col gap-4'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div className='bg-gray-900 w-10 h-10 flex justify-center items-center rounded-md hover:bg-gray-800 '>
                <MessageSquare className='size-5'/>
              </div>
              <h1 className='font-bold text-3xl'>Welcome Back</h1>
              <p>Sign in to your account</p>
          </div>
          <form className='flex flex-col gap-6' onSubmit={handelSummit}>
            <div className='form-control gap-2'>
              <p>Email</p>
              <div>
                <div className='flex bg-slate-500 rounded-md items-center gap-1 p-2 w-full focus-within:outline'>
                  <MailIcon className='size-5'/>
                  <input type="email" placeholder='you@gmail.com' className='bg-transparent outline-none placeholder-white'
                  onChange={(e)=>setFormData({...formdata,email:e.target.value})}/>
                </div>
              </div>
            </div>
            <div>
              <p>Password</p>
              <div className='flex bg-slate-500 rounded-md items-center p-2 gap-1 focus-within:outline relative'>
                <div >
                  <LockIcon className='size-5'/>
                </div>
                <input type={showPassword?'text':'password'} placeholder='••••••••' className='bg-transparent outline-none placeholder-white' 
                onChange={(e)=>setFormData({...formdata,password:e.target.value})}/>
               
                <div className='cursor-pointer absolute right-0 pr-3'>
                <button type='button' onClick={()=>setShowPassword(!showPassword)}>
                   {showPassword?<Eye className='size-5'/> :<EyeOff className='size-5'/>}
                </button>
                </div>
              </div>
            </div>
            
            <button className='bg-blue-700 w-full p-2 rounded-md hover:outline' type='summit'>
             {isLoggingIn?<div className='flex justify-center'>
              <Loader className='animate-spin'/>
              <span>Loading...</span>
             </div>:'Login'}
            </button>
          </form>
          <div className='text-center'>
              <p>Don't have a accont?{' '}<Link to={'/signup'} className='link text-blue-500 font-bold hover:text-blue-300'>Create Account</Link></p>
          </div>
      </div>
      </div>

      <div className='bg-gray-600'>
        <AuthImagePattern title={'Welcome Back'} subtitle={'Sign in to continue your converstaion and catch up with you messages'}/>
      </div>
    </div>
  )
}

export default LoginPage