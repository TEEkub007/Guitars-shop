import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-slate-500 p-4 flex justify-between items-center">
      <div className="flex items-center ml-10">
        {/* Logo */}
        <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7841.png" alt="Logo" className="h10 w-14 mr-2" />

        {/* Brand Text */}
        <span className="text-white font-semibold text-lg">Doot Guitar</span>
      </div>

      <ul className="flex space-x-4 mr-10">
        <li><NavLink to="/"  className="text-white hover:text-slate-400">Home</NavLink></li>
        <li><NavLink to="/about"  className="text-white hover:text-slate-400">About</NavLink></li>
        <li><NavLink to="/contact"  className="text-white hover:text-slate-400">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar