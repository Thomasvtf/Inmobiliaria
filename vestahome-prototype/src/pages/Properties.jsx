import { useState } from 'react';
import '../css/Properties.css'
import room from '../assets/room.png'
import baño from '../assets/baño.png'
import area from '../assets/area.png'

function Properties({ inmobiliaria, siguiente }){
    return(
        <div className='cont-properties'>
                
            <h1 className='titulo-pro'>Propiedades disponibles</h1>

            <div className="cards-pro">

                {(inmobiliaria.inventario ||[]).map((propiedad, index) => (

                    <div className="card" key={index}>

                        <div className="imagen">
                            <img
                                src={propiedad.fotografias[0]}
                                alt={propiedad.titulo}
                            />
                        </div>

                        <div className="descripcion">
                            <h4>
                                ${Number(propiedad.precio).toLocaleString()}
                            </h4>

                            <p>
                                {propiedad.direccion}
                            </p>
                        </div>

                        <div className="atributos">

                            <div className="items">
                                <img src={room} alt="" />
                                <span>
                                    {propiedad.habitaciones} Hab.
                                </span>
                            </div>

                            <div className="items">
                                <img src={baño} alt="" />
                                <span>
                                    {propiedad.banos} Baños
                                </span>
                            </div>

                            <div className="items">
                                <img src={area} alt="" />
                                <span>
                                    {propiedad.area} sqft
                                </span>
                            </div>

                        </div>

                        <button
                            className="btn-cards"
                            onClick={() => siguiente(propiedad)}
                        >
                            Ver Detalles
                        </button>

                    </div>

                ))}

            </div>
        </div>
    )
}

export default Properties;
