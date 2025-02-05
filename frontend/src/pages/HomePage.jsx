import React from 'react'
import SideBar from '../component/SideBar';
import useChatStore from '../store/chatStore';
import NoChatSelected from '../component/NoChatSelected';
import ChatSelected from '../component/ChatSelected';
const HomePage = () => {
  const {selectedUser}=useChatStore();
  return (
    <div className='h-[95vh] bg-gray-700 text-white flex justify-center items-center p-2'>
      <div className='max-w-6xl bg-gray-800 h-[85vh] w-full rounded-lg flex'>
        <SideBar/>
        {selectedUser==0?<ChatSelected/>:!selectedUser?<NoChatSelected/>:<ChatSelected/>}
      </div>
    </div>
  )
}

export default HomePage