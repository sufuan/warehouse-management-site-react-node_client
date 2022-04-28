import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { id } = useParams()
    console.log(id);



    

    return (
        <div>
            <p className='font-semibold p-5 text-center'> you have chosen service no {id}</p>
            <section
                aria-labelledby="payment-and-shipping-heading"
                className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
            >


               
            </section>
        </div>
    );
};

export default InventoryDetails;