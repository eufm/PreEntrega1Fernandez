import React from 'react';
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Item = ({ item }) => {
    const { addToCart } = useContext(CartContext);
    const { id, name, price, pictureUrl } = item;

    const onAdd = (quantity) => {
        addToCart(item, quantity);
    };

    return (
        <div className='item'>
            <Card maxW='sm' m='5'>
                <CardBody>
                    <img className='itemImg' src={pictureUrl} alt={name} />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text color='blackAlpha.800' fontSize='2xl'>
                            ${price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to={`/item/${id}`}>
                            <Button variant='solid' colorScheme='blackAlpha'>
                                Details
                            </Button>
                        </Link>
                        <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Item;

