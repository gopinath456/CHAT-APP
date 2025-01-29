import { CameraIcon, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import useStore from '../store/authStore';

const Profile = () => {
  const {authUser,updateProfile,isUpdatingProfile}=useStore();
  const [avatarPic,setAvatarpic]=useState(null);
  const avatarUpload=(e)=>{
     const file=e.target.files[0];
     if(!file) return;
     const reader=new FileReader();
     reader.readAsDataURL(file);
     reader.onload=async()=>{
      const base64=reader.result;
      setAvatarpic(base64);
      await updateProfile(base64);
     }
  }
  return (
    <div className='bg-gray-700 h-[95vh] flex justify-center items-center '>
     <div className='max-w-2xl bg-gray-600 text-white rounded-md '> 
       <div className='w-full space-y-6 p-8'>
          <div className='text-center gap-2'>
           <h1 className='font-bold text-3xl'>Profile</h1>
           <p className='mb-2'>Your profile information</p>
          </div>
          <div className='flex justify-center items-center flex-col gap-4'>
           <div>
            <div className={`relative ${isUpdatingProfile?'animate-pulse pointer-events-none':''}`}>
            <img src={avatarPic||authUser.profilepic||'/avatar.png'} alt="avatar" className='size-32 rounded-full border-4 object-cover'/>
              <label htmlFor="avatar-upload" className={
                `absolute bg-gray-800 rounded-full p-1 bottom-0 right-0 cursor-pointer hover:scale-105`
              }>
                <CameraIcon className='size-5'/>
                <input 
                type="file" 
                name="" 
                id="avatar-upload" 
                accept='image/*' 
                className='hidden'
                onChange={avatarUpload}
                disabled={isUpdatingProfile}
                />
              </label>
              
            </div>
           </div>
           <p>Click the camera icon to update your profile</p>
          </div>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <div className='flex gap-2 items-center'>
                <User className='size-4'/>
                <p>Full Name</p>
              </div>
              <p className='bg-slate-500 border-2 rounded-md px-4 py-2.5 font-semibold '>{authUser.name}</p>
            </div>
            <div className='space-y-2'>
              <div className='flex gap-2 items-center'>
                <Mail className='size-4'/>
                <p>Email Account</p>
              </div>
              <p className='bg-slate-500 border-2 rounded-md px-4  py-2.5'>{authUser.email}</p>
            </div>
          </div>
          <div className='space-y-2 '>
            <h2 className='font-bold text-3xl'>Account Information</h2>
            <div className='space-y-2'>
            <div className='flex justify-between border-b-2'>
              <span>Member Since</span>
              <span>{authUser.createdAt?.split('T')[0]}</span>
            </div>
            <div className='flex justify-between'>
              <span>Account Status</span>
              <span className='text-green-400 font-bold'>Active</span>
            </div>
            </div> 
          </div>
       </div>
     </div>
    </div>
  )
}

export default Profile