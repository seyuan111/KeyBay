import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Shop = () => {
  return (
    <div>
    <NavBar />
    <div className="w-full h-screen top-[10px] bg-slate-400">

      <div className="w-full h-[20%] text-center flex flex-col items-center justify-center text-white">
        <div className="text-3xl md:text-5xl lg:text-4xl">Our Keys</div>
        <p className="pt-5 text-xl">
          Order your different kinds of key.
        </p>
      </div>

      <div className="max-w-full mx-auto px-10 py-10 grid md:grid-cols-3 gap-5">

      </div>
      
    </div>
    <Footer />
  </div>
  )
}

export default Shop