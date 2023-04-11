import React from 'react';
import { Link } from 'react-router-dom';
import styles from './headerstyles.module.css';
import Logo from '../../assets/Logo.jpg';

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} alt="logo" src={Logo} />
      <nav>
        <ul>
          <Link to={'/'} className="router-a">
            <li>Home</li>
          </Link>
          <Link to={'/contato'} className="router-a">
            <li>Contato </li>
          </Link>
          <Link to={'/fotos'} className="router-a">
            <li>Fotos</li>
          </Link>
          <Link to={'/comentarios'} className="router-a">
            <li>Comentarios</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
