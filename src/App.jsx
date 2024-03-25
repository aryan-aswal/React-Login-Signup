import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import logo from './assets/logo.svg'
import googleIcon from './assets/googleIcon.svg'
import background from './assets/background.png'
import login from './assets/login.png'
import signup from './assets/signup.png'
import PrivateRoute from './components/PrivateRoute'
function App() {
  const assests = { logo: logo, googleIcon: googleIcon, background: background, login: login, signup: signup }
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return ( 
    <div className="bg-[#000814] w-screen h-screen flex flex-col">
      <Navbar assests={assests} isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login assests={assests} formType={'login'} isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
        <Route path='/signup' element={<Signup assests={assests} formType={'signup'} isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn = {isLoggedIn}>
            <Dashboard></Dashboard>
          </PrivateRoute>        
        }></Route>
      </Routes>
    </div>
  )
}

export default App
