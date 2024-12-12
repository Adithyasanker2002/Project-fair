import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DashBoard from './pages/DashBoard.jsx'
import Projects from './pages/Projects.jsx'
import Footer from './components/Footer.jsx'
import Auth from'./pages/Auth.jsx'
import Pnf from './pages/Pnf.jsx'
import { tokenContext } from './context/TokenAuth.jsx'

const App = () => {
  const {authorisedUser,setAuthorisedUser} = useContext(tokenContext)
  return (
   <>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Auth/>}></Route>
    <Route path='/register' element={<Auth insideRegister={true}/>}></Route>
    {
      authorisedUser &&
      <>
      <Route path='/dashboard' element={<DashBoard/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
    </>}
    <Route path='/*' element={<Pnf/>}></Route>
  </Routes>
  <Footer/>
   </>
  )
}

export default App

