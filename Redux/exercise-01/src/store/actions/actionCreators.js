import * as actionTypes from './actionTypes';
import axios from 'axios';

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

export let initProductsDetail = null;

export const setProducts = (products) => {
  initProductsDetail = products;
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products
  }
}

export const initProducts = () => {
  return dispatch => {
    axios.get('https://my-json-server.typicode.com/yatinaggarwal/react-training/products')
      .then(response => {
        dispatch(setProducts(response.data));
      })
      .catch(error => {
        console.log(error);
      })
  }
}