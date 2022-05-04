import React, { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventories, setInventories] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        fetch('https://pure-harbor-66242.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setInventories(data)
                setLoading(false)
            })


    }, [])
    return [inventories, setInventories,isLoading]
};

export default useInventory;