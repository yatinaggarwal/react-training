import * as actionTypes from './actions';
import productsData from '../data/productsData.json';

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
  let productsResult = productsData.filter(product => product.Name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.Category.toLowerCase().includes(searchTerm.toLowerCase()) || product.MainCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.Description.toLowerCase().includes(searchTerm.toLowerCase()));
    return productsResult;
}

let cartItems = getCartDetails();

const initialState = {
  products: [...productsData],
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
    default:
      return state;
  }
}

export default reducer;