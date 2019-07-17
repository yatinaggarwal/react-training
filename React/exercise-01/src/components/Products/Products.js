import React from 'react';
import Product from './Product/Product';

const Products = (props) => {

  let { allProductsDetails, onProductQuickView, onAddToCart } = props;
  let productTemplate = null;

  if(allProductsDetails.length) {
    productTemplate = allProductsDetails.map(product => {
      return (
        <li key={product.ProductId}>
          <div className="product-wrapper">
            <Product productDetail={product} showFullDesc={false}/>
            <div>
              <button type="button" onClick={() => onProductQuickView(product)}>Quick View</button>
              <button type="button" onClick={() => onAddToCart(product.ProductId)}>Add To Cart</button>
            </div>
          </div>
        </li>
      );
    });
    productTemplate = <ul>{productTemplate}</ul>
  } else {
    productTemplate = 'No products are currently available';
  }
  return (
    <div>{productTemplate}</div>
  )
}

export default Products;