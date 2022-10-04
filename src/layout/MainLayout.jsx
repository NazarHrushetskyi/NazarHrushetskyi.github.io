import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../router/routers';

import styles from './index.module.scss';

function MainLayout({children}) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        {routes.map((item, index) =>
          item.path === '' ? null : (
            <div className={styles.navigation}>
              <NavLink to={item.path} key={index} className={styles.nav}>
                {item.icon} <span>{item.name}</span>
              </NavLink>
            </div>
          ),
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default MainLayout;
