import { useState } from "react"
import '../css/Register.css'

function Register( {anterior, siguiente}){

    //Función botón continuar
    const continuar = (e) => {
    e.preventDefault();

        if(siguiente){
          siguiente();
        }
    }

    return(
        <div className="contenedor-register">
            <div className="card-form">
                <form onSubmit = {continuar} noValidate>
                    <div className="txt-register">
                        <h2>Únete a VestaHome</h2>
                        <p>
                            Entra al futuro de la gestión inmobiliaria premium.
                        </p>
                    </div>
                    <div className="grupo-register">
                        <label className="label-register">Nombre Completo</label>
                        <input type="text" placeholder="Alejandro Sterling" className="input-register"/>
                    </div>
                    <div className="grupo-register">
                        <label className="label-register">Correo electronico</label>
                        <input type="text" placeholder="alex@vestahome.com" className="input-register"/>
                    </div>
                    <div className="grupo-register">
                        <label className="label-register">Número de Teléfono</label>
                        <input type="text" placeholder="+57 300 000 0000" className="input-register"/>
                    </div>
                    <div className="grupo-register">
                        <label className="label-register">Contraseña</label>
                        <input type="text" placeholder="••••••••" className="input-register"/>
                    </div>
                    <div className="grupo-register">
                        <label className="label-register">Identidad Principal</label>
                        <select name="" id="" className="input-register">
                            <option value="Comprador">Comprador</option>
                            <option value="Inquilino">Inquilino</option>
                        </select>
                    </div>
                    <div className="grupo-register">
                        <div className="check">
                            <input type="checkbox" className="checkbox"/>
                            <label className="label-register">Acepto los Términos de Servicio y reconozco la Política de privavcidad</label>
                        </div>
                    </div>
                    <div className="btn-register">
                        <button className="button-register">Crear Cuenta →</button>
                    </div>
                    <div className="text-form">
                        <p>
                            ¿Ya tienes cuenta? <a className="link-register" onClick={anterior}>Inicia sesión aquí</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;