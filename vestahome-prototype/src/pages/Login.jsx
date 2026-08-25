import { useState } from 'react'
import iconovestahome from "../assets/iconovestahome.png";
function Login({siguiente}) {

  //Función botón continuar
  const continuar = (e) => {
    e.preventDefault();

    if(siguiente){
      siguiente();
    }
  }

  return (
    <div className="contenedor-login">
        <div className="columna-izquierda">
            <div className="contenedor-izquierda">
                <div className="logo-login">
                    <img className="img-logo-login" src={iconovestahome} alt="" />
                    <h3 className="txt-logo">VestaHome</h3>
                </div>
                <div className="text-content">
                <h3 className="titulo-login">Eleve su Experiencia de Vida.</h3>
                <p className="text-login">Acceda a las propiedades más exclusivas del
                  mundo con el portal inmobiliario profesional de
                  VestaHome.</p>
                </div>
            </div>
        </div>
      <div className="columna-derecha">
        <div className="form">
          <form onSubmit = {continuar} noValidate>
            <div className="txt-derecha">
              <h2>Bienvenido de nuevo</h2>
              <p>
                Por favor, ingrese sus credenciales para acceder a sus propiedades
              </p>
            </div>
            <div className="grupo-login">
              <label className="label-login">Correo Electrónico</label>
              <input type="email" placeholder="nombre@empresa.com" className="input-login"/>
            </div>

            <div className="grupo-login">
              <label className="label-login">Contraseña</label>
              <input type="password" placeholder="••••••••" className="input-login"/>
            </div>

            <div className="btn-login">
              <button className="button-login">Iniciar Sesión</button>
            </div>
            <div className="text-form">
              <p className="txt-form">
                ¿No tiene cuenta? <a href="#" className="link-login">Registrese ahora</a>
              </p>
              <a href="#" className="link-login">¿Olvidó du contraseña?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
