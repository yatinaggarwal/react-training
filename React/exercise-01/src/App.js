import React, { Component } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Modal from './components/Modal/Modal';
import Product from './components/Products/Product/Product';
import productsData from './data/productsData.json';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.cartItems = this.getCartDetails();
    this.inputElRef = React.createRef();
  }

  state = {
    products: [...productsData],
    cartItemCount: this.cartItems ? Object.values(this.cartItems).reduce((totalCount, itemCount) => (totalCount + itemCount), 0) : 0,
    isModalOpen: false,
    quickViewProductDetail: null
  }

  onSearchClickedHandler = () => {
    // console.log(searchString);

    let searchTerm = this.inputElRef.current.value;
    console.log(searchTerm);
    console.log(productsData);
    let productsResult = productsData.filter(product => product.Name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.Category.toLowerCase().includes(searchTerm.toLowerCase()) || product.MainCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.Description.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(productsResult);
    this.setState({
      products: productsResult      
    });
  }

  getCartDetails = () => {
    let cartItems = localStorage.cartItems ? JSON.parse(localStorage.cartItems) : {};
    // console.log('getCartDetailsFunction', cartItems);
    return cartItems;
  }

  addToCartClickHandler = (productId) => {
    // console.log(productId);
    let cartDetails = this.getCartDetails();
    if(!cartDetails[productId]) {
      cartDetails[productId] = 0;
    }
    cartDetails[productId] += 1;
    // console.log('addToCartClickHandler', cartDetails);
    localStorage.setItem('cartItems', JSON.stringify(cartDetails));
    this.setState(state => {
      return {cartItemCount: state.cartItemCount + 1}
    })
  }

  quickViewClickHandler = (productDetail) => {
    console.log(productDetail);
    this.setState({
      quickViewProductDetail: {...productDetail},
      isModalOpen: true
    });
  }

  modalCloseClickHandler = () => {
    this.setState({
      quickViewProductDetail: null,
      isModalOpen: false
    });
  }

  render() {
    let modalTemplate = null;
    if(this.state.isModalOpen && this.state.quickViewProductDetail) {
      let quickViewProductDetail = {...this.state.quickViewProductDetail};
      modalTemplate = <Modal onModalClose={this.modalCloseClickHandler} productDetail={quickViewProductDetail}>
                        <Product productDetail={quickViewProductDetail} showFullDesc={true} />
                      </Modal>
    }
    return (
      <div>
        <Header onSearchClicked={this.onSearchClickedHandler} ref={this.inputElRef} />
        <h3 style={{textAlign: "center"}}>Cart Count: {this.state.cartItemCount}</h3>
        <Products
          allProductsDetails={this.state.products}
          onProductQuickView={this.quickViewClickHandler}
          onAddToCart={this.addToCartClickHandler}
        />
        {modalTemplate}
      </div>      
    )
  }
}

export default App;