import React from 'react';
import Product from './Product/Product';

const Products = (props) => {
  return (
    <React.Fragment>
      {props.allProductInfo.map(productInfo => <Product key={productInfo.id} productInfo={productInfo} />)}      
    </React.Fragment>
  )
}

export default Products;