import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'

function App() {

  const [count, setCount] = useState(0)
  const [paso, setPaso] = useState(1);

  return (
    <>
      
      <div className='interfaz-global'>
        
        <div>
          <Navbar/>
        </div>

        <div className='pagina-inicio'>
          {paso === 1 && (
            <Login 
            siguiente = {() => setPaso(2)}/>
          )}
        </div>




        <Footer/>
      </div>
    </>
  )
}

export default App
