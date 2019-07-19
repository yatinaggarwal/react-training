import React from 'react';
import logo from '../../../logo.svg';

const Product = (props) => {
  
  return (
    <div className="product-desc">
      {props.showFullDesc ? <h4>{ props.productDetail.Category }/{ props.productDetail.MainCategory }/{ props.productDetail.ProductId }</h4> : <img src={logo} alt="product" />}
      <h2>{ props.productDetail.Name }</h2>
      { props.showFullDesc ? <p>{ props.productDetail.Description }</p> : null }
      <strong><i>&#x20B9; { props.productDetail.Price.toFixed(2) }</i></strong>        
    </div>
  );
}

export default Product;