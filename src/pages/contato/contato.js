import React from 'react';
import styles from './contatostyles.module.css';
import InstagramIcon from '../../assets/instagram.svg';
import FacebookIcon from '../../assets/facebook.svg';
import LinkedinIcon from '../../assets/linkedin.svg';

function Contato() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <span>Fale Conosco</span>
          <form action="#">
            <input type="text" placeholder="Nome Completo" />
            <input type="email" placeholder="Email" />
            <textarea
              className={styles.textarea}
              placeholder="Mensagem"
            ></textarea>
            <button className={styles.button} type="submit">
              Fale Conosco
            </button>
          </form>
          <div className={styles.iconsContainer}>
            <img className={styles.image} src={LinkedinIcon} alt="LinkedIn" />
            <img className={styles.image} src={FacebookIcon} alt="Facebook" />
            <img className={styles.image} src={InstagramIcon} alt="Instagram" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Contato;
