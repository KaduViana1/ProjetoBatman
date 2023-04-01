import React from 'react';
import styles from './homestyles.module.css';
import Trailer from '../../assets/trailer.mp4';
import Cards from '../../components/cards/index';

function Home() {
  return (
    <>
      <div className={styles.banner}></div>
      <div className={styles.trailerContainer}>
        <div className={styles.content}>
          <video controls className={styles.trailer}>
            <source src={Trailer} />
            Seu navegador não possui suporte para videos.
          </video>
          <div className={styles.sinopse}>
            <p className={styles.description}>
              Após dois anos espreitando as ruas como Batman, Bruce Wayne se
              encontra nas profundezas mais sombrias de Gotham City. Com poucos
              aliados confiáveis, o vigilante solitário se estabelece como a
              personificação da vingança para a população.
            </p>
            <button className={styles.button}>Comprar Ingresso</button>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default Home;
