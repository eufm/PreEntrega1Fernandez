import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { db } from "../firebase/config";
import { collection, addDoc, updateDoc, query, where, getDocs } from "firebase/firestore";

const Checkout = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const { cart, clearCart, total } = useContext(CartContext);

    const controlInfo = async (event) => {
        event.preventDefault();

        try {
            if (!name || !surname || !phone || !email || !emailConfirmation) {
                throw new Error("please complete the info");
            }

            if (email !== emailConfirmation) {
                throw new Error("There are mistakes in the email");
            }

            await Promise.all(
                carrito.map(async (prod) => {
                    const productosQuery = query(collection(db, "products"), where("id", "==", prod.producto.id));
                    const productosSnapshot = await getDocs(productosQuery);

                    if (!productosSnapshot.empty) {
                        const primerProducto = productosSnapshot.docs[0];
                        const stockActual = primerProducto.data().stock;

                        await updateDoc(primerProducto.ref, {
                            stock: stockActual - prod.cantidad,
                        });
                    } else {
                        console.log(`No se encontró ningún producto con el ID ${prod.producto.id}`);
                    }
                })
            );

            const order = {
                items: cart.map((prod) => ({
                    id: prod.magazine.id,
                    name: prod.magazine.name,
                    quantity: prod.quantity,
                })),
                total: total,
                date: new Date(),
                name,
                surname,
                phone,
                email,
            };

            if (order.items.length === 0) {
                throw new Error("There are no products in the cart");
            }

            const docRef = await addDoc(collection(db, "orders"), order);

            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error during checkout:", error);
            setError(error.message || "There is an error during the checkout");
        }
    };

    return (
        <div>
            <h2>Checkout</h2>

            <form onSubmit={controlInfo} className="info">
                {
                    cart.map(prod => (
                        <div key={prod.magazine.id}>
                            <p> {prod.magazine.name} - Quantity: {prod.quantity} </p>
                            <p>{prod.magazine.price}</p>
                            <hr />
                        </div>
                    ))
                }
<div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
</div>

<div className="form-group">
    <label htmlFor="surname">Surname</label>
    <input type="text" id="surname" onChange={(e) => setSurname(e.target.value)} />
</div>

<div className="form-group">
    <label htmlFor="phone">Phone</label>
    <input type="text" id="telephonefono" onChange={(e) => setPhone(e.target.value)} />
</div>

<div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
</div>

<div className="form-group">
    <label htmlFor="emailConfirmation">Email Confirmation</label>
    <input type="email" id="emailConfirmation" onChange={(e) => setEmailConfirmation(e.target.value)} />
</div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button type="submit"> Confirm payment </button>

                {
                    orderId && (
                        <strong className="orderId">¡Thanks for buying! Your order number is: {orderId} </strong>
                    )
                }

            </form>
        </div>
    )
}

export default Checkout