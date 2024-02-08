import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import 'tailwindcss/tailwind.css';

const NavBar = () => {
    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="bg-slate-600 py-6 z-10 w-full h-[70px]">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
            <div className="text-red-400 text-2xl font-bold cursor-pointer">
                <h1><Link to='/'>KeyBay</Link></h1>
            </div>

            <div className="hidden md:flex">
                <ul className="flex text-white items-center text-xl">
                    <li className="ml-6 cursor-pointer font-bold"><Link to="/About">About</Link></li>
                    <li className="ml-6 cursor-pointer font-bold"><Link to="/Keys">Keys</Link></li>
                    <li className="ml-6 cursor-pointer font-bold"><Link to="/Contact">Contact</Link></li>
                    <button className="ml-6 cursor-pointer font-bold"><Link to="/Login">Login</Link></button>
                    <button className="ml-6 cursor-pointer font-bold"><Link to="/Checkout">Checkout</Link></button>
                </ul>
            </div>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={30} className="text-white" /> : <AiOutlineMenu size={30} className="text-white" />}
            </div>

            <div className={nav ? "duration-300 py-6 w-full bg-gradient-to-r bg-slate-600 absolute top-[70px] left-0 text-center justify-center flex" : "absolute left-[-100%]"}>
                <ul className="text-white">
                    <li className="ml-4 mb-4 cursor-pointer font-bold"><Link to="/About">About</Link></li>
                    <li className="ml-4 mb-4 cursor-pointer font-bold"><Link to="/Keys">Keys</Link></li>
                    <li className="ml-4 mb-4 cursor-pointer font-bold"><Link to="/Contact">Contact</Link></li>
                    <button className="ml-4 mb-4 cursor-pointer font-bold"><Link to="/Login">Login</Link></button>
                    <li className="ml-4 cursor-pointer font-bold"><Link to="/Checkout">Checkout</Link></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default NavBar