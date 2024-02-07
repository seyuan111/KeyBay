import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (

<footer class="bg-white dark:bg-gray-900">
<div class="mx-auto w-full max-w-screen-xl">
  <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
    <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
        <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
                <Link to="/About" class=" hover:underline">About</Link>
            </li>
            <li class="mb-4">
                <Link to="/Careers" class="hover:underline">Careers</Link>
            </li>
            <li class="mb-4">
                <Link to="/Community" class="hover:underline">Community</Link>
            </li>
            <li class="mb-4">
                <Link to="/Blog" class="hover:underline">Blog</Link>
            </li>
        </ul>
    </div>
    <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
        <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
                <Link to="/" class="hover:underline">Discord Server</Link>
            </li>
            <li class="mb-4">
                <Link to="/" class="hover:underline">Twitter</Link>
            </li>
            <li class="mb-4">
                <Link to="/" class="hover:underline">Facebook</Link>
            </li>
            <li class="mb-4">
                <Link to="/Contact" class="hover:underline">Contact Us</Link>
            </li>
        </ul>
    </div>
</div>
</div>
</footer>

  )
}

export default Footer