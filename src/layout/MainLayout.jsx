import React from 'react';

import Navigation from '../constant/Navigation.jsx';

import styles from './index.module.scss';

function MainLayout({ children }) {
  return (
    <div className={styles.root}>
      <Navigation />
      <div className={styles.content}> {children} </div>
    </div>
  );
}

export default MainLayout;
