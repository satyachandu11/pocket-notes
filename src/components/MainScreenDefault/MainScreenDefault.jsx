import React from 'react'
import styles from './MainScreenDefault.module.css'
import bgImage from '../../assets/bgDImage.png';
import LockIcon from '../../assets/LockIcon';

function MainScreenDefault() {
  return (
    <div className={styles.mainScreen}>
      <img src={bgImage} alt="Background Image" /> <br />
      <h1>Pocket Notes</h1>
      <p className={styles.para1}>
        Send and receive messages without keeping your phone online. <br /> Use
        Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <p className={styles.para2}>
        <LockIcon /> end-to-end encrypted
      </p>
    </div>
  );
}

export default MainScreenDefault