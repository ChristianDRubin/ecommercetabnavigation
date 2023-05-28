import { PRODUCTS } from '../../data/products';
import { productsTypes } from '../types';

const { FILTER_PRODUCTS, SELECT_PRODUCT } = productsTypes;

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.products.find((product) => product.id === action.productId),
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.category === action.categoryId
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
