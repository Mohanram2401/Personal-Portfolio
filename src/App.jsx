import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Certifications from './components/Certifications'
import ProfileLinks from './components/ProfileLinks'
import SoftSkills from './components/Softskills'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className='bg-[#0e0c1e]'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Certifications/>
      <SoftSkills/>
      <ProfileLinks/>
      <Contact/>
    </div>
  )
}

export default App