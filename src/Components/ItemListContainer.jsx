import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from './ItemList';
import Swal from "sweetalert2";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const itemsCollection = categoryId 
            ? query(collection(db, "magazines"), where("category", "==", categoryId)) 
            : collection(db, "magazines");

        const loadingSwal = Swal.fire({
            title: "Loading Products",
            didOpen: () => {
                Swal.showLoading();
            },
        });

        getDocs(itemsCollection)
            .then(snapshot => {
                const docs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                setProducts(docs);
            })
            .catch(error => console.log(error))
            .finally(() => {
                loadingSwal.close();
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <ItemList items={products} />;
};

export default ItemListContainer;

