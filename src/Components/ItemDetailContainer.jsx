import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getRevistas } from './Revistas';

const getItemDetail = async (itemId) => {
    const revistas = await getRevistas();
    return new Promise(resolve => {
        setTimeout(() => {
            const itemDetail = revistas.find(revista => revista.id === parseInt(itemId));
            resolve(itemDetail);
        }, 2000);
    });
};

function ItemDetailContainer() {
    const [itemDetail, setItemDetail] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getItemDetail(itemId)
            .then(data => {
            setItemDetail(data);
        });
    }, [itemId]);

    return (
        <div>
            {itemDetail ? <ItemDetail item={itemDetail} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer;