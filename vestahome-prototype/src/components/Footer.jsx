import { useState } from 'react';
function Footer(){
    const [activeFoo, setActiveFoo] = useState('');
    return (
        <footer>
            <div className='footer'>
                <h3 className='h3-foo'>VestaHome</h3>
                <p className='p-foo'>© 2026 VestaHome. Todos los derechos reservados.</p>
            </div>

            <div className="footer">
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
            </div>
        </footer>
    )
}

export default Footer