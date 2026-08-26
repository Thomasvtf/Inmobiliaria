import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
      
      <div className='interfaz-global'>
        
        {/* La Navbar solo se muestra si NO estás en el paso 1 (Login) */}
        {paso !== 1 && (
          <div>
            <Navbar/>
          </div>
        )}

        {/* El Footer solo se muestra si NO estás en el paso 1 (Login) */}
        {paso !== 1 && <Footer/>}
        
      </div>
    </>
  )
}

export default App
