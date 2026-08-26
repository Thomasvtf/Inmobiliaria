import { useState } from 'react';

function Footer(){
    const [activeFoo, setActiveFoo] = useState('');
    return (
        <footer>
            {/* Elemento izquierdo */}
            <h3 className='h3-foo'>VestaHome</h3>
            
            {/* Elemento central/izquierdo pegado al texto anterior */}
            <p className='p-foo'>© 2026 VestaHome. Todos los derechos reservados.</p>

            {/* Elemento derecho */}
            <div className="btn-foo">
                <a 
                    className={`btn-foo-style ${activeFoo === 'sobre' ? 'active' : ''}`} 
                    href="#" 
                    onClick={() => setActiveFoo('sobre')}
                >
                    Sobre Nosotros
                </a>
                <a 
                    className={`btn-foo-style ${activeFoo === 'politica' ? 'active' : ''}`} 
                    href="#" 
                    onClick={() => setActiveFoo('politica')}
                >
                    Política de Privacidad
                </a>
                <a 
                    className={`btn-foo-style ${activeFoo === 'terminos' ? 'active' : ''}`} 
                    href="#" 
                    onClick={() => setActiveFoo('terminos')}
                >
                    Términos de Servicio
                </a>
                <a 
                    className={`btn-foo-style ${activeFoo === 'Soporte' ? 'active' : ''}`} 
                    href="#" 
                    onClick={() => setActiveFoo('Soporte')}
                >
                    Soporte
                </a>
            </div>
        </footer>
    );
}

export default Footer;
