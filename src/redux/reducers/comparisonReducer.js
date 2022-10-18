import { currencyList } from '../../constant/currencyList';
import {
  COMPARISON_DATA,
  COMPARISON_DATE,
  COMPARISON_FROM,
  COMPARISON_TO,
} from '../actions/actionsType';

const InitialState = {
  currencyFrom: currencyList[1],
  currencyTo: currencyList[0],
  comparisonDate: [new Date(), new Date()],
  result: undefined,
};

const comparisonReducer = (state = InitialState, action) => {
  switch (action.type) {
    case COMPARISON_DATE:
      return { ...state, comparisonDate: action.payload };
    case COMPARISON_FROM:
      return { ...state, currencyFrom: action.payload };
    case COMPARISON_TO:
      return { ...state, currencyTo: action.payload };
    case COMPARISON_DATA:
      return { ...state, result: action.payload };

    default:
      return state;
  }
};

export default comparisonReducer;
