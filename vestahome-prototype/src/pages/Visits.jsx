import { useState } from 'react';
import '../css/Visits.css'

function Visits(){
    return(
        <div className='header'>
            <h1 className='h1-vis'>Gestión de Citas</h1>
            <p className='p-vis'>Organiza y realiza el seguimiento de las visitas a las propiedades en tu cartera.</p>

            <button className='btn-horario'>+ Crear Horario</button>
        </div>
    )
}

export default Visits;