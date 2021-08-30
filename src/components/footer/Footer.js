import React from 'react'
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
            <h1>Sobre Mí</h1>
            <p>Soy un desarrollador autodidacta en busca de nuevos
                retos. Estoy dispuesto a seguir aprendiendo e ir mejorando en el trayecto. Me encanta todo lo que es del
                desarrollo de Software.   </p>
            </div>
            <div className="footer-contact">
                <h3> Contactame</h3>
                <p>y vamos a trabajar</p>
            </div>
            <div className="footer-sns">
            <div className="design-by">
                
            </div>
            <div className="sns-links">
                <a href="https://www.linkedin.com/in/tom%C3%A1s-guzman-91203021a/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
                <a href="https://github.com/tomasgz7" target="_blank" rel="noreferrer">
                    <i className="fab fa-github github"></i>
                </a>
            </div>
            </div>

        </footer>
    )
}

export default Footer
