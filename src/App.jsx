import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DashBoard from './pages/DashBoard.jsx'
import Projects from './pages/Projects.jsx'
import Footer from './components/Footer.jsx'
import Auth from'./pages/Auth.jsx'
import Pnf from './pages/Pnf.jsx'

const App = () => {
  return (
   <>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Auth/>}></Route>
    <Route path='/register' element={<Auth insideRegister={true}/>}></Route>
    <Route path='/dashboard' element={<DashBoard/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
    <Route path='/*' element={<Pnf/>}></Route>
  </Routes>
  <Footer/>
   </>
  )
}

export default App

