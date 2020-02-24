import React from 'react';
import styles from './CoachText.module.css';

function CoachText (props) {
  const {firstName, lastName, level} = props.user;
  return(
    <div className={styles.coachTextContainer}>
      <div className={styles.coachName}>{firstName + " " + lastName}</div>
      <div className={styles.coachLevel}>{`Lavel ${level}`}</div>
    </div>
  );
}

export default CoachText;