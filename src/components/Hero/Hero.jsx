import React from 'react'
import "./hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We ensure better education for a better world</h1>
            <p>"Discover your passion, pursue your purpose. Edusity offers personalized learning, real-world opportunities, and a supportive campus culture."</p>
            <button className='btn'>Explore more <img src={dark_arrow}/></button>
        </div>
    </div>
  )
}

export default Hero