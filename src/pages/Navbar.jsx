import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='p-7 flex items-center'>
      <h1 className='text-2xl font-black pr-15'>
        <NavLink to="/">REST<span className='text-blue-700'>Explorer</span></NavLink>
      </h1>
      <ul className='pl-15 border-l-1 border-gray-400 border-solid flex gap-10 text-lg text-gray-700 font-medium'>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? "text-amber-500" : "text-gray-700 hover:text-black")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/countries" className={({isActive}) => (isActive ? "text-amber-500" : "text-gray-700 hover:text-black")}>Countries</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? "text-amber-500" : "text-gray-700 hover:text-black")}>About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar