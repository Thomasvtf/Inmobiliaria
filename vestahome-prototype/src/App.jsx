import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  

  
  return (
    <>
      <div className='interfaz-global'>
        
        <div>
          <Navbar/>
        </div>



        
        <Footer/>
      </div>
    </>
  )
}

export default App
