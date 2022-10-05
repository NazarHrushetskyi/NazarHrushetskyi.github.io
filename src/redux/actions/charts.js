import axios from 'axios';
import store from '../store';
import moment from 'moment/moment';

import { CHARTS_DATA, CHARTS_DATE, CHARTS_FROM, CHARTS_TO} from './actionsType';

export const setDate = (payload) => ({
  type: CHARTS_DATE,
  payload,
});
export const setCurrencyFrom = (payload) => ({
  type: CHARTS_FROM,
  payload,
});
export const setCurrencyTo = (payload) => ({
  type: CHARTS_TO,
  payload,
});

export const fetchCharts = () => {
  return async (dispatch) => {
    const { chartsDate, currencyFrom, currencyTo } = store.getState().chartsReducer;
    try {
      const { data } = await axios.get(
        `https://api.exchangerate.host/timeseries?start_date=${moment(chartsDate[0]).format(
          'YYYY-MM-DD',
        )}&end_date=${moment(chartsDate[1]).format('YYYY-MM-DD')}&base=${
          currencyFrom.code
        }&symbols=${currencyTo.code}`,
      );

      const result = Object.keys(data.rates).map((key) => [key, Object.values(data.rates[key])[0]]);
        
      dispatch({
        type: CHARTS_DATA,
        payload: { result, currency: currencyTo.code },
      });
    } catch (error) {
      console.log('API error: ', error);
    }
  };
};
