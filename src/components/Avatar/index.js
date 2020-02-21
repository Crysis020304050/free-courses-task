import React from 'react';
import styles from './styles.module.css';

function Avatar (props) {
  return (
    <div className={styles.avatarContainer}>
      <img src={props.src} alt="Avatar"/>
    </div>
  );
}

export default Avatar;