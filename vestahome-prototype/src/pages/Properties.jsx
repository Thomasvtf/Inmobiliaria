import { useState } from 'react';
import '../css/Properties.css'
function Properties(){
    return(
        <div className='cont-properties'>    
            <div className='barra-nav'>
                <input className='input-barra' type="text" placeholder='Buscar por ciudad, barrio o dirección...' />
                <button className='btn-buscar'>Buscar</button>
            </div>
        </div>
    )
}

export default Properties;