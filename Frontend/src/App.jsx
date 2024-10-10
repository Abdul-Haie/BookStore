import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './cources/Courses'
import Signup from './components/Signup'
import ContactUs from './contactus/ContactUs'
import AboutUs from './About/AboutUs'


function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/about' element={<AboutUs/>}/>
    </Routes>
    </div>
    </>
    
  )
}

export default App