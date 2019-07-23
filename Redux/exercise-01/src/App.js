import React, { Component } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Modal from './components/Modal/Modal';
import Product from './components/Products/Product/Product';
import './App.css';
import * as Actions from './store/actions';
import { connect } from 'react-redux';

// https://my-json-server.typicode.com/yatinaggarwal/react-training/products

class App extends Component {

  state = {
    isModalOpen: false,
    quickViewProductDetail: null
  }

  componentDidMount() {
    this.props.onInitProducts();
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
        <Header onSearchClicked={this.props.onSearchClick.bind(null, inputElRef)} ref={inputElRef} />
        <section>
          <h3 style={{textAlign: "center"}}>Cart Count: {this.props.cartItemCount}</h3>
        </section>
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
    onSearchClick: (searchInputRef) => dispatch(Actions.searchForProducts(searchInputRef)),
    onAddToCart: (productId) => dispatch(Actions.addProductInCart(productId)),
    onInitProducts: () => dispatch(Actions.initProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);