import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleOnAdd = () => {
        if (count > 0 && count <= stock) {
            onAdd(count);
        }
    };

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleOnAdd}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
