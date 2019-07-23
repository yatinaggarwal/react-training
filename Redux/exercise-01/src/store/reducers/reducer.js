import * as actionTypes from '../actions/actionTypes';
import { initProductsDetail } from '../actions/actionCreators';
// import productsData from '../../data/productsData.json';

const getCartDetails = () => {
  let cartItems = localStorage.cartItems ? JSON.parse(localStorage.cartItems) : {};
  return cartItems;
}

const addToCartClickHandler = (productId) => {
  let cartDetails = getCartDetails();
  if(!cartDetails[productId]) {
    cartDetails[productId] = 0;
  }
  cartDetails[productId] += 1;
  localStorage.setItem('cartItems', JSON.stringify(cartDetails));
}

const onSearchClickedHandler = (inputElRef) => {
  let searchTerm = inputElRef.current.value;
  let productsResult = initProductsDetail.filter(product => product.Name.toLowerCase().includes(searchTerm.toLowerCase()) || product.ProductId.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.Category.toLowerCase().includes(searchTerm.toLowerCase()) || product.MainCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.Description.toLowerCase().includes(searchTerm.toLowerCase()));
    return productsResult.length ? productsResult : null;
}

let cartItems = getCartDetails();

const initialState = {
  // products: [...productsData],
  products: null,
  cartItemCount: cartItems ? Object.values(cartItems).reduce((totalCount, itemCount) => (totalCount + itemCount), 0) : 0,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_PRODUCT_IN_CART:
      addToCartClickHandler(action.productId);
      return {
        ...state,
        cartItemCount: state.cartItemCount + 1
      }
    case actionTypes.SEARCH_FOR_PRODUCTS:
      return {
        ...state,
        products: onSearchClickedHandler(action.inputElRef)
      }
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    default:
      return state;
  }
}

export default reducer;