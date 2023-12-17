import React, { useState } from 'react';
import { Button, Badge } from '@chakra-ui/react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    return (
        <>
            <div className='countContainer'>
                <div className='classCount'>
                    <Button colorScheme='blackAlpha.900' variant='ghost' onClick={handleDecrement}>
                        -
                    </Button>
                    <Badge colorScheme='blackAlpha.900'>{count}</Badge>
                    <Button colorScheme='blackAlpha.900' variant='ghost' onClick={handleIncrement}>
                        +
                    </Button>
                </div>
                <div className='classCount'>
                    <Button variant='solid' colorScheme='blackAlpha' onClick={() => onAdd(count)}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ItemCount;
