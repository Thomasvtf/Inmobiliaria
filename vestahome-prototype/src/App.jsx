import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from "./pages/Register"

function App() {
  const [paso, setPaso] = useState(1);

  
  return (
    <>

      <div className='pagina-inicio'>
        {paso === 1 && (
          <Login
          siguiente = {() => setPaso(3)}
          register = {() => setPaso(2)}/>
        )}
      </div>

      {paso === 2 && (
        <Register
        siguiente = {() => setPaso(1)}
        anterior = {() => setPaso(1)}/>
      )} 

      {paso !== 1 && (
        <div className='interfaz-global'>
          <Navbar/>
        </div>

      )}
    </>
  )
}

export default App
