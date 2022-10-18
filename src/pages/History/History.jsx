import moment from 'moment/moment';
import React from 'react';

import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import styles2 from '../Historical/styles.module.scss';
import { ReactComponent as EmptySvg } from '../../assets/img/empty.svg';

const History = () => {
  const dispatch = useDispatch();

  const historyData = JSON.parse(localStorage.getItem('history'));
  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {historyData === null ? (
          <span className={styles.empty}>
            History is empty
            <span>
              <EmptySvg />
            </span>
          </span>
        ) : (
          historyData.map((item, index) => {
            return (
              <li key={index} className={styles.list}>
                <span className={styles.time}>
                  {moment(item.dates).format('MMMM Do YYYY h:mm:ss ')}
                </span>
                {' - '} {item.fromCur.value}{' '}
                <span className={styles.from}>{item.fromCur.code}</span> To{' '}
                <span className={styles.to}>{item.toCur.code}</span> = {item.toCur.value.toFixed(4)}
              </li>
            );
          })
        )}
        {historyData === null ? (
          ''
        ) : (
          <div className={styles.btn}>
            <button
              onClick={() => {
                dispatch(clearStorage);
              }}
              className={styles2.button}>
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default History;
