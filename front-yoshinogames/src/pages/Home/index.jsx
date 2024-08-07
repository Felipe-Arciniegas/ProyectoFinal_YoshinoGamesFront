import "./Home.css";
import HomeYoshinoGames from "../../assets/logos/HomeYoshinoGames.gif";
import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div class='home1'>
        <h1>Welcome to Yoshino Games!!</h1>
        <div class="logo logohome">
            <a>
                <img src={HomeYoshinoGames} alt="Yoshino Games Logo"/>
            </a>
        </div>
        <div class='home2'>
            <div class="featured-games box-elements">
                <h2>Juegos Destacados</h2>
                <div class="game box-elemnts2">
                  <img src={HomeYoshinoGames} alt="Game1"/>
                  <h3>Rust</h3>
                  <p>El Genial juego de Supervivencia en una isla apocaliptica ya esta aqui!!</p>
                </div>
                <div class="game box-elemnts2">
                  <img src={HomeYoshinoGames} alt="Game2"/>
                  <h3>Mortal Kombat 1</h3>
                  <p>Los peleadores ya llegaron con la ultima entrega de la saga Mortal Kombat!!</p>
                </div>
                <div class="game box-element2">
                  <img src={HomeYoshinoGames} alt="Game3"/>
                  <h3>Need For Speed: Unbound</h3>
                  <p>Te gusta la velocidad? Ya llego a nuestra Store uno de los juegos mas freneticos de la saga de carreras</p>
                </div>
            </div>
        </div>
      </div>
  );
};

export default Home;