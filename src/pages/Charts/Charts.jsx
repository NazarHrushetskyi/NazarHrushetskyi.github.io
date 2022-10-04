import React from 'react';

import styles from './styles.module.scss';
import styles2 from '../Historical/styles.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import CurrencyList from '../../components/CurrencyList/CurrencyList';
import Calendar from '../../components/Calendar/index';
import Chart from '../../components/Chart/chart';

import { fetchCharts, setDate, setCurrencyFrom, setCurrencyTo } from '../../redux/actions/charts';

const Charts = () => {
  const dispatch = useDispatch();

  const { currencyFrom, currencyTo, response } = useSelector((state) => state.chartsReducer);

  return (
    <div className={styles2.content}>
      <div className={styles2.container}>
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
          <button
            className={styles2.button}
            onClick={() => {
              dispatch(fetchCharts());
            }}>
            Send
          </button>
        </div>
        <div className={styles.result}>
          
          {response && (
            <Chart
              curCode={response.currency}
              resCh={response.result.map((item) => ({
                date: moment(item[0]).format('MMM Do '),
                value: item[1].toFixed(4),
              }))}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Charts;
