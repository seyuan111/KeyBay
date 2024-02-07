import React from 'react'
import {Link} from 'react-router-dom'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-slate-400">
        <div className="w-full h-[80%] text-center flex flex-col items-center justify-center px-4 text-white">
            <p className="font-bold text-2xl underline">Welcome to KeyBay</p>
            <h1 className="text-[25px] mt-4 text-white">Are you Locked out of your Home or you lost your key?</h1>
            <p className="mb-5 font-bold">This site lets you find a locksmith or replace your lost key</p>
            <div className="flex justify-center items-center my-4">
                <p className="md:text-3xl sm:text-2xl text-xl font-bold">Want to</p>
                <ReactTyped className="md:text-3xl sm:text-2xl text-xl font-bold pl-2" 
                    strings={["Replace your key?", "find a locksmith?"]}
                    typedSpeed={120}
                    backSpeed={140}
                    loop
                />
            </div>
            <div className="text-white flex flex-col sm:flex-row">
                <button className="w-full sm:w-auto bg-blue-500 text-white hover:bg-blue-900 rounded-xl px-6 py-2 duration-300 mb-2 sm:mb-0"><Link to="/Keys">Replace Key</Link></button>
                <button className="w-full sm:w-auto px-6 py-2 mt-4 sm:mt-0 bg-red-500 hover:bg-red-900 rounded-xl text-white duration-300 ml-0 sm:ml-6"><Link to="/Find">Find a Locksmith</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Hero