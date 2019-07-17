import React from 'react';

const Product = (props) => {
  
  return (
    <div className="product-desc">
      <h4>{ props.productDetail.Category }/{ props.productDetail.MainCategory }/{ props.productDetail.ProductId }</h4>
      <h2>{ props.productDetail.Name }</h2>
      { props.showFullDesc ? <p>{ props.productDetail.Description }</p> : null }
      <span>{ props.productDetail.Price }</span>        
    </div>
  )
}

export default Product;