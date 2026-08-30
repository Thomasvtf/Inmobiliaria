import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from "./pages/Register"
import Properties from './pages/Properties'
import Dates from './pages/Dates'

function App() {
  const [paso, setPaso] = useState(1);

  return (
    <>
      <div className='interfaz-global'>
        
        {/* La Navbar solo aparece en las secciones internas (Properties y Visits) */}
        {paso !== 1 && paso !== 2 && (
          <Navbar setPaso={setPaso} paso={paso} />
        )}

        <main className="seccion-principal">
          <div className="contenedor">
            
            {paso === 1 && (
              <Login 
                siguiente={() => setPaso(3)} 
                register={() => setPaso(2)} 
              />
            )}

            {paso === 2 && (
              <Register 
                siguiente={() => setPaso(1)} 
                anterior={() => setPaso(1)} 
              />
            )}

            {paso === 3 && (
              <Properties 
                siguiente={() => setPaso(4)} 
                anterior={() => setPaso(1)} 
              />
            )}

            {paso === 4 && (
              <Dates 
                anterior={() => setPaso(3)} 
              />
            )}

          </div>
        </main>
        
        {/* El Footer solo aparece en las secciones internas (Properties y Visits) */}
        {paso !== 1 && paso !== 2 && (
          <Footer />
        )}
        
      </div>
    </>
  )
}

export default App