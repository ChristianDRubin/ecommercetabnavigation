import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cartReducer, categoryReducer, orderReducer, productsReducer } from './reducers';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: orderReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));
