import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Pages/Hero/Hero'
import Hero1 from './Components/Pages/Hero2/Hero1'
import Getin from './Components/Pages/Getin/Getin'
import Wisdom from './Components/Pages/Wisdom/Wisdom'

export default function App() {
  return (
    <>
      <Header />
      {/* <Hero /> */}
      <Hero1 />
      <Wisdom />
      <Getin />
    </>
  )
}
