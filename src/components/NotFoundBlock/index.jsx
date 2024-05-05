import React from 'react';
import styles from './NotFoundBlock.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing found
      </h1>
      <p>unfortunately this page is missing</p>
    </div>
  );
};

export default NotFoundBlock;
