import React from 'react';

import styles from './styles.module.scss';
import styles2 from '../Historical/styles.module.scss'

import { useSelector, useDispatch } from 'react-redux';

import CurrencyList from '../../components/CurrencyList/CurrencyList';
import Calendar from '../../components/Calendar/index';

import {
  fetchDataComp,
  setDate,
  setCurrencyFrom,
  setCurrencyTo,
} from '../../redux/actions/comparison';

function Comparison() {
  const dispatch = useDispatch();

  const { currencyFrom, currencyTo, result } = useSelector((state) => state.comparisonReducer);

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <Calendar
          range={true}
          onChange={(v) => {
            Array.isArray(v) && dispatch(setDate(v));
          }}
        />
        <div className={styles2.center}>
          <CurrencyList
            name="Base Currency"
            value={currencyFrom}
            onChangeValue={(v) => dispatch(setCurrencyFrom(v))}
          />
          <CurrencyList
            name="Current Currency"
            value={currencyTo}
            onChangeValue={(v) => dispatch(setCurrencyTo(v))}
          />
          <button className={styles2.button} onClick={() => {dispatch(fetchDataComp())}}>
            Send
          </button>
        </div>
        <div className={styles2.result}>
          {result?.res.map((item) => (
            <span className={styles.item} key={item[0]}>
              <span className={styles2.item0}>{`${item[0]}: `}</span>
              <span>{item[1].toFixed(4)}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comparison;
