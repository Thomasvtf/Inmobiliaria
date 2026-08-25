import { useState } from 'react';
import notificacion from '../assets/notificacion.png';
import mensaje from '../assets/mensaje.png';
import fotoP from '../assets/fotoP.png';

function Navbar (){
    const [activeNav, setActiveNav] = useState('');

    return(
        <header>
            <h3 className="brand-logo"><a href="" onClick={() => setActiveNav('')}>VestaHome</a></h3>
            <div className="nav">
                <div className="btn-nav">
                    <a 
                        className={`btn-nav-style ${activeNav === 'buscar' ? 'active' : ''}`} 
                        href="#" 
                        onClick={() => setActiveNav('buscar')}
                    >
                        Buscar
                    </a>
                    <a 
                        className={`btn-nav-style ${activeNav === 'citas' ? 'active' : ''}`} 
                        href="#" 
                        onClick={() => setActiveNav('citas')}
                    >
                        Mis citas
                    </a>
                    <a 
                        className={`btn-nav-style ${activeNav === 'propiedades' ? 'active' : ''}`} 
                        href="#" 
                        onClick={() => setActiveNav('propiedades')}
                    >
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