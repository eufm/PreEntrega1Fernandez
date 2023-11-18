import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
    const onAdd = (quantity) => {
        console.log(`Añadido al carrito: ${item.title}, cantidad: ${quantity}`);
    };

    return (
        <div className="item-detail">
            <img src={item.pictureUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </div>
    );
}

export default ItemDetail;
