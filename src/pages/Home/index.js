import React from 'react';
import styles from './homestyles.module.css';
import Cards from '../../components/cards/index';

function Home() {
  return (
    <>
      <div className={styles.banner}></div>
      <div className={styles.trailerContainer}>
        <div className={styles.content}>
          <iframe
            className={styles.trailer}
            src="https://www.youtube.com/embed/XmazCGOqO2g"
            title="BATMAN  | Trailer 2 Oficial Legendado | DC FanDome 2021"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
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
