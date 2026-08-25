import { useState } from 'react'
import './App.css'

import Login from './pages/Login'

function App() {

  const [paso, setPaso] = useState(1);

  return (
    <>
      <div className='pagina-inicio'>
        {paso === 1 && (
          <Login 
          siguiente = {() => setPaso(2)}/>
        )}
      </div>
      
      <div className='interfaz-global'>

      </div>



    </>
  )
}

export default App
