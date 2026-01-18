import React from 'react'
import Herosection from './Pages/HeroSection/Herosection'
import Projects from './Pages/Projects/Projects'
import Skills from './Pages/skills/Skills'
import WorkExp from './Pages/workExp/WorkExp'
import Contact from './Pages/contact/Contact'

export default function App() {
  return (
    <div>
      <Herosection/>
      <WorkExp/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}
