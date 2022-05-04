import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase';

const UploadProduct = () => {
    const [user] = useAuthState(auth);


    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const supplier = e.target.supplier.value;
        const description = e.target.description.value;
        const quantity = e.target.quantity.value;
        const img = e.target.img.value;
        const email = user.email






        axios.post("https://pure-harbor-66242.herokuapp.com/uploadpd", {
            name, supplier, description, quantity, img, email
        })
            .then((response) => {
                console.log(response);
                toast('Product uploaded')
            });

        console.log(name, supplier, description, quantity, img, email);
        e.target.reset()


    }
    return (
        <div>
            <h1 className='text-2xl text-center my-5'>Upload your Product</h1>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

                    <form className='text-center' onSubmit={handleSubmit}>

                        <input required className='my-4 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="text" name="name" id="name" placeholder='Product name' />

                        <input required className='my-4 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="text" name="supplier" id="supplier" placeholder='supplier name' />

                        <input required className='my-4 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="text" name="description" id="description" placeholder='product description' />
                        <input required className='my-4 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="number" name="quantity" id="quantity" placeholder='quantity' />
                        <input required className='my-4 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="text" name="img" id="img" placeholder='img url' />

                        <input className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700     focus:outline-none dark:focus:ring-blue-800" required type="submit" value="uoload" />

                    </form>



                </div>
            </div>






            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UploadProduct;