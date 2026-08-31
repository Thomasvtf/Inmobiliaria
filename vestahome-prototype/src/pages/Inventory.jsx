import { useState } from 'react';
import '../css/Inventory.css'
import Modal from '../components/Modal_inventory.jsx'
import casa from '../assets/casa.png'
import gps from '../assets/gps.png'
import escuadra from '../assets/escuadra.png'
import doc from '../assets/doc.png'
import img from '../assets/img.png'
import lapiz from '../assets/lapiz.png'
import caneca from '../assets/caneca.png'

function Inventory({ inmobiliaria, setInmobiliaria }) {
    
    // Controlar el Modal
    const [modalAbierto, setModalAbierto] = useState(false);

    // Estados para los campos temporales del modal
    const [titulo, setTitulo] = useState("");
    const [tipo, setTipo] = useState("");
    const [precio, setPrecio] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [barrio, setBarrio] = useState("");
    const [habitaciones, setHabitaciones] = useState("");
    const [banos, setBanos] = useState("");
    const [area, setArea] = useState("");
    const [estacionamientos, setEstacionamientos] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fotografias, setFotografias] = useState([]);

    const manejarFotografias = (e) => {
        const archivos = Array.from(e.target.files);

        if (archivos.length > 5) {
            alert("Solo puedes seleccionar máximo 5 imágenes.");
            return;
        }

        const imagenes = archivos.map((archivo) =>
            URL.createObjectURL(archivo)
        );

        setFotografias(imagenes);
    };

    // Estados de error separados para el formulario general y para el modal
    const [errorModal, setErrorModal] = useState({});


     const guardarPropiedad = (e) => {
        e.preventDefault();

        // Objeto de experiencia laboral válido
            const propiedad = {
                titulo: titulo.trim(),
                tipo: tipo.trim(),
                precio: precio.trim(),
                direccion: direccion.trim(),
                ciudad: ciudad.trim(),
                barrio: barrio.trim(),
                habitaciones: habitaciones.trim(),
                banos: banos.trim(),
                area: area.trim(),
                estacionamientos: estacionamientos.trim(),
                descripcion: descripcion.trim(),
                fotografias: fotografias
            };

            // Si estamos editando
            if (propiedadEditando !== null) {

                const inventarioActualizado = [
                    ...inmobiliaria.inventario
                ];

                inventarioActualizado[propiedadEditando] = propiedad;

                setInmobiliaria({
                    ...inmobiliaria,
                    inventario: inventarioActualizado
                });

            } else {

                // Si estamos registrando
                setInmobiliaria({
                    ...inmobiliaria,
                    inventario: [
                        ...(inmobiliaria.inventario || []),
                        propiedad
                    ]
                });
            }

        
        // Limpieza de campos del modal
        setTitulo("");
        setTipo("");
        setPrecio("");
        setDireccion("");
        setCiudad("");
        setBarrio("");
        setHabitaciones("");
        setBanos("");
        setArea("");
        setEstacionamientos("");
        setDescripcion("");
        setFotografias([]);

        setErrorModal({});
        setPropiedadEditando(null);

        setModalAbierto(false);
    };

    //Eliminar propiedad
    const eliminarPropiedad = (index) => {
        const propiedadesActualizadas = (inmobiliaria.inventario || []).filter(
            (_, i) => i !== index
        );

        setInmobiliaria({
            ...inmobiliaria,
            inventario: propiedadesActualizadas
        });
    };

    //Editar propiedad
    const [propiedadEditando, setPropiedadEditando] = useState(null);
    
    const editarPropiedad = (index) => {
        const propiedad = inmobiliaria.inventario[index];

            setPropiedadEditando(index);

            setTitulo(propiedad.titulo);
            setTipo(propiedad.tipo);
            setPrecio(propiedad.precio);
            setDireccion(propiedad.direccion);
            setCiudad(propiedad.ciudad);
            setBarrio(propiedad.barrio);
            setHabitaciones(propiedad.habitaciones);
            setBanos(propiedad.banos);
            setArea(propiedad.area);
            setEstacionamientos(propiedad.estacionamientos);
            setDescripcion(propiedad.descripcion);
            setFotografias(propiedad.fotografias);

            setModalAbierto(true);
    };

    // 2. FUNCIONES AUXILIARES PARA LIMPIAR ERRORES EN TIEMPO REAL AL ESCRIBIR
    const handleInputChangeModal = (campo, valor, setCampoState) => {
        setCampoState(valor);
        if (errorModal[campo]) {
            setErrorModal({ ...errorModal, [campo]: "" });
        }
    };

    return(
        <div className="contenedor-inventory">
            <div className="encabezado-inventory">
                <div className="txt-principal-inventory">
                    <h1>Inventario de Propiedades</h1>
                    <p>Administre y supervise sus anuncios activos en la red VestaHome</p>
                </div>
                <div className="btn-agregar-propiedad">
                    <button
                        className="button-agregar"
                        onClick={() => {
                            setPropiedadEditando(null);

                            setTitulo("");
                            setTipo("");
                            setPrecio("");
                            setDireccion("");
                            setCiudad("");
                            setBarrio("");
                            setHabitaciones("");
                            setBanos("");
                            setArea("");
                            setEstacionamientos("");
                            setDescripcion("");
                            setFotografias([]);

                            setModalAbierto(true);
                        }}
                    >
                        + Agregar Nueva Propiedad
                    </button>
                </div>
            </div>  
            <div className="contenedor-propiedades">
                <table className="tabla-propiedades">
                    <thead>
                        <tr>
                            <th className="titulo-tabla">PROPIEDAD</th>
                            <th className="titulo-tabla">PRECIO</th>
                            <th className="titulo-tabla">ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                             {(inmobiliaria.inventario || []).map((propiedad, index) => (
                                <tr key={index} className="fila-propiedad">

                                    {/* PROPIEDAD */}
                                    <td className="info-propiedad">

                                        {propiedad.fotografias ? (
                                            <img
                                                src={propiedad.fotografias[0]}
                                                alt={propiedad.titulo}
                                                className="imagen-propiedad"
                                            />
                                        ) : (
                                            <div className="imagen-vacia">
                                                Sin foto
                                            </div>
                                        )}

                                        <div className="datos-propiedad">
                                            <strong>{propiedad.titulo}</strong>
                                            <span>{propiedad.direccion}</span>
                                        </div>

                                    </td>

                                    {/* PRECIO */}
                                    <td className="precio-propiedad">
                                        ${Number(propiedad.precio).toLocaleString()}
                                    </td>

                                    {/* ACCIONES */}
                                    <td className="acciones-propiedad">

                                        <button
                                            type="button"
                                            className="btn-accion"
                                            title="Editar"
                                            onClick={() => editarPropiedad(index)}
                                        >
                                            <img className='img-accion' src= {lapiz} alt="" />
                                        </button>

                                        <button
                                            type="button"
                                            className="btn-accion"
                                            title="Eliminar"
                                            onClick={() => eliminarPropiedad(index)}
                                        >
                                            <img className='img-accion' src= {caneca}/>
                                        </button>

                                    </td>

                                </tr>
                            ))}
                    </tbody>
                </table>    
            </div>

            {/* Modal */}
            <Modal 
                isOpen={modalAbierto} 
                onClose={() => {
                    setModalAbierto(false);                    
                }} 
            >
                <div className="contenedor-modal">
                    <div className="txt-modal">
                        <h3>
                            {propiedadEditando !== null
                                ? "Editar Propiedad"
                                : "Añadir Nueva Propiedad"
                            }
                        </h3>
                        <p>Complete los detalles para listar una nueva propiedad en VestaHome</p>
                    </div>
                    <form onSubmit={guardarPropiedad} noValidate className="formulario-modal">

                    {/*Conceptos Básicos*/}
                    <div className='secciones'>
                        <div className="subtitulos">
                            <img src={casa} alt="icono" className="icono-subtitulo"/>
                            <h4>Conceptos Básicos</h4>
                        </div>
                        <div className="grupo">
                            <label>Titulo de la Propiedad</label>
                            <input 
                                type="text" 
                                placeholder="Ej. Lujoso Penthouse con Vista al Mar" 
                                className="input"
                                value={titulo} 
                                onChange={(e) => handleInputChangeModal("titulo", e.target.value, setTitulo)}
                            />
                        </div>

                        <div className='grupo-conceptos'>
                            <div className="grupo">
                                <label>Tipo de Propiedad</label>
                                <select 
                                    value={tipo}
                                    onChange={(e) => handleInputChangeModal("tipo", e.target.value, setTipo)}
                                >
                                    <option value="">Seleccione un tipo</option>
                                    <option value="casa">Casa</option>
                                    <option value="apartamento">Apartamento</option>
                                    <option value="local">Local</option>
                                </select>
                            </div>

                            <div className="grupo">
                                <label>Precio de Lista (USD)</label>
                                <input 
                                    type="number" 
                                    placeholder="0.00"  
                                    className="precio"
                                    value={precio}
                                    onChange={(e) => handleInputChangeModal("precio", e.target.value, setPrecio)}
                                ></input>
                            </div>
                        </div>
                    </div>

                        {/*Ubicación*/}
                    <div className='secciones'>
                        <div className="subtitulos">
                            <img src={gps} alt="icono" className="icono-subtitulo"/>
                            <h4>Ubicación</h4>
                        </div>

                        <div className="grupo">
                            <label>Dirección Completa</label>
                            <textarea  
                                placeholder="Dirección completa de la propiedad" 
                                className="input"
                                value={direccion}
                                onChange={(e) => handleInputChangeModal("direccion", e.target.value, setDireccion)}
                            />
                        </div>

                        <div className='grupo-conceptos'>
                            <div className="grupo">
                                <label>Ciudad</label>
                                <input  
                                    placeholder="Ej. Miami" 
                                    className="precio"
                                    value={ciudad}
                                    onChange={(e) => handleInputChangeModal("ciudad", e.target.value, setCiudad)}
                                />
                            </div>

                            <div className="grupo">
                                <label>Barrio/Vecindario</label>
                                <input  
                                    placeholder="Ej. Birckell" 
                                    className="precio"
                                    value={barrio}
                                    onChange={(e) => handleInputChangeModal("barrio", e.target.value, setBarrio)}
                                />
                            </div>
                        </div>
                    </div>

                        {/*Especificaciones*/}
                    <div className='secciones'>
                       <div className="subtitulos">
                            <img src={escuadra} alt="icono" className="icono-subtitulo"/>
                            <h4>Especificaciones</h4>
                        </div>
                        <div className='grupo-especificaciones'>
                            <div className="grupo">
                                <label>Habitaciones</label>
                                <input  
                                    placeholder="0" 
                                    className="input"
                                    value={habitaciones}
                                    onChange={(e) => handleInputChangeModal("habitaciones", e.target.value, setHabitaciones)}
                                />
                            </div>

                            <div className="grupo">
                                <label>Baños</label>
                                <input  
                                    placeholder="0" 
                                    className="input"
                                    value={banos}
                                    onChange={(e) => handleInputChangeModal("banos", e.target.value, setBanos)}
                                />
                            </div>

                            <div className="grupo">
                                <label>Área total (m²)</label>
                                <input 
                                    placeholder="0" 
                                    className="input"
                                    value={area}
                                    onChange={(e) => handleInputChangeModal("area", e.target.value, setArea)}
                                />
                            </div>

                            <div className="grupo">
                                <label>Estacionamientos</label>
                                <input  
                                    placeholder="0" 
                                    className="input"
                                    value={estacionamientos}
                                    onChange={(e) => handleInputChangeModal("estacionamientos", e.target.value, setEstacionamientos)}
                                />
                            </div>
                        </div>
                    </div>
                    
                        {/*Descripción*/}
                    <div className='secciones'>
                        <div className="subtitulos">
                            <img src={doc} alt="icono" className="icono-subtitulo"/>
                            <h4>Conceptos Básicos</h4>
                        </div>
                        <div className="grupo">
                            <label>Descripción de la Propiedad</label>
                            <textarea  
                                placeholder="Destaque las características únicas, amenidades y beneficios de la propiedad..." 
                                value={descripcion}
                                onChange={(e) => handleInputChangeModal("descripcion", e.target.value, setDescripcion)}
                            />
                        </div>
                    </div>

                        {/*Multimedia*/}
                    <div className='secciones'>
                        <div className="subtitulos">
                            <img src={img} alt="icono" className="icono-subtitulo"/>
                            <h4>Multimedia</h4>
                        </div>

                        <div className="grupo">
                           <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="input"
                            onChange={manejarFotografias}
                                />
                        {fotografias.length > 0 && (
                            <div style={{
                                display: "flex",
                                gap: "10px",
                                marginTop: "15px",
                                flexWrap: "wrap"
                            }}>
                                {fotografias.map((foto, index) => (
                                    <div key={index}>
                                        <img
                                            src={foto}
                                            alt={`Foto ${index + 1}`}
                                            style={{
                                                width: "100px",
                                                height: "80px",
                                                objectFit: "cover",
                                                borderRadius: "8px"
                                            }}
                                        />
                                        <p style={{ margin: "3px 0", textAlign: "center" }}>
                                            Foto {index + 1}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                        </div>
                    </div>

                        <div className="botones" style={{ marginTop: "15px" }}>
                            <button className="button-cancelar" type=''>Cancelar</button>
                            <button className="button" type="submit">
                                {propiedadEditando !== null
                                    ? "Guardar Cambios"
                                    : "Registrar Propiedad"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>

  );
}

export default Inventory;