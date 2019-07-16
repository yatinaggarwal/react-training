import React from 'react';

const Product = (props) => {
  return (
    <div>
      <img src="" alt="product" />
      <p>Name: {props.productInfo.name}</p>
    </div>
  )
}

export default Product;