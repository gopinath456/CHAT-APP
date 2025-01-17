import {  Router, Routes,Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import SingUpPage from './pages/SingUpPage'
import NavBar from './pages/NavBar'
function App() {

  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path='/' Component={HomePage}></Route>
            <Route path='/singup' Component={SingUpPage}></Route>
            <Route path='/login' Component={LoginPage}></Route>
            <Route path='/setting' Component={Settings}></Route>
            <Route path='/profile' Component={Profile}></Route>
        </Routes>
    </div>
    
  )
}

export default App
