import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from "./pages/Register"
import Properties from './pages/Properties'

function App() {
  const [paso, setPaso] = useState(1);

  return (
    <>

      
      <div className='interfaz-global'>
        <div className='pagina-inicio'>
          {paso === 1 && (
            <Login
            siguiente = {() => setPaso(3)}
            register = {() => setPaso(2)}/>
          )}
        </div>
        
        {/* La Navbar solo se muestra si NO estás en el paso 1 (Login) */}
        {paso !== 1 && paso !== 2 && (
          <div>
            <Navbar/>
          </div>
        )}

        {paso === 2 && (
          <Register
          siguiente = {() => setPaso(1)}
          anterior = {() => setPaso(1)}/>
        )} 

        {paso === 3 && (
          <Properties
          siguiente = {() => setPaso(3)}
          anterior = {() => setPaso(2)}/> 
        )}

        {/* El Footer solo se muestra si NO estás en el paso 1 (Login) */}
        {paso !== 1 && <Footer/>}
        
      </div>
    </>
  )
}

export default App
