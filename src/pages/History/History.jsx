import moment from 'moment/moment';
import React from 'react';
import { useEffect } from 'react';

import styles from './styles.module.scss';

const History = () => {
  const historyData = JSON.parse(localStorage.getItem('history'));

  useEffect(() => {
    
})
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {historyData.map((item, index) => {
          
          return (
            <li key={index} className={styles.list}>
              <span className={styles.time}>
                {moment(item.dates).format('MMMM Do YYYY h:mm:ss ')}
              </span>
              {' - '} {item.fromCur.value} <span className={styles.from}>{item.fromCur.code}</span>{' '}
              To <span className={styles.to}>{item.toCur.code}</span> ={' '}
              {item.toCur.value.toFixed(4)}
            </li>
          );
        })}
      </div>
    </div>
  );
};
export default History;