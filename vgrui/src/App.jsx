import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Pages/Hero/Hero'
import Hero1 from './Components/Pages/Hero2/Hero1'
import Getin from './Components/Pages/Getin/Getin'
import Wisdom from './Components/Pages/Wisdom/Wisdom'
import Personal from './Components/Pages/Personalinfo/Personal'
import Skills from './Components/Pages/Skill/Skill'
import Projects from './Components/Pages/Projects/Projects'
import GlobalStyle from './Components/Fullbody/Scrollbar'
import Mousehover from './Components/Fullbody/Mousehover'
import Footer from './Components/Header/Footer'


export default function App() {
  return (
    <>
      <GlobalStyle />
      <Mousehover />

      <Header />
      {/* <Hero /> */}
      <Hero1 />
      <Wisdom />
      <Skills />
      <Projects />
      <Personal />
      <Getin />
      <Footer />
    </>
  )
}
