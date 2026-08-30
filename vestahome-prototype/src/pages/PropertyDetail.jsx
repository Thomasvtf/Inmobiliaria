import '../css/Detail.css'
function Detalles({ propiedad }) {

    if (!propiedad) {
        return <p>No se encontró la propiedad.</p>;
    }

    return (
        <div className='contenedor-detalles'>

            <div className="imagen">
                <div  className='imagen-principal'>
                    <img
                        src={propiedad.fotografias[0]}
                    
                        
                    />
                </div>
                <div className='otras-imagenes'>
                    <div>
                        <img
                            src={propiedad.fotografias[1]}
                        />
                        <img
                            src={propiedad.fotografias[2]}
                            />
                    </div>
                    <div>
                        <img
                            src={propiedad.fotografias[3]}
                        />
                        <img
                            src={propiedad.fotografias[4]}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h1>{propiedad.titulo}</h1>
                <p>{propiedad.direccion}</p>
            </div>


            <h2>
                ${Number(propiedad.precio).toLocaleString()}
            </h2>

            <div>

                <span>
                    {propiedad.habitaciones} Habitaciones
                </span>

                <span>
                    {propiedad.banos} Baños
                </span>

                <span>
                    {propiedad.area} m²
                </span>

                <span>
                    {propiedad.estacionamientos} Estacionamientos
                </span>

            </div>

            <h3>Descripción</h3>

            <p>
                {propiedad.descripcion}
            </p>

        </div>
    );
}

export default Detalles; 