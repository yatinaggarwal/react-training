import React, { Component } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Modal from './components/Modal/Modal';
import Product from './components/Products/Product/Product';
import './App.css';
import * as actionTypes from './store/actions';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    isModalOpen: false,
    quickViewProductDetail: null
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
        <Header onSearchClicked={this.props.onSearchClick} ref={inputElRef} />
        <h3 style={{textAlign: "center"}}>Cart Count: {this.props.cartItemCount}</h3>
        <Products
          allProductsDetails={this.props.products}
          onProductQuickView={this.quickViewClickHandler}
          onAddToCart={this.props.onAddToCart}
        />
        {modalTemplate}
      </div>      
    )
  }
}

let inputElRef = React.createRef();

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cartItemCount: state.cartItemCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (productId) => dispatch({type: actionTypes.ADD_PRODUCT_IN_CART, productId: productId}),
    onSearchClick: () => dispatch({type: actionTypes.SEARCH_FOR_PRODUCTS, inputElRef: inputElRef})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);