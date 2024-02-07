import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Descriptions from '../components/Descriptions'
import Cards from '../components/Cards'
import Sliders from '../components/Sliders'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Sliders />
        <Descriptions />
        <Cards />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Home