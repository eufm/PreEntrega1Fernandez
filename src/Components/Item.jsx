import React from 'react';
import ItemCount from './ItemCount';

function Item({ item }) {
    if (!item) {
        return <div>Cargando...</div>;
    }

    const { title, description, price, pictureUrl } = item;

    const onAdd = (quantity) => {
        console.log(`Añadido al carrito: ${title}, cantidad: ${quantity}`);
    };

    return (
        <div className="item">
            <img src={pictureUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </div>
    );
}

export default Item;
