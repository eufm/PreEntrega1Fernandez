import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartItem = ({ id, name, price, quantity }) => {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <hr />
        </div>
    );
}

export default CartItem;
