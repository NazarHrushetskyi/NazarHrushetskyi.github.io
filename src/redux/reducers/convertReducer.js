import { CONVERT_AMOUNT, CONVERT_FROM, CONVERT_TO, CONVERT_SWAP, DATA_CONVERT } from '../actions/actionsType';
import { currencyList } from '../../constant/currencyList';

const InitialState = {
  fromCur: currencyList[0],
  toCur: currencyList[1],
  amount: 1,
  result: undefined
};

const convertReducer = (state = InitialState, action) => {
  switch (action.type) {
    case DATA_CONVERT:
      return {...state, result:action.payload};
    case CONVERT_FROM:
      return {...state, fromCur:action.payload};
      case CONVERT_AMOUNT:
        return {...state, amount:action.payload};
    case CONVERT_TO:
      return {...state, toCur:action.payload};
    case CONVERT_SWAP:
      return {...state, fromCur:state.toCur, toCur:state.fromCur};

    default:
      return state;
  }
};

export default convertReducer;
