function Detalles({inmobiliaria}){
return (
        <div>
            {(inmobiliaria.inventario || []).map((propiedad,index) =>(
                <div key={index}>

                        <div className="imagen">
                            <img
                                src={propiedad.fotografias}
                            />
                        </div>
                        <h1>{propiedad.titulo}</h1>
            
                        <p>{propiedad.direccion}</p>
            
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
            ))}
        </div>
            

    );
};

export default Detalles;