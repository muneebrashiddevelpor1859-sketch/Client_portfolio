import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Shared/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
// import Menu from './Pages/Menu'
import { Toaster } from "react-hot-toast";

import Footer from './components/Shared/Footer'
import Contact from  './Pages/Contact'



function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>

         <Toaster position="top-right" />
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/> 
        <Route path='/Services' element={<Services/>}/>
        {/* <Route path='/Menu' element={<Menu/>} /> */}
        <Route path='/Contact' element={<Contact/>} />






      </Routes>
  
      <Footer/>
      
    </BrowserRouter>
  )
}

export default App
