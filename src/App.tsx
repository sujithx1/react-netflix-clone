
// import './App.css'



import { Routes,Route, useNavigate } from "react-router-dom"
import Home from './components/Home/Home'
import Login from './components/login/Login'
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth/cordova"
import { auth } from "./firebase"


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  const navigate=useNavigate()
  useEffect(()=>{


    onAuthStateChanged(auth,async (user) => {
      if(user)
      {
        console.log("Logged In");
        
        navigate('/') 
      }else
      {
        console.log("Logged Out");
        navigate('/login')
        
      }
      
    })
  },[navigate])
  return (
    <div className='app'>
       <ToastContainer theme="dark"/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/> } />
      </Routes>
      
 
    </div>
  )
}

export default App
