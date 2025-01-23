import { Routes,Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import SingUpPage from './pages/SingUpPage'
import NavBar from './pages/NavBar'
import useStore from './store/authStore'
import { useEffect } from 'react'
import {Loader} from 'lucide-react'
import {Toaster} from 'react-hot-toast'

function App() {
  const { authUser, checkingAuth, isCheckingAuth}=useStore()
  useEffect(()=>{checkingAuth()},[])
  console.log(authUser)
  if(isCheckingAuth&&!authUser)
  return(
    <div className='flex justify-center items-center h-screen'>
      <Loader className='animate-spin size-10 duration-500000'/>
    </div>
   )
  return (
    <div className=' bg-gray-900'>
        <NavBar/>
        <Routes>
            <Route path='/' Component={authUser?HomePage:LoginPage}></Route>
            <Route path='/signup' Component={authUser?HomePage:SingUpPage}></Route>
            <Route path='/login' Component={authUser?HomePage:LoginPage}></Route>
            <Route path='/setting' Component={Settings}></Route>
            <Route path='/profile' Component={authUser?Profile:HomePage}></Route>
        </Routes>
        <Toaster/>
    </div>
  )
}

export default App
