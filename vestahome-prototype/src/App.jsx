import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from "./pages/Register"
import Properties from './pages/Properties'
import Dates from './pages/Dates'
import Inventory from './pages/Inventory'
import Detalles from './pages/PropertyDetail'

function App() {

  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState(null);
  const [paso, setPaso] = useState(1);
  const [inmobiliaria, setInmobiliaria] = useState({
    //Inventario de propiedades
    inventario: []
  });

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
                inmobiliaria={inmobiliaria}
                siguiente={(propiedad) => {
                  setPropiedadSeleccionada(propiedad);
                  setPaso(6);
                }} 
                anterior={() => setPaso(1)} 
              />
            )}

            {paso === 4 && (
              <Dates 
                anterior={() => setPaso(3)} 
              />
            )}

            {paso === 5 && (
              <Inventory
                inmobiliaria={inmobiliaria}
                setInmobiliaria={setInmobiliaria}
              />
            )}


            {paso === 6 && (
              <Detalles
                propiedad={propiedadSeleccionada}
              />
            )}

          </div>
        </main>
        

        {/* El Footer solo se muestra si NO estás en el paso 1 (Login) */}
        {paso !== 1 && <Footer/>}
        
      </div>
    </>
  )
}

export default App