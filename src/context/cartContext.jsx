import React, { createContext, useState } from 'react';

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addToCart = (magazine, quantity) => {
        const existingMagazine = cart.find(item => item.magazine.id === magazine.id);

        if (!existingMagazine) {
            setCart(prev => [...prev, { magazine, quantity }]);
            setTotal(prev => prev + (magazine.price * quantity));
            setTotalQuantity(prev => prev + quantity);
        } else {
            const updatedCart = cart.map(item => {
                if (item.magazine.id === magazine.id) {
                    return { ...item, quantity: item.quantity + quantity };
                }
                return item;
            });
            setCart(updatedCart);
            setTotal(prev => prev + (magazine.price * quantity));
            setTotalQuantity(prev => prev + quantity);
        }
    };

    const removeFromCart = (magazineId) => {
        const removedMagazine = cart.find(item => item.magazine.id === magazineId);
        if (!removedMagazine) return;

        const updatedCart = cart.filter(item => item.magazine.id !== magazineId);
        setCart(updatedCart);
        setTotal(prev => prev - (removedMagazine.magazine.price * removedMagazine.quantity));
        setTotalQuantity(prev => prev - removedMagazine.quantity);
    };

    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setTotalQuantity(0);
    };

    const contextValue = {
        cart,
        total,
        totalQuantity,
        addToCart,
        removeFromCart,
        clearCart
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

