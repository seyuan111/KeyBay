import React from 'react'
import Key from '../assets/Key.png'
import {Link} from 'react-router-dom'

const Descriptions = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Key} alt="/"></img>
        <div className="flex flex-col justify-center">
          <p className="font-bold tracking-wider">Locksmith is here to help</p>
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">Need a Locksmith?</h1>
          <p>In Keybay, you will purchase your key and we will make your key. You will also meet your locksmith. The locksmiths has helped many houses throughout the country.</p>
          <button className="w-[200px] my-4 mx-auto md:mx-0 bg-blue-500 text-white hover:bg-blue-900 rounded-xl px-6 py-2 duration-300"><Link to="/Find">Find Locksmith</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Descriptions