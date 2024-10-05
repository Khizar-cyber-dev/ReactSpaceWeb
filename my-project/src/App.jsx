import React from 'react'
import bgVideo from './assets/earth-bg.mp4'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/services'
import Rapidscat from './components/Rapidscat'
import Satelite from './components/Satelite'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'

const App = () => {
  return (
    <div>
  {/* Video Section */}
  <div className="relative h-[700px]">
    <video
      autoPlay
      loop
      muted
      className="fixed right-0 top-0 h-full w-full object-cover z-[-1]"
    >
      <source src={bgVideo} type="video/mp4" />
    </video>
    <Navbar />
    <Hero />
  </div>

  {/* Services Component*/}
  <div className="relative z-10">
    <Services />
  </div>

  {/* Rapidscat Component Section */}

  <div className='relative z-10'>
    <Rapidscat />
  </div>

  {/* Satelite Component Section */}
  <div className='relative z-10'>
    <Satelite />
  </div>

    {/* Footer1 Component section */}
    <div>
      <Footer1 />
    </div>

    {/* Footer2 Component Section */}
    <div>
      <Footer2 />
    </div>
  
</div>

    
  )
}

export default App