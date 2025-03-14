import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Connect from './components/Connect'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className=''>
      <Navbar />
      <div className="">
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        {/*
        <div id="skills">
          <Skills />
        </div> */}
      </div>
    </div>
  )
}

export default App
