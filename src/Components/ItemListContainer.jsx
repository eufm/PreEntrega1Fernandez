import React, { useState, useEffect } from "react";
import ItemList from './ItemList';
import { getRevistas } from './Revistas';
import { useParams } from 'react-router-dom';


function ItemListContainer() {
    const [revistas, setRevistas] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getRevistas(categoryId).then(data => {
            setRevistas(data);
        });
    }, [categoryId]);

    return <ItemList items={revistas} />;
}

export default ItemListContainer;