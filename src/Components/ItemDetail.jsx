import React, { useState, useContext } from 'react';
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Text, Center } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';

const ItemDetail = ({ item }) => {
    const { addToCart } = useContext(CartContext);
    const [addedQuantity, setAddedQuantity] = useState(0);
    const { id, name, price, description, pictureUrl, stock } = item;

    const handleQuantity = (quantity) => {
        toast.success(`You've added ${quantity} item(s) to the cart`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        setAddedQuantity(quantity);
        addToCart(item, quantity);
    };

    return (
        <div className='item-detail'>
            <Card maxW='sm' m='5'>
                <CardBody>
                    <img className='itemImg' src={pictureUrl} alt={name} />
                    <Stack mt='6' spacing='3'>
                        <Center><Heading size='md'>{name}</Heading></Center>
                        <Text textAlign={['center']}>
                            {description}
                        </Text>
                        <Center>
                            <Text color='blackAlpha.800' fontSize='2xl'>
                                ${price}
                            </Text>
                        </Center>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    {addedQuantity > 0 ? (<Link to="/cart">Go to cart</Link>) : (<ButtonGroup spacing='2'>
                        <ItemCount initial={1} stock={stock} onAdd={handleQuantity} />
                    </ButtonGroup>)}
                </CardFooter>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default ItemDetail;
