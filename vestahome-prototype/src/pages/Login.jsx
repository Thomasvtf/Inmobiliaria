import iconovestahome from "../assets/iconovestahome.png";
function Login() {
  return (
    <div className="contenedor-login">
        <div className="columna-izquierda">
            <div className="contenedor-izquierda">
                <div className="logo-login">
                    <img className="img-logo-login" src={iconovestahome} alt="" />
                    <h3 className="txt-logo">VestaHome</h3>
                </div>
                <div className="text-content">
                <h3>Eleve su Experiencia de Vida.</h3>
                <p>Acceda a las propiedades más exclusivas...</p>
                </div>
            </div>
        </div>
      <div className="columna-derecha">
        <div className="form">
          <form noValidate>
            <h2>Bienvenido de nuevo</h2>
            <p>
              Por favor, ingrese sus credenciales para acceder a sus propiedades
            </p>
            <div className="grupo">
              <label>correo Electrónico</label>
              <input type="email" placeholder="nombre@empresa.com" />
            </div>

            <div className="grupo">
              <label>Contraseña</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <button>Iniciar Sesión</button>

            <p>
              ¿No tiene cuenta? <a href="#">Registrese ahora</a>
            </p>
            <a href="#">¿Olvidó du contraseña?</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
