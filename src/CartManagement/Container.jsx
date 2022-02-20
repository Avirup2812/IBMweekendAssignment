import React from 'react';
import Product from './Product';

export default function Container(props) {
  const { products, onAdd } = props;
  return (
    <container className="allProducts">
      <div className="productHead"> </div>
      <div className="cartPart">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </container>
  );
}
