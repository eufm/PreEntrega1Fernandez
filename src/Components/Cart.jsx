import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart, clearCart, total, totalQuantity } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="cart">
                <h2 className="cartProducts">There are no products in the cart.</h2>
                <Link to="/" className="cartProducts">See products</Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <div className="cartProducts">
                {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
                <h3>Total: ${total}</h3>
                <h3>Total Quantity: {totalQuantity}</h3>
                <button onClick={clearCart}>Clear cart</button>
                <Link to="/checkout">Finish payment</Link>
            </div>
        </div>
    );
}

export default Cart;
