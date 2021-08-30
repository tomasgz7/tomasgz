import React from "react";
import "./About.css";

import HTML5 from "../imagenes/html5.jpg";
import CSS from "../imagenes/css.jpg";
import JAVASCRIPT from "../imagenes/javascript.jpg";
import REACTJS from "../imagenes/react.jpg";

const About = () => {
  return (
     
    <section class="habilidades" id="habilidades">
      <div class="about-desc">
        <h3 class="titulo"> Habilidades </h3>
        <div class="contenedor-habilidades">
          <div class="habilidad">
            <div class="thumb">
              <img src={HTML5} alt="html5" />
            </div>
            <div class="descripcion">
              <p class="nombre-proyecyo">HTML5</p>
              <div class="thumb">
              <img src={CSS} alt="css" />
              <p class="nombre-proyecyo">CSS</p>
                </div>
                <div class="thumb">
              <img src={JAVASCRIPT} alt="javascript" />
              <p class="nombre-proyecyo">JAVASCRIPT</p>
                </div>
                <div class="thumb">
              <img src={REACTJS} alt="react" />
              <p class="nombre-proyecyo">REACT</p>
              </div>
            </div>

            
              
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
