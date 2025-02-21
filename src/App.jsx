

import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Filter from './components/Filter'
import Card from './components/Card'

function App() {


  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='body-header'>
          <Search />
          <Filter />  
        </div>
        <Card />
      </div>



    </>
  )
}

export default App
