import { combineReducers } from 'redux';
import stock from './stock';
import cart from './cart';

const reducers = combineReducers({
  cart,
  stock,
});

export default reducers;
