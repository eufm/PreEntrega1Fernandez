import React from "react";
import { Button } from 'react-bootstrap'

function CartWidget () {    
    return (
    <>
        <Button
        className="bg-dark border-0 text-white fs-4 btn btn-dark position-relative"
        aria-label="Ver carrito con 2 items"
        >
        <i className="bi bi-cart-fill fs-4"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 2 </span>
        </Button>
    </>
    );
}

export default CartWidget;