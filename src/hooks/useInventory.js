import React, { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventories, setInventories] = useState([])

    useEffect(() => {

        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setInventories(data))

    }, [])
    return [inventories, setInventories]
};

export default useInventory;