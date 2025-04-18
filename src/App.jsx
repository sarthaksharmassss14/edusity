import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


import { Link } from 'react-scroll';
import VideoPlayer from './components/videoplayer/VideoPlayer'


function App() {

const [playState,setPlayState]= useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="Our PROGRAM" title= "What we Offer"/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title= "Campus Photos"/>
        <Campus/>
        <Title subTitle="Testimonials" title= "What Student Says"/>
        <Testimonials/>
        <Title subTitle="Contact Us" title= "Get in Touch"/>
        <Contact/>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
        <Footer/>
        </div>
     
    </div>
  )
}

export default App