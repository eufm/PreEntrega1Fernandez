import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

function ItemDetailContainer() {
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        const docRef = doc(db, "magazines", itemId);
        getDoc(docRef)
            .then((resp) => {
                setItemDetail({ ...resp.data(), id: resp.id });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong",
                    text: "We couldn't find the product :(",
                });
            })
            .finally(() => setLoading(false));
    }, [itemId]);

    return (
        <div>
            {loading ? <p>Loading...</p> : itemDetail ? <ItemDetail item={itemDetail} /> : "Product not found"}
        </div>
    );
}

export default ItemDetailContainer;
