import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { id } = useParams()
    // console.log(id);
    const [product, setProduct] = useState({})
    const { description, img, name, supplier, quantity } = product

    useEffect(() => {
        fetch(`http://localhost:4000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProduct(data)
            })
    }, [])


    const updateName=(e)=>{
        e.preventDefault()
        const quantity = e.target.quantity.value
        console.log(quantity);

        fetch(`http://localhost:4000/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({quantity:quantity}),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));


    }


    return (
        <div className="bg-white">
            <div className="pt-6 pb-16 sm:pb-24">

                <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                        <div className="lg:col-start-8 lg:col-span-5">
                            <h1 className="text-xl font-medium text-gray-900">{name}</h1>
                            <div className="mt-4">

                                <div className="flex items-center">
                                    <p className=" text-gray-700">
                                        Supplier:
                                    </p>

                                    <div className="ml-4 flex">
                                        <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                            {supplier}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* img  */}
                        <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
                            <div className="text-center">
                                <img className='w-1/2 mx-auto ' src={img} alt="" />
                            </div>
                        </div>

                        <div className="mt-8 lg:col-span-5">
                            <form onSubmit={updateName}>

                                <div>
                                    <h2 className="text-sm font-medium text-gray-900">Quantity:{quantity}</h2>
                                    <input name='quantity' type="text" placeholder='add ' />
                                </div>

                                <button
                                    type="submit"
                                    className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    add
                                </button>

                              
                            

                            </form>


                           

                            {/* Product details */}
                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">{description}</h2>


                            </div>





                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;