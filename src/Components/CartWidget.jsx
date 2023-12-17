import React, { useContext } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to={'/cart'}>
            <BsFillCartFill />
            {totalQuantity > 0 && (
                <span>{totalQuantity}</span>
            )}
        </Link>
    );
}

export default CartWidget;
