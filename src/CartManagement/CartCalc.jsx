import React from 'react';

export default function CartCalc(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;

  return (
    <div className="yourCartPart">
      <div className="yourCartHeading">MY CART</div>
      <hr/>
      <div className="cartItems">
        {cartItems.length === 0 && <div className="emptyCartMsg">Your Cart is empty! <div className="addItemMsg"> Add items to it now</div></div>}
        {cartItems.map((item) => (
          <div key={item.id} className="cartCalcTextAll">
            <div className="cartCalcTextName"><u>{item.name}</u></div>
            <div className="cartCalcTextAddRemove">
              <button onClick={() => onRemove(item)} className="remove">
                Remove Item
              </button>{' '}{item.qty}{' '}
              <button onClick={() => onAdd(item)} className="add">
                Add Item
              </button>
            </div>

            <div className="cartCalcTextRight">
              {item.qty}  x ₹ {item.price.toFixed(2)}
            </div>
            <hr/>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            
            <div className="cartTextAll">
              <div className="cartCalcTextRight">
              <hr/>
                <strong>The Total amount is : ₹ {totalPrice.toFixed(2)}</strong><hr/>
              </div>
            </div>
            <hr />
            <div className="checkoutBtn">
              <button onClick={() => alert('Congratulations!!! Your order of is palced. Thanks for shopping !')}>
                Checkout
              </button>
            </div>
            <hr/>
          </>
        )}
      </div>
    </div>
  );
}