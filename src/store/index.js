import { categoryReducer, productsReducer } from './reducers';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
});
export default createStore(rootReducer);
