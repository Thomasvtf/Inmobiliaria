import { useState } from 'react';
import '../css/Properties.css'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import room from '../assets/room.png'
import baño from '../assets/baño.png'
import area from '../assets/area.png'

function Properties(){
    return(
        <div className='cont-properties'>
            <div className='barra-nav'>
                <input className='input-barra' type="text" placeholder='Buscar por ciudad, barrio o dirección...' />
                <button className='btn-buscar'>Buscar</button>
            </div>
                
            <h1 className='titulo-pro'>Propiedades disponibles</h1>

            <div className='cards-pro'>
                <div className='card'>
                    <div className='imagen'>
                        <img src={p1} alt="" />
                    </div>
                    <div className='descripcion'>
                        <h4>$precio</h4>
                        <p>Dirección</p>
                    </div>
                    <div className="atributos">
                        <div className="items">
                            <img src={room} alt="" />
                            <span>3 Hab.</span>
                        </div>
                        <div className="items">
                            <img src={baño} alt="" />
                            <span>2 Baños</span>
                        </div>
                        <div className="items">
                            <img src={area} alt="" />
                            <span>1,820 sqft</span>
                        </div>
                    </div>
                    <button className='btn-cards'>Ver Detalles</button>
                </div>

                <div className='card'>
                    <div className='imagen'>
                        <img src={p2} alt="" />
                    </div>
                    <div className='descripcion'>
                        <h4>$precio</h4>
                        <p>Dirección</p>
                    </div>
                    <div className="atributos">
                        <div className="items">
                            <img src={room} alt="" />
                            <span>3 Hab.</span>
                        </div>
                        <div className="items">
                            <img src={baño} alt="" />
                            <span>2 Baños</span>
                        </div>
                        <div className="items">
                            <img src={area} alt="" />
                            <span>1,820 sqft</span>
                        </div>
                    </div>
                    <button className='btn-cards'>Ver Detalles</button>
                </div>

                <div className='card'>
                    <div className='imagen'>
                        <img src={p3} alt="" />
                    </div>
                    <div className='descripcion'>
                        <h4>$precio</h4>
                        <p>Dirección</p>
                    </div>
                    <div className="atributos">
                        <div className="items">
                            <img src={room} alt="" />
                            <span>3 Hab.</span>
                        </div>
                        <div className="items">
                            <img src={baño} alt="" />
                            <span>2 Baños</span>
                        </div>
                        <div className="items">
                            <img src={area} alt="" />
                            <span>1,820 sqft</span>
                        </div>
                    </div>
                    <button className='btn-cards'>Ver Detalles</button>
                </div>

                <div className='card'>
                    <div className='imagen'>
                        <img src={p4} alt="" />
                    </div>
                    <div className='descripcion'>
                        <h4>$precio</h4>
                        <p>Dirección</p>
                    </div>
                    <div className="atributos">
                        <div className="items">
                            <img src={room} alt="" />
                            <span>3 Hab.</span>
                        </div>
                        <div className="items">
                            <img src={baño} alt="" />
                            <span>2 Baños</span>
                        </div>
                        <div className="items">
                            <img src={area} alt="" />
                            <span>1,820 sqft</span>
                        </div>
                    </div>
                    <button className='btn-cards'>Ver Detalles</button>
                </div>

                <div className='card'>
                    <div className='imagen'>
                        <img src={p5} alt="" />
                    </div>
                    <div className='descripcion'>
                        <h4>$precio</h4>
                        <p>Dirección</p>
                    </div>
                    <div className="atributos">
                        <div className="items">
                            <img src={room} alt="" />
                            <span>3 Hab.</span>
                        </div>
                        <div className="items">
                            <img src={baño} alt="" />
                            <span>2 Baños</span>
                        </div>
                        <div className="items">
                            <img src={area} alt="" />
                            <span>1,820 sqft</span>
                        </div>
                    </div>
                    <button className='btn-cards'>Ver Detalles</button>
                </div>

                <div className='card'>
                    <div className='imagen'>
                        <img src={p6} alt="" />
                    </div>
                    <div className='descripcion'>
                        <h4>$precio</h4>
                        <p>Dirección</p>
                    </div>
                    <div className="atributos">
                        <div className="items">
                            <img src={room} alt="" />
                            <span>3 Hab.</span>
                        </div>
                        <div className="items">
                            <img src={baño} alt="" />
                            <span>2 Baños</span>
                        </div>
                        <div className="items">
                            <img src={area} alt="" />
                            <span>1,820 sqft</span>
                        </div>
                    </div>
                    <button className='btn-cards'>Ver Detalles</button>
                </div>
            </div>
        </div>
    )
}

export default Properties;
