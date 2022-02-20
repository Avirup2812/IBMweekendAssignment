import Header from './Header';
import Container from './Container';
import Items from './Items';
import { useState } from 'react';
import "./CartManagement.css"
import CartCalc from './CartCalc';

function CartManagement() {
    const { products } = Items;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((el) => el.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((el) =>
                el.id === product.id ? { ...exist, qty: exist.qty + 1 } : el
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((el) => el.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((el) => el.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((el) =>
                el.id === product.id ? { ...exist, qty: exist.qty - 1 } : el
                )
            );
        }
    };
    return (
        <div className="CartManagement">
            
            <Header countCartItems={cartItems.length}></Header>
            <div className="CartProductManupulate">
                <Container products={products} onAdd={onAdd}></Container>
                <CartCalc
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                ></CartCalc>
            </div>
        </div>
    );
}

export default CartManagement;