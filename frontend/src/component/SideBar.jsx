import { useEffect } from "react";
import useChatStore from "../store/chatStore"
import SideBarSkeleton from "./skeleton/SideBarSkeleton";
import { User, Users } from "lucide-react";

const SideBar=()=>{
   const {userdata,setSelectedUser,selectedUser,isLoadingUser, setUserdata}=useChatStore();
   
   useEffect(()=>{
    if(userdata.length===0){
      setUserdata()
    }
    },[userdata]);
   console.log(userdata)
   if(isLoadingUser){
    return <SideBarSkeleton/>
   }
    return(
        <aside className="h-full w-20 lg:w-72 border-r border-gray-300 flex flex-col">
        <div className="p-4 border-b">
         <div className="flex gap-2 justify-center lg:justify-normal">
          <Users className="size-6"/>
          <h1 className="hidden lg:block font-semibold">Contacts</h1>
         </div>
        </div>
        <div className="size-full overflow-y-auto p-2 flex flex-col gap-6 cursor-pointer mt-2">
         {userdata.map((user,index)=>
         <div key={index} className={`flex gap-2 items-center ${selectedUser==index?'bg-gray-600':'hover:bg-gray-600'} rounded-md p-1 
         justify-center lg:justify-normal`}
         onClick={()=>{setSelectedUser(index)}}>
          {user.profilepic?(<div className="size-12 rounded-full bg-center bg-cover relative" style={{ backgroundImage: `url(${user.profilepic})` }}>
           <div className="size-3 bg-green-400 rounded-full outline outline-1 absolute bottom-1 right-0"></div>
          </div>):<div className="size-12 rounded-full bg-blue-400 flex justify-center items-center relative">
            <User className="size-8"/>
            <div className="size-3 bg-green-400 rounded-full outline outline-1 absolute bottom-1 right-0"></div>
          </div>}
          <div className="hidden lg:block">
            <p>{user.name}</p>
            <p>online</p>
          </div>
         </div>
         )}
        </div>
        </aside>
    )
}

export default SideBar