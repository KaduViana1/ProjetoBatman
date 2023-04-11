import React from 'react';
import styles from './contatostyles.module.css';
import InstagramIcon from '../../assets/instagram.svg';
import GitHubIcon from '../../assets/github.svg';
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
            <a
              href="https://www.linkedin.com/in/carlos-eduardo-viana-812128272/"
              target="_blank"
            >
              <img className={styles.image} src={LinkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/KaduViana1" target="_blank">
              <img className={styles.image} src={GitHubIcon} alt="Github" />
            </a>
            <a href="https://www.instagram.com/kaduv96/" target="_blank">
              <img
                className={styles.image}
                src={InstagramIcon}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contato;
