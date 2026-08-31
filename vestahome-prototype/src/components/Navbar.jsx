import { useState } from 'react';
import notificacion from '../assets/notificacion.png';
import mensaje from '../assets/mensaje.png';
import fotoP from '../assets/fotoP.png';

function Navbar ({paso, setPaso}){

    return(
        <header>
            <h3 className="brand-logo">
                <a href="" onClick={() => setActiveNav('')}>VestaHome</a>
            </h3>

            <div className="nav">
                <div className="btn-nav">
                    
                    <a className={`btn-nav-style ${paso === 3 ? 'active' : ''}`} 
                        href="#" 
                        onClick={() => setPaso(3)}>
                            Buscar
                    </a>

                    <a className={`btn-nav-style ${paso === 4 ? 'active' : ''}`} 
                        href="#" 
                        onClick={() => setPaso(4)}>
                            Mis citas
                    </a>

                    <a className={`btn-nav-style ${paso === 5 ? 'active' : ''}`} 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); setPaso(5); }}>
                            Gestionar propiedades
                    </a>    

                    <div className="imgs-nav">
                        <img className='img-nav' src={notificacion} alt="" />
                        <img className='img-nav' src={mensaje} alt="" />
                        <img className='img-nav' src={fotoP} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar