import React, { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventories, setInventories] = useState([])

    useEffect(() => {

        fetch('books.json')
            .then(res => res.json())
            .then(data => setInventories(data))

    }, [])
    return [inventories, setInventories]
};

export default useInventory;