import "../css/Detail.css";
import dormitorios from '../assets/dormitorios.png'
import baños from '../assets/baños.png'
import carros from '../assets/carros.png'
import dimensiones from '../assets/dimensiones.png'

function Detalles({ propiedad }) {
  if (!propiedad) {
    return <p>No se encontró la propiedad.</p>;
  }

  return (
    <div className="contenedor-detalles">
      {/* GALERÍA */}
      <div className="galeria">
        <div className="imagen-principal">
          <img src={propiedad.fotografias[0]} alt={propiedad.titulo} />
        </div>

        <div className="otras-imagenes">
          <div className="fila-imagenes">
            <img src={propiedad.fotografias[1]} alt="" />

            <img src={propiedad.fotografias[2]} alt="" />
          </div>

          <div className="fila-imagenes">
            <img src={propiedad.fotografias[3]} alt="" />

            <img src={propiedad.fotografias[4]} alt="" />
          </div>
        </div>
      </div>

      {/* INFORMACIÓN PRINCIPAL */}
      <div className="informacion-principal">
        <div className="datos-inmueble">
          <h1 className="titulo-inmueble">{propiedad.titulo}</h1>

          <p className="direccion-inmueble">{propiedad.direccion}</p>

          <div className="caracteristicas">
            <span className="caracteristica">
                <img src={dormitorios} className="img-caracteristicas" alt="" />
              {propiedad.habitaciones} Dormitorios
            </span>

            <span className="caracteristica">
                <img src={baños} className="img-caracteristicas" alt="" />
                {propiedad.banos} Baños</span>

            <span className="caracteristica">
                <img src={dimensiones} className="img-caracteristicas" alt="" />
                {propiedad.area} m²</span>

            <span className="caracteristica">
                <img src={carros} className="img-caracteristicas" alt="" />
              {propiedad.estacionamientos} Estacionamiento
            </span>
          </div>
        </div>

        <div className="precio-inmueble">
          <span className="texto-precio">PRECIO</span>

          <h2>${Number(propiedad.precio).toLocaleString()}</h2>

          <button className="btn-cita">Programar Cita</button>
        </div>
      </div>

      {/* DESCRIPCIÓN */}
      <div className="seccion-descripcion">
        <h3 className="titulo-seccion">Descripción</h3>

        <p className="texto-descripcion">{propiedad.descripcion}</p>
      </div>

      {/* UBICACIÓN */}
      <div className="seccion-ubicacion">
        <h3 className="titulo-seccion">Ubicación</h3>

        <p className="texto-ubicacion">{propiedad.direccion}</p>

        <p className="texto-ubicacion">
          {propiedad.barrio}, {propiedad.ciudad}
        </p>
      </div>
    </div>
  );
}

export default Detalles;
