import React, { useEffect, useState } from 'react';
import Inventory from './Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useState([])

    useEffect(() => {

        fetch('books.json')
            .then(res => res.json())
            .then(data => setInventories(data))

    }, [])
    return (
        <div>
                 <div className='w-90vh px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className="text-center">
                <h1 className='text-4xl py-10 ' > our product</h1>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </div>
        </div>
    );
};

export default Inventories;