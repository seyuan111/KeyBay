import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
    <NavBar />
    <div className="w-full h-full top-[90%] bg-slate-400">

      <div className="w-full h-auto text-center md:py-8 lg:py-10 text-white">
        <h1 className="sm:text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6">About Us</h1>

        <p className="px-4 md:px-16 lg:px-28">
          Welcome to Keybay, have you ever lost your key or you have been locked out of your house and can not find your key?
          In Keybay, we offer all different set of keys, we can also copy your key at the nearest store or you can purchase all different kinds of keys
          in the store.
        </p>

        <h1 className="text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6">Our Story</h1>

        <p className="px-4 md:px-16 lg:px-32">
          Established in 2023, Keybay has been helping many customers with their keys and unlocking doors. Our journey
          began with a passion for helping customers with their key problems and being locked out. Keybay has helped so many customers
          customers throughout the USA.
        </p>

        <h1 className="text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6">
          Replace a Key and Find a Locksmith
        </h1>

        <p className="px-4 md:px-16 lg:px-32">
          Led by our skilled team of locksmiths, Keybay takes pride in gathering our professional locksmiths to
          assist customers who are locked out. We source the freshest and highest qualified locksmiths to
          ensure every customers satisfaction. From being locked out to getting back into the house.
        </p>

        <h1 className="text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6">
          Commitment to Sustainability
        </h1>

        <p className="px-4 md:px-16 lg:px-32">
          At Keybay, we are not only dedicated to providing an exceptional services but also to
          copy and replace your key. We are committed to train locksmiths and keymakers to provide
          customers with the best services possible.
        </p>

        <h1 className="text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6">Our Mission</h1>

        <p className="px-4 md:px-16 lg:px-32">
          Our mission is simple: to provide services for every customers who are in need for
          assistance. Whether you are locked out of your home or needing a new key nor replace a key, we aim to
          assist customers by providing as much services as possible, leaving them with as much satisfaction as possible.
        </p>

        <p className="px-4 md:px-16 lg:px-32 pt-6 md:pt-6 lg:pt-8 pb-4 md:pb-4 lg:pb-6">
          Join our team at Keybay as we continue to assist customers as much services as possible.
        </p>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default About