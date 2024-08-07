import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [count, setCount] = useState(0);

  return (
    <div class="contenedor">
        <div class="contenedorcentrado">
            <div class="login">
                <form class="loginform">
                    <label for="usuario">Usuario</label>
                    <input class="usuario" type="text" name="usuario" placeholder="Usuario" required></input>

                    <label for="password">Contraseña</label>
                    <input class="password" type="password" placeholder="Contraseña" name="password" required></input>

                    <button  class="button button-login" type="submit" title="Ingresar" name="Ingresar">Login</button>
                </form>
            </div>
            <div class="derecho">
                <div class="titulo">
                    Bienvenidos a YoshinoGames
                </div>
                <hr>
                <div class="pie-form">
                    <a href="#">¿Perdiste tu contraseña?</a>
                    <a href="#">¿No tienes Cuenta? Registrate</a>
                    <hr>
                        <a href="#">« Volver</a>
                    </hr>
                </div>
                </hr>
            </div>
        </div>
    </div>
  );
}

export default Login;