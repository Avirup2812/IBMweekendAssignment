import React from 'react';

export default function Product(props) {
    const { product, onAdd } = props;
    return (
        <div className="productDisplay">
            <div className="productPic"><img className="productImg" src={product.image} alt={product.name} /></div>
            <div className="productDescription">
                <div className="productName">{product.name}
                          <div> <span className="productSpec">{product.description}</span> </div></div>
                <div className="productPrice">₹ {product.price}</div>
                <div className="addToCart"> <button onClick={() => onAdd(product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}