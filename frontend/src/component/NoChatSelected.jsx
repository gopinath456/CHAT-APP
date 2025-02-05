import React from 'react'
import {MessageSquare} from 'lucide-react'
const NoChatSelected = () => {
  return (
    <div className='h-full w-full flex justify-center items-center text-center'>
        <div className='flex justify-center items-center flex-col gap-4'>
            <div className='size-10 bg-blue-400 flex justify-center items-center rounded-lg animate-bounce'>
            <MessageSquare className='size-6'/>
            </div>
            <h1 className='font-bold text-3xl'>Welcome to Chatty!</h1>
            <p>Select a communication from the sidebar to start chatting</p>
        </div>
    </div>
  )
}

export default NoChatSelected