import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './page/Home'
import Footer from './Components/Footer'
import PropertyDetails from './page/PropertyDetails'
import Header from './Components/Header'

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white '>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/property/:id'  element={<PropertyDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App