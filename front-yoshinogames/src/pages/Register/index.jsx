import "./Register.css";
import { useState } from "react";


const Register = () => {
  const [count, setCount] = useState(0);

  return (
    <section class="form-register"> 
        <h4>Formulario Registro</h4>
        <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre"></input>
        <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido"></input>
        <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo"></input>
        <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña"></input>
        <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
        <input class="botons" type="submit" value="Registrar"></input>
        <p><a href="#">¿Ya tengo Cuenta?</a></p>
    </section>
    );
}

export default Register;