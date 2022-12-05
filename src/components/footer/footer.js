import React from "react";
import './footerstyles.css'
import Logo from '../../assets/Logo.jpg'
import {Link} from 'react-router-dom'

function Footer (){
    return (
        <>
        <footer>
            <img id="logo" src={Logo}/>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por Kadu</span>

            <nav className="footer-navigation">
                <ul className="footer-list">
                <Link style={{textDecoration: 'none'}} to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/contato'}>
                        <li>Contato </li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/fotos'}>
                       <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/comentarios'}>
                          <li>Comentarios</li>
                    </Link>
                </ul>
            </nav>
        </footer>
        </>
    )
}

export default Footer