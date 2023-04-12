import React, { useState } from 'react';
import styles from './fotosstyles.module.css';
import Photo01 from '../../assets/Foto01.jpg';
import Photo02 from '../../assets/Foto02.jpg';
import Photo03 from '../../assets/Foto03.jpg';
import Photo04 from '../../assets/Foto04.jpg';
import Photo05 from '../../assets/Foto05.jpg';
import Photo06 from '../../assets/Foto06.jpg';
import Photo07 from '../../assets/Foto07.jpg';
import Photo08 from '../../assets/Foto08.jpg';
import Photo09 from '../../assets/Foto09.jpg';
import Photo10 from '../../assets/Foto10.jpg';
import PreviousIcon from '../../assets/left_D.svg';
import NextIcon from '../../assets/right_D.svg';

function Fotos() {
  const [activePhoto, setActivePhoto] = useState(0);

  const photos = [
    { image: Photo01 },
    { image: Photo02 },
    { image: Photo03 },
    { image: Photo04 },
    { image: Photo05 },
    { image: Photo06 },
    { image: Photo07 },
    { image: Photo08 },
    { image: Photo09 },
    { image: Photo10 },
  ];

  function changeSlide(x) {
    if (x === -1 && activePhoto === 0) {
      setActivePhoto(photos.length - 1);
    } else if (x === 1 && activePhoto === photos.length - 1) {
      setActivePhoto(0);
    } else {
      setActivePhoto(activePhoto + x);
    }
  }

  return (
    <>
      <section className={styles.section} aria-label="Movie Photos">
        <span>Fotos</span>
        <div className={styles.carousel}>
          <button onClick={() => changeSlide(-1)} className={styles.buttonLeft}>
            <img
              src={PreviousIcon}
              className={styles.buttonImg}
              alt="Previous Button"
            />
          </button>
          <ul>
            {photos.map((item, index) => (
              <li
                key={index}
                style={
                  index === activePhoto ? { opacity: '1' } : { opacity: '0' }
                }
                className={styles.slide}
              >
                <img
                  className={styles.photo}
                  src={item.image}
                  alt={`Movie${index}`}
                />
              </li>
            ))}
          </ul>
          <button
            onClick={() => changeSlide(+1)}
            className={styles.buttonRight}
          >
            <img
              className={styles.buttonImg}
              src={NextIcon}
              alt="Next Button"
            />
          </button>
        </div>
        <div className={styles.slidesButtonsContainer}>
          <ul>
            {photos.map((item, index) => (
              <li key={item.image}>
                <button
                  onClick={() => setActivePhoto(index)}
                  className={styles.slideButton}
                  style={
                    index === activePhoto
                      ? { backgroundColor: 'white' }
                      : { backgroundColor: 'black' }
                  }
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Fotos;
