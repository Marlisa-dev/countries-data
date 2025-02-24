

import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Filter from './components/Filter'
import { useEffect, useState } from 'react'
import { HomePage } from './HomePage'

function App() {

  return (
    <>
     <Navbar />
     <HomePage />

    </>
  )
}

export default App
