import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeProducts = ({ inventory }) => {
    const { _id, name, img, price, supplier, description, quantity } = inventory

    const navigate = useNavigate()
    const navigateTODetails = id => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <div>



            <div>
                <div className="relative">
                    <div className="relative w-full h-72 rounded-lg overflow-hidden">
                        <img
                            src={img}
                            alt='/'
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                    <div className="relative mt-4">
                        <h3 className="font-medium text-lg text-gray-900">{name}</h3>
                        {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                    </div>
                    <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                        />
                        <p className="relative text-lg font-semibold text-white">$ {price}</p>

                    </div>
                    <p className='text-gray-600 text-sm mt-1 ' >{description}</p>
                    <div className="flex justify-between ">
                        <p className='text-sm ' >Quantity:{quantity}</p>
                        <p className='text-sm '>supplier: {supplier}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <button onClick={() => navigateTODetails(_id)} className='rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white'>Update Product</button>
                  
                </div>
            </div>





























            {/* <div className='shadow-lg rounded-2xl bg-white h-54 p-4'>
            <div className=" gap-4 ">
                <div className="flex-shrink-0 ">
                    <img className=' h-30 mx-auto -full object-cover' src={img} alt="profile" />
                </div>
                <div className="flex flex-col justify-end py-2">
                    <p className=' text-lg'>{name}</p>
                    <p className='text-gray-600 text-sm mt-1 ' >{description}</p>
                   <div className="flex justify-between">
                   <p>price:{price}</p>
                    <p>supplier: {supplier}</p>
                   </div>
                    <button onClick={() => navigateTODetails(_id)} className='rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white'>Update Product</button>
                </div>
            </div>


        </div> */}
        </div>
    );
};

export default HomeProducts;