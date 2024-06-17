// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'

const App = () => {
  const [PlayState,setPlayState] =useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/> 
      <div className="container">
        <Title subtitle='OUR PROGRAM' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/> 
      <Title subtitle='Gallery' title='Campus Photos'/>
      <Campus/> 
      <Title subtitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>

      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <Videoplayer PlayState={PlayState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App