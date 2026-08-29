import '../css/Inventory.css'
function Inventory() {
  return (
    <div className="contenedor-inventory">
        <div className="encabezado-inventory">
            <div className="txt-principal-inventory">
                <h1>Inventario de Propiedades</h1>
                <p>Administre y supervise sus anuncios activos en la red VestaHome</p>
            </div>
            <div className="btn-agregar-propiedad">
                <button className="button-agregar">+ Agregar Nueva Propiedad</button>
            </div>
        </div>
        <div className="contenedor-filtros">
            <select className="filtro-estado">
                <option value="">Todos los estado</option>
            </select>
            <select className="filtro-precio">
                <option value="">Rango de precios</option>
            </select>
        </div>
        <div className="contenedor-propiedades">
            <div className="propiedad">
            </div>
        </div>
    </div>
  );
}

export default Inventory;