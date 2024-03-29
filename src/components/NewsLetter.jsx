import React from 'react'
import {Link} from 'react-router-dom'

const NewsLetter = () => {
  return (
    <div className="w-full py-12 text-black bg-slate-500 px-4">
    <div className="max-w-[1240px] mx-auto grid lg:grid-col-3">
        <div className="lg:col-span-2 my-4">
            <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold py-2">Want to receive news on KeyBay?</h1>
            <p>Sign up here to get updates on KeyBay</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
            <button className="bg-blue-300 text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Give Me News</button>
          </div>
          <p>We care about your privacy. Please read our <span className="text-blue-300 cursor-pointer"><Link to="/Policy">Privacy Policy</Link></span></p>
        </div>
    </div>
</div>
  )
}

export default NewsLetter