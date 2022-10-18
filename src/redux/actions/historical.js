import moment from 'moment/moment';
import axios from 'axios';
import store from '../store';

import { HISTORICAL_DATA, HISTORICAL_DATE, HISTORICAL_CURR } from './actionsType';

export const setDate = (payload) => ({
  type: HISTORICAL_DATE,
  payload,
});
export const setCurrency = (payload) => ({
  type: HISTORICAL_CURR,
  payload,
});

export const fetchData = () => {
  return async (dispatch) => {
    const { currency, date } = store.getState().historicalReducer;
    try {
      const { data } = await axios.get(
        `https://api.exchangerate.host/${moment(date).format('YYYY-MM-DD')}?base=${currency.code}`,
      );

      const rates = Object.keys(data.rates).map((key) => [key, data.rates[key]]);

      dispatch({
        type: HISTORICAL_DATA,
        payload: { base: data.base, rates },
      });
    } catch (error) {
      console.log('API error:', error);
    }
  };
};
