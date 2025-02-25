import React from 'react'
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

// <IoMoonSharp />

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Where in the world?</h1>
          <div className="dark-mode">
              <IoMoonOutline />
              <h4>Dark Mode</h4>
          </div>
    </div>
  )
}

export default Navbar