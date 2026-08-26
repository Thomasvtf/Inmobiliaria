import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'

function App() {
  const [paso, setPaso] = useState(1);

  return (
    <>
      <div className='interfaz-global'>
        
        {/* La Navbar solo se muestra si NO estás en el paso 1 (Login) */}
        {paso !== 1 && (
          <div>
            <Navbar/>
          </div>
        )}

        <div className='pagina-inicio'>
          {paso === 1 && (
            <Login 
              siguiente={() => setPaso(2)}
            />
          )}
        </div>

        {/* El Footer solo se muestra si NO estás en el paso 1 (Login) */}
        {paso !== 1 && <Footer/>}
        
      </div>
    </>
  )
}

export default App
