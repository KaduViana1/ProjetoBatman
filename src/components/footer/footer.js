import React from 'react';
import styles from './footerstyles.module.css';
import Logo from '../../assets/Logo.jpg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img className={styles.logo} alt="logo" src={Logo} />
        <span>Todos os direitos reservados ©</span>
        <span>Desenvolvido por Kadu</span>

        <nav className={styles.footerNavigation}>
          <ul className={styles.footerList}>
            <Link to={'/'}>
              <li>Home</li>
            </Link>
            <Link to={'/contato'}>
              <li>Contato </li>
            </Link>
            <Link to={'/fotos'}>
              <li>Fotos</li>
            </Link>
            <Link to={'/comentarios'}>
              <li>Comentarios</li>
            </Link>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
