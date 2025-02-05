import { User, Users } from 'lucide-react'
import React from 'react'

const SideBarSkeleton = () => {
  const skelicon=Array(9).fill(null);
  return (
    <div className='max-h-full w-20 lg:w-72 border-r flex flex-col'>
     <div className='border-b w-full'>
      <div className='flex gap-2 p-4 justify-center lg:justify-normal'>
        <Users/>
        <h1 className='hidden lg:block'>Contacts</h1>
      </div>
     </div>
     <div className='overflow-y-auto w-full flex flex-col gap-6 p-2 lg:p-4 h-full flex-1 mt-2'>
      {
        skelicon.map((_,index)=>(
          <div key={index} className='flex items-center gap-2 '>
            <div className='size-12 skeleton rounded-full'></div>
            <div className='lg:flex flex-col gap-1 hidden'>
              <div className='h-4 w-32 skeleton'></div>
              <div className='h-3 w-16 skeleton'></div>
            </div>
          </div>
        ))
      }
    
     </div>
    </div>
  )
}

export default SideBarSkeleton