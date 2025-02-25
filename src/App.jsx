import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import { HomePage } from './pages/HomePage'
import CountryDetails from './pages/CountryDetails'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/country/:countryCode' element={<CountryDetails />} />
      </Routes>
    </Router>
  )
}

export default App
