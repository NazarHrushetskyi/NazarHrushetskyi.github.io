import { currencyList } from '../../constant/currencyList';
import { HISTORICAL_DATA, HISTORICAL_CURR, HISTORICAL_DATE } from '../actions/actionsType';

const InitialState = {
  currency: currencyList[0],
  date: new Date(),
  result: undefined,
};

const historicalReducer = (state = InitialState, action) => {
  switch (action.type) {
    case HISTORICAL_DATE:
      return { ...state, date: action.payload };
    case HISTORICAL_CURR:
      return { ...state, currency: action.payload };
    case HISTORICAL_DATA:
      return { ...state, result: action.payload };

    default:
      return state;
  }
};

export default historicalReducer;
