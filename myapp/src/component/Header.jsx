import React from 'react'
import { FaSearch } from "react-icons/fa"
import { FaBell } from "react-icons/fa"
import { MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header class="sticky top-0 bg-white shadow z-50 gap-3">
    <div class="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
  
      <div class="flex items-center">
        <Link to='/'>
        <h1>
        <span class="ml-2 text-2xl font-semibold">SHOPY.LK</span>
        </h1>
        </Link>
      </div>
  
     
      <form class="flex items-center border border-gray-300 rounded-full pl-4 pr-4 py-2  focus:border-gray-500 max-w-full">
        <input type="text"  
         placeholder='search...' className=' focus:outline-none max-w-6xl sm:w-64'/>
        <FaSearch/>
      </form>
  
      <div class="relative flex gap-3 items-center">
            <FaBell className='text-orange-300 size-10 sm:size-6 max-lg:size-7'/>
          <span class="absolute top-0 right-0 block h-4 w-4 rounded-full  text-white text-xs text-center"></span>
    </div>




    </div>
  
   
    <nav class="bg-gray-100 p-4">
      <div class="max-w-7xl mx-auto flex justify-around">
        <Link to='Explore/'>
        <a href="#" class="text-gray-800">Explore</a>
        </Link >
        <Link to='Womens/'>
        <a href="#" class="text-gray-800">Women's</a>
        </Link>
        <Link to='Electronic/'>
        <a href="#" class="text-gray-800">Electronics</a>
        </Link>
        <Link to='Apparel/'>
        <a href="#" class="text-gray-800">Apparel</a>
        </Link>
        <Link to='Clearance'>
        <a href="#" class="text-gray-800">Clearance</a>
        </Link>
         </div>
    </nav>
  </header>

  )
}
