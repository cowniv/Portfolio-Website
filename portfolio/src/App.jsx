import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Connect from './components/Connect'

function App() {
  return (
    <div className=''>
      <Hero />
      <About />
      <Projects/>
      <Skills />
      <Connect />
    </div>
  )
}

export default App
