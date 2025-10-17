import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const [toggle, settoggle] = useState(false)
    


  return <>



<nav className="bg-white border-gray-200 shadow-sm shadow-blue-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full ">
    <Link to={"home"} className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="w-[70px]" alt="Flowbite Logo" />
      
    </Link>
    <button onClick={()=>settoggle(!toggle)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  cursor-pointer" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className={`${toggle == false ? "hidden" : "" } w-full md:block md:w-auto   " id="navbar-default`}>
      <ul   onClick={()=>settoggle(false)} className="font-semibold flex flex-col    p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:white ">
        <li>
          <NavLink to={"home"} className="block py-2 px-3 text-black  rounded-sm md:bg-transparent  md:aria-[current=page]:bg-transparent md:p-0  aria-[current=page]:text-green-600  aria-[current=page]:bg-green-50 " aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to={"services"} className="block py-2 px-3 text-black  rounded-sm md:bg-transparent  md:aria-[current=page]:bg-transparent md:p-0  aria-[current=page]:text-green-600 aria-[current=page]:bg-green-50" aria-current="page">Services</NavLink>
        </li>
     
        
        
        
      </ul>
    </div>
  </div>
</nav>


  
  </>
}
