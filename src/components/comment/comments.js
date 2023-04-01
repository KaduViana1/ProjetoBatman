import React from 'react';
import styles from './comments.module.css';
import Avatar from '../../assets/Avatar.jpg';

function Comments({ firstName, lastName, comment }) {
  return (
    <div className={styles.container}>
      <img src={Avatar} alt="User Avatar" />
      <div className={styles.comment}>
        <span className={styles.name}>{firstName + ' ' + lastName}</span>
        <p className={styles.text}>{comment}</p>
      </div>
    </div>
  );
}

export default Comments;
