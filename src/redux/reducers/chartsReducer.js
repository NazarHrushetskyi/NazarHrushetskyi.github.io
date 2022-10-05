import { currencyList } from '../../constant/currencyList';
import {
  CHARTS_DATA,
  CHARTS_DATE,
  CHARTS_FROM,
  CHARTS_TO,
} from '../actions/actionsType';

const InitialState = {
  currencyFrom: currencyList[1],
  currencyTo: currencyList[0],
  chartsDate: [new Date(), new Date()],
  response: undefined,
};

const chartsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case CHARTS_DATE:
      return { ...state, chartsDate: action.payload };
    case CHARTS_FROM:
      return { ...state, currencyFrom: action.payload };
    case CHARTS_TO:
      return { ...state, currencyTo: action.payload };
    case CHARTS_DATA:
      return { ...state, response: action.payload };

    default:
      return state;
  }
};

export default chartsReducer;
