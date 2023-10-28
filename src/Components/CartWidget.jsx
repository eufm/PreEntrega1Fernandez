import React from "react";
import { Button } from 'react-boostrap'

function CartWidget () {    
    return (
    <>
        <Button
        className="bg-dark border-0 text-white fs-4 btn btn-dark"
        >

        <i className="bi bi-cart"></i>
        
        <span className="position-absolute start-75 translate-middle badge rounded-pill bg-danger badge-Cart-Canvas"> 2 </span>
        </Button>
    </>
    );
}

export default CartWidget;