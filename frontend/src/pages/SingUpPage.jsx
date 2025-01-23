import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import {MessageSquare, User2Icon,MailIcon,LockIcon,EyeClosed, EyeOff, Eye, Loader}from 'lucide-react'
import useStore from '../store/authStore'
import toast from 'react-hot-toast'
import AuthImagePattern from '../component/AuthImagePattern'

const SingUpPage = () => {
  const { isSigningIn,signUp}=useStore();
  const [formData,setFormData]=useState({
  name:'',
  email:'',
  password:''
  })
  const [showPassword,setShowPassword]=useState(false);
 
  const dataValidate=()=>{
    if(!formData.name.trim()) return toast.error('Name Required');
    if(!formData.email.trim()) return toast.error('Email Required');
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if(!formData.password.trim()) return toast.error('password');
    if(formData.password.length<6) return toast.error('Password must be at least 6 characters');

    return true;
  }
  const handelSummit=(e)=>{
   e.preventDefault();
   const success=dataValidate();
   console.log(success)
  if(success===true) signUp(formData);
  }
  return (
    <div className='grid lg:grid-cols-2  max-h-[95vh] '>
      <div className='p-6 sm:p-12 flex flex-col justify-center items-center bg-gray-700'>
      <div className='w-full max-w-md space-y-8 text-gray-100'>
        {/* message icon */}
        <div className='flex justify-center items-center flex-col gap-2 group'>
          <div className='flex justify-center items-center rounded-lg group-hover:bg-gray-800 bg-gray-900  size-12'>
            <MessageSquare className='text-gray-100 size-6'/>
          </div>
          <h1 className='text-xl font-semibold'>Create Account</h1>
          <p >Get started with your free account</p>
        </div>

         <form className='space-y-6' onSubmit={handelSummit}>
         
         <div >
          <label className='label'>
            <span className='font-medium '>Full Name</span>
          </label>
          <div className='flex rounded-lg gap-2 p-2 bg-slate-600 items-center focus-within:outline group '>
            <div>
              <User2Icon className='size-5 '/>
            </div>
            <input className='bg-transparent outline-none placeholder-white' placeholder='Jonh Doe' type='text' required 
            onChange={(e)=>setFormData({...formData,name:e.target.value})} value={formData.name} />
          </div>
         </div>

         <div>
          <label className='label'>
            <span className='font-medium'>
              Email
            </span>
          </label>
          <div className='flex bg-slate-600 rounded-lg gap-2 p-2  items-center focus-within:outline'>
            <div>
              <MailIcon className='size-5'/>
            </div>
            <input type="email"  placeholder='you@example.com' className='outline-none bg-transparent placeholder-white'
            onChange={(e)=>setFormData({...formData,email:e.target.value})} value={formData.email}/>
          </div>
         </div>

         <div>
          <label className='label'>
            <span className='font-medium'>
              Password
            </span>
          </label>
          <div className='flex items-center gap-2 p-2 bg-slate-600 rounded-lg focus-within:outline relative'>
            <div>
            <LockIcon className='size-5'/>
            </div>
            <input type={showPassword?'text':'password'} placeholder='••••••••' className='outline-none bg-transparent placeholder:font-bold placeholder:text-white' onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
            <button type='button'className='absolute inset-y-0 right-0 flex items-center pr-3' onClick={()=>setShowPassword(!showPassword)}>
              {showPassword?<Eye/>:<EyeOff/>}
            </button>
          </div>
         </div>

         <button type='summit' className='bg-blue-700 hover:bg-blue-600 w-full btn-sm btn border-transparent h-10 text-white' 
         disabled={isSigningIn}>
          {isSigningIn?
          <>
          <Loader className='size-5 animate-spin'/> 
          Loading...
          </>
          :'Create Account'}
          
         </button>
  
         </form>
         <div className='flex justify-center'>
          <p className=''>
            Already have the account?{' '}
            <Link to={'/Login'} className='link text-blue-400 hover:text-blue-300 font-bold'>
            Login
            </Link>
          </p>
         </div>
      </div>
      </div>

      <AuthImagePattern 
      title='Join our community'
      subtitle='Connect with friends , share moments , and stay in touch with your loved ones'
      />
      
    </div>
  )
}

export default SingUpPage