import * as actionTypes from './actionTypes';

export const searchForProducts = (searchInputRef) => {
  return {
    type: actionTypes.SEARCH_FOR_PRODUCTS,
    inputElRef: searchInputRef
  };
};

export const addProductInCart = (productId) => {
  return {
    type: actionTypes.ADD_PRODUCT_IN_CART,
    productId: productId
  };
};