import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import './index.css'
import CardFlip from './components/CardFlip'
import Carousel from './components/Carousel'
import Register from './components/Register'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Body></Body> 
    <CardFlip></CardFlip> 
    <Carousel></Carousel>
    <Register></Register> 
    <Footer></Footer> 




    
    
    </div>
  )
}

export default App;