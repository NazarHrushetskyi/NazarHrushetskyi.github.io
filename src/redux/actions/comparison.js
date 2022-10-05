import axios from 'axios';
import store from '../store';
import moment from 'moment/moment';

import { COMPARISON_DATA, COMPARISON_DATE, COMPARISON_FROM, COMPARISON_TO } from './actionsType';

export const setDate = (payload) => ({
  type: COMPARISON_DATE,
  payload,
});
export const setCurrencyFrom = (payload) => ({
  type: COMPARISON_FROM,
  payload,
});
export const setCurrencyTo = (payload) => ({
  type: COMPARISON_TO,
  payload,
});

export const fetchDataComp = () => {
  return async (dispatch) => {
    const { comparisonDate, currencyFrom, currencyTo } = store.getState().comparisonReducer;
    try {
      const { data } = await axios.get(
        `https://api.exchangerate.host/timeseries?start_date=${moment(comparisonDate[0]).format(
          'YYYY-MM-DD',
        )}&end_date=${moment(comparisonDate[1]).format('YYYY-MM-DD')}&base=${
          currencyFrom.code
        }&symbols=${currencyTo.code}`,
      );
        
      const res = Object.keys(data.rates).map((key) => [key, Object.values(data.rates[key])[0]]);
      
      dispatch({
        type: COMPARISON_DATA,
        payload: { res, currency: currencyTo.code },
      });
    } catch (error) {
      console.log('API error: ', error);
    }
  };
};
